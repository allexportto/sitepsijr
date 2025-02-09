<script>
    window.onscroll = function() {
        document.getElementById('back-to-top').style.display = 
            window.scrollY > 100 ? 'block' : 'none';
    };
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>
