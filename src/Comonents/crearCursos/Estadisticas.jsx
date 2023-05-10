export default function Estadisticas ()  {

    const stats = [
        {
            data: "35",
            title: "Ventas"
        },
        {
            data: "20 USD",
            title: "Ultima venta"
        },
        {
            data: "40 USD",
            title: "Primera venta"
        },
        {
            data: "3k USD",
            title: "Danacias"
        },
    ]

    return (
        <section className="py-14 mt-1">
            <div className="max-w-screen-xl mx-auto px-4 text-white gap-x-12 justify-between md:px-8 lg:flex">
                <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                    <h3 className="text-blue-100 text-3xl font-semibold sm:text-4xl">
                      Visualiza tus estadistica
                    </h3>
                    <p className="mt-3 max-w-xl mx-auto lg:mx-0">
                       Mira las ventas de tus cursor y ten una idea genral del valance de tu negocio
                    </p>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row lg:grid lg:grid-cols-2">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center w-full px-4 py-6 sm:w-auto lg:py-4">
                                    <h4 className="text-4xl text-indigo-500 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}