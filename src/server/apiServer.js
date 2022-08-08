import axios from "axios";

export class apiService {
  static serverUrl = `http://localhost:9000`;

  static getAllContacts = () => {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.get(dataUrl);
  };

  static getContact = (contactId) => {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
  };

  static editContact = (contactId) => {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl);
  };

  static getGroups = () => {
    let dataUrl = `${this.serverUrl}/groups`;
    return axios.get(dataUrl);
  };

  static getGroupId = (groupId) => {
    let dataUrl = `${this.serverUrl}/groups/${groupId}`;
    return axios.get(dataUrl);
  };

  static addContact = (contact) => {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.post(dataUrl, contact);
  };

  static updateContact = (contact, contactId) => {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
  };

  static deleteCotact = (contactId) => {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
  };
}
