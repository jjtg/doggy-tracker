class Storage {
  // eslint-disable-next-line class-methods-use-this
  get(key, defaultValue = null) {
    const value = localStorage.getItem(key);
    return value || defaultValue;
  }

  // eslint-disable-next-line class-methods-use-this
  set(key, value) {
    localStorage.setItem(key, value);
  }

  // eslint-disable-next-line class-methods-use-this
  remove(key) {
    localStorage.removeItem(key);
  }
}

export default new Storage();
