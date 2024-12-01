import { Star, MapPin, Wifi, Bath, UtensilsCrossed, Dumbbell } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import type { Hotel } from '../../types';

const AMENITY_ICONS = {
  'Wifi': Wifi,
  'Pool': Bath,
  'Restaurant': UtensilsCrossed,
  'Gym': Dumbbell,
} as const;

interface HotelCardProps {
  hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Card className="group overflow-hidden p-0 transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={hotel.images[0]}
          alt={hotel.name}
          className="h-56 w-full object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <div className="flex items-center text-white">
            <MapPin className="h-4 w-4" />
            <span className="ml-1">{hotel.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{hotel.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 font-medium">{hotel.rating}</span>
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-600">{hotel.description}</p>

        <div className="mt-4 flex gap-2">
          {hotel.amenities.slice(0, 4).map((amenity) => {
            const Icon = AMENITY_ICONS[amenity as keyof typeof AMENITY_ICONS] || MapPin;
            return (
              <div
                key={amenity}
                className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                <Icon className="mr-1 h-4 w-4" />
                {amenity}
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <div className="text-xl font-bold text-blue-600">${hotel.priceRange.min}</div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Details</Button>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}