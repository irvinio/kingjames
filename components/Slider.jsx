import { useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

export default function Slider({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(slider) {
              setCurrentSlide(slider.track.details.rel)
            },
            created() {
              setLoaded(true)
            },
            loop: true,
            breakpoints: {
                "(min-width: 1200px)": {
                  disabled: true
                }
              },
            slides: {
            origin: "center",
            perView: 1
            }
        },
        []
      )
    
      return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="columns is-variable is-0-mobile is-0-tablet is-5-widescreen keen-slider">
                    {slides.map(slide => (
                    <div className='keen-slider__slide column' key={slide.title}>
                        <div className='is-flex is-flex-direction-column is-justify-content-flex-end'>
                            <Image
                            src={slide.imageUrl}
                            alt={`${slide.title} background`}
                            fill
                            quality={90}
                            sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 100vw,
                                    33vw"
                            className="slide-bg"
                            />
                            <span className='accent mb-small'></span>
                            <h3 className='slide-heading title is-3 mb-small'>{slide.title}</h3>
                            <p className='slide-description'>{slide.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                {loaded && instanceRef.current && (
                    <>
                      <Arrow
                        left
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                      />
          
                      <Arrow
                        onClick={(e) =>
                          e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                          currentSlide ===
                          instanceRef.current.track.details.slides.length - 1
                        }
                      />
                    </>
                )}
            </div>
        </>
      )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabeld} is-hidden-widescreen`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
}
