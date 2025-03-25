import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Clock, TrendingUp } from "lucide-react";
import { SearchHistory } from "@/types";

interface SearchProps {
  recentSearches: SearchHistory[];
  trendingSearches: SearchHistory[];
  onSearch: (term: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  recentSearches,
  trendingSearches,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleSearchItemClick = (term: string) => {
    setSearchTerm(term);
    onSearch(term);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownOpen(true)}
          className="w-full pl-10"
        />
        <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </form>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900">
                Recent search
              </h3>
              <ul className="mt-2 space-y-2">
                {recentSearches.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
                    onClick={() => handleSearchItemClick(item.term)}
                  >
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm">{item.term}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Trending searches
              </h3>
              <ul className="mt-2 space-y-2">
                {trendingSearches.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center cursor-pointer hover:bg-gray-100 p-1 rounded"
                    onClick={() => handleSearchItemClick(item.term)}
                  >
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm">{item.term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
