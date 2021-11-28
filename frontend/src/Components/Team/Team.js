import React from 'react';
import viren from '../../assets/img/Viren.jpeg'
import rahul from '../../assets/img/rahul.jpeg'
import shreyas from '../../assets/img/shreyas.jpeg'
import {FaInstagram,FaLinkedinIn,FaTwitter} from 'react-icons/fa';

const Team = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center">Our RVS Team</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card shadow mb-5 bg-white rounded">
                                        <img className="card-img-top p-3" src={rahul} alt="Rahul Img" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Rahul Maheshwari</h5>
                                            <p className="card-text">Currently pursuing a B.Tech degree in Chemical Engineering with a Minor in Information Technology at NITK.<hr></hr>I have worked on various Web-Dev projects along with that I had Interned at SMARKT Startup as Full Stack Engineering Intern where I had Revamped their website. Currently I am working on Full Stack E-commerce (FlipKart) Website and ML Based Pixel-Art Generation Projects.
                                                My hobbies are to Play Badminton,Chess and sometimes I also like to write poems :)</p>
                                            <a href="https://github.com/Rahul27012000" target="_blank" className="btn-get-started" >My Github Profile</a>
                                        </div>
                                        <div className="social">
                                        <a href="https://www.instagram.com/i_m__rahul_27/" target="_blank"><FaInstagram style={{fontSize:"1.5rem",color:"#833AB4"}}/></a>
                                        <a href="https://www.linkedin.com/in/rahul-maheshwari-b2780a1b0/" target="_blank"><FaLinkedinIn style={{fontSize:"1.5rem",color:"#0077b5"}}/></a>
                                        <a href="https://twitter.com/RahulMa25772691?s=08" target="_blank"><FaTwitter style={{fontSize:"1.5rem",color:"	#1DA1F2"}}/></a>
                                        </div>
                                        
                                    </div>

                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card shadow mb-5 bg-white rounded">
                                        <img className="card-img-top p-3" src={viren} alt="Viren Img" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Viren Varma</h5>
                                            <p className="card-text">Currently pursuing a B.Tech degree in Mechanical Engineering with a Minor in Information Technology at NITK.<hr></hr>I have worked on projects in the fields of Robotics to write a research paper on new generation bot's object detection, Bio-Informatics for Drug Repurposing using machine learning, Game Design and Reinforcement Learning to reinvent the Flappy Bird game.
                                                I have also interned as a Full Stack Developer at a Fin-Tech start-up over the summer. </p>
                                            <a href="https://github.com/virenvarma007" target="_blank" className="btn-get-started" >My Github Profile</a>
                                        </div>
                                        <div className="social">
                                        <a href="https://www.instagram.com/apple_buoy/" target="_blank"><FaInstagram style={{fontSize:"1.5rem",color:"#833AB4"}}/></a>
                                        <a href="https://www.linkedin.com/in/viren-varma-71a62a1ab/" target="_blank"><FaLinkedinIn style={{fontSize:"1.5rem",color:"#0077b5"}}/></a>
                                        <a href="#" target="_blank"><FaTwitter style={{fontSize:"1.5rem",color:"	#1DA1F2"}}/></a>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 col-10 mx-auto">
                                    <div className="card shadow mb-5 bg-white rounded">
                                        <img className="card-img-top p-3" src={shreyas} alt="Shreyas Img" />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ textAlign: "center" }}>Shreyas Rao</h5>
                                            <p className="card-text">Currently pursuing a B.Tech degree in Electrical Engineering with a Minor in Information Technology at NITK.<hr></hr>My technical interests lie in image processing and machine learning.<br></br> I have interned at Spectrum Lab, IISc Bangalore where I worked on wavelet theory, signal processing and machine learning problems. My hobbies include swimming, running and playing chess and I love watching cricket, f1 and Netflix during my free time.</p>
                                            <a href="https://github.com/shreyasrao114" target="_blank" className="btn-get-started" >My Github Profile</a>
                                        </div>
                                        <div className="social">
                                        <a href="https://www.instagram.com/_shreyas_rao_/" target="_blank"><FaInstagram style={{fontSize:"1.5rem",color:"#833AB4"}}/></a>
                                        <a href="https://www.linkedin.com/in/shreyas-rao-0a013b1b0" target="_blank"><FaLinkedinIn style={{fontSize:"1.5rem",color:"#0077b5"}}/></a>
                                        <a href="#" target="_blank"><FaTwitter style={{fontSize:"1.5rem",color:"	#1DA1F2"}}/></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Team;


