import ThreeCol from "./ThreeCol";
import MyBaseContainer from "./MyBaseContainer";
import CercaPer from "./CercaPer";

import HomePageRightAside from "./HomePageRightAside";

const SearchPage = () => {
  return (
    <MyBaseContainer>
      <ThreeCol left={<CercaPer />} center="" right={<HomePageRightAside />} />
    </MyBaseContainer>
  );
};

export default SearchPage;
