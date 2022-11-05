import React from 'react';
import './header.css';

export default function Nav() {
	return (
		<header className='header'>
			<div className='logo'>
				<img src='/images/troll-face.png' alt='Troll face' />
				<h1 className='title'>Meme Generator</h1>
			</div>
			<h3 className='subtitle'>React Course - Project 3</h3>
		</header>
	);
}
