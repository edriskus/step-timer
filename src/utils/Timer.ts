import { useState, useRef, useCallback, useEffect } from "react";

interface Options {
  duration: number;
  autoStart?: boolean;
}

export function useTimer({ duration, autoStart }: Options) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const onPause = useCallback(() => {
    clearTimeout(timer.current as any);
    setRunning(false);
  }, []);

  const nextTimeout = useCallback(() => {
    timer.current = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft => timeLeft - 1);
      }
    }, 1000);
  }, [timeLeft]);

  const onStart = useCallback(() => {
    if (running === false) {
      setRunning(true);
      nextTimeout();
    }
  }, [nextTimeout, running]);

  useEffect(() => {
    if (autoStart) {
      onStart();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (running && timeLeft > 0) {
      nextTimeout();
    } else if (running) {
      setRunning(false);
    }
    // eslint-disable-next-line
  }, [timeLeft]);

  return { timeLeft, running, onPause, onStart };
}
