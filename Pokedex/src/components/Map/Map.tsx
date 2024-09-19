import React from 'react';
import { Container, MapContainer } from './styles';
import useGoogleMap from '../../hooks/useGoogleMaps';
import { Coordinate } from '../../resources/interfaces';

interface MapProps {
  pokemonLocation: Coordinate;
  showDirections: boolean;
  pokemonPic: string;
  chosenWay: string;
}

const Map: React.FC<MapProps> = ({ pokemonLocation, showDirections, pokemonPic, chosenWay }) => {
  const { mapRef } = useGoogleMap(pokemonLocation, showDirections, pokemonPic, chosenWay);

  return (
    <Container>
      <MapContainer>
        <div ref={mapRef} className='map' />
      </MapContainer>
    </Container>
  );
};

export default Map;