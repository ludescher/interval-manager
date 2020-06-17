import NativeRequestEntry from "./NativeRequestEntry";
import EntryRequest from "./EntryRequest";
import NativeRequest from "./NativeRequest";

class NativeRequestManager {
    static entries: Array<NativeRequestEntry> = [];

    static RegisterEntry(entry: NativeRequestEntry): void {
        NativeRequestManager.entries.push(entry);
    }

    static RemoveEntry(entry: NativeRequestEntry): void {
        for (let i = 0; i < NativeRequestManager.entries.length; i++) {
            if (NativeRequestManager.entries[i].id === entry.id) {
                NativeRequestManager.entries.splice(i, 1);
                break;
            }
        }
    }

    static async TrySend<T>(request: EntryRequest): Promise<T> {
        const _index = NativeRequestManager.GetRegisteredEntry(request.entryId);
        if (_index > -1) {
            const _entry = NativeRequestManager.entries[_index];
            if (request.force || _entry.CheckLastCall()) {
                _entry.SetLastCall();
                return new NativeRequest(_entry.url, _entry.method, NativeRequestManager.GetHeaders(), _entry.body).Send();
            }
            throw new Error('The entry is currently within the interval!');
        }
        throw new Error('EntryId is not registered!');
    }

    private static GetRegisteredEntry(entryId: string): number {
        for (let i = 0; i < NativeRequestManager.entries.length; i++) {
            if (NativeRequestManager.entries[i].id === entryId) {
                return i;
            }
        }
        return -1;
    }

    private static GetHeaders(): Object {
        return {
            'Content-Type': 'multipart/form-data',
            'accept': 'application/ld+json',
            // 'Authorization': 'Bearer ' + token
        };

    }
}

export default NativeRequestManager;