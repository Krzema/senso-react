import { Coins, Clock } from '@phosphor-icons/react';

export default function PriceItem({
  title,
  price,
  duration,
}: {
  title: string;
  price: string;
  duration: string;
}) {
  return (
    <li className="border border-slate-900 p-3 rounded-lg grid grid-row-3 gap-1 text-center bg-violet-100">
      <div className="text-sm">{title}</div>
      <div className="text-2xl font-semibold text-sky-800 flex justify-center items-center gap-2 ">
        <Coins className="text-yellow-600" weight="duotone" />
        {price} zł
      </div>
      <div className="text-sm  flex justify-center items-center gap-1 ">
        <Clock weight="duotone" />
        {duration}min
      </div>
    </li>
  );
}
