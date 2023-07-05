import styled from 'styled-components'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
`
export const HomePostsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 48px;
`
