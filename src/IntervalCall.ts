import IntervalManager from "./IntervalManager";

class IntervalCall {
    entryId: string;
    force: boolean;

    constructor(entryId: string, force: boolean = false) {
        this.entryId = entryId;
        this.force = force;
    }

    async Call<T>(): Promise<T> {
        return IntervalManager.TryCall(this);
    }
}

export default IntervalCall;