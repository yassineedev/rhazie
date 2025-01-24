<template>
   <!-- Service Start -->
   <div class="container-fluid service py-5">
            <div class="container py-5">
                <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">{{$t('servicesTilte')}}</h4>
                    <h1 class="mb-5 display-3">{{ $t('services') }}</h1>
                </div>
                <div class="row g-5">
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
                        <div class="text-center border-primary border bg-white service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-inner">
                                    <div class="p-4"><i class="fas fa-language fa-6x text-success"></i></div>
                                    <a href="#" class="h4">{{ $t('languges') }}</a>
                                    <p class="my-3">{{ $t('langugesParagraph') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.3s">
                        <div class="text-center border-primary border bg-white service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-inner">
                                    <div class="p-4"><i class="fas fa-briefcase fa-6x text-success"></i></div>
                                    <a href="#" class="h4">{{ $t('stages') }}</a>
                                    <p class="my-3">{{ $t('stagesParagraph') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.5s">
                        <div class="text-center border-primary border bg-white service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-inner">
                                    <div class="p-4"><i class="fas fa-chalkboard-teacher fa-6x text-success"></i></div>
                                    <a href="#" class="h4">{{$t('staff')}}</a>
                                    <p class="my-3">{{ $t('staffParagraph') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-3 wow fadeIn" data-wow-delay="0.7s">
                        <div class="text-center border-primary border bg-white service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-inner">
                                    <div class="p-4"><i class="fa-sharp-duotone fa-solid fa-monitor-waveform fa-6x text-success"></i></div>
                                    <a href="#" class="h4">{{ $t('tools') }} </a>
                                    <p class="my-3">{{ $t('toolsPragraph') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Service End -->
</template>