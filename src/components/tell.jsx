import { Button } from 'antd'
import Link from 'next/link'

const Tell = async () => {
	return (
		<div>
			<Link href={'tel:+998958451255'}>
				<Button variant='solid' color='orange' size='large'>
					+99895 845 12 55
				</Button>
			</Link>
		</div>
	)
}

export default Tell
