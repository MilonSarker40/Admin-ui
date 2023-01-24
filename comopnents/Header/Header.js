import React,{useState} from 'react';
import {Row, Col } from 'reactstrap';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/Logo.png';
import classes from './Header.module.css';
import Avator from '../../public/images/avator.png';

const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleClick=()=>{
      localStorage.clear();
      window.location.reload();
  }
  return (
    <>
      <header className={`${classes.header}`}>
        <div className='container-fluid'>
            <Row>
              <div className={`${classes.header__innr}`}>
                <div className='logo'>
                        <Link href='/'>
                            <Image src={Logo} width='150px' height='50px' alt='' /> 
                        </Link>
                 </div>
                 <div className='avator'>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
                        <DropdownToggle caret size="lg">
                            <Image src={Avator} width='70px' height='70px' alt='' />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem href='/login'><i class="ri-login-circle-line"></i>Login</DropdownItem>
                            <DropdownItem onClick={handleClick} href='/logout'><i class="ri-account-circle-fill"></i>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                 </div>
               </div>
            </Row>
        </div>
      </header>
    </>
  )
}

export default Header
