import API_KEY from "./apiKey";

// Le fetch che dobbiamo fare sono riducibili a queste funzioni di base
export const putPostFetch = async (URL, method, obj) => {
    try {

        const myHeaders = obj instanceof FormData ? {Authorization: API_KEY,} : 
        {
            'Content-Type': 'application/json',
            Authorization: API_KEY,
        }

        let response = await fetch(URL,
            {
                method: method,
                body: obj instanceof FormData ? obj : JSON.stringify(obj),
                headers: myHeaders
            }
        )

        if (response.ok) {
            let newItem = await response.json()
            return newItem;
        } else {
            throw new Error('Error in fetching songs')
        }

    } catch (err) {
        console.error('error', err)
    }
};


export const getDeleteFetch = async (URL, method) => {
    try {
        let response = await fetch(
            URL,
            {
                method: method,
                headers: {
                    Authorization: API_KEY,
                }
            }
        )

        if (response.ok) {
            if (method === "DELETE")
                return response.ok;

            let item = await response.json();
            return item;

        } else {
            throw new Error('Error in fetching songs')
        }

    } catch (err) {
        console.error('error', err)
    }
};