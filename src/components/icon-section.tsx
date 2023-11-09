import { Lightbulb, Leaf, HandHeart } from '@phosphor-icons/react';

export function IconItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <i className="text-4xl sm:text-7xl text-sky-500">{children}</i>
      <p className="text-lg font-semibold capitalize"><span className='text-sky-700'>{title.substring(0,1)}</span>{title.substring(1)}</p>
    </div>
  );
}

export default function IconSection() {
  return (
    <div className="flex flex-wrap justify-around items-center">
      <IconItem title="kreatywnie">
        <Lightbulb weight="duotone" />
      </IconItem>
      <IconItem title="spokojnie">
        <Leaf weight="duotone" />
      </IconItem>
      <IconItem title="bezpiecznie">
        <HandHeart weight="duotone" />
      </IconItem>
    </div>
  );
}
