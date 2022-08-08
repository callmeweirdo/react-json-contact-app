import axios from "axios";

export class apiService {
  static serverUrl = `http://localhost:9000`;

  static getAllContacts = () => {
    const defaltUrl = `${this.serverUrl}/contacts`;
    return axios.get(defaltUrl);
  };
}
