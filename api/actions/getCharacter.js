import axiosAction from '../axiosClient';

export const getCharacter = (id) => {
  return new Promise((resolve, reject) => {
    axiosAction({
      method: 'GET',
      url: `/character/${id}`,
    }).then(result => {
      resolve(result);
    }).catch(err => {
      reject(err);
  });
  })
}