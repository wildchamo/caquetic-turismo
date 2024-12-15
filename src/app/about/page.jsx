export default function About() {
  return (
    <main className="p-8 bg-gray-100 min-h-screen">

      {/* Header Section */}

      <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-4 text-center">
          🌟 CONOCE MAS SOBRE YAKÚ MAP 🏕️
        </h1>
        {/* Logo Section */}
        <section className="flex justify-center mb-8">
          <img
            src="/YAKUMAP.PNG" // Reemplaza con la ruta de tu logo
            alt="Yakú Map Logo"
            className="w-80 h-auto" // Cambiado para agrandar la imagen
          />
        </section>
        <p className="text-gray-700 text-lg leading-relaxed">
          "Yakú Map" es una plataforma innovadora diseñada para conectar a visitantes y comunidades locales a través de una experiencia interactiva que combina turismo, cultura y tecnología.
          Nuestro producto ofrece un mapa interactivo del departamento del Caquetá, destacando rutas turísticas, comunidades indígenas, hoteles, restaurantes típicos y eventos culturales de la región.
          La plataforma no solo guía a los turistas en su viaje, sino que también incorpora funciones avanzadas como notificaciones en tiempo real sobre próximos eventos y festividades, recomendaciones
          personalizadas basadas en intereses, y un diseño pensado para resaltar la riqueza natural y cultural de la Amazonía.

          Con Yakú Map, los usuarios pueden explorar el Caquetá de manera sostenible, sumergirse en la diversidad cultural y natural de la región, y vivir experiencias únicas que promueven el turismo responsable y el desarrollo local.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-4 text-center">
          🤝 EQUIPO DE TRABAJO
        </h2>

        {/* Participant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
            {/* Logo Section */}
          <section className="flex justify-center mb-8">
            <img
              src="/JOSE.jpeg" // Reemplaza con la ruta de tu logo
              alt="DESARROLLADOR JOSE"
              className="w-80 h-auto" // Cambiado para agrandar la imagen
            />
          </section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              JOSE LUIS - Lider del Proyecto
            </h3>
            <p className="text-gray-700">
              Jose se encargo en diriguir el proyecto completo.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              {/* Logo Section */}
          <section className="flex justify-center mb-8">
            <img
              src="/CESAR.jpeg" // Reemplaza con la ruta de tu logo
              alt="DESARROLLADOR CESAR"
              className="w-80 h-auto" // Cambiado para agrandar la imagen
            />
          </section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              CESAR ESPAÑA - Desarrollador Front-End
            </h3>
            <p className="text-gray-700">
              Cesar hace parte del equipo de desarrollo y se enfoco en el desarollo Front-End.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
            {/* Logo Section */}
          <section className="flex justify-center mb-8">
            <img
              src="/YAN.jpeg" // Reemplaza con la ruta de tu logo
              alt="DESARROLLADOR YAN"
              className="w-80 h-auto" // Cambiado para agrandar la imagen
            />
          </section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              YAN CARLOS - Desarrollador Back-end
            </h3>
            <p className="text-gray-700">
              Yan Carlos hace parte del equipo de desarrollo y se enfoco en el desarollo Back-End.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
            {/* Logo Section */}
          <section className="flex justify-center mb-8">
            <img
              src="/ANDER.jpeg" // Reemplaza con la ruta de tu logo
              alt="DESARROLLADOR ANDERSON"
              className="w-80 h-auto" // Cambiado para agrandar la imagen
            />
          </section>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              ANDERSON ESPAÑA - Diseñador
            </h3>
            <p className="text-gray-700">
              Anderson hizo parte del proyecto como investigador/diseñador/documentacion.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
