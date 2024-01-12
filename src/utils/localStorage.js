const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  let data = localStorage.getItem(key);

  return (data = data ? JSON.parse(data) : []);
};

export { setLocalStorage, getLocalStorage };
