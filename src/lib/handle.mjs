let arrCurrent = [];
let arrMirror = [];

let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];

let arr10 = [];
let arr11 = [];
let arr12 = [];
let arr13 = [];
let arr14 = [];
let arr15 = [];
let arr16 = [];
let arr17 = [];
let arr18 = [];
let arr19 = [];

let arr20 = [];
let arr21 = [];
let arr22 = [];
let arr23 = [];
let arr24 = [];
let arr25 = [];
let arr26 = [];
let arr27 = [];
let arr28 = [];
let arr29 = [];

let arr30 = [];
let arr31 = [];
let arr32 = [];
let arr33 = [];
let arr34 = [];
let arr35 = [];
let arr36 = [];
let arr37 = [];
let arr38 = [];
let arr39 = [];

let arr40 = [];

const listCurrent = arrCurrent;
const listMirror = arrMirror;

const listArr1 = arr1;
const listArr2 = arr2;
const listArr3 = arr3;
const listArr4 = arr4;
const listArr5 = arr5;
const listArr6 = arr6;
const listArr7 = arr7;
const listArr8 = arr8;
const listArr9 = arr9;
const listArr10 = arr10 
const listArr11 = arr11;
const listArr12 = arr12;
const listArr13 = arr13;
const listArr14 = arr14;
const listArr15 = arr15;
const listArr16 = arr16;
const listArr17 = arr17;
const listArr18 = arr18;
const listArr19 = arr19;
const listArr20 = arr20;
const listArr21 = arr21;
const listArr22 = arr22;
const listArr23 = arr23;
const listArr24 = arr24;
const listArr25 = arr25;
const listArr26 = arr26;
const listArr27 = arr27;
const listArr28 = arr28;
const listArr29 = arr29;
const listArr30 = arr30;
const listArr31 = arr31;
const listArr32 = arr32;
const listArr33 = arr33;
const listArr34 = arr34;
const listArr35 = arr35;
const listArr36 = arr36;
const listArr37 = arr37;
const listArr38 = arr38;
const listArr39 = arr39;
const listArr40 = arr40;

const handleData = async (symbol, arr, data) => {
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
            arr.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            var filter = arrMirror.filter(x => x.name != symbol);
            arrMirror = filter;
            arrMirror.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
        }
        else
        {
            var item = arrCurrent.find(x => x.name == symbol);
            if(item == null || item == 'undefined'){
                arrCurrent.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else{
                var allowUpdate = (new Date()).getSeconds()%3;
                if(allowUpdate == 0){
                    var filter = arrCurrent.filter(x => x.name != symbol);
                    arrCurrent = filter;
                    arrCurrent.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
                }
            }
        }
    }
    catch(e)
    {
        console.log("EXCEPTION","handleData", symbol, e);
    }
}

export default { handleData,  listCurrent, listMirror, 
    listArr1, listArr2, listArr3, listArr4, listArr5, listArr6, listArr7, listArr8, listArr9, listArr10,
    listArr11, listArr12, listArr13, listArr14, listArr15, listArr16, listArr17, listArr18, listArr19, listArr20,
    listArr21, listArr22, listArr23, listArr24, listArr25, listArr26, listArr27, listArr28, listArr29, listArr30,
    listArr31, listArr32, listArr33, listArr34, listArr35, listArr36, listArr37, listArr38, listArr39, listArr40, };