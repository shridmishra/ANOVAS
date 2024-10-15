import React from "react";
import { Header} from "../components/Header";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Contact"
import { WhatsAppStickyIcon } from "@/components/WhatsAppIcon";
import { ServicesLoop } from "@/components/Loop";






export default function Home() {
  return (
   <div className=" h-screen">
      <Header/>
      <Intro/>
      <ServicesLoop/>
      <Projects />
      <Testimonial/>
      <Footer/>
      <WhatsAppStickyIcon/>
   </div>
  );
}
