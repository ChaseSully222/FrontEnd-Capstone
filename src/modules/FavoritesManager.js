const remoteURL = "http://localhost:5002";

export default {
  getWithUsers(id) {
    return fetch(
      `${remoteURL}/favorites/?userId=${id}&_expand=painting`
    ).then(result => result.json());
  },
  post(newUserFavorite) {
    return fetch(`${remoteURL}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserFavorite)
    }).then(data => data.json());
  }
};
