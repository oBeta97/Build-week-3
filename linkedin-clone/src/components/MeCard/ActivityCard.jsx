import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaPencil } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { getPosts } from "../../modules/postFetches";
import CardCentraleHome from "../CardCentraleHome";
import { getProfile } from "../../modules/profileFetches";
import CreaPostModal from "../CreaPostModal";

const ActivityCard = () => {

    const URLParams = useParams();

    const [postList, setPostList] = useState(null)
    const [profile, setProfile] = useState(null)
    const [showModal, setShowModal] = useState(false);

    const fetchProfile = () => {
        getProfile(URLParams.profileId).
            then(profile => {
                setProfile(profile);
                getPosts(URLParams.profileId).
                    then((posts) => {
                        console.log(posts);
                        setPostList(posts.sort(sortPost).slice(0, 3))
                    })
            })
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const sortPost = (a, b) => {

        if (new Date(a.createdAt) > new Date(b.createdAt))
            return -1


        if (new Date(a.createdAt) < new Date(b.createdAt))
            return 1

        return 0;

    };


    return (
        <Container
            fluid
            className="rounded-3 border 
                overflow-hidden 
                p-0 px-4 pt-4 
                bg-white 
                text-start
            "
        >
            <Row>

                <h5 className="p-2 m-0">Attività</h5>
                <div className="d-flex align-items-center justify-content-between text-secondary gap-1 small">
                    <p className="p-0 m-0 text-primary">0 follower</p>
                    <div className="d-flex justify-content-end gap-3 align-items-center">
                        {
                            URLParams.profileId === 'me' ? (
                                <Button
                                    variant="outline-primary"
                                    className="rounded-pill"
                                    onClick={() => setShowModal(true)}
                                >
                                    Crea un post
                                </Button>
                            ) : ""
                        }
                    </div>
                </div>

            </Row>
            <Row>
                <Container>
                    <Row className="py-3 border-bottom">

                        {
                            postList ? (
                                postList.map(post => {
                                    return (
                                        < Col key={post._id} sm={12} md={4}>
                                            <CardCentraleHome
                                                lite
                                                post={post}
                                                isMyPost={true}
                                                profileData={profile}
                                            />
                                        </Col>
                                    )
                                })

                            ) : (
                                <Col>
                                    <p className="p-0 m-0 fw-bold">Non hai ancora pubblicato nulla</p>
                                    <p className="p-0 m-0">I post che condividi appariranno qui</p>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </Row >
            <Row>
                <Button variant="white" className="fw-bold text-secondary">Mostra tutte le attività <FaArrowRight /> </Button>
            </Row>

            {
                profile ? (
                    <CreaPostModal
                        showModal={showModal}
                        user={profile}
                        onPostCreation={fetchProfile}
                        onUnshow={() => {
                            setShowModal(false);
                        }}
                    />
                ) : ""
            }
        </Container >
    );
};

export default ActivityCard;