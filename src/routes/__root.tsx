import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NavLink } from "./-components/nav-link";

const RootLayout = () => (
    <>
        <div className="p-2 flex gap-2">
            <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
    </>
);

export const Route = createRootRoute({ component: RootLayout });
