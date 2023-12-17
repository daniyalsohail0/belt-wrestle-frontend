import React from 'react'
import { Link } from 'react-router-dom'

const PreHeader: React.FC = () => {
  return (
    <div className='bg-grey-200 flex justify-between items-center bg-gray-100 small-text p-2'>
        <div>
            <Link to={`/`} className='underline'>Affiliate Program</Link>
        </div>
        <div>
            <ul className='flex gap-1'>
                <li className='underline cursor-pointer'>Help</li>
                <li>|</li>
                <li className='underline cursor-pointer'>Join Us</li>
                <li>|</li>
                <li className='underline cursor-pointer'>Sign In</li>
            </ul>
        </div>
    </div>
  )
}

export default PreHeader