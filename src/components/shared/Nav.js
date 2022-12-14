import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container mx-auto">
      <Navbar fluid={true} rounded={true}>
        <Link to={'/'}>
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CB Dictionary
          </span>
        </Navbar.Brand></Link>
        <div className="flex justify-center items-center gap-5">
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"} active={true.toString()}>
            Home
          </Link>
          <Link to={"/add-word"}>Add Word</Link>
        </Navbar.Collapse></div>
      </Navbar>
    </div>
  );
};

export default Nav;
