import { api } from './api';
import { Seccion , ApiResponse,PaginatedResponse} from '@/types/api';

export async function fetchSecciones(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Seccion>>> {
  return api.get<ApiResponse<PaginatedResponse<Seccion>>>('/api/secciones', params);
}

export async function fetchSeccionById(id: string | number): Promise<ApiResponse<Seccion>> {
  return api.get<ApiResponse<Seccion>>(`/api/secciones/${id}`);
}

export async function fetchSeccionesByCurso(cursoId: string | number): Promise<ApiResponse<Seccion[]>> {
  return api.get<ApiResponse<Seccion[]>>(`/api/secciones/curso/${cursoId}`);
}

export async function fetchSeccionesWithFilters(params: {
  curso_id?: number;
  titulo?: string;
  activa?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Seccion>>> {
  return api.get<ApiResponse<PaginatedResponse<Seccion>>>('/api/secciones/filtros', params);
}

export async function fetchSeccionWithTemas(id: string | number): Promise<ApiResponse<Seccion>> {
  return api.get<ApiResponse<Seccion>>(`/api/secciones/${id}/temas`);
}

export async function fetchEstadisticasSeccion(id: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/secciones/${id}/estadisticas`);
}

export async function createSeccion(payload: Partial<Seccion>): Promise<ApiResponse<Seccion>> {
  return api.post<ApiResponse<Seccion>>('/api/secciones', payload);
}

export async function updateSeccion(id: string | number, payload: Partial<Seccion>): Promise<ApiResponse<Seccion>> {
  return api.put<ApiResponse<Seccion>>(`/api/secciones/${id}`, payload);
}

export async function deleteSeccion(id: string | number): Promise<ApiResponse<boolean>> {
  return api.del<ApiResponse<boolean>>(`/api/secciones/${id}`);
}

export async function deactivateSeccion(id: string | number): Promise<ApiResponse<Seccion>> {
  return api.put<ApiResponse<Seccion>>(`/api/secciones/${id}/desactivar`, {});
}

export async function reordenarSecciones(cursoId: string | number, orden: number[]): Promise<ApiResponse<Seccion[]>> {
  return api.put<ApiResponse<Seccion[]>>(`/api/secciones/curso/${cursoId}/reordenar`, { orden });
}