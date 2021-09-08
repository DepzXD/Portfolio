import * as React from 'react'
import { useState } from 'react'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Logo from './assets/Logo'
import { Menu, X, Twitter, Codepen, GitHub } from 'react-feather'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  padding-bottom: 0;
  z-index: 99;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.darkNavy};

  @media (min-width: 800px) {
    flex-direction: column;
    position: sticky;
    max-width: 4rem;
    max-height: 100vh;
    justify-content: space-between;
    padding: 0;
  }
`
const NavLogo = styled.div`
  @media (min-width: 800px) {
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

  @media (min-width: 800px) {
    height: 100%;
    width: auto;
    position: static;
    justify-content: space-around;
    align-items: center;
  }
`
const NavLinkStyles = css`
  font-size: 2rem;
  font-weight: 600;
  @media (min-width: 800px) {
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
`

const NavLinkExternal = styled(Link)`
  ${NavLinkStyles}
`
const NavLink = styled(LinkS)`
  ${NavLinkStyles}
`

const Hamburger = styled.div`
  cursor: pointer;
  svg {
    stroke: ${({ theme }) => theme.aqua};
    width: 54px;
    height: 54px;
  }
  @media (min-width: 800px) {
    display: none;
  }
`

const Line = styled.div`
  display: none;
  @media (min-width: 800px) {
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

const SocialLinks = styled.div`
  a + a {
    margin-left: 2em;
  }
  @media (min-width: 800px) {
    display: none;
  }
`

const Nav = () => {
  const [toggleBtn, setToggleBtn] = useState(false)
  const scrollToTop = () => {
    setToggleBtn(false)
    scroll.scrollToTop()
  }
  return (
    <NavBar>
      <NavLogo onClick={() => scrollToTop()}>
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
        <NavLink
          to="About"
          onClick={() => setToggleBtn(false)}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </NavLink>
        <NavLink
          to="Works"
          onClick={() => setToggleBtn(false)}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Works
        </NavLink>
        <NavLink
          to="Contact"
          onClick={() => setToggleBtn(false)}
          spy={true}
          smooth={true}
          offset={80}
          duration={500}
        >
          Contact
        </NavLink>
        <NavLinkExternal
          to="https://drive.google.com/file/d/1FT2aI70X0oZFoZUDbx5-An9C11xGEvUY/view?usp=sharing"
          target="_blank"
          onClick={() => setToggleBtn(false)}
        >
          Resume
        </NavLinkExternal>
        <SocialLinks>
          <a
            href="https://twitter.com/DepzXD"
            target="_blank"
            alt="twitter external link"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="http://github.com/depzXD"
            target="_blank"
            alt="github external link"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="https://codepen.io/DepzXD/"
            target="_blank"
            alt="codepen external link."
            rel="noreferrer"
          >
            <Codepen />
          </a>
        </SocialLinks>
      </NavMenu>
      <Line small={true} />
    </NavBar>
  )
}

export default Nav
