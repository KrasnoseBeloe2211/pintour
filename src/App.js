import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import HotTours from './components/HotTours'
import axios from 'axios'
import Tariff from './components/Tariff'

function App() {
	const [toursData, SetToursData] = useState(null)


	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<HotTours />
				<Tariff/>
			</div>
		</div>
	)
}

export default App
