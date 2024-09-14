import React from 'react'
import GenderCheckBox from './GenderCheckBox'
const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className=' w-full p-6  bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>

   <h1 className='text-3xl select-none font-semibold text-center text-white'>SignUp <span className='text-blue-500'>Chat App</span></h1>



   <form className='mt-2'>
<div>
  <label className='label p-2'>
    <span className='text-base label-text'>FullName</span>
    
  </label>
  <input type="text" placeholder='Ayan Mehdi' className='w-full input input-bordered h-10'/>
</div>

<div>
  <label className='label p-2'>
    <span className='text-base label-text'>Username</span>
    
  </label>
  <input type="text" placeholder='Arch' className='w-full input input-bordered h-10'/>
</div>

<div>
  <label className='label'>
    <span className='text-base label-text'>Password</span>
    
  </label>
  <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
</div>


<div>
  <label className='label'>
    <span className='text-base label-text'>Confirm Password</span>
    
  </label>
  <input type='password' placeholder='Enter Confirm Password' className='w-full input input-bordered h-10'/>
</div>

<GenderCheckBox></GenderCheckBox>



<a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition-all'>Already have an account</a>

<div>
  <button className='btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-600 border-none'>SignUp</button>
</div>

</form>
      </div>
    </div>
  )
}

export default SignUp


// starter code here


// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'
// const SignUp = () => {
//   return (
//     <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
//       <div className=' w-full p-6  bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>

//    <h1 className='text-3xl select-none font-semibold text-center text-white'>SignUp <span className='text-blue-500'>Chat App</span></h1>



//    <form className='mt-2'>
// <div>
//   <label className='label p-2'>
//     <span className='text-base label-text'>FullName</span>
    
//   </label>
//   <input type="text" placeholder='Ayan Mehdi' className='w-full input input-bordered h-10'/>
// </div>

// <div>
//   <label className='label p-2'>
//     <span className='text-base label-text'>Username</span>
    
//   </label>
//   <input type="text" placeholder='Arch' className='w-full input input-bordered h-10'/>
// </div>

// <div>
//   <label className='label'>
//     <span className='text-base label-text'>Password</span>
    
//   </label>
//   <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
// </div>


// <div>
//   <label className='label'>
//     <span className='text-base label-text'>Confirm Password</span>
    
//   </label>
//   <input type='password' placeholder='Enter Confirm Password' className='w-full input input-bordered h-10'/>
// </div>

// <GenderCheckBox></GenderCheckBox>



// <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block transition-all'>Already have an account</a>

// <div>
//   <button className='btn btn-block btn-sm mt-2 bg-blue-700 hover:bg-blue-600 border-none'>SignUp</button>
// </div>

// </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp
