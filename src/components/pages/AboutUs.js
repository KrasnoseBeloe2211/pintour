import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import hand from '../../styles/aboutus.svg'
import rect from '../../styles/rect3.svg'

export default function AboutUs() {
	return (
		<div>
			<Header />
			<div className='about_us'>
				<div className='hot_head cst_tour_head'>
					<img className='background_h' src={rect} alt='' />
					<div className='hot_head_text cst_head_text'>
						<h3 className='hot_h'>О нас</h3>
						<img className='icon' src={hand} alt='' />
					</div>
				</div>
				<div className='inf'>
					<h2>PinTour</h2>
					<p>
						PinTour — это инновационный туристический сервис, который использует
						искусственный интеллект для автоматического планирования идеальных
						путешествий. Наша миссия — избавить пользователей от рутинного
						поиска туров, авиабилетов и отелей, предлагая готовые маршруты,
						полностью соответствующие их предпочтениям, бюджету и временным
						возможностям.
					</p>
					<h2>Чем мы занимаемся?</h2>
					<p>
						PinTour разрабатывает AI-ассистента для путешествий, который создает
						индивидуальные туры – учитывает интересы (пляжный отдых, экскурсии,
						гастрономия и др.), бюджет и сроки.
					</p>
					<h2>PinTour — путешествуйте умнее, а не сложнее!</h2>
					<p>Наш сервис подходит:</p>
					<p>
						Путешественникам, которые устали от ручного сравнения сотен
						вариантов.
					</p>
					<p>Занятым профессионалам, ценящим своё время.</p>
					<p>Любителям приключений, ищущим нестандартные маршруты.</p>
          <p>Семейным туристам, которым важно удобство и безопасность.</p>
				</div>
			</div>
			<Footer />
		</div>
	)
}
