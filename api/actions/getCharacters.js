import axiosAction from '../axiosClient';

export const getCharacters = (page = 1) => {
  return new Promise((resolve, reject) => {
    axiosAction({
      method: 'GET',
      url: `/character/?page=${page}`,
    }).then(result => {
      resolve(result);
    }).catch(err => {
      reject(err);
  });
  })
}