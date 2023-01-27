import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Datachain from './components/projects/Datachain';
import Soulbounder from './components/projects/Soulbounder';
import PassTheTime from './components/projects/PassTheTime';
import PlantMedic from './components/projects/PlantMedic';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const App = () => {
	return (
		<>
			<Router>
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


			