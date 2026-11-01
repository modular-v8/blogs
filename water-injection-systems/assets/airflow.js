(async () => {
  'use strict';
  const canvas = document.getElementById('airflow-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const mask = new Image();
  mask.src = new URL('airflow-mask.png', document.currentScript.src).href;
  try { await mask.decode(); } catch (_) { return; }
  const layer = document.createElement('canvas');
  layer.width = W; layer.height = H;
  const flow = layer.getContext('2d');
  // Trace the original image's red, orange and blue air passages.
  const points = [[.148,.73],[.14,.64],[.158,.49],[.191,.34],[.215,.20],[.25,.095],[.32,.042],[.44,.043],[.57,.055],[.68,.079],[.79,.105],[.875,.115],[.886,.24],[.89,.38],[.864,.51],[.822,.548],[.776,.52],[.738,.437],[.704,.35],[.674,.283],[.625,.244],[.579,.25],[.534,.291],[.497,.35],[.46,.423],[.422,.505]];
  let length = 0;
  const segments = points.slice(1).map((b, i) => {
    const a = points[i];
    const dx = (b[0]-a[0])*W, dy = (b[1]-a[1])*H;
    const size = Math.hypot(dx,dy);
    const segment = {x:a[0]*W,y:a[1]*H,dx,dy,size,start:length};
    length += size;
    return segment;
  });
  function at(t) {
    const distance = Math.max(0,Math.min(1,t))*length;
    const s = segments.find(s => s.start+s.size >= distance) || segments[segments.length-1];
    const f = (distance-s.start)/s.size;
    return {x:s.x+s.dx*f,y:s.y+s.dy*f};
  }
  const start = performance.now();
  function draw(now) {
    const phase = ((now-start)%5000)/5000;
    flow.clearRect(0,0,W,H);
    flow.globalCompositeOperation = 'source-over';
    // Travelling soft bands brighten the existing colours without replacing texture.
    for (let i=0;i<5;i++) {
      const t = (phase+i/5)%1;
      const p = at(t);
      const radius = 75;
      const glow = flow.createRadialGradient(p.x,p.y,0,p.x,p.y,radius);
      const color = t<.43?'255,108,66':t<.80?'255,196,62':'97,222,255';
      glow.addColorStop(0,`rgba(${color},.48)`);
      glow.addColorStop(.45,`rgba(${color},.25)`);
      glow.addColorStop(1,`rgba(${color},0)`);
      flow.fillStyle=glow; flow.fillRect(p.x-radius,p.y-radius,radius*2,radius*2);
      // Short streaks make the direction readable inside the coloured passages.
      for (let lane=-1;lane<=1;lane++) {
        flow.beginPath();
        for(let k=0;k<=10;k++) {
          const q=at(Math.max(0,t-.022+k*.0022));
          if(k===0) flow.moveTo(q.x,q.y+lane*12); else flow.lineTo(q.x,q.y+lane*12);
        }
        flow.strokeStyle=`rgba(${color},.65)`; flow.lineWidth=2; flow.stroke();
      }
    }
    // This mask restricts every airflow effect to coloured pixels in the PNG.
    flow.globalCompositeOperation='destination-in';
    flow.drawImage(mask,0,0,W,H);
    ctx.clearRect(0,0,W,H);
    ctx.drawImage(layer,0,0);
    // Fine droplets spread from the visible nozzle through the existing white spray.
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(.697*W,.278*H);
    ctx.lineTo(.617*W,.210*H);
    ctx.quadraticCurveTo(.610*W,.285*H,.635*W,.350*H);
    ctx.closePath(); ctx.clip();
    for(let i=0;i<70;i++) {
      const age=(phase*5+i/70)%1;
      const spread=((i*37)%71)/70-.5;
      const x=(.697-age*.075)*W;
      const y=(.278+spread*age*.12)*H;
      ctx.globalAlpha=Math.sin(age*Math.PI)*.65;
      ctx.fillStyle='#f3fcff';
      ctx.beginPath();ctx.ellipse(x,y,.8+age*1.8,.6+age,0,0,Math.PI*2);ctx.fill();
    }
    ctx.restore();
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
})();
