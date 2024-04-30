export interface User {
    id?:              number;
    tipoUsuario?:     string;
    nombre?:          string;
    apellidoMaterno?: string;
    apellidoPaterno?: string;
    edad?:            number;
    genero?:          string;
    telefono?:        string;
    usuario?:         string;
    activo?:          boolean;
    correo?:          string;
    fechaRegistro?:   Date;
  }