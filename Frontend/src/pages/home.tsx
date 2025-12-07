import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import CategoryTabs from "@/components/category-tabs";
import ArticleCard from "@/components/article-card";
import Newsletter from "@/components/newsletter";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import type { Category } from "@shared/schema";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [sortBy, setSortBy] = useState("latest");
  const [displayLimit, setDisplayLimit] = useState(9); // Show 9 articles initially

  const { data: articles, isLoading } = useQuery({
    queryKey: ["/api/articles", selectedCategory === "all" ? undefined : selectedCategory],
    queryFn: () => api.getArticles(selectedCategory === "all" ? undefined : selectedCategory),
  });

  const handleLoadMore = () => {
    setDisplayLimit(prev => prev + 9); // Load 9 more articles each time
  };

  // Get currently displayed articles
  const displayedArticles = articles?.slice(0, displayLimit) || [];
  const hasMore = articles && articles.length > displayLimit;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        
        {/* Articles Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold dark:text-white">Latest Articles</h2>
              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Articles Grid */}
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6 space-y-3">
                      <div className="flex justify-between">
                        <Skeleton className="w-20 h-6 rounded-full" />
                        <Skeleton className="w-16 h-4" />
                      </div>
                      <Skeleton className="w-full h-6" />
                      <Skeleton className="w-3/4 h-6" />
                      <Skeleton className="w-full h-12" />
                      <div className="flex justify-between">
                        <Skeleton className="w-24 h-4" />
                        <Skeleton className="w-12 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : displayedArticles && displayedArticles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
                
                {/* Load More Button */}
                {hasMore && (
                  <div className="text-center mt-12">
                    <Button
                      onClick={handleLoadMore}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      Load More Articles
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Showing {displayedArticles.length} of {articles?.length} articles
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found.</p>
              </div>
            )}
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
