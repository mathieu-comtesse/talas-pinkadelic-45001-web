(() => {
 const atlas=new Image(),order='0123456789XEIT?YSNOPAUCVBRGMW:D.LHFK!J;\'"/-()QÄZ';
 const ids=new Map([...order].map((c,i)=>[c,i+2]));ids.set('…',54);['←','→','↑','↓'].forEach((c,i)=>ids.set(c,55+i));
 function normal(s){return s.toUpperCase().replace(/[’‘]/g,"'").replace(/[–—]/g,'-').replace(/Œ/g,'O').replace(/Æ/g,'A').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
 function paint(el){if(!atlas.complete||!atlas.naturalWidth||!el.offsetWidth)return;const style=getComputedStyle(el),size=parseFloat(style.fontSize),advance=size*7.5/16,padding=parseFloat(style.paddingLeft)||0,width=Math.ceil(el.clientWidth),max=Math.max(1,Math.floor((width-padding*2)/advance));
 const words=normal(el.innerText).split(/\n/),lines=[];for(const para of words){let line='';for(const word of para.split(/\s+/)){if(line&&line.length+1+word.length>max){lines.push(line);line=word;}else line+=(line?' ':'')+word;}lines.push(line);}
 const lineHeight=size*1.5,height=Math.max(Math.ceil(lines.length*lineHeight+(parseFloat(style.paddingTop)||0)*2),Math.ceil(el.clientHeight));
 const c=document.createElement('canvas');c.width=width;c.height=height;const g=c.getContext('2d');g.imageSmoothingEnabled=false;let y=(height-lines.length*lineHeight)/2;
 for(const line of lines){let x=(width-line.length*advance)/2;for(const char of line){const id=ids.get(char);if(id!==undefined){const n=id-2;g.drawImage(atlas,n%21*12,Math.floor(n/21)*16,12,16,Math.round(x),Math.round(y),advance,size);}x+=advance;}y+=lineHeight;}
 const selected=el.matches('button:hover,button:focus-visible,#start');const tint=selected?'#efef00':el.matches('h1,h2')?'#fd0000':el.matches('button')?'#ff839b':'#ffffff';
 const mask=document.createElement('canvas');mask.width=width;mask.height=height;mask.getContext('2d').drawImage(c,0,0);g.globalCompositeOperation='multiply';g.fillStyle=tint;g.fillRect(0,0,width,height);g.globalCompositeOperation='destination-in';g.drawImage(mask,0,0);
 el.style.setProperty('--native-text','url("'+c.toDataURL()+'")');el.style.minHeight=height+'px';el.classList.add('native-raster');
 }
 function redraw(){document.querySelectorAll('#cover h1,#cover h2,#cover p,button,#help h2,#help p').forEach(paint);}
 atlas.onload=redraw;atlas.src='NativeFont.png';window.addEventListener('resize',()=>{document.querySelectorAll('.native-raster').forEach(el=>el.style.minHeight='');redraw();});
 document.addEventListener('DOMContentLoaded',()=>{new MutationObserver(redraw).observe(document.getElementById('stage'),{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["hidden"]});document.querySelectorAll('button').forEach(el=>['mouseenter','mouseleave','focus','blur'].forEach(event=>el.addEventListener(event,()=>paint(el))));redraw();});
})();
