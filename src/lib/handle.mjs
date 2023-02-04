import Conn from "../../database.js";

let arrCurrent = [];
let arrMirror = [];

const listCurrent = arrCurrent;
const listMirror = arrMirror;
let flag = false;

const setFlag = (val) => {
    flag = val;
}

const handleData = async (symbol, num, data) => {
    try{
        let _e = data.k.t;
        let _c = data.k.c;
        let _o = data.k.o;
        let _h = data.k.h;
        let _l = data.k.l;
        let _v = data.k.v;
        let _q = data.k.q;
        let _ut = data.E;
        let _state = data.k.x;

        if(_state == true){
            var index = arrMirror.findIndex(x => x.name == symbol);
            if(index > -1)
                arrMirror.splice(index, 1);
            arrMirror.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            if(flag == true){
                return;
            }
            var query = "INSERT INTO SYM" + num + " (Symbol, E, C, O, H, L, V, Q, UT, State) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            var state = _state = true? 1 : 0;
            try{
                Conn().run(query, [symbol, _e, _c, _o, _h, _l, _v, _q, _ut, state], function (error) {
                    if (error) {
                      console.error(error.message);
                    }
                    // console.log(`Inserted a row with the ID: ${this.lastID}`);
                  }
                );
            }
            catch(exe)
            {
                console.log("EXCEPTION","handleData", query, exe);
            }
        }
        else
        {
            var index = arrCurrent.findIndex(x => x.name == symbol);
            if(index > -1)
                arrCurrent.splice(index, 1);
            arrCurrent.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
        }
    }
    catch(e)
    {
        console.log("EXCEPTION","handleData", symbol, e);
    }
}

export default { handleData, setFlag,  listCurrent, listMirror };