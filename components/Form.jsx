import React from 'react';
import './form.css';

export default function Form() {
	const [meme, setMeme] = React.useState({
		topText: '',
		bottomText: '',
		url: 'http://i.imgflip.com/1bij.jpg',
		name: 'Boromir',
	});

	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	console.log(allMemes);

	function generateMeme() {
		const randomNum = Math.floor(Math.random() * allMemes.length);
		const randomMeme = allMemes[randomNum];
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
