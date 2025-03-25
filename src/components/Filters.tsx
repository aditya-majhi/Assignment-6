"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, X } from "lucide-react";
import { FilterOption } from "@/types";

interface FiltersProps {
  options: FilterOption[];
  onFilterChange: (selectedFilters: FilterOption[]) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  options,
  onFilterChange,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<FilterOption[]>([]);

  const handleFilterToggle = (filter: FilterOption) => {
    const isSelected = selectedFilters.some((f) => f.id === filter.id);

    if (isSelected) {
      setSelectedFilters(selectedFilters.filter((f) => f.id !== filter.id));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleApplyFilters = () => {
    onFilterChange(selectedFilters);
  };

  const removeFilter = (filterId: string) => {
    const updatedFilters = selectedFilters.filter((f) => f.id !== filterId);
    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Role <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {options
              .filter((option) => option.category === "role")
              .map((option) => (
                <DropdownMenuItem
                  key={option.id}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={option.id}
                    checked={selectedFilters.some((f) => f.id === option.id)}
                    onCheckedChange={() => handleFilterToggle(option)}
                  />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </DropdownMenuItem>
              ))}
            <div className="p-2">
              <Button onClick={handleApplyFilters} className="w-full">
                Apply
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Company <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Domain</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {options
              .filter((option) => option.category === "company")
              .map((option) => (
                <DropdownMenuItem
                  key={option.id}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={option.id}
                    checked={selectedFilters.some((f) => f.id === option.id)}
                    onCheckedChange={() => handleFilterToggle(option)}
                  />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </DropdownMenuItem>
              ))}
            <div className="p-2">
              <Button onClick={handleApplyFilters} className="w-full">
                Apply
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="outline">
          Slot <ChevronDown />
        </Button>
        <Button variant="outline">
          Rating <ChevronDown />
        </Button>
      </div>

      {selectedFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedFilters.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center bg-gray-200 text-gray-800 text-sm rounded-full px-3 py-1"
            >
              <span>{filter.label}</span>
              <button
                onClick={() => removeFilter(filter.id)}
                className="ml-2 focus:outline-none"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
