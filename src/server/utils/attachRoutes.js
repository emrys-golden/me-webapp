const logger = require('./logger');

function attachRoutes(router, config) {
  logger(`Attaching ${config.length} route(s)`);

  config.forEach((route, i) => {
    if (route.path && route.router) {
      router.use(route.path, route.router);
      logger(`Attached ${route.path} route`);
    } else {
      logger(`Unable to attach route ${i}`);
    }
  });

  return router;
}


module.exports = attachRoutes;
