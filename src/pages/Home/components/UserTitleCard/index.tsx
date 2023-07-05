import {
  TitleCardContainer,
  TitleCardContent,
  TitleCardFooter,
  TitleCardFooterItem,
  TitleCardHeading,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUserGroup,
  faBuilding,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

interface UserTitleCardProps {
  img?: string
  title: string | undefined
  description?: string
  user: {
    name: string | undefined
    company: string | undefined
    followers: number | undefined
    url: string | undefined
  }
}

export function UserTitleCard({
  title,
  user,
  description,
  img,
}: UserTitleCardProps) {
  return (
    <TitleCardContainer>
      <img src={img} alt="" />
      <TitleCardContent>
        <TitleCardHeading>
          <h1>{title}</h1>
          <a href={user?.url} target="_blank" rel="noreferrer">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </TitleCardHeading>
        <p>{description}</p>
        <TitleCardFooter>
          <TitleCardFooterItem>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.name}</span>
          </TitleCardFooterItem>
          {user?.company && (
            <TitleCardFooterItem>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user?.company}</span>
            </TitleCardFooterItem>
          )}
          <TitleCardFooterItem>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user?.followers} seguidores</span>
          </TitleCardFooterItem>
        </TitleCardFooter>
      </TitleCardContent>
    </TitleCardContainer>
  )
}
