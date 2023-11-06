import { motion, useScroll, useTransform } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const cloudsHeight = 600;
  const { scrollY } = useScroll({ offset: [0, cloudsHeight] })
  const scaleChange = useTransform(scrollY, [0, cloudsHeight], [1, 1.5])
  const translateXChange = useTransform(scrollY, [0, cloudsHeight], [80, 250])
  const translateYChange = useTransform(scrollY, [0, cloudsHeight], [-20, 60])
  const opacityChange = useTransform(scrollY, [0, cloudsHeight], [1, 0.3])

  const scaleChange2 = useTransform(scrollY, [0, cloudsHeight], [1, 1.4])
  const translateXChange2 = useTransform(scrollY, [0, cloudsHeight], [-50, -200])
  const translateYChange2 = useTransform(scrollY, [0, cloudsHeight], [-70, 100])
  const opacityChange2 = useTransform(scrollY, [0, cloudsHeight], [1, 0.3])
  return (
    <div>
      <div className='w-full h-full overflow-hidden absolute -z-10'>
        <div
          className="absolute bg-gradient-to-b from-white via-violet-100 to-sky-100
          bg-repeat-round h-3/5 w-full"
        ></div>
        <motion.div
          className="bg-[url(/images/cloud1.png)] h-[30rem] w-full bg-center bg-contain absolute bg-no-repeat top-1"
          style={{ scale: scaleChange, translateX: translateXChange, translateY: translateYChange, opacity: opacityChange }}
        />
        <motion.div
          className="bg-[url(/images/cloud2.png)] h-[30rem] w-full bg-center bg-contain absolute bg-no-repeat top-10"
          style={{ scale: scaleChange2, translateX: translateXChange2, translateY: translateYChange2, opacity: opacityChange2 }}
        />
      </div>
      <div className="max-w-3xl m-auto px-8 lg:px-0">{children}</div>
    </div>
  );
}
