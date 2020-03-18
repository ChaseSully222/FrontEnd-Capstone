const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/paintings/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/paintings`).then(result => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/paintings/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  post(newPainting) {
    return fetch(`${remoteURL}/paintings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPainting)
    }).then(data => data.json());
  },
  update(editedPainting) {
    return fetch(`${remoteURL}/paintings/${editedPainting.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPainting)
    }).then(data => data.json());
  }
};
