import { styled } from 'styled-components'

export const IssueContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem 2rem;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6;
    margin: 8px 0;

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.6;
  }

  pre {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 2px;
    background: ${(props) => props.theme['base-post']};
  }

  code {
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
  }

  ul {
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem 2.25rem;
    color: ${(props) => props.theme['base-text']};
  }
`
