import { Button } from "react-bootstrap";


const ButtonList = () => {
    return (
        <div className="d-flex gap-2" >
            <Button
                type="button"
                variant="primary"
                className="rounded-pill py-1 px-3 fw-bold"
            >
                Disponibile per
            </Button>
            <Button
                type="button"
                variant="outline-primary"
                className="rounded-pill py-1 px-3 fw-bold"
            >
                Aggiungi sezione del profilo
            </Button>
            <Button
                type="button"
                variant="outline-primary"
                className="rounded-pill py-1 px-3 fw-bold"
            >
                Migliora profilo
            </Button>
            <Button
                type="button"
                variant="outline-dark"
                className="rounded-pill py-1 px-3 fw-bold"
            >
                Altro
            </Button>
        </div>
    );
};

export default ButtonList;  