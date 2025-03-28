import { 
  users, 
  type User, 
  type InsertUser,
  contactMessages,
  type ContactMessage,
  type InsertContactMessage,
  blogPosts,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  // Blog related methods
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostById(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private blogPosts: Map<number, BlogPost>;
  userCurrentId: number;
  messageCurrentId: number;
  blogPostCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.blogPosts = new Map();
    this.userCurrentId = 1;
    this.messageCurrentId = 1;
    this.blogPostCurrentId = 1;
    
    // Add some sample blog posts
    this.addSampleBlogPosts();
  }

  private addSampleBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Understanding Market Volatility: A Guide for New Investors",
        slug: "understanding-market-volatility",
        excerpt: "Learn how to navigate market volatility and make informed investment decisions during turbulent times.",
        content: "Market volatility is an inevitable aspect of investing that often intimidates newcomers to the financial markets. However, understanding the nature of volatility and developing strategies to manage it can transform it from a source of anxiety into an opportunity for growth...",
        category: "Investment Strategies",
        coverImage: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        published: true
      },
      {
        title: "The Impact of Rising Interest Rates on Equity Valuations",
        slug: "impact-rising-interest-rates-equity-valuations",
        excerpt: "Explore how changes in interest rates affect stock market valuations and what it means for your portfolio.",
        content: "Interest rates have a profound impact on equity valuations, influencing everything from corporate borrowing costs to investor sentiment. When central banks adjust interest rates, the ripple effects can transform market dynamics and alter the attractiveness of different asset classes...",
        category: "Market Analysis",
        coverImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        published: true
      },
      {
        title: "ESG Investing: Beyond the Hype",
        slug: "esg-investing-beyond-hype",
        excerpt: "Discover the real impact of ESG investing and how to build a sustainable portfolio that aligns with your values.",
        content: "Environmental, Social, and Governance (ESG) investing has moved from a niche approach to a mainstream investment strategy. But what lies beyond the marketing hype, and how can investors distinguish between meaningful ESG integration and 'greenwashing'?...",
        category: "Sustainable Finance",
        coverImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        published: true
      }
    ];
    
    samplePosts.forEach(post => {
      this.createBlogPost(post);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageCurrentId++;
    const createdAt = new Date();
    
    // Create message object explicitly without spread operator to ensure type safety
    const message: ContactMessage = {
      id,
      name: insertMessage.name,
      email: insertMessage.email,
      subject: insertMessage.subject,
      message: insertMessage.message,
      company: insertMessage.company ?? null, // Ensure null if undefined
      createdAt
    };
    
    this.contactMessages.set(id, message);
    return message;
  }
  
  // Blog methods
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  
  async getBlogPostById(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostCurrentId++;
    const now = new Date();
    
    const post: BlogPost = {
      id,
      title: insertPost.title,
      slug: insertPost.slug,
      excerpt: insertPost.excerpt,
      content: insertPost.content,
      category: insertPost.category,
      coverImage: insertPost.coverImage,
      published: insertPost.published ?? true,
      publishedAt: now,
      updatedAt: now
    };
    
    this.blogPosts.set(id, post);
    return post;
  }
}

export const storage = new MemStorage();
