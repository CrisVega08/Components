import { Injectable } from '@angular/core';
import { MasterService } from '../interfaces/mastr-services.interface';
@Injectable()
export class TecnicosService {

  public viewFields: MasterService['viewFields'] = [
    {
      tipo: 'character varying',
      tooltip: 'Tipo de documento de identificación',
      nombrecampo: 'tipoidentificacion',
      descripcioncolumna: 'Tipo',
      indicadormostrartabla: true,
      indicadornotificacioneliminar: false,
    },
    {
        tipo: 'character varying',
        tooltip: 'Numero del documento de identificación',
        nombrecampo: 'numeroidentificacion',
        descripcioncolumna: 'Nº Identificación',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: false,
    },
    {
        tipo: 'character varying',
        tooltip: 'Nombre del técnico',
        nombrecampo: 'nombrecompleto',
        descripcioncolumna: 'Nombre',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: true,
    },
    {
        tipo: 'character varying',
        tooltip: 'Dirección del técnico',
        nombrecampo: 'direccion',
        descripcioncolumna: 'Dirección',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: false,
    },
    {
        tipo: 'character varying',
        tooltip: 'Telefono técnico',
        nombrecampo: 'telefono',
        descripcioncolumna: 'Telefono',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: false,
    },
    {
        tipo: 'character varying',
        tooltip: 'Correo del técnico',
        nombrecampo: 'email',
        descripcioncolumna: 'Correo',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: false,
    },
    {
        tipo: 'character varying',
        tooltip: 'Cuentas por pagar',
        nombrecampo: 'cuentaporpagar',
        descripcioncolumna: 'CxP',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: false,
    },
  ];

  public tableFields: MasterService['tableFields'] = [
    {
        tipo: 'bigint',
        tooltip: '',
        nombrecampo: 'id',
        descripcioncolumna: '',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: false,
        defecto: null,
        longitud: 10,
        obligatorio: false
    },
    {
        tipo: 'character varying',
        tooltip: 'Tipo de número de Identificación',
        nombrecampo: 'tipoidentificacion',
        descripcioncolumna: 'Tipo Identificación',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: false,
        defecto: '',
        longitud: 10,
        obligatorio: true
    },
    {
        tipo: 'character varying',
        tooltip: 'Número de número de Identificación',
        nombrecampo: 'numeroidentificacion',
        descripcioncolumna: 'Nº Identificación',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: false,
        defecto: '',
        longitud: 20,
        obligatorio: true
    },
    {
        tipo: 'character varying',
        tooltip: 'Nombre del técnico',
        nombrecampo: 'nombre',
        descripcioncolumna: 'Nombre',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: true,
        defecto: '',
        longitud: 150,
        obligatorio: true
    },
    {
        tipo: 'character varying',
        tooltip: 'Segundo Nombre del Proveedor',
        nombrecampo: 'segundonombre',
        descripcioncolumna: 'Segundo Nombre',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: true,
        defecto: '',
        longitud: 150,
        obligatorio: false
    },
    {
        tipo: 'character varying',
        tooltip: 'Primer Apellido del proveedor / Razón social',
        nombrecampo: 'primerapellido',
        descripcioncolumna: 'Primer Apellido',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: true,
        defecto: '',
        longitud: 150,
        obligatorio: true
    },
    {
        tipo: 'character varying',
        tooltip: 'Segundo Apellido del proveedor',
        nombrecampo: 'segundoapellido',
        descripcioncolumna: 'Segundo Apellido',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: true,
        defecto: '',
        longitud: 150,
        obligatorio: false
    },
    {
        tipo: 'character varying',
        tooltip: 'Dirección del técnico',
        nombrecampo: 'direccion',
        descripcioncolumna: 'Dirección',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: false,
        defecto: '',
        longitud: 100,
        obligatorio: false
    },
    {
        tipo: 'character varying',
        tooltip: 'Número teléfonico del técnico',
        nombrecampo: 'telefono',
        descripcioncolumna: 'Teléfono',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: false,
        defecto: '',
        longitud: 20,
        obligatorio: true
    },
    {
        tipo: 'character varying',
        tooltip: 'Correo electrónico del técnico',
        nombrecampo: 'email',
        descripcioncolumna: 'Correo electrónico',
        indicadormostrartabla: true,
        indicadornotificacioneliminar: false,
        defecto: '',
        longitud: 150,
        obligatorio: false
    },
    {
        tipo: 'boolean',
        tooltip: '',
        nombrecampo: 'indicadorpropio',
        descripcioncolumna: '',
        indicadormostrartabla: false,
        indicadornotificacioneliminar: false,
        defecto: true,
        longitud: 1,
        obligatorio: false
    }
  ];

// public details: MasterService['details']= {};
  public details: MasterService['details'] = {
  tipostareas: [
      {
          tipo: 'bigint',
          tooltip: null,
          nombrecampo: 'id',
          descripcioncolumna: '',
          indicadormostrartabla: false,
          indicadornotificacioneliminar: false,
          defecto: null,
          longitud: 10,
          obligatorio: false
      },
      {
          tipo: 'bigint',
          tooltip: 'Tipos de tareas asociados',
          nombrecampo: 'idtipotarea',
          descripcioncolumna: 'Tipos de tareas',
          indicadormostrartabla: false,
          indicadornotificacioneliminar: false,
          defecto: null,
          longitud: 10,
          obligatorio: false
      },
      {
          tipo: 'character varying',
          tooltip: 'Tipos de tareas',
          nombrecampo: 'descripcion',
          descripcioncolumna: 'Tipos de tareas',
          indicadormostrartabla: false,
          indicadornotificacioneliminar: false,
          defecto: '',
          longitud: 50,
          obligatorio: false
      }
  ]};

  public masterTitle: MasterService['masterTitle'] =  'Técnicos';

}
