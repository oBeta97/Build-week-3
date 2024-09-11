15-new-card-analisi
import { Col, Container, Row } from "react-bootstrap";
import MeCard from "./MeCard";
import ResourcesCard from "./ResourcesCard";
import FormationCard from "./FormationCard";
import LenguageAndURL from "./LenguageAndURL";
import AdsComp from "./AdsComp";
import ActivityCard from "./MeCard/ActivityCard";
// import RandomCard from "./RandomCard";
import Analisi from "./Analisi";

import MyBaseContainer from "./MyBaseContainer";
import TwoCol from "./TwoCol";
import ProfilePageMain from "./ProfilePageMain";
import ProfilePageAside from "./ProfilePageAside";
main

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
