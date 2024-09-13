import { getDeleteFetch, putPostFetch } from "./baseFetches";

// CRUD:
// CREATE

export const insertComment = async (CommentData) => {
    try {
        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/comments/`,
            'POST',
            CommentData,
            true
        );
    } catch (err) {
        console.error('error', err)
    }
};


// READ

export const getComments = async (postId = '') => {
    try {

        const comments = await getDeleteFetch(
            `https://striveschool-api.herokuapp.com/api/comments/`,
            'GET',
            true
        );

        return postId ? comments.filter(comment => comment.elementId === postId) : comments

    } catch (err) {
        console.error('error', err)
    }
};

// UPDATE

export const updateComments = async (commentData, commentId) => {
    try {

        return await putPostFetch(
            `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
            'PUT',
            commentData,
            true
        );

    } catch (err) {
        console.error('error', err)
    }
};




// DELETE

export const deleteComments = async (commentId) => {
    try {

        return await getDeleteFetch(
            `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
            'DELETE',
            true
        );

    } catch (err) {
        console.error('error', err)
    }
};
