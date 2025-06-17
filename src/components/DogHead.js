import React from 'react'
import dog_head from '../styles/dog_head.svg'

export default function DogHead() {
  return (
		<div className='dog_head'>
			<div className='eyes dog_eyes'>
				<div className='eye '></div>
				<div className='eye '></div>
			</div>
			<img src={dog_head} alt='' />
		</div>
	)
}
