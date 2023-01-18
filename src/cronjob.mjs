import cron from "cron";
import handle from "./lib/handle.mjs";

const SyncData = () => {
    new cron.CronJob('30 30 2 * * *', () => {
        var len = 0;
        len = handle.listArr1.length - 500;
        if(len > 0)
        handle.listArr1.splice(0, len);
        len = handle.listArr2.length - 500;
        if(len > 0)
        handle.listArr2.splice(0, len);   
        len = handle.listArr3.length - 500;
        if(len > 0)
        handle.listArr3.splice(0, len);   
        len = handle.listArr4.length - 500;
        if(len > 0)
        handle.listArr4.splice(0, len);   
        len = handle.listArr5.length - 500;
        if(len > 0)
        handle.listArr5.splice(0, len);   
        len = handle.listArr6.length - 500;
        if(len > 0)
        handle.listArr6.splice(0, len);   
        len = handle.listArr7.length - 500;
        if(len > 0)
        handle.listArr7.splice(0, len);   
        len = handle.listArr8.length - 500;
        if(len > 0)
        handle.listArr8.splice(0, len);   
        len = handle.listArr9.length - 500;
        if(len > 0)
        handle.listArr9.splice(0, len);   
        len = handle.listArr10.length - 500;
        if(len > 0)
        handle.listArr10.splice(0, len);   
        len = handle.listArr11.length - 500;
        if(len > 0)
        handle.listArr11.splice(0, len);   
        len = handle.listArr12.length - 500;
        if(len > 0)
        handle.listArr12.splice(0, len);   
        len = handle.listArr13.length - 500;
        if(len > 0)
        handle.listArr13.splice(0, len);   
        len = handle.listArr14.length - 500;
        if(len > 0)
        handle.listArr14.splice(0, len);   
        len = handle.listArr15.length - 500;
        if(len > 0)
        handle.listArr15.splice(0, len);   
        len = handle.listArr16.length - 500;
        if(len > 0)
        handle.listArr16.splice(0, len);   
        len = handle.listArr17.length - 500;
        if(len > 0)
        handle.listArr17.splice(0, len);   
        len = handle.listArr18.length - 500;
        if(len > 0)
        handle.listArr18.splice(0, len);   
        len = handle.listArr19.length - 500;
        if(len > 0)
        handle.listArr19.splice(0, len);   
        len = handle.listArr20.length - 500;
        if(len > 0)
        handle.listArr20.splice(0, len);   
        len = handle.listArr21.length - 500;
        if(len > 0)
        handle.listArr21.splice(0, len);   
        len = handle.listArr22.length - 500;
        if(len > 0)
        handle.listArr22.splice(0, len);   
        len = handle.listArr23.length - 500;
        if(len > 0)
        handle.listArr23.splice(0, len);   
        len = handle.listArr24.length - 500;
        if(len > 0)
        handle.listArr24.splice(0, len);   
        len = handle.listArr25.length - 500;
        if(len > 0)
        handle.listArr25.splice(0, len);   
        len = handle.listArr26.length - 500;
        if(len > 0)
        handle.listArr26.splice(0, len);   
        len = handle.listArr27.length - 500;
        if(len > 0)
        handle.listArr27.splice(0, len);   
        len = handle.listArr28.length - 500;
        if(len > 0)
        handle.listArr28.splice(0, len);   
        len = handle.listArr29.length - 500;
        if(len > 0)
        handle.listArr29.splice(0, len);   
        len = handle.listArr30.length - 500;
        if(len > 0)
        handle.listArr30.splice(0, len);   
        len = handle.listArr31.length - 500;
        if(len > 0)
        handle.listArr31.splice(0, len);   
        len = handle.listArr32.length - 500;
        if(len > 0)
        handle.listArr32.splice(0, len);   
        len = handle.listArr33.length - 500;
        if(len > 0)
        handle.listArr33.splice(0, len);   
        len = handle.listArr34.length - 500;
        if(len > 0)
        handle.listArr34.splice(0, len);   
        len = handle.listArr35.length - 500;
        if(len > 0)
        handle.listArr35.splice(0, len);   
        len = handle.listArr36.length - 500;
        if(len > 0)
        handle.listArr36.splice(0, len);   
        len = handle.listArr37.length - 500;
        if(len > 0)
        handle.listArr37.splice(0, len);   
        len = handle.listArr38.length - 500;
        if(len > 0)
        handle.listArr38.splice(0, len);   
        len = handle.listArr39.length - 500;
        if(len > 0)
        handle.listArr39.splice(0, len);   
        len = handle.listArr40.length - 500;
        if(len > 0)
        handle.listArr40.splice(0, len);   
    }).start();
}

export default { SyncData };
