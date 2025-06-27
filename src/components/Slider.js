import React from 'react'
import { useState } from 'react'
import arrow from '../styles/slider_arrow.svg'
import HotCard from './HotCard'

let position = 0
export default function Slider({ HotToursData, handleLink }) {
	let sliders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	let width = -sliders.length * 260
	let lastPos = width + 260

	const [arrowActRight, SetarrowActRight] = useState('slider_btn right')
	const [arrowActLeft, SetarrowActLeft] = useState('slider_btn left non_active')
	const [styleS, SetStyleS] = useState({
		transform: `translateX(${position}px)`,
		display: 'flex',
		justify_content: 'start',
		align_items: 'center',
		gap: '40px',
		z_index: '-1',
		transition: 'all 0.3s ease-in-out',
	})

	function SetNewPositionRight() {
		position -= 300
		if (position <= width / 1.3) {
			position += 300
		}

		return position
	}
	function SetNewPositionLeft() {
		if (position !== 0) {
			position += 300
		}
		return position
	}

	function NextSlide() {
		SetStyleS({
			transform: `translateX(${SetNewPositionRight()}px)`,
			display: 'flex',
			justify_content: 'center',
			align_items: 'center',
			gap: '40px',
			z_index: '-1',
			transition: 'all 0.3s ease-in-out',
		})
		if (position === lastPos) {
			SetarrowActRight('slider_btn right non_active')
		}
		if (position !== 0) {
			SetarrowActLeft('slider_btn left')
		}
	}
	function PrevSlide() {
		SetStyleS({
			transform: `translateX(${SetNewPositionLeft()}px)`,
			display: 'flex',
			justify_content: 'center',
			align_items: 'center',
			gap: '40px',
			z_index: '-1',
			transition: 'all 0.3s ease-in-out',
		})
		if (position === 0) {
			SetarrowActLeft('slider_btn left non_active')
		}
		if (position !== lastPos) {
			SetarrowActRight('slider_btn right')
		}
	}

	return (
		<div className='slider_hot'>
			<div className='slider_btns'>
				<button
					className={arrowActLeft}
					type='button'
					onClick={e => PrevSlide()}
				>
					<img className='arrow_btn' src={arrow} alt='' />
				</button>
				<button
					className={arrowActRight}
					type='button'
					onClick={e => NextSlide()}
				>
					<img className='arrow_btn' src={arrow} alt='' />
				</button>
			</div>
			<div style={styleS}>
				{HotToursData.map((card, index) => (
					<HotCard key={index} tourData={card} handleLink={handleLink} />
				))}
			</div>
		</div>
	)
}
