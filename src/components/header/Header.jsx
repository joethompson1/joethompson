import React from 'react';
import './header.css';
import Welcome from '../../assets/welcome1.svg';
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
						</div>
					</div>


					<div className="header__img">
						<div className='me'>
							<img className="meImage" src={Welcome} alt="me" />
						</div>
					</div>


				</div>
			</header>
			<Nav />
		</>
	)
}

export default Header