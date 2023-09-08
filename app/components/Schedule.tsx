export default function Schedule() {
  return (
    <section id="schedule" className="w-full">
      <div className="bg-umbracle-2 bg-no-repeat bg-cover bg-bottom text-white p-5 sm:p-20">
        <p className="font-agencyGothicCTBold text-7xl sm:text-9xl text-shadow mb-10 sm:mb-20">Programación</p>
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
            21:00. <span className="text-[#FF0026]">30K</span> Castillo de fuegos artificiales a cargo de la pirotécnia
            Caballer y fin del evento.
          </li>
        </ul>
      </div>
    </section>
  );
};