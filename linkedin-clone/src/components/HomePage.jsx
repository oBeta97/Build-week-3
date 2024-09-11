import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import HomePageLeftAside from "./HomePageLeftAside";
import Posts from "./Postst";


const HomePage = () => {
    return (
        <MyBaseContainer>
            <ThreeCol 
                left={<HomePageLeftAside /> }
                center={<Posts />}
                right=""
            />
        </MyBaseContainer>
    );
}

export default HomePage;