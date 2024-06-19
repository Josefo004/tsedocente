import { Request, Response } from 'express';
import { fMateriaDocente, tMateriaDocente } from '../interfaces/pre_res.interface';
import MateriasDocentes from '../models/tablasAcademica/materiasDocentes';

const actualizarMateriaDocente = async (mado: tMateriaDocente, fmad: fMateriaDocente) => {
  const result = await MateriasDocentes.findOne({
    where: {
      GestionAcademica: mado.GestionAcademica,
      CodigoModalidadcurso: mado.CodigoModalidadcurso,
      CodigoCarrera: mado.CodigoCarrera,
      SiglaMateria: mado.SiglaMateria,
      IdPersona: mado.IdDocente,
      CodigoTipoGrupoMateria: mado.CodigoTipoGrupoMateria,
      Grupo: mado.Grupo
    }
  }).then(registro => {
    if (!registro) {
      throw new Error('No encontrado');
    }
    console.log(`Registr Recuperado ${JSON.stringify(registro, null, 2)}`);
    const valores = {
      CodigoSEA: fmad.CodigoSea,
      NumeroParciales: fmad.NumeroParciales,
      TipoLlenado: fmad.TipoLlenado,
      NumeroPracticas: 1,
      NumeroLaboratorios: 1,
      CodigoUsuarioActualizacion: fmad.Usuario
    };
    registro.update(valores).then(actualizado => {
      console.log(`updated record ${JSON.stringify(actualizado, null, 2)}`)
    });
  });
  return result;
  // try {
  //   const result = await MateriasDocentes.update(
  //     {
  //       CodigoSEA: fmad.CodigoSea,
  //       NumeroParciales: fmad.NumeroParciales,
  //       TipoLlenado: fmad.TipoLlenado,
  //       NumeroPracticas: 1,
  //       NumeroLaboratorios: 1,
  //       CodigoUsuarioActualizacion: fmad.Usuario
  //     },
  //     {
  //       where: {
  //         GestionAcademica: mado.GestionAcademica,
  //         CodigoModalidadcurso: mado.CodigoModalidadcurso,
  //         CodigoCarrera: mado.CodigoCarrera,
  //         SiglaMateria: mado.SiglaMateria,
  //         IdPersona: mado.IdDocente,
  //         CodigoTipoGrupoMateria: mado.CodigoTipoGrupoMateria,
  //         Grupo: mado.Grupo
  //       }
  //     }
  //   );
  //   return result;
  // } catch (error) {
  //   return error;
  // }
}

export const guardarFormulario = (req: Request, res: Response) => {
  const { listaMD, materiaf } = req.body;
  // console.log(listaMD, materiaf);
  listaMD.forEach(async function (valor: tMateriaDocente) {
    const md = await actualizarMateriaDocente(valor, materiaf);
    console.log(md);
  });

  res.status(200).json(
    {
      listaMD,
      materiaf
    }
  );
}
