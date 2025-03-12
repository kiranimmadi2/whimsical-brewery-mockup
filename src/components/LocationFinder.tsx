
import { useState, useEffect } from 'react';
import { Map, MapPin, Search } from 'lucide-react';
import { CustomButton } from './ui/CustomButton';

const mockLocations = [
  {
    id: 1,
    name: "Downtown Starbucks",
    address: "123 Main Street, New York, NY 10001",
    distance: "0.5 miles",
    isOpen: true,
    openHours: "5:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Central Park Starbucks",
    address: "456 Park Avenue, New York, NY 10022",
    distance: "1.2 miles",
    isOpen: true,
    openHours: "6:00 AM - 9:00 PM"
  },
  {
    id: 3,
    name: "Brooklyn Heights Starbucks",
    address: "789 Brooklyn Road, Brooklyn, NY 11201",
    distance: "2.8 miles",
    isOpen: false,
    openHours: "5:30 AM - 8:00 PM"
  }
];

const LocationFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locations, setLocations] = useState(mockLocations);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter locations based on API data
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="py-20 bg-starbucks-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Find Your Nearest Store</h2>
            <p className="mt-4 text-muted-foreground">
              Enter your address, city, or zip code to find the closest Starbucks location.
            </p>
          </div>

          <form onSubmit={handleSearch} className="mt-8 max-w-2xl mx-auto">
            <div className="flex items-center overflow-hidden rounded-full bg-white shadow-md focus-within:ring-2 focus-within:ring-starbucks-green">
              <div className="pl-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your location"
                className="flex-1 border-0 bg-transparent py-3 px-4 focus:outline-none focus:ring-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="pr-2">
                <CustomButton type="submit" className="rounded-full bg-starbucks-green text-white px-5">
                  Search
                </CustomButton>
              </div>
            </div>
          </form>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover-scale">
              <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
                <Map className="h-16 w-16 text-starbucks-green opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-500">Interactive map would appear here</p>
                  <p className="text-xs text-gray-400 mt-1">Uses Mapbox or Google Maps API</p>
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="flex flex-col gap-4">
              {locations.map((location) => (
                <div 
                  key={location.id}
                  className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-lg hover-scale"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-starbucks-green/10 rounded-full p-2">
                      <MapPin className="h-5 w-5 text-starbucks-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{location.name}</h3>
                        <span className="text-sm text-gray-500">{location.distance}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{location.address}</p>
                      <div className="flex items-center mt-2">
                        <span className={`inline-block h-2 w-2 rounded-full mr-2 ${
                          location.isOpen ? 'bg-green-500' : 'bg-red-500'
                        }`}></span>
                        <span className="text-xs text-gray-500">
                          {location.isOpen ? 'Open' : 'Closed'} · {location.openHours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <CustomButton 
                variant="outline" 
                className="mt-2 border-starbucks-green text-starbucks-green"
              >
                View All Locations
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFinder;
