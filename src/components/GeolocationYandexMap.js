import React, { useState, useEffect } from 'react';
import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

function GeolocationYandexMap() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        setPosition({ latitude, longitude });
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div>
      {position ? (
        <YMaps>
          <div style={{ width: '100%', height: '400px' }}>
            <Map
              defaultState={{ center: [position.latitude, position.longitude], zoom: 10 }}
              width={'100%'}
              height={'100%'}
            >
              <Placemark geometry={[position.latitude, position.longitude]} />
            </Map>
          </div>
        </YMaps>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default GeolocationYandexMap;