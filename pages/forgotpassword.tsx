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
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function forgotpassword() {
  
  const [visible,setvisible]=useState(false)
  const [icon,setIcon]=useState(false)
  const [choice,setChoice] = useState("")
  const inputtype= visible ? "text" : "password";
  const formik = useFormik({
    initialValues:{
        email:''
},
validationSchema:  Yup.object({
  email: Yup.string().email('Please enter valid details').required('Please enter valid details')
 
}),
onSubmit: values => {
  alert(JSON.stringify(values, null, 2))
  console.log("values",values);
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
  const toggel = () =>{
    setvisible(prevstate => !prevstate)
  }

//   const router = useRouter()
//   const handelchange = (event) =>{
//     const query =event.target.value
//     if(query){
//       setIcon(true)
//     } else {
//       setIcon(false)
//       setvisible(false)
//     }
//   }
//   const handleClick =(e)=>{
//       e.preventDefault();
      
//     switch(choice){
//         case "signUp":{
//             router.push('/SignUpForm');
//              break};
//         case "loginWithPassword": {
//             router.push('/NewLogin');
//              break}
//         case "loginWithOTP": {
//             router.push('/LoginWithOTP');
//              break}
//     }
//   }
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
                <h2 className="mt-6  ml-2 text-3xl font-extralight		 text-gray-900">Recover Password</h2>
              
              </div>
  
              <div className="mt-8">
              
                  
  
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6" onSubmit={formik.handleSubmit}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          type="text"
                          autoComplete="email"
                          placeholder="Email"
                          
                          {...formik.getFieldProps('email')}
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
                                  
                                   
                                   ${formik.touched.email && formik.errors.email ? (
                                    `focus:ring-red-500 focus:border-red-600 border-red-300 `
                                  ) : `focus:ring-purple-500 
                                  focus:border-purple-600 `}
                                    sm:text-sm`}
                        />
                         {formik.touched.email && formik.errors.email ? (
             <div className='text-red-500 text-sm'>{formik.errors.email}</div>
           ) : null}
                      </div>
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
                          <Link href="/loginform">
                          <a href="#" className='font-medium text-[#5C20CF] hover:underline'>
                          Login with password
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
                         Reset
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
              alt="KDDDDD"
            />             
              </div>
          </div>
        </div>
       
      </>
    )
}






