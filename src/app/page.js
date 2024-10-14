import React from "react";
import { Header} from "../components/Header";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/Contact"
import { WhatsAppStickyIcon } from "@/components/WhatsAppIcon";

export default function Home() {
  return (
   <div className=" h-screen">
      <Header/>
      <Intro/>
      <Projects />
      <Testimonial/>
      <Footer/>
      <WhatsAppStickyIcon/>
   </div>
  );
}
