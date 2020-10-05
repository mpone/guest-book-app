import React, { useState, useEffect } from 'react';
// import './App.scss';

import { Header } from './components/Header';
import { MessageForm } from './components/MessageForm';
import { MessagesList} from './components/MessagesList';

import messagesFromServer from './api/messages.json';
const API_URL = 'http://localhost:5000/api';

function App() {
  const [messagesList, setMessagesList] = useState([]);
  // const [test, setTest] = useState([]);

  useEffect(
    () => {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => setMessagesList(data))
    }, [],
  );

  // useEffect(
  //   () => setMessagesList(messagesFromServer),
  //   [],
  // );

  useEffect(() => console.log(messagesList), [messagesList]);

  const addMessage = (name, text) => {
    setMessagesList([
      ...messagesList,
      {
        messageId: String(messagesList.length + 1),
        name,
        text,
        date: new Date(),
      },
    ]);
  }

  return (
    <div className="App">
      <section className="content">
        <Header />

        <main className="main">
          <MessagesList
            list={messagesList}  
          />

          <MessageForm
            addMessage={addMessage}
          />
        </main>
      </section>

    </div>
  );
}

export default App;
