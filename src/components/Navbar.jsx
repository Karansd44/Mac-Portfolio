import React from 'react'
import { navLinks } from '../Constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="" />
            <p className="font-bold">Karan's Portfolio</p>
            <ul>
                {navLinks.map(({id,name})=> (
                    <li key ={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>

        </div>
    </nav>
  )
}

export default Navbar