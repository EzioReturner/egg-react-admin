import Axios from 'axios';
import { notification } from 'antd';

class Request {
  instance;

  constructor() {
    const baseURL = ['localhost', '0.0.0.0'].includes(window.location.hostname)
      ? 'http://localhost:8080'
      : window.location.origin;
    this.instance = Axios.create({
      baseURL,
      timeout: 30000
    });
    this.initInterceptors();
  }

  // 初始化拦截器
  initInterceptors() {
    this.instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        Promise.reject(error);
      }
    );
  }

  // 设置自定义头部
  setHeader = (key, val) => {
    this.instance.defaults.headers.common[key] = val;
  };

  // 错误notify
  notify(message) {
    notification.error({
      message: '请求错误',
      description: `${message ||
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.'}`
    });
  }

  // 错误处理
  handleError = error => {
    const { message, status } = error;
    switch (status) {
      case 401:
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        this.notify(message || error);
        break;
    }
    return Promise.reject(error);
  };

  sendRequest(method, data) {
    let { path, params, options } = data;

    const _query = options ? { ...options, params } : { params };
    return this.instance[method](path, _query).catch(this.handleError);
  }

  get(path, data = {}) {
    const { params } = data;

    let _path = path;
    if (params) {
      _path += '?';
      Object.keys(params).forEach(key => {
        _path += `${key}=${params[key]}&`;
      });
      _path = _path.replace(/&$/, '');
    }
    return this.sendRequest('get', { path: _path, data });
  }

  post(path, data) {
    return this.sendRequest('post', { path, ...data });
  }

  put(path, data) {
    return this.sendRequest('put', { path, ...data });
  }

  patch(path, data) {
    return this.sendRequest('patch', { path, ...data });
  }

  delete(path, data) {
    return this.sendRequest('delete', { path, ...data });
  }
}
const request = new Request();

export default request;
