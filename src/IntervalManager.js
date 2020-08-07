var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class IntervalManager {
    static RegisterEntry(entry) {
        IntervalManager.entries.push(entry);
    }
    static RemoveEntry(entry) {
        for (let i = 0; i < IntervalManager.entries.length; i++) {
            if (IntervalManager.entries[i].id === entry.id) {
                IntervalManager.entries.splice(i, 1);
                break;
            }
        }
    }
    static TryCall(interval) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    static GetRegisteredEntry(entryId) {
        for (let i = 0; i < IntervalManager.entries.length; i++) {
            if (IntervalManager.entries[i].id === entryId) {
                return i;
            }
        }
        return -1;
    }
}
IntervalManager.entries = [];
export default IntervalManager;
//# sourceMappingURL=IntervalManager.js.map