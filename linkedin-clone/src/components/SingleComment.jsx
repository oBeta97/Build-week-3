import { Button, Col } from "react-bootstrap";
import { GiBombingRun } from "react-icons/gi";
import { FaDna } from "react-icons/fa";
import { deleteComments, updateComments } from "../modules/commentFetches";
import { useState } from "react";

const SingleComment = ({ commentino, onCommentChange, post }) => {

  const [changeMode, setChangeMode] = useState(false);

  const [comment, setComment] = useState(commentino.comment)

  const removeComment = () => {
    deleteComments(commentino._id);
    onCommentChange();
  }

  const changeComment = (e) => {

    e.preventDefault();

    const commentObj = {
      "comment": comment,
      "rate": 5,
      "elementId": post._id,
    }

    updateComments(commentObj, commentino._id).
      then(() => {
        setChangeMode(false);
        onCommentChange();
      })
  }


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
              <p className="fw-bold small m-0 p-0">{commentino.author}</p>
              {
                changeMode ? (
                  <form className="d-flex py-2 pe-2" onSubmit={changeComment}>
                    <input
                      type="text"
                      id="textInput"
                      placeholder="Scrivi qui il tuo commento..."
                      className="form-control"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />

                    <Button type="submit" variant="outline-dark" className="fw-bold rounded">+</Button>

                  </form>
                ) : (

                  <p className="small m-0 pb-2">{commentino.comment}</p>
                )
              }
          </div>

          <div className="d-flex gap-3">
            <Button variant="white" className="fs-5 p-0 m-0" onClick={() => setChangeMode(!changeMode)}>
              <FaDna />
            </Button>
            <Button variant="white" className="fs-5 p-0 m-0" onClick={removeComment}>
              <GiBombingRun />
            </Button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default SingleComment;
