import React from 'react'
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
  return (
    <div className='header'>
        <div className='header-info'>
          <div className='contact-info'>
            <div className='d-flex-full'>
              <EmailIcon /> <span className='p-6'>info@orientpolypack.com</span>
              <CallIcon /> <span className='p-6'>+91 9923620479</span>
            </div>
            <div className='d-flex-full'>
              <PersonIcon /> <span className='p-6'>User 1 (Login)</span>
            </div>
          </div>
        </div>
        <div className='navbar'></div>
    </div>

  )
}

export default Header;