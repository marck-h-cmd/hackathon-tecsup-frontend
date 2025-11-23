export interface User {
  id: number | string;
  email?: string;
  name?: string;
  role?: 'admin' | 'student' | 'teacher' | string;
  createdAt?: string;
  updatedAt?: string;
}

// export interface Curso {
//   id: number | string;
//   titulo: string;
//   descripcion?: string;
//   es_publico?: boolean;
// }

export interface PerfilEstudiante {
  id: number | string;
  userId: number | string;
  bio?: string;
  avatarUrl?: string;
}

// export interface Tema {
//   id: number | string;
//   titulo: string;
//   cursoId?: number | string;
// }

// export interface Seccion {
//   id: number | string;
//   titulo: string;
//   temaId?: number | string;
// }

// export interface Ejercicio {
//   id: number | string;
//   titulo: string;
//   contenido?: string;
//   seccionId?: number | string;
// }

export interface Reward {
  id: number | string;
  nombre: string;
  puntos: number;
}

export interface Streak {
  id: number | string;
  userId: number | string;
  days: number;
}

export interface SesionTutoria {
  id: string;
  tutorId?: string;
  estudianteId?: string;
  fecha?: string;
  notas?: string;
}

// ============================================
// types/api.ts
// ============================================

// Tipos base de respuesta
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// ============================================
// ENUMS
// ============================================

export enum TipoUsuario {
  ESTUDIANTE = 'estudiante',
  ADMIN = 'admin'
}

export enum TipoContenido {
  TEORIA = 'teoria',
  EJEMPLO = 'ejemplo',
  VIDEO = 'video',
  INTERACTIVO = 'interactivo'
}

export enum TipoEjercicio {
  MULTIPLE_CHOICE = 'multiple_choice',
  CODIGO = 'codigo',
  TEXTO = 'texto'
}

// ============================================
// MODELOS PRINCIPALES
// ============================================

export interface Curso {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  imagen_url?: string;
  color_hex: string;
  duracion_estimada_horas: number;
  es_publico: boolean;
  activo: boolean;
  fecha_creacion: Date;

  // Relaciones
  secciones?: Seccion[];
}

export interface Seccion {
  id: number;
  curso_id: number;
  titulo: string;
  descripcion?: string;
  orden: number;
  duracion_estimada_minutos: number;
  activa: boolean;
  // Relaciones
  curso?: Curso;
  temas?: Tema[];
}

export interface Tema {
  id: number;
  seccion_id: number;
  titulo: string;
  contenido: string;
  orden: number;
  tipo_contenido: TipoContenido;
  duracion_estimada_minutos: number;
  puntos_requeridos: number;
  activo: boolean;
  // Relaciones
  seccion?: Seccion;
  ejercicios?: Ejercicio[];
}

export interface Ejercicio {
  id: number;
  tema_id: number;
  titulo: string;
  enunciado: string;
  tipo: TipoEjercicio;
  opciones?: string[];
  respuesta_correcta: string;
  explicacion: string;
  puntos: number;
  orden: number;
  activo: boolean;
  // Relaciones
  tema?: Tema;
}

// ============================================
// MODELOS DE PROGRESO
// ============================================

export interface TemaCompletado {
  id: number;
  usuario_id: number;
  tema_id: number;
  fecha_completado: Date;
  tiempo_dedicado_minutos?: number;
  puntos_obtenidos: number;
  // Relaciones
  tema?: Tema;
}

export interface SeccionCompletada {
  id: number;
  usuario_id: number;
  seccion_id: number;
  fecha_completado: Date;
  tiempo_total_minutos?: number;
  puntos_totales: number;
  porcentaje_completado: number;
  // Relaciones
  seccion?: Seccion;
}

export interface CursoCompletado {
  id: number;
  usuario_id: number;
  curso_id: number;
  fecha_inicio: Date;
  fecha_completado?: Date;
  tiempo_total_horas?: number;
  puntos_totales: number;
  porcentaje_completado: number;
  certificado_emitido: boolean;
  // Relaciones
  curso?: Curso;
}

// ============================================
// ESTADÍSTICAS
// ============================================

export interface EstadisticasCurso {
  curso_id: number;
  nombre: string;
  codigo: string;
  total_secciones: number;
  total_temas: number;
  duracion_estimada_horas: number;
  es_publico: boolean;
  activo: boolean;
}

export interface EstadisticasSeccion {
  seccion_id: number;
  titulo: string;
  curso_id: number;
  total_temas: number;
  duracion_total_minutos: number;
  puntos_requeridos_totales: number;
  orden: number;
  activa: boolean;
}

export interface EstadisticasTema {
  tema_id: number;
  titulo: string;
  seccion_id: number;
  tipo_contenido: TipoContenido;
  duracion_estimada_minutos: number;
  puntos_requeridos: number;
  orden: number;
  activo: boolean;
}

export interface EstadisticasEjercicio {
  ejercicio_id: number;
  titulo: string;
  tema_id: number;
  tipo: TipoEjercicio;
  puntos: number;
  orden: number;
  activo: boolean;
}

export interface EstadisticasPorTipo {
  tipo: string;
  total: number;
  puntos_promedio?: number;
  puntos_totales?: number;
  duracion_promedio?: number;
}

export interface EstadisticasProgreso {
  temas_completados: number;
  secciones_completadas: number;
  cursos_inscritos: number;
  cursos_completados: number;
  puntos_totales: number;
  tiempo_total_horas: number;
  tasa_completacion: number;
}

export interface ProgresoSeccion {
  seccion_id: number;
  temas_totales: number;
  temas_completados: number;
  porcentaje_completado: number;
}

export interface ProgresoCurso {
  curso_id: number;
  secciones_totales: number;
  secciones_completadas: number;
  porcentaje_completado: number;
}

export interface ProgresoPorCursoDetallado {
  curso: {
    id: number;
    nombre: string;
    codigo: string;
  };
  progreso_general: ProgresoCurso;
  secciones: Array<Seccion & { progreso: ProgresoSeccion }>;
}

// ============================================
// RESPUESTAS DE EJERCICIOS
// ============================================

export interface RespuestaEjercicio {
  correcto: boolean;
  puntos_obtenidos: number;
  explicacion: string;
  respuesta_correcta?: string;
}

// ============================================
// PAYLOADS DE CREACIÓN
// ============================================

export type CreateCursoPayload = Omit<Curso, 'id' | 'fecha_creacion' | 'secciones'>;
export type CreateSeccionPayload = Omit<Seccion, 'id' | 'curso' | 'temas'>;
export type CreateTemaPayload = Omit<Tema, 'id' | 'seccion' | 'ejercicios'>;
export type CreateEjercicioPayload = Omit<Ejercicio, 'id' | 'tema'>;

// ============================================
// PAYLOADS DE ACTUALIZACIÓN
// ============================================

export type UpdateCursoPayload = Partial<CreateCursoPayload>;
export type UpdateSeccionPayload = Partial<CreateSeccionPayload>;
export type UpdateTemaPayload = Partial<CreateTemaPayload>;
export type UpdateEjercicioPayload = Partial<CreateEjercicioPayload>;