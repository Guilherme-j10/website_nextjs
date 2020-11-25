import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="SMS" description="Short Message Service (SMS), é um serviço utilizado para a troca de mensagens de textos curtos, que podem ser enviadas ou recebidas através de um aparelho eletrônico."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/sms.jpg)'}}>
                    <div className="filterCammad">
                        <h1>SMS</h1>
                        <p>Com o DISPARO DE SMS DA MEGA CONECTA VOCÊ TEM UM SERVIÇO ÁGIL E ASSERTIVO.</p>
                    </div>
                </section>
                <div className="secondPlace">
                    
                    <article>
                        <h1>SMS</h1>
                        <p>Short Message Service (SMS), é um serviço utilizado para a troca de mensagens de textos curtos, que podem ser enviadas ou recebidas através de um aparelho eletrônico.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/sms.jpg)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>Alcance seu público com uma solução rápida, crie a campanha, crie as mensagens, cadastre os números, programe os disparos e pronto mensagem enviada com sucesso.</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Sms marketings</li>
                                <li><i class="fas fa-check"></i>Sms felicite</li>
                                <li><i class="fas fa-check"></i>Sms interativo</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check"></i>Sms corporativo</li>
                            </ul>
                        </div>
                        {/* <h1 style={{marginTop: 20}}>Como funciona ?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <h2><i class="fas fa-circle"></i>Mas o que é consulta de negócio</h2>
                        <p>We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier. We have over 8 years of 180 successfully implemented projects.</p>
                        <h2><i class="fas fa-circle"></i>Mas o que é consulta de negócio</h2>
                        <p>We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier. We have over 8 years of 180 successfully implemented projects.</p>
                        <h2><i class="fas fa-circle"></i>Mas o que é consulta de negócio</h2>
                        <p>We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier. We have over 8 years of 180 successfully implemented projects.</p> */}
                    </article>
                    <aside>
                        <Aside name="sms" />
                        <div className="boxContainerCallMe">
                            <h1>Deixe-nos te ajudar</h1>
                            <ul>
                                <li>
                                    <span style={{backgroundColor: '#e8c00e2d', color: '#e8c00e'}}>
                                        <i class="fas fa-phone-alt"></i>
                                    </span>
                                    <div className="sideRightBaby">
                                        <h1>Fale Conosco</h1>
                                        <p>21 3180-0770</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <Footer />
            </div>
        </>
    );
}