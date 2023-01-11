import axios from "axios";
import cron from "cron";
import handle from "./lib/handle.mjs";
 //http://127.0.0.1:3000
//  const strCon = process.env.CONN;
 const strCon = "https://717910926aca16.lhr.life";

const SyncData = async () => {
    new cron.CronJob('0/5 * * * * *', async () => {
        var arrHandle = handle.listInsert.slice(0, 10);
        var length = arrHandle.length;
        console.log("length", length);
        if(length > 0){
            do{
                //insert
                var item = arrHandle[0];
                var name = item.name;

                try{
                    let model = { table: name, e: item.e, c: item.c, o: item.o, h: item.h, l: item.l, v: item.v, q: item.q, ut: item.ut, state: item.state };
                    let res = await axios.post(strCon + '/addRecord', model);
                     //
                    var filter = arrHandle.filter(x => x.name != name);
                    arrHandle = filter;

                    var filterInsert = handle.listInsert.filter(x => x.name != name);
                    handle.listInsert = filterInsert;
                }
                catch(e){
                    console.log("EXCEPTION", e);
                }
                length = length - 1;
            }
            while(length > 0);
        }
    }).start();
}

export default { SyncData };