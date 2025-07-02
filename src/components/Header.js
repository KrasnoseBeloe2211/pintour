import React from 'react'
import logo from '../styles/logo.png'
import plane from '../styles/plane.png'
import { Link } from 'react-router-dom'

export default function Header() {
	
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='pintour' />
			<div className='links_header'>
				<ul className='header_list'>
					<li>
						<Link className='header_link' to='/'>
							Главная
						</Link>
					</li>
					<li>
						<a className='header_link' href='#tariff'>
							Тарифы
						</a>
					</li>
					<li>
						<Link className='header_link' to='/about_us'>
							О нас
						</Link>
					</li>
				</ul>
				<img className='plane' src={plane} alt='plane' />
			</div>
			<div className='buttons'>
				<a href='#!' className='header-btn yellow'>
					Вход
				</a>
				<a href='#!' className='header-btn pink'>
					Регистрация
				</a>
			</div>
		</div>
	)
}
