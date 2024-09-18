import React from 'react';
import { Container, MapContainer } from './styles';
import useGoogleMap from '../../hooks/useGoogleMaps';
import { Coordinate } from '../../resources/interfaces';

interface MapProps {
  pokemonLocation: Coordinate;
}

const Map: React.FC<MapProps> = ({ pokemonLocation }) => {
  const { mapRef } = useGoogleMap(pokemonLocation);

  return (
    <Container>
      <MapContainer>
        <div ref={mapRef} style={{ height: '400px', width: '400px' }} />
      </MapContainer>
    </Container>
  );
};

export default Map;