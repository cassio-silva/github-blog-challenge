import { styled } from 'styled-components'

export const IssueTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem;
  margin-top: -4.75rem;
  gap: 8px;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 6px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }
`
export const IssueLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: fit-content;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }
`
export const IssuesFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const IssuesFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;

  svg {
    width: fit-content;
    color: ${(props) => props.theme['base-span']};
  }

  span {
    /* width: fit-content; */
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`
