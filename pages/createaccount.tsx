import React from 'react'
import Image2 from '../public/android-icon-512x512.png'
import Link from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function signupform() {
  const formik = useFormik({
    initialValues:{
        email:'',
        fullName:'',
        companyName:'',
        mobileNumber:'',
        password:'',
        confirmedPassword:''
},
validationSchema:  Yup.object({
  email: Yup.string().email('Please enter valid details').required('Please enter valid details'),
  fullName: Yup.string().min(3,'Please enter valid details').required('Please enter valid details'),
  companyName: Yup.string().min(3,'Please enter valid details').required('Please enter valid details'),
  mobileNumber: Yup.string().min(10,'Please enter valid details').required('Please enter valid details'),
  password: Yup.string()
      .required("Password is required")
      .min(6, 'Password must be at least 6 char'),
      confirmedPassword: Yup.string()
      .required("Password is required")
      .min(6, 'Password must be at least 6 char'),
}),
onSubmit: values => {
  alert(JSON.stringify(values, null, 2))
  console.log("values",values);
  console.log(formik.values.email)
},
}
  )

  //console.log("formikName",formik.values.fullName)
  return (

    /*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <img
            className="mx-auto h-12 w-auto"
            src={Image2.src}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extralight text-gray-900">Sign up</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
           
            <div  className="font-medium text-[#5C20CF] ">
             Become a WIZard!
            </div>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 bg-gray-100">
            <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    //name="fullName"
                    type="text"
                    autoComplete="name"
                    {...formik.getFieldProps('name')}
                          onChange={formik.handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
             
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                  Company name
                </label>
                <div className="mt-1">
                  <input
                    id="companyName"
                    //name="companyName"
                    type="text"
                    autoComplete="company-name"
                    {...formik.getFieldProps('companyName')}
                    onChange={formik.handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                  Mobile number
                </label>
                <div className="mt-1">
                  <input
                    id="mobileNumber"
                   // name="mobileNumber"
                    type="text"
                    autoComplete="Mobile-number"
                    {...formik.getFieldProps('mobileNumber')}
                    onChange={formik.handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    //name="email"
                    type="text"
                    autoComplete="email"
                    {...formik.getFieldProps('email')}
                    onChange={formik.handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    //name="password"
                    type="password"
                    autoComplete="current-password"
                    {...formik.getFieldProps('password')}
                    onChange={formik.handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                 Confirm password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    //name="confirmPassword"
                    type="password"
                    autoComplete="confirm-password"
                    {...formik.getFieldProps('confirmPassword')}
                    onChange={formik.handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

            

            


              <div className="flex items-center justify-between">
              <div className="flex items-center">
                 
                </div>

                <div className="text-sm">
                <Link href="/loginform">
                          <a href="#" className='font-medium text-[#5C20CF] hover:underline'>
                          Login, instead?
                        </a>
                          </Link>
                  
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#5C20CF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>

            {/* <div className="mt-6">
              

              <div className="mt-6 grid grid-cols-3 gap-28 ">
                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>


                <div>
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}


