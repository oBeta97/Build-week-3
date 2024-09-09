// getProfile() -> lista generica dei profili
// getProfile('me') -> il nostro profilo 
// getProfile('<userId>') -> dati di un profilo specifico


// IPOTESI DI CHIAMATA
// getProfile()
// .then((data)=>{
//     setState(data);
// })

export const getProfile = async (userId = '') => {
    try {
        let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/profile/' + userId,
            {
                method: "GET",
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYmI2OTRkMGRlZjAwMTVjZWYxMDIiLCJpYXQiOjE3MjU4NzMwMDEsImV4cCI6MTcyNzA4MjYwMX0.jen6eAIErfA8GNhPDGgw0BwoY4NoYo4kbHo2PdlyOTM',
                }
            }
        )


        if (response.ok) {
            let profileData = await response.json()
            return profileData;
        } else {
            throw new Error('Error in fetching songs')
        }

    } catch (err) {
        console.error('error', err)
    }
};


// userData è un oggetto di tipo User!!!
// Esempio oggetto user:
// {
//     "name": "Mario",
//     "surname": "Rossi",
//     "email": "mario@rossi.it",
//     "username": "mario88",
//     "bio": "Freelance developer",
//     "title": "Full Stack Web Developer",
//     "area": "Milan",
//     "image": ..., // SERVER GENERATED, modificabile
//     "createdAt": "2019-09-20T08:53:07.094Z", // SERVER GENERATED
//     "updatedAt": "2019-09-20T09:00:46.977Z", // SERVER GENERATED
//     "__v": 0, // SERVER GENERATED
//     "_id": "5d84937322b7b54d848eb41b", // SERVER GENERATED
// }
export const updateProfile = async (userData) => {
    try {
        let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/profile/',
            {
                method: "PUT",
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRlYmI2OTRkMGRlZjAwMTVjZWYxMDIiLCJpYXQiOjE3MjU4NzMwMDEsImV4cCI6MTcyNzA4MjYwMX0.jen6eAIErfA8GNhPDGgw0BwoY4NoYo4kbHo2PdlyOTM',
                }
            }
        )

        if (response.ok) {
            let updatedProfile = await response.json()
            return updatedProfile;
        } else {
            throw new Error('Error in fetching songs')
        }

    } catch (err) {
        console.error('error', err)
    }
};