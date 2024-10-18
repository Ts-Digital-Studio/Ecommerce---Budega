import Image from 'next/image'
import React from 'react'

function SpamPage() {
	return (
		<div className='static h-full flex justify-center items-center gap-96'>
			<div className='text-cyan-50'>Nothing is coming to</div>
			<div className='text-cyan-50'>LOGIN BOX</div>
			<Image fill className='object-cover absolute -z-10 opacity-50' src="/room.jpg" alt='room' />
		</div>
	)
}

export default SpamPage
