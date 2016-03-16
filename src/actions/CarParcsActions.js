import CarParcsDispatcher from '../dispatchers/CarParcsDispatcher';
import axios from 'axios';
import CarParcsApi from '../constants/CarParcsApi';

export function getCarParcs() {
    CarParcsDispatcher.dispatch({type: 'FETCH_CAR_PARCS'});

    axios.get(CarParcsApi.CAR_PARC_API_URL)
        .then((response) => {
            const { features } = response.data;
            var parcs = [];

            features.forEach((parc) => {
                parc.properties.free_percent = Number(((parc.properties.free/parc.properties.total)*100).toFixed(0));
                parc.properties.full_percent = 100 - parc.properties.free_percent;
                parcs.push(parc.properties);
            });

            CarParcsDispatcher.dispatch({
                type: 'GOT_CAR_PARCS',
                parcs
            });
        });
}