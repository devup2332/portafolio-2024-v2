import BannerHome from "@/components/Home/Banner/Banner";
import BottomNav from "@/components/Home/BottomNav/BottomNav";
import ContactHome from "@/components/Home/Contact/Contact";
import ExperienceHome from "@/components/Home/Experience/Experience";
import HomeHeader from "@/components/Home/Header/HomeHeader";
import Projects from "@/components/Home/Projects/Projects";
import { LoaderIcon } from "@/components/Icons";
import { Toaster } from "@/components/UI/sonner";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const fakeLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fakeLoading();
  }, []);

  if (loading) {
    return (
      <div className="h-screen grid place-items-center">
        <LoaderIcon className="animate-spin text-primary-color stroke-current w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="text-primary-text-color font-inter justify-center flex overflow-x-hidden">
      <HomeHeader />
      <div className="w-10/12 m-auto max-w-md lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl pb-28">
        <BannerHome />
        <ExperienceHome />
        <Projects />
        <ContactHome />
      </div>
      <Toaster />
      <BottomNav />
    </div>
  );
};

export default Home;
