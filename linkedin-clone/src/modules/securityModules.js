import { getProfile } from "./profileFetches";


// Queste sono funzioni di sicurezza, se non vengono rispettati i parametri restituiscono un errore che
// verrà intercettato dal try-catch presente nelle funzioni delle fetch


export const userIDValidation = async (userID) =>{
    let myProfile = await getProfile('me');

    if (myProfile._id !== userID)
        throw new Error('User ID non valido!');

    return myProfile;
}

export const itemIDValidation = async (items, idToCheck) =>{

    if (items.filter((item) => item._id === idToCheck).length !== 1) 
        throw new Error('item ID non valido')

}