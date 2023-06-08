import { motion } from 'framer-motion';

export default function OfferItem({ title }: { title: string }) {
  return (
    <motion.li
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
      }}
      className="bg-indigo-100 text-center text-sm font-semibold text-sky-800 p-2 rounded-lg"
    >
      {title}
    </motion.li>
  );
}
