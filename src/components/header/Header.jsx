import React from 'react';
import './header.scss';
import Welcome from '../../assets/welcome1.svg';
import Github from '../../assets/github.svg';
import Resume from '../../assets/resume.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Nav from '../nav/Nav';

const Header = () => {

	return (
		<>
			<header>
				<div className="container header__container">
					<div className="header__title">
						<div className="header__title-text">
							<span>Hi, I'm <b> Joe Thompson</b> and</span>
							<h1>Welcome to my portfolio.</h1>
							<div className="header__socials">
								<div className="header__social">
									<a href="https://github.com/joethompson1" target="_blank" rel="noreferrer">
										<img className="homeIcon" src={Github} alt="Github" />
									</a>
								</div>
								<div className="header__social">
									<a href="https://drive.google.com/file/d/1YLfmQNUeXlMhRWCQSfrkbK9_W-NvcBA6/view?usp=sharing" target="_blank" rel="noreferrer">
										<img className="homeIcon" src={Resume} alt="Resume" />
									</a>
								</div>
								<div className="header__social">
									<a href="https://www.linkedin.com/in/1joethompson/" target="_blank" rel="noreferrer">
										<img className="homeIcon" src={LinkedIn} alt="LinkedIn" />
									</a>
								</div>
							</div>
						</div>
					</div>


					<div className="header__img">

{/*						<svg>
						  <defs>
						    <filter id="filter">
						      <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
						      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
						      <feComposite in="SourceGraphic" in2="filter" operator="atop" />
						    </filter>
						  </defs>
						</svg>*/}
						<div className='me'>
							<div class="wrapper">
							  <div class="ball"></div>
							  <div class="ball"></div>
							  <div class="ball"></div>
							</div>
							<img className="meImage" src={Welcome} alt="Home" />
						</div>
					</div>


				</div>
			</header>
			<Nav />
		</>
	)
}

export default Header