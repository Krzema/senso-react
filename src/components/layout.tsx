import { Parallax } from 'react-scroll-parallax';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="absolute bg-gradient-to-b from-white via-violet-100 to-sky-200
        bg-repeat-round h-3/5 w-full -z-20"
      ></div>
      <Parallax
        className="bg-[url(./cloud1.png)] h-3/6 w-screen bg-center absolute bg-contain bg-no-repeat top-0 -z-10"
        translateX={[80, -50]}
        translateY={[-90, 40]}
        opacity={[5, -1]}
        scale={[0.5, 1.2]}
      />
      <Parallax
        className="bg-[url(./cloud2.png)] h-3/6  w-screen bg-center absolute bg-contain bg-no-repeat top-0 -z-10"
        translateX={[-80, 50]}
        translateY={[-90, 40]}
        opacity={[5, -1]}
        scale={[0.5, 1.4]}
      />
      <div className="max-w-3xl m-auto px-8 lg:px-0">{children}</div>
    </div>
  );
}
