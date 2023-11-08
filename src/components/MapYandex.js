import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import pic from '../images/447031.png';

function MapYandex () {
     const coordinates = [
        [55.7558, 37.6176],
        [55.7601, 37.6017],
        [55.7650, 37.6082],
     ];

    return(
        <YMaps>
        <Map defaultState={{ center: [55.7558, 37.6176], zoom: 13 }} width="100%" height="400px">
          {coordinates.map((coord, index) => (
            <Placemark
              key={index}
              geometry={coord}
              options={{
                iconLayout: 'default#image',
                iconImageHref: pic,
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -30],
              }}
            />
          ))}
        </Map>
      </YMaps>
    );
}

export default MapYandex;
