import axiosAction from '../axiosClient';

export const filterCharacter = (filter) => {
  return new Promise((resolve, reject) => {
    axiosAction({
      method: 'GET',
      url: `/character/${filter}`,
    }).then(result => {
      resolve(result);
    }).catch(err => {
      reject(err);
  });
  })
}