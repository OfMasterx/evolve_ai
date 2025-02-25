import { useState, useRef } from 'react';

const useVoiceInput = () => {
  const [listening, setListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startListening = async () => {
    if (listening) {
      stopListening();
      return;
    }

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert(`Your browser does not support voice input  😞`);
      return;
    }

    recognitionRef.current = new SpeechRecognitionAPI();
    recognitionRef.current.lang = 'uk-UA';
    recognitionRef.current.interimResults = false;

    recognitionRef.current.onstart = () => {
      setListening(true);
      setRecognizedText('');
    };

    recognitionRef.current.onend = () => {
      setListening(false);
    };

    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript;
      setRecognizedText(text);
    };

    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  return { listening, recognizedText, startListening, stopListening };
};

export default useVoiceInput;
