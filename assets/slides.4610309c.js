Reveal.addEventListener("fragmentshown",function(a){!a.fragment.dataset.animation||(a.fragment.nodeName==="g"?[...a.fragment.children].forEach(t=>{t.classList.add(a.fragment.dataset.animation)}):a.fragment.classList.add(a.fragment.dataset.animation))});