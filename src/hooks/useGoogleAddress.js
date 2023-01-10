// Este hook se encarga de obtener la latitud y longitud de una dirección, para poder utilizarla en el mapa de Google Maps (al no poder obtener la key de la API de Google Maps ya que es de pago, no se puede utilizar el mapa)

import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw`; // API de Google Maps para obtener la latitud y longitud de una dirección

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
