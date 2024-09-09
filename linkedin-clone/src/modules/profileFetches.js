import { getDeleteFetch, putPostFetch } from "./baseFetches";
import { userIDValidation } from "./securityModules";

// getProfile() -> lista generica dei profili
// getProfile('me') -> il nostro profilo 
// getProfile('<userId>') -> dati di un profilo specifico

// IPOTESI DI CHIAMATA
// getProfile()
// .then((data)=>{
//     setState(data);
// })

export const getProfile = async (userId = '') => {
    try {

        return await getDeleteFetch(
            'https://striveschool-api.herokuapp.com/api/profile/' + userId,
            'GET'
        )

    } catch (err) {
        console.error('error', err)
    }
};


// userData è un oggetto di tipo User!!!
// Esempio oggetto user:
// {
//     "name": "Mario",
//     "surname": "Rossi",
//     "email": "mario@rossi.it",
//     "username": "mario88",
//     "bio": "Freelance developer",
//     "title": "Full Stack Web Developer",
//     "area": "Milan",
//     "image": ..., // SERVER GENERATED, modificabile
//     "createdAt": "2019-09-20T08:53:07.094Z", // SERVER GENERATED
//     "updatedAt": "2019-09-20T09:00:46.977Z", // SERVER GENERATED
//     "__v": 0, // SERVER GENERATED
//     "_id": "5d84937322b7b54d848eb41b", // SERVER GENERATED
// }
// Va utilizzato l'oggetto sopra come modello per i dati da inviare su postData.
// ⚠️ !!! In questa chiamata va utilizzato solo l'ID come dato generato dal server !!! ⚠️
export const updateProfile = async (userData) => {
    try {

        userIDValidation(userData._id);

        return await putPostFetch(
            'https://striveschool-api.herokuapp.com/api/profile/',
            'PUT',
            userData
        )

    } catch (err) {
        console.error('error', err)
    }
};