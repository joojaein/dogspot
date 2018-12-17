window.addEventListener("load", function(){
    //var main = document.getElementById("#detail-large-main");
    var main = document.querySelector("#detail-large-main");

    // var width = window.getComputedStyle(main,null).getPropertyValue('width');
    //window.setPropertyValue('width',document.body.clientWidth);
    // window.getComputedStyle(main,null).setPropertyValue('width',document.body.clientWidth);

    main.style.width = document.body.clientWidth;
    // this.alert(window.getComputedStyle(main,null).getPropertyValue('width'));
    // this.alert("doc:"+document.body.clientWidth);
});

