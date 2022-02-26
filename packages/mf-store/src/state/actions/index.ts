import {setState} from '../store'

export const setAuth=(auth:boolean):void=>{
    setState({auth})
}
export const setToken=(token:string):void=>{
    setState({token})
}



