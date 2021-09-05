import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from './icons/Logo'
import { Menu } from 'react-feather'
import { X } from 'react-feather'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  padding-bottom: 0;
  z-index: 99;
  position: sticky;
  top: 0;

  @media (min-width: 700px) {
    flex-direction: column;
    position: sticky;
    max-width: 4rem;
    max-height: 100vh;
    justify-content: space-between;
    padding: 0;
  }
`
const NavLogo = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`
const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 100%;
  left: ${({ toggleBtn }) => (toggleBtn ? '0' : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background-color: ${({ theme }) => theme.darkNavy};

  @media (min-width: 700px) {
    height: 100%;
    width: auto;
    position: static;
    justify-content: space-around;
    align-items: center;
  }
`
const NavLink = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  font-weight: 600;
  @media (min-width: 700px) {
    font-size: 1.2rem;
    transform: rotate(-90deg);

    /* Safari */
    -webkit-transform: rotate(-90deg);

    /* Firefox */
    -moz-transform: rotate(-90deg);

    /* IE */
    -ms-transform: rotate(-90deg);

    /* Opera */
    -o-transform: rotate(-90deg);
  }
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.aqua};
  }
`

const Hamburger = styled.div`
  cursor: pointer;
  svg {
    stroke: ${({ theme }) => theme.aqua};
    width: 54px;
    height: 54px;
  }
  @media (min-width: 700px) {
    display: none;
  }
`

const Line = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
    border: 1.15px solid ${({ theme }) => theme.gray};
    background-color: ${({ theme }) => theme.gray};
    border-radius: 10px;
    height: ${({ small }) => (small ? '8rem' : '30rem')};
    width: 0;
    justify-self: center;
    align-self: center;
  }
`

const Nav = () => {
  const [toggleBtn, setToggleBtn] = useState(false)
  return (
    <NavBar>
      <NavLogo onClick={() => setToggleBtn(false)}>
        <Logo />
      </NavLogo>
      <Hamburger>
        {toggleBtn ? (
          <X onClick={() => setToggleBtn(!toggleBtn)} />
        ) : (
          <Menu onClick={() => setToggleBtn(!toggleBtn)} />
        )}
      </Hamburger>
      <Line />
      <NavMenu toggleBtn={toggleBtn}>
        <NavLink to="/" onClick={() => setToggleBtn(false)}>
          About
        </NavLink>
        <NavLink to="/" onClick={() => setToggleBtn(false)}>
          Works
        </NavLink>
        <NavLink to="/" onClick={() => setToggleBtn(false)}>
          Contact
        </NavLink>
        <NavLink to="/" onClick={() => setToggleBtn(false)}>
          Resume
        </NavLink>
      </NavMenu>
      <Line small={true} />
    </NavBar>
  )
}

export default Nav
