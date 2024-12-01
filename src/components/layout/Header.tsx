import { Link } from 'react-router-dom';
import { Building2, Hotel, LogIn, LogOut, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/auth';

export function Header() {
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Hotel className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">StayBid</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/hotels" className="text-gray-600 hover:text-gray-900">
            Browse Hotels
          </Link>
          <Link to="/bids" className="text-gray-600 hover:text-gray-900">
            Bid Requests
          </Link>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="secondary" className="flex items-center space-x-2">
                  {user?.role === 'hotel' ? <Building2 className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Button variant="outline" onClick={logout} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}