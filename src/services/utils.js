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
