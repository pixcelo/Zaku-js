import ccxt from 'ccxt';
import config from 'config';
import fetch from 'node-fetch';

export class ApiService {
    exchangeClass
    exchange

    constructor() {
        const exchangeClass = ccxt['bybit'];
        this.exchange =  new exchangeClass({
            'apiKey': config.get('exchange.apiKey'),
            'secret': config.get('exchange.apiSecret'),
            'verbose': false
        });
        // Set only in the testnet
        this.exchange.set_sandbox_mode(true);
    }

    has() {
        console.log(this.exchange.has);
    }

    check() {
        console.log('api', config.get('exchange.apiKey'),)
        console.log('sec', config.get('exchange.apiSecret'),)
    }

    async fetchBalance() {
        const res = await this.exchange.fetchBalance();
        console.log(res);
    }

    async fetchTicker(symbol) {
        const ticker = await this.exchange.fetchTicker(symbol);
        return ticker.info;
    }

    async fetchOhlc(symbol) {
        const response = await fetch(`https://api.cryptowat.ch/markets/bybit/${symbol}/ohlc`);
        const json = await response.json();
        return json.result;
    }


}
