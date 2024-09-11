import { Container, Row, Col, Button } from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CardCentraleHome = ({ post, isMyPost, profileData }) => {

  const minutesAgo = (datetime) => {
    const now = new Date();

    const differenceInMs = now - new Date(datetime);
    return Math.floor(differenceInMs / (1000 * 60));
  }

  return (
    <>
      {
        (post && profileData) ? (

          <Container
            fluid
            className="border rounded p-4 mt-2"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* prima row */}
            <Row className="text-start mb-3">
              <Col xs={2}>
                <img
                  src={profileData.image}
                  alt="img"
                  className="img-fluid rounded-circle"
                />
              </Col>
              <Col xs={7} className="d-flex flex-column">
                <Link
                  to={'/profile/' + profileData._id}
                  className="text-start text-decoration-none text-black fw-bold lh-sm m-0 p-0"
                >
                  {post.username}
                </Link>
                <span className="text-muted">867 follower</span>
                <span className="text-muted ">
                  {minutesAgo(post.createdAt)} minuti • <BiWorld />
                </span>
              </Col>
              <Col xs={3} className="text-primary d-lg-flex justify-content-end p-0">
                {
                  !isMyPost ? (
                    <p className="small">
                      +<span className="d-none d-lg-inline m-0 p-0 g-0"> Segui </span>
                    </p>
                  ) : (
                    <Button variant="white" className="p-0 m-0">
                      <FaPencil />
                    </Button>
                  )
                }
              </Col>
            </Row>
            <Row>
              <Col xs="12" className=" d-flex justify-content-start text-muted">
                <p> {post.text} </p>
              </Col>
            </Row>
            <Row>
              {
                post.image ? (
                  <Col xs="12">
                    <img
                      src={post.image}
                      alt="img"
                      className="img-fluid "
                    />
                  </Col>

                ) : ""
              }
            </Row>
            <Row>
              <Col xs="12" className=" d-flex justify-content-start text-muted my-2">
                <small>
                  <FcLike /> 9
                </small>
              </Col>
            </Row>
            <Row>
              <Col
                xs="12 "
                className=" d-flex justify-content-between align-items-center border-top  "
              >
                <Button className="d-flex align-items-center bg-white border-0 text-dark ">
                  <BsHandThumbsUp className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small"> Consiglia</p>
                </Button>
                <Button className="d-flex align-items-center bg-white border-0 text-dark ">
                  <MdOutlineInsertComment className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small">Commenta</p>
                </Button>
                <Button className="d-flex align-items-center bg-white border-0 text-dark p-0">
                  <GoArrowSwitch className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small">Diffondi il post</p>
                </Button>
                <Button className="d-flex align-items-center bg-white border-0 text-dark ">
                  <IoIosSend className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small">Invia</p>
                </Button>
              </Col>
            </Row>
          </Container>
        ) : ""
      }
    </>


  );
};


export default CardCentraleHome;