// import React from 'react';

// const Blogs = () => {
//     return (
//         <h1>
//             You are free to express your views here!
//         </h1>
//     );
// };

// export default Blogs;

import React from 'react';
import companyLogo from "./logo.png";
import manImage from "../manufacturing images/Manu1.png";
import conImage from "../construction images/Decking.png";
import conImage2 from "../construction images/Curvet.png";

import agroImage from "../Agro Images/poult1.png";
import servImage from "../service images/ser1.png";

const Projects = () => {
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
                       See some of our Recent Jobs
                    </h1> <br></br>
                    <br></br>
                    <div>
							<img src={conImage} alt="construction"/>
						</div>
                    <p class="text-small">
                        3 FLOORS 42 SHOPS SHOPPING COMPLEX at
                         Udu Road, Delta State.
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                    </h1>
                    <div>
							<img src={conImage2} alt="construction2"/>
						</div>
                    <p class="text-small">
                       MAJOR CURVET for central outflow at Ugbomoro, 
                       Delta State.
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                    </h1>
                    <div>
							<img src={agroImage} alt="agro2"/>
						</div>
                    <p class="text-small">
                        10,000 birds pen construction for Meat and Eggs
                        at Ugbokodo, Delta State.
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        
                    </h1>
                    <div>
							<img src={manImage} alt="manufacturing2"/>
						</div>
                    <p class="text-small">
                     CHIPS PRODUCTION PLANT for quick molding at Usiefrun, Delta State.
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

export default Projects;