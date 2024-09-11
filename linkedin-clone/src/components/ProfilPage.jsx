import MyBaseContainer from "./MyBaseContainer";
import TwoCol from "./TwoCol";
import ProfilePageMain from "./ProfilePageMain";
import ProfilePageAside from "./ProfilePageAside";
import MyFooter from "./MyFooter";

const ProfilePage = () => {
  return (
    <>
      <MyBaseContainer>
        <TwoCol
          left={<ProfilePageMain />}
          right={<ProfilePageAside />}
        />
      </MyBaseContainer>
      <footer>
        <MyBaseContainer>
          <MyFooter />
        </MyBaseContainer>
      </footer>
    </>
  );
};

export default ProfilePage;
