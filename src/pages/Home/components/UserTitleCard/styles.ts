import { styled } from 'styled-components'

export const TitleCardContainer = styled.div`
  display: flex;
  justify-content: center;
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
export const TitleCardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: max-content;
  gap: 20px;
`
export const TitleCardFooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: fit-content;
    color: ${(props) => props.theme['base-span']};
  }

  span {
    width: fit-content;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-span']};
    white-space: nowrap;
  }
`
