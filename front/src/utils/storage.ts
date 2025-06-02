export class Storage {
  static get = <T = unknown>(key: string) => {
    try {
      return JSON.parse(String(localStorage.getItem(key))) as T;
    } catch {
      return localStorage.getItem(key) as T;
    }
  };

  static set = (key: string, value: string | object) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
      return;
    }

    localStorage.setItem(key, String(value));
  };

  static clear = () => {
    localStorage.clear();
  };
}
