<template>
       <!-- Navbar start -->
   <div class="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            <div class="container topbar bg-primary d-none d-lg-block py-2" style="border-radius: 20px 40px">
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-light"></i> <a href="#" class="text-white">AVENUE ABDELLAH KANOUN CITE ASSALAM Agadir, Morocco</a></small>
                        <small class="me-3"><i class="fas fa-envelope me-2 text-light"></i><a href="email:groupeagodent@gmaial.com" class="text-white">rhazesinstitut413@gmail.com</a></small>
                    </div>
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
                    <a href="./index.html"><img src="../../public/img/rhazes-sante-mini.png" width="280px" alt="" href=""></a>
                    <!-- <a href="index.html" class="navbar-brand"><h1 class="text-primary display-6">Groupe<span class="text-secondary">Agodent</span></h1></a> -->
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">   
                            <router-link to="/" class="nav-item nav-link active">Accueil</router-link>
                            <router-link to="/about" class="nav-item nav-link ">à propos</router-link>
                            <router-link to="/services" class="nav-item nav-link ">Services</router-link>
                            <router-link to="/programmes" class="nav-item nav-link ">Programmes</router-link>
                            <router-link to="/events" class="nav-item nav-link ">Événements</router-link>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="blog.html" class="dropdown-item">Our Blog</a>
                                    <a href="team.html" class="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="404.html" class="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <router-link to="/contact" class="nav-item nav-link ">Contact</router-link>
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
                                <span class="text-success">Avez-vous des questions?</span>
                                <a href="tel:05"><span class="text-secondary ">+212 529 126 242</span></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    </div>
</template>
<script>
    export default {
         name: 'Navbar'
    };
</script>