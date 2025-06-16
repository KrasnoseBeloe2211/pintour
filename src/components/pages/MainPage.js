import React from 'react'
import Header from '../Header'
import HotTours from '../HotTours'

import Tariff from '../Tariff'
import CustomTour from '../CustomTour'

export default function MainPage() {
	return (
		<>
			<Header />
			<HotTours />
			<CustomTour />
			<Tariff />
		</>
	)
}
