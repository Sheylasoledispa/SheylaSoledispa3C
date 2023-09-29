import { empleado } from "./empleado"
export class personalservicio extends empleado {

    private _seccion_asignada: string
    public get seccion_asignada(): string {
        return this._seccion_asignada
    }
    public set seccion_asignada(value: string) {
        this._seccion_asignada = value
    }

    constructor(despacho:number, incorporacion:number, nombre:string, apellido:string, cedula:number,estado_civil:string,seccion_asignada:string ){
        
        super(despacho, incorporacion, nombre, cedula, apellido, estado_civil)

        this._seccion_asignada = seccion_asignada
    } 
    public traslado(Traslado:string){

        this._seccion_asignada=Traslado
    }

    imprimirpersonaldeservicio(){
        super.imprimirpersona()
            console.log(`Sección en la que está asignada: ${this._seccion_asignada}`)
        }

    }
        