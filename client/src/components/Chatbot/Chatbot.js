import React, { useState } from 'react'
import './chatbot.css'
import ReactScrollToBottom from 'react-scroll-to-bottom'

function Chatbot() {
    const [msg , setMessage] = useState("")
    const chatBox = document.querySelector(".chat-box");
    const inputField = document.querySelector("#msgInput");
    const chatBoxBody = document.querySelector(".chat-box-body");

    function scrollToBottom() {
        chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
    }
    const sendMessage = () => {
        var message = msg;
        inputField.value = "";
        setMessage("")
        chatBoxBody.innerHTML += `<div class="message"><p>${message}</p></div>`;
        chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`;
        scrollToBottom();
        window.dotsGoingUp = true;
        var dots = window.setInterval(function () {
            var wait = document.getElementById("loading");
            if (window.dotsGoingUp)
                wait.innerHTML += ".";
            else {
                wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
                if (wait.innerHTML.length < 2)
                    window.dotsGoingUp = true;
            }
            if (wait.innerHTML.length > 3)
                window.dotsGoingUp = false;
        }, 250);

        fetch('http://localhost:8080/chatbot/message', {
            method: 'POST',
            headers: {
                accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        }).then(response => {
            return response.json();
        }).then(data => {
            document.getElementById("loading").remove();
            chatBoxBody.innerHTML += `<div class="response">BOT : ${data.message}</div>`;
            scrollToBottom();
        })
    }

    const onChange = (e)=>{
        setMessage(e.target.value)
    }


    return (
        <div className='container1'>
            <div className="chat-box">
                <div className="chat-box-header">
                    Chatbox
                </div>
                    {/* <div className="chat-box-body"></div> */}
                    <ReactScrollToBottom className="chat-box-body">
                       
                    </ReactScrollToBottom>
                <div className="chat-box-footer">
                    <input id="msgInput" type="text" placeholder="Type a message...." onChange={onChange}/>
                    <button id='button' onClick={sendMessage}> Send</button>
                </div>
            </div>

        </div>
    )
}

export default Chatbot
