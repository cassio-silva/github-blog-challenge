import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IssuesProps } from '../../entities/Issues'
import { api } from '../../lib/axios/api'
import { IssueTitleCard } from './components/IssueTitleCard'
import {
  LoadingIssueContent,
  LoadingTitle,
} from '../../components/LoadingComponents/styles'
import { IssuePostContainer } from './styles'
import { IssueContent } from './components/IssueContent'

export function Issues() {
  const [issue, setIssue] = useState<IssuesProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { number } = useParams()
  const user = 'cassio-silva'
  const repo = 'kazdev-blog'

  async function getIssues() {
    setIsLoading(true)
    const response = await api.get<IssuesProps>(
      `repos/${user}/${repo}/issues/${number}`,
    )
    setIssue(response?.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getIssues()
  }, [])

  if (isLoading) {
    return (
      <IssuePostContainer>
        <LoadingTitle />
        <LoadingIssueContent />
      </IssuePostContainer>
    )
  }

  return (
    <IssuePostContainer>
      <IssueTitleCard
        title={issue?.title}
        comments={issue?.comments}
        owner={issue?.user.login}
        createdAt={issue?.created_at}
        htmlUrl={issue?.html_url}
      />
      <IssueContent body={issue?.body || ''} />
    </IssuePostContainer>
  )
}
