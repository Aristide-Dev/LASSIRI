import React, { useState, useEffect, useMemo } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Search,
  ChevronDown,
  Navigation,
  Info,
  Crosshair,
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Correction Leaflet icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Ajoutez cette constante après les autres imports
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Ajoutez cette fonction de calcul de distance (en km) après les imports
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return (R * c).toFixed(1); // Arrondi à 1 décimale
}

// Composant pour recadrer la carte quand la position utilisateur change
function RecenterMap({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      // Zoom plus rapproché (12) sur la position utilisateur
      map.setView(coords, 12);
    }
  }, [coords, map]);
  return null;
}


function Agences() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgence, setSelectedAgence] = useState(null);

  // Position de l'utilisateur
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Vérifier si la géolocalisation est supportée
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // On stocke [latitude, longitude] dans le state
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.warn('Géolocalisation refusée ou indisponible:', error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.warn('La géolocalisation n’est pas supportée par ce navigateur.');
    }
  }, []);

  // Services possibles
  const servicesAll = [
    ['Paiement', 'Support technique', 'Formation', 'Livraison'],
    ['Paiement', 'Livraison'],
    ['Support technique', 'Formation'],
    ['Livraison', 'Support technique'],
  ];

  // Images d'agence (placeholders ou images random)
  const agenceImages = [
    '/api/placeholder/400/300?text=Agence+1',
    '/api/placeholder/400/300?text=Agence+2',
    '/api/placeholder/400/300?text=Agence+3',
    '/api/placeholder/400/300?text=Agence+4',
    '/api/placeholder/400/300?text=Agence+5',
  ];

  // Générer 100 agences (75 à Conakry, 25 ailleurs)
  const allAgences = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      let ville, region, coordinates;

      if (i < 75) {
        // 75 agences à Conakry
        ville = 'Conakry';
        region = 'Conakry';
        coordinates = [
          9.5 + Math.random() * 0.5,  // lat
          -13.7 + Math.random() * 0.3 // lng
        ];
      } else {
        // 25 agences dans d'autres régions
        const otherRegions = [
          'Haute-Guinée',
          'Moyenne-Guinée',
          'Guinée forestière',
          'Basse-Guinée',
        ];
        region = otherRegions[Math.floor(Math.random() * otherRegions.length)];
        const regionCoords = {
          'Haute-Guinée': [10.5 + Math.random(), -9 + Math.random()],
          'Moyenne-Guinée': [11 + Math.random(), -10 + Math.random()],
          'Guinée forestière': [8 + Math.random(), -10 + Math.random()],
          'Basse-Guinée': [9 + Math.random(), -14 + Math.random()],
        };
        coordinates = regionCoords[region];
        ville = `Ville de ${region}`;
      }

      return {
        id: i + 1,
        nom: `Lassiri Agence #${i + 1}`,
        adresse: `Adresse ${i + 1} à ${ville}`,
        ville,
        region,
        telephone: `+224 62x xx xx ${i + 1}`,
        email: `agence${i + 1}@lassiri.com`,
        horaires: {
          semaine: '08:00 - 17:00',
          weekend: '09:00 - 13:00',
        },
        services: servicesAll[Math.floor(Math.random() * servicesAll.length)],
        coordinates,
        image: agenceImages[Math.floor(Math.random() * agenceImages.length)],
        rating: (3 + Math.random() * 2).toFixed(1), // 3.0 -> 5.0
        description: `Agence dynamique de ${ville} prête à servir la population locale.`,
      };
    });
  }, []);

  // Filtrage par recherche / région
  const filteredAgences = useMemo(() => {
    return allAgences.filter((agence) => {
      const matchQuery =
        agence.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agence.ville.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agence.region.toLowerCase().includes(searchQuery.toLowerCase());
      const matchRegion =
        selectedRegion === 'all' || agence.region === selectedRegion;
      return matchQuery && matchRegion;
    });
  }, [searchQuery, selectedRegion, allAgences]);

  // Extraire la liste unique des regions
  const regions = useMemo(() => {
    const reg = new Set(allAgences.map((a) => a.region));
    return ['all', ...Array.from(reg)];
  }, [allAgences]);

  // Centre par défaut (Conakry)
  const defaultCenter = [9.5, -13.7];

  return (
    <AppLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Réseau Lassiri</h1>
          <p className="text-xl max-w-2xl mx-auto text-primary-100">
            Découvrez nos 100+ agences à travers la Guinée. Un service de proximité, une expertise à votre service.
          </p>
        </div>
      </div>

      <div
        id="agences"
        className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Colonne Gauche : liste + filtres */}
        <div>
          {/* Filtres */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher par nom, ville ou région..."
                className="w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border-2 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full md:w-auto"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'Toutes les régions' : region}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Liste d'agences */}
          <div className="space-y-6 h-[600px] overflow-auto pr-2">
            {filteredAgences.length === 0 ? (
              <div className="bg-primary-50 border-l-4 border-primary-500 p-4 text-primary-700">
                <p>Aucune agence ne correspond à votre recherche.</p>
              </div>
            ) : (
              filteredAgences.map((agence) => (
                <div
                  key={agence.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all group hover:shadow-lg"
                  onClick={() => setSelectedAgence(agence)}
                >
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 relative">
                      <img
                        className="h-48 w-full md:w-48 object-cover group-hover:scale-105 transition-transform"
                        src={agence.image}
                        alt={agence.nom}
                      />
                      <div className="absolute top-2 right-2 bg-white/80 px-2 py-1 rounded-full flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">
                          {agence.rating}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {agence.nom}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {agence.description}
                      </p>
                      <div className="space-y-2 text-gray-600">
                        {userLocation && (
                          <p className="flex items-center">
                            <Navigation className="w-5 h-5 mr-2 text-primary-500" />
                            {calculateDistance(
                              userLocation[0],
                              userLocation[1],
                              agence.coordinates[0],
                              agence.coordinates[1]
                            )} km
                          </p>
                        )}
                        <p className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                          {agence.adresse}, {agence.ville}
                        </p>
                        <p className="flex items-center">
                          <Phone className="w-5 h-5 mr-2 text-primary-500" />
                          {agence.telephone}
                        </p>
                        <p className="flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-primary-500" />
                          {agence.horaires.semaine} (Lun-Ven)
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {agence.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Colonne Droite : carte */}
        <div className="h-[600px] rounded-xl overflow-hidden shadow-md sticky top-8">
          {filteredAgences.length > 0 ? (
            <MapContainer
              center={userLocation || defaultCenter}
              zoom={8}
              className="h-full w-full"
            >
              {/* Recentrer la carte quand userLocation change */}
              <RecenterMap coords={userLocation} />

              {/* Tuiles (Stadia maps ou autre) */}
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; OpenStreetMap contributors'
                
              />

              {/* Marqueur de la position utilisateur */}
              {userLocation && (
                <Marker 
                  position={userLocation} 
                  icon={userIcon}
                  className="animate-fade-in-up animation-delay-200"
                >
                  <Popup>
                    <div className="flex items-center">
                      <Crosshair className="w-4 h-4 mr-2 text-primary-500" />
                      <span>Votre position</span>
                    </div>
                  </Popup>
                </Marker>
              )}

              {/* Marqueurs des agences filtrées */}
              {filteredAgences.map((agence) => (
                <Marker
                  key={agence.id}
                  position={agence.coordinates}
                  eventHandlers={{
                    click: () => setSelectedAgence(agence),
                  }}
                >
                  <Popup>
                    <div className="p-3">
                      <h3 className="font-bold text-lg text-primary-700 mb-1">
                        {agence.nom}
                      </h3>
                      {userLocation && (
                        <p className="text-sm text-gray-600 mb-1 flex items-center">
                          <Navigation className="w-4 h-4 mr-1 text-primary-500" />
                          {calculateDistance(
                            userLocation[0],
                            userLocation[1],
                            agence.coordinates[0],
                            agence.coordinates[1]
                          )} km
                        </p>
                      )}
                      <p className="text-gray-600 text-sm mb-1">
                        {agence.adresse}
                      </p>
                      <div className="flex items-center text-sm text-gray-700">
                        <Phone className="w-4 h-4 mr-2 text-primary-500" />
                        {agence.telephone}
                      </div>
                      <div className="mt-2 flex items-center">
                        <Navigation className="w-4 h-4 mr-2 text-primary-500" />
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${agence.coordinates[0]},${agence.coordinates[1]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          Itinéraire
                        </a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-100">
              <div className="text-center p-6">
                <Info className="w-16 h-16 mx-auto text-primary-500 mb-4" />
                <p className="text-xl text-gray-700">
                  Aucune agence à afficher sur la carte
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default Agences;
