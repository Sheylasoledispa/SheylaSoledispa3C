import { persona } from "./persona"

export class empleado extends persona{

    private _despacho: number
    public get despacho(): number {
        return this._despacho
    }
    public set despacho(value: number) {
        this._despacho = value
    }
    private _incorporacion: number
    public get incorporacion(): number {
        return this._incorporacion
    }
    public set incorporacion(value: number) {
        this._incorporacion = value
    }

    constructor(despacho:number, incorporacion:number, nombre:string, cedula:number, apellido:string, estado_civil:string ){

        super(nombre, apellido,cedula,estado_civil)

    this._despacho = despacho
    this._incorporacion= incorporacion
    }

    public cambio_despacho(Cambio_despacho:number){
        this._despacho=Cambio_despacho
    }
    imprimirempleado(){
        super.imprimirpersona()
        console.log(`El año de incorporación: ${this._incorporacion}`)
        console.log(`Despacho correspondiente: ${this._despacho}`)  
    }
}
