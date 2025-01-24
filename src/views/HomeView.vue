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
                    <h1 class="mb-3 text-white rhazi-style"> {{ $t('School') }} </h1>
                    <h1 class="mb-5 display-1 text-white">{{ $t('slogan') }}</h1>
                    <router-link to="/programmes" class="btn btn-success px-4 py-3 px-md-5  me-4 btn-border-radius">{{ $t('courseBtn') }}</router-link>
                    <router-link to="/contact" class="btn btn-success px-4 py-3 px-md-5  me-4 btn-border-radius">{{ $t('contactBtn') }}</router-link>
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
