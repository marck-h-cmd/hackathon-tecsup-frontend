import axios from 'axios';
import { Seccion , ApiResponse,PaginatedResponse} from '@/types/api';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function fetchSecciones(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Seccion>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/secciones`, {
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

export async function fetchSeccionById(id: string | number): Promise<ApiResponse<Seccion>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/secciones/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSeccionesByCurso(cursoId: string | number): Promise<ApiResponse<Seccion[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/secciones/curso/${cursoId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSeccionesWithFilters(params: {
  curso_id?: number;
  titulo?: string;
  activa?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Seccion>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/secciones/filtros`, {
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

export async function fetchSeccionWithTemas(id: string | number): Promise<ApiResponse<Seccion>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/secciones/${id}/temas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasSeccion(id: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/secciones/${id}/estadisticas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createSeccion(payload: Partial<Seccion>): Promise<ApiResponse<Seccion>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/secciones`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateSeccion(id: string | number, payload: Partial<Seccion>): Promise<ApiResponse<Seccion>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/secciones/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteSeccion(id: string | number): Promise<ApiResponse<boolean>> {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/secciones/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deactivateSeccion(id: string | number): Promise<ApiResponse<Seccion>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/secciones/${id}/desactivar`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function reordenarSecciones(cursoId: string | number, orden: number[]): Promise<ApiResponse<Seccion[]>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/secciones/curso/${cursoId}/reordenar`, { orden }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
