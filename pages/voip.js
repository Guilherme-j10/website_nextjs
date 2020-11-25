import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="Telefonia VoIP" description="VOICE OVER INTERNET PROTOCOL - VoIP - é uma tecnologia que permite através de APPs, fazer chamadas de voz usando uma conexão de Internet de banda larga, por um equipamento de protocolo IP, ao invés de uma linha telefônica comum."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/imagefundo.jpg)'}}>
                    <div className="filterCammad">
                        <h1>Telefonia VoIP</h1>
                        <p>Reduza suas contas de telefone</p>
                    </div>
                </section>
                <div className="secondPlace">
                    
                    <article>
                        <h1>Telefonia VoIP</h1>
                        <p>VOICE OVER INTERNET PROTOCOL - VoIP - é uma tecnologia que permite através de APPs, fazer chamadas de voz usando uma conexão de Internet de banda larga, por um equipamento de protocolo IP, ao invés de uma linha telefônica comum.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/imagefundo.jpg)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>VoIP é a tecnologia que permite fazer e receber ligações usando uma conexão com a internet.</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Mobilidade</li>
                                <li><i class="fas fa-check"></i>Gerenciamento em nuvem</li>
                                <li><i class="fas fa-check"></i>Mobilidade</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check"></i>Número DID</li>
                                <li><i class="fas fa-check"></i>Variedade de rotas</li>
                                <li><i class="fas fa-check"></i>Fácil implantação do sistema</li>
                            </ul>
                        </div>
                    </article>
                    <aside>
                        <Aside name="voip" />
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