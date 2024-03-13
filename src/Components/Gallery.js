import React from 'react'
import Video from './Video'


const Gallery = () => {
  return (
    <div >

        {/* <div className='py-5'>
           
           <center><h2 className='card-text'>Image Gallery</h2></center> 
           </div> 
         
        <div className=' row '>


         
  
<div className=" col mx-5 px-5 my-2" >
  <img  src="https://live.staticflickr.com/279/32279411545_239458b6ed_b.jpg" className="card-img-top mt-5" alt="..."/>
  
</div>


<div className=" col mx-5 px-5 my-2" >
  <img  src="https://live.staticflickr.com/279/32279411545_239458b6ed_b.jpg" className="card-img-top mt-5" alt="..."/>
  
</div>
<div className=" col mx-5 px-5 my-2" >
  <img  src="https://live.staticflickr.com/279/32279411545_239458b6ed_b.jpg" className="card-img-top mt-5" alt="..."/>
  
</div>

</div> */}

<div>
        
        <div className=' text-center my-5 mx-5'>
    <h2 class="card-title py-2" >Our <span style={{color:"#FFD700"}}>Images</span> </h2>
   
    </div>

    <div className=' row '>


    <div class=" col mx-5 px-5 my-2">
  <img src="https://live.staticflickr.com/279/32279411545_239458b6ed_b.jpg" class="card-img-top py-5"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title" ><b>Image1</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

<div class=" col mx-5 px-5 my-2">
  <img src="https://live.staticflickr.com/279/32279411545_239458b6ed_b.jpg" class="card-img-top py-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>Image2</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>

<div class=" col mx-5 px-5 my-2">
  <img src="https://live.staticflickr.com/279/32279411545_239458b6ed_b.jpg" class="card-img-top py-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"><b>Imgage3</b></h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>



</div>

    </div>









<div className=' row'>

  <Video/>
</div>




    </div>
  )
}

export default Gallery