import Head from 'next/head'
import Hero from '../components/Hero'
import Blurb from '../components/Blurb';
import Image from 'next/image';
import Slider from '../components/Slider';

export const getStaticProps = async () => {

    const res = await fetch('https://kj.irvin.io/');
    const data = await res.json();

    const slider = await fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/');
    const slides = await slider.json();

    return {
      props: {
        data, slides
      }
    }
}

export default function Home({ data, slides }) {

  return (
    <>
      <Head>
        <title>King James Digital</title>
        <meta name="description" content="King James Group is a 20-year old, independent South African agency, made up of seven specialist companies and divisions that work in tandem." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/x-icon" href="../img/favicon.png" />
      </Head>

      <div className='container is-fullhd'>
        <Hero
          url={'/img/hero.png'}
          alt={'José Mourinho background'}
          title={'Live with Confidence'}
          subtitle={'José Mourinho brings confidence to pan-African Sanlam campaign.'}
          cta={'View project'}
        />

        <section id='services' className='pdb-zero'>
          <h5 className='subtitle is-spaced mb-medium'><span className='accent'></span>What we do</h5>
          <h1 className='title is-1 is-size-3-mobile mb-medium'>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
          <div className='columns is-variable is-6-tablet is-flex-wrap-wrap'>
            {data.services.map(service => (
              <Blurb
                key={service.title}
                iconUrl={service.iconUrl}
                title={service.title}
                content={service.content}
                alt={`${service.title} icon`}
              />
            ))}
          </div>
        </section>

        <section id='cases' className='pdb-zero'>
          <h5 className='subtitle is-spaced mb-medium'><span className='accent'></span>Case studies</h5>
          <Slider
            slides={slides}
          />              
        </section>

        <section id='brands'>
          <h5 className='subtitle is-spaced mb-medium'><span className='accent'></span>You&apos;ll be in good company</h5>
          <h1 className='title is-1 is-size-3-mobile mb-medium'>Trusted by leading brands</h1>
          <div className='columns is-gapless is-justify-content-center is-flex-wrap-wrap'>
            {data.brands.map(brand => (
              <div className='column is-flex is-justify-content-center is-align-items-center is-one-third-tablet is-one-fifth-widescreen' key={brand.title}>
                <Image
                  src={brand.logoUrl}
                  height={brand.height}
                  width={100}
                  alt={`${brand.title} icon`}
                  style={{height:brand.height}}
                />
              </div>
            ))}
          </div>
        </section>

      </div>

    </>
  )
}
