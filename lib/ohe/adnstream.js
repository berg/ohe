var request = require('request');
var es = require('event-stream');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function ADNStream(url) {
    EventEmitter.call(this);
    this.url = url;
}

util.inherits(ADNStream, EventEmitter);

ADNStream.prototype.process = function () {
    var that = this;

    this.request = request({
        url: this.url,
        method: 'GET'
    })

    this.request.on('error', function (error) {
        console.error('Error:', error);
    });

    this.request.on('response', function (response) {
        console.info('Got response:', response.statusCode);

        response.on('error', function (error) {
            console.error('Response error:', error);
        });
    });

    var processor = es.through(function (data) {
        var s = data.toString('utf-8');
        if (!s.length) return;
        var obj = JSON.parse(s);
        if (obj.meta.is_deleted) return;
        var type = obj.meta.type;

        that.emit(type, obj.data);
    });

    this.request.pipe(es.pipeline(es.split(), processor));
}

module.exports.ADNStream = ADNStream;
