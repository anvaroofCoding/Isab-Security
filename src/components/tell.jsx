import { Button } from 'antd'
import Link from 'next/link'

const Tell = async () => {
	return (
		<div>
			<Link href={'tel:+998335551255'}>
				<Button variant='solid' color='orange' size='large'>
					+998 33 555 12 55
				</Button>
			</Link>
		</div>
	)
}

export default Tell
