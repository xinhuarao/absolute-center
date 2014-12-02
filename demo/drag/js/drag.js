(function(){
//     var frameA = top.document.getElementsByName("frameA");
//     frameA = frameA[0];
//     var frameB = top.document.getElementsByName("frameB");
//     frameB = frameB[0];
    var dragDiv = top.document.querySelector(".drag");
    var iframe = {
        start: {
            x: 0,
            y: 0
        },
        orig: {
            x: 0,
            y: 0
        },
        delta: {
            x: 0,
            y: 0
        },
        init: function(){
             var _self = this;
             dragDiv.onmousedown = function(event){
                _self.start.x = event.clientX+window.pageXOffset;
                _self.start.y = event.clientY+window.pageYOffset;
                _self.orig.x = dragDiv.offsetLeft;
                _self.orig.y = dragDiv.offsetTop;
                _self.delta.x = _self.start.x-_self.orig.x;
                _self.delta.y = _self.start.y-_self.orig.y;
                if(document.addEventListener){
                     document.addEventListener("mousemove",_self.movehandler,true);
                     document.addEventListener("mouseup",_self.uphandler,true);
                }
             };
        },
        movehandler: function(e){
             if(!e){
                 e=window.event;
             }
             dragDiv.style.left = (e.clientX+window.pageXOffset-iframe.delta.x)+"px";
             dragDiv.style.top = (e.clientY+window.pageYOffset-iframe.delta.y)+"px";
        },
        uphandler: function(e){
           if (document.removeEventListener) {
               document.removeEventListener("mousemove",iframe.movehandler,true);
               document.removeEventListener("mouseup",iframe.uphandler,true);
           }  
        }
    };
    iframe.init();
}());