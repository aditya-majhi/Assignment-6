import { NextPage } from "next";
import { MentorsList } from "@/components/MentorList";
import { mentorsData } from "@/data/mentors";
import { filterOptions } from "@/data/filters";
import { recentSearches, trendingSearches } from "@/data/search";

export const metadata = {
  title: "Mentorship Platform",
  description: "Find mentors in tech and business",
  icons: {
    icon: "/favicon.ico",
  },
};

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white p-4 shadow-sm">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Mentors</h1>
            <button className="text-sm text-blue-600">Become a mentor</button>
          </div>
        </header>

        <MentorsList
          mentors={mentorsData}
          recentSearches={recentSearches}
          trendingSearches={trendingSearches}
          filterOptions={filterOptions}
        />
      </div>
    </main>
  );
};

export default Home;
