import axiosAction from '../axiosClient';

export const getCharacters = (url) => {
  return new Promise((resolve, reject) => {
    axiosAction({
      method: 'GET',
      url: `/character/${url}`,
    }).then(result => {
      resolve(result);
    }).catch(err => {
      reject(err);
  });
  })
}