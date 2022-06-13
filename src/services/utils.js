export const saveAuthToken = token => {
    window.sessionStorage.setItem('access_token', token);
  };
export const createFormData = (email, password) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    return formData
}