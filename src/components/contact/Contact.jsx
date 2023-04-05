import React, { useState, useRef }  from 'react';
import './contact.scss';
import Nav from '../nav/Nav';
import emailjs from 'emailjs-com';

const Contact = () => {
	// const [messageSuccess, setMessageSuccess] = useState(false);
	// const [messageFailure, setMessageFailure] = useState(false);

	const userName = useRef();
	const email = useRef();
	const message = useRef();

	const sendEmail = () => {
		var contactParams = {
			name: userName.current.value,
			email: email.current.value,
			message: message.current.value
		};

		emailjs.send('service_a8fz1mh', 'template_w7cgqyv', contactParams, '4yV4yBnctTu9dPiEm').then(function (res) {});
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
								<input type="text" name="name" placeholder="Your Full Name" id="userName" ref={userName} required />
								<input type="email" name="email" placeholder="Your Email" id="email" ref={email} required />
								<textarea name="message" rows="7" placeholder="Your Message" id="message" ref={message} required ></textarea>
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