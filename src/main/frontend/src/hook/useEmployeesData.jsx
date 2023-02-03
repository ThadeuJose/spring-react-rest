import {useQuery} from 'react-query';
import api from '../service/api';

function parseData(data) {
  return data?.data?._embedded?.employees; // eslint-disable-line no-underscore-dangle
}

export default function useEmployeesData() {
  return useQuery('employees', () => api.get('/employees'), {
    select: parseData
  });
}
