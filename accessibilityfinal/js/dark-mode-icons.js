(function(){
    function updateIcons(){
        var html = document.documentElement;
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var darkActive = html.classList.contains('dark-mode') || html.dataset.theme === 'dark' || prefersDark;

        document.querySelectorAll('footer img.icon, .tools img').forEach(function(img){
            var darkSrc = img.getAttribute('data-dark');
            var orig = img.getAttribute('data-original-src');

            if(darkActive){
                if(darkSrc){ img.src = darkSrc; }
                else { img.classList.add('inverted-icon'); }
            } else {
                if(orig) img.src = orig;
                img.classList.remove('inverted-icon');
            }
        });
    }

    document.querySelectorAll('footer img.icon, .tools img').forEach(function(img){
        if(!img.getAttribute('data-original-src')) img.setAttribute('data-original-src', img.src);
    });

    if(window.matchMedia){
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        if(mq.addEventListener) mq.addEventListener('change', updateIcons);
        else if(mq.addListener) mq.addListener(updateIcons);
    }

    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(m){
            if(m.type === 'attributes' && (m.attributeName === 'class' || m.attributeName === 'data-theme')){
                updateIcons();
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class','data-theme'] });

    document.addEventListener('DOMContentLoaded', updateIcons);
    if(document.readyState === 'interactive' || document.readyState === 'complete') updateIcons();
})();
