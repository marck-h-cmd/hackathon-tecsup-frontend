import { ApiResponse, Curso, PaginatedResponse } from '@/types/api';
import axios from 'axios';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function fetchCursos(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Curso>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos`, {
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

export async function fetchCursoById(id: string | number): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCursoByCodigo(codigo: string): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/codigo/${codigo}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCursosWithFilters(params: {
  nombre?: string;
  codigo?: string;
  es_publico?: boolean;
  activo?: boolean;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Curso>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/filtros`, {
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

export async function fetchCursosPublicos(params?: {
  page?: number;
  limit?: number;
}): Promise<ApiResponse<PaginatedResponse<Curso>>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/publicos`, {
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

export async function fetchCursoWithSecciones(id: string | number): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/${id}/secciones`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCursoCompleto(id: string | number): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/${id}/completo`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasCurso(id: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/${id}/estadisticas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasGeneralesCursos(): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cursos/estadisticas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createCurso(payload: Partial<Curso>): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/cursos`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateCurso(id: string | number, payload: Partial<Curso>): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/cursos/${id}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCurso(id: string | number): Promise<ApiResponse<boolean>> {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/cursos/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deactivateCurso(id: string | number): Promise<ApiResponse<Curso>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/cursos/${id}/desactivar`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
