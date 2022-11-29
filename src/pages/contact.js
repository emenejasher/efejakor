// import React from "react";

// const Contact = () => {
//     return (
//         <div>
//             <h1>
//                 Contact us on info@Efejakpoenterprises.com
//             </h1>
//         </div>
//     );
// };

// export default Contact;

import React from 'react';
import companyLogo from "./logo.png";
import Footer1 from "../footericons/facebook.png";
import Footer2 from "../footericons/instagram.png";
import Footer3 from "../footericons/twitter.png";

const Contact = () => {
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
                    Contact us:
                                        </h1>
                    <p class="text-small">
                        <h3>
                            Office Address: <h5>
                                No. 10, New Layout, Ugboroke, Effurun-Warri, Delta State.
                            </h5>
                        </h3>
                        <h3>
                           <br></br>Telephone: <h5>
                                +2348065727642 <br></br>
                                +2349014593257
                            </h5>
                        </h3>
                        <h3>
                           <br></br>Email: <h5>
efejakor@gmail.com                            </h5>
                        </h3>
                    </p>
                </div>
            </div>
        </section>
        {/* <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        JavaScript Tutorial
                    </h1>
                    <p class="text-small">
                        JavaScript is the world most popular
                        lightweight, interpreted compiled
                        programming language. It is also
                        known as scripting language for
                        web pages. It is well-known for
                        the development of web page many
                        non-browser environments also use
                        it. JavaScript can be used for
                        Client-side developments as well
                        as Server-side developments.
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        Java Programming Language
                    </h1>
                    <p class="text-small">
                        When compared with C++, Java codes
                        are generally more maintainable
                        because Java does not allow many
                        things which may lead to
                        bad/inefficient programming if used
                        incorrectly. For example,
                        non-primitives are always references
                        in Java. So we cannot pass large
                        objects (like we can do in C++) to
                        functions, we always pass references
                        in Java. One more example, since there
                        are no pointers, bad memory access
                        is also not possible. When compared
                        with Python, Java kind of fits between
                        C++ and Python. The programs are written
                        in Java typically run faster than
                        corresponding Python programs and slower
                        than C++. Like C++, Java does static
                        type checking, but Python does not.
                    </p>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="box-main">
                <div class="secondHalf">
                    <h1 class="text-big" id="program">
                        What is Machine Learning?
                    </h1>
                    <p class="text-small">
                        Machine Learning is the field of study
                        that gives computers the capability to
                        learn without being explicitly
                        programmed. ML is one of the most exciting
                        technologies that one would have ever
                        come across. As it is evident from the
                        name, it gives the computer that makes
                        it more similar to humans: The ability
                        to learn. Machine learning is actively
                        being used today, perhaps in many more
                        places than one would expect.
                    </p>
                </div>
            </div>
        </section> */}
        <footer className="footer">
        <div>
							<img src={Footer1} alt="f1"/>
                            <img src={Footer2} alt="f2"/>
                            <img src={Footer3} alt="f3"/>
						</div>
            <p className="text-footer"> 
            
            Copyright © 2022 Efejakor International Limited.
					All rights reserved
                                </p>
                                
        </footer>
    </div>
    );
};

export default Contact;