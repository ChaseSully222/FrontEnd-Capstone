const remoteURL = "http://localhost:5002";

export default {
get(id) {
  return fetch (`${remoteURL}/favorites/${id}`).then
}
};
