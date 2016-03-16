import CarParcsDispatcher from '../dispatchers/CarParcsDispatcher';
import axios from 'axios';
import CarParcsApi from '../constants/CarParcsApi';
import moment from 'moment';

export function getCarParcs() {
    CarParcsDispatcher.dispatch({type: 'FETCH_CAR_PARCS'});

    axios.get(CarParcsApi.CAR_PARC_API_URL)
        .then((response) => {
            const { features } = response.data;
            var parcs = [];

            features.forEach((parc) => {
                parc.properties.free_percent = Number(((parc.properties.free/parc.properties.total)*100).toFixed(0));
                parc.properties.full_percent = 100 - parc.properties.free_percent;
                parc.properties.updated_at = moment(parc.properties.updated_at);

                const {geometry} = parc;
                if(geometry.type == 'Point') {
                    parc.properties.lat = Number(parc.geometry.coordinates[1]);
                    parc.properties.lng = Number(parc.geometry.coordinates[0]);
                } else {
                    parc.properties.lat = Number(parc.geometry.coordinates[0][0][1]);
                    parc.properties.lng = Number(parc.geometry.coordinates[0][0][0]);
                }

                console.log(parc.properties.lat, parc.properties.lng);

                parcs.push(parc.properties);
            });

            CarParcsDispatcher.dispatch({
                type: 'GOT_CAR_PARCS',
                parcs
            });
        });
}