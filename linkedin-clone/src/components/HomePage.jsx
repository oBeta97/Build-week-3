import CreatePost from "./CreatePost";
import MyBaseContainer from "./MyBaseContainer";
import ThreeCol from "./ThreeCol";


const HomePage = () => {
    return (
        <MyBaseContainer>
            <ThreeCol 
                left=""
                center={<CreatePost />}
                right=""
            />
        </MyBaseContainer>
    );
}

export default HomePage;