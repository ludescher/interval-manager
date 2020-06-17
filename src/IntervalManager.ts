import IntervalEntry from "./IntervalEntry";
import IntervalCall from "./IntervalCall";

class IntervalManager {
    static entries: Array<IntervalEntry> = [];

    static RegisterEntry(entry: IntervalEntry): void {
        IntervalManager.entries.push(entry);
    }

    static RemoveEntry(entry: IntervalEntry): void {
        for (let i = 0; i < IntervalManager.entries.length; i++) {
            if (IntervalManager.entries[i].id === entry.id) {
                IntervalManager.entries.splice(i, 1);
                break;
            }
        }
    }

    static async TryCall<T>(interval: IntervalCall): Promise<T> {
        const _index = IntervalManager.GetRegisteredEntry(interval.entryId);
        if (_index > -1) {
            const _entry = IntervalManager.entries[_index];
            if (interval.force || _entry.CheckLastCall()) {
                _entry.SetLastCall();
                return _entry.callback();
            }
            throw new Error('The entry is currently within the interval!');
        }
        throw new Error('EntryId is not registered!');
    }

    private static GetRegisteredEntry(entryId: string): number {
        for (let i = 0; i < IntervalManager.entries.length; i++) {
            if (IntervalManager.entries[i].id === entryId) {
                return i;
            }
        }
        return -1;
    }
}

export default IntervalManager;