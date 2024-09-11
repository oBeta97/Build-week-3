import { getDeleteFetch, putPostFetch } from "./baseFetches";
import { getProfile } from "./profileFetches";
import { itemIDValidation, userValidation } from "./securityModules";

// ⚠️ !!! SI PUO USARE "me" PER AVERE I NOSTRI POST !!! ⚠️
// Questa fetch prende sia la lista di tutti i post che di uno singolo
// getPosts() -> mostra tutti i post
// getPosts('<_id>') -> mostra un singolo post
// ⚠️ !!! Per avere i nostri post va filtrato l'array del return tramite res.user.username o res.user._id !!! ⚠️
export const getPosts = async (postId = '') => {

    try {

        let posts = await getDeleteFetch(
            'https://striveschool-api.herokuapp.com/api/posts/' + (postId !== 'me' ? postId : ""),
            'GET'
        )

        if (postId === 'me') {
            const meProfile = await getProfile('me');
            posts = posts.filter((post) => post.user._id === meProfile._id)
        }

        return posts

    } catch (err) {
        console.error('error', err)
    }

};


// Modello del POST:
// {
//   "text": "Questo è un nuovo post", // L'unica proprietà richiesta!
//   "username": "mario88", // SERVER GENERATED
//   "createdAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
//   "updatedAt": "2023-10-01T19:44:04.496Z", // SERVER GENERATED
//   "__v": 0, // SERVER GENERATED
//   "_id": "5d93ac84b86e220017e76ae1", // SERVER GENERATED
// }
// Va utilizzato l'oggetto sopra come modello per i dati da inviare su postData.
// ⚠️ !!! Vanno utilizzati solo i dati NON generati dal server !!! ⚠️
export const insertPost = async (user, postData) => {
    try {

        userValidation(user);

        return await putPostFetch(
            'https://striveschool-api.herokuapp.com/api/posts/',
            'POST',
            postData
        )

    }
    catch (e) {
        console.error(e);
    }
};

// Va utilizzato l'oggetto sopra come modello per i dati da inviare su postData.
// ⚠️ !!! In questa chiamata va utilizzato solo l'ID come dato generato dal server !!! ⚠️
export const updatePost = async (user, postData) => {

    try {

        userValidation(user);

        itemIDValidation(
            await getPosts('me'),
            postData._id
        );

        return await putPostFetch(
            'https://striveschool-api.herokuapp.com/api/posts/' + postData._id,
            'PUT',
            postData
        )

    }
    catch (e) {
        console.error(e);
    }

};

// Va utilizzato l'oggetto sopra come modello per i dati da inviare su postData.
// ⚠️ !!! In questa chiamata va utilizzato solo l'ID come dato generato dal server !!! ⚠️
export const deletePost = async (user, postId) => {

    try {

        userValidation(user);

        itemIDValidation(
            await getPosts('me'),
            postId
        );

        return await getDeleteFetch(
            `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
            'DELETE'
        )

    }
    catch (e) {
        console.error(e);
    }
};