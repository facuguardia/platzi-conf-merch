// Este hook se encarga de obtener la latitud y longitud de una dirección, para poder utilizarla en el mapa de Google Maps (al no poder obtener la key de la API de Google Maps ya que es de pago, no se puede utilizar el mapa)

// Las lineas comentadas son la integración del mapa de Google Maps con la dirección del usuario que se obtiene de la API de pago de google.
import React from 'react';
// import AppContext from '../context/AppContext';
import Map from '../components/Map';
// import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success() {
  // const { state } = useContext(AppContext);
  // const { buyer } = state;
  // const location = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Facundo Guardia... gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 días a tu dirección:</span>
        <div className="Success-map">
        <Map /> {/* <Map data={location} /> */}
        </div>
      </div>
    </div>
  );
}

export default Success;
