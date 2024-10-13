import React from "react";
import { Header} from "../components/Header";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
   <div className=" h-screen">
      <Header/>
      <Intro/>
      <Projects/>
      <Testimonial/>
      <Footer/>
   </div>
  );
}
