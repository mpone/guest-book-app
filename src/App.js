import React, { useState, useEffect } from 'react';
import './App.scss';

import { Header } from './components/Header';
import { MessageForm } from './components/MessageForm';
import { MessagesList} from './components/MessagesList';

function App() {
  const [messagesList, setMessagesList] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:5000/api/messages')
      .then(response => response.json())
      .then(data => setMessagesList(data))
    }, [],
  );

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
