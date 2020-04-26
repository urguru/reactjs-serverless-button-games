import React, { useContext } from "react";
import { Modal, Button ,InputGroup,FormControl} from "react-bootstrap";
import { UsersContext } from "../Context";
function ScoreRegisterModal(props) {
  const context = useContext(UsersContext);

  return (
    <>
      <Modal show={context.stopGame} size="sm" centered onHide={context.resetGame}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  Woohoo, you scored <em>{context.score}</em> points! <br />
          <label>Please enter your name to register the score</label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              required
              aria-label="Username"
              value={context.user_name} 
              onChange={context.updateUserName}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type='submit' onClick={context.resetGame}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
              context.updateFinalScore(props.level)
          }}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ScoreRegisterModal;
