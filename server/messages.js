let messages = [
  {
    messageId: 1,
    name: "Bill",
    text: "That's my first message.",
  },
  {
    messageId: 2,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 3,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 4,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 5,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 6,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 7,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 8,
    name: "John",
    text: "That's my first message after Bill.",
  },  {
    messageId: 9,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 10,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 11,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 12,
    name: "John",
    text: "That's my first message after Bill.",
  },
  {
    messageId: 13,
    name: "John",
    text: "Test.",
  },
];

const getMessages = () => {
  return messages;
};

const addMessage = (text, name) => {
  const newMessage = {
    messageId: messages.length + 1,
    text,
    name,
    date: new Date(),
  };

  messages = [...messages, newMessage];
};

module.exports = {
  getMessages,
  addMessage,
};
