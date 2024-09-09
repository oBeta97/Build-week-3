import { getDeleteFetch, putPostFetch } from "./baseFetches";

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
export const updateProfile = async (userData) => {
    try {

        let myProfile = await getProfile('me');

        if (myProfile._id === userData._id) {
            return await putPostFetch(
                'https://striveschool-api.herokuapp.com/api/profile/',
                'PUT',
                userData
            )
        }
        else {
            throw new Error('You cannot cange the experience of another users')
        }


    } catch (err) {
        console.error('error', err)
    }
};