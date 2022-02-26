import { of } from "rxjs";


export const getStateObservable = ()=>of({auth:true,token:"hola from store"})

