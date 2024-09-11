import MyBaseContainer from "./MyBaseContainer";
import TwoCol from "./TwoCol";
import ProfilePageMain from "./ProfilePageMain";
import ProfilePageAside from "./ProfilePageAside";

const ProfilePage = () => {
  return (
    <MyBaseContainer>
      <TwoCol
        left={<ProfilePageMain />}
        right={<ProfilePageAside />}
      />
    </MyBaseContainer>
  );
};

export default ProfilePage;