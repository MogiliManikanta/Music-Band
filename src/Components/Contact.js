import React from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../Images/Music.png'

const Contact = () => {

  const navigate = useNavigate();

  // const scriptURL = 'https://script.google.com/macros/s/AKfycbxGbpmqIjlhF6V-SLM8wEIeBs1Jw6Jqpkeffo5vhqsvPTqvlR-nb7XAprbgkyKM87oRCQ/exec'
	// 		const form = document.forms['contactform']
		  
	// 		form.addEventListener('submit', e => {
	// 		  e.preventDefault()
	// 		  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
	// 			.then(response => alert("Thank you! your form is submitted successfully." ))
	// 			.then(() => {  window.location.reload(); })
	// 			.catch(error => console.error('Error!', error.message))
	// 		})

  
   let  handleSubmit = () => {
     
    alert("Message send!")
    // setTimeout('', 9000);
    // navigate("/")
     
   }



  return (

    <div  style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
  
  
       
    <div className="container px-5">
    <div className="title" style={{color:"#0a0a29"}}> Contact </div>
    <form method='post'  name='contactform'  action='https://script.google.com/macros/s/AKfycbxGbpmqIjlhF6V-SLM8wEIeBs1Jw6Jqpkeffo5vhqsvPTqvlR-nb7XAprbgkyKM87oRCQ/exec'  >
    <div className="form">
     

      <div className="input_field">
        <label>Name</label>
        <input type="text" className="input" name="name1" />
      </div>

     

      <div className="input_field">
        <label>Email Address</label>
        <input type="email" className="input" name="email" />
      </div>

      <div className="input_field">
        <label>Mobile</label>
        <input type="number" className="input" name="number" />
      </div>

      

      <div className="input_field">
        <label>Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" cols="50" name="message" ></textarea>
      </div>

      

      <div className="input_field">
        {/* <input type="submit" value="Send Message" className="btn" onclick="sendMSG()"/> */}
        <button type="submit" value="Send Message" className="btn btn-primary" onClick={handleSubmit}>
              Submit
           </button>
      </div>
     
    </div>
    </form>
  </div>




</div>

  )
}

export default Contact