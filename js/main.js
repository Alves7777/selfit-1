let url = new URL(window.location.href);
const page = url.searchParams.get('page');

const routes = {
    'inicial': initial,

}

let content = notFound();

if (page === null) {
    content = initial();
} else if (routes[page]) {
    content = routes[page]();
}

document.getElementById('root').innerHTML = content;