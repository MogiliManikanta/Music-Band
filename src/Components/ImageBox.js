import React from 'react'

import band1 from '../Images/band1.jpeg'
import band2 from '../Images/band2.jpeg'

export default function Image() {
  return (
    <>

    <div className=' text-center my-5 mx-5'>
    <h2 class="card-title py-2" >Our Music <span style={{color:"#FFD700"}}>Group</span> </h2>
    <h5 class="card-text my-3" >With supporting text below as a natural lead-in to additional content.</h5>
    </div>

    <div className=' row '>


    <div class=" col mx-5 px-5 my-2">
  <img src="https://rollingstoneindia.com/wp-content/uploads/2018/05/3-1.jpg" class="card-img-top py-5"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title" ><b>Guitarist</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

<div class=" col mx-5 px-5 my-2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/2016_RiP_Foals_-_Edwin_Congreave_-_by_2eight_-_8SC9559.jpg" class="card-img-top py-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>Keyboardist</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>

<div class=" col mx-5 px-5 my-2">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3Fpt0G56DcYvEKmNxAmAYPo5cxruDWGspw&usqp=CAU" class="card-img-top py-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>Drummer</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>






    
    </div>
  
    </>
  )
}