declare class IntervalCall {
    entryId: string;
    force: boolean;
    constructor(entryId: string, force?: boolean);
    Call<T, P>(parameters: P): Promise<T>;
}
export default IntervalCall;
//# sourceMappingURL=IntervalCall.d.ts.map