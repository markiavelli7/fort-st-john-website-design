import Head from "next/head";
import { useEffect } from "react";

export default function SEO({
  description = "Custom Website Development, Logo Design, and SEO services in Fort St John, British Columbia. Industry leading websites and complete online marketing services for any business.",
  title = "Website Development Fort St John",
  ogImage = "https://res.cloudinary.com/jds/image/upload/v1606062870/jds-site/og/website-development-fort-st-john_shhrui.jpg",
  ogImageWidth = "3000",
  ogImageHeight = "2000",
  ogUrl = "https://www.jensendesignshop.com",
  ogImageAlt = "Custom Website Development in Fort St John, British Columbia.",
  twitterImage = "https://res.cloudinary.com/jds/image/upload/v1606062949/jds-site/twitter/twitter-website-development-fort-st-john_nv2dqt.jpg",
}) {
  const siteTitle = "Fort St John Web Design";

  useEffect(() => {
    (function (h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 2114260, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:height" content={ogImageAlt} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={twitterImage} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:creator" content="@IngvarMark" />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
