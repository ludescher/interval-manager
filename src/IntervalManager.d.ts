import IntervalEntry from "./IntervalEntry";
import IntervalCall from "./IntervalCall";
declare class IntervalManager {
    static entries: Array<IntervalEntry>;
    static RegisterEntry(entry: IntervalEntry): void;
    static RemoveEntry(entry: IntervalEntry): void;
    static TryCall<T, P>(interval: IntervalCall, parameters: P): Promise<T>;
    private static GetRegisteredEntry;
}
export default IntervalManager;
//# sourceMappingURL=IntervalManager.d.ts.map