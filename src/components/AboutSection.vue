<script>
    import $ from 'jquery'; // Import jQuery

export default {
  name: 'VideoPlayer',
  mounted() {
     // Modal Video
     $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });

  },
};
</script>
<template>
    <!-- About Start -->
    <div class="container-fluid py-5 about bg-light">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="video border">
                    <button type="button" class="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/watch?v=rjXUGs-dae4&ab_channel=GroupeAgodent" data-bs-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            <div class="col-lg-7 wow fadeIn" data-wow-delay="0.3s">
                <h4 class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">{{ $t('aboutTitle') }}</h4>
                <h1 class="text-dark mb-4 display-5">{{ $t('aboutH1') }}</h1>
                <p class="text-dark mb-4">
                    {{ $t('aboutParagraph') }}
                </p>
                <div class="row mb-4">
                    <div class="col-lg-6">
                        <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-primary"></i>{{ $t('property1') }}</h6>
                        <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-primary"></i>{{ $t('property2') }}</h6>
                        <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-primary"></i>{{ $t('property3') }}</h6>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-primary"></i>{{ $t('property4') }}</h6>
                        <h6 class="mb-3"><i class="fas fa-check-circle me-2 text-primary"></i>{{ $t('property5') }}</h6>
                        <h6><i class="fas fa-check-circle me-2 text-primary"></i>{{ $t('property6') }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        <!-- Modal Video -->
        <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content rounded-0">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- 16:9 aspect ratio -->
                        <div class="ratio ratio-16x9">
                            <iframe class="embed-responsive-item" src="https://youtube.com/watch?v=j6DnG_oK-Eo&feature=youtu.be" id="video" allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>
                            <iframe width="1271" height="715" src="https://www.youtube.com/embed/j6DnG_oK-Eo" title="RHAZES" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
</template>