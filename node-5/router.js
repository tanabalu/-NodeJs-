function route(handle, pathname, response, postData) {
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log('No such route!');
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write('404 Not Found!');
        response.end();
    }
}

exports.route = route;