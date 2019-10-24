import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.108:8080',
    // headers: {'TOKEN': 'Header-Value'}
})

export default api;


const api222 = {
    getContasMes: () => {
        return [
            { cifrao: 'R$', value: 2500.50, expiration: '01-01-2019' },
            { cifrao: 'R$', value: 105.00, expiration: '06-01-2019' },
            { cifrao: 'R$', value: 50.00, expiration: '06-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 280000.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
            { cifrao: 'R$', value: 100.50, expiration: '10-01-2019' },
        ]
    },
}

