import { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client'; // Importera korrekt
import '../styles/LiveChat.css';

function LiveChat() {
    const [messages, setMessages] = useState([]);
    const messageInputRef = useRef();
    const messageContainerRef = useRef();
    const socketRef = useRef();

    useEffect(() => {
        const socket = io('http://localhost:3000'); // Anslut till servern
        socketRef.current = socket;

        const name = prompt('What is your name?') || 'Anonymous';
        appendMessage('You joined');
        socket.emit('new-user', name);

        socket.on('chat-message', (data) => {
            appendMessage(`${data.name}: ${data.message}`);
        });

        socket.on('user-connected', (name) => {
            appendMessage(`${name} connected`);
        });

        socket.on('user-disconnected', (name) => {
            appendMessage(`${name} disconnected`);
        });

        return () => {
            socket.disconnect(); // Koppla bort socket när komponenten unmountas
        };
    }, []);

    const appendMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        const message = messageInputRef.current.value;
        if (message.trim()) {
            appendMessage(`You: ${message}`);
            socketRef.current.emit('send-chat-message', message);
            messageInputRef.current.value = '';
        }
    };

    return (
        <>
            <div id="message-container" ref={messageContainerRef}>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <form id="send-container" onSubmit={sendMessage}>
                <input type="text" id="message-input" ref={messageInputRef} />
                <button type="submit" id="send-button">Send</button>
            </form>
        </>
    );
}

export default LiveChat;