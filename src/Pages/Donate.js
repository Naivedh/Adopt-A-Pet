import React from "react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
function Donate(props) {
  const name = useRef();
  const category = useRef();
  const breed = useRef();
  const number = useRef();
  return (
    <div className="donate container text-center">
      <Form>
        <h1 className="my-4">Donate Pet</h1>
        <div className="donate__form">
          <Form.Group>
            <span>Pet Name</span>
            <Form.Control
              className="donate__form__input"
              type="text"
              placeholder="Name"
              required
              ref={name}
            />
          </Form.Group>
          <Form.Group>
            <span>Pet category</span>
            <Form.Control
              className="donate__form__input"
              type="text"
              placeholder="example: Dog"
              required
              ref={category}
            />
          </Form.Group>
          <Form.Group>
            <span>Pet Breed</span>
            <Form.Control
              className="donate__form__input"
              type="text"
              placeholder="example: Husky"
              required
              ref={breed}
            />
          </Form.Group>
          <Form.Group>
            <span>Contact Number</span>
            <Form.Control
              className="donate__form__input"
              type="text"
              placeholder="9999888877"
              required
              ref={number}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-group file-area">
            <Form.Control
              type="file"
              name="images"
              id="images"
              required
              multiple="multiple"
            />
            <div className="file-dummy">
              <div className="success">
                Great, your files are selected. Keep on.
              </div>
              <div className="default">Please select some files</div>
            </div>
          </Form.Group>

          <Button className="submit__button" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Donate;
