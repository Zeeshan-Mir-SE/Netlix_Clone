
    function toggleFAQ(el){
        const item = el.parentElement;
        const isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            if(openItem !== item){
                openItem.classList.remove('open');
            }
        });

        item.classList.toggle('open', !isOpen);
    }
