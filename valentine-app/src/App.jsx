import React, { useState } from 'react';
import './App.css'; // Archivo CSS para los estilos

const ValentineApp = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [showFinalYes, setShowFinalYes] = useState(false);
    
    const steps = [
        {
            message: "¿Quieres ser mi San Valentín vv? 💌",
            gif: '/cisne.gif'
        },
        {
            message: "¿Segura vv? 😢",
            gif: '/cordero.gif'
        },
        {
            message: "¿En serio me harás esto mami? 💔",
            gif: '/conejo.gif'
        },
        {
            message: "¡Piénsalo de nuevo vve! 🥺",
            gif: '/gato.gif'
        },
        {
            message: "¡Ahora si amor! 😊",
            gif: '/perro.gif'
        }
    ];

    const messageColors = ['#008000', '#000000', '#87CEEB', '#808080', '#800000'];

    const handleNo = () => {
        if (currentStep < 4) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleYes = () => {
        setShowFinalYes(true);
    };

    const resetApp = () => {
        setShowFinalYes(false);
        setCurrentStep(0);
    };

    if (showFinalYes) {
        return (
            <div className="container">
                <h1 className="congrats-text">
                    ¡Sabia que si amor!💖 para tu proximo regalo escibreme:"cartas de por vida"
                </h1>
                <img 
                    src="/final.gif" 
                    alt="Final GIF" 
                    className="gif"
                />
                <p className="message">¡Feliz San Valentín mami! 🥰</p>
                <button 
                    className="volver-button"
                    onClick={resetApp}>
                    Volver al inicio
                </button>
            </div>
        );
    }

    return (
        <div className="container">
            <img 
                src={steps[currentStep].gif} 
                alt="Step GIF" 
                className="gif"
            />
            
            <h1 className="title" style={{ color: messageColors[currentStep] }}>
                {steps[currentStep].message}
            </h1>

            <div className="buttons-container">
                <button 
                    className="button yes-button"
                    onClick={handleYes}>
                    Sí 💖
                </button>

                {currentStep < 4 && (
                    <button 
                        className="button no-button"
                        onClick={handleNo}>
                        No 😢
                    </button>
                )}
            </div>
        </div>
    );
};

export default ValentineApp;