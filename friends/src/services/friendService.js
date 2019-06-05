import http from './httpService';

const apiEndpoint = 'http://localhost:5000/api/friends';

function friendUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getFriends() {
  return http.get(apiEndpoint);
}

export function getFriend(friendId) {
  return http.get(friendUrl(friendId));
}

export function saveFriend(friend) {
  if (friend.id) {
    const body = { ...friend };
    delete body.id;
    return http.put(friendUrl(friend.id), body);
  }

  return http.post(apiEndpoint, friend);
}

export function deleteFriend(friendId) {
  return http.delete(friendUrl(friendId));
}
