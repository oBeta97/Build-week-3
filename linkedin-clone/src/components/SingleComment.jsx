import { Col } from "react-bootstrap";
import { GiBombingRun } from "react-icons/gi";
import { FaDna } from "react-icons/fa";

const SingleComment = ({commentino}) => {
  return (
    <>
      <Col xs={2}>
        <img
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="foto profilo"
          className="img-fluid rounded-5 w-50 pt-2"
        />
      </Col>

      <Col xs={10} className="text-start border-top">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="m-0 pb-2">
              <span className="fw-bold small">{commentino.author}</span>
              <br />
              <span className="small">{commentino.comment}</span>
            </p>
          </div>

          <div className="fs-5">
            <GiBombingRun /> &nbsp; &nbsp;
            <FaDna />
          </div>
        </div>
      </Col>
    </>
  );
};

export default SingleComment;
