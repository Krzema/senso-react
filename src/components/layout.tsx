import { Parallax } from 'react-scroll-parallax';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="absolute bg-gradient-to-b from-white via-violet-100 to-sky-200
        bg-repeat-round h-screen w-full -z-20"
      ></div>
      <Parallax
        className="bg-[url(./cloud1.png)] h-screen w-screen bg-center absolute bg-contain bg-no-repeat top-0 -z-10"
        translateX={[50, -50]}
        translateY={[-70, 40]}
      />
      <Parallax
        className="bg-[url(./cloud2.png)] h-screen w-screen bg-center absolute bg-contain bg-no-repeat top-0 -z-10"
        translateX={[-50, 50]}
        translateY={[-50, 40]}
        scale={[0.4, 1.3]}
      />
      <div className="container m-auto">{children}</div>
    </div>
  );
}
