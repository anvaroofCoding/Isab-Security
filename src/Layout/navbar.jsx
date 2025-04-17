// import Image from 'next/image'
// import Link from 'next/link'
// import isab from '../Assets/img/isabLogoSaytBar.svg'

import { NavbarDemo } from './NavbarForMenu'

const Navbar = () => {
	return (
		<div className='sticky z-50'>
			<nav className='my-[30px]'>
				{/* <Link href={'/'}>
						<Image src={isab} alt='Isab Security' />
					</Link> */}
				<NavbarDemo />
			</nav>
		</div>
	)
}

export default Navbar
