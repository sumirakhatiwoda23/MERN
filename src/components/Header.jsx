import React from 'react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserDropDown from '@/features/home/user/UserDropDown';

export default function Header() {
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div className="px-5 py-2 flex justify-between">
      <h1>Shop Jee</h1>

      <nav className="flex gap-7">
        {user ? (
          <UserDropDown user={user} />
        ) : (
          <>
            <NavLink to="/login">
              <Button variant="outline">Login</Button>
            </NavLink>

            <NavLink to="/signup">
              <Button className="bg-blue-500">Sign Up</Button>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}