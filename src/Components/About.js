import React from 'react'
import './abtstyle.css'
import bandlogo from '../Images/band.webp'


const About = () => {
  return (
    <div>

    
        
<div>
      <div class="s1 ">
		<div class="c1">
			<div class="cs">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content1 " >
					{/* <h3>This is music Band</h3> */}
					<p class="text-justify">A group of people who join together to form a band to create, play, perform and sing lyrics, instruments, songs and music together.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
				</div>

				
			</div>
			<div class="image-sec">
				<img src={bandlogo} alt=""/>
			</div>
		</div>
	</div>
    </div>

    </div>
  )
}

export default About