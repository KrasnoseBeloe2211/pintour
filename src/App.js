import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import tourData from './tourData.json'
import alltours from './AllTours.json'
import MainPage from './components/pages/MainPage'
import CustomTourPage from './components/pages/CustomTourPage'
import TourPage from './components/pages/TourPage'
import TariffsPages from './components/pages/TariffsPages'
import AboutUs from './components/pages/AboutUs'
import AboutTariffs from './components/pages/AboutTariffs'

function App() {
	const hotjson = tourData
	const json = alltours
	const [toursList, setToursList] = useState(json)
	const [HotToursData, SetToursData] = useState(hotjson)
	const [page, setPage] = useState('MainPage')

	const PageChanges = pageName => {
		setPage(pageName)
		if (pageName !== 'TourPage') {
			setData({
				tour_name: '',
				hotel_rating: '',
				hotel_name: '',
				location: '',
				service_level: '',
			})
		}
	}

	const [data, setData] = useState({
		tour_name: '',
		hotel_rating: '',
		hotel_name: '"',
		location: '',
		service_level: '',
		description: '',
		tariff: '',
		auditory: '',
		season: '',
		group: '',
		cost: '',
	})
	let prompt = {
		age: '',
		people_count: '',
		tariff: '',
		season: '',
		is_individual: false,
	}

	const handleSubmitCustomTour = async e => {
		e.preventDefault()

		const response = await axios.post(
			'http://localhost:8000/generate-tour',
			prompt
		)
		const result = response.data
		setData(result)
	}
	const handleLink = async tour => {
		setData(tour)
	}
	return (
		<div className='App'>
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={
								<MainPage
									handleLink={handleLink}
									HotToursData={HotToursData}
									pageChange={PageChanges}
								/>
							}
						/>
						<Route
							path='/tours'
							element={
								<TariffsPages handleLink={handleLink} toursList={toursList} />
							}
						/>
						<Route
							path='/custom_tour'
							element={
								<CustomTourPage
									pageChange={PageChanges}
									handleSubmitCustomTour={handleSubmitCustomTour}
									data={data}
									prompt={prompt}
								/>
							}
						/>
						<Route
							path='/tourPage'
							element={<TourPage pageChange={PageChanges} data={data} />}
						/>
						<Route path='/about_us' element={<AboutUs />} />
						<Route path='/about_tariffs' element={<AboutTariffs />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}
export default App
