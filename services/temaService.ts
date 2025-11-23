import { api } from './api';

import { Tema, ApiResponse,PaginatedResponse } from '@/types/api';

export async function fetchTemas(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Tema>>> {
  return api.get<ApiResponse<PaginatedResponse<Tema>>>('/api/temas', params);
}

export async function fetchTemaById(id: string | number): Promise<ApiResponse<Tema>> {
  return api.get<ApiResponse<Tema>>(`/api/temas/${id}`);
}

export async function fetchTemasBySeccion(seccionId: string | number): Promise<ApiResponse<Tema[]>> {
  return api.get<ApiResponse<Tema[]>>(`/api/temas/seccion/${seccionId}`);
}

export async function fetchTemasByCurso(cursoId: string | number): Promise<ApiResponse<Tema[]>> {
  return api.get<ApiResponse<Tema[]>>(`/api/temas/curso/${cursoId}`);
}

export async function fetchTemasWithFilters(params: {
  seccion_id?: number;
  curso_id?: number;
  titulo?: string;
  tipo_contenido?: string;
  activo?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Tema>>> {
  return api.get<ApiResponse<PaginatedResponse<Tema>>>('/api/temas/filtros', params);
}

export async function fetchTemasByTipo(tipo: string): Promise<ApiResponse<Tema[]>> {
  return api.get<ApiResponse<Tema[]>>(`/api/temas/tipo/${tipo}`);
}

export async function fetchEstadisticasTema(id: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/temas/${id}/estadisticas`);
}

export async function fetchEstadisticasPorTipo(): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>('/api/temas/estadisticas/tipos');
}

export async function createTema(payload: Partial<Tema>): Promise<ApiResponse<Tema>> {
  return api.post<ApiResponse<Tema>>('/api/temas', payload);
}

export async function updateTema(id: string | number, payload: Partial<Tema>): Promise<ApiResponse<Tema>> {
  return api.put<ApiResponse<Tema>>(`/api/temas/${id}`, payload);
}

export async function deleteTema(id: string | number): Promise<ApiResponse<boolean>> {
  return api.del<ApiResponse<boolean>>(`/api/temas/${id}`);
}

export async function deactivateTema(id: string | number): Promise<ApiResponse<Tema>> {
  return api.put<ApiResponse<Tema>>(`/api/temas/${id}/desactivar`, {});
}

export async function reordenarTemas(seccionId: string | number, orden: number[]): Promise<ApiResponse<Tema[]>> {
  return api.put<ApiResponse<Tema[]>>(`/api/temas/seccion/${seccionId}/reordenar`, { orden });
}

export async function duplicarTema(id: string | number, nueva_seccion_id?: number): Promise<ApiResponse<Tema>> {
  return api.post<ApiResponse<Tema>>(`/api/temas/${id}/duplicar`, { nueva_seccion_id });
}

export async function moverTema(id: string | number, nueva_seccion_id: number, nuevo_orden?: number): Promise<ApiResponse<Tema>> {
  return api.put<ApiResponse<Tema>>(`/api/temas/${id}/mover`, { nueva_seccion_id, nuevo_orden });
}