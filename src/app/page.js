import React from "react";
import { Header} from "../components/Header";
import { Intro } from "@/components/ui/Intro";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Contact"
import { WhatsAppStickyIcon } from "@/components/WhatsAppIcon";
import { ServicesLoop } from "@/components/ServiceLoop";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";






export default function Home() {
  return (
   <div className=" h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 ">
      <Navbar/>
      <Hero/>
      <ServicesLoop/>
      <Projects />
      <Testimonial/>
      <ContactForm/>
      <Footer/>
      <WhatsAppStickyIcon/>
   </div>
  );
}
