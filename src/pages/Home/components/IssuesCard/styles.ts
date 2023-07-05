import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const IssueContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-post']};
  text-decoration: none;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }
`
export const IssueHeading = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  strong {
    width: fit-content;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    width: 100%;
    max-width: fit-content;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
  }
`
export const IssueBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 7rem;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;

  p,
  h1,
  h2,
  h3,
  span {
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`
