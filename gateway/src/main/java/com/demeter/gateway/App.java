package com.demeter.gateway;

import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

/**
 * Hello world!
 *
 */
public class App
{
    public static void main( String[] args )
    {
        var vertx = Vertx.vertx();
        var server = vertx.createHttpServer();
        var router = Router.router(vertx);



        server.requestHandler(router::accept)
              .listen(9000);
    }
}
