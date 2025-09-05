import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanstackDevtools } from "@tanstack/react-devtools"

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="group/body overscroll-none font-sans text-foreground antialiased">
        <Outlet />
      </div>
      <TanstackDevtools
        config={{ position: "bottom-left" }}
        plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
      />
    </>
  ),
})
