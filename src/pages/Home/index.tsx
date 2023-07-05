import { useState, useEffect } from 'react'
import { UserTitleCard } from './components/UserTitleCard'
import { api } from '../../lib/axios/api'
import { User } from '../../entities/User'
import { HomeContainer, HomePostsWrapper } from './styles'
import { IssuesProps } from '../../entities/Issues'
import { IssuesCard } from './components/IssuesCard'
import {
  LoadingIssueCard,
  LoadingTitle,
} from '../../components/LoadingComponents/styles'

export function Home() {
  const [userInfo, setUserInfo] = useState<User>()
  const [issues, setIssues] = useState<IssuesProps[]>()
  const [isLoading, setIsLoading] = useState(false)
  const user = 'cassio-silva'
  const repo = 'kazdev-blog'

  async function getUserInfo() {
    const response = await api.get<User>(`/users/${user}`)
    setUserInfo(response?.data)
  }

  async function getIssues() {
    const response = await api.get<IssuesProps[]>(
      `repos/${user}/${repo}/issues`,
    )
    setIssues(response?.data)
  }

  useEffect(() => {
    setIsLoading(true)
    getUserInfo()
    getIssues()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <HomeContainer>
        <LoadingTitle />
        <HomePostsWrapper>
          <LoadingIssueCard />
          <LoadingIssueCard />
          <LoadingIssueCard />
          <LoadingIssueCard />
        </HomePostsWrapper>
      </HomeContainer>
    )
  }

  return (
    <HomeContainer>
      <UserTitleCard
        title={userInfo?.name}
        description={userInfo?.bio}
        img={userInfo?.avatar_url}
        user={{
          name: userInfo?.login,
          company: userInfo?.company,
          followers: userInfo?.followers,
          url: userInfo?.html_url,
        }}
      />
      <HomePostsWrapper>
        {issues?.map((issue) => (
          <IssuesCard key={issue.id} issue={issue} />
        ))}
      </HomePostsWrapper>
    </HomeContainer>
  )
}
