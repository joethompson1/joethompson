import React, { useState } from 'react';
import './project.scss'
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import {FaGithub} from 'react-icons/fa';
import {FaGooglePlay} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Phone from '../../assets/iphone.svg';
import Monitor from '../../assets/monitor.svg';
import PassTheTimeGooglePlayStore from '../../assets/passTheTimeGooglePlayStore.png';
import PassTheTimeImg from '../../assets/passTheTimeGameplay.png';
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
	  var reveals = document.querySelectorAll(".reveal");
	  var revealContainer = document.querySelector('.contents__languages');

	  for (var i = 0; i < reveals.length; i++) {
	    var windowHeight = window.innerHeight;
	    var elementTop = revealContainer.getBoundingClientRect().top;
	    var elementVisible = windowHeight*0.3;


	    if (elementTop < (windowHeight - (elementVisible))) {
	      reveals[i].classList.add("active");
	      if (reveals[i].classList.contains("progressBar2") && !run) {
	      	Move2();
	      	run = true;
	      }
	    }

	  }
	}

	window.addEventListener("scroll", reveal);


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



	return (

		<section className={isDark === true ? "dark" : ""}>
			<div className="backButton__container">
				<a onClick={() => navigate(-1)} className="backButton"><IoArrowBackCircleOutline className="backButton"/></a>
			</div>

			<div className="container project__container">
				<div className="image-container">
					<div className="monitor-container-alt">
						<div className="blank-bg-monitor"></div>
						<img src={Monitor} alt="Monitor SVG"></img>
						<img className="passTheTimeGooglePlayStore" src={PassTheTimeGooglePlayStore} alt="Pass the time Google Play Store"></img>
					</div>
					<div className="phone-container">
						<div className="blank-bg-phone-project"></div>
						<img className="passTheTime-Img" src={PassTheTimeImg} alt="Pass the time App"></img>
						<img className="phone-img" src={Phone} alt="Phone SVG"></img>
					</div>
				</div>

				<div className="project__title__container">
					<div className="project__title">
						<h1>Pass the Time</h1>
					</div>


					<div className="title__buttons">
						<div className="gitHub">
							<a href="https://github.com/joethompson1/PassTheTime" target="_blank">Github </a>
							<div className="githubIcon">
								<FaGithub />
							</div>
						</div>
						<div className="gitHub">
							<a href="https://play.google.com/store/apps/details?id=com.justjoe.zer0" target="_blank">Google Play </a>
							<div className="reactIcon">
								<FaGooglePlay />
							</div>
						</div>
					</div>

				</div>

				<div className="contents__container">
					<div className="contents__description">
						<h3>Description:</h3>
						<p>
							This application was developed during covid as a fun little exercise for me to practice my mobile development experience, whilst at the same time being able to release an app onto the Google Play Store. This is because from a young age I have always wanted to release an app to the app store which is available to everyone (who has an android) around the world. <br></br> <br></br>

							The premise of the game is very simple, the timer counts down from 10 and the user has to try and stop the timer on excatly 0.0 seconds. If they are successful then they will receive a small trophy at the top of the screen indicating how many times they have achieved this feat. <br></br><br></br>

							The app was developed in Android Studio using the programming languages Java and XML, and is sadly only available on the Google Play Store.
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
										<div id="XML" className="progressBar2 reveal"></div>
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
										<h4>Google Console</h4>
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