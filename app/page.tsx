"use client";

import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";

export default function QuizLanding() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}

        <Hero />
        <Features />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
