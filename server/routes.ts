import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema, blogPostSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body against the schema
      const data = contactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(data);
      
      // Return success response
      return res.status(200).json({ 
        success: true, 
        message: "Contact message received successfully",
        id: message.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Blog routes
  // Get all blog posts
  app.get('/api/blog/posts', async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      return res.status(200).json({ 
        success: true, 
        posts
      });
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching blog posts" 
      });
    }
  });

  // Get a single blog post by slug
  app.get('/api/blog/posts/:slug', async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ 
          success: false, 
          message: "Blog post not found" 
        });
      }
      
      return res.status(200).json({ 
        success: true, 
        post
      });
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching the blog post" 
      });
    }
  });

  // Create a new blog post
  app.post('/api/blog/posts', async (req, res) => {
    try {
      // Validate the request body against the schema
      const data = blogPostSchema.parse(req.body);
      
      // Store the blog post
      const post = await storage.createBlogPost(data);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Blog post created successfully",
        id: post.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error creating blog post:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while creating the blog post" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
