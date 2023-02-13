import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';

export default function Home () {
    const [texts, setTexts] = useState<Array<string>>();
    const [input, setInput] = useState<string>();

    useEffect(() => {
        fetchTexts().then(setTexts);
    }, [])


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(input?.length){
            await axios.post('http://localhost:3001/texts', {
            text: input
            })
            setInput("");
            fetchTexts().then(setTexts);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }

    
    const fetchTexts = async () => {
        const response = await axios.get<Array<string>>('http://localhost:3001/texts');
        return response.data;
    }

    return(
        <div className="home">
            <form onSubmit={handleSubmit}>
                <textarea 
                    onChange={handleChange} 
                    value={input} 
                    name="input-text"
                    placeholder="Escriba el texto que desea guardar"/>
                <button>Guardar Texto</button>
            </form>

            <div className="saveTexts-container">
                <h2>Textos Guardados</h2>
                <div className="save-texts">
                    {texts?.length ? texts.map((text, i) => {
                        return(
                            <div  
                                key={i}
                                className="text-card"
                            > {text} </div>
                        )
                    }) : <span> No hay textos disponibles </span>}
                </div>
            </div>
        </div>
    )
}