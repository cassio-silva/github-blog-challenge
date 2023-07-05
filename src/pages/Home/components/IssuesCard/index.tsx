import { IssuesProps } from '../../../../entities/Issues'
import { IssueBody, IssueContainer, IssueHeading } from './styles'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssuesCardProps {
  issue: IssuesProps
}

export function IssuesCard({ issue }: IssuesCardProps) {
  const dateParsed = formatDistanceToNow(new Date(issue?.created_at), {
    locale: ptBR,
    addSuffix: false,
  })
  const summary = issue?.body?.substring(0, 154) + '...' || '...'
  return (
    <IssueContainer to={`/post/${issue?.number}`}>
      <IssueHeading>
        <strong>{issue.title}</strong>
        <span>{dateParsed}</span>
      </IssueHeading>
      <IssueBody>
        <ReactMarkdown>{summary}</ReactMarkdown>
      </IssueBody>
    </IssueContainer>
  )
}
