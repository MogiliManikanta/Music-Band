import React from 'react'

import poster from '../Images/The Cyrus img.png'





import '../App.css'
import INS from './INS'


const Banner = () => {
  return (
    <div >

     <div class=" active " >
 
    <img src={poster} class="d-block w-100 " alt="banner" />

    </div>

    <div className=' d-flex row mx-5 my-5 py-5'>

    <div className='container' >
    Join the band, whether you are a beginner or an advanced learner, whether you wish to pursue music as a hobby or as a profession.
    At the Academy, we work hard to give you a high quality learning experience with a clear path of progression and well defined milestones. We have strived to take the vast curriculum of Indian Classical Music and demystify it, define milestones and impart learning using some great techniques and tools that are both fun and effective. When you enroll for a course at the academy, we communicate what you can accomplish on successful completion of the course.
    </div>

   
   
    <div class="image-sec">
				<img src="https://img.freepik.com/free-vector/musical-melody-symbols-yellow-splotch_1308-64213.jpg?w=2000" alt=""/>
			</div> 
   

    </div>

    

  <INS/>
  

    

    </div>
  )
}

export default Banner