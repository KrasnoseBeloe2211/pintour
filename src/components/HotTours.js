import React from 'react'
import Slider from './Slider'
import flame from '../styles/flame.svg'
import back_h from '../styles/hot_back.svg'

export default function HotTours({ HotToursData, handleLink }) {
	return (
		<div className='hot_section'>
			<div className='hot_head'>
				<div className='hot_head_text'>
					<img src={flame} alt='' />
					<h4 className='hot_h'>Горящие туры</h4>
				</div>
				<img className='background_h' src={back_h} alt='' />
			</div>
			<Slider HotToursData={HotToursData} handleLink={handleLink} />
		</div>
	)
}
