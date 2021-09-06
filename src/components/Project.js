import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ExternalLink, GitHub } from 'react-feather'
import GatsbyIcon from './assets/GatsbyIcon'
import JavascriptIcon from './assets/JavascriptIcon'
import CssIcon from './assets/CssIcon'

const ProjectStyle = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
  }
`
const ImgContainer = styled.div`
  background-color: #bcbcbc2e;
  width: 100%;
  height: 15rem;
  border-radius: 17px 17px 0 0;
  @media (min-width: 800px) {
    grid-column: 5 / -1;
    grid-row: 1 / 1;
    z-index: 5;
    border-radius: 17px;
    align-self: flex-start;
    margin-top: 2rem;
  }
`
const Content = styled.div`
  background-color: ${({ theme }) => theme.darkGrey};
  padding: 1.5em;
  border-radius: 0 0 17px 17px;
  p {
    color: ${({ theme }) => theme.gray};
    max-width: 75%;
  }
  h3,
  p {
    margin-bottom: 1rem;
  }
  @media (min-width: 800px) {
    border-radius: 17px;
    grid-column: 1 / 6;
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
const ProjectLink = styled(Link)`
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

const Project = () => {
  return (
    <ProjectStyle>
      <ImgContainer></ImgContainer>
      <Content>
        <div>
          <h3>Todo List</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor
          </p>
        </div>
        <div>
          <ProjectLinks>
            <ProjectLink to="/">
              Link <ExternalLink className="link" />
            </ProjectLink>
            <ProjectLink to="/">
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

export default Project
