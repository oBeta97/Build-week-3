import { getDeleteFetch, putPostFetch } from "./baseFetches";
import { getProfile } from "./profileFetches";

export const getPosts = async (postId = '') => {

    try {

        return await getDeleteFetch(
            'https://striveschool-api.herokuapp.com/api/posts/' + postId,
            'GET'
        )

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

export const insertPost = async (userId, postData) => {
    try {

        let myProfile = await getProfile('me');

        if (myProfile._id === userId) {

            return await putPostFetch(
                'https://striveschool-api.herokuapp.com/api/posts/',
                'POST',
                postData
            )
        }
        else {
            throw new Error('You cannot cange the item of another users')
        }
    }
    catch (e) {
        console.error(e);
    }
};


export const updatePost = async (userId, postData) => {

    try {

        let myProfile = await getProfile('me');

        const posts = await getPosts()

        let myPosts = posts.filter(post => post.user._id === myProfile._id)

        if (myProfile._id === userId && myPosts.filter((post) => post._id === postData._id).length === 1) {

            return await putPostFetch(
                'https://striveschool-api.herokuapp.com/api/posts/' + postData._id,
                'PUT',
                postData
            )
        }
        else {
            throw new Error('You cannot cange the item of another users')
        }
    }
    catch (e) {
        console.error(e);
    }

};


export const deletePost = async (userId, postId) => {
    
    try {

        let myProfile = await getProfile('me');
        
        const posts = await getPosts()

        let myPosts = posts.filter(post => post.user._id === myProfile._id)

        if (myProfile._id === userId && myPosts.filter((post) => post._id === postId).length === 1) {

            return await getDeleteFetch(
                `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
                'DELETE'
            )

        }
        else {
            throw new Error('You cannot cange the item of another users')
        }
    }
    catch (e) {
        console.error(e);
    }
};