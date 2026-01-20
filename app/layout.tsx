import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClubHouse Kids Early Learning Center | Daycare in Warwick, RI",
  description: "Quality daycare and early learning center in Warwick, RI. Infant care, toddler programs, preschool & pre-K. Certified teachers, small class sizes. Call 401-734-9888",
  keywords: "daycare Warwick RI, preschool Warwick, infant care Rhode Island, early learning center, childcare Warwick, toddler daycare, pre-kindergarten Warwick",
  authors: [{ name: "ClubHouse Kids Early Learning Center" }],
  openGraph: {
    title: "ClubHouse Kids - Premier Daycare in Warwick, Rhode Island",
    description: "Nurturing early education for infants through pre-K in Warwick, RI. Certified teachers, small class sizes, safe environment.",
    url: "https://clubhousekidsri.netlify.app",
    siteName: "ClubHouse Kids Early Learning Center",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClubHouse Kids Early Learning Center | Warwick, RI",
    description: "Quality daycare and early learning in Warwick, RI. Infant care through pre-K programs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* No base tag - it interferes with Next.js. We'll fix relative paths in body content instead. */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        
        {/* SEO Meta Tags */}
        <meta name="geo.region" content="US-RI" />
        <meta name="geo.placename" content="Warwick" />
        <meta name="geo.position" content="41.8302341;-71.418062" />
        <meta name="ICBM" content="41.8302341, -71.418062" />
        <meta name="theme-color" content="#e91e63" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://clubhousekidsri.netlify.app/" />
        
        {/* Structured Data - Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              "@id": "https://clubhousekidsri.netlify.app/#organization",
              "name": "ClubHouse Kids Early Learning Center",
              "alternateName": "ClubHouse Kids",
              "description": "Quality daycare and early learning center offering infant care, toddler programs, preschool and pre-kindergarten in Warwick, Rhode Island.",
              "url": "https://clubhousekidsri.netlify.app",
              "telephone": "+1-401-734-9888",
              "faxNumber": "+1-401-734-4461",
              "email": "info@clubhousekidsri.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "220 Tollgate Road",
                "addressLocality": "Warwick",
                "addressRegion": "RI",
                "postalCode": "02886",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8302341,
                "longitude": -71.418062
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "06:30",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Warwick",
                "@id": "https://en.wikipedia.org/wiki/Warwick,_Rhode_Island"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Childcare Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Infant Care",
                      "description": "Loving infant care program for babies in a safe, nurturing environment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Toddler Program",
                      "description": "Full day toddler daycare for children 18 months to 3 years"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Preschool",
                      "description": "Fun and educational preschool program"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Pre-Kindergarten",
                      "description": "Comprehensive pre-K program preparing children for kindergarten"
                    }
                  }
                ]
              }
            })
          }}
        />

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
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/clubhousekidsri/manifest.json" />
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

        {/* Core JS - Load synchronously to avoid timing issues */}
        <script src="/clubhousekidsri/js/jquery.min.js"></script>
        <script src="/clubhousekidsri/js/bootstrap.min.js"></script>

        {/* Optional: YouTube IFrame API used by the LayerSlider video layer */}
        <script src="https://www.youtube.com/iframe_api"></script>

        {/* LayerSlider deps - Must load before main.js */}
        <script src="/clubhousekidsri/layerslider/js/greensock.js"></script>
        <script src="/clubhousekidsri/layerslider/js/layerslider.transitions.js"></script>
        <script src="/clubhousekidsri/layerslider/js/layerslider.kreaturamedia.jquery.js"></script>

        {/* Leaflet JS for map (must load before main.js) */}
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        ></script>

        {/* Theme/Plugins */}
        <script src="/clubhousekidsri/js/jquery.isotope.js"></script>
        <script src="/clubhousekidsri/js/mc-validate.js"></script>
        <script src="/clubhousekidsri/js/plugins.js"></script>
        {/* contact.js disabled - using Netlify Forms instead */}
        <script src="/clubhousekidsri/js/prefixfree.js"></script>

        {/* Main theme bootstrapper (keep last - initializes LayerSlider) */}
        <script src="/clubhousekidsri/js/main.js"></script>
        
        {/* Ensure LayerSlider initializes after all dependencies are loaded */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var initialized = false;
                function initLayerSlider() {
                  if (initialized) return;
                  if (typeof jQuery !== 'undefined' && jQuery.fn.layerSlider && document.getElementById('layerslider')) {
                    var $slider = jQuery('#layerslider');
                    if ($slider.length && !$slider.data('layerSlider')) {
                      initialized = true;
                      $slider.layerSlider({
                        responsive: true,
                        responsiveUnder: 1280,
                        layersContainer: 1280,
                        skin: 'fullwidth',
                        hoverPrevNext: false,
                        skinsPath: '/clubhousekidsri/layerslider/skins/',
                        autoStart: true,
                        autoPlayVideos: false
                      });
                    }
                  }
                }
                
                // Single fallback check after main.js has had time to run
                window.addEventListener('load', function() {
                  setTimeout(initLayerSlider, 500);
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}


