import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 296px;
  max-height: 296px;
  background: radial-gradient(
    farthest-side at top center,
    ${(props) => props.theme['base-input']} 5%,
    ${(props) => props.theme['base-post']} 70%
  );

  img {
    width: 400px;
    &.logo {
      width: 148px;
      margin-bottom: 4rem;
    }
  }
`
