import React, { useState, useRef }  from 'react';
import './contact.css';
import Nav from '../nav/Nav';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
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
			<div className="container contact__container">
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
		
				<h1>Contact Me</h1>
				<div className="container contact__container__inner">
					<div className="contact__options">
						<img className="contactMeSVG" src={ContactMe}></img>
					</div>

					<form ref={form} onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Your Full Name" required />
						<input type="email" name="email" placeholder="Your Email" required />
						<input type="text" name="subject" placeholder="Subject of Message" required />
						<textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
						<button type="submit" className="btn btn-primary">Send Message</button>
					</form>
				</div>
			</div>
			<Nav />
		</section>
	)
}

export default Contact