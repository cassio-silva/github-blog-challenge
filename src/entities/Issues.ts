import { User } from './User'

interface IssuesProps {
  id: number
  title: string
  body: string
  comments: number
  html_url: string
  repository_url: string
  state: string
  created_at: Date
  updated_at: Date
  number: number
  user: User
}

export type { IssuesProps }
