import React, { useState } from "react";
import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/donate.css";

function Donate(props) {
  const [images, setImages] = useState([]);

  const name = useRef();
  const category = useRef();
  const breed = useRef();
  const about = useRef();
  const number = useRef();

  const handleChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(images);
  }

  return (
    <div className="donate container text-center">
      <Form onSubmit={handleSubmit}>
        <h1 className="my-4">Donate Pet</h1>
        <div className="donate__form row">
          <div className="col-12 col-md-6">
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
              <span>About</span>
              <Form.Control
                className="donate__form__input"
                as="textarea"
                rows={3}
                placeholder="About . . ."
                required
                ref={about}
              />
            </Form.Group>
          </div>

          <div className="col-12 col-md-6">
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

            <Form.Group className="form-group file__area">
              <Form.Control
                type="file"
                name="images"
                id="images"
                required
                multiple="multiple"
                onChange={handleChange}
              />
              <div className="file__dummy">
                <div className="success">
                  Great, your files are selected. Keep on.
                </div>
                <div className="default">Please select some files</div>
              </div>
            </Form.Group>
          </div>
          <div className="col-12  text-center">
            <Button className="submit__button" type="submit">
              SUBMIT
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Donate;
