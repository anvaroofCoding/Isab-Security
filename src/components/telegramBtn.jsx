import { Button } from 'antd'
import Link from 'next/link'

const TelegramBtn = () => {
	return (
		<div>
			<Link href={'tel:+99895 845 12 55'}>
				<Button color='orange' variant='solid' size='large'>
					Написать в Telegram
				</Button>
			</Link>
		</div>
	)
}

export default TelegramBtn
