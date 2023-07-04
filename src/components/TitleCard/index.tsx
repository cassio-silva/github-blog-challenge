import { TitleCardContainer, TitleCardContent, TitleCardFooter } from './styles'

interface TitleCardProps {
  img?: string
  title: string
  description: string
  user: {
    name: string
    company: string
    followers: number
  }
  variant: 'user' | 'post'
}

export function TitleCard({
  img,
  title,
  description,
  user,
  variant,
}: TitleCardProps) {
  if (variant !== 'user') {
    return (
      <TitleCardContainer>
        <TitleCardContent>
          <h1>{title}</h1>
          <p>{description}</p>
        </TitleCardContent>
      </TitleCardContainer>
    )
  }

  return (
    <TitleCardContainer>
      <img src={img} alt="" />
      <TitleCardContent>
        <h1>{title}</h1>
        <p>{description}</p>
        <TitleCardFooter>
          {user?.name} {user?.company || 'company'} {user?.followers}
        </TitleCardFooter>
      </TitleCardContent>
    </TitleCardContainer>
  )
}
