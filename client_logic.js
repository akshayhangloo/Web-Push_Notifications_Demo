if (!('serviceWorker' in navigator)) { 
  console.log("Service Workers aren't supported on this browser");
}
else{
  console.log("Service Workers are supported on this browser");
}
  
if (!('PushManager' in window)) {
  console.log("Push messaging isn't supported on this browser");
}
else{
  console.log("Push messaging is supported on this browser");
}
