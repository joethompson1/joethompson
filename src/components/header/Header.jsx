import React from 'react';
import './header.css';
import Welcome from '../../assets/welcome1.svg';
import Nav from '../nav/Nav';

const Header = () => {

	function resetHeight() {
		document.body.style.height = window.innerHeight + "px";
	}

	// Rest the height whenever the window is resized
	window.addEventListener("resize", resetHeight);

	// Called to intially set the height.
	resetHeight();

	return (
		<>
			<body>
				<div className="container header__container">
					<div className="header__title">
						<div className="header__title-text">
							<span>Hi, I'm <b> Joe Thompson</b> and</span>
							<h1>Welcome to my portfolio.</h1>
						</div>
					</div>


					<div className="header__img">
						<div className='me'>
							<img className="meImage" src={Welcome} alt="me" />
						</div>
					</div>


				</div>
			</body>
			<Nav />
		</>
	)
}

export default Header