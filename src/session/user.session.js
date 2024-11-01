import { updateUserLocation } from '../db/user/user.db.js';
import { userSessions } from './sessions.js';

export const addUser = (user) => {
  userSessions.push(user);
  return user;
};

export const removeUser = async (socket) => {
  const index = userSessions.findIndex((user) => user.socket === socket);
  if (index !== -1) {
    const user = userSessions[index];
    await updateUserLocation(user.x, user.y, user.id);
    return userSessions.splice(index, 1)[0];
  }
};

export const getUserById = (id) => {
  return userSessions.find((user) => user.id === id);
};

// 소켓으로 유저 찾기
export const getUserBySocket = (socket) => {
  return userSessions.find((user) => user.socket === socket);
};
