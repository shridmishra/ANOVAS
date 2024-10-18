"use client"
import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Intro } from "@/components/ui/Intro";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Contact";
import { WhatsAppStickyIcon } from "@/components/WhatsAppIcon";
import { ServicesLoop } from "@/components/ServiceLoop";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import { SkeletonLoader } from "@/components/Skeleton"; // Import the Skeleton Loader

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust or remove this timeout based on your actual data fetch)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <Navbar />
      <Hero />
      <ServicesLoop />
      <Projects />
      <Testimonial />
      <ContactForm />
      <Footer />
      <WhatsAppStickyIcon />
    </div>
  );
}
