import Head from "next/head";

export const desc = "portfolio website";

interface IProps {
  title: string;
  description?: string;
  url?: string;
  img?: string;
}

const MetaTag = ({
  title,
  description = desc,
  url,
  img = "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/272284490_624309448805798_6040205860195248592_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=hLsDK9rjl9sAX_OcTEg&tn=Wk0NDv3mX9OqGKcP&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AT9fNIDLOc4-5a8JMxSio4PUvxaTHruPya4kJ7AhhjL4iw&oe=62E30C65&_nc_sid=5eceaa",
}: IProps) => {
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
