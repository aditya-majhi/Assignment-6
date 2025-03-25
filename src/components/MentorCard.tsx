import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mentor } from "@/types";

interface MentorCardProps {
  mentor: Mentor;
}

export const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  return (
    <Card className="mb-4 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex p-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-md mr-4">
            <Image
              src={mentor.image}
              alt={mentor.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{mentor.name}</h3>
                <p className="text-sm text-gray-600">
                  {mentor.position} at {mentor.company}
                </p>
              </div>
              <Link href={`/profile/${mentor.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-gray-800 text-white hover:bg-gray-700"
                >
                  View profile
                </Button>
              </Link>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-500">
                {mentor.experience.join(" | ")}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
