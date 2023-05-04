import { Lightbulb, Leaf, HandHeart } from '@phosphor-icons/react';

export function IconItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center ">
      <i className="text-6xl text-sky-500">{children}</i>
      <p className="text-xl font-semibold">{title}</p>
    </div>
  );
}

export default function IconSection() {
  return (
    <div className="flex flex-wrap justify-around p-4 sm:p-8">
      <IconItem title="kreatywnie">
        <Lightbulb />
      </IconItem>
      <IconItem title="spokojnie">
        <Leaf weight="thin" />
      </IconItem>
      <IconItem title="bezpiecznie">
        <HandHeart weight="thin" />
      </IconItem>
    </div>
  );
}

