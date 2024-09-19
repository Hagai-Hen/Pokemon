import { useEffect, useRef } from "react";
import { Coordinate } from "../resources/interfaces";
import { MOVEO_OFFICE } from "../resources/locations";
import MoveoLogo from "../assets/moveo_logo.png";
import { createContentElement } from "../resources/elements";
import { MAP_ID } from "../resources/resources";

const calculateMidpoint = (
  point1: Coordinate,
  point2: Coordinate
): Coordinate => {
  const lat = (point1.lat + point2.lat) / 2;
  const lng = (point1.lng + point2.lng) / 2;
  return { lat, lng };
};

const placeCustomMarkers = (
  response: google.maps.DirectionsResult | null,
  map: google.maps.Map,
  moveoContent: HTMLDivElement,
  pokemonContent: HTMLDivElement
) => {
  const legs = response?.routes[0].legs;

  if (legs) {
    const startLocation = legs[0].start_location;
    const startInfoWindow = new window.google.maps.InfoWindow({
      content: pokemonContent,
    });
    startInfoWindow.setPosition(startLocation);
    startInfoWindow.open(map);

    // Create an InfoWindow for the ending point
    const endLocation = legs[0].end_location;
    const endInfoWindow = new window.google.maps.InfoWindow({
      content: moveoContent,
    });
    endInfoWindow.setPosition(endLocation);
    endInfoWindow.open(map);
  }
};

const useGoogleMap = (
  pokemonLocation: Coordinate,
  showDirections: boolean,
  pokemonPic: string,
  chosenWay: string,
) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const moveoContentElement = createContentElement("Moveo Office", MoveoLogo);
  const pokemonContentElement = createContentElement(
    "Pokemon Location",
    pokemonPic,
    "50px",
    "50px"
  );

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

      // Create bounds for the two locations
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(MOVEO_OFFICE);
      bounds.extend(pokemonLocation);

      const centerPoint = calculateMidpoint(MOVEO_OFFICE, pokemonLocation);

      // Initialize the map centered at the center point
      const map = new Map(mapRef.current!, {
        zoom: 11,
        center: centerPoint,
        mapId: MAP_ID,
      });

      map.fitBounds(bounds);

      if (showDirections) {
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);

        const validModes = {
          DRIVING: window.google.maps.TravelMode.DRIVING,
          WALKING: window.google.maps.TravelMode.WALKING,
          BICYCLING: window.google.maps.TravelMode.BICYCLING,
          TRANSIT: window.google.maps.TravelMode.TRANSIT,
        };

        type TravelModeKey = keyof typeof validModes;
        directionsService.route(
          {
            origin: pokemonLocation,
            destination: MOVEO_OFFICE,
            travelMode: window.google.maps.TravelMode[chosenWay as TravelModeKey],
          },

          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
              // placeCustomMarkers(
              //   result,
              //   map,
              //   moveoContentElement,
              //   pokemonContentElement
              // );
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
  }, [pokemonLocation, showDirections, chosenWay]);

  return { mapRef };
};

export default useGoogleMap;
