import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { transaction } from "../api/auth";

const Transaction = () => {
  const transType = ["all", "deposit", "withdraw", "transfer"]
  const { data, isFetching, isSuccess, error } = useQuery({
    queryKey: ["transaction"],
    queryFn: () => transaction(),
  });



  // Filter state for transactions
  const [filter, setFilter] = useState("all");
  // Apply filtering
  const filteredTransactions =
    filter === "all"
      ? data
      : data?.filter((transaction) => transaction.type === filter)
      ;
const handleOnChange =()=>{
  
}
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

      <div className="trans-container px-5 py-2">
        <div className="d-flex justify-content-center mb-3">
          <label className="text-color">Filter: </label>
          {transType.map((option) => (
            <div className="form-check form-check-inline ms-5" key={option}>
              <input
                className="form-check-input"
                type="radio"
                name="transactionFilter"
                value={option}
                id={option}
                checked={filter === option}
                onChange={(e) => setFilter(e.target.value)}
              />
              <label className="form-check-label" htmlFor={option}>
                {option}
              </label>
            </div>
          ))}
        </div>

        {/* Date Range Filter */}
        <div className="d-flex justify-content-center">
          <div className="mx-5">
            <label className="text-color">From:</label>
            <input type="date" name="fromDate" className="m-2 px-2" />
          </div>
          <div className="mx-5">
            <label className="text-color">To:</label>
            <input type="date" name="toDate" className="m-2 px-2" />
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="login-container px-5 py-3 mt-4 m-2">
     <div className="container"> 
      <div className="row">
      <h4 className="col-4">Type</h4>
      <h4 className="col-4">Amount</h4>
      <h4 className="col-4">Date</h4> 
      </div>
     </div>
   
    {filteredTransactions?.map((transaction)=>(<div className="container m-2" key={transaction.id}> 
      <div className="row">
      <h4 className="col-4">{transaction.type}</h4>
      <h4 className="col-4">{transaction.amount}</h4>
      <h4 className="col-4">{transaction.updatedAt.slice(0,10)}</h4> 
      </div>
     </div>))} 
             
       
   
        
        
      </div>
    </div>
  );
};

export default Transaction;
