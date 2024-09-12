import { putPostFetch } from "./baseFetches";
import { getExperiences } from "./experiencesFetches";
import { getPosts } from "./postFetches";
import { itemIDValidation, userValidation } from "./securityModules"



export const changeProfileImage = async (user, fileData) => {
    try {

        userValidation(user);

        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`,
            'POST',
            fileData
        )
    } catch (err) {
        console.error('error', err)
    }
}


export const addExperienceImage = async (user, fileData, experienceId) => {
    try {

        let myProfile = userValidation(user);

        itemIDValidation(
            await getExperiences(myProfile._id),
            experienceId
        )

        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/profile/${myProfile._id}/experiences/${experienceId}/picture`,
            'POST',
            fileData
        )
    } catch (err) {
        console.error('error', err)
    }
}


export const addPostImage = async (user, fileData, postId) => {
    try {

        let myProfile = userValidation(user);

        itemIDValidation(
            await getPosts(myProfile._id),
            postId
        )

        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/posts/${postId} `,
            'POST',
            fileData
        )
    } catch (err) {
        console.error('error', err)
    }
}