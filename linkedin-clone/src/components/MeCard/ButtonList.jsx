import { Button } from "react-bootstrap";


const ButtonList = () => {
    return (
        <div className="d-flex gap-2 button-list"  >
            <Button
                type="button"
                variant="primary"
                className="rounded-pill py-1 px-3 fw-bold bottoni"
            >
                Disponibile per
            </Button>
            <Button
                type="button"
                variant="outline-primary"
                className="rounded-pill py-1 px-3 fw-bold bottoni"
            >
                Aggiungi sezione del profilo
            </Button>
            <Button
                type="button"
                variant="outline-primary"
                className="rounded-pill py-1 px-3 fw-bold bottoni"
            >
                Migliora profilo
            </Button>
            <Button
                type="button"
                variant="outline-dark"
                className="rounded-pill py-1 px-3 fw-bold bottoni"
            >
                Altro
            </Button>
        </div>
    );
};

export default ButtonList;  