import React from "react";

const Transaction = () => {
  return (
    <div className="App">
      <div className="w-50 mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="border border-black mx-3 px-3 w-75 "
        />
        <button type="submit" className="btn butt">
          Search
        </button>
      </div>
      <div className="trans-container px-5 py-2 ">
        <div className="  d-flex justify-content-center mb-3">
          <label className="text-color">Filter: </label>
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              All
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
              Deposit
            </label>
          </div>
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3">
              Withdraw
            </label>
          </div>
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="option4"
            />
            <label class="form-check-label" for="inlineRadio4">
              Taranfer
            </label>
          </div>
          <div class="form-check form-check-inline ms-5">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio5"
              value="option5"
            />
            <label class="form-check-label" for="inlineRadio5">
              By Date
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="mx-5">
            <label className="text-color">from:</label>
            <input type="date" name="fromDate" className="m-2 px-2" />
          </div>
          <div className="mx-5">
            <label className="text-color">to:</label>
            <input type="date" name="toDate" className="m-2 px-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
