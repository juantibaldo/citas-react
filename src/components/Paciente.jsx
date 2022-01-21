
const Paciente = () => {
  return (    
		
		<div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">
					Nombre: {''}
					<span className="font-normal normal-case">Hook</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">
					Propietario: {''}
					<span className="font-normal normal-case">Juan</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">
					Email: {''}
					<span className="font-normal normal-case">correo@correo.com</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">
					Fecha Alta: {''}
					<span className="font-normal normal-case">10 de diciembre de 2022</span>
			</p>

			<p className="font-bold mb-3 text-gray-700 uppercase">
					Síntomas: {''}
					<span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugit nemo illum, deserunt, minus praesentium earum cum accusamus tenetur, explicabo totam adipisci quia quam beatae velit at? Ipsum, ratione suscipit!</span>
			</p>
		</div>
	)
};

export default Paciente;
