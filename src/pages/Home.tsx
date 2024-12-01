import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Star, Shield, Clock, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Find Your Perfect Stay Through Smart Bidding
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Connect with hotels, villas, apartments, and beach houses. Set your budget and let properties compete for your stay.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/create-bid">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Get Offers Now
                </Button>
              </Link>
              <Link to="/hotels">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-500">
                  Browse Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Quick Response Time</h3>
              <p className="mt-2 text-gray-600">Get multiple offers from properties within hours</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Secure Booking</h3>
              <p className="mt-2 text-gray-600">Safe and secure platform for all transactions</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Best Deals</h3>
              <p className="mt-2 text-gray-600">Properties compete to offer you the best value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold">All Types of Properties</h2>
          <p className="mt-4 text-center text-gray-600">
            From luxury hotels to cozy beach houses, find the perfect property for your stay
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Hotels',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
                count: '1000+',
              },
              {
                title: 'Villas',
                image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
                count: '500+',
              },
              {
                title: 'Apartments',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
                count: '750+',
              },
              {
                title: 'Beach Houses',
                image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2',
                count: '300+',
              },
            ].map((type) => (
              <div key={type.title} className="group relative overflow-hidden rounded-lg">
                <img
                  src={type.image}
                  alt={type.title}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{type.title}</h3>
                    <p className="mt-1">{type.count} listings</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              See Why Travelers Love StayBid
            </h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Business Traveler',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
                  quote: 'Saved 40% on my business trip to NYC. Hotels were competing for my stay, and I got an amazing deal!',
                },
                {
                  name: 'Michael Chen',
                  role: 'Family Vacation',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
                  quote: 'Found a beautiful beach villa within our budget. The bidding process made luxury stays accessible.',
                },
                {
                  name: 'Emma Davis',
                  role: 'Digital Nomad',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                  quote: 'StayBid is a game-changer! I travel monthly and consistently get great deals on premium properties.',
                },
              ].map((review) => (
                <div key={review.name} className="relative rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{review.quote}</p>
                  <div className="mt-3 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}