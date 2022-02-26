import { BehaviorSubject } from "rxjs"
export interface IState{
    auth: boolean,
    token: string,
}

export const store:BehaviorSubject<IState> = new BehaviorSubject({
    // Initial state
    auth: false,
    token:"no token"
})


export function setState(newState) {
    store.next({
        ...store.value,
        ...newState
    })
}

const getStateObservable = () => store.asObservable()

export default getStateObservable;