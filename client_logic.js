if (!('serviceWorker' in navigator)) { console.log("Service Workers aren't supported on this browser"); return; } 
  
if (!('PushManager' in window)) {  console.log("Push messaging isn't supported on this browser"); return; }
