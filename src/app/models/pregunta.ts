import { Respuesta } from "./respuesta";

export interface Pregunta {
    descripcionPregunta: string;
    respuestas: Respuesta[];
}