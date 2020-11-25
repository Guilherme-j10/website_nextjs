import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="Discador Automático" description="O Discador Automático é um sistema de automação de discagens telefônicas, que tem como principal objetivo otimizar o tempo e rendimento dos operadores."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/dicador.jpg)'}}>
                    <div className="filterCammad">
                        <h1>Discador Automático</h1>
                        <p>Qualidade, agilidade e alta performance</p>
                    </div>
                </section>
                <div className="secondPlace">
                    <article>
                        <h1>Discador Automático</h1>
                        <p>O Discador Automático é um sistema de automação de discagens telefônicas, que tem como principal objetivo otimizar o tempo e rendimento dos operadores.</p>
                        <p>Além disso, o discador automático é capaz de eliminar durante o processo de discagem, ligações em que a operadora de telefonia retorne status como: número inexistente, telefone ocupado, não atende e caixa postal.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/dicador.jpg)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>O serviço tem como por objetivo diminuir o tempo ocioso, aumentear a assertividade das ligações, redução de custos, aumento da produtividade e melhoria do atendimento. Com o Discador Automático você tem Higienização das campanhas, APIs de integração e gestão do fluxo de chamadas</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Monitoria online</li>
                                <li><i class="fas fa-check"></i>Relatórios detalhados</li>
                                <li><i class="fas fa-check"></i>Filtro de caixa postal</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check"></i>Gravação das ligações</li>
                                <li><i class="fas fa-check"></i>Filas personalizadas</li>
                                <li><i class="fas fa-check"></i>Customização das campanhas</li>
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
                        <Aside name="disc" />
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