import React, {useState, useEffect}from 'react';
import './experience.scss';
import Nav from '../nav/Nav';
import {BsPatchCheckFill} from 'react-icons/bs';
import {BsInfoCircleFill} from 'react-icons/bs';
import FishSwimming from './FishSwimming';
import FishSwimming2 from './FishSwimming2';
import Fisherthem from '../../assets/fisherthem.svg';
import FishingRod from '../../assets/fishingRod.svg';
import Whale from '../../assets/whale.svg';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';
import Hook from '../../assets/hook.svg';
import IBMSvg from '../../assets/ibmLogo.svg';

import HackathonPic from '../../assets/hackathonPic.jpeg';
import HackathonPicCropped from '../../assets/hackathonPicCropped.jpeg';
import GreatUniHack from '../../assets/greatUniHack.png';
import MorganStanleyCoding from '../../assets/morganStanleyCoding.png';
import StudentHack from '../../assets/studentHackVII.png';
import IX from '../../assets/IBM_iX.png';


const Experience = () => {
	// Light or Dark Mode
	const getTheme = () => {
	    const localStorageTheme = localStorage.getItem('default-theme');

    	return (String(localStorageTheme) === "dark");
	};

	const setIsDarkFunction = () => {
		setAnimate(true);
		resetAnimation();
		if (isDark) {
			setIsDark(false);
			localStorage.setItem('default-theme', 'light');
			document.body.style.background = 'var(--color-bg)';
		} else {
			setIsDark(true);
			localStorage.setItem('default-theme', 'dark');
			document.body.style.background = 'var(--color-bg-dark)';
		}
		setTimeout(() => {
			if (isDark) {;
				setSunMoonStyle(sunStyle);
				setDayNight(Sun);
			} else {
				setSunMoonStyle(moonStyle);
				setDayNight(Moon);
			}
	    }, 200); // wait for 2 seconds before setting showText to true
	};

	const resetAnimation = () => {
	    const box = document.querySelector(".experience__sun");
	    box.classList.remove("animate");
	    void box.offsetWidth;
	    box.classList.add("animate");
	};


	const [isDark, setIsDark] = useState(getTheme());
	const [height, setHeight] = useState(0);

	useEffect(() => {
	    const handleScroll = () => {
	      setHeight(window.scrollY);
	    };

	    window.addEventListener('scroll', function() {
		  handleScroll();
		  reveal();
		});

	    return () => {
		    window.removeEventListener('scroll', function() {
				handleScroll();
				reveal();
			});
	    };
	}, []);



	// Styles 
	const fishingLineHeight = {
	    height: `${height}px`,
	    transition: 'height 1s ease',
	};

	const sunStyle = {
		position: `relative`,
		width: `200%`,
		top: `-100%`,
	}

	const moonStyle = {
		position: `relative`,
		width: `100%`,
		top: `0%`,
	}
   
   	const getDayNight = (isDark) => {
   		if (isDark) {return Moon}
   		return Sun
   	}

   	const getSunMoonStyle = (isDark) => {
   		if (isDark) {return moonStyle}
   		return sunStyle
   	}

   	const [animate, setAnimate] = useState(false);
   	const [dayNight, setDayNight] = useState(getDayNight(getTheme()));
   	const [sunMoonStyle, setSunMoonStyle] = useState(getSunMoonStyle(getTheme()));

	let run = false;

	function reveal() {
	  var reveals = document.querySelectorAll(".reveal");

	  for (var i = 0; i < reveals.length; i++) {
	    var windowHeight = window.innerHeight;
	    var windowWidth = window.innerWidth;
	    var elementTop = reveals[i].getBoundingClientRect().top;
	    var elementVisible;

	    if (windowWidth > 950) {
			elementVisible = windowHeight*0.3;
		} else if (windowWidth <= 950) {
			elementVisible = windowHeight*0.2;
		}


	    if (elementTop < (windowHeight - (elementVisible))) {
	      reveals[i].classList.add("active");
	      if (reveals[i].classList.contains("experience__frontend") && !run) {
	      	Move();
	      	run = true;
	      }
	    }

	    else if (reveals[i].classList.contains('active') && elementTop < (windowHeight + (elementVisible))) {
	    	reveals[i].classList.remove("active");

	    	if (reveals[i].classList.contains('fade-right')) {
		    	reveals[i].classList.add("fade-out-right");
		    }

		    if (reveals[i].classList.contains('fade-left')) {
		    	reveals[i].classList.add("fade-out-left");
		    }

		    if (reveals[i].classList.contains('fade-top')) {
		    	reveals[i].classList.add("fade-out-top");
		    }

		    if (reveals[i].classList.contains('fade-top-lg')) {
		    	reveals[i].classList.add("fade-out-top");
		    }

		    if (reveals[i].classList.contains("experience__frontend")) {
		      	run = false;
		    }

	    }

	  }
	}

	var i = 0;
	const Move = () => {
	  if (i === 0) {
	    i = 1;
	    var html = document.getElementById("html");
	    var css = document.getElementById("css");
	    var javascript = document.getElementById("javascript");
	    var react = document.getElementById("react");
	    var typescript = document.getElementById("typescript");
	    var sql = document.getElementById("sql");
	    var python = document.getElementById("python");
	    var c = document.getElementById("c");
	    var solidity = document.getElementById("solidity");
	    var java = document.getElementById("java");
	    var width = 1;
	    var id = setInterval(frame, 30);

	    function frame() {
	      if (width >= 100) {
	        clearInterval(id);
	        i = 0;
	      } else {
	        width++;
	        html.style.width = width + "%";
	        css.style.width = width + "%";
	        javascript.style.width = width + "%";
	        typescript.style.width = (width/100 * 37.5) + "%";
	        sql.style.width = (width/100 * 87.5) + "%";
	        python.style.width = width + "%";
	        c.style.width = (width/2) + "%";
	        solidity.style.width = (width/100 * 25) + "%";
	        java.style.width = (width/100 * 65) + "%";
	      }
	    }
	  }
	}


	const showInfo = () => {

		var reveal = document.querySelector(".experience__frontend-title");
		var windowWidth = window.innerWidth;
		var width;
		var maxWidth;
		var id;


		if (!reveal.classList.contains('active')) {
			if (windowWidth > 950) {
				width = 35;
				maxWidth = 75;
			} else if (windowWidth > 600) {
				width = 22;
				maxWidth = 75;
			} else if (windowWidth <= 600) {
				width = 37;
				maxWidth = 75;
			}

			id = setInterval(frame2, 10);

			function frame2() {
				if (width >= maxWidth) {
					clearInterval(id);
				} else {
					width++;
					reveal.style.width = width + "%";
					reveal.classList.add("active");
				}
			}

		} else {
			if (windowWidth > 950) {
				width = 75;
				maxWidth = 35
			} else if (windowWidth > 600) {
				width = 75;
				maxWidth = 22;
		 	} else if (windowWidth <= 600) {
				width = 75;
				maxWidth = 37;
			}

			id = setInterval(frame3, 10);

			function frame3() {
				if (width <= maxWidth) {
					clearInterval(id);
				} else {
					width--;
					reveal.style.width = width + "%";
					reveal.classList.remove("active");
				}
			}
		}
	}


    

	return (
		<section>
			<div className={`experience__sun ${animate ? "animate" : ""}`} onClick={setIsDarkFunction}>
				<img style={sunMoonStyle} src={dayNight} alt=""></img>
			</div>
			<h1 className="experience__title">My Experience</h1>
				
			<img className="experience__title__rod" src={FishingRod} alt=""></img>
			<img className="experience__title__fisherthem" src={Fisherthem} alt=""></img>
			<div className="experience__water__container">
				<div className="experience__fishingLine" style={fishingLineHeight}>
					<img className="experience__fishingHook" src={Hook} alt=""></img>
				</div>
				<FishSwimming />
				<FishSwimming2 />
				<div className="experience__work__container">
					<img className="experience__whale" src={Whale} alt=""></img>
					<div className="experience__work__card__container">
						<div className="workDivider">
							<h1 className="experience__work__title">iX Mobile</h1>
							<h2 className="experience__work__role">Software Engineer Intern</h2>
							<p className="experience__work__dates">Sept 2020 - Sept 2021</p>
							<p className="experience__work__description"> 
								During my placement year at IBM I was part of the core 
								team responsible for overseeing the rebranding of iX 
								Mobile's service offerings, and I helped develop a 
								dedicated microsite to house the updated offerings. 
								<br></br><br></br>

								As a React Native developer, I joined two client-facing 
								projects to help the companies advance their mobile 
								presence. <br></br><br></br>

								I was also a member of the organising team responsible 
								for conceptualising, coordinating, and executing two 
								hackathons with the former event being the 
								first-ever iX Mobile Hackathon. Additionally, I 
								participated in the first hackathon as a developer, 
								where my team won first place for our VR catalogue 
								application.

	
							</p>
						</div>
						<img className="IBMSvg" src={IBMSvg} alt="IBM SVG"></img>
					</div>
				</div>


				<div className="hackathon__container__shell">
					<div className="hackathonTitle__container__shell">	
						<div className="hackathonTitle__container">
							<img id="img3" className="" src={HackathonPic} alt="Great Uni Hack Winning Photo"></img>
							<h2 className="reveal fade-top">Hackathons:</h2>
						</div>
					</div>


					<div className="hackathon__container hackathonLeft">
						<div className="hackathonImg__container reveal fade-right ">
							<img className="hackathonImg" src={GreatUniHack} alt="Great Uni Hack"></img>
						</div>

						<div className="hackathonContents__container reveal fade-left">
							<h2>Great Uni Hack - 2019</h2>
							<p className="GUHDescription">
								Programmed an Android app which used machine learning to classify images 
								of plants using an API. The app also included functionality for adding 
								plants to a map using the Google Maps API and providing users with 
								information on how often to water the plants and how much CO2 the plants 
								have absorbed.
							</p>

							<p className="GUHPrizes">- <i>1st Place: Winner of the AstraZeneca Sustainability Prize</i> <b><a className="" target="_blank" rel="noreferrer" href="https://github.com/joethompson1">Github</a></b></p>
							<div className="technologies">
								<span className="">Language: Java <b> | </b> <b> Technologies: Android Studio, Google Maps API, Machine Learning API </b></span>
							</div>
						</div>
					</div>

					<div className="hackathon__container hackathonRight">
						<div className="hackathonContents__container reveal fade-right">
							<h2>Morgan Stanley Coding Challenge - 2019</h2>
							<p>
								Created a bot that could play the game ultimate tic-tac-toe using machine 
								learning techniques. After the allotted 2-hour development time frame was 
								complete, my team's bot went head-to-head and challenged the other teams' 
								bots through a series of elimination rounds.
							</p>
							<p className="prizes">- <i>3rd place</i></p>
							<div className="technologies">
								<span className="">Language: Python</span>
							</div>
						</div>

						<div className="hackathonImg__container reveal fade-left">
							<img className="morganStanleyImg" src={MorganStanleyCoding} alt="Morgan Stanley"></img>
						</div>
					</div>

					<div className="hackathon__container hackathonLeft">
						<div className="hackathonImg__container reveal fade-right">
							<img className="hackathonImg" src={StudentHack} alt="Student hackathon"></img>
						</div>

						<div className="hackathonContents__container reveal fade-left">
							<h2>Student Hack VII - 2020</h2>
							<p>
								Using Python, we programmed a Myo gesture-controlled armband to be playable 
								on an open-source Tetris game. The Myo armband could detect three different 
								forms of hand motion, allowing the user to play the game without any 
								physical input.
							</p>
							<div className="technologies">
								<span className="">Language: Python <b> | </b> <b> Technologies: InteliJ, Myo Armband </b></span>
							</div>
						</div>
					</div>

					<div className="hackathon__container hackathonRight">
						<div className="hackathonContents__container reveal fade-right">
							<h2>IBM iX Mobile - 2021</h2>
							<p>
								Coded an iOS proof-of-concept mobile application for one of IBM's clients. I 
								developed the augmented reality feature with the help of Apple's RealityKit. 
								This was my first time using the Swift programming language, so I had to 
								learn and adapt quickly to achieve our team's objectives. The app showcased 
								a catalog of items, giving the user the ability to view the company's 
								products from the comfort of their home using the built-in AR functionality.
							</p>
							<p className="prizes">- <i>Overall winners of hackathon</i></p>
							<div className="technologies">
								<span className="">Language: Swift <b> | </b> <b> Technologies: Xcode, RealityKit </b></span>
							</div>
						</div>

						<div className="hackathonImg__container reveal fade-left">
							<img className="iXImage" src={IX} alt="iX"></img>
						</div>
					</div>
				</div>


				<div className="programmingLanguages__container">
					<div className="experience__frontend reveal fade-top-lg">
						<div className="experience__frontend-title">
							<div className="experience__frontend-title-icon">
								<BsInfoCircleFill onClick={showInfo} className="title-icon"/>
							</div>
							<div className="experience__frontend-title-text">
								<h3>Languages:</h3>
								<p className="experience__frontend-p">Progress bars represent number of years since first started with the language</p>
							</div>
						</div>

						<div className="experience__content">
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>HTML</h4>
									<div id="html" className="progressBar"></div>
									<small className="text-light-experience">~8 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>CSS</h4>
									<div id="css" className="progressBar"></div>
									<small className="text-light-experience">~8 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>Javascript</h4>
								  	<div id="javascript" className="progressBar"></div>
									<small className="text-light-experience">~8 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>Typescript</h4>
									<div id="typescript" className="progressBar"></div>
									<small className="text-light-experience">~3 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>SQL</h4>
									<div id="sql" className="progressBar"></div>
									<small className="text-light-experience">~7 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>Python</h4>
									<div id="python" className="progressBar"></div>
									<small className="text-light-experience">~8 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>C/C++</h4>
									<div id="c" className="progressBar"></div>
									<small className="text-light-experience">~4 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>Solidity</h4>
									<div id="solidity" className="progressBar"></div>
									<small className="text-light-experience">~2 Years</small>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div className="experience__details__content">
									<h4>Java</h4>
									<div id="java" className="progressBar"></div>
									<small className="text-light-experience">~5 Years</small>
								</div>
							</article>
						</div>
					</div>


					<div className="experience__backend reveal fade-bottom">
						<h3>Technologies:</h3>
						<div className="experience__content">
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Git</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Linux/Unix</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Tkinter</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Numpy</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Android Studio</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Ether.js</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Web3.js</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>HyperLedger Fabric</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Node.js</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>MongoDB</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Mongoose</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>NPM</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Ganache</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Truffle</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>React</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Vue</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Svelte</h4>
								</div>
							</article>
						</div>
					</div> 
				</div>
				
			</div>
			<Nav />
		</section>
	)
}

export default Experience;