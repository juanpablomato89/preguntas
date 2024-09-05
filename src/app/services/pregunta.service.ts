import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta = 0;
  opcionSeleccionada: Respuesta = new Respuesta('', 0);
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta: number = -1;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('Cual es la capital de Argentina', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('Cual es la capital de Francia', [
      new Respuesta('Roma', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('Cual es la capital de Egipto', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Casablanca', 0),
    ]),
  ];
  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}
