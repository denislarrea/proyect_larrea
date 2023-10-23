import './stylo.css'; 
import { useForm } from "react-hook-form";


function Contacto() {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  }

  return (
    <div className="contacto-container">
      <h1 className="contacto-title">Contacto</h1>
      <form className="contacto-form" onSubmit={handleSubmit(enviar)}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="contacto-input"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          className="contacto-input"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          className="contacto-input"
          placeholder="Ingresá tu teléfono"
          {...register("telefono")}
        />
        <label htmlFor="consulta">Consulta:</label>
        <textarea
          id="consulta"
          name="consulta"
          className="contacto-input"
          placeholder="Escribí aquí tu consulta"
          {...register("consulta")}
        />
        <button className="contacto-button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Contacto;
