import axios from 'axios';

const config = {
  baseURL: `${process.env.REACT_APP_API_END_POINT}/api`,
  headers: { 'Content-Type': 'application/json' },
};

const apiClient = axios.create(config);

export default apiClient;
