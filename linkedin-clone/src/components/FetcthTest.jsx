import { deleteExperience, getExperiences, insertExperience, updateExperience } from "../modules/experiencesFetches";

const FetchTest = () => {

    // da ricontrollare le delete!!!

    const meID = "66debb694d0def0015cef102";
    const giancarloID = '6551f7f3c55e7e0018f83c12';

    const obj =
    {
        "role": "Full Stackkz345678234658asdasdasd72678455!",
        "company": "FizzBuzz",
        "startDate": "2022-06-16",
        "endDate": "2023-06-16", // può essere null
        "description": "Implementing new features",
        "area": "Milan",
        // "_id": '66deeac14d0def0015cef135'
    }

    // insertExperience(meID, obj).then(res => 
    //     
    // )

    // getExperiences(meID).then((res) =>
    //     console.log('FETCH RESULT', res)
    // )


    deleteExperience(meID, "66deed754d0def0015cef13b").then((res) =>
        console.log('FETCH RESULT', res)
    )

    return (
        <p>CIAO!</p>
    )
}


export default FetchTest