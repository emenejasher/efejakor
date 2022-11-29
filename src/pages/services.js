import React from 'react';
import companyLogo from "./logo.png";
import manImage from "../manufacturing images/OIP.png";
import conImage from "../construction images/Const.png";
import agroImage from "../Agro Images/Pen.png";
import servImage from "../service images/pipelines.png";
//import './App.css';

const About = () => {
    return (
        // <div>
        //     <h1>
        //         God is the greatest Helper that anyone 
        //         can have.
        //     </h1>
        // </div>
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
                    Engineering Services                        
                        </h1>
                        <div>
							<img src={conImage} alt="construction"/>
						</div>

                    <p class="text-small">
                       We undertake Civil and Building Engineering 
                       services, Structural Engineering, electronics
                       Electrical Engineering; Mechanical Engineering,
                       Chemical and Petrochemical Engineering, Machinery,
                       Manufacturing, Maintenance, Production, distribution
                       and supplies of all kinds of Engineering equipments.
                       We have a second to none delivery timeline, and have 
                       a customer satisfaction first policy. Why not let us 
                       handle your next project? 
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                    Agro-allied Services                   
                    </h1>
                    <div>
							<img src={agroImage} alt="Poultry"/>
						</div>
                    <p class="text-small">
                        We undertake Agro-allied businesses, We also manufacture
                        and supply Agro-allied equipments. Our expertise in things
                        area spans Farm Implements and Machinery, Fertilizers,
                        Improved Seeds, Agro-chemicals and Livestock Feeds, etc.
                        We also engage in the preservation and processing of Farm and 
                        agricultural produce, and associated products.
                        We have upwards of 12 years experience in Meat production,
                        farm mechanization as well as Poultry construction/Eggs supply.


                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Essential Services                    
                        </h1>
                        <div>
							<img src={servImage} alt="services"/>
						</div>
                    <p class="text-small">
                        We undertake construction, Maintenance and Remodelling
                        services of every description; including the Planning,
                        Design, Erection, Improvement, Estate Developments, Repairs,
                        Alteration, Rig and Oil related servicing; Maintenance and 
                        Demolition of Construction Works.
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        What is More?
                    </h1>
                    <p class="text-small">
                        We also undertake importation/Exportation,
                        Clearing and Forwarding;
                        General Merchants, Industrialists, Financial
                        Services, and the Distribution of Beverages of all
                        kinds
                        </p>
                </div>
            </div>
        </section>
        <footer className="footer">
            <p className="text-footer">
            Copyright © 2022 Efejakor International Limited.
					All rights reserved            </p>
        </footer>
    </div>
    );
};

export default About;