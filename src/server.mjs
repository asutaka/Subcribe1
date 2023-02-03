import SocketClient from './lib/socketClient.mjs';
import express from "express";
import cronjob from './cronjob.mjs';
import handle from "./lib/handle.mjs";
import bodyParser from 'body-parser';
import Conn from './lib/database.js';

// Conn().run(
//     `INSERT INTO SYM1 (Symbol, E, C, O, H, L, V, Q, UT, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//     ['name', 1,2,3,4,5,6,7,8,1],
//     function (error) {
//       if (error) {
//         console.error(error.message);
//       }
//       console.log(`Inserted a row with the ID: ${this.lastID}`);
//     }
//   );

// Conn().each(`SELECT * FROM SYM1`, (error, row) => {
//     if (error) {
//       throw new Error(error.message);
//     }
//     console.log("Sym1", row);
//   });

var jsonParser = bodyParser.json()
const PORT = process.env.PORT || 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log('server running!'));
//Job
cronjob.SyncData();
//API
app.post('/syncDataClient/:value', jsonParser,function (req, res) {
    try{
        handle.setFlag(req.params.value);
        return res.status(200).json({msg: "success", code: 1 });
    }
    catch(e)
    {
        handle.setFlag(req.params.value);
        return res.status(200).json({msg: "error", code: -99 });
    }
});

app.post('/syncDataClientVal', jsonParser,function (req, res) {
    try{
        var data = req.body;
        var num = data.num;
        if(num == 1)
        handle.listArr1 = data.data;
        if(num == 2)
        handle.listArr2 = data.data;
        if(num == 3)
        handle.listArr3 = data.data;
        if(num == 4)
        handle.listArr4 = data.data;
        if(num == 5)
        handle.listArr5 = data.data;
        if(num == 6)
        handle.listArr6 = data.data;
        if(num == 7)
        handle.listArr7 = data.data;
        if(num == 8)
        handle.listArr8 = data.data;
        if(num == 9)
        handle.listArr9 = data.data;
        if(num == 10)
        handle.listArr10 = data.data;
        if(num == 11)
        handle.listArr11 = data.data;
        if(num == 12)
        handle.listArr12 = data.data;
        if(num == 13)
        handle.listArr13 = data.data;
        if(num == 14)
        handle.listArr14 = data.data;
        if(num == 15)
        handle.listArr15 = data.data;
        if(num == 16)
        handle.listArr16 = data.data;
        if(num == 17)
        handle.listArr17 = data.data;
        if(num == 18)
        handle.listArr18 = data.data;
        if(num == 19)
        handle.listArr19 = data.data;
        if(num == 20)
        handle.listArr20 = data.data;
        if(num == 21)
        handle.listArr21 = data.data;
        if(num == 22)
        handle.listArr22 = data.data;
        if(num == 23)
        handle.listArr23 = data.data;
        if(num == 24)
        handle.listArr24 = data.data;
        if(num == 25)
        handle.listArr25 = data.data;
        if(num == 26)
        handle.listArr26 = data.data;
        if(num == 27)
        handle.listArr27= data.data;
        if(num == 28)
        handle.listArr28 = data.data;
        if(num == 29)
        handle.listArr29 = data.data;
        if(num == 30)
        handle.listArr30 = data.data;
        if(num == 31)
        handle.listArr31 = data.data;
        if(num == 32)
        handle.listArr32 = data.data;
        if(num == 33)
        handle.listArr33 = data.data;
        if(num == 34)
        handle.listArr34 = data.data;
        if(num == 35)
        handle.listArr35 = data.data;
        if(num == 36)
        handle.listArr36 = data.data;
        if(num == 37)
        handle.listArr37 = data.data;
        if(num == 38)
        handle.listArr38 = data.data;
        if(num == 39)
        handle.listArr39 = data.data;
        if(num == 40)
        handle.listArr40 = data.data;
        return res.status(200).json({msg: "success", code: 1 });
    }
    catch(e)
    {
        console.log(e);
        return res.status(200).json({msg: "error", code: -99 });
    }
});

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

new SocketClient('1inchusdt', 1, 3600000); 
new SocketClient('aaveusdt', 2, 3605000); 
new SocketClient('acausdt', 3, 3610000); 
new SocketClient('achusdt', 4, 3615000); 
new SocketClient('acmusdt', 5, 3620000); 
new SocketClient('adausdt', 6, 3625000); 
new SocketClient('adxusdt', 7, 3630000); 
new SocketClient('agldusdt', 8, 3635000); 
new SocketClient('aionusdt', 9, 3640000); 
new SocketClient('akrousdt', 10, 3645000); 
new SocketClient('alcxusdt', 11, 3650000); 
new SocketClient('algousdt', 12, 3655000); 
new SocketClient('aliceusdt', 13, 3660000); 
new SocketClient('alpacausdt', 14, 3665000); 
new SocketClient('alphausdt', 15, 3670000);
new SocketClient('alpineusdt', 16, 3675000); 
new SocketClient('ampusdt', 17, 3680000); 
// new SocketClient('ancusdt', 18, 3685000); 
new SocketClient('ankrusdt', 19, 3690000); 
new SocketClient('antusdt', 20, 3695000); 
new SocketClient('apeusdt', 21, 3700000); 
new SocketClient('api3usdt', 22, 3705000); 
new SocketClient('aptusdt', 23, 3710000); 
new SocketClient('ardrusdt', 24, 3715000); 
new SocketClient('arpausdt', 25, 3720000); 
new SocketClient('arusdt', 26, 3725000); 
new SocketClient('asrusdt', 27, 3730000);
new SocketClient('astrusdt', 28, 3735000); 
new SocketClient('atausdt', 29, 3740000); 
new SocketClient('atmusdt', 30, 3745000); 
new SocketClient('atomusdt', 31, 3750000); 
new SocketClient('auctionusdt', 32, 3755000); 
new SocketClient('audiousdt', 33, 3760000); 
new SocketClient('audusdt', 34, 3765000); 
new SocketClient('autousdt', 35, 3770000); 
new SocketClient('avausdt', 36, 3775000);
new SocketClient('avaxusdt', 37, 3780000);
new SocketClient('axsusdt', 38, 3785000); 
new SocketClient('badgerusdt', 39, 3790000); 
new SocketClient('bakeusdt', 40, 3795000); 


