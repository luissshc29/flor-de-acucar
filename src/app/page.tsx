import Contact from "./sections/Contact";
import Cookies from "./sections/Cookies";
import Essence from "./sections/Essence";
import Welcome from "./sections/Welcome";

export default function Home() {
  return (
    <div className="relative animate-show-up">
      <div className="relative">
        <Welcome />
        <Essence />
        <Cookies />
        <Contact />
      </div>
    </div>
  );
}
