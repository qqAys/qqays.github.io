document$.subscribe(function() {
    fetch('https://service.qqays.xyz/visit_counter_s?site=blog', {
        mode: 'no-cors'
    })
})