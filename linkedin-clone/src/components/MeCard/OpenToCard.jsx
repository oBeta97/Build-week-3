import { FaPencil } from "react-icons/fa6";


const OpenToCard = () => {
    return (
        <div className="mt-3">
            <div
                className="rounded-3 position-relative p-2 text-start w-50"
                style={{
                    backgroundColor: "#DDE7F1"
                }}
            >
                <FaPencil className="position-absolute top-0 end-0 mt-2 me-2" />
                <p
                    style={{ fontSize: "0.9em" }}
                    className="p-0 m-0 fw-bold"
                >
                    Disponibile a lavorare
                </p>
                <p
                    style={{ fontSize: "0.9em" }}
                    className="p-0 m-0"
                >
                    Rouli di Sviluppatore Web
                </p>
                <p
                    style={{ fontSize: "0.9em" }}
                    className="p-0 m-0 text-primary fw-bold"
                >
                    Mostra dettagli
                </p>

            </div>
        </div>
    );
};

export default OpenToCard;