import { lazy, Suspense } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ModeToggle } from '@/components/mode-toggle'

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools
      }))
    )

export const Route = createRootRoute({
  component: () => (
    <>
      <ModeToggle />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools position='bottom-right' />
      </Suspense>
    </>
  )
})
