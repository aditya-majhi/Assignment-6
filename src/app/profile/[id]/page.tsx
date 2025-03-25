import { MentorProfile } from "@/components/MentorProfile";
import { mentorsData } from "@/data/mentors";

interface PageProps {
  param: { id: string };
  //   searchParams: { [key: string]: string | string[] | undefined };
}

export default function MentorPage({ param }: PageProps) {
  const index = parseInt(param.id, 10);
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
