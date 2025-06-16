(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,231);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,429);


(lib.coin1 = function() {
	this.initialize(img.coin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,73);


(lib.coin2 = function() {
	this.initialize(img.coin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,46);


(lib.cuan = function() {
	this.initialize(img.cuan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,102);


(lib.Diskon = function() {
	this.initialize(img.Diskon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,58);


(lib.Meng = function() {
	this.initialize(img.Meng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,165);


(lib.meng_tangan = function() {
	this.initialize(img.meng_tangan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,26);


(lib.orang = function() {
	this.initialize(img.orang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,316);


(lib.sd70 = function() {
	this.initialize(img.sd70);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,86);


(lib.snk = function() {
	this.initialize(img.snk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,7);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sd_70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sd70();
	this.instance.setTransform(-67.7,-27.6,0.6418,0.6418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sd_70, new cjs.Rectangle(-67.7,-27.6,135.5,55.2), null);


(lib.meng = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Meng();
	this.instance.setTransform(-67.5,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.meng, new cjs.Rectangle(-67.5,-82.5,135,165), null);


(lib.mc_orang = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.orang();
	this.instance.setTransform(-160,-158);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_orang, new cjs.Rectangle(-160,-158,320,316), null);


(lib.mc_cuan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cuan();
	this.instance.setTransform(-109.5,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_cuan, new cjs.Rectangle(-109.5,-51,219,102), null);


(lib.dc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Diskon();
	this.instance.setTransform(-60.65,-18.6,0.6418,0.6418);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dc, new cjs.Rectangle(-60.6,-18.6,121.30000000000001,37.3), null);


(lib.c3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin1();
	this.instance.setTransform(3.85,-27.4,0.6054,0.6054,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c3, new cjs.Rectangle(-27.4,-27.4,54.8,54.8), null);


(lib.c2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin2();
	this.instance.setTransform(-17,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(-17,-23,34,46), null);


(lib.c1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin1();
	this.instance.setTransform(-27.5,-36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c1, new cjs.Rectangle(-27.5,-36.5,55,73), null);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG();
	this.instance.setTransform(-160,-214.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-160,-214.5,320,429), null);


(lib.loc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8A800").s().p("AhKBUQgrhMgBgyQABgxAigjQAjgjAwAAQAxAAAiAjQAjAjAAAxQAAAygqBMQgtBNgfAAQgfAAgrhNgAg4hnQgYAXAAAiQAAAhAYAXQAXAYAhAAQAhAAAYgYQAYgXAAghQAAgigYgXQgYgYghAAQghAAgXAYg");
	this.shape.setTransform(-111.9,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgqdANYQhQAAg5g5Qg4g5AAhQIAA0rQAAhQA4g5QA5g5BQAAMBU7AAAQBQAAA5A5QA4A5AABQIAAUrQAABQg4A5Qg6A5hPAAg");
	this.shape_1.setTransform(0.0092,0.0091,0.5309,0.4284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-36.6,309.1,73.30000000000001);


(lib.loc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8A800").s().p("AhKBUQgrhMgBgyQABgxAigjQAjgjAwAAQAxAAAiAjQAjAjAAAxQAAAygqBMQgtBNgfAAQgfAAgrhNgAg4hnQgYAXAAAiQAAAhAYAXQAXAYAhAAQAhAAAYgYQAYgXAAghQAAgigYgXQgYgYghAAQghAAgXAYg");
	this.shape.setTransform(-111.9,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgqdANYQhQAAg5g5Qg4g5AAhQIAA0rQAAhQA4g5QA5g5BQAAMBU7AAAQBQAAA5A5QA4A5AABQIAAUrQAABQg4A5Qg6A5hPAAg");
	this.shape_1.setTransform(0.0092,0.0091,0.5309,0.4284);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-36.6,309.1,73.30000000000001);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AoPGDQgnhiAAhtQAAjqCmimQCnimDpAAQDrAAClCmQCnCmAADqQgBBrgmBkg");
	this.shape.setTransform(56.65,38.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,113.3,77.4), null);


(lib.find = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.447)").s().p("A4/eLMAAAg8VMAx/AAAMAAAA8Vg");
	this.shape.setTransform(-0.025,-94.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.027)").s().p("A4/eLMAAAg8VMAx/AAAMAAAA8Vg");
	this.shape_1.setTransform(-0.025,-94.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-287.9,320,386.09999999999997);


(lib.orang_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_orang();
	this.instance.setTransform(-0.05,140.2,1.0845,1.0845,-3.7374,0,0,-0.1,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1.0846,scaleY:1.0846,rotation:2.4513,y:140.15},39).to({regX:-0.1,scaleX:1.0845,scaleY:1.0845,rotation:-3.7374,y:140.2},40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,-193.6,381.29999999999995,364.6);


(lib.mc_meng = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.meng();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_meng, new cjs.Rectangle(-67.5,-82.5,135,165), null);


(lib.cuan_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_cuan();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1543,scaleY:1.1543},39).to({scaleX:1,scaleY:1},40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.4,-58.8,252.8,117.69999999999999);


(lib.coins = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.c2();
	this.instance.setTransform(150.25,-162.9,1,1,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({rotation:0,x:134.75,y:-100.45,alpha:1},4).to({rotation:-29.9992,y:143.9},13).to({regY:0.1,rotation:-89.9991,x:155.7,y:253},12).to({regX:-0.1,rotation:-104.9982,x:201.4,y:308.4,alpha:0},5).wait(22));

	// Layer_2
	this.instance_1 = new lib.c1();
	this.instance_1.setTransform(-155.2,-141.15,0.7076,0.7076,30.0011,0,0,-0.2,-0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:45,x:-144.8,y:-105,alpha:1},4).to({rotation:0,y:30.4},15).to({regX:-0.1,regY:0.1,scaleX:0.9999,scaleY:0.9999,rotation:-59.9983,y:218.9},15).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-104.9982,x:-196.15,y:338.2,alpha:0},5).wait(41));

	// Layer_1
	this.instance_2 = new lib.c3();
	this.instance_2.setTransform(169.4,54,1,1,-29.9992);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({rotation:0,x:149.4,y:87.7},4).to({rotation:90.0009,x:121.5,y:284.8},15).to({rotation:185.6991,x:163.75,y:377.7},15).to({alpha:0},5).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.5,-191.1,466.4,598.8);


(lib.loc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_14 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_19 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(5).call(this.frame_19).wait(6));

	// Layer_4
	this.jrk_02 = new cjs.Text("<1000 m", "bold 22px 'IQOS'", "#373535");
	this.jrk_02.name = "jrk_02";
	this.jrk_02.textAlign = "center";
	this.jrk_02.lineHeight = 38;
	this.jrk_02.parent = this;
	this.jrk_02.setTransform(-112.0117,13.05,0.4284,0.4284);
	this.jrk_02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jrk_02).wait(4).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(6));

	// Layer_3
	this.jrk_01 = new cjs.Text("<1000 m", "bold 22px 'IQOS'", "#373535");
	this.jrk_01.name = "jrk_01";
	this.jrk_01.textAlign = "center";
	this.jrk_01.lineHeight = 38;
	this.jrk_01.parent = this;
	this.jrk_01.setTransform(-112.0117,13.05,0.4284,0.4284);

	this.timeline.addTween(cjs.Tween.get(this.jrk_01).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(6));

	// Layer_1
	this.lok_01 = new cjs.Text("SPORTS STATION\nLIPPO MALL PURI", "bold 48px 'Roboto'", "#373535");
	this.lok_01.name = "lok_01";
	this.lok_01.lineHeight = 52;
	this.lok_01.parent = this;
	this.lok_01.setTransform(-74.05,-21.6,0.4284,0.4284);

	this.link_1 = new lib.loc1();
	this.link_1.name = "link_1";
	new cjs.ButtonHelper(this.link_1, 0, 1, 1);

	this.link_2 = new lib.loc2();
	this.link_2.name = "link_2";
	new cjs.ButtonHelper(this.link_2, 0, 1, 1);

	this.link_3 = new lib.loc1();
	this.link_3.name = "link_3";
	new cjs.ButtonHelper(this.link_3, 0, 1, 1);

	this.link_4 = new lib.loc2();
	this.link_4.name = "link_4";
	new cjs.ButtonHelper(this.link_4, 0, 1, 1);

	this.link_5 = new lib.loc1();
	this.link_5.name = "link_5";
	new cjs.ButtonHelper(this.link_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.link_1},{t:this.lok_01,p:{text:"SPORTS STATION\nLIPPO MALL PURI",lineWidth:398}}]}).to({state:[{t:this.link_2},{t:this.lok_01,p:{text:"SPORTS STATION\nFX SUDIRMAN",lineWidth:398}}]},4).to({state:[{t:this.link_3},{t:this.lok_01,p:{text:"SPORTS STATION\nEMPORIUM MALL",lineWidth:398}}]},5).to({state:[{t:this.link_4},{t:this.lok_01,p:{text:"SPORTS STATION\nGANDARIA CITY",lineWidth:398}}]},5).to({state:[{t:this.link_5},{t:this.lok_01,p:{text:"SPORTS STATION\nARTHA GADING MALL",lineWidth:486}}]},5).wait(6));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("A47HoIAAvPMAx3AAAIAAPPg");
	this.shape.setTransform(0.675,1.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.9,-47.1,319.20000000000005,97.6);


(lib.btnprv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCVIi7jvQgdglApgeQAngfAzAUIBzAuQAjAPAlgPIBxguQAzgUApAfQAoAegdAlIi7DvQgWAcgsAAQgrAAgWgcg");
	this.shape.setTransform(-0.1673,3.2349,0.3298,0.3298);

	this.instance = new lib.Path_1();
	this.instance.setTransform(0,0.05,0.3298,0.3298,0,0,0,56.9,39);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-12.8,37.3,25.5);


(lib.btnnxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCVIi7jvQgdglApgeQAngfAzAUIBzAuQAjAPAlgPIBxguQAzgUApAfQAoAegdAlIi7DvQgWAcgsAAQgrAAgWgcg");
	this.shape.setTransform(-0.1192,3.292,0.3298,0.3298);

	this.instance = new lib.Path_1();
	this.instance.setTransform(0,0.05,0.3298,0.3298,0,0,0,56.9,39);
	this.instance.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-12.8,37.3,25.5);


(lib.meng_banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.meng_tangan();
	this.instance.setTransform(112,-66);

	this.instance_1 = new lib.banner();
	this.instance_1.setTransform(-160,-86.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(80));

	// Layer_2
	this.instance_2 = new lib.mc_meng();
	this.instance_2.setTransform(106.1,-25.3,1,1,-7.4884,0,0,13.6,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:43.8,rotation:11.0056,y:-25.4},39).to({regY:43.9,rotation:-7.4884,y:-25.3},40).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-164.9,343.1,309);


// stage content:
(lib.sportsstation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,64,99];
	// timeline functions:
	this.frame_0 = function() {
		// Disable right-click context menu on the entire canvas
		canvas.addEventListener("contextmenu", function(e) {
		    e.preventDefault();
		});
	}
	this.frame_64 = function() {
		// Assuming these are your variables for the frames of the gallery
		this.frameList = [1, 5, 10, 15, 20];  // Example: frames 1, 5, 10, 15 (change these to match your gallery)
		this.currentIndex = 0;  // Start at the first frame in frameList
		
		// Stop at the first frame when the gallery starts
		this.state_loc.gotoAndStop(this.frameList[this.currentIndex]);
		
		// Button click event listeners
		this.nxt.addEventListener("click", () => {
		    // Move to the next frame in the gallery
		    if (this.currentIndex < this.frameList.length - 1) {
		        this.currentIndex++;
		        this.state_loc.gotoAndStop(this.frameList[this.currentIndex]);
		        this.updateButtons();
		    }
		});
		
		this.prv.addEventListener("click", () => {
		    // Move to the previous frame in the gallery
		    if (this.currentIndex > 0) {
		        this.currentIndex--;
		        this.state_loc.gotoAndStop(this.frameList[this.currentIndex]);
		        this.updateButtons();
		    }
		});
		
		// Function to update the state of the buttons (enable/disable)
		this.updateButtons = () => {
		    // Disable the previous button if we are on the first frame
		    this.prv.enabled = this.currentIndex > 0;
		    this.nxt.enabled = this.currentIndex < this.frameList.length - 1;
		
		    // Adjust button opacity to show enabled/disabled
		    this.prv.alpha = this.prv.enabled ? 1 : 0.5;
		    this.nxt.alpha = this.nxt.enabled ? 1 : 0.5;
		};
		
		this.state_loc.link_1.addEventListener("click", function(evt) {
		    if (evt.nativeEvent.button === 0) { // Only allow left-click
		        window.open("https://g.co/kgs/wP2p8kh", "_blank");
		    }
		});
		
		this.state_loc.link_2.addEventListener("click", function(evt) {
		    if (evt.nativeEvent.button === 0) { // Only allow left-click
		        window.open("https://g.co/kgs/vGmZTbj", "_blank");
		    }
		});
		
		this.state_loc.link_3.addEventListener("click", function(evt) {
		    if (evt.nativeEvent.button === 0) { // Only allow left-click
		        window.open("https://g.co/kgs/GQzWvva", "_blank");
		    }
		});
		
		this.state_loc.link_4.addEventListener("click", function(evt) {
		    if (evt.nativeEvent.button === 0) { // Only allow left-click
		        window.open("https://g.co/kgs/LYosT4L", "_blank");
		    }
		});
		
		this.state_loc.link_5.addEventListener("click", function(evt) {
		    if (evt.nativeEvent.button === 0) { // Only allow left-click
		        window.open("https://g.co/kgs/rgZgPKT", "_blank");
		    }
		});
		
		//-6.223769178545551, 106.84261443818747
		//-6.109222383302745, 106.74022715767292
		
		// Target locations
		const puri = { lat: -6.1896757, lng: 106.7390814 }; // Puri
		const fx = { lat: -6.2246691, lng: 106.8039106 };   // FX
		const empo = { lat: -6.1272711, lng: 106.7909758 }; // Emporium
		const gancit = { lat: -6.2443009, lng: 106.7829375 };   // Gandaria
		const mag = { lat: -6.1457739, lng: 106.8919187 }; // Artha Gading
		
		// Haversine formula
		function getDistance(lat1, lon1, lat2, lon2) {
		    const R = 6371;
		    const dLat = (lat2 - lat1) * Math.PI / 180;
		    const dLon = (lon2 - lon1) * Math.PI / 180;
		    const a = 
		        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
		        Math.sin(dLon / 2) * Math.sin(dLon / 2);
		    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		    return R * c;
		}
		
		// Get user's location
		navigator.geolocation.getCurrentPosition(function(position) {
		    const userLat = position.coords.latitude;
		    const userLng = position.coords.longitude;
		
		    const distPuri = getDistance(userLat, userLng, puri.lat, puri.lng);
			const distFx = getDistance(userLat, userLng, fx.lat, fx.lng);
			const distEmpo = getDistance(userLat, userLng, empo.lat, empo.lng);
			const distGancit = getDistance(userLat, userLng, gancit.lat, gancit.lng);
			const distMag = getDistance(userLat, userLng, mag.lat, mag.lng);
		
		    // Access the text fields inside the MovieClip instance
		    this.state_loc.jrk_01.text = distPuri.toFixed(1) + " km";
			this.state_loc.jrk_02.text = distFx.toFixed(1) + " km";
		    this.state_loc.jrk_03.text = distEmpo.toFixed(1) + " km";
			this.state_loc.jrk_04.text = distGancit.toFixed(1) + " km";
			this.state_loc.jrk_05.text = distMag.toFixed(1) + " km";
			
		}.bind(this), function(error) {
		    this.state_loc.jrk_01.text = "N/A";
		    this.state_loc.jrk_02.text = "N/A";
			this.state_loc.jrk_03.text = "N/A";
		    this.state_loc.jrk_04.text = "N/A";
			this.state_loc.jrk_05.text = "N/A";
		}.bind(this));
		
		
		// Initially update buttons
		this.updateButtons();
		this.btn_find.alpha = 0.3
		
		this.btn_find.addEventListener("click", function() {
				    window.open("https://www.sportsstation.id/bulan-cuan-up-to-70-off?utm_source=richmediabanner&utm_medium=cpm&utm_campaign=P3_Brand_Reach_SST_June2025&utm_term=Core_All_21-44YRS_SST_June2025", "_blank");  // Replace with the desired URL
			});
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(35).call(this.frame_99).wait(1));

	// Layer_11
	this.btn_find = new lib.find();
	this.btn_find.name = "btn_find";
	this.btn_find.setTransform(160.05,287.95);
	this.btn_find._off = true;
	new cjs.ButtonHelper(this.btn_find, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_find).wait(64).to({_off:false},0).wait(36));

	// btn_up_down
	this.prv = new lib.btnprv();
	this.prv.name = "prv";
	this.prv.setTransform(160.05,396.35,0.8037,0.8037,180,0,0,-0.1,-0.1);
	new cjs.ButtonHelper(this.prv, 0, 1, 1);

	this.nxt = new lib.btnnxt();
	this.nxt.name = "nxt";
	this.nxt.setTransform(160.05,469.7,0.8037,0.8037);
	new cjs.ButtonHelper(this.nxt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.nxt},{t:this.prv}]},64).wait(36));

	// locations
	this.state_loc = new lib.loc();
	this.state_loc.name = "state_loc";
	this.state_loc.setTransform(160,433.3);
	this.state_loc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.state_loc).wait(64).to({_off:false},0).wait(36));

	// Layer_10
	this.instance = new lib.snk();
	this.instance.setTransform(207,374);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(51));

	// Layer_7
	this.instance_1 = new lib.sd_70();
	this.instance_1.setTransform(393.2,334.4,1.1892,1.1892);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({x:224.8,y:342.4,alpha:1},10).wait(51));

	// Layer_6
	this.instance_2 = new lib.dc();
	this.instance_2.setTransform(-31.85,363,1.1892,1.1892);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({x:93.95,y:342.4,alpha:1},10).wait(51));

	// Layer_5
	this.instance_3 = new lib.coins();
	this.instance_3.setTransform(160.8,133.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(86));

	// Layer_4
	this.instance_4 = new lib.cuan_logo();
	this.instance_4.setTransform(160.5,115,0.4902,0.4902);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},10).wait(10).to({scaleX:0.7647,scaleY:0.7647,y:57.55},10).wait(56));

	// Layer_3
	this.instance_5 = new lib.meng_banner();
	this.instance_5.setTransform(160,555.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({y:441.5},10).wait(15).to({y:338.8},10).wait(56));

	// Layer_2
	this.instance_6 = new lib.orang_1();
	this.instance_6.setTransform(160,555.95,1.2563,1.2563);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({scaleX:1.0734,scaleY:1.0734,y:372,alpha:1},10).wait(20).to({scaleX:1,scaleY:1,y:277.3},10).wait(56));

	// Layer_1
	this.instance_7 = new lib.bg();
	this.instance_7.setTransform(160,214.5,1.4709,1.4709);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.2,scaleY:1.2,y:235.45,alpha:1},9).wait(25).to({regX:0.1,scaleX:0.9997,scaleY:0.9997,x:160.15,y:204.45},10).wait(56));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(56.1,139,417.7,631.8);
// library properties:
lib.properties = {
	id: 'F7D8CC80F751A449B2E58F6660C82E5D',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner.png", id:"banner"},
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/coin1.png", id:"coin1"},
		{src:"images/coin2.png", id:"coin2"},
		{src:"images/cuan.png", id:"cuan"},
		{src:"images/Diskon.png", id:"Diskon"},
		{src:"images/Meng.png", id:"Meng"},
		{src:"images/meng_tangan.png", id:"meng_tangan"},
		{src:"images/orang.png", id:"orang"},
		{src:"images/sd70.png", id:"sd70"},
		{src:"images/snk.png", id:"snk"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F7D8CC80F751A449B2E58F6660C82E5D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
