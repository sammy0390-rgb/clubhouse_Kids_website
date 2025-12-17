import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClubHouse Kids - Children One Page HTML5",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href="/clubhousekidsri/" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        {/* Bootstrap + theme styles */}
        <link href="/clubhousekidsri/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="/clubhousekidsri/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="/clubhousekidsri/fonts/flaticons/flaticon.css" rel="stylesheet" type="text/css" />
        <link href="/clubhousekidsri/fonts/glyphicons/bootstrap-glyphicons.css" rel="stylesheet" type="text/css" />

        {/* Google fonts (matches original page) */}
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alegreya+Sans:700,900"
          rel="stylesheet"
          type="text/css"
        />

        <link href="/clubhousekidsri/css/style.css" rel="stylesheet" />
        <link href="/clubhousekidsri/styles/funtime.css" rel="stylesheet" />
        <link rel="stylesheet" href="/clubhousekidsri/css/owl.carousel.css" />
        <link rel="stylesheet" href="/clubhousekidsri/css/prettyPhoto.css" />
        <link rel="stylesheet" href="/clubhousekidsri/layerslider/css/layerslider.css" />
        {/* Leaflet CSS for map */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="72x72" href="/clubhousekidsri/apple-touch-icon-72x72.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/clubhousekidsri/apple-touch-icon-114x114.png"
        />
        <link rel="shortcut icon" href="/clubhousekidsri/favicon.ico" type="image/x-icon" />
      </head>
      <body id="page-top" data-spy="scroll" data-target=".navbar-custom" suppressHydrationWarning>
        {children}
        {/* Fix Next.js paths to be absolute (not affected by base tag) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Fix any Next.js script/link tags that might be relative
                document.addEventListener('DOMContentLoaded', function() {
                  const scripts = document.querySelectorAll('script[src^="/_next"]');
                  scripts.forEach(function(script) {
                    if (script.src && !script.src.startsWith('http')) {
                      script.src = script.getAttribute('src');
                    }
                  });
                  const links = document.querySelectorAll('link[href^="/_next"]');
                  links.forEach(function(link) {
                    if (link.href && !link.href.startsWith('http')) {
                      link.href = link.getAttribute('href');
                    }
                  });
                });
              })();
            `,
          }}
        />

        {/* Core JS (order matters) */}
        <Script src="/clubhousekidsri/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/clubhousekidsri/js/bootstrap.min.js" strategy="beforeInteractive" />

        {/* Optional: YouTube IFrame API used by the LayerSlider video layer */}
        <Script src="https://www.youtube.com/iframe_api" strategy="afterInteractive" />

        {/* Theme/Plugins */}
        <Script src="/clubhousekidsri/js/jquery.isotope.js" strategy="afterInteractive" />
        <Script src="/clubhousekidsri/js/mc-validate.js" strategy="afterInteractive" />
        <Script src="/clubhousekidsri/js/plugins.js" strategy="afterInteractive" />
        <Script src="/clubhousekidsri/js/contact.js" strategy="afterInteractive" />
        <Script src="/clubhousekidsri/js/prefixfree.js" strategy="afterInteractive" />

        {/* LayerSlider deps */}
        <Script src="/clubhousekidsri/layerslider/js/greensock.js" strategy="afterInteractive" />
        <Script src="/clubhousekidsri/layerslider/js/layerslider.transitions.js" strategy="afterInteractive" />
        <Script src="/clubhousekidsri/layerslider/js/layerslider.kreaturamedia.jquery.js" strategy="afterInteractive" />

        {/* Leaflet JS for map (must load before main.js) */}
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          strategy="afterInteractive"
        />

        {/* Main theme bootstrapper (keep last) */}
        <Script src="/clubhousekidsri/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}


