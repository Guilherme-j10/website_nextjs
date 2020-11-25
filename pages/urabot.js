import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="Ura-Bot" description="Atendimento autônomo da Mega Conecta. A Ura-Bot é um sistema de URA inteligente que proporciona um atendimento digital com exclusividade e autonomia em seus processos de atendimento. Com ela é possível alcançar os seus resultados diariamente com excelência e praticidade."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/ura.png)'}}>
                    <div className="filterCammad">
                        <h1>Ura-Bot</h1>
                        <p>TIRE UMA PAUSA. ELA SE RESPONSABILIZA</p>
                    </div>
                </section>
                <div className="secondPlace">
                    
                    <article>
                        <h1>Ura-Bot</h1>
                        <p>Atendimento autônomo da Mega Conecta. A Ura-Bot é um sistema de URA inteligente que proporciona um atendimento digital com exclusividade e autonomia em seus processos de atendimento. Com ela é possível alcançar os seus resultados diariamente com excelência e praticidade.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/ura.png)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>A Ura-bot da Mega é capaz de realizar 3 interações simultâneas, com você pode cirar campanhas no sistema, importar mailings no discador, o sistema faz o disparo das ligações sozinho, Após a abordagem, a ligação é encerrada ou direcionada para um analista.</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Armazenamento de gravações</li>
                                <li><i class="fas fa-check"></i>Telefonia VoIP inclusa</li>
                                <li><i class="fas fa-check"></i>Servidor em nuvem</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check"></i>Discagem por 12 horas/dia</li>
                                <li><i class="fas fa-check"></i>Mensalidade fixa</li>
                                <li><i class="fas fa-check"></i>Contato com mais de 1.200 clientes por dia</li>
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
                        <Aside name="ura" />
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