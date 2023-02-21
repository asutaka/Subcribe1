import SocketClient from './lib/socketClient.mjs';
import express from "express";
import handle from "./lib/handle.mjs";

const PORT = process.env.PORT || 8000;
const app = express();
app.get('/', async (req, res)  => {
    res.status(200).json({msg: "hello world", responseCode: 1 });
})

app.listen(PORT, () => console.log('server running!'));

app.get('/current', function(req, res) {
    res.status(200).json({data: handle.listCurrent });
});

app.get('/mirror', function(req, res) {
    res.status(200).json({data: handle.listMirror });
});

new SocketClient('1inchusdt', 3600000); 
new SocketClient('aaveusdt', 3605000); 
new SocketClient('acausdt', 3610000); 
new SocketClient('achusdt', 3615000); 
new SocketClient('acmusdt', 3620000); 
new SocketClient('adausdt', 3625000); 
new SocketClient('adxusdt', 3630000); 
new SocketClient('agldusdt', 3635000); 
new SocketClient('aionusdt', 3640000); 
new SocketClient('akrousdt', 3645000); 
new SocketClient('alcxusdt', 3650000); 
new SocketClient('algousdt', 3655000); 
new SocketClient('aliceusdt', 3660000); 
new SocketClient('alpacausdt', 3665000); 
new SocketClient('alphausdt', 3670000);
new SocketClient('alpineusdt', 3675000); 
new SocketClient('ampusdt', 3680000); 
// new SocketClient('ancusdt', 3685000); 
new SocketClient('ankrusdt', 3690000); 
new SocketClient('antusdt', 3695000); 
new SocketClient('apeusdt', 3700000); 
new SocketClient('api3usdt', 3705000); 
new SocketClient('aptusdt', 3710000); 
new SocketClient('ardrusdt', 3715000); 
new SocketClient('arpausdt', 3720000); 
new SocketClient('arusdt', 3725000); 
new SocketClient('asrusdt', 3730000);
new SocketClient('astrusdt', 3735000); 
new SocketClient('atausdt', 3740000); 
new SocketClient('atmusdt', 3745000); 
new SocketClient('atomusdt', 3750000); 
new SocketClient('auctionusdt', 3755000); 
new SocketClient('audiousdt', 3760000); 
new SocketClient('audusdt', 3765000); 
new SocketClient('autousdt', 3770000); 
new SocketClient('avausdt', 3775000);
new SocketClient('avaxusdt', 3780000);
new SocketClient('axsusdt', 3785000); 
new SocketClient('badgerusdt', 3790000); 
new SocketClient('bakeusdt', 3795000); 


