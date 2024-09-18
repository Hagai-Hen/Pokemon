import { useEffect, useRef } from 'react';
import { Coordinate } from '../resources/interfaces';
import { MOVEO_OFFICE } from '../resources/locations';

const useGoogleMap = (pokemonLocation: Coordinate) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!window.google) {
        console.log('Google Maps JavaScript API not loaded.');
        return;
      }

      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

      // Initialize the map centered at Moveo Office
      const map = new Map(mapRef.current!, {
        zoom: 11,
        center: MOVEO_OFFICE,
        mapId: 'INIT_MAP',
      });

      // Add markers to the map
      new AdvancedMarkerElement({
        map: map,
        position: MOVEO_OFFICE,
        title: 'Moveo Office',
      });

      // Add markers to the map
      new AdvancedMarkerElement({
        map: map,
        position: pokemonLocation,
        title: 'Pokemon Location',
      });
    };

    initMap();
  }, [pokemonLocation]);

  return { mapRef };
};

export default useGoogleMap;