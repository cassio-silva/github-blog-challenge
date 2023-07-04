import { useState, useEffect } from 'react'
import { TitleCard } from '../../components/TitleCard'
import { api } from '../../lib/axios/api'
import { User } from '../../entities/User'

export function Home() {
  const [userInfo, setUserInfo] = useState<User>()

  async function getUserInfo() {
    const response = await api.get<User>('/cassio-silva')
    setUserInfo(response?.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <TitleCard
      variant="user"
      title={userInfo?.name}
      description={userInfo?.bio}
      img={userInfo?.avatar_url}
      user={{
        name: userInfo?.login,
        company: userInfo?.company,
        followers: userInfo?.followers,
      }}
    />
  )
}
