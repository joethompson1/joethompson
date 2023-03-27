import React, {useState, useEffect}from 'react';
import './experience.scss';
import Nav from '../nav/Nav';
import {BsPatchCheckFill} from 'react-icons/bs';
import {AiOutlineTeam} from 'react-icons/ai';
import {MdDeveloperMode} from 'react-icons/md';
import {FiSlack} from 'react-icons/fi';
import {SiMicrosoftexcel} from 'react-icons/si';
import {BsInfoCircleFill} from 'react-icons/bs';
import IBMSvg from '../../assets/ibmLogo.svg';
import ExperienceSVG from '../../assets/experienceVariant.svg'
import HackathonPic from '../../assets/hackathonPic.jpeg';
import HackathonPicCropped from '../../assets/hackathonPicCropped.jpeg';
import GreatUniHack from '../../assets/greatUniHack.png';
import MorganStanleyCoding from '../../assets/morganStanleyCoding.png';
import StudentHack from '../../assets/studentHackVII.png';
import IX from '../../assets/IBM_iX.png';




const Experience = () => {

	const getTheme = () => {
	    const localStorageTheme = localStorage.getItem('default-theme');

    	return (String(localStorageTheme) === "dark");
	};

	const [isDark, setIsDark] = useState(getTheme());

	const setIsDarkFunction = () => {
		if (isDark) {
			setIsDark(false);
			localStorage.setItem('default-theme', 'light');
			document.body.style.background = 'var(--color-bg)';
		} else {
			setIsDark(true);
			localStorage.setItem('default-theme', 'dark');
			document.body.style.background = 'var(--color-bg-dark)';
		}
	};

	const [isIBMHovering1, setIsIBMHovering1] = useState(false);
	const [isIBMHovering2, setIsIBMHovering2] = useState(false);
	const [isIBMHovering3, setIsIBMHovering3] = useState(false);
	const [isIBMHovering4, setIsIBMHovering4] = useState(false);

	const [isViewingOnPhone, setIsViewingOnPhone] = useState(false);

	const IBMProject1Hover = () => {
	    setIsIBMHovering1(true);
	};

	const IBMProject2Hover = () => {
	    setIsIBMHovering2(true);
	};

	const IBMProject3Hover = () => {
	    setIsIBMHovering3(true);
	};

	const IBMProject4Hover = () => {
	    setIsIBMHovering4(true);
	};

	const IBMProjectMouseOut = () => {
	    setIsIBMHovering1(false);
	    setIsIBMHovering2(false);
	    setIsIBMHovering3(false);
	    setIsIBMHovering4(false);
	};


	const CheckIfViewingFromPhone = () => {
		var windowWidth = window.innerWidth;

		if (windowWidth > 600) {
			setIsViewingOnPhone(false);
		} else {
			setIsViewingOnPhone(true);
		}
	}

	useEffect(() => {
	  CheckIfViewingFromPhone();
	}, []);




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

	window.addEventListener("scroll", reveal);
	window.addEventListener('resize', CheckIfViewingFromPhone);


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
	        react.style.width = (width/100 * 12.5) + "%";
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
					width = 45;
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
					maxWidth = 45;
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
		<section id="experience" className={isDark === true ? "dark experience__section" : "experience__section"}>
			<div className="containerExperience experience__title__container">
				<div className="titleImg">
					<img className="experienceSVG" src={ExperienceSVG} alt="Experience SVG"></img>
				</div>

				<div className="title">
					<h2>My Experience</h2>
				</div>
			</div>


			<div className="containerExperience workExperience__container">
				{isViewingOnPhone && (
					<div className="sub-title">
						<div className="span__container">
							<span>IBM iX Mobile <b> (Sept 2020 - Sept 2021)</b></span>
						</div>
						<div>
							<h4>Software Engineer & Operations Intern</h4>
						</div>
					</div>
				)}

				{isViewingOnPhone && (
					<div className="workExperience__content">
						<div className="workExperience__svgContainer">
							<img className="IBMSvg" src={IBMSvg} alt="IBM SVG"></img>
						</div>
						<div className="workExperience__textContainer">

							<div className="IBM__content__container" onMouseOut={IBMProjectMouseOut}>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<AiOutlineTeam className="IBM-icons" />
										<h4>Core Services Team Member</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject1Hover}></div>
								</div>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<MdDeveloperMode className="IBM-icons" />
										<h4>Developer On Client Projects</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject2Hover}></div>
								</div>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<FiSlack className="IBM-icons" />
										<h4>Organised iX Hackathon</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject3Hover}></div>
								</div>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<SiMicrosoftexcel className="IBM-icons" />
										<h4>Weekly Accounting</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject4Hover}></div>
								</div>
							</div>
						</div>
					</div>
				)}

				{!isViewingOnPhone && (
					<div className="workExperience__content">
						<div className="workExperience__svgContainer">
							<img className="IBMSvg" src={IBMSvg} alt="IBM SVG"></img>
						</div>
						<div className="workExperience__textContainer">
							<div className="sub-title">
								<div className="span__container">
									<span>IBM iX Mobile <b> (Sept 2020 - Sept 2021)</b></span>
								</div>
								<div>
									<h4>Business Consultant & Operations Intern</h4>
								</div>
							</div>

							<div className="IBM__content__container" onMouseOut={IBMProjectMouseOut}>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<AiOutlineTeam className="IBM-icons" />
										<h4>Core Services Team Member</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject1Hover}></div>
								</div>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<MdDeveloperMode className="IBM-icons" />
										<h4>Developer On Client Projects</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject2Hover}></div>
								</div>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<FiSlack className="IBM-icons" />
										<h4>Organised iX Mobile Hackathon</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject3Hover}></div>
								</div>
								<div className="IBMRoles__box">
									<div className="IBMRoles__box-hover">
										<SiMicrosoftexcel className="IBM-icons" />
										<h4>Weekly Accounting</h4>
									</div>
									<div className="IBMRoles__box-hover" onMouseOver={IBMProject4Hover}></div>
								</div>
							</div>
						</div>
					</div>
				)}

				{isIBMHovering1 && (
					<div className="IBMDescription__container" id="IBMDescription__container">
						<p>I formed part of the core team who were in charge of the rebranding of the iX Mobile 
						service offerings. My role within the team being, to reach out to service leads within the company 
						to gather information about the offerings that they sell to clients. A microsite was then
						developed to house each of the services that IBM iX Mobile provides for clients. This enabled a smoother
						onboarding process for new staff whilst also driving future sales due to the clearer content structure. </p>
					</div>
				)}
				{isIBMHovering2 && (
					<div className="IBMDescription__container" id="IBMDescription__container3">
						<p>During my time I was also apart of some client facing projects. These included the Irish Water team,
						where we were tasked with creating a mobile application for their customers, and the BP team, 
						which was a longer lasting project between IBM and BP. For the Irish water role I 
						to learned how to code using React Native as that was the framework that was being used to 
						develop the app. An agile work metodology was adopted for both teams meaning that I 
						worked on and completed various tickets within each of the projects.</p>
					</div>
				)}
				{isIBMHovering3 && (
					<div className="IBMDescription__container" id="IBMDescription__container3">
						<p>I worked as part of a small team to create and organise two Hackthons during my time at 
						IBM, with the initial Hackathon being the first ever IBM iX Mobile Hackathon. 
						This role included formulating a list of clients across Europe to participate in the 
						event, create and send out newsletters to company employees, and to gather and compile a list of 
						attendees in order to organise the teams for the event. During both events I joined a team as a 
						developer. During the first Hackathon we created a proof of concept mobile application 
						for one of IBM's clients, whereby I developed the AR functionality, 
						showcasing to the user, first hand, what the companies products would like within their home.
						My team eventually went on to claim first prize at the Hackathon.</p>
					</div>
				)}
				{isIBMHovering4 && (
					<div className="IBMDescription__container" id="IBMDescription__container4">
						<p>I coordinated the weekly performance and sales metrics, whilst sending out the weekly 
						figures in a digestible and intuitive format to iX Mobile division heads across Europe. 
						Ultimately however, I found the process to be fairly repetitive and inefficient so I took the initiative 
						to develop my own Excel Macros to streamline and automate the weekly accounting process.</p>
					</div>
				)}
			</div>



			<div className="containerExperience hackathons__container">
				{isViewingOnPhone && (
					<div className="hackathonTitle__container">
						<img id="img3" className="" src={HackathonPicCropped} alt="Hackathon group"></img>
						<h2 className="reveal fade-top">Hackathons:</h2>
					</div>
				)}
				{!isViewingOnPhone && (
					<div className="hackathonTitle__container">
						<img id="img3" className="" src={HackathonPic} alt="Hackathon group"></img>
						<h2 className="reveal fade-top">Hackathons:</h2>
					</div>

				)}


				<div className="hackathon__container hackathonLeft">
					<div className="hackathonImg__container reveal fade-right ">
						<img className="hackathonImg" src={GreatUniHack} alt="Great Uni Hack"></img>
					</div>

					<div className="hackathonContents__container reveal fade-left">
						<h2>Great Uni Hack - 2019</h2>
						<p className="GUHDescription">Programmed an Android app, which used machine learning to classify images of plants using an API. Included functionality whereby plants can be added to a map using google maps API and provide information to the user on how often to water and how much Co2 the plant has absorbed.</p>
						{isViewingOnPhone && (
							<div>
								<p className="GUHPrizes">- <i>1st Place: Winner of the AstraZeneca Sustainability Prize</i></p>
								<a className="" target="_blank" href="https://github.com/joethompson1">Github</a>
							</div>
						)}
						{!isViewingOnPhone && (
							<p className="GUHPrizes">- <i>1st Place: Winner of the AstraZeneca Sustainability Prize</i> <b><a className="" target="_blank" rel="noreferrer" href="https://github.com/joethompson1">Github</a></b></p>
						)}
						{isViewingOnPhone && (
							<div className="technologies">
								<span className="">Language: Java <b> | </b> <b> Technologies: Android Studio, Google Maps API, ML API </b></span>
							</div>
						)}
						{!isViewingOnPhone && (
							<div className="technologies">
								<span className="">Language: Java <b> | </b> <b> Technologies: Android Studio, Google Maps API, Machine Learning API </b></span>
							</div>
						)}
					</div>
				</div>

				<div className="hackathon__container hackathonRight">
					<div className="hackathonContents__container reveal fade-right">
						<h2>Morgan Stanley Coding Challenge - 2019</h2>
						<p>Created a bot that could play the game ultimate tic-tac-toe using articial learning techniques. After the allotted 2 hour development time frame was complete our bot went head to head and challenged the other teams bots through a series of eliminations rounds.</p>
						<p className="prizes">- <i>Finished 3rd place</i></p>
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
						<p>Using Python we programmed a Myo gesture-controlled armband to be playable on an open source Tetris game. The Myo armband could detect 3 different forms of hand motions to allow the user to play the game without any form of physical input.</p>
						<div className="technologies">
							<span className="">Language: Python <b> | </b> <b> Technologies: InteliJ, Myo Armband </b></span>
						</div>
					</div>
				</div>

				<div className="hackathon__container hackathonRight">
					<div className="hackathonContents__container reveal fade-right">
						<h2>IBM iX Mobile - 2021</h2>
						<p>Coded an iOS a POC mobile application for one of IBM's clients. I developed the AR feature with the help of Apple's RealityKit. This was my first time using the language Swift so I had to learn and adapt quickly to achieve our teams objectives. The app showcased a catalog of items giving the user the ability to view the companies products from the comfort of their home using the built in AR functionality.</p>
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
			
			<div className="containerExperience programmingLanguages__container">
					<div className="experience__frontend reveal fade-top-lg">
						<div className="experience__frontend-title">
							<div className="experience__frontend-title-icon">
								<BsInfoCircleFill onClick={showInfo} className="title-icon"/>
							</div>
							<div className="experience__frontend-title-text">
								<h3>Languages:</h3>
								<p className="experience__frontend-p">Progress bars represent number of years since first started the language</p>
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
									<h4>React</h4>
									<div id="react" className="progressBar"></div>
									<small className="text-light-experience">~1 Year</small>
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
									<h4>C</h4>
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
									<h4>LaTex</h4>
								</div>
							</article>
							<article className="experience__details">
								<BsPatchCheckFill className="experience__details-icon"/>
								<div>
									<h4>Eclipse IDE</h4>
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
						</div>
					</div> 
				</div>

			<Nav />
		</section>
	)
}

export default Experience;