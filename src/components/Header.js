import React from 'react'
import logo from '../styles/logo.png'
import plane from '../styles/plane.png'

export default function Header() {
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='pintour' />
			<div className='links_header'>
				<ul className='header_list'>
					<li>
						<a className='header_link' href='#!'>
							Главная
						</a>
					</li>
					<li>
						<a className='header_link' href='#!'>
							Тарифы
						</a>
					</li>
					<li>
						<a className='header_link' href='#!'>
							О нас
						</a>
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
