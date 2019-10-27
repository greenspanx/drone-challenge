import axios from 'axios';

export default class ApiPost {
  constructor(host='http://localhost', endpoint='', query = {}, opts = {}){
    this.url = `${host}${endpoint}`;
    this.params = {
      ...query,
      ...opts
    }
  }

  const data = await axios.post(this.url, this.params);
  return data;

  // return axios.post(this.url, this.params)
  //   .then(({ data }) => {
  //     if (data.stack) {
  //       console.log('API STACKTRACE:');
  //       console.log(data.debug.error);
  //       console.log('_________________');
  //     }
  //
  //     if (data.error) {
  //       throw data.error;
  //     }
  //
  //     console.log('API - post: ', this.url);
  //     return data.response;
  //   })
  //   .catch(error => {
  //     throw error;
  //   });


}


// export default (async function API(method, query = {}, opts = {}) {
//   const url = `${Config.apiHost}${method}`;
//
//   const params = {
//     ...query,
//     ...opts
//   }
//
//   return axios
//     .post(url, params)
//     .then(({ data }) => {
//       if (data.stack) {
//         console.log('API STACKTRACE:');
//         console.log(data.debug.error);
//         console.log('_________________');
//       }
//
//       if (data.error) {
//         throw data.error;
//       }
//
//       console.log('API - request, method: ', method);
//       return data.response;
//     })
//     .catch(error => {
//       throw error;
//     });
// });
