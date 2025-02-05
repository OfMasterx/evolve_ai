const VoiceInput: React.FC<{
  listening: boolean;
  startListening: () => void;
}> = ({ listening, startListening }) => {
  return (
    <div className="relative flex w-full flex-col items-center font-chivo-mono-light uppercase">
      <p className="text-white mb-4 text-lg">
        {listening ? 'Listening' : 'Press to Talk'}
      </p>
      <button
        onClick={startListening}
        className="relative flex items-center justify-center h-[48px] w-[48px] transition-opacity duration-300"
      >
        <div className={`absolute inset-0 `}></div>
        <img
          src={
            listening
              ? `${import.meta.env.BASE_URL}microOff.svg`
              : `${import.meta.env.BASE_URL}microOn.svg`
          }
          alt={listening ? 'Microphone On' : 'Microphone Off'}
          className="w-12 h-12 opacity-25 transition-opacity duration-300 ease-out hover:opacity-100"
        />
      </button>
    </div>
  );
};

export default VoiceInput;
