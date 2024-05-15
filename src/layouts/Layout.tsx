import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
export default function Layout() {
  return (
    <>
      <Header />

      <div className="container mx-auto py-16">
        <Outlet />
      </div>
    </>
  );
}
