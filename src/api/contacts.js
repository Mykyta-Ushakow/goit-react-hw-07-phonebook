import axios from 'axios';

axios.defaults.baseURL = 'https://6595509704335332df8274aa.mockapi.io/contacts';

export async function fetchContacts() {
  const data = await axios.get();

  return data;
}
