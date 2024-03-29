import React, { useState, useEffect } from 'react';
import './project.scss'
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import {FaGithub} from 'react-icons/fa';
import {FaHackerrank} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Phone from '../../assets/iphone.png';
import Monitor from '../../assets/monitor.png';
import GUHwebpage from '../../assets/GUHwebpage.png';
import PlantMedicImg from '../../assets/bush_logocircle.png';
import {BsPatchCheckFill} from 'react-icons/bs';


const PassTheTime = () => { 
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
	    var Java = document.getElementById("Java");
	    var XML = document.getElementById("XML");
	    var width = 1;
	    var id = setInterval(frame, 30);

	    function frame() {
	      if (width >= 100) {
	        clearInterval(id);
	        i = 0;
	      } else {
	        width++;
	        Java.style.width = (width/100 * 76.3) + "%";
	        XML.style.width = (width/100 * 23.7) + "%";
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

		<section className={isDark === true ? "dark" : ""}>
			<div className="backButton__container">
				<a onClick={() => navigate(-1)} className="backButton"><IoArrowBackCircleOutline className="backButton"/></a>
			</div>

			<div className="container project__container">
				<div className="image-container">
					<div className="monitor-container-alt">
						<div className="blank-bg-monitor"></div>
						<img className="desktop-img" src={Monitor} alt="Monitor SVG"></img>
						<img className="GUHwebpage" src={GUHwebpage} alt="GUH webpage"></img>
					</div>
					<div className="phone-container">
						<div id="plantMedicPhoneBackground" className="color-bg-phone-project"></div>
						<img id="img4" className="plantMedic-image" src={PlantMedicImg} alt="Plant medic app"></img>
						<img id="img4" className="phone-img" src={Phone} alt="Phone SVG"></img>
					</div>
				</div>

				<div className="project__title__container">
					<div className="project__title">
						<h1>Plant Medic</h1>
					</div>

					<div className="title__buttons">
						<div className="gitHub">
							<a href="https://github.com/joethompson1/PlantMedic" target="_blank">Github </a>
							<div className="githubIcon">
								<FaGithub />
							</div>
						</div>
						<div className="gitHub">
							<a href="https://greatunihack19.devpost.com/project-gallery" target="_blank">Hackathon Webpage </a>
							<div className="reactIcon FaHackerrank">
								<FaHackerrank />
							</div>
						</div>
					</div>
				</div>

				<div className="contents__container">
					<div className="contents__description">
						<h3>Description:</h3>
						<p>
							This app was developed by a team of 4 including myself over the course of 
							a 24 hour period for the Great Uni Hack19. 
							As a team we worked together through the night to develop this proof of concept application. <br></br><br></br>

							We Made use of a Machine learning api to classify different plants that the user has photographed themselves. 
							Users are able to create an account and log in and would save the details of all the plants they are caring for. 
							Makes use of the google maps plug in to find the users location and add new plants on to the map. 
							Each plant that the user adds, stores how often it needs watering along with keeping track of 
							the amount of co2 the plant has absorbed. <br></br>
						</p>
					</div>

					<div className="contents__boxes">

						<div className="contents__languages">
							<h3>Languages Used:</h3>
							<div className="experience__content">
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>Java</h4>
										<div id="Java" className="progressBar2 reveal"></div>
										<small className="text-light">76.3%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>XML</h4>
										<div id="XML" className="progressBar2"></div>
										<small className="text-light">23.7%</small>
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
										<h4>Android Studio</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Github</h4>
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


export default PassTheTime;