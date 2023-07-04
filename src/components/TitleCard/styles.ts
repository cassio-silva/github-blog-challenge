import { styled } from 'styled-components'

export const TitleCardContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 2rem;
  margin-top: -6rem;
  gap: 2rem;

  background: ${(proops) => proops.theme['base-profile']};
  border-radius: 6px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`
export const TitleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TitleCardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
`
