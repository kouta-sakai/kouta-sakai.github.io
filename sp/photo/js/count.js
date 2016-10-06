var secs, mins, hours, numData, timer, daysNum, hoursNum, minsNum, secsNum;
var height = window.innerHeight;
var width = window.innerWidth;
var ctx, canvas, audio;
var frameCount = 0;
var flag = true;

var number = new Array(10);

for(var i = 0; i < 10; i++){
	number[i] = "img/num"+ i +".svg";
}

function time(){
	numData = timer.split(":");
	daysNum = numData[0].split("");
	hoursNum = numData[1].split("");
	minsNum = numData[2].split("");
	secsNum = numData[3].split("");
	
	var days0 = document.getElementById("days0");
	days0.src = number[daysNum[0]];
	var days1 = document.getElementById("days1");
	days1.src = number[daysNum[1]];
	var days2 = document.getElementById("days2");
	days2.src = number[daysNum[2]];
	var hours0 = document.getElementById("hours0");
	hours0.src = number[hoursNum[0]];
	var hours1 = document.getElementById("hours1");
	hours1.src = number[hoursNum[1]];
	var mins0 = document.getElementById("mins0");
	mins0.src = number[minsNum[0]];
	var mins1 = document.getElementById("mins1");
	mins1.src = number[minsNum[1]];
	var secs0 = document.getElementById("secs0");
	secs0.src = number[secsNum[0]];
	var secs1 = document.getElementById("secs1");
	secs1.src = number[secsNum[1]];
}



function CountdownTimer( elemID, xday, limitMessage, msgClass ) {  
    this.initialize.apply( this, arguments );  
}  

CountdownTimer.prototype =  {  
    /////////////////////////////////////////////
    ///Constructor ///
    /////////////////////////////////////////////
	
    initialize: function( elemID, xday, limitMessage, msgClass ) {  
        this.elem = document.getElementById( elemID );  
        this.limitMessage = limitMessage;  
        this.msgClass = msgClass;  
		this.xday = xday;
    },  
  
    ///////////////////////////////////////////////////////////////////////////////// 
    ///繧ｫ繧ｦ繝ｳ繝医ム繧ｦ繝ｳ/// 
    /////////////////////////////////////////////////////////////////////////////////
		
    countDown : function()  {  
        var today = new Date()  
        days = Math.floor( ( today - this.xday ) / ( 24 * 60 * 60 * 1000 ) );  
        hours = Math.floor( ( ( today - this.xday ) % ( 24 * 60 * 60 * 1000 ) ) / ( 60 * 60 * 1000 ) );  
        mins = Math.floor( ( (today - this.xday ) % ( 24 * 60 * 60 * 1000 ) ) / ( 60 * 1000 ) ) % 60;  
        secs = Math.floor( ( ( today - this.xday ) % ( 24 * 60 * 60 * 1000 ) ) / 1000 ) % 60 % 60;  
        var milis = Math.floor( ( ( today - this.xday ) % ( 24 * 60 * 60 * 1000 ) ) / 10 ) % 100;  
        var me = this;
		
	    
  
            if( ( today - this.xday ) > 0 ){  
            timer = this.addZero2(days) + ':' + this.addZero( hours ) + ':' + this.addZero( mins ) + ':'+ this.addZero( secs ) 
            //this.elem.innerHTML = timer;  
            tid = setTimeout( function() { me.countDown(); }, 10 );  
  
            }
			
			if(milis == 0 && flag){
				init();
				flag = false;
			}
    },  
    /** 
     * 繧ｼ繝ｭ繧剃ｻ倅ｸ� 
     */  
    addZero : function( num )   {  
        num = '00' + num;  
        str = num.substring( num.length - 2, num.length );  
        return str ;  
    }, 
	
	addZero2 : function( num )   {  
        num = '000' + num;  
        str = num.substring( num.length - 3, num.length );  
        return str ;  
    } 
}


/////////////////////////////////////////////////////////////////////////////

function init(){
	setInterval(draw, 10);
}



function draw(){
	frameCount += 1;
	if(frameCount % 100 == 0){
		time();
	}
}
