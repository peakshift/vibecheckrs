'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const purp = "#A78BFA";
const sailor = "#0D1329";
const ink = "#FFFFFF";
const sub = "#A5B4FC";

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      setTimeout(() => setShowContent(true), 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 overflow-y-auto"
      style={{ backgroundColor: sailor }}
    >
      <div className="min-h-screen flex items-center justify-center py-8 px-6">
        <div className="max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {!loadingComplete ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 h-20 mb-8">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-t-transparent"
                  style={{ borderColor: `${purp}33`, borderTopColor: purp }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <motion.p
                className="text-sm uppercase tracking-widest"
                style={{ color: sub }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Checking vibes...
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {showContent && (
                <>
                  <motion.h1
                    initial={{ 
                      opacity: 0,
                      filter: "blur(20px)",
                      y: 20
                    }}
                    animate={{ 
                      opacity: 1,
                      filter: "blur(0px)",
                      y: 0
                    }}
                    transition={{ 
                      delay: 0.3,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className="text-4xl md:text-5xl mb-8"
                    style={{ 
                      fontFamily: '"SF Compact Display", Inter, system-ui',
                      fontWeight: 1000,
                      color: ink 
                    }}
                  >
                    You've made it here.
                  </motion.h1>
                  
                  <motion.div
                    className="space-y-6 text-xl md:text-2xl leading-relaxed font-light"
                    style={{ 
                      color: sub,
                      fontFamily: 'Inter, system-ui'
                    }}
                  >
                    {[
                      "That already sets you apart. Most keep shipping at breakneck speed, never stopping to think about what holds the engine together. The fact that you're here means you care — and we respect that.",
                      "In this new dawn of cheap functions, code feels like magic. Whole empires stitched from spells, your own army of robots running at your command. But every builder knows: speed wears down the machine. One loose bolt, one overlooked line, and the whole system can spin out. And too often, you're left to face that risk alone.",
                      "That's why we exist. The VIBE/CHECKRS.",
                      "We're your mechanics — the pit crew for your empire of code. We're under the hood, checking the pressure, tuning the flow, tightening what others miss. Not to slow you down — but to keep you racing without the crash."
                    ].map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ 
                          opacity: 0,
                          filter: "blur(15px)",
                          y: 15
                        }}
                        animate={{ 
                          opacity: 1,
                          filter: "blur(0px)",
                          y: 0
                        }}
                        transition={{ 
                          delay: 0.8 + index * 0.2,
                          duration: 0.6,
                          ease: "easeOut"
                        }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      delay: 2.2,
                      duration: 0.6
                    }}
                    className="pt-8 flex justify-start"
                  >
                    <button
                      onClick={onEnter}
                      className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: purp, 
                        color: sailor
                      }}
                    >
                      Enter
                    </button>
                  </motion.div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}