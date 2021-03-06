import React from 'react';
import './ImageLinkForm.css'

// #4
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => { // Destructuring
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures.'}
      </p>
	      <div className='form  center pa4 br3 shadow-5'>
		      	<input className='f4 pa2 w-70 ' type='text' placeholder='Enter image URL' onChange={onInputChange}/>
		      	<button 
		      		className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
		      		onClick={onButtonSubmit}
		      		>Detect</button>
	      </div>
    </div>
  );
}

export default ImageLinkForm;