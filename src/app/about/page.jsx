export default function About() {
  return (
    <main className="p-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Sobre el Producto</h1>
        <p>
          Nuestro producto es una plataforma innovadora diseñada para promover
          el turismo en la región del Caquetá. Ofrecemos información detallada
          sobre eventos culturales, actividades al aire libre y lugares de
          interés para que los visitantes puedan disfrutar de todo lo que esta
          hermosa región tiene para ofrecer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Participantes</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Juan Pérez - Desarrollador</h3>
          <p>
            Juan es el desarrollador principal del proyecto. Se encarga de la
            implementación de nuevas funcionalidades y del mantenimiento del
            código.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">María Gómez - Diseñadora</h3>
          <p>
            María es la diseñadora del equipo. Su responsabilidad es crear una
            experiencia de usuario atractiva y fácil de usar, además de diseñar
            la interfaz gráfica de la plataforma.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            Carlos Rodríguez - Gerente de Proyecto
          </h3>
          <p>
            Carlos es el gerente de proyecto. Se encarga de coordinar al equipo,
            planificar las tareas y asegurarse de que el proyecto se mantenga
            dentro del presupuesto y los plazos establecidos.
          </p>
        </div>
      </section>
    </main>
  );
}
