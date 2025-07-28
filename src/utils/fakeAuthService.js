import { fakeUsers } from "./fakeDatabase";

export const fakeLogin = ({ email, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = fakeUsers.find(u => u.email === email && u.password === password);
      if (user) {
        resolve({ user: { id: user.id, name: user.name, email: user.email }, token: "fakeToken" });
      } else {
        reject("Неверные данные");
      }
    }, 1000);
  });

export const getUserCart = (userId) =>
  new Promise((resolve) => {
    const user = fakeUsers.find(u => u.id === userId);
    resolve(user?.cart || []);
  });
