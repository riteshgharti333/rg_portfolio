"use client";

import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEO({
  title,
  description,
  canonical,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {canonical && (
        <meta property="og:url" content={canonical} />
      )}

      <meta property="og:type" content="website" />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description}
      />
    </Head>
  );
}