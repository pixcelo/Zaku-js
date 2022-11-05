import { ApiService } from './apiService.js';

export class DataAdapter {
    _service

    constructor(service) {
        this._service = service;
    }

    call() {
        console.log(`This is adapter`);
        console.log(this._service);
    }

    // convert

}
