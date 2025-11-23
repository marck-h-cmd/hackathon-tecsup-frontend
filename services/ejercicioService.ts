import { api } from './api';

import { Ejercicio, ApiResponse, PaginatedResponse } from '@/types/api';

export async function fetchEjercicios(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Ejercicio>>> {
  return api.get<ApiResponse<PaginatedResponse<Ejercicio>>>('/api/ejercicios', params);
}

export async function fetchEjercicioById(id: string | number): Promise<ApiResponse<Ejercicio>> {
  return api.get<ApiResponse<Ejercicio>>(`/api/ejercicios/${id}`);
}

export async function fetchEjerciciosByTema(temaId: string | number): Promise<ApiResponse<Ejercicio[]>> {
  return api.get<ApiResponse<Ejercicio[]>>(`/api/ejercicios/tema/${temaId}`);
}

export async function fetchEjerciciosWithFilters(params: {
  tema_id?: number;
  titulo?: string;
  tipo?: string;
  activo?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Ejercicio>>> {
  return api.get<ApiResponse<PaginatedResponse<Ejercicio>>>('/api/ejercicios/filtros', params);
}

export async function fetchEjerciciosByTipo(tipo: string): Promise<ApiResponse<Ejercicio[]>> {
  return api.get<ApiResponse<Ejercicio[]>>(`/api/ejercicios/tipo/${tipo}`);
}

export async function fetchEstadisticasEjercicio(id: string | number): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>(`/api/ejercicios/${id}/estadisticas`);
}

export async function fetchEstadisticasPorTipoEjercicio(): Promise<ApiResponse<any>> {
  return api.get<ApiResponse<any>>('/api/ejercicios/estadisticas/tipos');
}

export async function createEjercicio(payload: Partial<Ejercicio>): Promise<ApiResponse<Ejercicio>> {
  return api.post<ApiResponse<Ejercicio>>('/api/ejercicios', payload);
}

export async function updateEjercicio(id: string | number, payload: Partial<Ejercicio>): Promise<ApiResponse<Ejercicio>> {
  return api.put<ApiResponse<Ejercicio>>(`/api/ejercicios/${id}`, payload);
}

export async function deleteEjercicio(id: string | number): Promise<ApiResponse<boolean>> {
  return api.del<ApiResponse<boolean>>(`/api/ejercicios/${id}`);
}

export async function deactivateEjercicio(id: string | number): Promise<ApiResponse<Ejercicio>> {
  return api.put<ApiResponse<Ejercicio>>(`/api/ejercicios/${id}/desactivar`, {});
}

export async function reordenarEjercicios(temaId: string | number, orden: number[]): Promise<ApiResponse<Ejercicio[]>> {
  return api.put<ApiResponse<Ejercicio[]>>(`/api/ejercicios/tema/${temaId}/reordenar`, { orden });
}

export async function duplicarEjercicio(id: string | number, nuevo_tema_id?: number): Promise<ApiResponse<Ejercicio>> {
  return api.post<ApiResponse<Ejercicio>>(`/api/ejercicios/${id}/duplicar`, { nuevo_tema_id });
}

export async function verificarRespuesta(id: string | number, respuesta: string): Promise<ApiResponse<{
  correcto: boolean;
  puntos_obtenidos: number;
  explicacion: string;
  respuesta_correcta?: string;
}>> {
  return api.post<ApiResponse<any>>(`/api/ejercicios/${id}/verificar`, { respuesta });
}
