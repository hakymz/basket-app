import {API} from '../../conts/api';
import axios from 'axios';
import qs from 'qs';

export const fetchRequest = async ({
  url = '',
  path,
  data = undefined,
  method = 'POST',
  showLoader = true,
  displayMessage = true,
}) => {
  const baseURL = url || API;

  const instance = axios.create({
    baseURL,
    responseType: 'json',
  });

  //Show the preloader by default
  // if (showLoader) {
  //   Preloader.show();
  // }

  try {
    let response;
    if (method == 'POST') {
      response = await instance.post(path, qs.stringify(data));
    } else if (method == 'PUT') {
      response = await instance.put(path, qs.stringify(data));
    } else {
      response = await instance.get(path);
    }

    return response?.data;
  } catch (error) {
    const {data} = error?.response || {};
    // if (data?.code == 400 || data?.code < 500) {
    //   console.log(data?.details);
    //   displayMessage && Toast.show('error', data?.details);
    // } else {
    //   displayMessage && Toast.show('error', 'Something went wrong');
    // }

    throw error;
  } finally {
    if (showLoader) {
      // Preloader.hide();
    }
  }
};
