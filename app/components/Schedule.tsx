export default function Schedule() {
  return (
    <section id="schedule">
      <div className="w-full relative bg-new-babbage-1 bg-bottom bg-cover -z-30">
        <div className="absolute w-full h-60 top-0 bg-gradient-to-b from-black to-transparent -z-20"></div>
        <div className="bg-gradient-to-bl from-bg-principal from-[50%] to-transparent to-[51%] h-32"></div>
        <div className="flex justify-center p-5 2xl:p-0">
          <div className="max-w-screen-2xl w-full text-white">
            <p className="font-agencyGothicCTBold text-7xl w-full sm:text-9xl text-shadow text-white">
              Programación
            </p>
            <ul className="list-square text-2xl sm:text-4xl font-bold ml-8 flex flex-col gap-10 mt-20 text-shadow">
              <li>17:00. Apertura de puertas.</li>
              <li>17:05. Photocall.</li>
              <li>17:10. Bebercio y comercio.</li>
              <li>
                18:30. Podcast en directo La Retícula con tertulia y preguntas
                del público.
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
        <div className="absolute w-full h-60 bottom-0 bg-gradient-to-t from-black to-transparent -z-20"></div>
        <div className="bg-gradient-to-tl from-bg-principal from-[50%] to-transparent to-[51%] h-32"></div>
      </div>
    </section>
  );
}
