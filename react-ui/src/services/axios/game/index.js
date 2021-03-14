import apiClient from '../apiClient';

export async function createGameSession({ email }) {
  return apiClient
    .get(`/startGame?email=${email}`)
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
