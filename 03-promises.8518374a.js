function e(e,t){return new Promise(((o,n)=>{const r=Math.random()<.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("click",(function(t){t.preventDefault();const{delay:o,step:n,amount:r}=t.currentTarget.elements;let l=Number(o.value),i=Number(n.value),s=Number(r.value);for(let o=1;o<=s;o+=1)o>1&&(l+=i),e(o,l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.8518374a.js.map
