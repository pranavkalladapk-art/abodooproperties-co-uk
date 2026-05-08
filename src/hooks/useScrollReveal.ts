import { useInView } from 'react-intersection-observer';

export default function useScrollReveal(options = {}) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true, ...options });
  return { ref, inView };
}
