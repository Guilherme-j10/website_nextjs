import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="Mega-Bot" description="O Mega-Bot é um conjunto de sistemas e serviços que têm como objetivo potencializar o trabalho dos atendentes humanos de um call center ou empresa, além de ser capaz de realizar o atendimento completo de forma autônoma. Com ele é possível alcançar os resultados de maneira muito mais rápida e simples."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/mbot.jpg)'}}>
                    <div className="filterCammad">
                        <h1>Mega-Bot</h1>
                        <p>A EVOLUÇÃO DO ATENDIMENTO</p>
                    </div>
                </section>
                <div className="secondPlace">
                    
                    <article>
                        <h1>Mega-Bot</h1>
                        <p>O Mega-Bot é um conjunto de sistemas e serviços que têm como objetivo potencializar o trabalho dos atendentes humanos de um call center ou empresa, além de ser capaz de realizar o atendimento completo de forma autônoma. Com ele é possível alcançar os resultados de maneira muito mais rápida e simples.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/mbot.jpg)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>O Mega-bot possuí dois tipos, o ativo e o receptivo, o primeiro é pra quem precisa de um alto poder de discagem e localização de clientes, tato para venda, cobrança, negociação ou campanhas públicitárias. Já o segundo é ideal para quem precisa de maior rentenção e dedicação ao seu cliente, criando experiências únicas às suas necessidades.</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Scripts personalizados</li>
                                <li><i class="fas fa-check"></i>Reconhecimento de voz integrado</li>
                                <li><i class="fas fa-check"></i>Filtro de caixa postal</li>
                            </ul>
                            <ul>
                                <li><i class="fas fa-check"></i>Fácil integração com qualquer sistema</li>
                                <li><i class="fas fa-check"></i>Geração de leads</li>
                                <li><i class="fas fa-check"></i>Mais rentabilidade</li>
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
                        <Aside name="mega" />
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