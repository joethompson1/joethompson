import React, { useState } from 'react';
import './header.scss';
import Welcome from '../../assets/welcome1.svg';
import SpaceBackground from '../../assets/spaceBackground.svg';
import SpaceBits from '../../assets/spaceBits.svg';
import Github from '../../assets/github.svg';
import GithubRed from '../../assets/githubRed.svg';
import Resume from '../../assets/resume.svg';
import ResumeRed from '../../assets/resumeRed.svg';
import LinkedIn from '../../assets/linkedin.svg';
import LinkedInRed from '../../assets/linkedinRed.svg';
import Nav from '../nav/Nav';

const Header = () => {

	const getTheme = () => {
		// localStorage.setItem('default-theme', 'dark');
	    const localStorageTheme = localStorage.getItem('default-theme');

    	return (String(localStorageTheme) === "dark");
	};

	const [isDark, setIsDark] = useState(getTheme());

	const setIsDarkFunction = () => {
		if (isDark) {
			setIsDark(false);
			localStorage.setItem('default-theme', 'light');
		} else {
			setIsDark(true);
			localStorage.setItem('default-theme', 'dark');
		}
	};


	return (
		<>
			<header className={isDark === true ? "dark" : ""}>
				{isDark && (
					<div className="darkBackground">
						<img className="spaceBackground" src={SpaceBackground} alt="SpaceBackground" />
						<img className="spaceBits" src={SpaceBits} alt="SpaceBits" />
					</div>
				)}
				<div className="container header__container">
					<div className="header__title">
						<div className="header__title-text">
							<span>Hi, I'm <b> Joe Thompson</b> and</span>
							<h1>Welcome to my portfolio.</h1>
							<div className="header__socials">
								<div className="header__social">
									<a href="https://github.com/joethompson1" target="_blank" rel="noreferrer">
										<img className="homeIcon" src={GithubRed} alt="Resume" />
										{/*<img className="homeIcon" src={isDark === true ? GithubRed : Github} alt={isDark === true ? 'GithubRed' : 'Github'} />*/}
									</a>
								</div>
								<div className="header__social">
									<a href="https://drive.google.com/file/d/1YLfmQNUeXlMhRWCQSfrkbK9_W-NvcBA6/view?usp=sharing" target="_blank" rel="noreferrer">
										<img className="homeIcon" src={ResumeRed} alt="Resume" />
										{/*<img className="homeIcon" src={isDark === true ? ResumeRed : Resume} alt={isDark === true ? 'ResumeRed' : 'Resume'} />*/}
									</a>
								</div>
								<div className="header__social">
									<a href="https://www.linkedin.com/in/1joethompson/" target="_blank" rel="noreferrer">
										<img className="homeIcon" src={LinkedInRed} alt="LinkedInRed" />
										{/*<img className="homeIcon" src={isDark === true ? LinkedInRed : LinkedIn} alt={isDark === true ? 'LinkedInRed' : 'LinkedIn'} />*/}
									</a>
								</div>
							</div>
						</div>
					</div>


					<div className="header__img">
						<div className='me'>
							<div className="wrapper">
							  <div className="ball"></div>
							  <div className="ball"></div>
							  <div className="ball"></div>
							</div>
							<img className="meImage" src={Welcome} alt="Home" />
							<div className="theme-text">Theme:</div>
							<div className="theme-toggle-button" onClick={setIsDarkFunction}>{isDark === true ? "Dark" : "Light"}</div>
						</div>
					</div>


				</div>
			</header>
			<Nav />
		</>
	)
}

export default Header