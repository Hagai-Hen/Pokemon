import { useEffect, useRef } from "react";
import { Coordinate } from "../resources/interfaces";
import { MOVEO_OFFICE } from "../resources/locations";

const useGoogleMap = (pokemonLocation: Coordinate, showDirections: boolean) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!window.google) {
        console.log("Google Maps JavaScript API not loaded.");
        return;
      }

      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary(
        "marker"
      );

      // Initialize the map centered at Moveo Office
      const map = new Map(mapRef.current!, {
        zoom: 11,
        center: MOVEO_OFFICE,
        mapId: "INIT_MAP",
      });

      if (showDirections) {
        // Directions Service and Renderer
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        // Request directions
        directionsService.route(
          {
            origin: pokemonLocation,
            destination: MOVEO_OFFICE,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
            } else {
              console.error("Directions request failed due to " + status);
            }
          }
        );
      } else {
        // Add markers to the map
        new AdvancedMarkerElement({
          map: map,
          position: MOVEO_OFFICE,
          title: "Moveo Office",
        });

        // Add markers to the map
        new AdvancedMarkerElement({
          map: map,
          position: pokemonLocation,
          title: "Pokemon Location",
        });
      }
    };

    initMap();
  }, [pokemonLocation, showDirections]);

  return { mapRef };
};

export default useGoogleMap;
