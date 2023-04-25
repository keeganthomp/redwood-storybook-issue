import type { ComponentMeta } from '@storybook/react'

import UserPage from './UserPage'

export const generated = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mockGraphQLQuery('FindUserById', (_variables, { ctx }) => {
    ctx.status(200)
    return {
      user: {
        id: 1,
        name: 'Redwood Blog',
        email: '2021-01-01T00:00:00.000Z',
        __typename: 'User',
      },
    }
  })
  return <UserPage id={1} />
}

export default {
  title: 'Components/UserFragment',
  component: UserPage,
} as ComponentMeta<typeof UserPage>
