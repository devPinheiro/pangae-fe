import React from 'react'

const Header = () => {
    return (
      <nav
        className='flex flex-row justify-between App-header'
        role='navigation'>
        <div className='flex flex-row'>
          <h1>LUMIN</h1>
          <ul className='flex flex-row justify-between'>
            <li>
              <a href='#'>Shop</a>
            </li>

            <li>
              <a href='#'>Learn</a>
            </li>
          </ul>
        </div>

        <div className='flex'>
          <ul className='flex flex-row justify-between'>
            <li>
              <a href='#'>Account</a>
            </li>

            <li>
              <a href='#'>Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header
