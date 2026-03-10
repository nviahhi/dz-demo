const testPromises1 = [
    Promise.reject('error1'),
    Promise.resolve('success'),
    Promise.resolve('late')
];

const testPromises2 = [
    Promise.resolve('first'),
    Promise.resolve('second')
];

async function race(promises) {
    const list = promises.map((p) => {
        let wrapped; 
        wrapped = new Promise((resolve) => {
          p.then(
            v => resolve({ ok: true, value: v, wrapped }),
            v => resolve({ ok: false, value: v, wrapped })
          );
        });
        return wrapped;
      }); 
    const res = await Promise.race(list);  
    return res.value;    
};

race(testPromises1).then(result => console.log(result));
race(testPromises2).then(result => console.log(result));
