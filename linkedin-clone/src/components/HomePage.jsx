import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import { CardCentraleHome } from "./CardCentraleHome";

const HomePage = () => {
  return (
    <MyBaseContainer>
      <ThreeCol left="" center={<CardCentraleHome />} right="" />
    </MyBaseContainer>
  );
};

export default HomePage;
