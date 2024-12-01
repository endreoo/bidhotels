import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HotelCard } from '../components/hotels/HotelCard';

const SAMPLE_HOTELS = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    description: 'Luxury hotel in the heart of the city',
    location: 'New York City',
    rating: 4.8,
    amenities: ['Spa', 'Pool', 'Restaurant', 'Gym'],
    images: ['https://images.unsplash.com/photo-1566073771259-6a8506099945'],
    priceRange: { min: 299, max: 599 }
  },
  {
    id: '2',
    name: 'Oceanview Resort',
    description: 'Beachfront resort with stunning views',
    location: 'Miami Beach',
    rating: 4.9,
    amenities: ['Beach Access', 'Pool', 'Spa', 'Restaurant'],
    images: ['https://images.unsplash.com/photo-1582719508461-905c673771fd'],
    priceRange: { min: 399, max: 799 }
  },
  {
    id: '3',
    name: 'Mountain Lodge',
    description: 'Cozy mountain retreat',
    location: 'Aspen',
    rating: 4.7,
    amenities: ['Ski Access', 'Fireplace', 'Restaurant'],
    images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4'],
    priceRange: { min: 249, max: 499 }
  }
];

export function Hotels() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Hotels</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search hotels..."
              className="w-64 rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_HOTELS.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}