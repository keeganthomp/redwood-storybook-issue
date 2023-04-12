import type { CellSuccessProps } from '@redwoodjs/web'

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    name
  }
`

export const QUERY = gql`
  query FindUserById($id: Int!) {
    user: user(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: any) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ user }: CellSuccessProps<any>) => {
  return <div>{JSON.stringify(user)}</div>
}
