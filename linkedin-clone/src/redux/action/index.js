import { getJobs } from "../../modules/jobsFetches";

export const ADD_SEARCH = 'ADD_SEARCH';
export const ADD_SEARCH_STRING = 'ADD_SEARCH_STRING';



export const addSearchString = (searchString) => {
    return {
        type: ADD_SEARCH_STRING,
        payload: searchString,
    }
}

export const addSearch = (searchRes) => {
    return {
        type: ADD_SEARCH,
        payload: searchRes,
    }
}

export const searchFetch = (queryWord, searchType = 'query') => {
    return (dispatch) => {

        getJobs({ [searchType]: queryWord }).
            then(steve => {

                dispatch(
                    addSearch(steve)
                );

                dispatch(addSearchString(queryWord));
            })

    }
}