(() => {
 // Typography is real selectable text using PinkadelicNativeWeb.ttf.
 // A failure of this optional backdrop conversion must never hide any text.
 // Render-time palette swap: never overwrite the source PNG or its dimensions.
 const background=new Image();background.onload=()=>{const c=document.createElement('canvas');c.width=background.naturalWidth;c.height=background.naturalHeight;const g=c.getContext('2d');g.imageSmoothingEnabled=false;g.drawImage(background,0,0);const pixels=g.getImageData(0,0,c.width,c.height);for(let i=0;i<pixels.data.length;i+=4){const r=pixels.data[i],green=pixels.data[i+1],b=pixels.data[i+2],hi=Math.max(r,green,b),lo=Math.min(r,green,b),d=hi-lo;if(d<=0||d<hi*.02)continue;let h=hi===r?(green-b)/d:hi===green?2+(b-r)/d:4+(r-green)/d;if(h<0)h+=6;if((h>=4.5&&h<=355/60)||(h>=18/60&&h<=40/60&&d>=hi*.65)){pixels.data[i]=hi;pixels.data[i+1]=Math.round(lo+d*100/223);pixels.data[i+2]=lo;}}g.putImageData(pixels,0,0);document.documentElement.style.setProperty('--native-backdrop','url("'+c.toDataURL()+'")');};background.src='NativeBackdrop.png';
})();
