import React, { useState } from 'react';
import PamelaAvatar from '../assets/FitAvatarAssis.png';
import fitAvatar from '../assets/FitAvatar.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Iaview from '../components/Iaview';
import Userview from '../components/Userview';

const Pamela = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const url = `http://localhost:5114/chat`;

    const handleSubmit = async () => {
        if (message.trim() === "") return;
        setLoading(true);
        try {
            const response = await axios.post(url, { question: message });
            handleSpeak(response.data.answer)
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'user', text: message },
                { sender: 'ia', text: response.data.answer }
            ]);
        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
        setMessage("");
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };
    const handleSpeak = (text) => {
        if ('speechSynthesis' in window) {
          const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'fr-FR'; // Définir la langue sur français
          synth.speak(utterance);
        } else {
          alert("Votre navigateur ne supporte pas la synthèse vocale.");
        }
      };

    return (
        <div className="text-center w-screen">
            <div className="text-center text-gray-500 dark:text-gray-400 absolute">
                <Link to='/fit'>
                    <img className="mx-auto mb-4 w-16 h-16 rounded-full" src={fitAvatar} alt="Fit" />
                </Link>
            </div>
            <div className="grid w-full place-items-center overflow-x-scroll rounded-lg p-2 lg:overflow-visible">
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={PamelaAvatar} alt="Pamela" />
                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pamela</h3>
                </div>
            </div>
            <div className="container mx-auto my-10 p-3 bg-gray-100 rounded shadow-lg w-3/4">
                <div className="chat-window h-auto">
                <Iaview data = {"Hi i'm Pamela your personal nurse assistant"} src= {PamelaAvatar}/>
                    {messages.map((message, index) => (
                        message.sender === 'user' ? <Userview data = {message.text}/> : <Iaview data = {message.text} src= {PamelaAvatar}/>
                    ))}
                    {loading && (
                        <div className="flex justify-center items-center mt-4">
                            <div className="w-8 h-8 border-4 border-gray-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                        </div>
                    )}
                </div>
                <div className="mt-2 sticky">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Message Pamela</label>
                    <div className="">
                        <input
                            type="text"
                            id="message"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-100 rounded-2xl bg-gray-50 focus:ring-green-200 focus:border-green-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                            placeholder="Message Pamela"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            type="submit"
                            className="text-white absolute right-2.5 bottom-1 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-12 w-12"
                            onClick={handleSubmit}
                        >
                            <svg className="w-4 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pamela;
