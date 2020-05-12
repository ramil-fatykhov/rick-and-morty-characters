import axiosAction from '../axiosClient';

export const getEpisodes = (episode) => {
  return new Promise((resolve, reject) => {
    axiosAction({
      method: 'GET',
      url: `/episode/${episode}`,
    }).then(result => {
      resolve(result.data);
    }).catch(err => {
      reject(err);
  });
  })
}