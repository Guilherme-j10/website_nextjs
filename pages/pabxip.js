import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="PABX IP" description="PABX IP é um sistema de telefonia completo que disponibiliza inúmeras funcionalidades."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/pabxi.jpg)'}}>
                    <div className="filterCammad">
                        <h1>PABX IP</h1>
                        <p>Solução perfeita para uma comunicação completa</p>
                    </div>
                </section>
                <div className="secondPlace">
                    
                    <article>
                        <h1>PABX IP</h1>
                        <p>PABX IP é um sistema de telefonia completo que disponibiliza inúmeras funcionalidades.</p>
                        <p>Ele é um distribuidor de linhas telefônicas para diversos ramais e sua finalidade é ligar diferentes telefones a uma linha externa.</p>
                        <p>Com ele, as ligações são realizadas por meio da telefonia VoIP (voz sobre IP), ou seja, todo o tráfego de voz e dados é feito via internet.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/pabxi.jpg)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>Com o nosso sistema do pabx ip você tem gravações de chamadas, espera telefônica, grupos de ramais, click-to-call e muito mais.</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Mobilidade</li>
                                <li><i class="fas fa-check"></i>Economia</li>
                                <li><i class="fas fa-check"></i>Tecnologia</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check"></i>Ligação gratuita entre ramais</li>
                                <li><i class="fas fa-check"></i>Monitoria e escuta em tempo real</li>
                                <li><i class="fas fa-check"></i>Fácil escalabilidade</li>
                            </ul>
                        </div>
                    </article>
                    <aside>
                        <Aside name="pabx" />
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