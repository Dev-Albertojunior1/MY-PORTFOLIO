

import '../styles/components/information.sass'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const Information = () => {
  return (
    <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon" />
      <div>
        <h3>Telefone</h3>
        <p>(258)844214-237</p>
      </div>
    </div>
    <div className="info-card">
      <AiOutlineMail id="email-icon" />
      <div>
        <h3>E-mail</h3>
        <p>albertojunior848423803@gmail.com</p>
      </div>
    </div>
    <div className="info-card">
      <AiFillEnvironment id="pin-icon" />
      <div>
        <h3>Localização</h3>
        <p>Mozambique/Maputo</p>
      </div>
    </div>
  </section>
  )
}

export default Information