import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router";
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap CSS for styling
import "../App.css";
import { profile } from "../api/auth";
import { useMutation, useQuery } from "@tanstack/react-query";


const Home = () => {


const { data, isFetching, isSuccess } = useQuery({
  queryKey: ["profile"],
   queryFn: ()=>profile(),
 });



 const { username,image,balance } = data || {};

    

  return (
    <div className="App">
      <div className="home-container  d-flex align-items-center  flex-column pt-5 pb-5 m-4">
        <h3 className="mb-5">Your Available Balance: </h3>
        <div className="d-flex flex-row">
          <h5 className="m-1">{balance} </h5>
          <h5 className="m-1 text-color">KWD</h5>
        </div>
      </div>
      <div className="home-container  d-flex align-items-center  flex-column pt-5 pb-5 m-4">
       
        <div className="d-flex justify-content-around mb-3">
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="action"
              id="deposit"
              value="deposit"
            
            />
            <label class="form-check-label" for="deposit">
              Deposit
            </label>
          </div>
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="action"
              id="withdraw"
              value="withdraw"
        

            />
            <label class="form-check-label" for="withdraw">
              Withdraw
            </label>
          </div>
          
        </div>
        <Formik
          className="container "
          initialValues={{ amount: "" }}
          onSubmit={(values) => {
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
