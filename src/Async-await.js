/**
 * async await直接是Generator的简化版
 */
async function fn() {
    console.log(1);

    // let v1 = await getData();
    // console.log(v1);

    // let v2 = await getData();
    // console.log(v2);

    // let v3 = await getData();
    // console.log(v3);

    try {
        var v1 = await getData();
        console.log(3);
    } catch(e) {
        console.log(e);
    }; 
}

function getData() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve(100);
            reject('err');
        }, 1000);
    } );
}

fn();