"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, Share2, Save, Calendar, Clock, DollarSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceDetails } from "./ServiceDetails";
import { Mentor } from "@/types";

interface MentorProfileProps {
  mentor: Mentor;
}

export const MentorProfile: React.FC<MentorProfileProps> = ({ mentor }) => {
  const [activeService, setActiveService] = useState(
    mentor.services[0]?.id || ""
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="relative h-20 w-20 overflow-hidden rounded-md mr-4">
              <Image
                src={mentor.image}
                alt={mentor.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{mentor.name}</h2>
                  <p className="text-gray-600">
                    {mentor.position} at {mentor.company}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {mentor.experience.join(" | ")}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="services">
        <TabsList className="w-full mb-6">
          <TabsTrigger value="services" className="flex-1">
            Services
          </TabsTrigger>
          <TabsTrigger value="reviews" className="flex-1">
            Reviews
          </TabsTrigger>
          <TabsTrigger value="about" className="flex-1">
            About
          </TabsTrigger>
          <TabsTrigger value="sessions" className="flex-1">
            Sessions
          </TabsTrigger>
          <TabsTrigger value="career" className="flex-1">
            Career
          </TabsTrigger>
        </TabsList>

        <TabsContent value="services">
          {mentor.services.map((service) => (
            <Card key={service.id} className="mb-4">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {service.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gray-800 text-white hover:bg-gray-700"
                    onClick={() => setActiveService(service.id)}
                  >
                    View details
                  </Button>
                </div>

                <div className="flex items-center mt-4 text-sm">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
                    <span>₹ {service.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="reviews">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <h3 className="text-lg font-semibold mr-2">Reviews</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{mentor.rating}</span>
                <span className="text-gray-500 ml-1">
                  ({mentor.reviews.length} reviews)
                </span>
              </div>
            </div>

            {mentor.reviews.map((review) => (
              <Card key={review.id} className="mb-4">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="font-medium ml-1">{review.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{review.comment}</p>
                  <div className="flex items-center">
                    {review.authorAvatar ? (
                      <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                        <Image
                          src={review.authorAvatar}
                          alt={review.author}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                        <span className="text-xs text-gray-500">
                          {review.author.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-medium">{review.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-gray-600">
                Experienced software engineer with a passion for mentoring
                junior developers. Specializing in{" "}
                {mentor.skills.slice(0, 3).join(", ")} and more.
              </p>

              <h3 className="font-semibold mt-4 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Past Sessions</h3>
              <p className="text-sm text-gray-600">No past sessions yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="career">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Career History</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium">{mentor.position}</h4>
                  <p className="text-sm text-gray-600">
                    {mentor.company} · Present
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Software Engineer</h4>
                  <p className="text-sm text-gray-600">
                    Previous Company · 2020-2022
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {activeService && (
        <ServiceDetails
          mentor={mentor}
          serviceId={activeService}
          onClose={() => setActiveService("")}
        />
      )}
    </div>
  );
};
