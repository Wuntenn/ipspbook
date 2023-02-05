const PROXY_CONFIG = {
  "/websocket": {
    "ws": "true",
    "secure": false,
    "target": "http://ec2-18-130-236-146.eu-west-2.compute.amazonaws.com:8080/sportsbook/",
    "logLevel": "debug",
    "changeOrigin": true,
    "headers": {
      "Connection": "Upgrade",
      "Upgrade": "websocket"
    },
    "onProxyReq": function(proxyReq, req, res) {
      // Tell the proxy to upgrade the connection to websockets also
      console.log('onProxyReq: Upgrading protocol');
      proxyReq.setHeader('Connection', 'Upgrade');
      proxyReq.setHeader('Upgrade', 'websocket');
    }
  }
}

module.exports = PROXY_CONFIG;