import { persona } from "./persona"
export class alumno extends persona {

    private _curso_correspondiente: string
   public get curso_correspondiente(): string {
      return this._curso_correspondiente
   }
   public set curso_correspondiente(value: string) {
      this._curso_correspondiente = value
   }
 
      constructor(nombre:string, apellido:string, cedula:number, estado_civil:string,curso_correspondiente:string ){
        
         super(nombre, apellido, cedula, estado_civil) 
         
        this._curso_correspondiente = curso_correspondiente

     }
     public matricula(Matricula:string){
      this._curso_correspondiente=Matricula
     }

     imprimir(){ 
      super.imprimirpersona();
      console.log(`Curso en el que se matriculó${this.curso_correspondiente}`);
     }
}