import CreateAccount from './createaccount'
import Accountconfirmation from './accountconfirmation'
import Loginwithotp from './loginwithotp'
import Email from '../component/Email'
import { useState,useEffect } from 'react'

export default function Example() {
  const [page,setPage]=useState(1)
  const[step1,setStep1]=useState([
    { id: '1', name: 'Email', status: 'current'},
    { id: '2', name: 'OTP', status: 'upcoming'},
    { id: '3', name: 'Create Account', status: 'upcoming'}
  ])

// const FormTitles=["Email","Otp","Create Account","Confirm"];
const steps = [
  { id: '1', name: 'Email', status: 'current' },
  { id: '2', name: 'OTP', status: 'upcoming' },
  { id: '3', name: 'Create Account', status: 'upcoming' },
  { id: '4', name: 'Confirm', status: 'upcoming' },

]

useEffect(()=>{
  const result = step1.map((ele:any) => {
    if(ele.id == page){
      console.log("id-1",ele.id)
      return {...ele,status:'current' }
    } 
    if (page-1 &&  ele.id == page-1){
      console.log("id-2",ele.id)
      return {...ele,status:'completed' }
    }
    if (page+1 &&  ele.id == page+1){
      console.log("id-3",ele.id)
      return {...ele,status:'upcoming' }
    } 
    return ele
  })
  setStep1(result)
},[page])



  const PageDisplay = () =>{
  if(page === 1){
    return <CreateAccount />
  } else if(page === 2){
    return <Loginwithotp />
  } else if(page === 3){
    return <Accountconfirmation />
  } 
}


// const PageDisplay = () =>{
//     if(page === 1){
//         return <CreateAccount />
//       } else if(page === 2){
//         return <Otp />
//       } else{
//         return <Accountconfirmation />
//       } 
//     }
// }

const prevClick = () => {
  setPage(page-1)
}

const nextClick = () => {
  setPage(page+1)

}





  return (
    <>
     <nav className="flex items-center justify-center" aria-label="Progress">
      <p className="text-sm font-medium">
        Step {step1.findIndex((step) => step.status === 'current') + 1} of {step1.length}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {step1.map((step) => (
          <li key={step.name}>
            {step.status === 'complete' ? (
              <a  className="block w-2.5 h-2.5 bg-[#5C20CF] rounded-full hover:bg-indigo-900">
                <span className="sr-only">{step.name}</span>
              </a>
            ) : step.status === 'current' ? (
              <a  className="relative flex items-center justify-center" aria-current="step">
                <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                  <span className="w-full h-full rounded-full bg-indigo-200" />
                </span>
                <span className="relative block w-2.5 h-2.5 bg-[#5C20CF] rounded-full" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </a>
            ) : (
              <a  className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
                <span className="sr-only">{step.name}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
     <div>
       <h1>{PageDisplay()}</h1>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  disabled={page === 1}  onClick={prevClick} >prev</button>
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  disabled={page <= steps.length} type="button" onClick={nextClick}>next</button>
 </div>
</>
  )
}