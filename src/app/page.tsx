import Header from "./components/unique/Header";
import Cookies from "./sections/Cookies";
import Essence from "./sections/Essence";
import Welcome from "./sections/Welcome";

export default function Home() {
  return (
    <div className="relative animate-show-up">
      <Header />
      <div className="">
        <Welcome />
        <Essence />
        <Cookies />
      </div>
    </div>
  );
}
