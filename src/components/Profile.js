import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { profile } from '../api/auth';
import { useQuery } from '@tanstack/react-query';
import profileImg from '../images/profile-user.png';

const Profile = () => {
    const { data, isFetching, isSuccess } = useQuery({
        queryKey: ["profile"],
         queryFn:  ()=>profile(),
       });

       const { username,image, balance } = data || {};

  
  return  (
    <div className='App '>
      <div className='home-container'>
      
      <div className='container  py-5 '>
      <div className='mb-5 '>
      <img className='rounded-5'
              src={image === '' ? profileImg :"https://react-bank-project.eapi.joincoded.com/"+ image} 
              width="100px" 
              alt="User Profile" 
            />        </div>
        <div className="row mt-3">
  


          <div className='col-6'>
          <h3>Username: </h3>
          </div>
          <div className='col-6'> 
          <h3 className="">{username} </h3>
          </div>
     
        <div className="row">
          <div className='col-6'>
          <h3>Balance: </h3>
          </div>
          <div className='col-6  text-center'>
         <h3><label className="">{balance} </label>
        <label className="mx-3  text-color">KWD</label> </h3>
          </div>
        </div>
      </div>
      
      </div>
      </div>
    </div>
    
  )
}

export default Profile