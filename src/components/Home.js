import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router";
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap CSS for styling
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <div className="home-container  d-flex align-items-center  flex-column pt-5 pb-5 m-4">
        <h3 className="mb-5">Your Available Balance: </h3>
        <div className="d-flex flex-row">
          <h5 className="m-1">00000 </h5>
          <h5 className="m-1 text-color">KWD</h5>
        </div>
      </div>
      <div className="home-container  d-flex align-items-center  flex-column pt-5 pb-5 m-4">
       
        <div className="d-flex justify-content-around mb-3">
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Deposit
            </label>
          </div>
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Withdraw
            </label>
          </div>
          
        </div>
        <Formik
          className="container "
          initialValues={{ amount: "" }}
          onSubmit={(values) => {
            // handle form submission
          }}
        >
          <Form className=" row mt-5">
            <label>Amount</label>
            <Field
              className="px-2 col-12  mb-3 "
              type="text"
              name="amount"
              placeholder="amount"
            />

            <button type="submit" className=" btn  login-button ">
              submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Home;
