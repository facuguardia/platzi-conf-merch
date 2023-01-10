// Este hook se encarga de obtener la latitud y longitud de una dirección, para poder utilizarla en el mapa de Google Maps (al no poder obtener la key de la API de Google Maps ya que es de pago, no se puede utilizar el mapa)

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Map() { // function Map({ data })

  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 19.4267261, // lat: data.lat,
    lng: -99.1718706 // lng: data.lng,
  };


  return (
    <LoadScript googleMapsApiKey="AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
