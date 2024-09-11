import Analisi from "./Analisi";
import ConsigliatiPerTe from "./ConsigliatiPerte";
import FormationCard from "./FormationCard";
import MeCard from "./MeCard";
import ActivityCard from "./MeCard/ActivityCard";
import ResourcesCard from "./ResourcesCard";

const ProfilePageMain = () => {
    return (
        <>
            <MeCard />
            <ConsigliatiPerTe />
            <ResourcesCard />
            <FormationCard />
            <ActivityCard />
            <Analisi />
        </>
    )
};

export default ProfilePageMain;