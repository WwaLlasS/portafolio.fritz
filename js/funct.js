$(document).ready(function(){
	var icon1 = new Marka('#icon1');
	icon1.set('circle-plus')
    	.color('#FF6600')
    	.size('200');

    	$('#icon1').hover(function(){
    		icon1.set('circle-o');

    	}, function(){
    		icon1.set('circle-o-filled');

    	});
// Codigo del icono 2
	var icon2 = new Marka('#icon2');
	icon2.set('square')
    	.color('#FF6600')
    	.size('200');

    	$('#icon2').hover(function(){
    		icon2.set('bars');

    	}, function(){
    		icon2.set('plus');

    	});
//Codigo del icono 3
	var icon3 = new Marka('#icon3');
	icon3.set('circle')
    	.color('#FF6600')
    	.size('200');

    	$('#icon3').hover(function(){
    		icon3.set('square');

    	}, function(){
    		icon3.set('square-check');

    	});

    $('#btn-ini').click(function(){
    	$('#inicio').addClass('fade');
    });

});


