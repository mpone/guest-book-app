import React, { useState, useEffect } from 'react';
import './App.scss';

import { Header } from './components/Header';
import { MessageForm } from './components/MessageForm';
import { MessagesList} from './components/MessagesList';

import { getMessages, addMessage } from './api/messagesApi';

function App() {
  const [messagesList, setMessagesList] = useState([]);

  const getMessagesFromServer = async () => {
    const data = await getMessages();

    return setMessagesList(data);
  }

  useEffect(() => getMessagesFromServer(), []);

  const addMessageToServer = async (text, name) => {
    await addMessage(text, name);
    getMessagesFromServer();
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
            addMessageToServer={addMessageToServer}
          />
        </main>
      </section>

    </div>
  );
}

export default App;
