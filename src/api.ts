import axios from "axios";
const url = "https://api.razorpay.com/v1";
const headers = { "Content-Type": "application/json", "Accept": "application/json" };


const getParams = (data?: object) => {
  if (data && typeof data == "object") {
    const params = Object.entries(data).map(([key, value]) => `${key}=${value}`).join("&");
    return '?' + params;
  };
  return '';
};

class API {
  private username: string;
  private password: string;
  constructor(auth: { key_id: string; key_secret: string }) {
    this.username = auth.key_id;
    this.password = auth.key_secret;
  };
  protected get = (route: string, options?: object) => {
    return new Promise((resolve, reject) => {
      const params = getParams(options);
      axios.get(url + route + params, {
        headers,
        auth: {
          username: this.username,
          password: this.password
        }
      }).then((result) => resolve(result?.data)).catch((error) => reject(error?.response?.data?.error))
    })
  };
  protected post = (route: string, data: object) => {
    return new Promise((resolve, reject) => {
      axios.post(url + route, data, {
        headers,
        auth: {
          username: this.username,
          password: this.password
        }
      }).then((result) => resolve(result?.data)).catch((error) => reject(error?.response?.data?.error))
    })
  };
  protected update = (route: string, data: object) => {
    return new Promise((resolve, reject) => {
      axios.patch(url + route, data, {
        headers,
        auth: {
          username: this.username,
          password: this.password
        }
      }).then((result) => resolve(result?.data)).catch((error) => reject(error?.response?.data?.error))
    })
  };
  protected delete = (route: string, id: string) => {
    return new Promise((resolve, reject) => {
      axios.delete(url + route + '/' + id, {
        headers,
        auth: {
          username: this.username,
          password: this.password
        }
      }).then((result) => resolve(result?.data))
        .catch((error) => reject(error?.response?.data?.error))
    })
  };
};

export default API;