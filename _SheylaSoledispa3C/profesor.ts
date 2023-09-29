import { empleado } from "./empleado"

export class profesor extends empleado {

    private _departamento: string
    public get departamento(): string {
        return this._departamento
    }
    public set departamento(value: string) {
        this._departamento = value
    }

    constructor(nombre:string, apellido:string, cedula:number, estado_civil:string,departamento:string, despacho:number,incorporacion:number){

        super(despacho, incorporacion, nombre,cedula, apellido, estado_civil)

        this._departamento = departamento

    }
    public cambio_profesor(Cambio_profesor:string){
        this._departamento=Cambio_profesor
    }
    imprimiprofesor(){
        super.imprimirpersona()
        console.log(`Se encuentra en el departamento: ${this.departamento}`)        
    }
}