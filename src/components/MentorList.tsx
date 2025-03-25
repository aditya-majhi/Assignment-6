"use client";
import React, { useState, useEffect } from "react";
import { MentorCard } from "./MentorCard";
import { Search } from "./SearchBar";
import { Filters } from "./Filters";
import { Mentor, FilterOption, SearchHistory } from "@/types";

interface MentorsListProps {
  mentors: Mentor[];
  recentSearches: SearchHistory[];
  trendingSearches: SearchHistory[];
  filterOptions: FilterOption[];
}

export const MentorsList: React.FC<MentorsListProps> = ({
  mentors,
  recentSearches,
  trendingSearches,
  filterOptions,
}) => {
  const [filteredMentors, setFilteredMentors] = useState<Mentor[]>(mentors);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterOption[]>([]);

  useEffect(() => {
    let result = mentors;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          mentor.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filters
    if (activeFilters.length > 0) {
      const roleFilters = activeFilters
        .filter((f) => f.category === "role")
        .map((f) => f.value);
      const domainFilters = activeFilters
        .filter((f) => f.category === "company")
        .map((f) => f.value);

      if (roleFilters.length > 0) {
        result = result.filter((mentor) =>
          mentor.position
            .toLowerCase()
            .split(" ")
            .some((p) => roleFilters.some((rf) => p.includes(rf.toLowerCase())))
        );
      }

      if (domainFilters.length > 0) {
        result = result.filter((mentor) =>
          mentor.skills.some((skill) =>
            domainFilters.some((df) =>
              skill.toLowerCase().includes(df.toLowerCase())
            )
          )
        );
      }
    }

    setFilteredMentors(result);
  }, [mentors, searchTerm, activeFilters]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (selectedFilters: FilterOption[]) => {
    setActiveFilters(selectedFilters);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center w-full">
        <div className="mb-6 w-[40%]">
          <Search
            recentSearches={recentSearches}
            trendingSearches={trendingSearches}
            onSearch={handleSearch}
          />
        </div>

        <div className="mb-6">
          <Filters
            options={filterOptions}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      <div>
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No mentors found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
