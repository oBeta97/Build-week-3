import LinkedinCorpRow from "./LinkedinCorpRow";


const MyFooterHome = () => {

    const words = [
        'Informazioni',
        'Accessibilità',
        'Centro assistenza',
        'Privacy e condizioni',
        'Opzioni per gli annunci pubblicitari',
        'Pubblicità',
        'Servizio alle aziende',
        'Scarica l\'app LinkedIn',
        'Altro',
    ]

    return (
        <div className="my-3">
            <div className="d-flex flex-wrap justify-content-center gap-2">
                {
                    words.map(word =>
                        <p key={word} className="lh-sm text-secondary extra-small p-0 m-0">{word}</p>
                    )
                }
            </div>
            <LinkedinCorpRow />
        </div>
    );
};

export default MyFooterHome
