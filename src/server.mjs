import SocketClient from './lib/socketClient.mjs';
import express from "express";
import cronjob from './cronjob.mjs';
import handle from "./lib/handle.mjs";

const PORT = 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log('server running!'));
//Job
cronjob.SyncData();
//API
app.get('/current', function(req, res) {
    res.status(200).json({data: handle.listCurrent });
});

app.get('/mirror', function(req, res) {
    res.status(200).json({data: handle.listMirror });
});

app.get('/symbol/:num', function(req, res) {
    var num = req.params.num;
    if(num == 1)
    return res.status(200).json({data: handle.listArr1 });
    if(num == 2)
    return res.status(200).json({data: handle.listArr2 });
    if(num == 3)
    return res.status(200).json({data: handle.listArr3 });
    if(num == 4)
    return res.status(200).json({data: handle.listArr4 });
    if(num == 5)
    return res.status(200).json({data: handle.listArr5 });
    if(num == 6)
    return res.status(200).json({data: handle.listArr6 });
    if(num == 7)
    return res.status(200).json({data: handle.listArr7 });
    if(num == 8)
    return res.status(200).json({data: handle.listArr8 });
    if(num == 9)
    return res.status(200).json({data: handle.listArr9 });
    if(num == 10)
    return res.status(200).json({data: handle.listArr10 });
    if(num == 11)
    return res.status(200).json({data: handle.listArr11 });
    if(num == 12)
    return res.status(200).json({data: handle.listArr12 });
    if(num == 13)
    return res.status(200).json({data: handle.listArr13 });
    if(num == 14)
    return res.status(200).json({data: handle.listArr14 });
    if(num == 15)
    return res.status(200).json({data: handle.listArr15 });
    if(num == 16)
    return res.status(200).json({data: handle.listArr16 });
    if(num == 17)
    return res.status(200).json({data: handle.listArr17 });
    if(num == 18)
    return res.status(200).json({data: handle.listArr18 });
    if(num == 19)
    return res.status(200).json({data: handle.listArr19 });
    if(num == 20)
    return res.status(200).json({data: handle.listArr20 });
    if(num == 21)
    return res.status(200).json({data: handle.listArr21 });
    if(num == 22)
    return res.status(200).json({data: handle.listArr22 });
    if(num == 23)
    return res.status(200).json({data: handle.listArr23 });
    if(num == 24)
    return res.status(200).json({data: handle.listArr24 });
    if(num == 25)
    return res.status(200).json({data: handle.listArr25 });
    if(num == 26)
    return res.status(200).json({data: handle.listArr26 });
    if(num == 27)
    return res.status(200).json({data: handle.listArr27 });
    if(num == 28)
    return res.status(200).json({data: handle.listArr28 });
    if(num == 29)
    return res.status(200).json({data: handle.listArr29 });
    if(num == 30)
    return res.status(200).json({data: handle.listArr30 });
    if(num == 31)
    return res.status(200).json({data: handle.listArr31 });
    if(num == 32)
    return res.status(200).json({data: handle.listArr32 });
    if(num == 33)
    return res.status(200).json({data: handle.listArr33 });
    if(num == 34)
    return res.status(200).json({data: handle.listArr34 });
    if(num == 35)
    return res.status(200).json({data: handle.listArr35 });
    if(num == 36)
    return res.status(200).json({data: handle.listArr36 });
    if(num == 37)
    return res.status(200).json({data: handle.listArr37 });
    if(num == 38)
    return res.status(200).json({data: handle.listArr38 });
    if(num == 39)
    return res.status(200).json({data: handle.listArr39 });
    if(num == 40)
    return res.status(200).json({data: handle.listArr40 });
});

new SocketClient('btcusdt', 1, 3600000); //'btcusdt'
new SocketClient('xrpusdt', 2, 3605000); //'xrpusdt'
new SocketClient('eosusdt', 3, 3610000); //'eosusdt'
new SocketClient('etcusdt', 4, 3615000); //'etcusdt'
new SocketClient('ltcusdt', 5, 3620000); //'ltcusdt'
new SocketClient('fetusdt', 6, 3625000); //'fetusdt'
new SocketClient('omgusdt', 7, 3630000); //'omgusdt'
new SocketClient('maticusdt', 8, 3635000); //'maticusdt'
new SocketClient('oneusdt', 9, 3640000); //'oneusdt'
new SocketClient('ftmusdt', 10, 3645000); //'ftmusdt'
new SocketClient('algousdt', 11, 3650000); //'algousdt'
new SocketClient('dogeusdt', 12, 3655000); //'dogeusdt'
new SocketClient('busdusdt', 13, 3660000); //'busdusdt'
new SocketClient('iotxusdt', 14, 3665000); //'iotxusdt'
new SocketClient('ctxcusdt', 15, 3670000); //'ctxcusdt'
new SocketClient('compusdt', 16, 3675000); //'compusdt'
new SocketClient('lrcusdt', 17, 3680000); //'lrcusdt'
new SocketClient('sxpusdt', 18, 3685000); //'sxpusdt'
new SocketClient('balusdt', 19, 3690000); //'balusdt'
new SocketClient('sandusdt', 20, 3695000); //'sandusdt'
new SocketClient('ksmusdt', 21, 3700000); //'ksmusdt'
new SocketClient('egldusdt', 22, 3705000); //'egldusdt'
new SocketClient('uniusdt', 23, 3710000); //'uniusdt'
new SocketClient('avaxusdt', 24, 3715000); //'avaxusdt'
new SocketClient('filusdt', 25, 3720000); //'filusdt'
new SocketClient('axsusdt', 26, 3725000); //'axsusdt'
new SocketClient('audiousdt', 27, 3730000); //'audiousdt'
new SocketClient('unfiusdt', 28, 3735000); //'unfiusdt'
new SocketClient('grtusdt', 29, 3740000); //'grtusdt'
new SocketClient('psgusdt', 30, 3745000); //'psgusdt'
new SocketClient('litusdt', 31, 3750000); //'litusdt'
new SocketClient('sfpusdt', 32, 3755000); //'sfpusdt'
new SocketClient('cakeusdt', 33, 3760000); //'cakeusdt'
new SocketClient('aliceusdt', 34, 3765000); //'aliceusdt'
new SocketClient('ethusdt', 35, 3770000); //'ethusdt'
new SocketClient('linkusdt', 36, 3775000); //'linkusdt'
new SocketClient('trxusdt', 37, 3780000); //'trxusdt'
new SocketClient('bnbusdt', 38, 3785000); //'bnbusdt'
new SocketClient('troyusdt', 39, 3790000); //'troyusdt'
new SocketClient('dotusdt', 40, 3795000); //'dotusdt'

// if(process.env.VAL1 != '')
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


