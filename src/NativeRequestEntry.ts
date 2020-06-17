class NativeRequestEntry {
    id: string;
    interval: number;
    method: string;
    url: string;
    body: string;
    private lastcall: Date;

    constructor(id: string, interval: number, url: string, method: string, body: string) {
        this.id = id;
        this.interval = interval;
        this.url = url;
        this.method = method;
        this.body = body;
    }

    SetLastCall(): void {
        this.lastcall = new Date();
    }

    CheckLastCall(): boolean {
        let _timestamp: number = this.lastcall.getTime();
        _timestamp += this.interval;
        if (_timestamp > Date.now()) {
            return true;
        }
        return false;
    }
}

export default NativeRequestEntry;