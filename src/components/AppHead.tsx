import Head from 'next/head'
import Script from 'next/script'


const AppHead = () => {
    return (
        <>
            <Head>
                <title>GUNNAR EPK</title>
                <meta name="description" content="Gunnar EPK" />
                <link rel="icon" href="/favicon.png" />
                <meta property="og:title" content="GUNNAR EPK" />
                <meta property="og:image" content="/images/og.jpg" />
            </Head>

            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-129606615-1"
                strategy="afterInteractive"
            ></Script>
            <Script id="ga1">
                {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-129606615-1');
      `}
            </Script>
            <Script id="ga2" strategy="afterInteractive">
                {`
       (function(w,d,t,u){
      var a=d.createElement(t);a.async=1;a.src=u+"?url="+encodeURIComponent(w.location.href)+"&ref="+encodeURIComponent(d.referrer);
      var s=d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(a,s);
      })(window, document, 'script', 'https://a.ad.gt/api/v1/u/matches/114')
      `}
            </Script>
            <Script id="fb" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '179650873296541'); 
          fbq('track', 'PageView');
          `}
            </Script>
        </>
    )
}

export default AppHead
