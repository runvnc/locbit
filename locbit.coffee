#locbit

#generate qr code
#based on a certain id or location
#

#qr code encodes a link to a mobile app
#displaying a remote control

#open socket.io/now.js connection between remote control app and server
#this is associated with the app running on the large screen

#so you would just build the app for the screen
#and not have to worry about the socket.io and mobile remote control stuff

#basically turn on CORS

#to insert qr code:
#
#

#<script src="http://locbit.io/load/APIKEY"></script>
#<script>
#loc = {
#  up:     function() {  },
#  down:   function() {  },
#  left:   function() {  },
#  right:  function() {  },
#  select: function() {  }
#}
#</script>
#that actually gets translated to org1.locbit.io/now.js
#

#function loadScript() {
#   var script= document.createElement('script');
#   script.type= 'text/javascript';
#   script.src= 'http://www.mydomain/myscript.js';
#   script.async = true;
#   document.body.appendChild(script);
#}