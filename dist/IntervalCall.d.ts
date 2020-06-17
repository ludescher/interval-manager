declare class IntervalCall {
    entryId: string;
    force: boolean;
    constructor(entryId: string, force?: boolean);
    Call<T>(): Promise<T>;
}
export default IntervalCall;
