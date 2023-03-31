import React from "react";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) => {
    return (
        <div>
            <main className="holder">
                <div className="contacto">
                    <div className="datos">
                        <h2>Algunas de nuestras vías de comunicación</h2>
                        <ul>
                            <li>Telénono: 222-22222222</li>
                            <li>Email: saboresdelsur@gmail.com</li>
                            <li>Facebook:</li>
                            <li>Instagram:</li>
                            <li>Twitter:</li>
                        </ul>
                    </div>
                    <div >
                        <h2>Contáctanos</h2>
                        <form action="" className="formulario">
                            <label for="">Nombre:</label>

                            <input type="text" />
                            <label for="">Teléfono:</label>

                            <input type="text" />
                            <label for="">Correo electrónico:</label>

                            <input type="email" />
                            <label for="">Mensaje:</label>
                            <br />
                            <textarea name=""></textarea>
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ContactoPage;