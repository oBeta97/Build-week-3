import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";


const HomePage = () => {
    return (
        <MyBaseContainer>
            <ThreeCol 
                left=""
                center=""
                right=""
            />
        </MyBaseContainer>
    );
}

export default HomePage;