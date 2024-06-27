import { Request, Response } from 'express';
import { fMateriaDocente, tMateriaDocente } from '../interfaces/pre_res.interface';
import MateriasDocentes from '../models/tablasAcademica/materiasDocentes';
import { literal } from 'sequelize';

const actualizarMateriaDocente = async (mado: tMateriaDocente, fmad: fMateriaDocente) => {
  try {
    const registro = await MateriasDocentes.findOne({
      where: {
        GestionAcademica: mado.GestionAcademica,
        CodigoModalidadcurso: mado.CodigoModalidadcurso,
        CodigoCarrera: mado.CodigoCarrera,
        SiglaMateria: mado.SiglaMateria,
        IdPersona: mado.IdDocente,
        CodigoTipoGrupoMateria: mado.CodigoTipoGrupoMateria,
        Grupo: mado.Grupo
      }
    });

    if (!registro) {
      throw new Error('No encontrado');
    }

    // console.log(`Registro Recuperado ${JSON.stringify(registro, null, 2)}`);

    const fechaHora = new Date(fmad.FechaHora);
    fechaHora.setHours(fechaHora.getHours() - 4);

    const valores = {
      CodigoSEA: fmad.CodigoSea,
      NumeroParciales: fmad.NumeroParciales,
      TipoLlenado: fmad.TipoLlenado,
      NumeroPracticas: 1,
      NumeroLaboratorios: 1,
      CodigoUsuarioActualizacion: fmad.Usuario,
      FechaActualizacion: literal(`CAST('${fechaHora.toISOString()}' AS DATETIME)`)
    };

    // console.log(valores);

    const actualizado = await registro.update(valores);
    // console.log(`Registro Actualizado ${JSON.stringify(actualizado, null, 2)}`);

    return actualizado;
  } catch (error) {
    console.error(`Error al actualizar: ${error}`);
    throw error;
  }
};

// Ejecutar actualizaciones secuencialmente
const procesarListaMD = async (listaMD: tMateriaDocente[], materiaf: fMateriaDocente) => {
  const results = [];
  for (const valor of listaMD) {
    try {
      const result = await actualizarMateriaDocente(valor, materiaf);
      results.push(result);
    } catch (error) {
      console.error(`Error al actualizar el registro: ${valor}`, error);
    }
  }
  return results;
};

export const guardarFormulario = (req: Request, res: Response) => {
  const { listaMD, materiaf } = req.body;
  // Llamar a procesarListaMD con la lista de materias
  procesarListaMD(listaMD, materiaf).then(results => {
    console.log('Resultados:', results);
  });

  res.status(200).json(
    {
      listaMD,
      materiaf
    }
  );
}
