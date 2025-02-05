import { useState, useRef, useEffect } from 'react';

const useAudioProcessing = (listening: boolean) => {
  const [circleSizeSpline, setCircleSizeSpline] = useState(20);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const isProcessingRef = useRef<boolean>(false);
  const lastUpdateRef = useRef<number>(Date.now());

  useEffect(() => {
    if (listening) {
      startAudioProcessing();
    } else {
      stopAudioProcessing();
    }
  }, [listening]);

  const startAudioProcessing = async () => {
    try {
      if (
        audioContextRef.current &&
        audioContextRef.current.state !== 'closed'
      ) {
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      const gainNode = audioContext.createGain();

      microphone.connect(gainNode);
      gainNode.connect(analyser);
      analyser.fftSize = 512;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      microphoneRef.current = microphone;
      isProcessingRef.current = true;

      const processVolume = () => {
        if (!isProcessingRef.current) return;

        const now = Date.now();
        if (now - lastUpdateRef.current < 50) {
          requestAnimationFrame(processVolume);
          return;
        }

        analyser.getByteTimeDomainData(dataArray);

        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          const value = (dataArray[i] - 128) / 128;
          sum += value * value;
        }

        const rms = Math.sqrt(sum / bufferLength);
        const targetSize = Math.max(80, Math.min(250, 80 + rms * 600));

        setCircleSizeSpline(
          (prevSize) => prevSize + (targetSize - prevSize) * 0.8
        );

        lastUpdateRef.current = now;
        requestAnimationFrame(processVolume);
      };

      processVolume();
    } catch (error) {
      console.error('Microphone access error', error);
    }
  };

  const stopAudioProcessing = () => {
    isProcessingRef.current = false;

    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }

    analyserRef.current = null;
    microphoneRef.current = null;

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
  };

  return { circleSizeSpline };
};

export default useAudioProcessing;
