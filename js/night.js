(function () {
    /**
     * Icarus 夜间模式 by iMaeGoo
     * https://www.imaegoo.com/
        */
      var isNight = localStorage.getItem('default');
      var nightNav;
  
    function applyNight(value) {
        $(window).trigger('resize');
        if (value.toString() === 'true') {
            // document.body.classList.remove('light');
            // document.body.classList.add('night');
            setStyleSheet('cyberpunk');
            
        } else {
            // document.body.classList.remove('night');
            // document.body.classList.add('light');
            setStyleSheet('default');
        }
        
    }
  
    function findNightNav() {
        nightNav = document.getElementById('night-nav');
        if (!nightNav) {
            setTimeout(findNightNav, 100);
        } else {
            nightNav.addEventListener('click', switchNight);
        }
    }
  
    function switchNight() {
        location.reload();
        isNight = isNight ? isNight.toString() !== 'true' : true;
        applyNight(isNight);
        localStorage.setItem('default', isNight);
        
    }

    function setStyleSheet(title){
        var link_list = document.getElementsByTagName("link");
        if (link_list){
            for (var i=0; i<link_list.length; i++){
                if (link_list[i].getAttribute("rel").indexOf("style") != -1 && link_list[i].getAttribute("title")){
                    link_list[i].disabled = true;
                    if (link_list[i].getAttribute("title") == title) link_list[i].disabled = false;
                }
            }
        }
    }
  
    findNightNav();
    isNight && applyNight(isNight);
  }());