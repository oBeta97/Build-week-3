import { getDeleteFetch } from "./baseFetches"

export const getJobs = async ({query, company, category, limit = 10}) => {

    switch (true) {
        case query !== undefined:
            return await getDeleteFetch(
                'https://strive-benchmark.herokuapp.com/api/jobs?search=' + query,
                'GET'
            )

        case company !== undefined:
            return await getDeleteFetch(
                'https://strive-benchmark.herokuapp.com/api/jobs?company=' + company,
                'GET'
            )

        case category !== undefined:
            return await getDeleteFetch(
                `https://strive-benchmark.herokuapp.com/api/jobs?category=${category}&limit=${limit}`,
                'GET'
            )

        default:
            console.error('errore nella fetch dei jobs!');
    }


}