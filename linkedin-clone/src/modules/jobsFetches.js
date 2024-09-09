import { getDeleteFetch } from "./baseFetches"


// Essendo delle semplici GET ho fatto uno switch case ed in base al dato che passiamo esegue la fetch corretta.
// ESEMPIO DI CHIAMATA:
// getJobs( {query: "WEB DEV"} ) -> ⚠️ Come parametro va passato un oggetto con il campo che si vuole usare
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