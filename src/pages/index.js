import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import MyWorks from "../components/MyWorks";
import Contact from "../components/Contact";

const index = () => (
  <Layout>
    <Hero />
    <AboutMe />
    <MyWorks />
    <Contact />
  </Layout>
);

export default index;
