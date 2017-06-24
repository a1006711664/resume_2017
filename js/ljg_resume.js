    window.onload= function () {
        var scroll=document.getElementsByClassName("scroll")[0];
        var panel=document.getElementsByClassName("panel");
        var wrap=document.getElementsByClassName("wrap");

        var clientH=window.innerHeight;
        console.log(clientH)
        scroll.style.height=clientH+"px";
        for(var i=0;i<panel.length;i++){
            panel[i].style.height=clientH+"px";
            wrap[i].style.height=clientH-40+"px";
        }
    
        var input_radio=document.getElementsByTagName("input");
        console.log(input_radio)
        var wheel= function (event) {
            console.log(event.type)
            var direct=0;
            event=event||window.event;
            direct=event.wheelDelta?event.wheelDelta/120:-event.detail/3;
            console.log(direct);
            if(direct){
                handle(direct,input_radio);
            }
            if(event.preventDefault)
                event.preventDefault();
            event.returnValue=false;
        };
        window.onmousewheel=wheel;
    };



    function handle(direct,arr) {
        var num;
        for(var i=0;i<arr.length;i++){
            if(arr[i].checked){
                num=i;
            }
        }
        if(direct>0 && num>0){
            num--;  
            arr[num].checked=true;
        }else if(direct<0 && num<3){
            num++;
            arr[num].checked=true;
        }
    }

    // function changeDivHeight(){
    //     var clientH=window.innerHeight;
    //     console.log(clientH)
    //     scroll.style.height=clientH+"px";
    //     for(var i=0;i<panel.length;i++){
    //         panel[i].style.height=clientH+"px";
    //         wrap[i].style.height=clientH-40+"px";
    //     }
    // }