import { PerfilEstudiante, User } from '@/types/api';
import axios from 'axios';
import { api } from './api';
const BACKEND_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';
export async function fetchUsers(): Promise<User[]> {
  return api.get<User[]>('/users');
}

export async function fetchUserById(id: string | number): Promise<User> {
  return api.get<User>(`/users/${id}`);
}

export async function createUser(payload: Partial<User>): Promise<User> {
  return api.post<User>('/users', payload);
}

// --- Nuevas funciones para mapear todas las rutas del backend ---

// Tipos locales mínimos (reemplazar/importar reales si existen en '@/types/api')

type EstadisticasUsuarios = any;
type TopEstudiante = any;
type AdminVerifyPayload = { email: string; password: string };
type Filters = Record<string, string | number | boolean>;

// Verifica usuario (ruta: GET /verifyUser/:userId)
export async function verifyUser(userId: string | number): Promise<any> {
  return api.get(`/verifyUser/${userId}`);
}

// Buscar usuario por email (ruta: GET /users/email/:email)
export async function fetchUserByEmail(email: string): Promise<User> {
  return api.get<User>(`/users/email/${encodeURIComponent(email)}`);
}

// Obtener usuarios con filtros (ruta: GET /users?...)
export async function fetchUsersWithFilters(filters?: Filters): Promise<User[]> {
  try {
    const response = await axios.get(`${BACKEND_URL}/users`, {
      headers: {
        'Content-Type': 'application/json',
      }, 
      params: filters });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Actualizar usuario (ruta: PUT /users/:id)
export async function updateUser(id: string | number, payload: Partial<User>): Promise<User> {
  return api.put<User>(`/users/${id}`, payload);
}

// Desactivar / eliminar usuario (ruta: DELETE /users/:id)
export async function deactivateUser(id: string | number): Promise<void> {
  return api.delete(`/users/${id}`);
}

// Obtener usuario con su perfil (ruta: GET /users/:userId/profile)
export async function getUserWithProfile(userId: string | number): Promise<any> {
  return api.get(`/users/${userId}/profile`);
}

// --- Rutas de perfil-estudiante ---

export async function createPerfilEstudiante(payload: Partial<PerfilEstudiante>): Promise<PerfilEstudiante> {
  return api.post<PerfilEstudiante>('/perfil-estudiante', payload);
}

export async function getPerfilEstudianteByUserId(usuarioId: string | number): Promise<PerfilEstudiante> {
  return api.get<PerfilEstudiante>(`/perfil-estudiante/${usuarioId}`);
}

export async function updatePerfilEstudiante(usuarioId: string | number, payload: Partial<PerfilEstudiante>): Promise<PerfilEstudiante> {
  return api.put<PerfilEstudiante>(`/perfil-estudiante/${usuarioId}`, payload);
}

export async function updateStreakEstudiante(usuarioId: string | number, payload: { streak?: number }): Promise<any> {
  return api.patch(`/perfil-estudiante/${usuarioId}/streak`, payload);
}

export async function addExperienciaEstudiante(usuarioId: string | number, payload: { experiencia: number }): Promise<any> {
  return api.patch(`/perfil-estudiante/${usuarioId}/experiencia`, payload);
}

// --- Admin ---

export async function verifyAdminCredentials(credentials: AdminVerifyPayload): Promise<any> {
  return api.post('/admin/verify', credentials);
}

// --- Estadísticas ---

export async function getEstadisticasUsuarios(): Promise<EstadisticasUsuarios> {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/estadisticas/usuarios`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTopEstudiantesPorExperiencia(params?: Filters): Promise<TopEstudiante[]> {
  try {
    const response = await axios.get(`${BACKEND_URL}/user/estadisticas/top-estudiantes`, {
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


