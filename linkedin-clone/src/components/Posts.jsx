import { useEffect, useState } from "react";
import { getPosts } from "../modules/postFetches";
import { Spinner } from "react-bootstrap";
import CardCentraleHome from './CardCentraleHome'
import { getProfile } from "../modules/profileFetches";

const Posts = () => {

    const [postList, setPostList] = useState([]);
    const [myPostList, setMyPostList] = useState([]);
    const [profileList, setProfileList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllposts = async () => {
        const posts = await getPosts();

        console.log(posts);
        setIsLoading(false);
        setPostList(posts);
    }

    const getMyPosts = async () => {
        const posts = await getPosts('me');
        setMyPostList(posts);
    }

    const getAllProfile = async () =>{
        const profiles = await getProfile();
        console.log(profiles);
        setProfileList(profiles);
    }

    useEffect(() => {

        getAllposts();
        getMyPosts();
        getAllProfile();

        setInterval(async () => {
            await getAllposts()
        }, 60000) // ogni minuto viene rifatto il getPosts

    }, [])

    const sortPost = (a, b) => {

        if (new Date(a.createdAt) > new Date(b.createdAt))
            return -1


        if (new Date(a.createdAt) < new Date(b.createdAt))
            return 1

        return 0;

    };

    return (
        <>
            {
                isLoading && postList.length > 0 && myPostList.length > 0 && profileList.length > 0 ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    postList
                        .sort(sortPost)
                        .map((post) =>
                            <CardCentraleHome
                                key={post._id}
                                post={post}
                                isMyPost={myPostList.filter(mypost => mypost._id === post._id).length === 1}
                                profileData = {profileList.filter(profile => profile._id === post.user._id)[0]}
                            />
                        )
                )
            }
        </>
    );
};

export default Posts