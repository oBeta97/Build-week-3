import { useEffect, useState } from "react";
import { getPosts } from "../modules/postFetches";
import { Spinner } from "react-bootstrap";


const Posts = () => {

    const [postList, setPostList] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getAllposts = async() => {
        const posts = await getPosts();

        console.log(posts);
        setIsLoading(false);
        setPostList(posts);
    }

    useEffect(() => {
        getAllposts()
        
        setInterval(async () => {
            await getAllposts()
        }, 60000) // ogni minuto viene rifatto il getPosts

    }, [])

    return (
        <>
            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    postList.map((post) => <p key={post._id}>{post.text}</p>)
                )
            }
        </>
    );
};

export default Posts