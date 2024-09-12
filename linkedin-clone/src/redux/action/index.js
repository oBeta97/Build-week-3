import { getJobs } from "../../modules/jobsFetches";

export const ADD_SEARCH = 'ADD_SEARCH';



export const addSearch = (searchRes) => {
    return {
        type: ADD_SEARCH,
        payload: searchRes,
    }
}

export const searchFetch = (queryWord) => {
    return (dispatch) => {

        getJobs({ query: queryWord }).
            then(steve =>
                dispatch(
                    addSearch(steve)
                )
            )

    }
}