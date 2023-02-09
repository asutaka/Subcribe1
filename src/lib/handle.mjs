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
            if(num == 1)
            {
                arr1.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 2)
            {
                arr2.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 3)
            {
                arr3.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 4)
            {
                arr4.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 5)
            {
                arr5.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 6)
            {
                arr6.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 7)
            {
                arr7.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 8)
            {
                arr8.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 9)
            {
                arr9.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 10)
            {
                arr10.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 11)
            {
                arr11.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 12)
            {
                arr12.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 13)
            {
                arr13.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 14)
            {
                arr14.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 15)
            {
                arr15.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 16)
            {
                arr16.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 17)
            {
                arr17.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 18)
            {
                arr18.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 19)
            {
                arr19.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 20)
            {
                arr20.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 21)
            {
                arr21.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 22)
            {
                arr22.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 23)
            {
                arr23.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 24)
            {
                arr24.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 25)
            {
                arr25.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 26)
            {
                arr26.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 27)
            {
                arr27.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 28)
            {
                arr28.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 29)
            {
                arr29.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 30)
            {
                arr30.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 31)
            {
                arr31.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 32)
            {
                arr32.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 33)
            {
                arr33.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 34)
            {
                arr34.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 35)
            {
                arr35.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 36)
            {
                arr36.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 37)
            {
                arr37.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 38)
            {
                arr38.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 39)
            {
                arr39.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
            }
            else if(num == 40)
            {
                arr40.push({"name": symbol, "e": _e, "c": _c, "o": _o, "h": _h, "l": _l, "v": _v, "q": _q, "ut": _ut, "state": _state }); 
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

export default { handleData, setFlag,  listCurrent, listMirror, 
    listArr1, listArr2, listArr3, listArr4, listArr5, listArr6, listArr7, listArr8, listArr9, listArr10,
    listArr11, listArr12, listArr13, listArr14, listArr15, listArr16, listArr17, listArr18, listArr19, listArr20,
    listArr21, listArr22, listArr23, listArr24, listArr25, listArr26, listArr27, listArr28, listArr29, listArr30,
    listArr31, listArr32, listArr33, listArr34, listArr35, listArr36, listArr37, listArr38, listArr39, listArr40, };