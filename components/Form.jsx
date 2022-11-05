import React from 'react';
import './form.css';

export default function Form() {
	return (
		<form className='form'>
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
			<button className='btn btn-generate'>Get a new meme image</button>
		</form>
	);
}
