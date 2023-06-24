const e=document.querySelector("form"),{delay:o,step:n,amount:t}=e;function i(e,o){Math.random()}e.addEventListener("submit",(function(e){e.preventDefault(),i(t.value)})),i().then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.62da2cb0.js.map
