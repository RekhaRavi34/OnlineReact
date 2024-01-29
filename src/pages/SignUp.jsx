import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    
   const [userDetails,setUserDetails]=useState({
    email:"",
    password:"",
    firstName:"",
   });
   const [isSubmitted,SetIsSubmitted] = useState(false);
   function handleUserInputs(e){
    setUserDetails({
      ...userDetails,
      [e.target.name]:e.target.value,
    })
   }  
    
  return (
  
    // In order to use justify-center or any other flex-related utility classes in Tailwind CSS, 
    // you need to apply the flex class to the container. 
    //The flex class sets the display property of the element to flex, making it a flex container.
    
    <div className='bg-[#D6D6D6] 
                    w-screen 
                    h-screen 
                    flex justify-center	items-center'>
       {/*// unlike Rn wherein flex-col is default, here flex-col need to be set manually */}

      <div className='flex-col '>

          <h1 className='text-center 
                         text-[#224957] 
                         text-4xl 
                         font-bold'>Sign Up</h1>

          <p className='font-normal 
                        text-base 
                        text-[#224957] 
                        pt-8 
                        tracking-wider'>Sign up and start managing your candidates!</p>
          
          {/* the child won't inhert the flex properties. So you have to specify the flex properties for children div */}
          <div className='flex justify-center	items-center'>
            <div className='flex-col'>
            <div className='mt-6'>

                   <label htmlFor="input-label" 
                          className="block 
                                     text-sm 
                                     font-medium 
                                     mb-2 text-black ">First Name</label>

                   <input type="text"  
                          className="py-3 px-4 block w-72 font-regular text-white placeholder-white border-gray-200 bg-[#224957] rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " 
                          placeholder="Enter your first name"
                          name="firstName"
                          onChange={handleUserInputs}/>
            </div>
            {isSubmitted && !userDetails.firstName && <h1 className='text-red-800 text-xs'>First Name is mandatory</h1>}
               <div className='mt-2'>

                  <label htmlFor="input-label" 
                         className="block 
                                text-sm 
                                font-medium 
                                mb-2 text-black ">Email</label>

                  <input type="text"  
                         className="py-3 px-4 block w-72 font-regular text-white placeholder-white border-gray-200 bg-[#224957] rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " 
                         placeholder="Enter your email"
                         name="email"
                         onChange={handleUserInputs}/>
               </div>
               {isSubmitted && !userDetails.email && <h1 className='text-red-800 text-xs'>Email is mandatory</h1>}
               <div className='mt-2'>
                  <label htmlFor="input-label" 
                         className="block 
                                text-sm 
                                font-medium 
                                mb-2 
                                text-black ">Password</label>

                  <input type="text"  
                         className="py-3 px-4 block w-72 font-regular text-white placeholder-white border-gray-200 bg-[#224957] rounded-lg text-xs focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " 
                         placeholder="Enter your password"
                         name="password"
                         onChange={handleUserInputs}/>
               </div>
               {isSubmitted && !userDetails.password && <h1 className='text-red-800 text-xs'>Password is mandatory</h1>}
               <div className='flex justify-end mt-9'>
               <p className='text-black 
                             font-medium 
                             text-sm'>Already having an account? <Link className='text-blue-600' to="/">Login</Link></p>
               </div>
               <button disabled={ userDetails.email.length < 0 || userDetails.password.length < 0 } 
                                  //to disable and to set cursor options when values are not entered "cursor-not-allowed"
                       className={`${!userDetails.password || !userDetails.email ? " bg-[#bcf5d9] text-[#6caec6]":"cursor-pointer bg-[#20DF7F] text-[#224957]"}
                                   text-base 
                                   w-full 
                                   font-regular 
                                   rounded-lg 
                                   py-2 px-2 
                                   mt-5 `}
                       onClick={()=>{SetIsSubmitted(true)}} >SignUp</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SignUp;