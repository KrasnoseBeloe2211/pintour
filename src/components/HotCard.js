import React from 'react'
import card from '../styles/card.png'
import star_active from '../styles/star_active.svg'
import star_nonactive from '../styles/star_nonactive.svg'

export default function HotCard() {
	return (
		<div className='hot_card'>
			<div className='slider_photos'>
				<img src={card} alt='' />
			</div>
			<h5>Thailand Star Hotel</h5>
			<div className='card_description'>
				<div className='information'>
					<div className='rate'>
						<p>Рейтинг тура:</p>
						<div className='stars'>
							<img src={star_active} alt='' />
							<img src={star_active} alt='' />
							<img src={star_active} alt='' />
							<img src={star_active} alt='' />
							<img src={star_nonactive} alt='' />
						</div>
					</div>
					<div className='guest_cnt'>
						<p>Кол-во чел.:</p>
						<p>2-4чел.</p>
					</div>
					<div className='place'>
						<p>Место:</p>
						<p>Тайланд</p>
					</div>
				</div>
				<h2 className='price'>40 000р</h2>
			</div>
			<a href='#!' className='hot-btn yellow-red'>
				Перейти
			</a>
		</div>
	)
}
