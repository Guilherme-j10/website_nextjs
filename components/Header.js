import Head from 'next/head';

export default function Header(props){
    return(
        <Head>
            <title>{props.namePage} - Mega Conecta</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'></meta>
            <link rel="icon" href="/megaconecta.png" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={props.description} />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta property="og:locale" content="pt_PT" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.namePage+" - Mega Conecta"} />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content="https://megaconectasolucoes.com.br/" />
            <meta property="og:site_name" content="Mega Conecta" />
            <meta property="article:modified_time" content="2020-07-24T19:05:22+00:00" />
            <meta property="og:image" content="https://megaconectasolucoes.com.br/megaconecta.png" />
            <meta property="og:image:width" content="1365" />
            <meta property="og:image:height" content="886" />
            <meta name="twitter:card" content="summary_large_image" />
            <script src="https://kit.fontawesome.com/353c2a62b7.js" crossorigin="anonymous"></script>
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css' rel='stylesheet' />
        </Head>
    );
}