<template>
            <!-- Programs Start -->
            <div class="container-fluid program  py-5">
            <div class="container py-5">
                <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style="max-width: 700px;">
                    <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">{{ $t('programmesTitle') }}</h4>
                    <h1 class="mb-5 display-3">{{$t('programmes')}}</h1>
                </div>
                <div class="row g-5 justify-content-center">
                    <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div class="program-item rounded">
                            <div class="program-img position-relative">
                                <div class="overflow-hidden img-border-radius">
                                    <img src="../../public/img/formation/aide-so.jpg" class="img-fluid w-100 h-100"  alt="Image">
                                </div>
                            </div>
                            <div class="program-text bg-white px-4 pb-3">
                                <div class="program-text-inner">
                                    <a href="#" class="h4">{{ $t('firstJob') }}</a>
                                    <p class="mt-3 mb-0">{{ $t('firstDescr') }}</p>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-between px-4 py-2 bg-success rounded-bottom">
                                <small class="text-white"><i class="fas fa-book me-1"></i> {{ $t('firstJob') }}</small>
                                <small class="text-white"><i class="fas fa-clock me-1"></i> {{$t('firstperiod')}}</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div class="program-item rounded">
                            <div class="program-img position-relative">
                                <div class="overflow-hidden img-border-radius">
                                    <img src="../../public/img/formation/aux.png" class="img-fluid w-100 h-100"  alt="Image">
                                </div>
                            </div>
                            <div class="program-text bg-white px-4 pb-3">
                                <div class="program-text-inner">
                                    <a href="#" class="h4"> {{ $t('secJob') }}</a>
                                    <p class="mt-3 mb-0">{{$t('secDescr')}}</p>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-between px-4 py-2 bg-success rounded-bottom">
                                <small class="text-white"><i class="fas fa-book me-1"></i> {{ $t('secJob') }}</small>
                                <small class="text-white"><i class="fas fa-clock me-1"></i> {{$t('secperiod')}}</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                        <div class="program-item rounded">
                            <div class="program-img position-relative">
                                <div class="overflow-hidden img-border-radius">
                                    <img src="../../public/img/formation/polyva.png" class="img-fluid w-100 h-100"  alt="Image">
                                </div>
                            </div>
                            <div class="program-text bg-white px-4 pb-3">
                                <div class="program-text-inner">
                                    <a href="#" class="h4">{{ $t('thirdJob') }}</a>
                                    <p class="mt-3 mb-0">{{ $t('thirdDescr') }}</p>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-between px-4 py-2 bg-success rounded-bottom">
                                <small class="text-white"><i class="fas fa-book me-1"></i>{{ $t('thirdJob') }}</small>
                                <small class="text-white"><i class="fas fa-clock me-1"></i>{{$t('thirdperiod')}}</small>
                            </div>
                        </div>
                    </div>
                </div> 
                
            </div>
        </div>
        <!-- Program End -->
</template>

<script>
  
</script>