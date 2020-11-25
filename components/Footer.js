import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRef, useState } from 'react';

export default function Footer(){
    const RefInput = useRef();

    const [modal, setModal] = useState(false);
    const [content, setContent] = useState('pending');

    async function senderMailerLead(e){
      e.preventDefault();

      setModal(true);

      try {
        
        const sender = await axios.post('https://apimailer.megaconecta.tec.br/', {
          header: {
            to: 'leandro.vitorio@megaconecta.com.br, leads@megaconecta.tec.br',
            assunto: 'Lead e-mail do site',
            from: 'Mega Conecta Site'
          },
          information: {
            email: RefInput.current.value,
          }
        });

        if(sender.data){
          setContent('success');
          RefInput.current.value = '';
        }

      } catch (error) {
        setContent('error');
      }
    }

    return(
      <>
        <footer className="footerSection">
          <a className="linkWhats" href="https://api.whatsapp.com/send?phone=552131800770" target="_blank">
            <img src="whats.png"/>
          </a>
          <section className="sideTop">
              <div className="division">
                <h1>Sobre nós</h1>
                <p>Qualidade, agilidade e alta performance, cliente Mega Conecta tem o melhor da tecnologia para impulsionar os resultados da sua empresa.</p>
              </div>
              <div className="division">
                <h1>Nossos serviços</h1>
                <Link href="/pabxip" ><a>PABX IP</a></Link>
                <Link href="/voip" ><a>VoIP</a></Link>
                <Link href="/megabot" ><a>Mega-Bot</a></Link>
                <Link href="/urabot" ><a>Ura-Bot</a></Link>
                <Link href="/discador" ><a>Discador Automático</a></Link>
                <Link href="/sms" ><a>SMS</a></Link>
                <Link href="/website"><a>Website</a></Link>
              </div>
              <div className="division">
                <h1>Links úteis</h1>
                <Link href="/contact" ><a>Contato</a></Link>
                <Link href="/sobre" ><a>Sobre</a></Link>
              </div>
              <div className="division">
                <h1>Inscreva-se</h1>
                <form onSubmit={(e) => senderMailerLead(e)} className="textInput">
                  <input type="text" ref={RefInput} placeholder="Email"/>
                  <button><i class="fas fa-paper-plane"></i></button>
                </form>
                <p>Nos deixe o seu e-mail e fique por dentro das nossas Mega novidades.</p>
              </div>
          </section>
          <section className="sideBottom">
            <div className="anotherSideBottom">
              <img className="imagemLogo" src="/logoMega.png" alt="Logo of website"/>
              <p>© {new Date().getFullYear()} MegaConecta. Todos os direitos reservados.</p>
            </div>
            <div className="anotherSideBottom">
              <h1><i class="fas fa-headphones"></i> 21 3180-0770</h1>
              <ul>
                <li><a href="https://www.facebook.com/megaconectarj" target="_blank" ><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/megaconectarj/?hl=pt-br" target="_blank" ><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/company/mega-conecta-rj/" target="_blank" ><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </section>
        </footer>
        <section className="modal" style={{display: modal ? 'flex' : 'none'}}>
          <section className="containerModal">
            <div className="HeaderContainerModal"> 
              <h1>Aviso</h1>
            </div>
            <div className="spinner">
              <i class={ content == 'success' ? 'fas fa-check' : content == 'pending' ? 'fas fa-circle-notch fa-spin' : 'fas fa-exclamation-triangle' }></i>
              <p>{ content == 'success' ? 'Seu e-mail foi enviado! Agora é só ficar ligado nas novidades.' : content == 'pending' ? 'Enviando e-mail' : 'Algo deu errado, verifique sua conexão com a internet ou tente novamente mais tarde.' }</p>
            </div>
            <div className="options">
              <button onClick={(e) => {setModal(false)}} style={{cursor: content == 'pending' ? 'no-drop' : 'pointer'}}>OK</button>
            </div>
          </section>
        </section>
      </>
    );
}