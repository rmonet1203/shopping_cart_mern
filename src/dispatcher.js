import guid from 'guid';
const listeners = {};

export default {
  register: function (cb) {
    let id = guid.raw();
    listeners[id] = cb;
    return id;
  },
  dispatch: function (payload) {
    console.log('Dispatching... ', payload); /*eslint-disable no-console*/
    for (let id in listeners) {
      let listener = listeners[id];
      listener(payload);
    }
  }
};


