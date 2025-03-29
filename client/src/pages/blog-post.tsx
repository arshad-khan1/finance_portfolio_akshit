import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { getQueryFn } from '@/lib/queryClient';
import { ArrowLeft, Calendar, User, Clock, Share2, BookmarkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
}

export default function BlogPostDetail() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';

  // Fetch blog post
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog/posts', slug],
    queryFn: getQueryFn<{ success: boolean; post: BlogPost }>({ on401: 'returnNull' }),
    enabled: !!slug,
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Estimate reading time
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <Skeleton className="h-8 w-32 mb-8" />
        <Skeleton className="h-64 w-full mb-8" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-48 mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
    );
  }

  if (error || !data?.post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const post = data.post;
  const readingTime = calculateReadingTime(post.content);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto py-12">
        <Link href="/#blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
              <Badge className="absolute top-4 right-4 bg-accent">{post.category}</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>Akshit Bakshi</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-lg mb-6 font-medium">{post.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <Separator className="mb-4" />

              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="/assets/akshit_profile_photo.jpeg"
                    alt="Akshit Bakshi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Akshit Bakshi</h4>
                  <p className="text-sm text-muted-foreground">MBA Finance Professional</p>
                </div>
              </div>

              <p className="text-sm mb-6">
                Finance professional with expertise in investment banking, financial analysis, and corporate valuation.
                Currently pursuing MBA with focus on finance and investment management.
              </p>

              <Separator className="my-4" />

              <h3 className="text-lg font-bold mb-3">Share this article</h3>
              <div className="flex space-x-3">
                <Button size="icon" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Button>
                <Button size="icon" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </Button>
                <Button size="icon" variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </Button>
              </div>

              <Button className="w-full mt-4" variant="outline">
                <BookmarkIcon className="mr-2 h-4 w-4" />
                Save Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}