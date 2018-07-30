export interface MasterService {
  viewFields: Array<{
      tipo: string,
      tooltip?: string,
      nombrecampo: string,
      descripcioncolumna?: string,
      indicadormostrartabla: boolean,
      indicadornotificacioneliminar: boolean,
      select?: object[]
  }>;

  tableFields?: Array<{
      tipo: string,
      tooltip?: string,
      nombrecampo: string,
      descripcioncolumna: string,
      indicadormostrartabla: boolean,
      indicadornotificacioneliminar: boolean,
      defecto?: string | number | boolean,
      longitud?: number,
      obligatorio: boolean
  }>;

  details?: object;

  masterTitle: string;
}
