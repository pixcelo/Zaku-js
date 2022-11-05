import fs from 'fs';

export class JsonService {
    _arry

    constructor(arry) {
        // data deduplication
        this._arry = Array.from(new Set(arry));
    }

    call() {
        console.log(this._arry);
    }

}
