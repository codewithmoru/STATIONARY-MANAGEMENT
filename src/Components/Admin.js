import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import InputGroup from "react-bootstrap/InputGroup";
//import { Card } from "react-bootstrap";
const DynamicForm = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState([
    { id: 1, label: "Item", value: "" },
    { id: 2, label: "Quntity", value: "", type: "number" }
  ]);

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: inputFields.length + 1,
        label: `Item `,
        Item: ""
      },
      {
        id: inputFields.length + 2,
        label: `Quntity`,
        type: "number",
        Quntity: ""
      }
    ]);
  };

  const handleChange = (id, event) => {
    const newInputFields = inputFields.map((field) => {
      if (id === field.id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });

    setInputFields(newInputFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract all input values from inputFields state
    const allInputValues = inputFields.map((field) => ({
      label: field.label,
      value: field.value
    }));

    // Log the form data before submission
    console.log("Submitted Fields:", allInputValues);

    try {
      const response = await fetch(
        "https://formsubmit.co/gauravmahajan455102@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(allInputValues)
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully!");
        // Add logic for successful form submission
      } else {
        console.error("Form submission failed.");
        // Add logic for failed form submission
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      // Add logic for handling errors during form submission
    }
  };
  const clickSignup = () => {
    navigate("/");
  };
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg"
        style={{ backgroundColor: "#F4ECF7" }}
      >
        <div className="container-fluid justify-content-center">
          <div className="d-flex flex-row">
            <a className="navbar-brand navbar" href="#">
              <img src="./logo.png" alt="" width={100} />
              <div className="d-flex flex-column p-2 pt-0 pb-0 ">
                <h1 className="mb-1">
                  PES Modern College of Engineering, Pune
                </h1>
                <p className="mb-1">MCA Department</p>
              </div>
            </a>
            <button
              className="position-absolute bottom-0 end-0"
              onClick={clickSignup}
            >
              LogOut
            </button>
          </div>
        </div>
      </nav>
      <section className="background-radial-gradient overflow-hidden p-5">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n  margin: 0;\n    overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
          }}
        />

        <div className="container py-5 px-md-10 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Request Stationary Here <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for MCA Department
                </span>
              </h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass ">
                <div className="card-body px-4 py-5 px-md-5">
                  <Container>
                    <h2>Stationary Form</h2>
                    <Form
                      id="contactform"
                      action="https://formsubmit.io/send/94a51137-0921-4c06-9b29-e20d1a8e62c5"
                      method="POST"
                      className="p-3 mt-3"
                    >
                      <Form.Control
                        type="hidden"
                        name="_redirect"
                        id="name"
                        value="https://z6rnmq.csb.app/Admin"
                      />
                      <div className="form-field d-flex align-items-center">
                        <Form.Control
                          placeholder="Username"
                          type="text"
                          name="userName"
                          id="userName"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                      <div className="form-field d-flex align-items-center">
                        <Form.Control
                          placeholder="UserEmail"
                          type="email"
                          name="userEmail"
                          id="userEmail"
                          aria-label="UserEmail"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                      <div className="form-field d-flex align-items-center">
                        <Form.Control
                          placeholder="Mobile"
                          type="number"
                          name="userMobile"
                          id="userMobile"
                          aria-label="UserMobile"
                          aria-describedby="basic-addon1"
                          required
                        />
                      </div>
                      {inputFields.map((inputField) => (
                        <Row key={inputField.id}>
                          <Col md={7}>
                            <Form.Group controlId={`value-${inputField.id}`}>
                              <Form.Label>{inputField.label}</Form.Label>
                              <Form.Control
                                type="text"
                                name={`lable-${inputField.id}`}
                                value={inputField.value}
                                onChange={(e) => handleChange(inputField.id, e)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      ))}
                      <Button variant="primary" onClick={handleAddFields}>
                        Add
                      </Button>
                      <button className="btn mt-3">Submit</button>
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicForm;
