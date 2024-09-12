import ThreeCol from "./ThreeCol";
import MyBaseContainer from "./MyBaseContainer";
import CercaPer from "./CercaPer";

import HomePageRightAside from "./HomePageRightAside";
import SearchResultsViewer from "./SearchResultsViewer";

const SearchPage = () => {
  return (
    <MyBaseContainer>
      <ThreeCol
        left={<CercaPer />}
        center={<SearchResultsViewer />}
        right={<HomePageRightAside />}
      />
    </MyBaseContainer>
  );
};

export default SearchPage;
