import { Request, Response } from 'express';
import { tMateriaDocente } from '../interfaces/pre_res.interface';
import MateriasDocentes from '../models/tablasAcademica/materiasDocentes';

export const guardarFormulario = (req: Request, res: Response) => {
  const { listaMD, materiaf } = req.body;
  // console.log(listaMD, materiaf);

  listaMD.forEach(async function (valor: tMateriaDocente) {
    const md = await MateriasDocentes.findOne({
      where: {
        GestionAcademica: valor.GestionAcademica,
        CodigoModalidadcurso: valor.CodigoModalidadcurso,
        CodigoCarrera: valor.CodigoCarrera,
        SiglaMateria: valor.SiglaMateria,
        IdPersona: valor.IdDocente,
        CodigoTipoGrupoMateria: valor.CodigoTipoGrupoMateria,
        Grupo: valor.Grupo
      }
    });
    if (md) {
      await md.update({
        CodigoSEA: materiaf.CodigoSEA,
        NumeroParciales: materiaf.NumeroParciales,
        TipoLlenado: materiaf.TipoLlenado,
        CodigoUsuarioActualizacion: materiaf.Usuario,
        FechaActualizacion: materiaf.FechaHora
      });
    }
    // console.log(md);
  });

  res.status(200).json(
    {
      listaMD,
      materiaf
    }
  );
}
