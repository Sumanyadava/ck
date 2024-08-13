import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value based on when you want the animation to trigger
  });

  return { ref, inView };
};
