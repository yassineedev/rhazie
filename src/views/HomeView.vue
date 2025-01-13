<script setup>
import About from '../components/AboutSection.vue'
import Services from '../components/ServicesSection.vue'
import Programmes from '../components/ProgramSection.vue'
import Events from '../components/EventsSection.vue'
import Team from '../components/TeamSection.vue'
import Testimonial from '../components/TestimonialsSection.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <!-- Hero Start -->
     <div class="container-fluid py-5 hero-header wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-7 col-md-12">
                    <h1 class="mb-3 text-primary rhazi-style">INSTITUT RHAZES</h1>
                    <h1 class="mb-5 display-1 text-white">Choisissez un metier pour votre avenir</h1>
                    <a href="" class="btn btn-success px-4 py-3 px-md-5  me-4 btn-border-radius">Notre Cours</a>
                    <a href="" class="btn btn-success px-4 py-3 px-md-5 btn-border-radius">Contact</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero End -->
    <About />
    <Services />
    <Programmes />
    <Events />
    <Team />
    <Testimonial />
    <Footer />
</template>
