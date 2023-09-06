// import type { GetUsersQuery } from '@/graphql/generated'

// export type Board = GetUsersQuery['users'][0]['boards'][0]
// export type User = GetUsersQuery['users'][0]
export type Users = {
  id: string
  email: string
  username?: string
  accessToken?: string
  refreshToken?: string
  boards: Boards[]
}

export type Boards = {
  id: string
  name: string
  columns?: Columns[]
}

export type Columns = {
  id: string
  name: string
  tasks: Tasks[]
}

export type Tasks = {
  id: string
  name: string
  description: string
  subtasks: Subtasks[]
}

export type Subtasks = {
  id: string
  name: string
  isComplete: boolean
}
