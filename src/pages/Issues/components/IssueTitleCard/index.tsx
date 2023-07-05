import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IssueLinks,
  IssueTitleContainer,
  IssuesFooter,
  IssuesFooterItem,
} from './styles'
import {
  faArrowLeft,
  faCalendarDay,
  faComment,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueTitleCardProps {
  title: string | undefined
  comments: number | undefined
  createdAt: Date | undefined
  owner: string | undefined
  htmlUrl: string | undefined
}

export function IssueTitleCard({
  title,
  owner,
  comments,
  htmlUrl,
  createdAt,
}: IssueTitleCardProps) {
  const dateParsed =
    createdAt &&
    formatDistanceToNow(new Date(createdAt), {
      locale: ptBR,
      addSuffix: false,
    })

  return (
    <IssueTitleContainer>
      <IssueLinks>
        <NavLink to={'/'}>
          <FontAwesomeIcon icon={faArrowLeft} />
          voltar
        </NavLink>
        <NavLink to={htmlUrl || ''} target="_blank" rel="noreferer">
          ver no github
          <FontAwesomeIcon icon={faExternalLink} />
        </NavLink>
      </IssueLinks>
      <h1>{title}</h1>
      <IssuesFooter>
        <IssuesFooterItem>
          <FontAwesomeIcon icon={faGithub} />
          <span>{owner}</span>
        </IssuesFooterItem>
        <IssuesFooterItem>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{dateParsed || 'agora'}</span>
        </IssuesFooterItem>
        <IssuesFooterItem>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} comentários</span>
        </IssuesFooterItem>
      </IssuesFooter>
    </IssueTitleContainer>
  )
}
