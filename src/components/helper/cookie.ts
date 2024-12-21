import Cookies from 'js-cookie';

export function getCookie(key: string) {
  return Cookies.get(key);
}

export function setCokie(key: string, val: string) {
  return Cookies.set(key, val)
}


export function removeCookie(key: string) {
  return Cookies.remove(key);
}
