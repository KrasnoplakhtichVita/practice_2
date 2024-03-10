import axios from 'axios';

const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work';

export async function getContacts() {
  try {
    const res = await axios.get(`${BASE_URL}/contacts`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getContactById(id) {
  const res = await axios.get(`${BASE_URL}/contacts/${id}`);
  console.log(res);
}

export async function createContact(userData) {
  const res = await axios.post(`${BASE_URL}/contacts`, userData);
  console.log(res);
}

export async function changeContact(id, userData) {
  const res = await axios.put(`${BASE_URL}/contacts/${id}`, userData);
  console.log(res);
}

export async function deleteContactById(id) {
  const res = await axios.delete(`${BASE_URL}/contacts/${id}`);
  console.log(res);
}
