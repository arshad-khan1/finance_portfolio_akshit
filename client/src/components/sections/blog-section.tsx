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
      className="py-16 md:py-20 bg-lightBg section-fade-in px-4 md:px-6"
      ref={ref as any}
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3 md:mb-4 text-center">
          Finance <span className="text-accent">Insights</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm md:text-base mb-8 md:mb-12 max-w-2xl mx-auto">
          Expert analysis and perspectives on financial markets, investment strategies, and industry trends.
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-8 md:py-12">
            <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-accent"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-destructive text-sm md:text-base">Failed to load blog posts. Please try again later.</p>
          </div>
        ) : data?.posts && data.posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {data.posts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <Badge className="absolute top-2 right-2 bg-accent text-xs md:text-sm">{post.category}</Badge>
                </div>
                <CardHeader className="pb-1 md:pb-2 pt-3 md:pt-4 px-3 md:px-5">
                  <div className="flex items-center text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow py-2 px-3 md:px-5">
                  <CardDescription className="text-sm md:text-base line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="pt-0 pb-3 md:pb-4 px-3 md:px-5">
                  <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground px-2 md:px-3 h-8 md:h-9">
                    <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    <span className="text-xs md:text-sm">Read Article</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-muted-foreground text-sm md:text-base">No blog posts available at the moment.</p>
          </div>
        )}
        
        <div className="flex justify-center mt-8 md:mt-12">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-2 border-primary hover:border-accent hover:text-accent text-xs md:text-sm h-9 md:h-10"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
});

BlogSection.displayName = "BlogSection";
export default BlogSection;