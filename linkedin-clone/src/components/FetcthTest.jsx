import { deleteExperience, getExperiences, insertExperience, updateExperience } from "../modules/experiencesFetches";
import { deletePost, getPosts, insertPost } from "../modules/postFetches";

const FetchTest = () => {



    // deleteExperience
    // deletePost



    const meID = "66debb694d0def0015cef102";
    const giancarloID = '6551f7f3c55e7e0018f83c12';

    const obj =
    {
        "text": "Questo è un nuovo post", // L'unica proprietà richiesta!
    }


    // getPosts('me').then((res) =>
    //     console.log('FETCH RESULT', res)
    // )

    // insertPost(meID,obj).then(res => console.log('insertPost:', res))

    deletePost(meID, '66df0b34af434b00159d8312').then(res => console.log('del res', res))

    // insertExperience(meID, obj).then(res => 
    //     
    // )

    // getExperiences(meID).then((res) =>
    //     console.log('FETCH RESULT', res)
    // )


    // deleteExperience(meID, "66deed754d0def0015cef13b").then((res) =>
    //     console.log('FETCH RESULT', res)
    // )

    return (
        <p>CIAO!</p>
    )
}


export default FetchTest