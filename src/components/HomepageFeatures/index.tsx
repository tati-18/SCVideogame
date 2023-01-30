import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  img?: string;
  description: JSX.Element;
  url?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Herramienta',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: require('@site/static/img/phaserLogo.png').default,
    description: (
      <>
        
        Phaser es un motor de juegos 2D realizado sobre Javascript. Es simplemente 
        un framework o biblioteca de código Javascript que puedes incluir en 
        tu página y mediante la cual puedes desarrollar juegos de diferentes tipos 
        y complejidades.            
      </>
    ),
  },
  {
    title: 'Videojuego',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    img: require('@site/static/img/1311.png').default,
    description: (
      <>
        Para jugar a este juego, necesitas un navegador web. Te invitamos a hacer click en 
        la imagen para acceder a la página de juego.
      </>
    ),
    url: 'https://margaritamawyin.github.io/RunCatVJ/',
  },
];

function Feature({title, Svg, description, url,img}: FeatureItem) {
  // Make the image clickable
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <a href={url}>
          {img ? 
          <img className={styles.featureImg} src={img} /> : 
          <Svg className={styles.featureSvg} role="img" />}
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
