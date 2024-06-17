import { Request, Response } from 'express';
import { consultaAdmision, consultaDDJJ, consultaEcommerce } from '../helpers/c_personas';
// import { latLonAUtm } from "../helpers/p_cadena";

export const getPersonas = async (req:Request, res:Response) => {
  const { idPersona } = req.params;
  const admision = await consultaAdmision(idPersona);
  const ddjj = await consultaDDJJ(idPersona);
  const comercio = await consultaEcommerce(idPersona);

  let IdPersona: string = '';
  let Email: string = '';
  let Celular: string = '';
  let NombreCompleto: string = '';
  let CodigoUsuario: string = '';

  if (Number(comercio.totalFilas) > 0) {
    IdPersona = comercio.personas[0].IdPersona;
    Email = comercio.personas[0].Email;
    Celular = comercio.personas[0].Celular;
    NombreCompleto = comercio.personas[0].NombreCompleto;
    CodigoUsuario = comercio.personas[0].CodigoUsuario;
  } else {
    if (Number(ddjj.totalFilas) > 0) {
      IdPersona = ddjj.personas[0].id_persona;
      Email = ddjj.personas[0].email;
      Celular = ddjj.personas[0].celular.toString();
      NombreCompleto = ddjj.personas[0].nombres + ' ' + ddjj.personas[0].apellido_paterno + ' ' + ddjj.personas[0].apellido_materno;
    } else {
      if (Number(admision.totalFilas) > 0) {
        IdPersona = admision.personas[0].IdPersona;
        Email = admision.personas[0].Email;
        Celular = admision.personas[0].Celular;
        NombreCompleto = admision.personas[0].Nombres + ' ' + admision.personas[0].Paterno + ' ' + admision.personas[0].Materno;
      }
    }
  }

  IdPersona = IdPersona.toUpperCase().trim();
  Email = Email.trim();
  Celular = Celular.trim();
  NombreCompleto = NombreCompleto.toUpperCase().trim();
  CodigoUsuario = CodigoUsuario.trim();

  res.status(200).json({
    IdPersona,
    Email,
    Celular,
    NombreCompleto,
    CodigoUsuario
  });
}
