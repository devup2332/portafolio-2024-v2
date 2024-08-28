import BannerHome from "@/components/Home/Banner/Banner";
import ExperienceHome from "@/components/Home/Experience/Experience";
import HomeHeader from "@/components/Home/Header/HomeHeader";
import Projects from "@/components/Home/Projects/Projects";

const Home = () => {
  return (
    <div className="text-primary-text-color font-inter ">
      <HomeHeader />
      <div className="w-10/12 m-auto max-w-md lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl pb-28">
        <BannerHome />
        <ExperienceHome />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
