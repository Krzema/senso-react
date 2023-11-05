import { motion } from 'framer-motion';

export default function OfferItem({ title }: { title: string }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <motion.li
      key={title}
      variants={item}
      className="bg-indigo-100 text-center flex items-center justify-center text-sm font-semibold text-sky-800 p-2 rounded-lg h-24"
    >
      {title}
    </motion.li>
  );
}
