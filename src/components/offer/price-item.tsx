import { Coins, Clock } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PriceItem({
  title,
  price,
  duration,
}: {
  title: string;
  price: string;
  duration: string;
}) {
  const [overState, setOverState] = useState(false);

  const variants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: [1.2, 1.2, 1.2, 1.2, 1],
      rotate: [10, -10, 10, -10, 0],
      transition: {
        duration: 0.4,
      },
    },
  }
  return (
    <li className="border border-slate-300 p-3 shadow-md rounded-lg grid grid-row-3 gap-1 text-center bg-violet-100 cursor-default"
      onMouseEnter={() => setOverState(true)} >
      <div className="text-sm">{title}</div>
      <div className="text-2xl font-semibold text-sky-800 flex justify-center items-center gap-2 ">
        <motion.div animate={overState ? 'hover' : 'initial'} onAnimationComplete={() => setOverState(false)} variants={variants} >
          <Coins className="text-yellow-600" weight="duotone" />
        </motion.div>
        {price} zł
      </div>
      <div className="text-sm  flex justify-center items-center gap-1 ">
        <Clock weight="duotone" />
        {duration}min
      </div>
    </li>
  );
}
