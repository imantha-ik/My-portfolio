import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@/index.css';

// Define school locations
const schoolLocations = [
  {
    name: 'Bangladesh School',
    coords: [23.6850, 90.3563],
    key: 'bangladesh',
    image: '/images/7.jpg',
  },
  {
    name: 'Nicaragua School',
    coords: [12.8654, -85.2072],
    key: 'nicaragua',
    image: '/images/3.jpg',
  },
  {
    name: 'India School',
    coords: [20.5937, 78.9629],
    key: 'india',
    image: '/images/9.png',
  },
];

// Custom glowing marker style
const glowIcon = new L.DivIcon({
  className: 'glow-pin',
  html: '<div class="pulse"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Component to animate flyTo
const FlyToLocation = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 5, { duration: 1.5 });
  }
  return null;
};

const InteractiveMap = () => {
  const [visibleMarkers, setVisibleMarkers] = useState({
    bangladesh: true,
    nicaragua: true,
    india: true,
  });

  const [flyCoords, setFlyCoords] = useState(null);

  const toggleMarker = (key) => {
    setVisibleMarkers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full rounded-xl overflow-hidden shadow-xl bg-muted dark:bg-muted p-6">
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">Our Partner Schools</h2> */}

      <div className="flex justify-center flex-wrap gap-4 mb-4">
        {schoolLocations.map((school) => (
          <label key={school.key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={visibleMarkers[school.key]}
              onChange={() => toggleMarker(school.key)}
              className="accent-teal-500"
            />
            <span>{school.name}</span>
          </label>
        ))}
      </div>

      <MapContainer
        center={[15, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={7}
        scrollWheelZoom={true}
        style={{ height: '550px', width: '100%', borderRadius: '1rem' }}
        zoomControl={true}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {flyCoords && <FlyToLocation coords={flyCoords} />}

        {schoolLocations.map(
          (school) =>
            visibleMarkers[school.key] && (
              <Marker
                key={school.key}
                position={school.coords}
                icon={glowIcon}
                eventHandlers={{
                  click: () => setFlyCoords(school.coords),
                }}
              >
                <Popup>
                  <div className="text-left max-w-xs">
                    <button
                      onClick={() => console.log(`${school.key} image clicked`)}
                      className="w-full"
                    >
                      <img
                        src={school.image}
                        alt={school.name}
                        className="w-full h-32 object-cover mb-2 rounded hover:brightness-90 transition"
                      />
                    </button>
                    <h3 className="font-bold text-lg text-primary mb-1">
                      {school.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Explore more about our impact in {school.name.split(' ')[0]}.
                    </p>
                  </div>
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
