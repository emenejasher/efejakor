// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <h1>
//                 Welcome to Efejakpo Enterprises
//             </h1>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import companyLogo from "./logo.png";
import backgroundImage from "./ongoing-construction-site.png";
import manImage from "../manufacturing images/OIP.png";
import conImage from "../construction images/induct.png";
import agroImage from "../Agro Images/poul2.png";
//import './App.css';

function App() {
	return (
		<div>
			  <nav class="">
            <ul class="nav-list">
					<div class="logo">
					<img src={companyLogo} alt="./logo.png" />

            
      

					</div>
					<li><a href="/index">Home</a></li>
					<li><a href="/services">Services</a></li>
					<li><a href='/projects'> Recent Jobs</a></li>
					<li><a href='/contact'>Contact Us</a></li> 
				</ul>

				 {/* <div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div> */}
			</nav>
			
			
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
					<h1 class="text-big">
						</h1>
						
					<div>
							<img src={backgroundImage} alt="construction"/>
						</div>

						<p class="text-small">
						Efejakor International Limited is a fast growing registered
						Nigerian company offering integrated 
						civil engineering, and manufacturing solutions and services. 
						We specialize in bringing the vision in the minds of our
						clients to reality in a thoughtful, service oriented
						and enviromentally safe manner. Our RC No. is 1800683.
						We have a vast collection
						of experienced hands and heads in civil and building
						engineering services, structural engineering, electrical
						and electronics engineering; mechanical engineering, chemical
						and petrochemical engineering, manufacturing, maintenance, 
						production; distribution and supplies of all kinds of engineering 
						equipment.
						   In sum, our expertise includes the planning, design, 
						   engineering, construction, maintenance and operation, 
							for building, infrastructure and industry 
							projects.
						</p>
					</div>
				
				</div>
				
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
						Construction BEGINS from  IMAGINATION
						</h1>

						<div>
							<img src={manImage} alt="manufacturing" />
						</div>
						<p class="text-small">
						We are experts in our field with the comprehensive 
						and country-specific knowhow, robust resources and 
						skills to deliver quality results, on time and within 
						budget, no matter the project scope or challenge. 
						The breadth and depth of our expertise is bolstered 
						by our highly experienced staff and our commitment to 
						implementing innovative solutions towards construction 
						challenges.
						</p>
					</div>
				</div>
				
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
						Our experience and resources ensure project success.						</h1>
						<div>
							<img src={conImage} alt="creative"/>
						</div>
						<p class="text-small">
						Efejakor International Limited's 
						core values of quality, integrity, 
						partnership and innovation underpin our corporate 
						culture and define how we conduct business. Our 
						unwavering commitment to upholding a high standard 
						of excellence across all aspects of our operations 
						has consistently differentiated our company and 
						supported our ability to unfailingly meet clients’ 
						requirements.
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
						Our vision is to be Nigeria's most dynamic 
						construction company.						</h1>
						<p class="text-small">
							We are fast paced, deliberate, delicate, result
							oriented and customer satisfaction minded. Profit 
							for us is second place when compared with efficient 
							service delivery. We aim to serve 

							WHY NOT GIVE US A TRY TODAY?
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					Copyright © 2022 Efejakor International Limited.
					All rights reserved
				</p>
			</footer>
		</div>
	)
}

export default App
