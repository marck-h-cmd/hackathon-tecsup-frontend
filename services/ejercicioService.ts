import axios from 'axios';
import { Ejercicio, ApiResponse, PaginatedResponse } from '@/types/api';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function fetchEjercicios(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Ejercicio>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEjercicioById(id: string | number): Promise<ApiResponse<Ejercicio>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEjerciciosByTema(temaId: string | number): Promise<ApiResponse<Ejercicio[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios/tema/${temaId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEjerciciosWithFilters(params: {
  tema_id?: number;
  titulo?: string;
  tipo?: string;
  activo?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Ejercicio>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios/filtros`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEjerciciosByTipo(tipo: string): Promise<ApiResponse<Ejercicio[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios/tipo/${tipo}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasEjercicio(id: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios/${id}/estadisticas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasPorTipoEjercicio(): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/ejercicios/estadisticas/tipos`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createEjercicio(payload: Partial<Ejercicio>): Promise<ApiResponse<Ejercicio>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/ejercicios`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateEjercicio(id: string | number, payload: Partial<Ejercicio>): Promise<ApiResponse<Ejercicio>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/ejercicios/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteEjercicio(id: string | number): Promise<ApiResponse<boolean>> {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/ejercicios/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deactivateEjercicio(id: string | number): Promise<ApiResponse<Ejercicio>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/ejercicios/${id}/desactivar`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reordenarEjercicios(temaId: string | number, orden: number[]): Promise<ApiResponse<Ejercicio[]>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/ejercicios/tema/${temaId}/reordenar`, { orden }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function duplicarEjercicio(id: string | number, nuevo_tema_id?: number): Promise<ApiResponse<Ejercicio>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/ejercicios/${id}/duplicar`, { nuevo_tema_id }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function verificarRespuesta(id: string | number, respuesta: string): Promise<ApiResponse<{
  correcto: boolean;
  puntos_obtenidos: number;
  explicacion: string;
  respuesta_correcta?: string;
}>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/ejercicios/${id}/verificar`, { respuesta }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

