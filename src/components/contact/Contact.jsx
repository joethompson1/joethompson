import React, { useState, useRef }  from 'react';
import './contact.scss';
import Nav from '../nav/Nav';
import emailjs from 'emailjs-com';
import ContactMe from '../../assets/contact.svg';
import $ from 'jquery';

const Contact = () => {
	const [messageSuccess, setMessageSuccess] = useState(false);
	const [messageFailure, setMessageFailure] = useState(false);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_a8fz1mh', 'template_w7cgqyv', form.current, '4yV4yBnctTu9dPiEm')
			.then((result) => {
				e.target.reset();
				setMessageSuccess(true);
				setTimeout(function() {
				$("#alert__container").fadeOut(200, function() {
				    	setMessageSuccess(false);
				    });
				}, 3000)
			}, (error) => {
				console.log(error.text);
				e.target.reset();
				setMessageFailure(true);
				setTimeout(function() {
				$("#alert__container").fadeOut(200, function() {
				    	setMessageFailure(false);
				    });
				}, 3000)
			});
	};

	return (
		<section id="contact">
			<div className="contactContainer ">
				<div className="letter-image">
					<div className="animated-mail">
						<div className="back-fold"></div>
						<div className="letter">
							<div className="letter-border"></div>
							<div className="letter-contents">
								<form ref={form} onSubmit={sendEmail}>
									<input type="text" name="name" placeholder="Your Full Name" id="userName" required />
									<input type="email" name="email" placeholder="Your Email" required />
									<textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
								</form>
							</div>
						</div>
						<div className="top-fold"></div>
						<div className="body"></div>
						<div className="left-fold"></div>
					</div>
					<div className="shadow"></div>
					<div className="animated-mail">
						<button type="submit" className="sendMsgButton">SEND</button>
					</div>
				</div>
			</div>
			<Nav />
		</section>
	)
}

export default Contact