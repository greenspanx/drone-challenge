
const development = {
  apiHost: 'http://localhost:4001',
  partOneEndpoint: '/api/v1/part_one',
  partTwoEndPoint: '/api/v1/part_two'
};

const production = {
  apiHost: process.env.API_HOST,
  partOneEndpoint: '/api/v1/part_one',
  partTwoEndPoint: '/api/v1/part_two'
};

const getEnvVars = () => {
  if (process.env.NODE_ENV !== 'production') {
    return development;
  }
  return production;
};

export default getEnvVars();
