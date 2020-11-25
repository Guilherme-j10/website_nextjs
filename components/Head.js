import Link from 'next/link';
import Image from 'next/image';

export default function Head(){
    return(
        <header>
          <img className="imagemLogo" src="/megaconecta.png" alt="Logo of website" />
          <div className="rightSide">
            <ul className="listMobile">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/sobre"><a>Sobre</a></Link></li>
              <li><Link href="/discador"><a>Serviços</a></Link></li>
              <li><Link href="/contact"><a>Contate-nos</a></Link></li>
            </ul>
            <ul className="listDesktop">
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/sobre"><a>Sobre</a></Link></li>
              <li><Link href="/discador"><a>Serviços</a></Link></li>
            </ul>
            <Link href="/contact"><a className="contactLink">Contate-nos</a></Link>
          </div>
        </header>
    );
}