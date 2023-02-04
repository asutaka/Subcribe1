import cron from "cron";
import Conn from "../database.js";

const MAX_LENGTH = 500;
var arr = ["SYM2", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM9", "SYM10",
"SYM11", "SYM12", "SYM13", "SYM14", "SYM15", "SYM16", "SYM17", "SYM18", "SYM19", "SYM20",
"SYM21","SYM22", "SYM23", "SYM24", "SYM25", "SYM26", "SYM27", "SYM28", "SYM29", "SYM30",
"SYM31","SYM32", "SYM33", "SYM34", "SYM35", "SYM36", "SYM37", "SYM38", "SYM39", "SYM40",];

const SyncData = () => {
    new cron.CronJob('0 30 0 * * *', () => {
    // new cron.CronJob('0/5 * * * * *', () => {
        var query = "SELECT COUNT(1) as C FROM SYM1";
        try{
            Conn().each(query, (error, row) => {
                if (error) {
                    throw new Error(error.message);
                }
                var div = row.C - MAX_LENGTH;
                if(div > 0)
                {
                    var queryDelete = "DELETE FROM SYM1 WHERE ID in ( SELECT ID FROM SYM1 LIMIT ?)"
                    Conn().run(queryDelete, [div], function (errorDelete) {
                      if (errorDelete) {
                        return console.error(errorDelete.message);
                      }
                    });
                    //Xóa các bảng còn lại
                    try{
                        const sleep = ms =>
                        new Promise(res => {
                            setTimeout(res, ms)
                        })

                        const myPromise = num =>
                        sleep(5000).then(async () => {
                            try{
                                var queryDetail = "SELECT COUNT(1) as C FROM " + num;
                                Conn().each(queryDetail, (errorDetail, rowDetail) => {
                                    if (errorDetail) {
                                        throw new Error(errorDetail.message);
                                    }
                                    var divDetail = rowDetail.C - MAX_LENGTH;
                                    if(divDetail > 0)
                                    {
                                        var queryDeleteDetail = "DELETE FROM " + num + " WHERE ID in ( SELECT ID FROM " + num + " LIMIT ?)"
                                        Conn().run(queryDeleteDetail, [divDetail], function (errorDetailDelete) {
                                          if (errorDetailDelete) {
                                            return console.error(errorDetailDelete.message);
                                          }
                                        });
                                    }
                                });
                            }
                            catch(e)
                            {
                                console.log("[EXCEPTION] Database cannot delete record| " + e);
                            }
                        })

                        const forEachSeries = async (iterable, action) => {
                            for (const x of iterable) {
                                await action(x)
                            }
                        }

                        forEachSeries(arr, myPromise)
                        .then(() => {
                            // console.log('all done!')
                        })
                    }
                    catch(ex)
                    {
                        console.log("[EXCEPTION]","cronjob.SyncData Detail", ex);
                    }
                    
                }
            });
        }
        catch(e)
        {
            console.log("[EXCEPTION]","cronjob.SyncData", e);
        } 
    }).start();
}

export default { SyncData };
