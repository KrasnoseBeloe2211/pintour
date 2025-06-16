import React from 'react'
import tarrif from '../styles/tarfiff 1.svg'
import rect from '../styles/rect.svg'
import star_active from '../styles/star_active.svg'
import star_nonactive from '../styles/star_nonactive.svg'
import { Link } from 'react-router-dom'

export default function Tariff() {
  return (
		<div id='tariff' className='tariffs'>
			<div className='hot_head tarrifs_head'>
				<img className='background_h' src={rect} alt='' />
				<div className='hot_head_text'>
					<img src={tarrif} alt='' />
					<h3 className='hot_h tariff_h'>Тарифы</h3>
				</div>
			</div>
			<div className='tariffs_cards'>
				<Link className='tar_card' to='/econom'>
					<div>
						<div className='tar_card_h'>
							<h2>ЭКОНОМ</h2>
						</div>
						<div className='tar_price'>
							<h4>Цена</h4>
							<h4>30 - 70 т.р.</h4>
						</div>
						<div className='tar_price'>
							<h4>Отели</h4>
							<div className='stars tariff_stars'>
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_nonactive} alt='' />
								<img src={star_nonactive} alt='' />
							</div>
						</div>
						<div className='tar_price'>
							<h4>Путь</h4>
							<h4>1-3 пересадки</h4>
						</div>
						<div className='tar_price'>
							<h4>Сервис</h4>
							<h4>Мин.</h4>
						</div>
					</div>
				</Link>
				<Link className='tar_card comfort_card' to='/comfort'>
					<div>
						<div className='tar_card_h comfort'>
							<h2>КОМФОРТ</h2>
						</div>
						<div className='tar_price'>
							<h4>Цена</h4>
							<h4>50 - 120 т.р.</h4>
						</div>
						<div className='tar_price'>
							<h4>Отели</h4>
							<div className='stars tariff_stars'>
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_nonactive} alt='' />
							</div>
						</div>
						<div className='tar_price'>
							<h4>Путь</h4>
							<h4>0-2 пересадки</h4>
						</div>
						<div className='tar_price'>
							<h4>Сервис</h4>
							<h4>Сред.</h4>
						</div>
					</div>
				</Link>
				<Link className='tar_card business_card' to='/business'>
					<div>
						<div className='tar_card_h business'>
							<h2>БИЗНЕС</h2>
						</div>
						<div className='tar_price'>
							<h4>Цена</h4>
							<h4>100 т.р. и выше</h4>
						</div>
						<div className='tar_price'>
							<h4>Отели</h4>
							<div className='stars tariff_stars'>
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
								<img src={star_active} alt='' />
							</div>
						</div>
						<div className='tar_price'>
							<h4>Путь</h4>
							<h4>0 пересадки</h4>
						</div>
						<div className='tar_price'>
							<h4>Сервис</h4>
							<h4>Полн.</h4>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}
