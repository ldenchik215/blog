import { createBrowserRouter, redirect } from 'react-router-dom'
import App from './app'
import { ROUTES } from '../shared/model/routes'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.ARTICLES,
        lazy: () => import('../features/articles/index'),
        HydrateFallback: () => null,
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.ARTICLES),
      },
    ],
  },
])
