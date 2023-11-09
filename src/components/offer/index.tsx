import PriceItem from './price-item';
import OfferItem from './offer-item';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function offer() {
  const offersVar = {
    visible: {
      transition: {
        staggerChildren: 0.5
      }
    }
  };
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div id="offer" className="pt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Oferta</h2>
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={offersVar}
        className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <OfferItem title="Zajęcia matematyczne Numicon®" />
        <OfferItem title="Terapia dzieci z dysleksją i trudnościami szkolnymi" />
        <OfferItem
          title="Terapia funkcji poznawczych dla dzieci z trudnościami w rozwoju
          (Metoda Krakowska)"
        />
        <OfferItem title="Symultaniczno - Sekwencyjna Nauka Czytania®" />
        <OfferItem title="Zajęcia sensoryczne Smykomultisensoryka®" />
      </motion.ul>
      <h2 className="text-3xl font-semibold text-center mb-6 mt-8">Cennik</h2>
      <h3 className="text-xl text-center m-3">Zajęcia terapeutyczne</h3>
      <ul className="grid grid-cols-2 gap-4 sm:mx-28">
        <PriceItem title="Zajęcia terapeutyczne" price="100" duration="45" />
        <PriceItem title="Zajęcia terapeutyczne" price="120" duration="60" />
        <PriceItem title="Zajęcia terapeutyczne" price="180" duration="120" />
        <PriceItem title="Konsultacja" price="120" duration="60" />
      </ul>
      <h3 className="text-xl text-center m-3">Fizjoterapia</h3>
      <ul className="grid gap-4 mx-20 sm:mx-56">
        <PriceItem title="Fizjoterapia" price="150" duration="60" />
      </ul>
    </div>
  );
}
