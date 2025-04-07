import { useEffect, useRef } from 'react';
import './style.css';

export const YandexMap = () => {
  const mapInstance = useRef(null); 

  useEffect(() => {
    const loadYmapsScript = () => {
      return new Promise((resolve, reject) => {
        if (window.ymaps) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=API_KEY&lang=ru_RU`;
        script.async = true;
        
        script.onload = () => {
          if (window.ymaps) {
            resolve();
          } else {
            reject(new Error('YMaps API не загрузился'));
          }
        };
        
        script.onerror = () => reject(new Error('Ошибка загрузки скрипта'));
        
        document.head.appendChild(script);
      });
    };

    const initMap = () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }

      const offices = [
        {
          coords: [52.366487, 30.381984],
          name: "Главный офис",
          address: "ул. Сыдько, 122",
          phone: "+375 (29) 555-55-55",
          workHours: "09:00 - 21:00",
          preset: 'islands#blueHomeIcon'
        },
        {
          coords: [53.907669, 27.549759],
          name: "Минский офис",
          address: "проспект Победителей, 7А",
          phone: "+375 (29) 444-44-44",
          workHours: "10:00 - 20:00",
          preset: 'islands#blueHomeIcon'
        },
        {
          coords: [53.675315, 23.825867],
          name: "Гродненский офис",
          address: "Заводская улица, 13",
          phone: "+375 (29) 333-33-33",
          workHours: "10:00 - 20:00",
          preset: 'islands#blueHomeIcon'
        },
        {
          coords: [52.086470, 23.678903],
          name: "Брестский офис",
          address: "проспект Машерова, 6А",
          phone: "+375 (29) 222-22-22",
          workHours: "10:00 - 20:00",
          preset: 'islands#blueHomeIcon'
        }
      ];

      mapInstance.current = new window.ymaps.Map('agency-offices-map', {
        center: [52.366487, 30.381984],
        zoom: 12,
        controls: ['zoomControl', 'geolocationControl']
      });

      offices.forEach(office => {
        const placemark = new window.ymaps.Placemark(
          office.coords,
          {
            balloonContentHeader: `<strong>${office.name}</strong>`,
            balloonContentBody: `
              <p>Адрес: ${office.address}</p>
              <p>Телефон: ${office.phone}</p>
              <p>Время работы: ${office.workHours}</p>
            `,
            hintContent: office.name
          },
          {
            preset: office.preset || 'islands#blueDotIcon',
            balloonCloseButton: true
          }
        );
        
        mapInstance.current.geoObjects.add(placemark);
      });

      if (offices.length > 1) {
        mapInstance.current.setBounds(
          mapInstance.current.geoObjects.getBounds(), 
          { checkZoomRange: true }
        );
      }
    };

    loadYmapsScript()
      .then(() => window.ymaps.ready(initMap))
      .catch(error => console.error('Ошибка:', error));

    return () => {
      // Очистка при размонтировании
      if (window.ymaps && mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <section className="offices-map-section">
      <h2>Наши офисы</h2>
      <div 
        id="agency-offices-map" 
        style={{ 
          width: '100%', 
          height: '500px',
          backgroundColor: '#f0f0f0'
        }}
      ></div>
    </section>
  );
};