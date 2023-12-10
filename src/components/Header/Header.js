import React from 'react'
import './style.css'
import EmailIcon from '@mui/icons-material/Email';

function Header() {
  return (
    <div className='header'>
        <div className='header-info'>
          <div className='contact-info'>
            <EmailIcon />
          </div>
        </div>
        <div className='navbar'>Header</div>
    </div>

  )
}

export default Header;