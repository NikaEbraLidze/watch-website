import React, {useState} from "react";
import AlertSuccess from "./AlertSucces";

export default function ContactForm(){
    const [input, setInput] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    });
    const [sent, setSent] = useState(false);
        

    function handleSubmit (e) {
        e.preventDefault();
        setInput({
            name: "",
            email: "",
            number: "",
            subject: "",
            message: ""
        });
        setSent(true);
    };

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevNote => {
        return {
            ...prevNote,
            [name]: value
        };
        });
    }

    return(<>
        {sent && <AlertSuccess />}
        <form onSubmit={handleSubmit}>
            <input 
                name="name" 
                type="text" 
                placeholder="name*" 
                value={input.name}
                onChange={handleChange}
            />
            <input 
                name="email" 
                type="email" 
                placeholder="email*" 
                value={input.email}
                onChange={handleChange}
            />
            <input 
                name="number" 
                type="text" 
                placeholder="phonenumber*" 
                value={input.number}
                onChange={handleChange}
            />
            <input 
                name="subject" 
                type="text" 
                placeholder="subject*" 
                value={input.subject}
                onChange={handleChange}
            />
            <textarea 
                name="message" 
                type="text" 
                placeholder="message*" 
                className="message" 
                value={input.message}
                onChange={handleChange}
            /> 

            <button type="submit">Send</button>
        </form>
    </>)
}