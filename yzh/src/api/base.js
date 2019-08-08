import axios from 'axios';

// const productUrl = 'http://172.20.2.182:18796'
// const productUrl = "http://172.20.2.149:18796"
// const productUrl = 'http://172.20.2.183:18796'
// const productUrl = 'http://172.17.170.95:18796'
const productUrl = 'http://127.0.0.1:10003'


axios.defaults.timeout = 30000
axios.defaults.baseURL = productUrl

export function baseUrl() { return productUrl }

//http request 拦截器
axios.interceptors.request.use(
  config => {
    let parse = config.url.split('/')
    let tag= parse[parse.length-1]
    if('saveBoComplaints'==tag){
      config.headers = {
        'Content-Type':'multipart/form-data' //x-www-form-urlencoded,json
      }
    } else {
      config.data = JSON.stringify(config.data);
      config.headers = {
        //'X-Frame-Options':'DENY',
        'Content-Type':'application/json' //x-www-form-urlencoded,json
      }
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    // console.info()
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{ params:params })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

