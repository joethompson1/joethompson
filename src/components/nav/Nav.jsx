import React, { useState } from 'react';
import './nav.scss';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useNavigate } from "react-router-dom";



const Nav = () => {
	const navigate = useNavigate();

	return (
		<nav className="">
			<a onClick={() => navigate("/")} className={window.location.pathname === '/' ? 'active' : ''}><AiOutlineHome /></a>
			<a onClick={() => navigate("/projects")} className={window.location.pathname === '/projects' ? 'active' : ''} ><BiBook /></a>
			<a onClick={() => navigate("/experience")} className={window.location.pathname === '/experience' ? 'active' : ''} ><AiOutlineUser /></a>
			<a onClick={() => navigate("/contact")} className={window.location.pathname === '/contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
		</nav>
	)
}

export default Nav;