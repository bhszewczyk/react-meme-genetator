import React from 'react';
import './form.css';
import memeData from '../memeData';

export default function Form() {
	const [meme, setMeme] = React.useState('');

	function generateMeme() {
		const randomNum = Math.floor(Math.random() * memeData.data.memes.length);
		const randomMeme = memeData.data.memes[randomNum];
		setMeme(() => randomMeme);
	}

	return (
		<div className='form'>
			<div className='inputs'>
				<input
					type='text'
					className='text-input top-text'
					placeholder='top-text'
				/>
				<input
					type='text'
					className='text-input bottom-text'
					placeholder='bottom-text'
				/>
			</div>
			<button className='btn btn-generate' onClick={generateMeme}>
				Get a new meme image
			</button>
			<img className='meme-image' src={meme.url} alt={meme.name} />
		</div>
	);
}
