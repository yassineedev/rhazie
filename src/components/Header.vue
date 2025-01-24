<template>
       <!-- Navbar start -->
   <div class="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            <div class="container topbar bg-primary d-none d-lg-block py-2" style="border-radius: 20px 40px">
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-light"></i> <a href="#" class="text-white">AVENUE ABDELLAH KANOUN CITE ASSALAM Agadir, Morocco</a></small>
                        <small class="me-3"><i class="fas fa-envelope me-2 text-light"></i><a href="email:groupeagodent@gmaial.com" class="text-white">rhazesinstitut413@gmail.com</a></small>
                    </div>
                    <button @click="$i18n.locale = `ar`" class="btn btn-light">AR</button>
                    <button @click="$i18n.locale = `fr`" class="btn btn-light">FR</button>
                    <button @click="$i18n.locale = `en`" class="btn btn-light">EN</button>
                    <div class="top-link pe-2">
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-facebook-f text-secondary"></i></a>
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-tiktok text-secondary"></i></a>
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-instagram text-secondary"></i></a>
                        <a href="" class="btn btn-light btn-sm-square rounded-circle"><i class="fab fa-whatsapp text-secondary"></i></a>
                    </div>
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light navbar-expand-xl py-3">
                    <router-link to="/" ><img src="../../public/img/rhazes-sante-mini.png" width="280px" alt="" href=""></router-link>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">   
                            <router-link to="/" class="nav-item nav-link active">{{$t('home')}}</router-link>
                            <router-link to="/about" class="nav-item nav-link ">{{$t('about')}}</router-link>
                            <router-link to="/services" class="nav-item nav-link ">{{ $t('service') }}</router-link>
                            <router-link to="/programmes" class="nav-item nav-link ">{{ $t('program') }}</router-link>
                            <router-link to="/events" class="nav-item nav-link ">{{$t('event')}}</router-link>
                            
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="blog.html" class="dropdown-item">Our Blog</a>
                                    <a href="team.html" class="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <router-link to="/contact" class="nav-item nav-link ">{{$t('contacts')}}</router-link>
                        </div>
                        <div class="d-flex me-4">
                            <div id="phone-tada" class="d-flex align-items-center justify-content-center">
                                <a href="" class="position-relative wow tada" data-wow-delay=".9s" >
                                    <i class="fa fa-phone-alt text-success fa-2x me-4"></i>
                                    <div class="position-absolute" style="top: -7px; left: 20px;">
                                        <span><i class="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column pe-3 border-end border-primary">
                                <span class="text-success">{{ $t('question') }}</span>
                                <a href="tel:05"><span class="text-secondary ">+212 529 126 242</span></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    </div>
</template>
<script setup>
    import { useI18n } from 'vue-i18n';

    // Access i18n instance
    const { locale, t } = useI18n();
</script>