declare class IntervalEntry {
    id: string;
    interval: number;
    callback: Function;
    private lastcall?;
    constructor(id: string, interval: number, callback: Function);
    SetLastCall(): void;
    CheckLastCall(): boolean;
}
export default IntervalEntry;
//# sourceMappingURL=IntervalEntry.d.ts.map