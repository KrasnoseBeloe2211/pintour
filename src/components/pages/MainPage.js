import React, { useEffect } from 'react'
import Header from '../Header'
import HotTours from '../HotTours'

import Footer from '../Footer'

import Tariff from '../Tariff'
import CustomTour from '../CustomTour'

export default function MainPage({
	pageChange,
	HotToursData,
	handleLink,
	handleTariffLink,
}) {
	const pageName = 'MainPage'

	useEffect(() => {
		pageChange(pageName)
	}, [])

	return (
		<>
			<Header />
			<HotTours HotToursData={HotToursData} handleLink={handleLink} />
			<CustomTour />
			<Tariff handleTariffLink={handleTariffLink} />
			<Footer />
		</>
	)
}
