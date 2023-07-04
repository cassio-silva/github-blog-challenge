import { Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={'/'} element={<App />} />
      </Route>
    </Routes>
  )
}
