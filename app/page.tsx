'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from '../components/IntroScreen';
import VibeCheckLanding from '../components/VibeCheckLanding';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <IntroScreen onEnter={() => setShowIntro(false)} />
        )}
      </AnimatePresence>
      {!showIntro && <VibeCheckLanding />}
    </>
  );
}