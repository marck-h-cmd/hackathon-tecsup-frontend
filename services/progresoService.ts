import { ApiResponse } from '@/types/api';
import axios from 'axios';

const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export async function marcarTemaCompletado(
  usuarioId: string | number, 
  temaId: string | number, 
  payload: {
    tiempo_dedicado_minutos?: number;
    puntos_obtenidos?: number;
  }
): Promise<ApiResponse<any>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/progreso/temas/${usuarioId}/${temaId}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchTemasCompletadosByUsuario(usuarioId: string | number): Promise<ApiResponse<any[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/temas/${usuarioId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function verificarTemaCompletado(usuarioId: string | number, temaId: string | number): Promise<ApiResponse<{ completado: boolean }>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/temas/${usuarioId}/${temaId}/verificar`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function eliminarTemaCompletado(usuarioId: string | number, temaId: string | number): Promise<ApiResponse<boolean>> {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/progreso/temas/${usuarioId}/${temaId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchSeccionesCompletadasByUsuario(usuarioId: string | number): Promise<ApiResponse<any[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/secciones/${usuarioId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function calcularProgresoSeccion(usuarioId: string | number, seccionId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/secciones/${usuarioId}/${seccionId}/calcular`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function actualizarProgresoSeccion(usuarioId: string | number, seccionId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/progreso/secciones/${usuarioId}/${seccionId}/actualizar`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function inscribirEnCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/progreso/cursos/${usuarioId}/${cursoId}/inscribir`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCursosDelUsuario(usuarioId: string | number): Promise<ApiResponse<any[]>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/cursos/${usuarioId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function calcularProgresoCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/cursos/${usuarioId}/${cursoId}/calcular`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function actualizarProgresoCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/progreso/cursos/${usuarioId}/${cursoId}/actualizar`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function emitirCertificado(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/progreso/cursos/${usuarioId}/${cursoId}/certificado`, {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchEstadisticasProgreso(usuarioId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/estadisticas/${usuarioId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchProgresoPorCurso(usuarioId: string | number, cursoId: string | number): Promise<ApiResponse<any>> {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/progreso/detalle/${usuarioId}/${cursoId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
