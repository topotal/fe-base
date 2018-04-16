import React from 'react';
import TopPage from '../pages/top/TopPage.js';
import UsersPage from '../pages/users/UsersPage';

const routerConfig = {
  path: '/',
  children: [
    {
      path: '/',
      action: () => <TopPage />,
    },
    {
      path: '/users',
      children: [
        {
          path: '',
          action: () => <UsersPage />,
        },
        {
          path: '/:id',
          action: () => <UsersPage />,
        },
      ],
    },
  ],
};

export default routerConfig;
