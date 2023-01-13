import WebSocket from 'ws';
import logger from './logger.mjs';
import hand from './handle.mjs';

class SocketClient {
  constructor(symbol, num, timeout, baseUrl) {
    this.baseUrl = baseUrl || 'wss://stream.binance.com:9443/';
    this._symbol = symbol;
    this._path = 'ws/' + symbol +'@kline_1h';
    this._timeout = timeout || 5000;
    this._num = num;
    this._createSocket();
    this._handlers = new Map();
  }

  _createSocket() {
    console.log(`${this.baseUrl}${this._path}`);
    this._ws = new WebSocket(`${this.baseUrl}${this._path}`);

    this._ws.onopen = () => {
      logger.info('ws connected');
    };

    this._ws.on('pong', () => {
      logger.debug('receieved pong from server');
    });
    this._ws.on('ping', () => {
      logger.debug('==========receieved ping from server');
      this._ws.pong();
    });

    this._ws.onclose = () => {
      logger.warn('ws closed');
      setTimeout(() => {
        this._createSocket();
      }, 5000);
    };

    this._ws.onerror = (err) => {
      logger.warn('ws error', err);
    };

    this._ws.onmessage = (msg) => {
      try {
        const mes = JSON.parse(msg.data);
        hand.handleData(this._symbol, this._num, mes);
      } catch (e) {
        logger.warn('Parse message failed', e);
      }
    };

    this.heartBeat();
  }

  isMultiStream(message) {
    return message.stream && this._handlers.has(message.stream);
  }

  heartBeat() {
    setInterval(() => {
      if (this._ws.readyState === WebSocket.OPEN) {
        this._ws.ping();
        logger.debug("ping server", this._timeout);
      }
    }, this._timeout);
  }

  setHandler(method, callback) {
    if (!this._handlers.has(method)) {
      this._handlers.set(method, []);
    }
    this._handlers.get(method).push(callback);
  }
}

export default SocketClient;
