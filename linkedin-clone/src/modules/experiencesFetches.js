import { getDeleteFetch, putPostFetch } from "./baseFetches";
import { getProfile } from "./profileFetches";
import { itemIDValidation, userIDValidation } from "./securityModules";

// ⚠️ !!! NON SI PUO USARE "ME" PER AVERE LE NOSTRE EXPERIENCES !!! ⚠️
// Questa fetch prende sia la lista di tutte le experience che una singola
// getExperiences() -> mostra tutte le "nostre" esperienze
// getExperiences('<_id>') -> mostra tutte le esperienze dell'utente
// getExperiences('<_id>', '<expID>') -> mostra di dettagli della singola esperienza
export const getExperiences = async (userId = '', expId = '') => {
    try {

        if (userId === '') {
            const temp = await getProfile('me');
            userId = temp._id;
        }

        return await getDeleteFetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
            'GET'
        )

    } catch (err) {
        console.error('error', err)
    }

};

// Modello dell'EXPERIENCE:
// {
//   "role": "Full Stack Web Developer",
//   "company": "FizzBuzz",
//   "startDate": "2022-06-16",
//   "endDate": "2023-06-16", // può essere null
//   "description": "Implementing new features",
//   "area": "Milan",
//   "username": "mario88", // SERVER GENERATED
//   "image": ..., // SERVER GENERATED, modificabile
//   "createdAt": 2023-06-16T19:58:31.019Z", // SERVER GENERATED
//   "updatedAt": "2023-06-16T19:58:31.019Z", // SERVER GENERATED
//   "__v": 0 // SERVER GENERATED
//   "_id": "5d925e677360c41e0046d1f5" // SERVER GENERATED
// }
// Va utilizzato l'oggetto sopra come modello per i dati da inviare su experienceData.
// ⚠️ !!! Vanno utilizzati solo i dati non generati dal server !!! ⚠️

export const insertExperience = async (userId, experienceData) => {
    try {

        userIDValidation(userId);

        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
            'POST',
            experienceData
        );


    } catch (err) {
        console.error('error', err)
    }
};


// Va utilizzato l'oggetto sopra come modello per i dati da inviare su experienceData.
// ⚠️ !!! In questa chiamata va utilizzato solo l'ID come dato generato dal server !!! ⚠️
export const updateExperience = async (userId, experienceData) => {
    try {


        let myProfile = userIDValidation(userId);

        itemIDValidation(
            await getExperiences(myProfile._id),
            experienceData._id
        )

        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceData._id}`,
            'PUT',
            experienceData
        );

    } catch (err) {
        console.error('error', err)
    }
};


// Va utilizzato l'oggetto sopra come modello per i dati da inviare su experienceData.
// ⚠️ !!! In questa chiamata va utilizzato solo l'ID come dato generato dal server !!! ⚠️
export const deleteExperience = async (userId, experienceId) => {
    try {

        let myProfile = userIDValidation(userId);

        itemIDValidation(
            await getExperiences(myProfile._id),
            experienceId
        );

        return await getDeleteFetch(
            `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
            'DELETE'
        )


    } catch (err) {
        console.error('error', err)
    }
};