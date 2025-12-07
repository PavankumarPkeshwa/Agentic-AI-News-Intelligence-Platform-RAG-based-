import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { api } from "@/lib/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ArticleCard from "@/components/article-card";
import Newsletter from "@/components/newsletter";
import { Skeleton } from "@/components/ui/skeleton";
import { categories, type Category } from "@shared/schema";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:category");
  const categoryParam = params?.category;

  // Capitalize first letter to match our Category type
  const category = categoryParam ?
    (categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)) as Category :
    undefined;

  // Validate category
  const isValidCategory = category && categories.includes(category);

  const { data: articles, isLoading } = useQuery({
    queryKey: ["/api/articles", category],
    queryFn: () => api.getArticles(category),
    enabled: isValidCategory,
  });

  console.log("Category param:", category); // verify value
  api.getArticles(category).then((data) => {
    console.log("Fetched articles:", data); // see if anything returns
  });

  const getCategoryColor = (cat: string) => {
    const colorMap: Record<string, string> = {
      Technology: "text-tech",
      Lifestyle: "text-lifestyle",
      Sports: "text-sports",
      Fitness: "text-fitness",
      Food: "text-food",
      Travel: "text-travel",
    };
    return colorMap[cat] || "text-gray-700";
  };

  const getCategoryHeroImage = (cat: string) => {
    const imageMap: Record<string, string> = {
      Technology: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90",
      Business: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90",
      Science: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90",
      Health: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90",
      Sports: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90",
      Entertainment: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90",
    };
    return imageMap[cat] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1000&q=90";
  };

  if (!isValidCategory) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Category Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400">The category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main>
        {/* Category Hero */}
        <section className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={getCategoryHeroImage(category)}
              alt={`${category} category`}
              className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in">
                {category}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-lg font-light">
                Discover the latest {category.toLowerCase()} news and insights
              </p>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold dark:text-white">
                <span className={getCategoryColor(category)}>{category}</span> Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {articles ? `${articles.length} articles` : ''}
              </p>
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
            ) : articles && articles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No {category.toLowerCase()} articles found.</p>
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
