import React from "react";
import profileImg from "../images/profile-user.png";
import { Formik, Form, Field } from "formik";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { profile, transfertoUser } from "../api/auth";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
function User({ username, balance }) {
  const queryClient = useQueryClient();

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: () => profile(),
  });

  const { myusername } = data || {};

  const mutate = useMutation({
    mutationKey: ["transfer"],
    mutationFn: (formData) => transfertoUser(myusername, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
  });
  const handleSubmit = (values) => {
    console.log("values", values);
    mutate.mutate({
      amount: values.amount,
      username: values.username,
    });
  };
  return (
    <div className=" ">
      <div className="user-container">
        <div className="container  py-5 ">
          <div className="mb-5 ">
            <img
              className="rounded-5"
              src={profileImg}
              width="100px"
              alt="User Profile"
            />
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <h3>Username: </h3>
            </div>
            <div className="col-6">
              <h3 className="">{username} </h3>
            </div>

            <div className="row">
              <div className="col-6">
                <h3>Balance: </h3>
              </div>
              <div className="col-6  text-center d-flex ">
                <h3>
                  <label className="">{balance} </label>
                  <label className="mx-3  text-color">KWD</label>{" "}
                </h3>
              </div>
            </div>
          </div>
          <Formik
            className="container "
            initialValues={{ amount: 0, username: username }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form className=" row mt-5">
              <label>Trasfer Amount</label>
              <Field
                className="px-2 col-12  mb-3 "
                type="number"
                name="amount"
                placeholder="amount"
              />

              <button type="submit" className=" btn  login-button ">
                transfer
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default User;
