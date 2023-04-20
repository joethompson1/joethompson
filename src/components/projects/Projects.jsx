import React, {useState} from 'react';
import './projects.scss';
import Nav from '../nav/Nav';
import Notebook from '../../assets/notebook.png';
import Monitor from '../../assets/monitor.png';
import Phone from '../../assets/iphone.png';
import SoulbounderAnimation from './SoulbounderAnimation';
import PassTheTimeImg from '../../assets/passTheTimeGameplay.png';
import myProjects from '../../assets/projects.svg';
import DatachainImg from '../../assets/homePage.png';
import PlantMedicImg from '../../assets/bush_logocircle.png';
import $ from 'jquery';
import { useNavigate } from "react-router-dom";

const Projects = () => {

	const navigate = useNavigate();



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


	console.log(isDark);

	const [isHovering1, setIsHovering1] = useState(false);
	const [isHovering2, setIsHovering2] = useState(false);
	const [isHovering3, setIsHovering3] = useState(false);
	const [isHovering4, setIsHovering4] = useState(false);

	
	const project1Hover = () => {
		$("#img").stop(true, true).fadeOut(200);
	    setIsHovering1(true);
	};

	const project1MouseOut = () => {
	    $("#img").stop(true, true).fadeIn(200);
	    setIsHovering1(false);
	};

	const project2Hover = () => {
	    $("#img").stop(true, true).fadeOut(200);
	    setIsHovering2(true);
	};

	const project2MouseOut = () => {
	    $("#img").stop(true, true).fadeIn(200);
	    setIsHovering2(false);
	};

	const project3Hover = () => {
	    $("#img").stop(true, true).fadeOut(200);
	    setIsHovering3(true);
	};

	const project3MouseOut = () => {
	    $("#img").stop(true, true).fadeIn(200);
	    setIsHovering3(false);
	};

	const project4Hover = () => {
	    $("#img").stop(true, true).fadeOut(200);
	    setIsHovering4(true);
	};

	const project4MouseOut = () => {
	    $("#img").stop(true, true).fadeIn(200);
	    setIsHovering4(false);
	};

	return (
		<>
			<section id="about" className={isDark === true ? "dark" : ""}>

				<div className="container about__container">
					<div id="about__images" className="about__images">
						<div className="____images-wrapper">
							<div id="img" className="img-container" onClick={setIsDarkFunction}>
								<div className="about__images-bg"></div>
								<img className="about__images-stock" src={myProjects}></img>
								<div className="about__themes-switch">
									<div className="about__themes-switchInner"></div>
								</div>
							</div>
							{isHovering1 && (
								<div className="img-container" id="desktopContainer">
									<img id="dataChain-img" className="datachain-image" src={DatachainImg} alt="Datachain"></img>
									<div id="blank-bg" className="blank-bg-desktop"></div>
									<img id="img1" class="desktop-img" src={Monitor} alt="Monitor SVG"></img>
								</div>
							)}
							{isHovering2 && (
								<div className="img-container" id="notebookContainer">
									<img id="img2" className="notebook-img" src={Notebook} alt="Notebook SVG"></img>
									<div id="blank-bg" className="blank-bg"></div>
									<div id="soulbounderAnimation" className="loadingContainer">
										<SoulbounderAnimation className="soulbounder-img"/>
									</div>
								</div>

							)}                
							{isHovering3 && (
								<div className="img-container">
									<div id="img3" className="blank-bg-phone"></div>
									<img id="passTheTime-image" className="passTheTime-image" src={PassTheTimeImg} alt="Pass the time"></img>
									<img id="img3" className="phone-img" src={Phone} alt="Phone SVG"></img>
								</div>
							)}
							{isHovering4 && (
								<div className="img-container">
									<div id="img4" className="color-bg-phone"></div>
									<img id="img4" className="plantMedic-image" src={PlantMedicImg} alt="Plant Medic App"></img>
									<img id="img4" className="phone-img" src={Phone} alt="Phone SVG"></img>
								</div>
							)}
						</div>
					</div>

					<div className="about__content">
						<h1>My Projects</h1>
						<ul>
							<li onClick={() => navigate("/datachain")} onMouseOver={project1Hover} onMouseOut={project1MouseOut} id="project1"><span>Datachain</span></li>
							<li onClick={() => navigate("/soulbounder")} onMouseOver={project2Hover} onMouseOut={project2MouseOut} id="project2"><span>Soulbounder</span></li>
							<li onClick={() => navigate("/passTheTime")} onMouseOver={project3Hover} onMouseOut={project3MouseOut} id="project3"><span>Pass the time</span></li>
							<li onClick={() => navigate("/plantMedic")} onMouseOver={project4Hover} onMouseOut={project4MouseOut} id="project4"><span>Plant Medic</span></li>
						</ul>

					</div>
				</div>
			</section>
			<Nav />
		</>
	)
}

export default Projects