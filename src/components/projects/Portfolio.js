import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { ExternalLink, GitHub } from 'react-feather'
import GatsbyIcon from '../assets/GatsbyIcon'
import JavascriptIcon from '../assets/JavascriptIcon'
import CssIcon from '../assets/CssIcon'

const ProjectStyle = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
`
const ImgContainer = styled.div`
  border-radius: 17px 17px 0 0;
  background: #131132;
  & [data-gatsby-image-wrapper] {
    border-radius: 17px 17px 0 0;
    cursor: pointer;
    opacity: 0.45;
    &:hover {
      transition: all 0.3s ease;
      opacity: 1;
    }
  }
  @media (min-width: 800px) {
    max-width: 370px;
    grid-column: 7 / -1;
    grid-row: 1 / 1;
    z-index: 5;
    align-self: flex-start;
    margin-top: 1.7rem;
    overflow: hidden;
    border-radius: 17px;
    & [data-gatsby-image-wrapper] {
      border-radius: 17px;
      width: 100%;
      height: 100%;
    }
  }
`
const Content = styled.div`
  background-color: ${({ theme }) => theme.darkGrey};
  padding: 1.5em;
  border-radius: 0 0 17px 17px;
  p {
    color: ${({ theme }) => theme.gray};
    max-width: 70%;
  }
  h3,
  p {
    margin-bottom: 1rem;
  }
  @media (min-width: 800px) {
    border-radius: 17px;
    grid-column: 1 / 8;
    grid-row: 1 / 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 22rem;
  }
`

const ProjectLinks = styled.div`
  display: flex;
`
const ProjectLink = styled.a`
  margin-right: 1rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .link {
    text-align: center;
    margin-left: 0.5rem;
  }
`
const Tools = styled.div`
  display: none;

  @media (min-width: 800px) {
    margin-top: 1em;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    justify-self: flex-end;
    svg + svg {
      margin-left: 1em;
    }
  }
`

const Portfolio = () => {
  return (
    <ProjectStyle>
      <ImgContainer>
        <StaticImage
          src="../../images/portfolio.jpg"
          alt="Personal portfolio Image."
          aspectRatio={16 / 9}
          placeholder="blurred"
        />
      </ImgContainer>
      <Content>
        <div>
          <h3>Portfolio</h3>
          <p>
            Personal Website built with Gatsby, Js, Gsap and Styled Components
            (Css in Js) for Styling.
          </p>
        </div>
        <div>
          <ProjectLinks>
            <ProjectLink to="https://depz.rocks" target="_blank">
              Link <ExternalLink className="link" />
            </ProjectLink>
            <ProjectLink
              to="https://github.com/DepzXD/Portfolio"
              target="_blank"
            >
              Code <GitHub className="link" />
            </ProjectLink>
          </ProjectLinks>
          <Tools>
            <GatsbyIcon />
            <JavascriptIcon />
            <CssIcon />
          </Tools>
        </div>
      </Content>
    </ProjectStyle>
  )
}

export default Portfolio
