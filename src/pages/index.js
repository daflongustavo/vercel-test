import About from "@/components/LandingPage/About";
import Navbar from "@/components/LandingPage/Navbar";
import Head from "next/head";
import CourseCardBoard from "@/components/CourseCard/CourseCardBoard";
import Company from "@/components/LandingPage/Company";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>SevenBootcamp</title>
        <meta name="description" content="Seven Bootcamp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
      <CourseCardBoard />
      <Company />
      <Footer />
    </>
  );
}
