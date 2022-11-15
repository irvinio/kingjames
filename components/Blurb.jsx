import Image from "next/image"

export default function Blurb({ iconUrl, title, content, alt}) {
  return (
    <div className='column is-blurb has-text-centered-mobile is-half-tablet is-one-quarter-widescreen'>
        <Image
            className='is-centered-mobile'
            src={iconUrl}
            width={64}
            height={64}
            alt={alt}
        />
        <h2 className='title is-4'>{title}</h2>
        <p className='is-size-5 has-text-left-mobile'>{content}</p>
    </div>
  )
}
