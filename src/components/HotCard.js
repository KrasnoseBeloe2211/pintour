import React from 'react'
import card from '../styles/card.png'
import star_active from '../styles/star_active.svg'
import star_nonactive from '../styles/star_nonactive.svg'
import { useNavigate } from 'react-router-dom'

export default function HotCard({ tourData, handleLink }) {
	const navigate = useNavigate()
	const handleLinks = async () => {
		handleLink(tourData)
		navigate('/tourPage')
	}
	const Rate = () => {
		let rate = tourData.hotel_rating

		let stars = [
			star_nonactive,
			star_nonactive,
			star_nonactive,
			star_nonactive,
			star_nonactive,
		]

		for (let i = 0; i < rate; i++) {
			stars[i] = star_active
		}

		return (
			<div>
				<img src={stars[0]} alt='' />
				<img src={stars[1]} alt='' />
				<img src={stars[2]} alt='' />
				<img src={stars[3]} alt='' />
				<img src={stars[4]} alt='' />
			</div>
		)
	}

	return (
		<div className='hot_card'>
			<div className='slider_photos'>
				<img src={tourData.image_base64} alt='' />
			</div>
			<h5>{tourData.hotel_name}</h5>
			<div className='card_description'>
				<div className='information'>
					<div className='rate'>
						<p>Рейтинг тура:</p>
						<div className='stars'>{Rate()}</div>
					</div>
					<div className='guest_cnt'>
						<p>Группа: </p>
						<p>{tourData.group}</p>
					</div>
					<div className='place'>
						<p>Место:</p>
						<p>{tourData.location}</p>
					</div>
				</div>
				<h2 className='price'>{tourData.tariff}</h2>
			</div>
			<button onClick={handleLinks} className='hot-btn yellow-red'>
				Перейти
			</button>
		</div>
	)
}
