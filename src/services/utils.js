export const setAuthToken = token => {
  window.sessionStorage.setItem('access_token', token);
};
export const getAuthToken = () => {
  let access_token = window.sessionStorage.getItem('access_token') || null;
  return access_token;
};
export const createFormData = (email, password) => {
  const formData = new FormData();
  formData.append('username', email);
  formData.append('password', password);
  return formData;
};
export const selectLevels = currentDay => {
  let level = [1];
  if (currentDay % 2 === 0) {
    level.push(2);
  }
  if ((currentDay - 2) % 4 === 0) {
    level.push(3);
  }
  if (currentDay % 16 === 4 || currentDay % 16 === 13) {
    level.push(4);
  }
  if (currentDay % 16 === 12) {
    level.push(5);
  }
  if (currentDay % 64 === 24 || currentDay % 64 === 59) {
    level.push(6);
  }
  if (currentDay % 64 === 56) {
    level.push(7);
  }
  return level;
};
export const selectCards = (levels, cards) => {
  return cards.filter(card => levels.includes(card.level));
};
