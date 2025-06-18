import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Header'
import DogHead from '../DogHead'
import check from '../../styles/check.svg'
import check_nact from '../../styles/check_nonact.svg'

let boolean = false
export default function CustomTourPage() {
	let prompt = {
		age: '',
		ppl_cnt: '',
		tar: '',
		season: '',
		group: '',
	}

	const [disAct, setDisAct] = useState('disabled')
	const [checkAge, setCheckAge] = useState(check_nact)
	const [checkCnt, setCheckCnt] = useState(check_nact)
	const [ageForm, setAgeForm] = useState('')
	const [cntForm, setCntForm] = useState('')
	const [ecoClass, setEcoClass] = useState('tar_btn')
	const [comClass, setComClass] = useState('tar_btn')
	const [busClass, setBusClass] = useState('tar_btn')
	const [sumClass, setSumClass] = useState('season_btn summer')
	const [autClass, setAutClass] = useState('season_btn autumn')
	const [winClass, setWinClass] = useState('season_btn winter')
	const [YClass, setYClass] = useState('tar_btn yes')
	const [NClass, setNClass] = useState('tar_btn no')
	const [isTClicked, setIsTClicked] = useState(false)
	const [isSClicked, setIsSClicked] = useState(false)
	const [isGClicked, setIsGClicked] = useState(false)
	const [isAllClicked, setIsAllClicked] = useState(false)
	const [stylePage, setStylePage] = useState({
		margin: 'auto',
		margin_top: '40px',
		padding_top: '92px',
		padding_bottom: '200px',
		width: '1300px',
		height: '300px',
		border_radius: '30px',
		overflow: 'hidden',
		transition: 'all 1s ease-in-out',
	})
	const [dogStyle, setDogStyle] = useState({
		max_width: '360px',
		position: 'absolute',
		transform: 'translateX(660px) translateY(-60px)',
		transition: 'all 2s ease-in-out 0.5s',
	})
	const [dogContent, setDogContent] = useState(
		'Пожалуйства введите ваш возраст.'
	)
	const [dogClass, setDogClass] = useState('dialog_text')

	useEffect(() => {
		if (
			!ageForm ||
			!ageForm.match(/[1-9]/i) ||
			ageForm < 14 ||
			ageForm.match(/[a-zA-Z]/)
		) {
			setCheckAge(check_nact)
		} else {
			setCheckAge(check)
		}

		if (
			isTClicked === true &&
			isSClicked === true &&
			isGClicked === true &&
			checkAge === check &&
			checkCnt === check
		) {
			setIsAllClicked(true)
			setDisAct('')
		} else {
			setIsAllClicked(false)
			setDisAct('disabled')
		}
		if (!cntForm || !cntForm.match(/[1-9]/i) || cntForm.match(/[a-zA-Z]/i)) {
			setCheckCnt(check_nact)
		} else {
			setCheckCnt(check)
		}
		CheckDogPos()
	}, [
		ageForm,
		cntForm,
		checkAge,
		checkCnt,
		isTClicked,
		isSClicked,
		isGClicked,
		disAct
	])

	function CheckDogPos() {
		if (checkAge !== check) {
			setDogStyle({
				max_width: '360px',
				position: 'absolute',
				transform: 'translateX(660px) translateY(-60px)',
				transition: 'all 2s ease-in-out 0.5s',
			})
			setStylePage({
				margin: 'auto',
				margin_top: '40px',
				padding_top: '92px',
				width: '1300px',
				height: '300px',
				border_radius: '30px',
				overflow: 'hidden',
				transition: 'all 1s ease-in-out',
			})
			setDogClass('dialog_text dialog_text_appears')
			setDogContent('Пожалуйства введите ваш возраст.')
		}
		if (checkCnt !== check && checkAge === check) {
			setDogStyle({
				max_width: '360px',
				position: 'absolute',
				transform: 'translateX(0px) translateY(140px)',
				transition: 'all 2s ease-in-out 0.5s',
			})
			setStylePage({
				margin: 'auto',
				margin_top: '40px',
				padding_top: '92px',
				width: '1300px',
				height: '500px',
				border_radius: '30px',
				overflow: 'hidden',
				transition: 'all 1s ease-in-out',
			})
			setDogContent('Сколько человек(обезъян) поедет?')
		}
		if (checkCnt === check && checkAge === check && isTClicked === false) {
			setDogStyle({
				max_width: '360px',
				position: 'absolute',
				transform: 'translateX(660px) translateY(420px)',
				transition: 'all 2s ease-in-out 0.5s',
			})
			setStylePage({
				margin: 'auto',
				margin_top: '40px',
				padding_top: '92px',
				width: '1300px',
				height: '800px',
				border_radius: '30px',
				overflow: 'hidden',
				transition: 'all 1s ease-in-out',
			})
			setDogContent('Тариф какой категории вас устроит?')
		}
		if (
			checkCnt === check &&
			checkAge === check &&
			isTClicked === true &&
			isSClicked === false
		) {
			setDogStyle({
				max_width: '360px',
				position: 'absolute',
				transform: 'translateX(0px) translateY(700px)',
				transition: 'all 2s ease-in-out 0.5s',
			})
			setStylePage({
				margin: 'auto',
				margin_top: '40px',
				padding_top: '92px',
				width: '1300px',
				height: '1100px',
				border_radius: '30px',
				overflow: 'hidden',
				transition: 'all 1s ease-in-out',
			})
			setDogContent('Какое время года предпочтёте для отдыха?')
		}
		if (
			checkCnt === check &&
			checkAge === check &&
			isTClicked === true &&
			isSClicked === true &&
			isGClicked === false
		) {
			setDogStyle({
				max_width: '360px',
				position: 'absolute',
				transform: 'translateX(660px) translateY(960px)',
				transition: 'all 2s ease-in-out 0.5s',
			})
			setStylePage({
				margin: 'auto',
				margin_top: '40px',
				padding_top: '92px',
				width: '1300px',
				height: '1500px',
				border_radius: '30px',
				overflow: 'hidden',
				transition: 'all 1s ease-in-out',
			})
			setDogContent('Вы хотите знакомиться с другими туристами?')
		}
		if (
			checkCnt === check &&
			checkAge === check &&
			isTClicked === true &&
			isSClicked === true &&
			isGClicked === true &&
			boolean === false
		) {
			setDogStyle({
				max_width: '360px',
				position: 'absolute',
				transform: 'translateX(660px) translateY(960px)',
				transition: 'all 2s ease-in-out 0.5s',
			})
			setDogContent('Если всё верно, пожалуйста, нажмите на кнопку Создать тур')
		}
		if (isAllClicked === true) {
			setStylePage({
				margin: 'auto',
				margin_top: '40px',
				padding_top: '92px',
				width: '1300px',
				height: '1500px',
				border_radius: '30px',
				overflow: 'hidden',
				transition: 'all 1s ease-in-out',
			})
		}
	}

	function handleAgeInput(e) {
		setAgeForm(e.target.value)
		prompt.age = e.target.value
	}
	function handleCntInput(e) {
		setCntForm(e.target.value)
		prompt.ppl_cnt = e.target.value
	}

	function handleTariffInput(e) {
		if (e.target.id === 'eco') {
			setEcoClass('tar_btn eco_btn')
			setComClass('tar_btn')
			setBusClass('tar_btn')
			setIsTClicked(true)
			prompt.tar = 'Эконом'
		}
		if (e.target.id === 'com') {
			setEcoClass('tar_btn')
			setComClass('tar_btn com_btn')
			setBusClass('tar_btn')
			setIsTClicked(true)
			prompt.tar = 'Комфорт'
		}
		if (e.target.id === 'bus') {
			setEcoClass('tar_btn')
			setComClass('tar_btn')
			setBusClass('tar_btn bus_btn')
			setIsTClicked(true)
			prompt.tar = 'Бизнес'
		}
	}

	function handleSeasonInput(e) {
		if (e.target.id === 'sum') {
			setSumClass('season_btn summer season_act')
			setAutClass('season_btn autumn')
			setWinClass('season_btn winter')
			setIsSClicked(true)
			prompt.season = 'Лето'
		} else if (e.target.id === 'aut') {
			setSumClass('season_btn summer')
			setAutClass('season_btn autumn season_act')
			setWinClass('season_btn winter')
			setIsSClicked(true)
			prompt.season = 'Осень'
		} else if (e.target.id === 'win') {
			setSumClass('season_btn summer')
			setAutClass('season_btn autumn')
			setWinClass('season_btn winter season_act')
			setIsSClicked(true)
			prompt.season = 'Зима'
		}
	}

	function handleYNInput(e) {
		if (e.target.id === 'yes') {
			setYClass('tar_btn yes yn_active')
			setNClass('tar_btn no')
			setIsGClicked(true)
			prompt.group = 'Да'
		} else if (e.target.id === 'no') {
			setYClass('tar_btn yes')
			setNClass('tar_btn no yn_active')
			setIsGClicked(true)
			prompt.group = 'Нет'
		}
	}

	return (
		<div className='cst_sec'>
			<Header />
			<div style={stylePage}>
				<div className='custom_page'>
					<div style={dogStyle}>
						<div className='dialog_window'>
							<div className='dog_pos'>
								<DogHead />
							</div>
							<p className={dogClass}>{dogContent}</p>
						</div>
					</div>
					<div className='form'>
						<div className='age'>
							<h1>Возраст</h1>
							<input
								className='txt_input'
								onChange={handleAgeInput}
								value={ageForm}
								placeholder='от 14 лет'
							/>
							<img src={checkAge} alt='' />
						</div>
						<div className='ppl_cnt'>
							<h1>Кол-во чел.</h1>
							<input
								className='txt_input'
								onChange={handleCntInput}
								value={cntForm}
								placeholder='от 1'
							/>
							<img src={checkCnt} alt='' />
						</div>
						<div className='tariff_btns'>
							<button id='eco' onClick={handleTariffInput} className={ecoClass}>
								Эконом
							</button>
							<button id='com' onClick={handleTariffInput} className={comClass}>
								Комфорт
							</button>
							<button id='bus' onClick={handleTariffInput} className={busClass}>
								Бизнес
							</button>
						</div>
						<div className='season_btns'>
							<button id='sum' onClick={handleSeasonInput} className={sumClass}>
								<h2>Лето</h2>
							</button>
							<button id='aut' onClick={handleSeasonInput} className={autClass}>
								<h2>Осень</h2>
							</button>
							<button id='win' onClick={handleSeasonInput} className={winClass}>
								<h2>Зима</h2>
							</button>
						</div>
						<div className='tariff_btns yes_no'>
							<button id='yes' onClick={handleYNInput} className={YClass}>
								Да
							</button>
							<button id='no' onClick={handleYNInput} className={NClass}>
								Нет
							</button>
						</div>
						<button className='cst_btn purple' disabled={disAct}>
							Создать тур
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
