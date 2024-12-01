import { useAuthStore } from '../store/auth';
import { Card } from '../components/ui/Card';

export function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome back, {user.name}!</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <h2 className="text-xl font-semibold">
            {user.role === 'hotel' ? 'Active Bid Requests' : 'Your Bids'}
          </h2>
          <p className="mt-2 text-gray-600">No active bids</p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">
            {user.role === 'hotel' ? 'Recent Bookings' : 'Upcoming Stays'}
          </h2>
          <p className="mt-2 text-gray-600">No bookings found</p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>• {user.role === 'hotel' ? 'Update Property Details' : 'Create New Bid'}</li>
            <li>• View Messages</li>
            <li>• Account Settings</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}