window.addEventListener('DOMContentLoaded', function() {
  
  var props = {
    title: 'SHJS highlighter',
    badge: { textContent: widget.preferences.fileType },
    popup: { href: 'popup.html', width: 400, height:200 }
  },

  toolbarButton = opera.contexts.toolbar.createItem( props );
  opera.contexts.toolbar.addItem( toolbarButton );
  //opera.postError( window.location );
  //resolves to something like widget://lskdjf;alksdfj;alksdj;asldkfjl/index.html
}, false);
