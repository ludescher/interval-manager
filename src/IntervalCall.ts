import IntervalManager from "./IntervalManager";

class IntervalCall {
    entryId: string;
    force: boolean;

    constructor(entryId: string, force: boolean = false) {
        this.entryId = entryId;
        this.force = force;
    }

    async Call<T, P>(parameters: P): Promise<T> {
        return IntervalManager.TryCall(this, parameters);
    }
}

export default IntervalCall;