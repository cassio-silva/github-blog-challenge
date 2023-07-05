import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000,
  headers: {
    'X-github-Api-Version': '2022-11-28',
  },
})
