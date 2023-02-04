import SocketClient from './lib/socketClient.mjs';
import express from "express";
import cronjob from './cronjob.mjs';
import handle from "./lib/handle.mjs";
import bodyParser from 'body-parser';
import Conn from "../database.js";

var jsonParser = bodyParser.json()
const PORT = process.env.PORT || 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log("server listen port: " + PORT));
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
        var query = "INSERT INTO SYM"+ num +" (Symbol, E, C, O, H, L, V, Q, UT, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        // console.log("data.data", data.data);
        const sleep = ms =>
        new Promise(res => {
            setTimeout(res, ms)
        })

        const myPromise = element =>
        sleep(10).then(async () => {
            try{
                Conn().run(query, [element.Symbol, element.E, element.C, element.O, element.H, element.L, element.V, element.Q, element.UT, element.State],
                    function (error) {
                        if (error) {
                            console.error(error.message);
                        }
                    }
                );
            }
            catch(e)
            {
                console.log("[EXCEPTION] Database cannot insert record| " + e);
            }
        })

        const forEachSeries = async (iterable, action) => {
            for (const x of iterable) {
                await action(x)
            }
        }

        forEachSeries(data.data, myPromise)
        .then(() => {
            // console.log('all done!')
        })
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
    var query = "SELECT * FROM SYM" + num;
    try{
        Conn().all(query, (error, rows) => {
            if (error) {
              throw new Error(error.message);
            }
            return res.status(200).json({data: rows });
          });
    }
    catch(e)
    {
        return res.status(200).json({data: [] });
    } 
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


