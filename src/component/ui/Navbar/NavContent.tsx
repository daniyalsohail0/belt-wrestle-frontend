import React from 'react'
import { IoClose } from "react-icons/io5";
import Search from '../Search';

interface Props {
    handleNavClose: () => void;
}

const NavContent: React.FC<Props> = ({handleNavClose}) => {
  return (
    <div className='className="md:hidden block"'>
        <div className='flex justify-between items-center'>
            <h3>Menu</h3>
            <button onClick={handleNavClose}><IoClose className='text-2xl' /></button>
        </div>
        <div>
            <Search />
        </div>
    </div>
  )
}

export default NavContent