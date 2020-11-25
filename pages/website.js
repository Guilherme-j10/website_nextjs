import Head from '../components/Head';
import Footer from '../components/Footer';
import Headers from '../components/Header';
import Aside from '../components/Aside';

export default function service(){
    return(
        <>
            <Headers namePage="Website" description="A finalidade principal dos websites é funcionar como uma interface entre a empresa e os usuários da rede, promovendo relacionamento e o reconhecimento de sua marca."/>
            <div className="PrincipalContainer">
                <Head />
                <section className="bannerContainer" style={{backgroundImage: 'url(/website.jpg)'}}>
                    <div className="filterCammad">
                        <h1>Website</h1>
                        <p>o seu endereço digital</p>
                    </div>
                </section>
                <div className="secondPlace">
                    
                    <article>
                        <h1>Website</h1>
                        <p>Website é uma palavra em Inglês, composta por duas outras distintas: web (rede) e site (sítio ou lugar). Em Português do Brasil, significa “sítio na rede” ou “um espaço na web”.</p>
                        <p>A finalidade principal dos websites é funcionar como uma interface entre a empresa e os usuários da rede, promovendo relacionamento e o reconhecimento de sua marca.</p>
                        <span className="bgImage" style={{backgroundImage: 'url(/website.jpg)'}}></span>
                        <h1>Caracteristicas do serviço</h1>
                        <p>Presença online é um termo que se refere às ferramentas que atuam como representantes da sua empresa no ambiente digital.</p>
                        <p>Trata-se de um caminho que leva à construção de autoridade e credibilidade online, permitindo que a marca seja considerada como uma das principais referências sobre determinado segmento. </p>
                        <p>Além disso, leva um usuário com dúvidas em relação àquela área a pesquisar especificamente no site da empresa.</p>
                        <div className="DividSideContainer">
                            <ul>
                                <li><i class="fas fa-check"></i>Otimização de SEO</li>
                                <li><i class="fas fa-check"></i>Alteração de conteúdo</li>
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
                        <Aside name="website" />
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