document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar-link');
    const contents = document.querySelectorAll('.content');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            const target = this.dataset.navLink;

            links.forEach(function (link) {
                link.classList.remove('active');
            });

            this.classList.add('active');

            contents.forEach(function (content) {
                content.classList.remove('active');
            });

            document.getElementById(target + 'Content').classList.add('active');
        });
    });
});


