import { mentorsData } from "@/data/mentors";
import { MentorProfile } from "@/components/MentorProfile";
import { Metadata } from "next";

// Generate static paths based on the mentorsData array index
export async function generateStaticParams() {
  return mentorsData.map((_, index) => ({
    id: index.toString(),
  }));
}

// Optional: Generate metadata dynamically based on the mentor details
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const index = parseInt(params.id, 10);
  const mentor = mentorsData[index];

  return {
    title: mentor ? `${mentor.name} | Mentorship Platform` : "Mentor not found",
    description: mentor
      ? `Learn from ${mentor.name}, ${mentor.position} at ${mentor.company}`
      : "",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function MentorPage({ params }: { params: { id: string } }) {
  const index = parseInt(params.id, 10);
  const mentor = mentorsData[index];

  if (!mentor) {
    return <div className="p-4">Mentor not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white p-4 shadow-sm">
          <div className="flex items-center">
            <button className="mr-2 text-gray-600">&larr;</button>
            <h1 className="text-lg font-medium">Back</h1>
          </div>
        </header>
        <MentorProfile mentor={mentor} />
      </div>
    </main>
  );
}
