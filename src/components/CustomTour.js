import React from 'react'
import hand from '../styles/hand.svg'
import rect from '../styles/rect3.svg'
import robo from '../styles/dog.svg'
import { Link } from 'react-router-dom'

export default function CustomTour() {
  return (
		<div className='custom_tour'>
			<div className='hot_head cst_tour_head'>
				<img className='background_h' src={rect} alt='' />
				<div className='hot_head_text cst_head_text'>
					<img src={hand} alt='' />
					<h3 className='hot_h'>Индивидуальный тур</h3>
				</div>
			</div>
			<div className='info_robo'>
				<div className='dialog'>
					<div className='dialog_txt'>
						<p>Хотите собрать тур по вашим предпочтениям?</p>
						<p>Наша робо-андроидная масса-псина поможет вам с этим.</p>
					</div>
				</div>
				<div className='dog'>
					<div className='eyes'>
						<div className='eye e1'></div>
						<div className='eye e2'></div>
					</div>
					<img src={robo} alt='' />
				</div>
			</div>
			<div>
				<Link to='/custom_tour' className='sec-btn purple'>
					Создать тур
				</Link>
			</div>
		</div>
	)
}
