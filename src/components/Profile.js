import { Form, Formik } from 'formik'
import React from 'react'
import { profile } from '../api/auth';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
    const { data, isFetching, isSuccess } = useQuery({
        queryKey: ["profile"],
         queryFn:  profile()
       });


  
  return (
    <div>
     
       
    
    </div>
  )
}

export default Profile