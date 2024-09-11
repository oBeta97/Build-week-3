import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import HomePageLeftAside from "./HomePageLeftAside";
import Posts from "./Posts";
import HomePageRightAside from "./HomePageRightAside";

import { CardCentraleHome } from "./CardCentraleHome";

const HomePage = () => {
    return (
        <MyBaseContainer>
            <ThreeCol 
                left={<HomePageLeftAside /> }
                center={<Posts />}
                right={<HomePageRightAside />}
            />
        </MyBaseContainer>
    );
}

export default HomePage;
