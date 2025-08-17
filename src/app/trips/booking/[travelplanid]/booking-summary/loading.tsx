"use client";
import React from "react";
// import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

const BookingSummaryLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <Loader2
      className="h-12 w-12 text-purple-600 animate-spin"
      aria-label="Loading"
    />
    <p className="text-xl font-bold font-instrument text-black">
      Redirecting to Booking Summary...
    </p>
  </div>
);

export default BookingSummaryLoader;
