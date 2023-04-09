import React from 'react';
// import App from './App';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Datachain from './components/projects/Datachain';
import Soulbounder from './components/projects/Soulbounder';
import PassTheTime from './components/projects/PassTheTime';
import PlantMedic from './components/projects/PlantMedic';
import { browserHistory, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";


const App = () => {

	function changeBackground(color) {
	   document.body.style.background = color;
	}



	const getTheme = () => {
	    const localStorageTheme = localStorage.getItem('default-theme');

    	return (String(localStorageTheme) === "dark");
	};


	if (getTheme()) {
		window.addEventListener("load",function() { changeBackground('var(--color-bg-dark)') });
	} else {
		window.addEventListener("load",function() { changeBackground('var(--color-bg)') });
	}


	return (
		<>
			<Helmet>
                <meta charSet="utf-8" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <title>Joe Thompson's Portfolio Website</title>
                <meta name="description" content="A protfolio website showcasing the most noteworthy projects by Joe Thompson" />
                <link rel="canonical" href="https://joethompson.co.uk" />
            </Helmet>

			<Router history="{browserHistory}">
				<Routes>
					<Route path="/" element={<Header />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/datachain" element={<Datachain />} />
					<Route path="/soulbounder" element={<Soulbounder />} />
					<Route path="/passTheTime" element={<PassTheTime />} />
					<Route path="/plantMedic" element={<PlantMedic />} />
				</Routes> 
			</Router>
		</>
	)
}




export default App;


			