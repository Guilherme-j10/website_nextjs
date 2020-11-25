import Footer from '../components/footer';
import Head from '../components/Head';
import Header from '../components/Header';
import Link from 'next/link';

export default function sobre(){
    return(
        <>
            <Header namePage="Sobre" description="Promover a conexão entre você e seu público é de grande valor para nós. Através disso, nossas ações são norteadas para impulsionar o crescimento de nossos clientes, tornando-os fortes e realizados."/>
            <div className="PrincipalContainer" >
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/banner.jpg)'}}>
                    <div className="filterCammad">
                        <h1>Sobre a Mega Conecta</h1>
                        <p>Página de sobre</p>
                    </div>
                </section>
                <section className="AnimeMyFriend">
                    <div className="text">
                        <h1>Nossas <span>conexões</span> são o que nos tornam <span>MEGA</span></h1>
                        <p>Promover a conexão entre você e seu público é de grande valor para nós. Através disso, nossas ações são norteadas para impulsionar o crescimento de nossos clientes, tornando-os fortes e realizados.</p>
                        <p>Somos compostos por uma esquipe multiprofissional, altamente capacitada e habilitada para promover crescimento mútuo através dos princípios e valores que acreditamos.</p>
                        <p>Portanto, oferecemos serviços exclusivos e assertivos, proporcionando inovação, transformação e resultados sólidos e rentáveis aos nossos clientes.</p> 
                    </div>
                    <img src="/dots.png" alt="img" />
                </section>
                <section className="lineProduction">
                    <div className="linesection">
                        <div class="caSide">
                            <h1>Curioso para saber mais sobre a mega ?</h1>
                            <p>Baixe o nosso pdf aqui...</p>
                        </div>
                        <Link  href="/megaconectarj.pdf" download>
                            <a>Download Mega pdf<i class="fas fa-caret-right"></i></a>
                        </Link>
                    </div>
                </section>
                <section className="AnimeMyFriend" style={{paddingTop: 0}}>
                    <div className="boxes">
                        <ul>
                            <li>
                                <i class="fas fa-users" style={{backgroundColor: '#e8c00e2d', color: '#e8c00e'}}></i>
                                <div className="informationSideRightLi">
                                    <h1>Sistema eficiente e confiavél</h1>
                                    <p>Mais de 600 clientes ativos que utilizam os nossos serviços diariamente.</p>
                                </div>
                            </li>
                            <li>
                                <i class="fas fa-project-diagram" style={{backgroundColor: '#f4557e2d', color: '#f4557e'}}></i>
                                <div className="informationSideRightLi">
                                    <h1>Conexão rápida e segura</h1>
                                    <p>Mais de 3 mil dispositivos conectados com o nosso sistema.</p>
                                </div>
                            </li>
                            <li>
                                <i class="fas fa-chart-line" style={{backgroundColor: '#0ea5cf2d', color: '#0ea5cf'}}></i>
                                <div className="informationSideRightLi">
                                    <h1>Crescimento contínuo</h1>
                                    <p>Já são mais de 10 mil usuários configurados nos últimos 3 anos.</p>
                                </div>
                            </li>
                        </ul> 
                    </div>
                    <div className="textRight">
                        <h1>Conte com soluções <span>personalizadas</span></h1>
                        <p>Nós da Mega Conecta permanecemos firmes nos própositos de otimizar e atender os negócios dos nossos clientes, aumentando a produtividade através de agilidade e baixo custo.</p> <p>Hoje, são mais de 600 clientes satisfeitos e que alcaçam seus resultados diariamente através de nossos serviços e bom atendimento.</p> <p>Faça a escolha inteligente, invista em nossos serviços e saia na frente!</p>
                    </div>
                </section>
                <section className="vamoslapessoaslegais">
                    <div className="boxes">
                        <h1>Nosso propósito é ressaltar o seu potencial</h1>
                        <p>Inovar tecnologias e adequa-lás conforme as necessidades de pessoas e empresas, para que sejam alcançadas suas metas e objetivos.</p>
                    </div>
                    <div className="boxes">
                        <h1>Planejamento e objetivos</h1>
                        <p>Ser referência no desenvolvimento de soluções tecnológicas e servços inovadores, mantendo os nossos padrões nos mais altos níveis</p>
                    </div>
                    <div className="boxes">
                        <h1>Nossos valores</h1>
                        <p>Nos tornam muito mais que um parceiro comercial, somos um aliado para a sua empresa ser um sucesso através de: <span>CONEXÃO, INTEGRIDADE, EMPATIA E LIDERANÇA</span></p>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}