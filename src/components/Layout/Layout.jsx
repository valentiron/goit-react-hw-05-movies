import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <NavLink className={css.navLink} to="/">Home</NavLink>
          <NavLink className={css.navLink} to="/movies">Movies</NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
