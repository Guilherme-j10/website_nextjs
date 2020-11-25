import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Maps from '../components/Maps';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

export default function contact(){
    const nomeRef = useRef();
    const emailRef = useRef();
    const telefoneRef = useRef();
    const msgRef = useRef();

    const [modal, setModal] = useState(false);
    const [content, setContent] = useState('pending');

    async function SendMailer(e){
        e.preventDefault();
        setModal(true);

        try {
            
            const sendMessage = await axios.post('https://apimailer.megaconecta.tec.br/', {
                header: {
                    to: 'leandro.vitorio@megaconecta.com.br, leads@megaconecta.tec.br',
                    assunto: 'Lead do site',
                    from: 'Mega Conecta Site'
                },
                information: {
                    nome: nomeRef.current.value,
                    email: emailRef.current.value,
                    telefone: telefoneRef.current.value,
                    mensagem: msgRef.current.value
                }
            })

            if(sendMessage){
                await axios.post('https://apimailer.megaconecta.tec.br/', {
                    header: {
                        to: emailRef.current.value,
                        assunto: 'Contato - Mega Conecta',
                        from: 'Mega Conecta'
                      },
                      information: {
                        mensagem: `Olá ${nomeRef.current.value}, a nossa equipe da Mega já recebeu a sua mensagem, em breve nossa equipe entrará em contato`
                      }
                });

                nomeRef.current.value = '';
                emailRef.current.value = '';
                telefoneRef.current.value = '';
                msgRef.current.value = '';

                setContent('success');
            }

        } catch (error) {
            setContent('error');
        }
    }

    return(
        <>
            <Headers namePage="contato" description="Página de contato da Mega Conecta" />
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/banner.jpg)'}}>
                    <div className="filterCammad">
                        <h1>Entre em contato conosco</h1>
                        <p>Página de contato</p>
                    </div>
                </section>
                <section className="contatoContainers">
                    <section className="firstContainerContato">
                        <div className="letsGoBaby">
                            <div className="headerContainerContatoFist">
                                <h1>Confira também nossas, <br />redes sociais</h1>
                            </div>
                            <ul>
                                <li><a href="https://www.facebook.com/megaconectarj" style={{color: '#666'}} target="_blank">@megaconectarj <i class="fab fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/megaconectarj/?hl=pt-br" style={{color: '#666'}} target="_blank">@megaconectarj <i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/mega-conecta-rj/" style={{color: '#666'}} target="_blank">Mega Conecta RJ <i class="fab fa-linkedin"></i></a></li>
                            </ul>
                            <ul className="sencodListContianers">
                                <li>
                                    <h5>Rio de Janeiro</h5>
                                    <p>21 3180-0770 | 0800 887 0574</p>
                                </li>
                            </ul>
                        </div>
                        <div className="letsGoBaby">
                            <div className="headerContainerContatoFist">
                                <h1>Se precisar de ajuda,<br/>Não exite em entrar em contato</h1>
                            </div>
                            <form onSubmit={(e) => SendMailer(e)}>
                                <input type="text" required ref={nomeRef} placeholder="Seu nome"/>
                                <input type="text" required ref={telefoneRef}  placeholder="Seu telefone"/>
                                <input type="email" required ref={emailRef} placeholder="Seu e-mail"/>
                                <textarea required ref={msgRef} placeholder="Escreva sua mensagem"></textarea>
                                <input type="submit" value="Enviar mensagem" />
                            </form>
                        </div>
                    </section>
                    <section className="AllRightMyBrother">
                        <div className="anotherSideContainerPlace">
                            <div className="toldtoyour" style={{backgroundImage: 'url(/riodejaneiro.png)'}}>
                                <div className="infos">
                                    <h1>RIO DE JANEIRO</h1>
                                    <p>Av. Embaixador Abelardo Bueno N° 01 – Bloco 1 – Sala 701 A
                                    Bairro: Jacarepaguá Rio de Janeiro – RJ CEP: 22775-022</p>
                                </div>
                                <a target="_blank" href="https://api.whatsapp.com/send?phone=552131800770"><i class="fab fa-whatsapp"></i> Fale agora !</a>
                            </div>
                        </div>    
                        <div className="map">
                            <img src="/mapa.jpeg"/>
                        </div>
                    </section>
                </section>
                <Footer />
                <section className="modal" style={{display: modal ? 'flex' : 'none'}}>
                    <section className="containerModal">
                        <div className="HeaderContainerModal"> 
                            <h1>Aviso</h1>
                        </div>
                        <div className="spinner">
                            <i class={ content == 'success' ? 'fas fa-check' : content == 'pending' ? 'fas fa-circle-notch fa-spin' : 'fas fa-exclamation-triangle' }></i>
                            <p>{ content == 'success' ? 'Mensagem enviada com sucesso' : content == 'pending' ? 'Enviando mensagem' : 'Algo deu errado, verifique sua conexão com a internet ou tente novamente mais tarde.' }</p>
                        </div>
                        <div className="options">
                            <button onClick={(e) => {setModal(false)}} style={{cursor: content == 'pending' ? 'no-drop' : 'pointer'}}>OK</button>
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}