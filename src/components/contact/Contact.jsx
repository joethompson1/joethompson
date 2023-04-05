import React, { useState, useRef }  from 'react';
import './contact.scss';
import Nav from '../nav/Nav';
import emailjs from 'emailjs-com';
import $ from 'jquery';

const Contact = () => {

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
	
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [messageFailure, setMessageFailure] = useState(false);

	const userName = useRef();
	const email = useRef();
	const message = useRef();
	const letterImage = useRef();


	const sendEmail = () => {
		var contactParams = {
			name: userName.current.value,
			email: email.current.value,
			message: message.current.value
		};

		if (contactParams.name !== "" && contactParams.email !== "" && contactParams.message !== "") {

			letterImage.current.className += ' sendMailAnimation';

			emailjs.send('service_a8fz1mh', 'template_w7cgqyv', contactParams, '4yV4yBnctTu9dPiEm')
				.then((result) => {
					setMessageSuccess(true);
					setTimeout(function() {
						$("#alert__container").fadeOut(100, function() {
					    	setMessageSuccess(false);
					    });
					    letterImage.current.className = 'letter-image';
					}, 3000)
				}, (error) => {
					console.log(error.text);
					setMessageFailure(true);
					setTimeout(function() {
						$("#alert__container").fadeOut(100, function() {
					    	setMessageFailure(false);
					    });
					    letterImage.current.className = 'letter-image';
					}, 3000)
				});
		}

		else {
			userName.current.placeholder = "Please input your name";
			email.current.placeholder = "Please input your email";
			message.current.placeholder = "Please enter a message";
			userName.current.className += ' placeholderRed';
			email.current.className += ' placeholderRed';
			message.current.className += ' placeholderRed';
		}
	};

	return (
		<section id="contact" className={isDark === true ? "dark" : ""}>
			<div className="contactContainer ">
				{messageSuccess && (
					<div id="alert__container" className="alert__container alert__success__container">
						<h2>Email sent successfully!</h2>
					</div>
				)}

				{messageFailure && (
					<div id="alert__container" className="alert__container alert__failure__container">
						<h2>Email sent unsuccessfully!</h2>
					</div>
				)}
				<div className="letter-image" ref={letterImage}>
					<div className="animated-mail">
						<div className="back-fold"></div>
						<div className="letter">
							<div className="letter-border"></div>
							<div className="letter-contents">
								<input type="text" name="name" placeholder="Your Full Name" id="userName" ref={userName} />
								<input type="email" name="email" placeholder="Your Email" id="email" ref={email} />
								<textarea name="message" rows="7" placeholder="Your Message" id="message" ref={message} ></textarea>
							</div>
						</div>
						<div className="top-fold"></div>
						<div className="body"></div>
						<div className="left-fold"></div>
					</div>
						<div className="shadow"></div>
					<div className="animated-send">
						<button type="submit" className="sendMsgButton" onClick={sendEmail}>SEND</button>
					</div>
				</div>
			</div>
			<Nav />
		</section>
	)
}

export default Contact