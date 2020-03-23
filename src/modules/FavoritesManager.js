const remoteURL = "http://localhost:5002";

export default {
get(id) {
  return fetch (`${remoteURL}/favorites/${id}`).then(result => result.json())
},
getAll() {
  return fetch (`${remoteURL}/favorites`).then(result => result.json());
},
getWithUsers(id) {
  return fetch(`${remoteURL}/favorites/${id}?_embed=paintings`).then(result => result.json())
}
};
