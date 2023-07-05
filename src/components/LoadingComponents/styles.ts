import { styled } from 'styled-components'

export const LoadingTitle = styled.div`
  width: 100%;
  height: auto;
  padding: 6rem;
  margin-top: -4.75rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 6px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      filter: brightness(1.2);
    }
    70% {
      filter: brightness(0.8);
    }
    100% {
      filter: brightness(1);
    }
  }
`

export const LoadingIssueCard = styled.div`
  width: 416px;
  height: 260px;
  background: ${(props) => props.theme['base-post']};
  border-radius: 6px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      filter: brightness(1.2);
    }
    70% {
      filter: brightness(0.8);
    }
    100% {
      filter: brightness(1);
    }
  }
`
export const LoadingIssueContent = styled.div`
  width: 100%;
  height: 40vh;
  margin-top: 2.5rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 6px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      filter: brightness(1.2);
    }
    70% {
      filter: brightness(0.8);
    }
    100% {
      filter: brightness(1);
    }
  }
`
