<script setup>
    import Services from '../components/ServicesSection.vue'
    import Footer from '../components/Footer.vue'
</script>

<template>
        <!-- Page Header Start -->
        <div class="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container text-center py-5">
                <h1 class="display-2 text-white mb-4">Services</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white" aria-current="page">Services</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Page Header End -->
    <Services />
    <Footer />
</template>