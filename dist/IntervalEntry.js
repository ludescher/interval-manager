class IntervalEntry {
    constructor(id, interval, callback) {
        this.id = id;
        this.interval = interval;
        this.callback = callback;
    }
    SetLastCall() {
        this.lastcall = new Date();
    }
    CheckLastCall() {
        var _a;
        let _timestamp = (_a = this.lastcall) === null || _a === void 0 ? void 0 : _a.getTime();
        if (!_timestamp) {
            return true;
        }
        _timestamp += this.interval;
        if (_timestamp > Date.now()) {
            return true;
        }
        return false;
    }
}
export default IntervalEntry;
