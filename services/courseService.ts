import { api } from './api';
import { Curso, ApiResponse, PaginatedResponse } from '@/types/api';

export async function fetchCursos(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Curso>>> {
  return api.get<ApiResponse<PaginatedResponse<Curso>>>('/api/cursos', params);
}

export async function fetchCursoById(id: string | number): Promise<ApiResponse<Curso>> {
  return api.get<ApiResponse<Curso>>(`/api/cursos/${id}`);
}

export async function fetchCursoByCodigo(codigo: string): Promise<ApiResponse<Curso>> {
  return api.get<ApiResponse<Curso>>(`/api/cursos/codigo/${codigo}`);
}

export async function fetchCursosWithFilters(params: {
  nombre?: string;
  codigo?: string;
  es_publico?: boolean;
  activo?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Curso>>> {
  return api.get<ApiResponse<PaginatedResponse<Curso>>>('/api/cursos/filtros', params);
}

export async function fetchCursosPublicos(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Curso>>> {
  return api.get<ApiResponse<PaginatedResponse<Curso>>>('/api/cursos/publicos', params);
}

export async function fetchCursoWithSecciones(id: string | number): Promise<ApiResponse<Curso>> {
  return api.get<ApiResponse<Curso>>(`/api/cursos/${id}/secciones`);
}

export async function fetchCursoCompleto(id: string | number): Promise<ApiResponse<Curso>> {
  return api.get<ApiResponse<Curso>>(`/api/cursos/${id}/completo`);
}

export async function fetchEstadisticasCurso(id: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/cursos/${id}/estadisticas`);
}

export async function fetchEstadisticasGeneralesCursos(): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>('/api/cursos/estadisticas');
}

export async function createCurso(payload: Partial<Curso>): Promise<ApiResponse<Curso>> {
  return api.post<ApiResponse<Curso>>('/api/cursos', payload);
}

export async function updateCurso(id: string | number, payload: Partial<Curso>): Promise<ApiResponse<Curso>> {
  return api.put<ApiResponse<Curso>>(`/api/cursos/${id}`, payload);
}

export async function deleteCurso(id: string | number): Promise<ApiResponse<boolean>> {
  return api.del<ApiResponse<boolean>>(`/api/cursos/${id}`);
}

export async function deactivateCurso(id: string | number): Promise<ApiResponse<Curso>> {
  return api.put<ApiResponse<Curso>>(`/api/cursos/${id}/desactivar`, {});
}