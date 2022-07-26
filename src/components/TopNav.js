import React from 'react'

function TopNav() {
    return (
      <>
        <h1 className='topnav-h1'>Forum Page</h1>
        <nav className='topnav-container'>
          <a className='topnav-login-link' href="#">Home</a>
          <a className='topnav-login-link' href="#">Login/Register</a>
          <a className='topnav-login-link' href="#">Logout</a>
        </nav>
      </>
    )
}

export default TopNav;
