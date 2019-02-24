import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4001'
})

export const registerUser = user => api.post('/users', user)
export const authUser = user => api.post('/users/auth', user)

export const getPosts = () => api.get('/posts')
export const getPostById = id => api.get('/posts/' + id)
export const registerPost = post => api.post('/posts', post)

const apis = {
  registerUser,
  authUser,
  getPosts,
  getPostById,
  registerPost
}

export default apis
