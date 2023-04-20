import React, {useState}  from 'react';
import './project.scss';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import {FaGithub} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import Notebook from '../../assets/notebook.png';
import Monitor from '../../assets/monitor.png';
import SoulbounderAnimation from './SoulbounderAnimation'
import SoulbounderCreateSBT from '../../assets/soulbounderCreateSBT.png';
import {BsPatchCheckFill} from 'react-icons/bs';


const Soulbounder = () => { 
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
	    var HTML = document.getElementById("HTML");
	    var CSS = document.getElementById("CSS");
	    var JavaScript = document.getElementById("JavaScript");
	    var Solidity = document.getElementById("Solidity");
	    var width = 1;
	    var id = setInterval(frame, 30);

	    function frame() {
	      if (width >= 100) {
	        clearInterval(id);
	        i = 0;
	      } else {
	        width++;
	        HTML.style.width = width + "%";
	        CSS.style.width = (width/87.6 * 20) + "%";
	        JavaScript.style.width = (width/87.6 * 5) + "%";
	        Solidity.style.width = (width/87.6 * 10) + "%";
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
					<div className="monitor-container">
						<div className="blank-bg-monitor"></div>
						<img className="desktop-img" src={Monitor} alt="Monitor SVG"></img>
						<div id="soulbounderAnimation" className="loadingContainer-project">
							<SoulbounderAnimation className="soulbounder-img"/>
						</div>
					</div>
					<div className="notebook-container">
						<div className="blank-bg-sbt"></div>
						<img className="soulbounderCreateSBT" src={SoulbounderCreateSBT} alt="Soulbounder create SBT page"></img>
						<img className="notebook-img-project" src={Notebook} alt="Laptop frame"></img>
					</div>
				</div>

				<div className="project__title__container">
					<div className="project__title">
						<h1>Soulbounder</h1>
					</div>

					<div className="title__button">
						<div className="gitHub">
							<a href="https://github.com/joethompson1/Soulbounder" target="_blank">Github </a>
							<div className="githubIcon">
								<FaGithub />
							</div>
						</div>
					</div>
				</div>

				<div className="contents__container">
					<div className="contents__description">
						<h3>Description:</h3>
						<p>
							<i>This project is currently under development.</i> <br></br><br></br>

							In 2022 Vitalik Buterin Co-authored a whitepaper called Decentralized Society: Finding Web3's Soul. 
							Whereby he outlined his idea of introducing SoulBound Tokens (SBTs) to bring about a more decentralised society 
							through the use of the blockchain. 
							This is achieved through the use of a one time transfer token known as an SBT.<br></br><br></br>

							Working with this idea I am currently developing a website that would allow people to create and 
							issue their own SBTs. These can come in a variety of different forms such as, 
							proof of attendance, certificates, tickets and account login. 
							This builds upon the work I did for my Datachain project, this time creating a more general 
							purpose certificate which will be hosted on the Ethereum blockchain and utilising the cutting edge 
							Soulbound Token smart contract, which is currently being developed by the Ethereum Foundation.<br /><br />

							The premise of the project is to leverage blockchain technology as a way of improving 
							the efficiency of every day digital life. One of the ways we are already seeing this is with the increase 
							in utility of digital wallets. Soulbounder aims to provide an easy way of creating and sharing SBT's 
							by bridging the gap between the blockchain and the every day user. SBT's have the ability to open up a 
							whole world of potential possibilities for users wanting to add more functionality to 
							their digital wallets. 
							
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
										<div id="HTML" className="progressBar2 reveal"></div>
										<small className="text-light">87.6%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>CSS</h4>
										<div id="CSS" className="progressBar2 reveal"></div>
										<small className="text-light">6.9%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>JavaScript</h4>
										<div id="JavaScript" className="progressBar2 reveal"></div>
										<small className="text-light">1.2%</small>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div className="technologies__languages">
										<h4>Solidity</h4>
										<div id="Solidity" className="progressBar2 reveal"></div>
										<small className="text-light">2.7%</small>
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
										<h4>IPFS</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Ethers.Js</h4>
									</div>
								</article>
								<article className="technologies__details">
									<BsPatchCheckFill className="technologies__details-icon"/>
									<div>
										<h4>Web3.Js</h4>
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
							</div>
						</div>
					</div>
				</div>

			</div>

		</section>

	)

}


export default Soulbounder;