import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Content, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}
