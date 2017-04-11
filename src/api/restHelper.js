/**
 * Created by BlisS on 05/04/17.
 */
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';


const baseUrl = getBaseUrl();

//User CRUD -- GETs

export function returnItems(){
  return get('items');
}

function get(url){
  return fetch(baseUrl + url)
    .then(onSuccess, onError);
}

// POST Request

export function postItem(item) {
  return post(`items`, item);
}

function post(url, item){
  const request = new Request(baseUrl + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });

  return fetch(request)
    .then(onSuccess, onError);
}


// DELETE post

export function deleteItem(id) {
  return del(`items/${id}`);
}

function del(url){
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request)
    .then(onSuccess, onError);
}


// defaults:

function onSuccess(response){
  console.log("exito"); //eslint-disable-line no-console
  return response.json();

}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}



