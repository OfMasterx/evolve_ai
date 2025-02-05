import VoiceInput from './VoiceInput';
import AiSplineElement from './AiSplineElement';
import useVoiceInput from '../../hooks/useVoiceInput';
import useAudioProcessing from '../../hooks/useAudioProcessing';
import AiMessage from './AIMessage';
import FooterLinks from '../landing/FooterLinks';
import { useState } from 'react';

const AiAssistant = () => {
  const { listening, startListening } = useVoiceInput();
  const { circleSizeSpline } = useAudioProcessing(listening);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [AIMessage] = useState('Hello! My name is AISHA. How can I help you?');

  return (
    <div className="bg-black text-white w-full px-6 flex flex-col items-center">
      <div
        className={`border w-full items-center justify-center border-white-25 flex flex-col max-w-[1280px] min-[1920px]:max-w-[66.6vw] ${
          isSafari ? 'h-fit' : 'min-h-[596px] h-[calc(100vh-112px-112px)]'
        }`}
      >
        <AiMessage listening={listening} AIMessage={AIMessage} />
        <AiSplineElement
          listening={listening}
          startListening={startListening}
          circleSize={circleSizeSpline}
        />
        <VoiceInput listening={listening} startListening={startListening} />
      </div>
      <FooterLinks />
    </div>
  );
};

export default AiAssistant;
