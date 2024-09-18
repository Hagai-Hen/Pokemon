import React from 'react';
import { Container, MapContainer } from './styles';
import useGoogleMap from '../../hooks/useGoogleMaps';
import { Coordinate } from '../../resources/interfaces';

interface MapProps {
  pokemonLocation: Coordinate;
  showDirections: boolean;
  pokemonPic: string;
}

const Map: React.FC<MapProps> = ({ pokemonLocation, showDirections, pokemonPic }) => {
  const { mapRef } = useGoogleMap(pokemonLocation, showDirections, pokemonPic);

  return (
    <Container>
      <MapContainer>
        <div ref={mapRef} style={{ height: '400px', width: '400px' }}/>
      </MapContainer>
    </Container>
  );
};

export default Map;