class IntervalEntry {
    id: string;
    interval: number;
    callback: Function;
    private lastcall?: Date;

    constructor(id: string, interval: number, callback: Function) {
        this.id = id;
        this.interval = interval;
        this.callback = callback;
    }

    SetLastCall(): void {
        this.lastcall = new Date();
    }

    CheckLastCall(): boolean {
        let _timestamp: (number | undefined) = this.lastcall?.getTime();
        if (!_timestamp) {
            return true;
        }
        _timestamp += this.interval;
        if (_timestamp < Date.now()) {
            return true;
        }
        return false;
    }
}

export default IntervalEntry;