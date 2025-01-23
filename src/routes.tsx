import { lazy } from 'react'
import { Navigate, Route, useRoutes } from 'react-router-dom'

const Fr  = lazy(() => import('@/pages/fr'))
const En  = lazy(() => import('@/pages/en'))

const AppRoutes = () => useRoutes([
    {
        children: [
            {
                path: '/',
                element: <Fr />
            },
            {
                path: '/en',
                element: <En />
            }
        ]
    }
])

export default AppRoutes