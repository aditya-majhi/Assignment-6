"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Clock,
  DollarSign,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Mentor } from "@/types";

interface ServiceDetailsProps {
  mentor: Mentor;
  serviceId: string;
  onClose: () => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  mentor,
  serviceId,
  onClose,
}) => {
  const service = mentor.services.find((s) => s.id === serviceId);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  if (!service) return null;

  const timeSlots = [
    "6:00 - 6:30PM",
    "7:00 - 7:30PM",
    "8:00 - 8:30PM",
    "9:00 - 9:30PM",
    "10:00 - 10:30PM",
    "11:00 - 11:30PM",
    "12:00 - 12:30PM",
    "1:00 - 1:30PM",
    "2:00 - 2:30PM",
    "3:00 - 3:30PM",
  ];

  const handleConfirmBooking = () => {
    // Here would be the logic to book the session
    console.log("Booking confirmed for:", {
      mentor: mentor.name,
      service: service.title,
      date: date,
      timeSlot: selectedTimeSlot,
    });
    onClose();
  };

  return (
    <div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
        <p className="text-gray-600 mb-4">{service.description}</p>

        <div className="mb-4">
          <h3 className="font-medium mb-2">Assist you with</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>I can help you figure out your next steps.</li>
            <li>
              I can guide you through career transitions and help you explore
              new fields.
            </li>
            <li>
              Need advice on software engineering roles? I'll help you navigate
              your options.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <p className="text-sm font-medium">Duration</p>
              <p className="text-sm text-gray-600">{service.duration}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
            <div>
              <p className="text-sm font-medium">Amount</p>
              <p className="text-sm text-gray-600">₹ {service.price}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium mb-3">Slot</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm mb-2">Date</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {date ? format(date, "PPP") : "Select date"}
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <p className="text-sm mb-2">Time</p>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.slice(0, 8).map((slot, index) => (
                  <Button
                    key={index}
                    variant={selectedTimeSlot === slot ? "default" : "outline"}
                    className={`text-xs ${
                      selectedTimeSlot === slot ? "bg-gray-800" : ""
                    }`}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm mb-2">Timezone</p>
          <Button variant="outline" className="w-full justify-between">
            GMT +5:30 Chennai, Kolkata, Mumbai, New Delhi(IST)
            <ChevronRight className="h-4 w-4 opacity-50" />
          </Button>
        </div>

        <Button
          onClick={handleConfirmBooking}
          className="w-full bg-gray-800 hover:bg-gray-700"
          disabled={!date || !selectedTimeSlot}
        >
          Confirm details
        </Button>
      </div>
    </div>
  );
};
