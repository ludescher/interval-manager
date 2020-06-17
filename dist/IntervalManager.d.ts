import IntervalEntry from "./IntervalEntry";
import IntervalCall from "./IntervalCall";
declare class IntervalManager {
    static entries: Array<IntervalEntry>;
    static RegisterEntry(entry: IntervalEntry): void;
    static RemoveEntry(entry: IntervalEntry): void;
    static TryCall<T>(interval: IntervalCall): Promise<T>;
    private static GetRegisteredEntry;
}
export default IntervalManager;
