import React from 'react';
import { Link } from 'react-router';

export default () =>
{
	return (
		<div className='boxed-view'>
			<div className='boxed-view__box'>
				<h1> Pagina no encontrada</h1>
				<p>Hmmm, no pudimos encontrar esa pagina</p>
				<Link to='/' className='button button--link'>Ir a casa</Link>
			</div>
		</div>
	);
}