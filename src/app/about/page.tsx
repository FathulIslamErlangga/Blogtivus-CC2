"use client";
import Authors from "@/components/About/Authors";
import ContactUs from "@/components/About/ContactUs";
import HistoryBlog from "@/components/About/HistoryBlog";
import Planning from "@/components/About/Planning";

import React from "react";

const About = () => {
  return (
    <section className="pt-10">
      <HistoryBlog />
      <Authors />
      <Planning />
      <ContactUs />
    </section>
  );
};

export default About;
