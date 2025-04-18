const Map = () => {
	const spacing = 2
	return (
		<div>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1294651544658!2d69.2293381062529!3d41.28146882826873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5cb08de2ab%3A0xdab71fe08d1df6d0!2z0YPQu9C40YbQsCDQkNGA0L3QsNGB0LDQuSAzNiwgMTAwMTE1LCDQotCw0YjQutC10L3RgiwgVGFzaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1744938545215!5m2!1sru!2s'
				width={'100%'}
				height={'450'}
				// style={'border:0;'}
				style={{ marginRight: spacing + 'em' }}
				allowFullScreen=''
				loading='lazy'
				referrerPolicy='no-referrer'
			></iframe>
		</div>
	)
}

export default Map
