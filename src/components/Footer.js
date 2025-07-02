import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<div className='footer'>
			<div className='links'>
				<h2>Страницы</h2>
				<Link className='a' to='/tours'>
					Все Туры
				</Link>
				<Link className='a' to='/custom_tour'>
					Индивидуальный тур
				</Link>
				<Link className='a' to='/about_us'>
					О нас
				</Link>
				<Link className='a' to='/about_tariffs'>
					О тарифах
				</Link>
			</div>
			<div className='links'>
				<h2>Создатели</h2>
				<div className='links_text'>
					<p>Ведущий разработчик</p>
					<a className='a' href='https://t.me/valeron4iki'>
						@valeron4iki
					</a>
				</div>
				<div className='links_text'>
					<p>Ведущая компания разработки ПИН-КОД</p>
					<a className='a' href='https://t.me/pinayewa'>
						@pinayewa
					</a>
				</div>
			</div>
			<div className='links'>
				<h2>Партнёры</h2>
				<div className='links_text'>
					<a className='a' href='https://www.fpifpi.ru/'>
						ФПИ БАНК
					</a>
				</div>
				<div className='links_text'>
					<a className='a' href='https://t.me/pinayewa'>
						ООО ПИН-КОД
					</a>
				</div>
				<div className='links_text'>
					<a className='a' href='https://www.freepik.com/'>
						FreePik
					</a>
				</div>
			</div>
		</div>
	)
}
