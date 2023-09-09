export default function Schedule() {
  return (
    <section id="schedule" className="w-full relative">
      <div
        className="w-full relative flex flex-col justify-center items-center
      before:bg-umbracle-2 before:bg-no-repeat before:bg-cover 
      before:bg-bottom before:absolute before:-z-10 before:left-0 before:right-0
      before:h-full before:w-full before:block"
      >
        <div className="w-full flex justify-center items-end title-schedule pl-10 z-20 pt-20 pb-60">
          <p className="font-agencyGothicCTBold text-7xl w-full text-right sm:text-9xl text-shadow pr-20 text-white">
            Programación
          </p>
        </div>
        <div className="bg-no-repeat bg-cover bg-bottom text-white p-5 sm:px-20 pb-20">
          <ul className="list-disc text-2xl sm:text-4xl font-bold ml-8 flex flex-col gap-10 text-shadow">
            <li>17:00. Apertura de puertas.</li>
            <li>17:05. Photocall.</li>
            <li>17:10. Bebercio y comercio.</li>
            <li>
              18:30. Podcast en directo La Retícula con tertulia y preguntas del
              público.
            </li>
            <li>19:30. Bebercio y comercio.</li>
            <li>19:45. Puesta de Sól New Babbage.</li>
            <li>
              21:00. <span className="text-[#FF0026]">30K</span> Castillo de
              fuegos artificiales a cargo de la pirotécnia Caballer y fin del
              evento.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
