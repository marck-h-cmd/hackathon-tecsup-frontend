import { api } from './api';

import { Ejercicio, ApiResponse, PaginatedResponse } from '@/types/api';

export async function marcarTemaCompletado(
  usuarioId: string | number, 
  temaId: string | number, 
  payload: {
    tiempo_dedicado_minutos?: number;
    puntos_obtenidos?: number;
  }
): Promise<ApiResponse<any>> {
  return api.post<ApiResponse<any>>(`/api/progreso/temas/${usuarioId}/${temaId}`, payload);
}

export async function fetchTemasCompletadosByUsuario(usuarioId: string | number): Promise<ApiResponse<any[]>> {
  return api.get<ApiResponse<any[]>>(`/api/progreso/temas/${usuarioId}`);
}

export async function verificarTemaCompletado(usuarioId: string | number, temaId: string | number): Promise<ApiResponse<{ completado: boolean }>> {
  return api.get<ApiResponse<{ completado: boolean }>>(`/api/progreso/temas/${usuarioId}/${temaId}/verificar`);
}

export async function eliminarTemaCompletado(usuarioId: string | number, temaId: string | number): Promise<ApiResponse<boolean>> {
  return api.del<ApiResponse<boolean>>(`/api/progreso/temas/${usuarioId}/${temaId}`);
}

export async function fetchSeccionesCompletadasByUsuario(usuarioId: string | number): Promise<ApiResponse<any[]>> {
  return api.get<ApiResponse<any[]>>(`/api/progreso/secciones/${usuarioId}`);
}

export async function calcularProgresoSeccion(usuarioId: string | number, seccionId: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/progreso/secciones/${usuarioId}/${seccionId}/calcular`);
}

export async function actualizarProgresoSeccion(usuarioId: string | number, seccionId: string | number): Promise<ApiResponse<any>> {
  return api.put<ApiResponse<any>>(`/api/progreso/secciones/${usuarioId}/${seccionId}/actualizar`, {});
}

export async function inscribirEnCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  return api.post<ApiResponse<any>>(`/api/progreso/cursos/${usuarioId}/${cursoId}/inscribir`, {});
}

export async function fetchCursosDelUsuario(usuarioId: string | number): Promise<ApiResponse<any[]>> {
  return api.get<ApiResponse<any[]>>(`/api/progreso/cursos/${usuarioId}`);
}

export async function calcularProgresoCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/progreso/cursos/${usuarioId}/${cursoId}/calcular`);
}

export async function actualizarProgresoCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  return api.put<ApiResponse<any>>(`/api/progreso/cursos/${usuarioId}/${cursoId}/actualizar`, {});
}

export async function emitirCertificado(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  return api.post<ApiResponse<any>>(`/api/progreso/cursos/${usuarioId}/${cursoId}/certificado`, {});
}

export async function fetchEstadisticasProgreso(usuarioId: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/progreso/estadisticas/${usuarioId}`);
}

export async function fetchProgresoPorCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/progreso/detalle/${usuarioId}/${cursoId}`);
}