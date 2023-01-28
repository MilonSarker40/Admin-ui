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
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from '../Sidebar/Sidebar';




const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleClick=()=>{
      localStorage.clear();
      // window.location.href = '/login';
      window.location.reload();
    }
  return (
    <>
      <header className={`${classes.header}`}>
        <div className='container-fluid'>
            <Row>
              <div className={`${classes.header__innr}`}>
                <div className='logo clearfix'>
                        <Link href='/'>
                            <Image src={Logo} width='150px' height='50px' alt='' /> 
                        </Link>
                        <Button variant="primary" onClick={handleShow}>
                          <i class="ri-bar-chart-horizontal-fill"></i>
                        </Button>
                 </div>
                 <div className='avator'>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
                        <DropdownToggle caret size="lg">
                            <Image src={Avator} width='70px' height='70px' alt='' />
                        </DropdownToggle>
                        <DropdownMenu>
                            {/* <DropdownItem href='/login'><i class="ri-login-circle-line"></i>Login</DropdownItem> */}
                            <DropdownItem onClick={handleClick} href='#'><i class="ri-account-circle-fill"></i>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                 </div>
               </div>
            </Row>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
      </header>
    </>
  )
}

export default Header
