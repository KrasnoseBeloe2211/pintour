import React, { useEffect, useState } from 'react'
import Header from '../Header'
import TourCard from '../TourCard'

export default function TariffsPages({ toursList, handleLink }) {
	let eco_tours = []
	let com_tours = []
	let bus_tours = []

	const [ecoClass, setEcoClass] = useState('button')
	const [comClass, setComClass] = useState('button')
	const [busClass, setBusClass] = useState('button')
	const [allClass, setAllClass] = useState('button')
	const [currentMas, setCurMas] = useState(toursList)

	
	useEffect(() => {
		ChangeTar()
	}, [currentMas, eco_tours, com_tours, bus_tours])

	function ChangeTar() {
		for (let i = 0; i < 10; i++) {
			if (toursList[i].tariff.toLowerCase() === 'эконом') {
				eco_tours.push(toursList[i])
			}
			if (toursList[i].tariff.toLowerCase() === 'комфорт') {
				com_tours.push(toursList[i])
			}
			if (toursList[i].tariff.toLowerCase() === 'бизнес') {
				bus_tours.push(toursList[i])
			}
		}
	}

	function handleTariffInput(e) {
		if (e.target.id === 'eco') {
			setEcoClass('button econom_btn')
			setComClass('button')
			setBusClass('button')
			setAllClass('button')
			setCurMas(eco_tours)
		}
		if (e.target.id === 'com') {
			setEcoClass('button ')
			setComClass('button comfort_btn')
			setBusClass('button')
			setAllClass('button')
			setCurMas(com_tours)
		}
		if (e.target.id === 'bus') {
			setEcoClass('button ')
			setComClass('button')
			setBusClass('button business_btn')
			setAllClass('button')
			setCurMas(bus_tours)
		}
		if (e.target.id === 'all') {
			setEcoClass('button ')
			setComClass('button')
			setBusClass('button')
			setAllClass('button all_btn')
			setCurMas(toursList)
		}
	}

	return (
		<>
			<Header />
			<div className='tours_sec'>
				<div className='choose_tariff'>
					<button onClick={handleTariffInput} id='eco' className={ecoClass}>
						Эконом
					</button>
					<button onClick={handleTariffInput} id='com' className={comClass}>
						Комфорт
					</button>
					<button onClick={handleTariffInput} id='bus' className={busClass}>
						Бизнес
					</button>
					<button onClick={handleTariffInput} id='all' className={allClass}>
						Все
					</button>
				</div>
				<div className='tours_window'>
					{currentMas.map((card, index) => (
						<TourCard handleLink={handleLink} key={index} tour_inf={card} />
					))}
				</div>
			</div>
		</>
	)
}
