import React, { useEffect } from 'react'
import card from '../../styles/card.png'
import Header from '../Header'
import geo from '../../styles/geo.svg'
import back_gr from '../../styles/back_gr.svg'
import star_act from '../../styles/StarAct.svg'
import star_nact from '../../styles/StarNAct.svg'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'

export default function TourPage({ data, pageChange }) {
	const pageName = 'TourPage'
	const navigate = useNavigate()
	console.log(data)
	useEffect(() => {
		if (data.tour_name === '') {
			navigate('/')
		}
		pageChange(pageName)
	}, [])

	const Rate = () => {
		let rate = data.hotel_rating

		let stars = [star_nact, star_nact, star_nact, star_nact, star_nact]

		for (let i = 0; i < rate; i++) {
			stars[i] = star_act
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
		<div>
			<Header />
			<div className='tour_sec'>
				<div className='hot_head green'>
					<div className='hot_head_text'>
						<img src={geo} alt='' />
						<h4 className='hot_h'>Тур</h4>
					</div>
					<img className='background_h' src={back_gr} alt='' />
				</div>
				<div className='main_inf'>
					<h1 className='tour_name'>{data.tour_name}</h1>
					<div className='hotel_desc'>
						<img className='tour_photo' src={data.image_base64} alt='' />
						<div className='hotel_desc_text'>
							<h1 className='hotel_name'>{data.hotel_name}</h1>
							<div className='hotel_desc_desc'>
								<div className='decs_card hotel_rate'>
									<h2>Рейтинг</h2>
									<div className='hotel_stars'>{Rate()}</div>
								</div>
								<div className='decs_card service'>
									<h2>Сервис</h2>
									<h2>{data.service_level}</h2>
								</div>
								<div className='decs_card adress'>
									<h2>Место</h2>
									<h2>{data.location}</h2>
								</div>
							</div>
						</div>
					</div>
					<div className='tour_characterisctics'>
						<div className='tour_char'>
							<div className='decs_card'>
								<h2>Тариф</h2>
								<h2>{data.tariff}</h2>
							</div>
							<div className='decs_card'>
								<h2>Сезон</h2>
								<h2>{data.season}</h2>
							</div>
							<div className='decs_card'>
								<h2>Категория</h2>
								<h2>{data.auditory}</h2>
							</div>
							<div className='decs_card'>
								<h2>{data.group} тур</h2>
							</div>
							<div className='decs_card'>
								<h2>Цена {data.cost} руб.</h2>
							</div>
						</div>
						<div className='tour_desc'>
							<h3>{data.description}</h3>
						</div>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
