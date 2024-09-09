import { getDeleteFetch, putPostFetch } from "./baseFetches";
import { getProfile } from "./profileFetches";

// ⚠️ !!! NON SI PUO USARE "ME" PER AVERE LE NOSTRE EXPERIENCES !!! ⚠️
// Questa fetch prende sia la lista di tutte le experience che una singola
// getExperiences() -> mostra tutte le "nostre" esperienze
// getExperiences('<_id>') -> mostra tutte le esperienze dell'utente
// getExperiences('<_id>', '<expID>') -> mostra di dettagli della singola esperienza
export const getExperiences = async (userId = '', expId = '') => {

    if(userId === ''){
        const temp = await getProfile('me');
        userId = temp._id;
    }

    try {

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

export const insertExperience = async (userId, experienceData) => {
    try {

        let myProfile = await getProfile('me');

        if (myProfile._id === userId) {

            return await putPostFetch(
                `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
                'POST',
                experienceData
            );
        }
        else {
            throw new Error('You cannot cange the experience of another users')
        }


    } catch (err) {
        console.error('error', err)
    }
};


export const updateExperience = async (userId, experienceData) => {
    try {

        let myProfile = await getProfile('me');

        let myExperiences = await getExperiences(myProfile._id);

        if (myProfile._id === userId && myExperiences.filter((experience) => experience._id === experienceData._id).length === 1) {

            return await putPostFetch(
                `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceData._id}`,
                'PUT',
                experienceData
            );

        }
        else {
            throw new Error('You cannot cange the experience of another users')
        }

    } catch (err) {
        console.error('error', err)
    }
};


export const deleteExperience = async (userId, experienceId) => {
    try {

        let myProfile = await getProfile('me');

        let myExperiences = await getExperiences(myProfile._id)

        if (myProfile._id === userId && myExperiences.filter((experience) => experience._id === experienceId).length === 1) {

            return await getDeleteFetch(
                `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${experienceId}`,
                'DELETE'
            )

        }
        else {
            throw new Error('You cannot cange the experience of another users')
        }

    } catch (err) {
        console.error('error', err)
    }
};