import { deleteComments, getComments, insertComment, updateComments } from "../modules/commentFetches";
import { deleteExperience, getExperiences, insertExperience, updateExperience } from "../modules/experiencesFetches";
import { getJobs } from "../modules/jobsFetches";
import { deletePost, getPosts, insertPost } from "../modules/postFetches";

const FetchTest = () => {



    // deleteExperience
    // deletePost



    const meID = "66debb694d0def0015cef102";
    const giancarloID = '6551f7f3c55e7e0018f83c12';

    const obj =
    {
        "comment": 'Perquisa da eliminare!',
        "rate": 5,
        "elementId": '66e3fbd880067d00151243cc',
    }

    // 66e406dc80067d00151243e0

    // deleteComments('66e405c080067d00151243dd').then(()=>{

    //     getComments('66e3fbd880067d00151243cc').then((res) =>
    //         console.log('FETCH RESULT', res)
    //     )
    // })




    // insertComment(obj,).then(()=>{

        getComments().then((res) =>
            console.log('FETCH RESULT', res)
        )
    // })



    // updateComments(obj,'66e405c080067d00151243dd').then(()=>{

    //     getComments('66e3fbd880067d00151243cc').then((res) =>
    //         console.log('FETCH RESULT', res)
    //     )
    // })




    // getJobs({
    //     query:'developer'
    //     // company: 'Olla'
    //     // category: 'writing'
    // }).then((res) =>
    //     console.log('FETCH RESULT', res)
    // )


    // getPosts('me').then((res) =>
    //     console.log('FETCH RESULT', res)
    // )

    // insertPost(meID,obj).then(res => console.log('insertPost:', res))

    // deletePost(meID, '66e2c115543a4c0015901e1e').then(res => console.log('del res', res))

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