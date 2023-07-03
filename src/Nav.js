import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
    <ul className='nav-ul'>
        <li>
            <Link to= "/">Home</Link>
        </li>
        <li>
        <Link to= "/file">FileReader</Link>
        </li>
    </ul>
    </div>
  )
}

export default Nav
