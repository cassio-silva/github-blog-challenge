import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { IssueContentWrapper } from './styles'

interface IssueContentProps {
  body: string
}

export function IssueContent({ body }: IssueContentProps) {
  return (
    <IssueContentWrapper>
      <ReactMarkdown>{body}</ReactMarkdown>
    </IssueContentWrapper>
  )
}
