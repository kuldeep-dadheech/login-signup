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
  `public/android-icon-512x512.png``
*/
import Image from 'next/image'
import {useState,useEffect} from 'react'
import Image1 from "../public/WorldImage.png";
import Image2 from '../public/android-icon-512x512.png'
// import Image2 from "../public/android-icon-512x512.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Link from 'next/link';

export default function loginform() {
  
  const [visible,setvisible]=useState(false)
  const [icon,setIcon]=useState(false)
  const [choice,setChoice] = useState("")
  const inputtype= visible ? "text" : "password";
  const formik = useFormik({
    initialValues:{
        emailOrMobileNumber:'',
        password:''
},
validationSchema:  Yup.object({
  emailOrMobileNumber: Yup.string().when("isEmail", {
      is: '1',
      then: Yup.string()
          .email("Please enter valid details")
          .required("Please enter valid details"),
      otherwise: Yup.string()
          .required("Please enter valid details")
          .min(10, 'Please enter valid details'),
  }),
  password: Yup.string()
      .required("Password is required")
      .min(6, 'Password must be at least 6 char'),
}),
onSubmit: values => {
  alert(JSON.stringify(values, null, 2))
  console.log("values",values);
  console.log(formik.values.password)
},
}
)
// useEffect(()=>{
//     if(formik.values.password){
//       setIcon(true)
//     } else{
//       setIcon(false)
//       setvisible(false)
//     }
//   },[formik.values.password])
  const toggle = () =>{
    setvisible(prevstate => !prevstate)
  }

//const router = useRouter()
  const handlechange = (event:any) =>{
    const query =event.target.value
    if(query){
      setIcon(true)
    } else {
      setIcon(false)
      setvisible(false)
    }
  }
  // const handleClick =(e)=>{
  //     e.preventDefault();
      
  //   switch(choice){
  //       case "signUp":{
  //           router.push('/SignUpForm');
  //            break};
  //       case "forgotPassword": {
  //           router.push('/ForgotPassword');
  //            break}
  //       case "loginWithOTP": {
  //           router.push('/LoginWithOTP');
  //            break}
  //   }
  // }
  //console.log("formik",formik.values.emailOrMobileNumber)
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="h-screen flex justify-center ">
          <div className="flex-1 flex flex-col  justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="flex items-center justify-start" >
                <img
                className='h-12 w-12 mt-5  '
                  src={Image2.src}
                  alt="Workflow"
                />
                <h2 className="mt-6  ml-2 text-3xl font-extralight		 text-gray-900">Welcome to Wiz</h2>
              
              </div>
  
              <div className="mt-8">
              
                  
  
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address/Mobile number
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          type="text"
                          autoComplete="email"
                          placeholder="Mobile number or email"
                          
                          {...formik.getFieldProps('emailOrMobileNumber')}
                          onChange={formik.handleChange}
                          className={`appearance-none
                           block
                            w-full
                            border
                             px-3
                              hover:border-gray-400  
                              py-2  
                               rounded-md
                                shadow-sm
                                 placeholder-gray-400
                                  focus:outline-none
                                  
                                   
                                   ${formik.touched.emailOrMobileNumber && formik.errors.emailOrMobileNumber ? (
                                    `focus:ring-red-500 focus:border-red-600 border-red-300 `
                                  ) : `focus:ring-purple-500 
                                  focus:border-purple-600 `}
                                    sm:text-sm`}
                        />
                         {formik.touched.emailOrMobileNumber && formik.errors.emailOrMobileNumber ? (
             <div className='text-red-500 text-sm'>{formik.errors.emailOrMobileNumber}</div>
           ) : null}
                      </div>
                    </div>
  
                    <div className="space-y-1">
                      <label htmlFor="password" className="block   text-sm font-medium text-gray-700">
                        Password
                      </label>
                      
                      <div className="mt-1 flex items-center cursor-pointer	 justify-end ">
                        { icon && <div className="contents" >
                        {visible ? 
                         <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" className="h-6 -ml-3 absolute w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    :
                    <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" className="h-6 -ml-3 absolute w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                        } 
                        </div>}
                       
                    
                        <input
                          id="password"
                          type={inputtype}
                          placeholder="Password"
                          autoComplete="current-password"
                          
                          {...formik.getFieldProps('password')}
                          onChange={formik.handleChange}
                          className={`appearance-none 
                          hover:border-gray-400
                          block
                           w-full
                            px-3
                             py-2
                              border
                               border-gray-300 
                               rounded-md shadow-sm
                                placeholder-gray-400 
                                
                                focus:outline-none 
                                ${formik.touched.emailOrMobileNumber && formik.errors.emailOrMobileNumber ? (
                                    `focus:ring-red-500 focus:border-red-600 border-red-300
                                    `
                                  ) : `focus:ring-purple-500 
                                  focus:border-purple-600 `}
                                 sm:text-sm`}

                        />
               
                        <div >
                        
                        </div>
                      
                      </div>
                      {formik.touched.password && formik.errors.password ? (
             <div className='text-red-500 text-sm'>{formik.errors.password}</div>
           ) : null}
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                       
                       <div className="text-sm">
                         <Link href="/loginwithotp">                         
                        <a href="#" className="font-medium text-[#5C20CF] hover:underline" >
                          Login with OTP
                        </a>
                         </Link>
                      </div>
                      </div>
  
                      <div className='text-sm flex flex-col'>
                        <Link href="/forgotpassword">                        
                        <a href="#" className='font-medium text-[#5C20CF] hover:underline' >
                          Forgot your password?
                        </a>
                        </Link>
                        
                      </div>
                    </div>
  
                    <div className='flex flex-col items-center '>
                      <button
                        type="submit"
                        className="w-full 
                        flex
                         justify-center
                          py-2 px-4 
                          border border-transparent 
                          rounded-md 
                          shadow-sm text-sm 
                          font-medium
                           text-white
                            bg-[#5C20CF]  
                            focus:outline-none 
                            focus:ring-2 focus:ring-offset-2
                             focus:ring-indigo-500"
                      >
                        Sign in
                      </button>
        
                      {/* <a href="#" className='font-medium text-sm text-[#5C20CF] hover:underline' onClick={(e)=>{handleClick(e); setChoice("loginWithOTP")}}>
                          Login with OTP
                        </a>
                         */}
                    </div>
                    <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-[#5C20CF]"></div>
                    <Link href="/signupform">                         
                    
    <a href="#" className="flex-shrink mx-4 font-medium text-sm text-[#5C20CF] hover:underline" >New user? Sign up</a>
    
                         </Link>
                         <div className="flex-grow border-t border-[#5C20CF]"></div>
    
</div>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
          <div className="hidden lg:block  w-0 flex-1">
              <div className="flex justify-center items-center h-screen relative">
                <img
                className="absolute object-cover insert-0" 
              src={Image1.src}
              alt="Image loading...."
            />             
              </div>
          </div>
        </div>
       
      </>
    )
}






