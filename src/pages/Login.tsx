import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/auth';

export function Login() {
  const [isHotel, setIsHotel] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({
      id: '1',
      name: isHotel ? 'Sample Hotel' : 'John Doe',
      email: 'user@example.com',
      role: isHotel ? 'hotel' : 'guest',
    });
    navigate('/dashboard');
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <Card>
        <h1 className="text-2xl font-bold">Welcome to StayBid</h1>
        <p className="mt-2 text-gray-600">Sign in to your account</p>

        <div className="mt-4 flex gap-4">
          <Button
            type="button"
            variant={!isHotel ? 'primary' : 'outline'}
            className="flex-1"
            onClick={() => setIsHotel(false)}
          >
            Guest
          </Button>
          <Button
            type="button"
            variant={isHotel ? 'primary' : 'outline'}
            className="flex-1"
            onClick={() => setIsHotel(true)}
          >
            Hotel
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}