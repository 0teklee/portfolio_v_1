import Head from "next/head";

export const desc = "portfolio website";

interface IProps {
  title: string;
  description?: string;
  url?: string;
  img?: string;
}

const MetaTag = ({ title, description = desc, url, img }: IProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content={img} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={img} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
    </Head>
  );
};

export default MetaTag;
