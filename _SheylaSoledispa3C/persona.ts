export class persona{
    private _nombre: string
    public get nombre(): string {
        return this._nombre
    }
    public set nombre(value: string) {
        this._nombre = value
    }
    private _apellido: string
    public get apellido(): string {
        return this._apellido
    }
    public set apellido(value: string) {
        this._apellido = value
    }
    private _cedula: number
    public get cedula(): number {
        return this._cedula
    }
    public set cedula(value: number) {
        this._cedula = value
    }
    private _estado_civil: string 
    public get estado_civil(): string {
        return this._estado_civil
    }
    public set estado_civil(value: string) {
        this._estado_civil = value
    }
    constructor(nombre : string, apellido : string, cedula : number, estado_civil : string ){
        this._apellido = apellido
        this._cedula= cedula 
        this._estado_civil= estado_civil
        this._nombre = nombre
        }

        public cambio_de_estado_civil (cambio_estado_civil:string){
          this.estado_civil = cambio_estado_civil
        }
        imprimirpersona (){
           console.log(`Nombre: ${this.nombre}`)
           console.log(`Apellidos: ${this.apellido}`)
           console.log(`cedula: ${this.cedula}`)
           console.log(`Estado Civil: ${this.estado_civil}`)
        }
}