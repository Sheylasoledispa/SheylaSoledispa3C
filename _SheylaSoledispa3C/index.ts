import { personalservicio } from "./personalServicio";

import { alumno } from "./alumno";

import { profesor } from "./profesor";

const personalServicio1 = new personalservicio(2,2000,"Maria","Cevallos",1312345679,"Casado","Decanato")

const alumno1 = new alumno("Marcos","Alava",135993999,"Soltero","Tercero C")

const profesor1 = new profesor("José", "García",1300393489,"Casado","Fisica", 10,2002)

personalServicio1.traslado("Limpieza")

personalServicio1.imprimirpersonaldeservicio()

alumno1.matricula("Cuarto C")

alumno1.imprimiralumno()

profesor1.cambio_profesor("Cálculo")

profesor1.imprimiprofesor()



