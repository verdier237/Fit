import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import fitLogo from '../assets/2iwywt7GzguqQgGtD5yn4EhXpQt.svg'
// import Link from "next/link";
import {
    Avatar,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
  } from "flowbite-react";


const Headerf = () => {
  const [data, setData] = useState({});
  const [status , setStatus] = useState(false);
  const logOut = ()=>{
    sessionStorage.removeItem('token');
    setStatus(false)
  }
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const url = `http://localhost:5003/user/id`
        const response = await axios.get(url,{
          headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
        });
        if (response.data.status) {
          setData(response.data.data)
          setStatus(true)
          
        } else {
              setStatus(false)
        }  
      } catch (error) {
            setStatus(false)
  
      }
    }
      fetchData()

  },[])
  return (
    <Navbar fluid rounded className='bg-slate-100'>
    <NavbarBrand>
      <Link to='/'>
      <img  className=" h-16 sm:h-20 w-16 sm:w-20" alt="Fit Logo" src={fitLogo}/>
     
      </Link>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Fit</span>

    </NavbarBrand>
    <div className="flex md:order-2">
{status && (
    <Dropdown
    arrowIcon={false}
    inline
    label={
      <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
    }
  >
    <DropdownHeader>
      <span className="block text-sm">{`${data.firstname}  ${data.lastname}`}</span>
      <span className="block truncate text-sm font-medium">{data.email}</span>
    </DropdownHeader>
    <DropdownItem>Settings</DropdownItem>
    <DropdownDivider />
    <DropdownItem>
      <button onClick={logOut}>Sign out</button>
      </DropdownItem>
  </Dropdown>
)

}
{
  !status &&(
    <button type="button" class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <Link to = '/login'>
    Get started
    </Link>

    </button>

  )


}
<NavbarToggle />
    </div>

    <NavbarCollapse>
      <NavbarLink active>
        <Link to = '/'>
        Home
        </Link>
      </NavbarLink>
      <NavbarLink>
        <Link to = '/chat'>
        FitChat
        </Link>
        </NavbarLink>
      <NavbarLink >
      <Link to = '/recommandation'>
      Recommandation
        </Link>
        </NavbarLink>
      <NavbarLink >
      <Link to = '/aboutme'>
      About me
        </Link>      


      </NavbarLink>
    </NavbarCollapse>
  </Navbar>
  )
}

export default Headerf