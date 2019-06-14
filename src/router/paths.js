/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/login',
    // Relative to /src/views
    view: 'Login'
  },
  {
    path: '/dashboard1',
    name: 'Dashboard1',
    view: 'Dashboard2'
  },
  {
    path: '/dashboard2',
    name: 'Dashboard2',
    view: 'Dashboard2'
  },
  {
    path: '/dashboard3',
    name: 'Dashboard3',
    view: 'Dashboard2'
  },
  {
    path: '/dashboard4',
    name: 'Dashboard4',
    view: 'Dashboard2'
  },
  {
    path: '/dashboard5',
    name: 'Dashboard2',
    view: 'Dashboard2'
  },

  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/historical',
    name: 'Historical',
    // path: '/table-list',
    // name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
