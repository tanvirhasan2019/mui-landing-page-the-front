import React from 'react';

import {DesktopApp as DesktopAppView,} from 'views';
import { Ecommerce as EcommerceAppView } from 'views'

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <DesktopAppView {...params} />,
  },
  {
    path: '/ecommerce',
    renderer: (params = {}) => <EcommerceAppView {...params} />,
  }
];

export default routes;

// update code here
// routing 
// app pages