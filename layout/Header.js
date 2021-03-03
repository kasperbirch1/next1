// import HeroSlider from "../components/HeroSlider";
import Nav from "../components/Nav";
import dynamic from "next/dynamic";

const DynamicHeroSlider = dynamic(() => import("../components/HeroSlider"), {
  ssr: false,
});

const Header = () => {
  return (
    <header>
      <Nav />
      <DynamicHeroSlider />
    </header>
  );
};

export default Header;
