function dirname(path) {
    return path.substring(0, path.lastIndexOf('/'))
}
(function() {
    window.pug = require('pug');
    const main = document.getElementById('main');
    const router = new (class extends PugRouter {
        constructor() {
            super(dirname(location.pathname), [
                '/system', '/devices'
            ]);
        }
        setPageContent(con) {
            main.innerHTML = con;
            for (let v of this.cache.entries()) {
                if (v[1] === con) {
                    main.setAttribute('file', v[0]);
                }
            }
        }
    })();
    router.start(main);
})();
