
// import React from 'react'
// import AddResume from './components/AddResume'

// function Dashboard() {
//   return (
//     <div className="pt-28 pl-0 pr-10 text-left">
//       <h2 className="font-bold text-3xl">My Resume</h2>
//       <p>Start Creating AI resume for your next Job role</p>

//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-start">
//         <AddResume />
//       </div>
//     </div>
//   )
// }

// export default Dashboard


import React from 'react'
import AddResume from './components/AddResume';

function Dashboard() {
  return (
    <div className='text-left p-10 md:px-20 lg:px-32'>
      <h2 className='pt-20 font-bold text-3xl'>My Resume</h2>
      <p>Start Creating AI resume for your next Job role</p>

      {/* Added mt-10 to create vertical gap */}
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <AddResume />
      </div>
    </div>
  )
}

export default Dashboard;






