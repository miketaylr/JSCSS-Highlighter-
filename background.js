window.opera.extension.addEventListener( 'connect', function(event){
  //Tell the injected script which theme to use
  event.source.postMessage( {'theme': widget.preferences.theme} );
}, false ); 
