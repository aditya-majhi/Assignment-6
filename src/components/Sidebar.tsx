import React from "react";
import { Button } from "./ui/button";
import { Briefcase, Clock, MessageSquareText, User } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-[15%] flex flex-col gap-3 p-4 bg-gray-100">
      <Button variant="ghost" className="text-left justify-start">
        <User className="h-4 w-4" />
        Mentor
      </Button>
      <Button variant="ghost" className="text-left justify-start">
        <Briefcase className="h-4 w-4" />
        Job
      </Button>
      <Button variant="ghost" className="text-left justify-start">
        <Clock className="h-4 w-4" />
        Booking
      </Button>
      <Button variant="ghost" className="text-left justify-start">
        <MessageSquareText className="h-4 w-4" />
        Priority DM
      </Button>
    </div>
  );
};

export default Sidebar;
