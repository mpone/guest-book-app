const API_URL = process.env.REACT_APP_API_URL;
const MESSAGES_URL = `${API_URL}/messages`;

export const getMessages = async () => {
  const response = await fetch(MESSAGES_URL);
  
  return response.json();
};

export const addMessage = async (text, name) => {
  const response = await fetch(MESSAGES_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      text,
      name,
    }),
  });
  
  return response.json();
};