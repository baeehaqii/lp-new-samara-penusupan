"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
    id: number
    name: string
    rating: number
    text: string
}

export default function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Indra Praja",
            rating: 5,
            text: "Bagus perumahannya, langsung ketemu jalan lingkar, kawasannya asri, recommended buat hunian.",
        },
        {
            id: 2,
            name: "Reza",
            rating: 5,
            text: "Jalannya lebar. Dikira harganya mahal ternyata terjangkau banget. Rekomen pokoke.",
        },

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="testimonials-title">Apa Kata Mereka</h2>
                </div>

                <div className="testimonials-grid">
                    <div>
                        <p className="testimonials-text">{currentTestimonial.text}</p>
                        <div className="testimonials-stars">
                            {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                                <Star key={i} className="testimonials-star" />
                            ))}
                        </div>
                        <div>
                            <h3 className="testimonials-name">{currentTestimonial.name}</h3>
                        </div>
                    </div>
                </div>

                <div className="testimonials-controls">
                    <button
                        onClick={handlePrev}
                        className="testimonials-btn"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="testimonials-btn testimonials-btn-primary"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
