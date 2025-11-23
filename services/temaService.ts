import { ApiResponse, PaginatedResponse, Tema } from '@/types/api';
import axios from 'axios';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function fetchTemas(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Tema>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas`, {
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

export async function fetchTemaById(id: string | number): Promise<ApiResponse<Tema>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchTemasBySeccion(seccionId: string | number): Promise<ApiResponse<Tema[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/seccion/${seccionId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchTemasByCurso(cursoId: string | number): Promise<ApiResponse<Tema[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/curso/${cursoId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
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
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/filtros`, {
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

export async function fetchTemasByTipo(tipo: string): Promise<ApiResponse<Tema[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/tipo/${tipo}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasTema(id: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/${id}/estadisticas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasPorTipo(): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/temas/estadisticas/tipos`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createTema(payload: Partial<Tema>): Promise<ApiResponse<Tema>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/temas`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateTema(id: string | number, payload: Partial<Tema>): Promise<ApiResponse<Tema>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/temas/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTema(id: string | number): Promise<ApiResponse<boolean>> {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/temas/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deactivateTema(id: string | number): Promise<ApiResponse<Tema>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/temas/${id}/desactivar`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reordenarTemas(seccionId: string | number, orden: number[]): Promise<ApiResponse<Tema[]>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/temas/seccion/${seccionId}/reordenar`, { orden }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function duplicarTema(id: string | number, nueva_seccion_id?: number): Promise<ApiResponse<Tema>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/temas/${id}/duplicar`, { nueva_seccion_id }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function moverTema(id: string | number, nueva_seccion_id: number, nuevo_orden?: number): Promise<ApiResponse<Tema>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/temas/${id}/mover`, { nueva_seccion_id, nuevo_orden }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
