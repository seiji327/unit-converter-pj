import { Measure } from "convert-units";

import { HomeBox } from "../../components/Home";
import { MEASURES } from "../../constant/measures";
import { MEASUREMENT_ICONS } from "../../constant/icons";

import "./home.css";

const Home = () => {
  return (
    <main className="home">
      {MEASURES.map((measure, key) => (
        <HomeBox
          measurementType={measure as Measure}
          key={key}
          icon={MEASUREMENT_ICONS[measure as keyof typeof MEASUREMENT_ICONS]}
        />
      ))}
    </main>
  );
};

export default Home;
