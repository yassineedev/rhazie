<template>
     <!-- Contact Start -->
     <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="p-5 bg-light rounded">
                    <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                        <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">{{ $t('contact') }}</h4>
                        <h1 class="display-3">{{ $t('contactH1') }}</h1>
                        <p class="mb-5">{{ $t('contactparagraph') }}</p>
                    </div>
                    <div class="row g-5 mb-5">
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="d-flex w-100 border border-primary p-4 rounded bg-white">
                                <i class="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div class="">
                                    <h4>{{ $t('address') }}</h4>
                                    <p class="mb-2">{{ $t('addressparagraph') }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="d-flex w-100 border border-primary p-4 rounded bg-white">
                                <i class="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div class="">
                                    <h4>{{ $t('mailus') }}</h4>
                                    <p class="mb-2">rhazesinstitut413@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="d-flex w-100 border border-primary p-4 rounded bg-white">
                                <i class="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div class="">
                                    <h4>{{ $t('phone') }}</h4>
                                    <p class="mb-2">+212 529 126 242</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                            <form action="">
                                <input type="text" class="w-100 form-control py-3 mb-5 border-primary" :placeholder="$t('name')">
                                <input type="email" class="w-100 form-control py-3 mb-5 border-primary" :placeholder="$t('email')">
                                <textarea class="w-100 form-control mb-5 border-primary" rows="8" cols="10" :placeholder="$t('message')"></textarea>
                                <button class="w-100 btn btn-primary form-control py-3 border-primary text-white bg-primary" type="submit">{{ $t('submitBtn') }}</button>
                            </form>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="border border-primary h-100 rounded">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4171.501071494839!2d-9.545991415123638!3d30.40341958175313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7957fd13efb%3A0x7e86438cab546d2e!2zSW5zdGl0dXQgQWxyYXppIERlIFNhbnRlINmF2LnZh9ivINin2YTYsdin2LLZiiDZhNmF2YfZhiDYp9mE2LXYrdip!5e1!3m2!1sar!2sma!4v1736083460735!5m2!1sar!2sma" 
                                class="w-100 h-100 rounded"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- Contact End -->
</template>