import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";
import MeCard from "./MeCard"


const HomePage = () => {
    return (
        <MyBaseContainer>
            <ThreeCol 
                left={<MeCard lite /> }
                center=""
                right=""
            />
        </MyBaseContainer>
    );
}

export default HomePage;