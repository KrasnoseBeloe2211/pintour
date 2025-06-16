// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import MainPage from './components/pages/MainPage'
import CustomTourPage from './components/pages/CustomTourPage'
import EconomPage from './components/pages/EconomPage'
import ComfortPage from './components/pages/ComfortPage'
import BusinessPage from './components/pages/BusinessPage'


function App() {
	// const [toursData, SetToursData] = useState(null)

	return (
		<div className='App'>
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/custom_tour' element={<CustomTourPage />} />
						<Route path='/econom' element={<EconomPage />} />
						<Route path='/comfort' element={<ComfortPage />} />
						<Route path='/business' element={<BusinessPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}

export default App
