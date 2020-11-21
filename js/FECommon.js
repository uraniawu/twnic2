var FECommon = FECommon || {};
(function(FECommon) {

	//mobile detect
	FECommon.mDetect = mDetect();
	function mDetect(){
		var check = false;
	    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	    return check;
	}
    
	//anchor
	FECommon.hashRun = function(_href){
		hashRun(_href);
	}
	function hashRun(_href){
		var target = $(_href == '#' || _href == '#top' ? 'html' : _href);
		var mtop=(FECommon.mDetect)?45:90;
		var position = target.offset().top-mtop;
		$('html, body').stop().animate({scrollTop:position}, 300, 'swing');
		return false;
	}

	//rwd
    FECommon.isRWD1200 = function() {
        return (window.outerWidth <= 1200) ? true : false;
    };
    FECommon.isRWD910 = function() {
        return (window.outerWidth <= 910) ? true : false;
    };

    //equalheight
	FECommon.equalheight = function(e) {
        _equalheight(e);
    };
    function _equalheight(e) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(e).each(function() {
            $el = $(this);
            $($el).height('auto')
            topPostion = $el.offset().top;
            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0;
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    //content switch
    FECommon.tabLt = function(tabItem, tabCon) {
        _tabLt(tabItem, tabCon);
    };
    function _tabLt(tabItem, tabCon) {
        $(tabItem).on('click', function () {
            $(this).addClass('on').siblings().removeClass('on');
            if(tabCon){
                $(tabCon).eq($(tabItem).index(this)).fadeIn().siblings().hide();
            }
        });//.eq(0).click();
    }


})(FECommon);
$(document).ready(function(){
    /*=============================================
	=               anchor(共通頁)                 =
	=============================================*/
	$('a[href^=#]').on('click',function(e){
		FECommon.hashRun($(this).attr('href'));
    });

    /*=============================================
	=         檢索方式切換(bulletin.html)          =
	=============================================*/
    FECommon.tabLt('.filterType a','.filterPanelI');
    FECommon.tabLt('.filter1Type a','');
    $('.expAll').on('click',function(){
        $('.tree li:not(.file) > input').prop("checked", true);
    });
    $('.colAll').on('click',function(){
        $('.tree li:not(.file) > input').prop("checked", false);
    });

    /*=============================================
	=         equalheight(bulletin.html)          =
	=============================================*/
    FECommon.equalheight('.filterResICol');
    function setHeight(){
        if(!FECommon.isRWD910()){
        	FECommon.equalheight('.filterResICol');
        }else{
            $('.filterResICol').css('height','');
        }
    }
    setHeight();
    $(window).resize(function(){
        setHeight();
    });



});