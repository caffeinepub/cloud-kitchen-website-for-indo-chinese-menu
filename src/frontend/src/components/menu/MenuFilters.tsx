import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface MenuFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showVegOnly: boolean;
  onVegToggle: () => void;
  showNonVegOnly: boolean;
  onNonVegToggle: () => void;
}

export function MenuFilters({
  searchQuery,
  onSearchChange,
  showVegOnly,
  onVegToggle,
  showNonVegOnly,
  onNonVegToggle
}: MenuFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={showVegOnly ? 'default' : 'outline'}
          size="sm"
          onClick={onVegToggle}
          className="gap-2"
        >
          <span className="text-base">🟢</span>
          Veg Only
        </Button>
        <Button
          variant={showNonVegOnly ? 'default' : 'outline'}
          size="sm"
          onClick={onNonVegToggle}
          className="gap-2"
        >
          <span className="text-base">🔴</span>
          Non-Veg Only
        </Button>
        {(showVegOnly || showNonVegOnly || searchQuery) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onSearchChange('');
              if (showVegOnly) onVegToggle();
              if (showNonVegOnly) onNonVegToggle();
            }}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
}
