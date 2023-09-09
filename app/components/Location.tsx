export default function Location() {
  return (
    <section
      id="location"
      className="max-w-screen-xl m-auto w-full flex flex-col justify-center items-center px-5 py-10 sm:py-20 pt-20"
    >
      <div>
        <p className="text-2xl font-semibold text-center mt-10 mb-10">
          El evento se celebrará en Umbracle dentro del complejo de la Ciudad de
          las Artes y las Ciéncias de Valencia.
        </p>
        <div className="basis-full xl:basis-6/12 flex flex-col gap-5">
          <p className="text-2xl font-semibold text-center">
            Dirección: Av. del Professor López Piñero, CP. 46013 Valencia.
          </p>
          <div className="flex justify-center w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.6016923639004!2d-0.35913170537693095!3d39.45573374037337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6049a182813f95%3A0x37544e0997d79176!2sL&#39;%20Umbracle!5e0!3m2!1ses!2ses!4v1694095038332!5m2!1ses!2ses"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-w-2xl w-full h-auto aspect-video"
            ></iframe>
          </div>
        </div>
        <p className="text-2xl font-semibold text-center mt-10 mb-5 sm:mt-20 sm:mb-10">
          Ponemos a vuestra disposición un transporte gratuito{" "}
          <b>con plazas limitadas y solo de ida</b> desde las siguientes
          localizaciones a diferentes horas:
        </p>
        <div className="w-full flex justify-center flex-wrap gap-10 xl:flex-nowrap xl:gap-20">
          <div className="basis-full xl:basis-6/12 flex flex-col gap-5">
            <p className="text-2xl font-semibold text-center">
              A las 16:00 desde Estación del norte
            </p>
            <div className="flex justify-center w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.0924759224577!2d-0.37925862280389666!3d39.46723951287852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f27f56441d9%3A0x1b872da159a8de84!2sEstaci%C3%B3%20del%20Nord!5e0!3m2!1ses!2ses!4v1694095219289!5m2!1ses!2ses"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="max-w-2xl w-full h-auto aspect-video"
              ></iframe>
            </div>
          </div>
          <div className="basis-full xl:basis-6/12 flex flex-col gap-5">
            <p className="text-2xl font-semibold text-center">
              A las 16:30 desde Joaquín Sorolla
            </p>
            <div className="flex justify-center w-full p">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.3778545548694!2d-0.38420032280408056!3d39.4607917132638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f37279bddf1%3A0x65729220e9a7ae2a!2sJoaqu%C3%ADn%20Sorolla!5e0!3m2!1ses!2ses!4v1694096216656!5m2!1ses!2ses"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="max-w-2xl w-full h-auto aspect-video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
