import React, { JSX, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Tab } from '../hooks/use-tabs';
import Image from 'next/image';

const transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.15,
};

type Props = {
  selectedTabIndex: number;
  tabs: Tab[];
  setSelectedTab: (input: [number, number]) => void;
};

const Tabs = ({
  tabs,
  selectedTabIndex,
  setSelectedTab,
}: Props): JSX.Element => {
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLButtonElement | null>>(
    [],
  );

  useEffect(() => {
    setButtonRefs((prev) => prev.slice(0, tabs.length));
  }, [tabs.length]);

  const navRef = useRef<HTMLDivElement>(null);
  const navRect = navRef.current?.getBoundingClientRect();

  const selectedRect = buttonRefs[selectedTabIndex]?.getBoundingClientRect();

  const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null);
  const hoveredRect =
    buttonRefs[hoveredTabIndex ?? -1]?.getBoundingClientRect();

  return (
    <nav
      ref={navRef}
      className="flex flex-shrink-0 justify-center items-center relative z-0 py-2"
      onPointerLeave={(e) => setHoveredTabIndex(null)}
    >
      {tabs.map((item, i) => {
        const isActive = hoveredTabIndex === i || selectedTabIndex === i;

        return (
          <motion.button
            key={i}
            className={classNames(
              'text-base relative font-Satoshi-Light gap-3 rounded-md flex flex-col items-center h-44 px-4 z-20 bg-transparent  cursor-pointer select-none transition-colors hover:text-white mb-0.5',
              {
                'text-white/60': !isActive, // Default color for non-active tabs
                'text-white/90': isActive, // Color for active tabs
              },
            )}
            ref={(el) => (buttonRefs[i] = el)}
            onPointerEnter={() => {
              setHoveredTabIndex(i);
            }}
            onFocus={() => {
              setHoveredTabIndex(i);
            }}
            onClick={() => {
              setSelectedTab([i, i > selectedTabIndex ? 1 : -1]);
            }}
          >
            <div className='w-32 h-32 bg-white/10 backdrop-blur-xl p-5 rounded-lg'>
                <div className='w-full h-full bg-[#252525] rounded-lg flex justify-center items-center'>
                    <Image 
                        src={isActive? item.activeIcon : item.icon}
                        alt='icon'
                        width={500}
                        height={500}
                        className='h-12 w-12'
                    />
                </div>
            </div>
            {item.label}
          </motion.button>
        );
      })}

      <AnimatePresence>
        {hoveredRect && navRect && (
          <motion.div
            key={'hover'}
            className="absolute p-1 mb-1 z-10 top-0 left-0 rounded-md "
            initial={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            animate={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 1,
            }}
            exit={{
              x: hoveredRect.left - navRect.left,
              y: hoveredRect.top - navRect.top,
              width: hoveredRect.width,
              height: hoveredRect.height,
              opacity: 0,
            }}
            transition={transition}
          />
        )}
      </AnimatePresence>

      {selectedRect && navRect && (
        <motion.div
          className={
            'absolute z-10 bottom-0 left-0.5 h-[3px] bg-yellow-50'
          }
          initial={false}
          animate={{
            width: selectedRect.width * 0.8,
            x: `calc(${selectedRect.left - navRect.left}px + 10%)`,
            opacity: 1,
          }}
          transition={transition}
        />
      )}
    </nav>
  );
};

export const Framer = { Tabs };