
import './Diferenciais.css';

import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BiSolidFactory } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";

function Diferenciais() {

  return (
    <>

      <div className="diferenciais">
        <div className="conteinerDiferenciais">
            <FaArrowTrendUp size={100}/>
            <p className='pDiferenciais'>Não só queremos atender as demandas de nossos clientes, mas almejamos superar suas expectativas </p>
        </div>

        <div className="conteinerDiferenciais">
            <MdOutlineSecurity size={100}/>
            <p className='pDiferenciais'>Proporcionar soluções com eficácia, sustentabilidade e segurança</p>
        </div>

        <div className="conteinerDiferenciais">
            <BiSolidFactory size={100}/>
            <p className='pDiferenciais'>Promover e elevar a competividade dos nossos clientes</p>
        </div>
      </div>

      <div className="diferenciais">
        <div className="conteinerDiferenciais">
            <FaHandsHelping size={100}/>
            <p className='pDiferenciais'>Comprometimento social e humano, priorizando o respeito mútuo e a ética</p>
        </div>

        <div className="conteinerDiferenciais">
            <FaPeopleRobbery size={100}/>
            <p className='pDiferenciais'>Proporcionar um ambiente agradável de relações e trabalho</p>
        </div>

        <div className="conteinerDiferenciais"></div>
      </div>

    </>
  );
}

export default Diferenciais;