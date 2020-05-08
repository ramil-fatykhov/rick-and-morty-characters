import axiosAction from '../axiosClient';

export const getEpisodes = (episode) => {
  return new Promise((resolve, reject) => {
    axiosAction({
      method: 'GET',
      url: `/character/episode/${episode}`,
    }).then(result => {
      resolve(result);
    }).catch(err => {
      reject(err);
  });
  })
}