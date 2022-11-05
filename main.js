import { ApiService } from './apiService.js';
import { DataAdapter } from './dataAdapter.js';
const apiService = new ApiService();

//apiService.has();
//console.log(apiService.fetchOhlc());

// https://docs.cryptowat.ch/rest-api/markets/ohlc
// async function testFetfh() {
//     const json = await apiService.fetchOhlc('BTCUSDT');
//     console.log(json);
// }

// testFetfh();

const dataAdapter = new DataAdapter(ApiService);
dataAdapter.call();
