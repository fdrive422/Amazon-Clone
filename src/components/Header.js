import Image from "next/image";
import React from "react";
import {
	MenuIcon,
	MagnifyingGlassIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
	return (
		<header>
			{/* Top nav */}
			<div className="flex items-center bg-amazon_blue pl-2 flex-grow py-2">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer p-2'
					/>
				</div>

				{/* Search */}
				<div className=' hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
					<input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
					<MagnifyingGlassIcon className='h-12 p-4' />
				</div>

				{/* Right */}
				<div className='text-white flex items-center text-xs space-x-6 mx-6 white-space: nowrap'>
					<div >
						<p>Hello</p>
						<p>Account & List</p>

					</div>
					<div>
						<p>Returns</p>
						<p>& Orders</p>
					</div>
					<div >
						<ShoppingCartIcon className='h-10' />
						<p>Cart</p>
					</div>
				</div>
			</div>


			{/* Bottom nav */}
			<div>

			</div>
		</header>
	)
}

export default Header;

