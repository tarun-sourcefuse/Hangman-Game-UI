import apiClient from '../apiClient';

export async function login({ email }) {
  return apiClient
    .get(`/login?email=${email}`)
    .then((response) => {
      if (!response) {
        throw new Error('No response');
      }

      const {
        data: { data: user, error, msg },
      } = response;

      if (error) throw msg;

      return user;
    })
    .catch((err) => {
      alert('Invalid Email');
      console.error(err);
    });
}
