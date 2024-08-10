import React from 'react'
import "./MainLanding.css"
import Problems from '../Problems/Main'
function MainLanding() {
  return (
    <div className='Main-Landing-Main'>
         <div className='Main-Landing-1'>
             Welcome to Code Dyanmos
         </div>
         <div className=" Main-Landing-2">
         Join our coding platform to enhance your skills, solve challenging problems and build a strong programming foundation.
         </div>
         <div className='Main-Landing-Button'>
         Login
         </div>
         {/* <Problems/> */}
    </div>
  )
}

export default MainLanding