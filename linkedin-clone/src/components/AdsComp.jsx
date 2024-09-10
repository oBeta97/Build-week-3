import { Container } from "react-bootstrap";


const AdsComp = () => {
    return (
        <Container
        fluid
        className="rounded-3 border 
            overflow-hidden 
            p-0
            bg-white 
            text-start
            position-relative
        "
    >
        <span className="position-absolute ms-5 mt-2 text-white">Best ADS ever!</span>
        <img 
        src="https://placedog.net/640/480?random" 
        alt="Ads!" 
        className="img-fluid img-fit"
        />
    </Container>
    );
};

export default AdsComp;