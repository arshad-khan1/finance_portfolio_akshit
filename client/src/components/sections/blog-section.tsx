import { forwardRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getQueryFn } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, Clock } from 'lucide-react';

interface BlogSectionProps {
  ref: (el: HTMLDivElement) => void;
}

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

const BlogSection = forwardRef<HTMLDivElement, Omit<BlogSectionProps, 'ref'>>((props, ref) => {
  // Fetch blog posts
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: getQueryFn<{ success: boolean; posts: BlogPost[] }>({ on401: 'returnNull' }),
  });
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section 
      id="blog" 
      className="py-20 bg-lightBg section-fade-in"
      ref={ref as any}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">
          Finance <span className="text-accent">Insights</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Expert analysis and perspectives on financial markets, investment strategies, and industry trends.
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-destructive">Failed to load blog posts. Please try again later.</p>
          </div>
        ) : data?.posts && data.posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.posts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent">{post.category}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" className="text-accent hover:text-accent-foreground">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Article
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available at the moment.</p>
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-2 border-primary hover:border-accent hover:text-accent">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";
export default BlogSection;