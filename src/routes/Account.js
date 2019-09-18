export default {
  path: '/account',
  component: () => import('@/views/Account'),
  meta: {
    displayName: 'Account',
    defaultName: 'Account:Profile'
  },
  children: [
    {
      path: '',
      name: 'Account:Profile',
      component: () => import('@/views/Account/Profile')
    },
    {
      path: 'settings',
      name: 'Account:Settings',
      component: () => import('@/views/Account/Settings')
    }
  ]
}
