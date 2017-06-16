
import io from 'socket.io-client';

const BASE_URL = 'http://172.168.22.18:8000';
const CHAT_URL = 'ws://172.16.1.21:3000';

let query = {
  get: function(url, succcb, errcb) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        if (succcb && typeof succcb === 'function') {
          succcb(JSON.parse(request.responseText));
        }
      } else {
        if (errcb && typeof errcb === 'function') {
          errcb(e);
        }
      }
    };
    request.open('GET', BASE_URL + url);
    request.send();
  },
  post: function(url, params, succcb, errcb) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        if (succcb && typeof succcb === 'function') {
          succcb(JSON.parse(request.responseText));
        }
      } else {
        if (errcb && typeof errcb === 'function') {
          errcb(e);
        }
      }
    };
    let params_str = '',
      loc = 0;
    if (params) {
      for (let key in params) {
        if (loc != 0) {
          params_str += '&';
        }
        loc++;
        params_str += (key + '=' + params[key] + '')

      }
    }
    request.open('POST', BASE_URL + url, true);
    //post请求要自己设置请求头
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(params_str);
  },
  socket: function() {
    return io(CHAT_URL, {transports: ['websocket']});
  }
}


export default query
