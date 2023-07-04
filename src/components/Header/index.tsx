import ImageLeftEffect from '../../assets/effect-left.png'
import ImageRightEffect from '../../assets/effect-right.png'
import Logo from '../../assets/logo.svg'

import { HeaderContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <img src={ImageLeftEffect} alt="" draggable="false" />
      <img src={Logo} className="logo" alt="" draggable="false" />
      <img src={ImageRightEffect} alt="" draggable="false" />
    </HeaderContainer>
  )
}
