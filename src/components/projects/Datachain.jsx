import React, { useState, useEffect }  from 'react';
import './project.scss'
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import {FaGithub} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import Notebook from '../../assets/notebook.png';
import Monitor from '../../assets/monitor.png';
import DatachainImg from '../../assets/homePage.png';
import StudentAccountPageWithDegree from '../../assets/studentAccountPageWithDegree.png';
import {BsPatchCheckFill} from 'react-icons/bs';
import {ImGoogleDrive} from 'react-icons/im';


const Datachain = () => { 
	const navigate = useNavigate();

	const getTheme = () => {
	    const localStorageTheme = localStorage.getItem('default-theme');

    	return (String(localStorageTheme) === "dark");
	};

	const [isDark, setIsDark] = useState(getTheme());
	let run = false;

	function reveal() {
	  	var reveals = document.querySelectorAll(".progressBar2");
	  	var revealContainer = document.querySelector('.contents__languages');

	  	for (var i = 0; i < reveals.length; i++) {
	    	var windowHeight = window.innerHeight;
	    	var elementTop = revealContainer.getBoundingClientRect().top;
	    	var elementVisible = windowHeight*0.3;

	    	if (elementTop < (windowHeight - (elementVisible)) && !run) {
	      		reveals[i].classList.add("active");
	      		if (reveals[i].classList.contains("progressBar2")) {
	      			Move2();
	      			run = true;
	      		}
	    	}
	  	}
	}

	var i = 0;
	const Move2 = () => {
	  if (i === 0) {
	    i = 1;
	    var HTML = document.getElementById("HTML");
	    var CSS = document.getElementById("CSS");
	    var JavaScript = document.getElementById("JavaScript");
	    var Go = document.getElementById("Go");
	    var Shell = document.getElementById("Shell");
	    var width = 1;
	    var id = setInterval(frame, 30);

	    function frame() {
	      if (width >= 100) {
	        clearInterval(id);
	        i = 0;
	      } else {
	        width++;
	        HTML.style.width = (width/100 * 66.6) + "%";
	        CSS.style.width = (width/100 * 97.2) + "%";
	        JavaScript.style.width = width + "%";
	        Go.style.width = (width/100 * 9.7) + "%";
	        Shell.style.width = (width/100 * 73.6) + "%";
	      }
	    }
	  }
	}


	useEffect(() => {
	    window.addEventListener('scroll', function() {
		  reveal();
		});

	    return () => {
		    window.removeEventListener('scroll', function() {
				reveal();
			});
	    };
	}, []);




	return (

		<section className="projects" className={isDark === true ? "dark" : ""}>
			<div className="backButton__container">
				<a onClick={() => navigate(-1)} className="backButton"><IoArrowBackCircleOutline className="backButton"/></a>
			</div>

			<div className="container project__container">
				<div className="image-container">
					<div className="monitor-container">
						<div id="blank-bg-monitor" className="blank-bg-monitor"></div>
						<img className="datachain-image-project" src={DatachainImg} alt="Datachain"></img>
						<img className="desktop-img" src={Monitor} alt="Monitor SVG"></img>
					</div>
					<div className="notebook-container">
						<div className="blank-bg-project"></div>
						<img className="studentAccountPageWithDegree-image" src={StudentAccountPageWithDegree} alt="Student Account Page with Degree"></img>
						<img className="notebook-img-project" src={Notebook} alt="Notebook SVG"></img>
					</div>
				</div>

				<div className="project__title__container">
					<div className="project__title">
						<h1>Datachain</h1>
					</div>

					<div className="title__buttons">
						<div className="gitHub">
							<a href="https://github.com/joethompson1/Datachain" target="_blank">Github </a>
							<div className="githubIcon">
								<FaGithub />
							</div>
						</div>
						<div className="gitHub">
							<a href="https://drive.google.com/file/d/1ZvBKH6Ezdz7gkq5NJTThPwjUGQTCqliJ/view?usp=sharing" target="_blank">Project Report </a>
							<div className="reactIcon">
								<ImGoogleDrive />
							</div>
						</div>
					</div>
				</div>

				<div className="contents__container">
					<div className="contents__description">
						<h3>Description:</h3>
						<p>
							This application was created to try and highlight to universities 
							that the adoption of blockchain technology is not only beneficial to their organisation, 
							but also to their past, present, and future students. This is because creating a digital 
							degree brings with it added utility to both students and employers, whilst at the same 
							time helping to prevent against the falsifying of degree qualifications.<br /><br />


							Datachain makes use of a variety of languages and technologies in order to achieve this. 
							By leveraging the HyperLedger Fabric permissioned blockchain network to deploy custom 
							smart contracts written using the programming language Go, I was able to create an 
							immutable record of transactions specifically for the distribution and viewing of digital 
							degrees.<br /><br />

							Using Node.Js, I created a website allowing users to interact with the 
							HyperLedger Fabric blockchain network. This was done via API calls to the smart contract, 
							allowing users to award, view and share university degrees.
						</p>
					</div>

					<div className="contents__boxes">

						<div className="contents__languages">
							<h3>Languages Used:</h3>
							<div className="experience__content">
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>HTML</h4>
										<div id="HTML" className="progressBar2"></div>
										<small className="text-light">19.2%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>CSS</h4>
										<div id="CSS" className="progressBar2"></div>
										<small className="text-light">28%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>JavaScript</h4>
										<div id="JavaScript" className="progressBar2"></div>
										<small className="text-light">28.8%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>Go</h4>
										<div id="Go" className="progressBar2"></div>
										<small className="text-light">2.8%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>Shell</h4>
										<div id="Shell" className="progressBar2"></div>
										<small className="text-light">21.2%</small>
									</div>
								</article>
							</div>
						</div>

						<div className="contents__languages">
							<h3>Technologies Used:</h3>
							<div className="experience__content">
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Node.Js</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>HyperLedger Fabric</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>MongoDB</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Mongoose</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Express</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>NPM</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Docker</h4>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>

			</div>

		</section>

	)

}


export default Datachain;