import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MenuFilters } from './MenuFilters';
import { MenuItemCard } from './MenuItemCard';
import { useMenuFiltering } from '@/hooks/useMenuFiltering';
import { menuCategories } from '@/data/menu';
import { AlertCircle } from 'lucide-react';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const {
    searchQuery,
    setSearchQuery,
    showVegOnly,
    setShowVegOnly,
    showNonVegOnly,
    setShowNonVegOnly,
    filteredItems,
    isEmpty
  } = useMenuFiltering();

  const categoryItems = filteredItems.filter((item) => item.category === activeCategory);
  const showEmptyState = isEmpty || categoryItems.length === 0;

  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Our Menu
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our delicious selection of Indo-Chinese favorites
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <MenuFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            showVegOnly={showVegOnly}
            onVegToggle={() => setShowVegOnly(!showVegOnly)}
            showNonVegOnly={showNonVegOnly}
            onNonVegToggle={() => setShowNonVegOnly(!showNonVegOnly)}
          />

          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="gap-1.5">
                  <span className="hidden sm:inline">{category.icon}</span>
                  <span className="text-xs sm:text-sm">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                {showEmptyState ? (
                  <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed py-16 text-center">
                    <AlertCircle className="mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 font-display text-lg font-semibold">No items found</h3>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your filters or search query
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
