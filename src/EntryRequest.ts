import NativeRequestManager from "./NativeRequestManager";

class EntryRequest {
    entryId: string;
    force: boolean;

    constructor(entryId: string, force: boolean = false) {
        this.entryId = entryId;
        this.force = force;
    }

    async Send<T>(): Promise<T> {
        return NativeRequestManager.TrySend(this);
    }
}

export default EntryRequest;