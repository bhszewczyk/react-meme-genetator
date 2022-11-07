import React from 'react';
import './form.css';
import memeData from '../memeData';

export default function Form() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		url: 'http://i.imgflip.com/1bij.jpg',
		name: 'Boromir',
	});

	function generateMeme() {
		const randomNum = Math.floor(Math.random() * memeData.data.memes.length);
		const randomMeme = memeData.data.memes[randomNum];
		setMeme((prevState) => {
			return {
				...prevState,
				url: randomMeme.url,
				name: randomMeme.name,
			};
		});
	}

	function addText(event) {
		const { name, value } = event.target;

		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value,
			};
		});
	}

	console.log(meme);

	return (
		<div className='form'>
			<div className='inputs'>
				<input
					type='text'
					className='text-input top-text'
					placeholder='top-text'
					onChange={addText}
					value={meme.topText}
					name='topText'
				/>
				<input
					type='text'
					className='text-input bottom-text'
					placeholder='bottom-text'
					onChange={addText}
					value={meme.bottomText}
					name='bottomText'
				/>
			</div>
			<button className='btn btn-generate' onClick={generateMeme}>
				Get a new meme image
			</button>
			<div className='meme-container'>
				<img className='meme-image' src={meme.url} alt={meme.name} />
				<h2 className='meme-text top'>{meme.topText}</h2>
				<h2 className='meme-text bottom'>{meme.bottomText}</h2>
			</div>
		</div>
	);
}
