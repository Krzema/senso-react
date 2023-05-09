import { Parallax } from 'react-scroll-parallax';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-gradient-to-b from-white via-violet-100 to-sky-200 bg-repeat-round h-screen w-screen">
      <div className="container m-auto  ">{children}</div>
      <Parallax
        className="bg-[url(./cloud1.png)] h-[40rem] w-full absolute top-0 bg-cover"
        translateX={[10, -20]}
        translateY={[-50, 40]}
      />
      <Parallax
        className="bg-[url(./cloud2.png)] h-[40rem] w-full absolute top-0 bg-cover"
        translateX={[-10, 20]}
        translateY={[-30, 40]}
        scale={[0.4, 1.3]}
      />
    </div>
  );
}
