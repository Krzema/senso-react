import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <div id="aboutme" className="pt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">O mnie</h2>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              translateX: 40,
              translateY: 40,
            }}
          >
            <img src="/images/about_me_1.png" alt="O mnie" className="" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              translateX: -40,
              translateY: 0,
            }}
          >
            <img src="/images/about_me_2.png" alt="O mnie" className="" />
          </motion.div>
        </div>
        <div className="">
          <p className="mb-2">
            Jestem pedagogiem specjalnym, terapeutą wczesnego wspomagania
            rozwoju dziecka, a także certyfikowanym terapeutą Metody
            Krakowskiej.
          </p>
          <p className="mb-2">
            Udział w różnorodnych kursach i szkoleniach pozwolił mi zebrać
            wiedzę i umiejętności do prowadzenia terapii, w sposób obejmujący
            wszystkie obszary rozwoju.
          </p>
          <p className="mb-2">
            Doświadczenie zdobywałam, pracując w przedszkolu terapeutycznym, a
            także będąc mamą na pełen etat 😉
          </p>
          <p className="mb-2">
            W swojej pracy terapeutycznej staram się angażować wszystkie zmysły
            dziecka. Ważne jest dla mnie podejście bliskościowe oraz pozytywne
            relacje.
          </p>
        </div>
      </div>
    </div>
  );
}
