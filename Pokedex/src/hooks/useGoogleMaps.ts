import { useEffect, useRef } from "react";
import { Coordinate } from "../resources/interfaces";
import { MOVEO_OFFICE } from "../resources/locations";
import MoveoLogo from "../assets/moveo_logo.png";
import { createContentElement } from "../resources/elements";

const calculateMidpoint = (
  point1: Coordinate,
  point2: Coordinate
): Coordinate => {
  const lat = (point1.lat + point2.lat) / 2;
  const lng = (point1.lng + point2.lng) / 2;
  return { lat, lng };
};

const useGoogleMap = (
  pokemonLocation: Coordinate,
  showDirections: boolean,
  pokemonPic: string
) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const moveoContentElement = createContentElement("Moveo Office", MoveoLogo);
  const pokemonContentElement = createContentElement("", pokemonPic, '50px', '50px');


  useEffect(() => {
    const initMap = async () => {
      if (!window.google) {
        console.log("Google Maps JavaScript API not loaded.");
        return;
      }

      const { Map } = await window.google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

      // Create bounds for the two locations
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(MOVEO_OFFICE);
      bounds.extend(pokemonLocation);

      const centerPoint = calculateMidpoint(MOVEO_OFFICE, pokemonLocation);

      // Initialize the map centered at the center point
      const map = new Map(mapRef.current!, {
        zoom: 11,
        center: centerPoint,
        mapId: "INIT_MAP",
      });

      map.fitBounds(bounds);

      if (showDirections) {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

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
          content: moveoContentElement,
        });

        new AdvancedMarkerElement({
          map: map,
          position: pokemonLocation,
          title: "Pokemon Location",
          content: pokemonContentElement,
        });
      }
    };

    initMap();
  }, [pokemonLocation, showDirections]);

  return { mapRef };
};

export default useGoogleMap;
