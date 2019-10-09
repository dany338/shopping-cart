import assets from '../assets'

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method,
    headers: apiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

let apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};

export const apiPersonal = {
  getMyInformation: async () => {
    const response = await fetch('personals.json', fetchParams('GET'))
    const data = await response.json()
    return data
  }
}
