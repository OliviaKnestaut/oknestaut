


// Redirect for mobile when clicking Case Studies
document.querySelector('.case-studies').addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        window.location.href = 'index.html';
    } else {
      e.preventDefault(); // Prevent default action only on desktop
    }
    });

dimbox.setConfig({
    // close the modal on click outside
    closeOnOverlayClick: true,
     // Fullscreen options
    fullscreen: false,
    showFullscreenButton: true,
    svgFullscreenButton: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"/></svg>',
    svgFullscreenExitButton: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"/></svg>',
    // 16x9, 4x3, 1x1 and 9x16
    iframeRatio: '16x9',
    // default selector
    selector: 'a[data-dimbox]',
    // allows the user to download the media
    showDownloadButton: true,
    // custom icons
    svgCloseButton: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',
    svgDownloadButton: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>',
    svgPrevNextButton: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>',
    // or light
    theme: 'dark',
    // video options
    videoAutoplay: true,
    videoControls: true,
    videoLoop: false,
    videoVolume: null,
    // XHR response type
    xhrResponseType: 'json',
    // custom templates
    ajaxTemplate: `
    <div class="dimbox-ajax-container">
        <div class="dimbox-ajax-content">{{content}}</div>
        <div class="dimbox-caption">{{caption}}</div>
    </div>
    `,
    imageTemplate: `
    <figure class="dimbox-figure">
        <img src="{{src}}" class="dimbox-image" alt="{{alt}}" />
        <figcaption class="dimbox-caption">{{caption}}</figcaption>
    </figure>`,
    iframeTemplate: `
    <div class="dimbox-iframe-container">
        <iframe src="{{src}}" class="dimbox-iframe"></iframe>
        <div class="dimbox-caption">{{caption}}</div>
    </div>
    `,
    inlineTemplate: `
    <div class="dimbox-inline-container">
        <div class="dimbox-inline-content">{{content}}</div>
        <div class="dimbox-caption">{{caption}}</div>
    </div>
    `,
    sequenceTemplate: '<span class="dimbox-sequence-current">{{current}}</span> / <span class="dimbox-sequence-total">{{total}}</span>',
    videoTemplate: `
    <div class="dimbox-video-container">
        <video src="{{src}}" class="dimbox-video"></video>
        <div class="dimbox-caption">{{caption}}</div>
    </div>
    `,
    // callbacks
    onBeforeOpen: function() {
        console.log('onBeforeOpen event callback here hi!');
    },
    onAfterOpen: function() {
        console.log('onAfterOpen event callback here hi!');
    },
    onBeforeUpdateContent: function() {
        console.log('onBeforeUpdateContent event callback here hi!');
    },
    onAfterUpdateContent: function() {
        console.log('onAfterUpdateContent event callback here hi!');
    },
    onContentLoaded: function() {
        console.log('onContentLoaded event callback here hi!');
    },
    onDownload: function() {
        console.log('onDownload event callback here hi!');
    },
    onBeforeEnterFullscreen: function() {
        console.log('onBeforeEnterFullscreen event callback here hi!');
    },
    onAfterEnterFullscreen: function() {
        console.log('onAfterEnterFullscreen event callback here hi!');
    },
    onBeforeExitFullscreen: function() {
        console.log('onBeforeExitFullscreen event callback here hi!');
    },
    onAfterExitFullscreen: function() {
        console.log('onAfterExitFullscreen event callback here hi!');
    },
    onBeforeClose: function() {
        console.log('onBeforeClose event callback here hi!');
    },
    onAfterClose: function() {
        console.log('onAfterClose event callback here hi!');
    }
});

// close
dimbox.close();
// go to the next item
dimbox.next();
// back to the previous item
dimbox.previous();
// open an element
var myAElement = document.getElementById('myAElement');
dimbox.open(myAElement);
