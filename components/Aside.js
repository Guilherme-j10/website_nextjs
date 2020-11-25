import Link from 'next/link';

export default function Aside(props){

    let name = props.name;

    return(
        <ul>
            <li><Link href="/discador"><a className={props.name == 'disc' ? 'ativate' : null} >Discador Automático</a></Link></li>
            <li><Link href="/voip"><a className={props.name == 'voip' ? 'ativate' : null} >VoIP</a></Link></li>
            <li><Link href="/pabxip"><a className={props.name == 'pabx' ? 'ativate' : null} >PABX IP</a></Link></li>
            <li><Link href="/sms"><a className={props.name == 'sms' ? 'ativate' : null} >SMS</a></Link></li>
            <li><Link href="/urabot"><a className={props.name == 'ura' ? 'ativate' : null}>Ura-Bot</a></Link></li>
            <li><Link href="/megabot"><a className={props.name == 'mega' ? 'ativate' : null}>Mega-Bot</a></Link></li>
            <li><Link href="/website"><a className={props.name == 'website' ? 'ativate' : null}>Website</a></Link></li>
        </ul>
    );
}