import SocketClient from './lib/socketClient.mjs';
import express from "express";
// import cronjob from './cronjob.mjs';
import handle from "./lib/handle.mjs";

const PORT = 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log('server running!'));
// //Job
// cronjob.SyncData();
//API
app.get('/current', function(req, res) {
    res.status(200).json({data: handle.listCurrent });
});

app.get('/mirror', function(req, res) {
    res.status(200).json({data: handle.listMirror });
});

// app.get('/check', function(req, res) {
//     res.status(200).json({data: handle.listInsert });
// });

app.get('/test/:name', function(req, res) {
    // var name = req.params.name;
    // handle.listInsert.push({"name": name, "e": 1, "c": 2, "o": 3, "h": 4, "l": 5, "v": 6, "q": 7, "ut": 8, "state": true });
    res.status(200).json({data: handle.listArr1 });
});

new SocketClient('btcusdt', 3600000); //'btcusdt'
// new SocketClient('xrpusdt', handle.listArr2, 3605000); //'xrpusdt'
// new SocketClient('eosusdt', handle.listArr3, 3610000); //'eosusdt'
// new SocketClient('etcusdt', handle.listArr4, 3615000); //'etcusdt'
// new SocketClient('ltcusdt', handle.listArr5, 3620000); //'ltcusdt'
// new SocketClient('fetusdt', handle.listArr6, 3625000); //'fetusdt'
// new SocketClient('omgusdt', handle.listArr7, 3630000); //'omgusdt'
// new SocketClient('maticusdt', handle.listArr8, 3635000); //'maticusdt'
// new SocketClient('oneusdt', handle.listArr9, 3640000); //'oneusdt'

// new SocketClient(process.env.VAL1, 3600000); //'btcusdt'
// new SocketClient(process.env.VAL2, 3605000); //'xrpusdt'
// new SocketClient(process.env.VAL3, 3610000); //'eosusdt'
// new SocketClient(process.env.VAL4, 3615000); //'etcusdt'
// new SocketClient(process.env.VAL5, 3620000); //'ltcusdt'
// new SocketClient(process.env.VAL6, 3625000); //'fetusdt'
// new SocketClient(process.env.VAL7, 3630000); //'omgusdt'
// new SocketClient(process.env.VAL8, 3635000); //'maticusdt'
// new SocketClient(process.env.VAL9, 3640000); //'oneusdt'
// new SocketClient(process.env.VAL10, 3645000); //'ftmusdt'
// new SocketClient(process.env.VAL11, 3650000); //'algousdt'
// new SocketClient(process.env.VAL12, 3655000); //'dogeusdt'
// new SocketClient(process.env.VAL13, 3660000); //'busdusdt'
// new SocketClient(process.env.VAL14, 3665000); //'iotxusdt'
// new SocketClient(process.env.VAL15, 3670000); //'ctxcusdt'
// new SocketClient(process.env.VAL16, 3675000); //'compusdt'
// new SocketClient(process.env.VAL17, 3680000); //'lrcusdt'
// new SocketClient(process.env.VAL18, 3685000); //'sxpusdt'
// new SocketClient(process.env.VAL19, 3690000); //'balusdt'
// new SocketClient(process.env.VAL20, 3695000); //'sandusdt'
// new SocketClient(process.env.VAL21, 3700000); //'ksmusdt'
// new SocketClient(process.env.VAL22, 3705000); //'egldusdt'
// new SocketClient(process.env.VAL23, 3710000); //'uniusdt'
// new SocketClient(process.env.VAL24, 3715000); //'avaxusdt'
// new SocketClient(process.env.VAL25, 3720000); //'filusdt'
// new SocketClient(process.env.VAL26, 3725000); //'axsusdt'
// new SocketClient(process.env.VAL27, 3730000); //'audiousdt'
// new SocketClient(process.env.VAL28, 3735000); //'unfiusdt'
// new SocketClient(process.env.VAL29, 3740000); //'grtusdt'
// new SocketClient(process.env.VAL30, 3745000); //'psgusdt'
// new SocketClient(process.env.VAL31, 3750000); //'litusdt'
// new SocketClient(process.env.VAL32, 3755000); //'sfpusdt'
// new SocketClient(process.env.VAL33, 3760000); //'cakeusdt'
// new SocketClient(process.env.VAL34, 3765000); //'aliceusdt'
// new SocketClient(process.env.VAL35, 3770000); //'ethusdt'
// new SocketClient(process.env.VAL36, 3775000); //'linkusdt'
// new SocketClient(process.env.VAL37, 3780000); //'trxusdt'
// new SocketClient(process.env.VAL38, 3785000); //'bnbusdt'
// new SocketClient(process.env.VAL39, 3790000); //'troyusdt'
// new SocketClient(process.env.VAL40, 3795000); //'dotusdt'


