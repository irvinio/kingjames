import Image from "next/image"

export default function Hero({ url, alt, title, subtitle, cta}) {
  return (
    <section className="hero">
        <Image
            src={url}
            alt={alt}
            fill
            priority={true}
            quality={90}
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 100vw,
                    100vw"
            className="hero-bg"
        />
        <div className="hero-body is-flex-direction-column is-justify-content-flex-end is-align-items-flex-start">
            <h1 className="title is-spaced is-1 is-size-3-mobile has-text-white-bis mb-6">
                {title}
            </h1>
            <h5 className="subtitle is-5 has-text-white-ter">
                {subtitle}
            </h5>
            <a className='button is-primary is-small is-rounded has-text-weight-bold' href="#">
                {cta}
            </a>
        </div>
    </section>
  )
}
