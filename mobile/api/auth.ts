import axios from 'axios';
import { AUTH_BASE_URL } from "@env"
const authApi = axios.create({
  baseURL: AUTH_BASE_URL
})

export const createNewUser = (data: any) => {
  return authApi.post('/user', data)
}