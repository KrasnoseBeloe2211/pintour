import React, { useEffect, useState, useSyncExternalStore } from 'react'

import photo from '../styles/card.png'
import star_active from '../styles/star_active.svg'
import star_nonactive from '../styles/star_nonactive.svg'
import { useNavigate } from 'react-router-dom'

export default function TourCard({ tour_inf, handleLink }) {
	const [tariffColor, setTariffColor] = useState('tour_tariff')

	useEffect(() => {
		if (tour_inf.tariff.toLowerCase() === 'эконом') {
			setTariffColor('tour_tariff econom')
		}
		if (tour_inf.tariff.toLowerCase() === 'комфорт') {
			setTariffColor('tour_tariff comfort')
		}
		if (tour_inf.tariff.toLowerCase() === 'бизнес') {
			setTariffColor('tour_tariff business')
		}
	}, [tariffColor, setTariffColor, tour_inf.tariff.toLowerCase()])
	const navigate = useNavigate()
	const handleLinks = async () => {
		handleLink(tour_inf)
		navigate('/tourPage')
	}

	const Rate = () => {
		let rate = tour_inf.hotel_rating

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
			<div className='tour_card_stars'>
				<img src={stars[0]} alt='' />
				<img src={stars[1]} alt='' />
				<img src={stars[2]} alt='' />
				<img src={stars[3]} alt='' />
				<img src={stars[4]} alt='' />
			</div>
		)
	}
	return (
		<div className='tour_card'>
			<div className='tour_head'>
				<h3>{tour_inf.tour_name}</h3>
				<img src={tour_inf.image_base64} alt='' />
			</div>
			<div className='tour_inf'>
				<div className='hotel_inf'>
					<div className='hotel_header'>
						<h3>{tour_inf.hotel_name} -</h3>
						{Rate()}
					</div>
					<h3>Сервис - {tour_inf.service_level}</h3>
					<h3>Место - {tour_inf.location}</h3>
					<button onClick={handleLinks} className='tour_button'>
						Тур
					</button>
				</div>

				<h1 className={tariffColor}>{tour_inf.tariff}</h1>
			</div>
		</div>
	)
}
