import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import HomePageLeftAside from "./HomePageLeftAside";


const HomePage = () => {
    return (
        <MyBaseContainer>
            <ThreeCol 
                left={<HomePageLeftAside /> }
                center=""
                right=""
            />
        </MyBaseContainer>
    );
}

export default HomePage;