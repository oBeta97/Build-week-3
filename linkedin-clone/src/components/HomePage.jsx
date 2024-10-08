import CreatePost from "./CreatePost";
import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import HomePageLeftAside from "./HomePageLeftAside";
import Posts from "./Posts";
import HomePageRightAside from "./HomePageRightAside";

const HomePage = () => {
  return (
    <MyBaseContainer>
      <ThreeCol
        left={<HomePageLeftAside />}
        center={<Posts />}
        right={<HomePageRightAside />}
      />
    </MyBaseContainer>
  );
};

export default HomePage;
