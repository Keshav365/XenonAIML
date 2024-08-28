import React from 'react';
import './all.css';

export default function All() {
    return (
        <div>
            <div className="wrapper row0">
                <div id="topbar" className="hoc clear">
                    <div className="fl_left">
                        <ul className="nospace">
                            <li><a href="index.html"><i className="fas fa-home fa-lg"></i></a></li>
                            <li><a href="https://github.com/Keshav365/XenonAIML">This Rroject</a></li>
                            <li><a href="https://github.com/Keshav365">My Github</a></li>
                            <li><a href="www.linkedin.com/in/shivamgx">Linkedin</a></li>
                            <li><a href="https://sicktick-f621b.web.app/">SickTick</a></li>
                        </ul>
                    </div>
                    <div className="fl_right">
                        <ul className="nospace">
                            <li><i className="fas fa-phone rgtspace-5"></i> +91 7901730611</li>
                            <li><i className="fas fa-envelope rgtspace-5"></i> shivam.goyalzx@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="wrapper row1">
                <header id="header" className="hoc clear">
                    <div id="logo" className="one_quarter first">
                        <h1><a href="index.html">🏡HomiWise</a></h1>
                        <p>Leave the rest to us</p>
                    </div>
                    <div className="one_quarter">
                        <strong><i className="fas fa-phone rgtspace-5"></i> Call Us:</strong> +91 7901730611
                    </div>
                    <div className="one_quarter">
                        <strong><i className="far fa-clock rgtspace-5"></i> Mon. - Sat.:</strong> 08.00am - 18.00pm
                    </div>
                    <div className="one_quarter">
                        <form action="#" method="post">
                            <label>
                                <select>
                                    <option value="" disabled>
                                        Language
                                    </option>
                                    <option value="English">Default</option>
                                    <option value="German">German</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                </select>
                            </label>
                        </form>
                    </div>
                </header>
            </div>



            <div className="wrapper bgded overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHJlYWx0b3J8ZW58MHx8fHwxNjQ5MjEyOTQx&ixlib=rb-1.2.1&q=80&w=1080')" }}>
                <div id="pageintro" className="hoc clear">
                    <article>
                        <p>Welcome to HomiWise</p>
                        <h3 className="heading">Your one stop destination to homeShopping</h3>
                    </article>
                </div>
            </div>

            <div className="wrapper row3">
                <main className="hoc container clear">
                    <section id="introblocks">
                        <div className="sectiontitle">
                            <h6 className="heading">Select From variety of estates</h6>
                            <p>Recommended Properties</p>
                        </div>
                        <ul className="nospace group">
                            <li className="one_third first">
                                <article><a href="#"><i className="fas fa-allergies" style={{ backgroundImage: "url('https://newprojects.99acres.com/projects/malwa_projects/malwa_escon_primera/images/89nfqpy_1711543945_482555928_med.jpg')" }}></i></a>
                                    <h6 className="heading">Atlantis Grand</h6>
                                    <p>Located in Zirakpur, Highland Luxuria is now offering 4 BHK [&hellip;]</p>
                                    <footer><a className="btn" href="#">Read More</a></footer>
                                </article>
                            </li>
                            <li className="one_third">
                                <article><a href="#"><i className="fas fa-cube" style={{ backgroundImage: "url('https://newprojects.99acres.com/projects/highland_park_homes/highland_park_luxuria/images/eftxwlw_1721728055_506363969_med.jpg')" }}></i></a>
                                    <h6 className="heading">Highland Luxuria</h6>
                                    <p>Located in Zirakpur, Highland Luxuria is now offering 4 BHK  [&hellip;]</p>
                                    <footer><a className="btn" href="#">Read More</a></footer>
                                </article>
                            </li>
                            <li className="one_third">
                                <article><a href="#"><i className="fas fa-podcast" style={{ backgroundImage: "url('https://newprojects.99acres.com/projects/malwa_projects/malwa_escon_primera/images/elgla6c_1711544113_482556348_med.jpg')" }}></i></a>
                                    <h6 className="heading">Green Lotus Utsav</h6>
                                    <p>3, 4, 5, 6 BHK Apartment in Zirakpur, Chandigarh[&hellip;]</p>
                                    <footer><a className="btn" href="#">Read More</a></footer>
                                </article>
                            </li>
                        </ul>
                    </section>
                 
                </main>
            </div>

          

            <div className="wrapper row5">
                <div id="copyright" className="hoc clear">
                    <p className="fl_left">Copyright &copy; 2024 - All Rights Reserved - <a href="#">HomiWise - Xenon</a></p>
                </div>
            </div>
        </div>
    );
}
