import PriceItem from './price-item';
import OfferItem from './offer-item';

export default function offer() {
  return (
    <div id="offer" className="pt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Oferta</h2>
      <ul className="flex gap-2">
        <OfferItem title="Zajęcia matematyczne Numicon®" />
        <OfferItem title="Terapia dzieci z dysleksją i trudnościami szkolnymi" />
        <OfferItem
          title="Terapia funkcji poznawczych dla dzieci z trudnościami w rozwoju
          (Metoda Krakowska)"
        />
        <OfferItem title="Symultaniczno - Sekwencyjna Nauka Czytania®" />
        <OfferItem title="Zajęcia sensoryczne Smykomultisensoryka®" />
      </ul>
      <h2 className="text-3xl font-semibold text-center mb-6 mt-8">Cennik</h2>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <PriceItem title="Zajęcia terapeutyczne" price="100" duration="45" />
        <PriceItem title="Zajęcia terapeutyczne" price="120" duration="60" />
        <PriceItem title="Zajęcia terapeutyczne" price="180" duration="120" />
        <PriceItem title="Konsultacja" price="120" duration="60" />
      </ul>
    </div>
  );
}
