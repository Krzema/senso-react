import { At, MapPin, PhoneCall } from '@phosphor-icons/react';

export default function Ofert() {
  return (
    <div id="contact" className="pt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Kontakt</h2>
      <div className='grid gap-2 text-center '>
        <div className='bg-gray-50 rounded-xl border border-slate-300 shadow-md '>
          <div className="flex flex-col gap-5 text-xl items-center p-5">
            <div className='flex gap-2 items-center'>
              <MapPin className='text-green-600 text-3xl font-bold ' weight="duotone" />
              <div className='font-bold'>
                <p>ul. Rzeszowska 2A/1</p>
                <p>60-468 Poznań</p>
              </div>
            </div>
            <p className='flex gap-2 font-bold' ><PhoneCall className='text-yellow-700  text-3xl' weight="duotone" />
              <a className='text-sky-900' href='tel:+48607554363'>607-554-363</a>
            </p>
            <p className='flex gap-2 font-bold' ><At className='text-pink-900  text-3xl' weight="duotone" />
              <a className='text-sky-900' href='mailto:kantorska.aleksandra@gmail.com'>info@sensoslowka.pl</a>
            </p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.4103607651077!2d16.84779507703151!3d52.453595241143454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044391d91371df%3A0xaf5f9d6fe4ba88c1!2sRzeszowska%202A%2F1%2C%2060-468%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1699225056588!5m2!1spl!2spl"
            className='w-full h-[300px] mt-4 rounded-b-xl' loading="lazy" ></iframe>
        </div>
      </div>
    </div>
  );
}
