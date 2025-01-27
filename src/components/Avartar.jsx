import React from 'react'
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
  } from "flowbite-react";
const Avartar = () => {
  return (
    <div>
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
        }
      >
        <DropdownHeader>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign out</DropdownItem>
      </Dropdown>
    </div>
  )
}

export default Avartar