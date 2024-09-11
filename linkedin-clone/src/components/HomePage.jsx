import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import HomePageLeftAside from "./HomePageLeftAside";

import { CardCentraleHome } from "./CardCentraleHome";

const HomePage = () => {
  return (
    <MyBaseContainer>
      <ThreeCol
        left={<HomePageLeftAside />}
        center={<CardCentraleHome />}
        right=""
      />
    </MyBaseContainer>
  );
};

export default HomePage;
