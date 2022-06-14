export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('$1153258c-32e7-44b4-91bd-950f4da0175a-vless')) {
      url.hostname = 'ghyueiodjgyc364.herokuapp.com '
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
