import ThreeCol from "./ThreeCol";
import MyBaseContainer from "./MyBaseContainer";
import CercaPer from "./CercaPer";

const SearchPage = () => {
  return (
    <MyBaseContainer>
      <ThreeCol left={<CercaPer />} center="" right="" />
    </MyBaseContainer>
  );
};

export default SearchPage;
