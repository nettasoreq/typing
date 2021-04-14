(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"typinggame_atlas_1", frames: [[0,445,2044,288],[0,735,617,263],[1842,0,145,157],[1842,159,48,158],[0,0,1840,443],[1842,319,91,54],[619,735,375,388]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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



(lib.CachedBmp_7 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7519,1440);// helper functions:

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


(lib.end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.headline.font="bold 58px Alef"
		this.myhighscore.font="bold 40px Alef"
		this.myscore.font="bold 40px Alef"
		this.rebtn.txt.font="bold 29px Alef"
		this.newg.font="bold 29px Alef"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myhigescore = new cjs.Text("", "normal 700 58px 'Alef'", "#000033");
	this.myhigescore.name = "myhigescore";
	this.myhigescore.textAlign = "right";
	this.myhigescore.lineHeight = 80;
	this.myhigescore.lineWidth = 288;
	this.myhigescore.parent = this;
	this.myhigescore.setTransform(171.9988,57.25,1.1983,1);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.myhigescore);
	}

	this.myscore = new cjs.Text("", "normal 700 58px 'Alef'", "#000033");
	this.myscore.name = "myscore";
	this.myscore.textAlign = "right";
	this.myscore.lineHeight = 80;
	this.myscore.lineWidth = 288;
	this.myscore.parent = this;
	this.myscore.setTransform(172.9988,-29.4,1.1983,1);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.myscore);
	}

	this.headline = new cjs.Text("כל הכבוד!", "normal 700 58px 'Alef'", "#000033");
	this.headline.name = "headline";
	this.headline.textAlign = "center";
	this.headline.lineHeight = 80;
	this.headline.lineWidth = 289;
	this.headline.parent = this;
	this.headline.setTransform(0,-135.1);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.headline);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgdhAgWMAAAhArMA7DAAAMAAABArg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.headline},{t:this.myscore},{t:this.myhigescore}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end, new cjs.Rectangle(-188.9,-206.9,377.9,413.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFD791").s().p("AAhHmQkhg6jijXQh6h0hNiFQDDATDCgXQEigjD/h+QDsh0DBi7IAAOLQhzA2h/AaQhqAWhoAAQhjAAhigTg");
	this.shape.setTransform(68.225,50.4822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD791").s().p("AAtHaQkgg9jljOQh+hvhTh9QC9ALC+gcQEegsECh7QDqhvDBivIANNfQhtBLh4AxQhUAMhTAAQh5AAh4gag");
	this.shape_1.setTransform(68.275,50.1622);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD791").s().p("AA4HOQkehBjojEQiBhqhah1QC3ACC6ggQEbg2EDh3QDohsDDiiIAZMzQhnBghxBIQg3AEg3AAQiWAAiWgig");
	this.shape_2.setTransform(68.325,49.9356);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD791").s().p("ABEHAQkchEjsi7QiFhlhghtQCwgFC3gmQEXg/EFh0QDnhnDDiXQAUGCASGGQhhB1hrBeIgqAAQi3AAi5gug");
	this.shape_3.setTransform(68.375,49.8313);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD791").s().p("ABQGxQkbhJjviwQiJhhhmhlQCrgOCygqQEUhJEHhwQDlhjDDiLQAbFsAYFxQhaCKhlB0QjKgGjRg3g");
	this.shape_4.setTransform(68.375,49.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD791").s().p("ABbGgQkYhMjzinQiNhbhshdQCkgWCvgwQERhSEIhsQDjhgDFh+QAhFWAeFbQhUCfheCLQjKgTjTg7g");
	this.shape_5.setTransform(68.425,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD791").s().p("ABnGQQkXhPj2ieQiQhXhzhVQCegdCrg0QEOhcEKhpQDhhbDFhzQAoE+AkFIQhOCzhXCiQjKgfjUg/g");
	this.shape_6.setTransform(68.475,50.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD791").s().p("AByGAQkVhTj5iVQiUhSh5hMQCYgmCng5IIWjKQDfhXDGhnQAvEoAqEyQhIDJhRC4QjJgqjWhEg");
	this.shape_7.setTransform(68.525,50.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD791").s().p("AB+FwQkThWj9iMQiYhMh/hFQCRguCkg+QEHhvENhhQDehUDGhaQA2ESAwEdQhCDehKDOQjIg3jYhHg");
	this.shape_8.setTransform(68.575,50.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD791").s().p("ACJFgQkRhakAiBIkhiGQCLg1CghDQEDh4EQheQDbhPDHhPQA9D8A2EHQg8DzhDDlQjIhDjahLg");
	this.shape_9.setTransform(68.625,50.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD791").s().p("ACVFQQkPhekEh4QifhDiMg2IEhiFQEAiBEShaQDahMDHhCQBDDkA8D0Qg2EIg8D7QjHhOjchQg");
	this.shape_10.setTransform(68.625,50.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD791").s().p("AChFAQkOhikHhuQijg/iSgtQB/hFCYhMQD9iMEThWQDYhIDIg2QBKDOBCDeQgwEdg2ESQjGhbjdhTg");
	this.shape_11.setTransform(68.675,50.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD791").s().p("ACsEwIoWjKQing5iYgmQB5hNCUhRQD5iVEVhTQDXhEDIgqQBRC4BIDKQgqExgvEoQjFhmjghYg");
	this.shape_12.setTransform(68.725,51.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD791").s().p("AC4EgQkKhpkOhbQirg1iegdQByhVCRhXQD2ieEXhPQDUg/DKgfQBXCiBOCzQgkFIgoE+QjFhzjhhbg");
	this.shape_13.setTransform(68.775,51.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD791").s().p("ADDEQQkIhskRhTQivgvikgWQBshdCNhbQDyinEZhMQDTg7DKgTQBdCKBVCgQgeFcgiFVQjEh+jjhgg");
	this.shape_14.setTransform(68.825,51.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD791").s().p("ADPD/QkHhwkUhIQizgriqgNQBmhlCJhhQDvixEahHQDRg4DLgGQBkB0BbCKQgYFxgbFsQjEiLjkhkg");
	this.shape_15.setTransform(68.875,51.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD791").s().p("ADbDwQkFh0kYg/Qi2gmixgFQBghtCFhlQDsi7EchEQDPg0DMAGQBrBeBgB1QgSGGgUGCQjDiXjmhng");
	this.shape_16.setTransform(68.875,51.6187);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD791").s().p("ADmDiQkDh3kbg2Qi6ggi3ACQBah1CBhqQDpjEEehBQDNgvDMARQByBIBmBgQgMGbgNGYQjCiijphsg");
	this.shape_17.setTransform(68.925,51.5144);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFD791").s().p("ADyDWQkCh7kegsQi+gci9ALQBUh9B9hvQDljOEgg9QDLgsDNAeQB4AxBtBLIgMNfQjCivjqhvg");
	this.shape_18.setTransform(68.975,51.2878);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD791").s().p("ADyDWQkCh7kegsQi+gci9ALQBTh+B+hvQDljNEgg9QDLgsDNAeQB4AxBtBLIgMNfQjCivjqhvg");
	this.shape_19.setTransform(69.025,51.3378);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD791").s().p("ADmDiQkDh3kbg2Qi6ggi3ACQBah1CBhqQDojEEehBQDOgvDMARQBxBHBnBhQgMGagNGZQjDiijohsg");
	this.shape_20.setTransform(69.025,51.5644);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD791").s().p("ADbDwQkFh0kYg/Qi2glixgGQBghtCFhlQDsi7EchEQDPg0DLAGQBrBeBhB1QgSGGgUGCQjDiXjmhng");
	this.shape_21.setTransform(69.025,51.6687);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD791").s().p("ADPD/QkHhvkUhJQizgqiqgOQBmhlCJhhQDvixEbhHQDQg4DLgGQBkB0BbCKQgYFxgbFsQjDiLjlhkg");
	this.shape_22.setTransform(69.025,51.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFD791").s().p("ADDEQQkIhtkRhSQivgvikgVQBsheCNhbQDzinEYhMQDTg8DKgSQBeCLBUCfQgeFcghFVQjFh/jjhfg");
	this.shape_23.setTransform(69.025,51.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFD791").s().p("AC4EgQkKhpkOhcQirg0iegdQBzhVCQhXQD2ieEXhPQDUhADKgeQBXChBOC0QgkFHgoE/QjFhzjhhbg");
	this.shape_24.setTransform(69.025,51.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFD791").s().p("ACsEwIoWjLQing4iYgmQB5hNCUhSQD5iVEVhSQDXhDDIgrQBRC3BIDKQgqExgvEpQjGhmjfhYg");
	this.shape_25.setTransform(69.025,51.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFD791").s().p("AChFAQkOhikHhuQijg+iSgtQB/hFCYhOQD9iLEThWQDYhHDIg3QBKDOBCDfQgwEcg2ESQjGhajdhUg");
	this.shape_26.setTransform(69.025,51.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD791").s().p("ACVFQQkQhekDh4QighDiLg2IEhiFQEAiBERhaQDahLDIhDQBDDlA8D0Qg2EHg8D7QjHhOjchQg");
	this.shape_27.setTransform(69.025,51);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFD791").s().p("ACJFgQkRhakAiBIkhiFQCLg2CghDQEDh4EQheQDchQDHhOQA8D7A2EHQg8D0hDDlQjIhCjahMg");
	this.shape_28.setTransform(69.025,50.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD791").s().p("AB+FwQkThWj9iLQiYhNh/hGQCSgtCjg+QEHhuEOhiQDdhUDGhaQA2ESAwEcQhCDehKDPQjIg2jYhIg");
	this.shape_29.setTransform(69.025,50.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD791").s().p("AByGAQkVhTj5iUQiUhSh5hNQCYgmCng4IIWjLQDfhYDGhmQAvEoAqEyQhIDJhRC4QjIgqjXhEg");
	this.shape_30.setTransform(69.025,50.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD791").s().p("ABnGQQkXhPj2ieQiQhXhzhVQCegeCrg0QEOhbEKhpQDhhcDFhyQAoE/AkFGQhOC1hXChQjKgfjUg/g");
	this.shape_31.setTransform(69.025,50.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFD791").s().p("ABbGgQkYhMjzinQiNhchshdQCkgVCvgwQERhSEIhsQDjhgDFh+QAhFVAeFcQhUCfheCLQjKgTjTg7g");
	this.shape_32.setTransform(69.025,50.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFD791").s().p("ABQGwQkbhHjvixQiJhhhmhlQCqgOCzgqQEUhIEHhxQDlhjDDiLQAbFsAYFxQhbCKhkB0QjLgGjQg4g");
	this.shape_33.setTransform(69.025,50.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFD791").s().p("ABEHAQkchEjsi7QiFhlhghtQCxgGC2glQEYg/EFh0QDmhnDDiXQAUGCASGGQhhB1hrBeIgqAAQi3AAi5gug");
	this.shape_34.setTransform(69.025,50.2313);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD791").s().p("AA4HOQkehBjojEQiBhqhah1QC3ACC6ggQEbg2EDh3QDohsDDiiQANGZAMGaQhnBhhxBHQg3AEg3AAQiWAAiWgig");
	this.shape_35.setTransform(69.025,50.3356);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFD791").s().p("AAtHaQkgg9jljNQh+hvhTh+QC9ALC+gcQEegsECh7QDqhvDCivIAMNfQhtBLh4AxQhUAMhTAAQh5AAh4gag");
	this.shape_36.setTransform(69.025,50.5622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{skewX:0,x:68.225,y:50.4822}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape,p:{skewX:180,x:69.025,y:50.9678}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape,p:{skewX:0,x:69.025,y:50.9322}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.3,101.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,3759.5,720), null);


(lib.startbtn = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("התחילו", "normal 700 28px 'Alef'", "#000033");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(74.15,7);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqFCuQhQAAAAhQIAAi7QAAhQBQAAIULAAQBQAAAABQIAAC7QAABQhQAAg");
	this.shape.setTransform(72.65,22.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startbtn, new cjs.Rectangle(0,5,145.3,41.6), null);


(lib.scoreb = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("ניקוד:", "normal 700 28px 'Alef'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 40;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(94.3,-20.95);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text);
	}

	this.text_1 = new cjs.Text("שלב:", "normal 700 28px 'Alef'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 40;
	this.text_1.lineWidth = 70;
	this.text_1.parent = this;
	this.text_1.setTransform(94.3,-57.6);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.text_1);
	}

	this.scorel = new cjs.Text("", "normal 700 28px 'Alef'", "#FFFFFF");
	this.scorel.name = "scorel";
	this.scorel.textAlign = "right";
	this.scorel.lineHeight = 40;
	this.scorel.lineWidth = 34;
	this.scorel.parent = this;
	this.scorel.setTransform(14.05,-58.45);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.scorel);
	}

	this.scoreb = new cjs.Text("", "normal 700 28px 'Alef'", "#FFFFFF");
	this.scoreb.name = "scoreb";
	this.scoreb.textAlign = "right";
	this.scoreb.lineHeight = 40;
	this.scoreb.lineWidth = 56;
	this.scoreb.parent = this;
	this.scoreb.setTransform(14.05,-20.95);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.scoreb);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreb},{t:this.scorel},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scoreb, new cjs.Rectangle(-44,-60.4,140.3,79), null);


(lib.m = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-36.35,-39.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-4.5,-40.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m, new cjs.Rectangle(-36.3,-40.4,72.5,79.69999999999999), null);


(lib._222 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInnAAQgxAAghAiQgjAiAAAxIAAHnQAAAxAjAiQAhAiAxAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgigiQgjgjAAgwIAAnnQAAgwAjgjQAigiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgigiQgjgjAAgwIAAnnQAAgwAjgjQAigiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._221 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("Aj0FpIHoAAQAxAAAhgiQAjgiAAgxIAAnnQAAgwgjgjQghgigxAAInoAAQgwAAghAiQgjAjAAAwIAAHnQAAAxAjAiQAhAiAwAAg");
	this.shape.setTransform(36.1,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj0FpQgvAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAvAAIHoAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.1,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("Aj0FpQgvAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAvAAIHoAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.1,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.3);


(lib._219 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgxIAAnnQAAgwgigjQgjgigwAAInnAAQgxAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._191 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAhgiQAjgiAAgwIAAnoQAAgxgjgiQghgigxAAInnAAQgxAAghAiQgjAiAAAxIAAHoQAAAwAjAiQAhAiAxAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgigiQgjgiAAgwIAAnoQAAgwAjgjQAigiAwAAIHnAAQAxAAAhAiQAjAjAAAwIAAHoQAAAwgjAiQghAigxAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgigiQgjgiAAgwIAAnoQAAgwAjgjQAigiAwAAIHnAAQAxAAAhAiQAjAjAAAwIAAHoQAAAwgjAiQghAigxAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._190 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgwIAAnoQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHoQAAAwAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._188 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgwIAAnoQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHoQAAAwAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._186 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._90 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgwIAAnoQAAgxgigiQgigigxAAInnAAQgwAAgjAiQgiAiAAAxIAAHoQAAAwAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigiAAgwIAAnoQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigiAAgwIAAnoQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._89 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgwgigjQgigigxAAInnAAQgwAAgjAiQgiAjAAAwIAAHnQAAAxAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._88 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgwIAAnoQAAgxgigiQgigigxAAInnAAQgxAAgiAiQgiAiAAAxIAAHoQAAAwAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._87 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgxIAAnnQAAgwgigjQgjgigwAAInnAAQgxAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._86 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgwIAAnoQAAgxgigiQgigigxAAInnAAQgxAAgiAiQgiAiAAAxIAAHoQAAAwAiAiQAiAiAxAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHoAAQAvAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigvAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHoAAQAvAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigvAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._85 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgwgigjQgigigxAAInnAAQgxAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.1,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAghgiQgjgiAAgxIAAnnQAAgwAjgjQAhgiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.1,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAghgiQgjgiAAgxIAAnnQAAgwAjgjQAhgiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.1,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.3);


(lib._84 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAhgiQAjgiAAgxIAAnnQAAgwgjgjQghgigxAAInnAAQgxAAghAiQgjAjAAAwIAAHnQAAAxAjAiQAhAiAxAAg");
	this.shape.setTransform(36.1,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.1,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.1,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.3);


(lib._83 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("Aj0FpIHoAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInoAAQgwAAgiAiQgiAiAAAxIAAHnQAAAxAiAiQAiAiAwAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAghgiQgjgjAAgwIAAnnQAAgwAjgjQAhgiAxAAIHnAAQAxAAAhAiQAjAjAAAwIAAHnQAAAwgjAjQghAigxAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAghgiQgjgjAAgwIAAnnQAAgwAjgjQAhgiAxAAIHnAAQAxAAAhAiQAjAjAAAwIAAHnQAAAwgjAjQghAigxAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._82 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgwgigjQgigigxAAInnAAQgxAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._81 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("Aj0FpIHoAAQAwAAAjgiQAigiAAgxIAAnnQAAgwgigjQgjgigwAAInoAAQgwAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAwAAg");
	this.shape.setTransform(36.1,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj0FpQgwAAghgiQgjgiAAgxIAAnnQAAgwAjgjQAhgiAwAAIHoAAQAwAAAiAiQAjAjAAAwIAAHnQAAAxgjAiQgiAigwAAg");
	this.shape_1.setTransform(36.1,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("Aj0FpQgwAAghgiQgjgiAAgxIAAnnQAAgwAjgjQAhgiAwAAIHoAAQAwAAAiAiQAjAjAAAwIAAHnQAAAxgjAiQgiAigwAAg");
	this.shape_2.setTransform(36.1,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.3);


(lib._80 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgwgigjQgigigxAAInnAAQgwAAgjAiQgiAjAAAwIAAHnQAAAxAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._79 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgxIAAnnQAAgwgigjQgjgigwAAInnAAQgxAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgxIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAxgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._78 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgwIAAnoQAAgxgigiQgigigxAAInnAAQgwAAgjAiQgiAiAAAxIAAHoQAAAwAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigiAAgwIAAnoQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigiAAgwIAAnoQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._77 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgwIAAnoQAAgxgigiQgigigxAAInnAAQgwAAgjAiQgiAiAAAxIAAHoQAAAwAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigiAAgwIAAnoQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigiAAgwIAAnoQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHoQAAAwgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._76 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInnAAQgwAAgjAiQgiAiAAAxIAAHnQAAAxAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigjAAgwIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigjAAgwIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._75 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAhgiQAjgiAAgxIAAnnQAAgxgjgiQghgigxAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._74 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgxIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._73 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgwgigjQgigigxAAInnAAQgwAAgjAiQgiAjAAAwIAAHnQAAAxAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigiAAgxIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAxgiAiQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.3);


(lib._72 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInnAAQgwAAgjAiQgiAiAAAxIAAHnQAAAxAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigjAAgwIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigjAAgwIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._71 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInnAAQgwAAgiAiQgjAiAAAxIAAHnQAAAxAjAiQAiAiAwAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAiAiQAjAjAAAwIAAHnQAAAwgjAjQgiAigwAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAiAiQAjAjAAAwIAAHnQAAAwgjAjQgiAigwAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._70 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgxIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._69 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAhgiQAjgiAAgxIAAnnQAAgwgjgjQghgigxAAInnAAQgxAAgiAiQgiAjAAAwIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.1,36.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgigiQgjgiAAgxIAAnnQAAgwAjgjQAigiAwAAIHnAAQAxAAAhAiQAjAjAAAwIAAHnQAAAxgjAiQghAigxAAg");
	this.shape_1.setTransform(36.1,36.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgigiQgjgiAAgxIAAnnQAAgwAjgjQAigiAwAAIHnAAQAxAAAhAiQAjAjAAAwIAAHnQAAAxgjAiQghAigxAAg");
	this.shape_2.setTransform(36.1,36.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.3);


(lib._68 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigxAAInnAAQgwAAgjAiQgiAiAAAxIAAHnQAAAxAiAiQAjAiAwAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgjgiQgigjAAgwIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgjgiQgigjAAgwIAAnnQAAgwAigjQAjgiAwAAIHnAAQAxAAAiAiQAiAjAAAwIAAHnQAAAwgiAjQgiAigxAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._67 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigiAAgwIAAnoQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHoQAAAwAiAiQAiAiAxAAg");
	this.shape.setTransform(36.125,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigwAAg");
	this.shape_1.setTransform(36.125,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAgigiQgigiAAgwIAAnoQAAgwAigjQAigiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHoQAAAwgiAiQgjAigwAAg");
	this.shape_2.setTransform(36.125,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.3,74.2);


(lib._66 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHnAAQAxAAAigiQAigiAAgwIAAnoQAAgxgigiQgigigxAAInnAAQgwAAgiAiQgjAiAAAxIAAHoQAAAwAjAiQAiAiAwAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgwAAgigiQgjgiAAgwIAAnoQAAgwAjgjQAigiAwAAIHnAAQAxAAAhAiQAjAjAAAwIAAHoQAAAwgjAiQghAigxAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgwAAgigiQgjgiAAgwIAAnoQAAgwAjgjQAigiAwAAIHnAAQAxAAAhAiQAjAjAAAwIAAHoQAAAwgjAiQghAigxAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib._65 = function(mode,startPosition,loop,reversed) {
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
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#231F20").p("AjzFpIHoAAQAwAAAigiQAigiAAgxIAAnnQAAgxgigiQgigigwAAInoAAQgxAAgiAiQgiAiAAAxIAAHnQAAAxAiAiQAiAiAxAAg");
	this.shape.setTransform(36.1,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjzFpQgxAAghgiQgjgjAAgwIAAnnQAAgwAjgjQAhgiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_1.setTransform(36.1,36.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3366").s().p("AjzFpQgxAAghgiQgjgjAAgwIAAnnQAAgwAjgjQAhgiAxAAIHnAAQAwAAAjAiQAiAjAAAwIAAHnQAAAwgiAjQgjAigwAAg");
	this.shape_2.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,74.2,74.2);


(lib.fire = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-22.8,-13.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire, new cjs.Rectangle(-22.8,-13.5,45.5,27), null);


(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.boom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-93.7,-97.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boom, new cjs.Rectangle(-93.7,-97.7,187.5,194), null);


(lib._3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A71E22").s().p("AjdFtQDIhyBiikQBgifgqiIQgchahZhEQBEALA4AtQA0ApAUAxQAtBuh1CjQh4CpjtCRg");
	this.shape.setTransform(66.2269,36.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02026").s().p("AgBFvQjtiRh4ioQh0iiAthuQAXg4A8grQBEgwBNgCQBFgBBEBUQAjArAdA2QAeg2AjgrQBEhUBFABQAQABAQACQBEALA4AtQA0ApAUAxQAtBuh1CjQh4CojuCRg");
	this.shape_1.setTransform(44.2231,36.7987);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._3, new cjs.Rectangle(0,0,88.5,73.6), null);


(lib._2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A71E22").s().p("AjdFtQDIhyBiikQBgifgqiIQgchahZhEQBEALA4AtQA0ApAUAxQAtBuh1CjQh4CpjtCRg");
	this.shape.setTransform(66.2269,36.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02026").s().p("AgBFvQjtiRh4ioQh0iiAthuQAXg4A8grQBEgwBNgCQBFgBBEBUQAjArAdA2QAeg2AjgrQBEhUBFABQAQABAQACQBEALA4AtQA0ApAUAxQAtBuh1CjQh4CojuCRg");
	this.shape_1.setTransform(44.2231,36.7987);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(0,0,88.5,73.6), null);


(lib._1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A71E22").s().p("AjdFtQDIhyBiikQBgifgqiIQgchahZhEQBEALA4AtQA0ApAUAxQAtBuh1CjQh4CpjtCRg");
	this.shape.setTransform(66.2269,36.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E02026").s().p("AgBFvQjtiRh4ioQh0iiAthuQAXg4A8grQBEgwBNgCQBFgBBEBUQAjArAdA2QAeg2AjgrQBEhUBFABQAQABAQACQBEALA4AtQA0ApAUAxQAtBuh1CjQh4CojuCRg");
	this.shape_1.setTransform(44.2231,36.7987);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(0,0,88.5,73.6), null);


(lib.ship = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-154.15,-65.7,0.5,0.5);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(-180.45,-0.75,0.5184,0.4662,0,0,0,68.5,50.4);

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(-186.6,-1.8,0.723,0.3094,0,177.6424,0,68.3,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ship, new cjs.Rectangle(-236.6,-65.7,391,131.5), null);


(lib.lives = function(mode,startPosition,loop,reversed) {
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
	this.live1 = new lib._1();
	this.live1.name = "live1";
	this.live1.setTransform(-102.3,0,1,1,0,0,0,44.2,36.8);

	this.live2 = new lib._2();
	this.live2.name = "live2";
	this.live2.setTransform(0.55,0,1,1,0,0,0,44.2,36.8);

	this.live3 = new lib._3();
	this.live3.name = "live3";
	this.live3.setTransform(102.25,0,1,1,0,0,0,44.2,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.live3},{t:this.live2},{t:this.live1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lives, new cjs.Rectangle(-146.5,-36.8,293,73.6), null);


(lib.keyboard = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-469.15,-108.6,0.5,0.5);

	this.key81 = new lib._81();
	this.key81.name = "key81";
	this.key81.setTransform(-438.5,-79.1,1,1,0,0,0,36.1,36.1);

	this.key87 = new lib._87();
	this.key87.name = "key87";
	this.key87.setTransform(-358.8,-79.1,1,1,0,0,0,36.1,36.1);

	this.key69 = new lib._69();
	this.key69.name = "key69";
	this.key69.setTransform(-279.05,-79.1,1,1,0,0,0,36.1,36.1);

	this.key82 = new lib._82();
	this.key82.name = "key82";
	this.key82.setTransform(-199.35,-79.1,1,1,0,0,0,36.1,36.1);

	this.key84 = new lib._84();
	this.key84.name = "key84";
	this.key84.setTransform(-119.6,-79.1,1,1,0,0,0,36.1,36.1);

	this.key89 = new lib._89();
	this.key89.name = "key89";
	this.key89.setTransform(-39.9,-79.1,1,1,0,0,0,36.1,36.1);

	this.key85 = new lib._85();
	this.key85.name = "key85";
	this.key85.setTransform(39.85,-79.1,1,1,0,0,0,36.1,36.1);

	this.key73 = new lib._73();
	this.key73.name = "key73";
	this.key73.setTransform(119.55,-79.1,1,1,0,0,0,36.1,36.1);

	this.key79 = new lib._79();
	this.key79.name = "key79";
	this.key79.setTransform(199.3,-79.1,1,1,0,0,0,36.1,36.1);

	this.key80 = new lib._80();
	this.key80.name = "key80";
	this.key80.setTransform(279,-79.1,1,1,0,0,0,36.1,36.1);

	this.key219 = new lib._219();
	this.key219.name = "key219";
	this.key219.setTransform(358.75,-79.1,1,1,0,0,0,36.1,36.1);

	this.key221 = new lib._221();
	this.key221.name = "key221";
	this.key221.setTransform(438.5,-79.1,1,1,0,0,0,36.1,36.1);

	this.key90 = new lib._90();
	this.key90.name = "key90";
	this.key90.setTransform(-378.35,79.15,1,1,0,0,0,36.1,36.1);

	this.key88 = new lib._88();
	this.key88.name = "key88";
	this.key88.setTransform(-298.4,79.15,1,1,0,0,0,36.1,36.1);

	this.key67 = new lib._67();
	this.key67.name = "key67";
	this.key67.setTransform(-218.45,79.15,1,1,0,0,0,36.1,36.1);

	this.key86 = new lib._86();
	this.key86.name = "key86";
	this.key86.setTransform(-138.5,79.15,1,1,0,0,0,36.1,36.1);

	this.key66 = new lib._66();
	this.key66.name = "key66";
	this.key66.setTransform(-58.55,79.15,1,1,0,0,0,36.1,36.1);

	this.key78 = new lib._78();
	this.key78.name = "key78";
	this.key78.setTransform(21.35,79.15,1,1,0,0,0,36.1,36.1);

	this.key77 = new lib._77();
	this.key77.name = "key77";
	this.key77.setTransform(101.3,79.15,1,1,0,0,0,36.1,36.1);

	this.key188 = new lib._188();
	this.key188.name = "key188";
	this.key188.setTransform(181.25,79.15,1,1,0,0,0,36.1,36.1);

	this.key190 = new lib._190();
	this.key190.name = "key190";
	this.key190.setTransform(261.2,79.15,1,1,0,0,0,36.1,36.1);

	this.key191 = new lib._191();
	this.key191.name = "key191";
	this.key191.setTransform(341.15,79.15,1,1,0,0,0,36.1,36.1);

	this.key222 = new lib._222();
	this.key222.name = "key222";
	this.key222.setTransform(379.25,1.55,1,1,0,0,0,36.1,36.1);

	this.key186 = new lib._186();
	this.key186.name = "key186";
	this.key186.setTransform(299.35,1.55,1,1,0,0,0,36.1,36.1);

	this.key76 = new lib._76();
	this.key76.name = "key76";
	this.key76.setTransform(219.45,1.55,1,1,0,0,0,36.1,36.1);

	this.key75 = new lib._75();
	this.key75.name = "key75";
	this.key75.setTransform(139.6,1.55,1,1,0,0,0,36.1,36.1);

	this.key74 = new lib._74();
	this.key74.name = "key74";
	this.key74.setTransform(59.7,1.55,1,1,0,0,0,36.1,36.1);

	this.key72 = new lib._72();
	this.key72.name = "key72";
	this.key72.setTransform(-20.2,1.55,1,1,0,0,0,36.1,36.1);

	this.key71 = new lib._71();
	this.key71.name = "key71";
	this.key71.setTransform(-100.05,1.55,1,1,0,0,0,36.1,36.1);

	this.key70 = new lib._70();
	this.key70.name = "key70";
	this.key70.setTransform(-179.95,1.55,1,1,0,0,0,36.1,36.1);

	this.key68 = new lib._68();
	this.key68.name = "key68";
	this.key68.setTransform(-259.85,1.55,1,1,0,0,0,36.1,36.1);

	this.key83 = new lib._83();
	this.key83.name = "key83";
	this.key83.setTransform(-339.7,1.55,1,1,0,0,0,36.1,36.1);

	this.key65 = new lib._65();
	this.key65.name = "key65";
	this.key65.setTransform(-419.6,1.55,1,1,0,0,0,36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.key65},{t:this.key83},{t:this.key68},{t:this.key70},{t:this.key71},{t:this.key72},{t:this.key74},{t:this.key75},{t:this.key76},{t:this.key186},{t:this.key222},{t:this.key191},{t:this.key190},{t:this.key188},{t:this.key77},{t:this.key78},{t:this.key66},{t:this.key86},{t:this.key67},{t:this.key88},{t:this.key90},{t:this.key221},{t:this.key219},{t:this.key80},{t:this.key79},{t:this.key73},{t:this.key85},{t:this.key89},{t:this.key84},{t:this.key82},{t:this.key69},{t:this.key87},{t:this.key81},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.keyboard, new cjs.Rectangle(-475.1,-115.7,950.2,231.5), null);


(lib.forcombo = function(mode,startPosition,loop,reversed) {
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
	this.startbtn = new lib.startbtn();
	this.startbtn.name = "startbtn";
	this.startbtn.setTransform(112.15,32.1,1.5423,1.5423,0,0,0,72.7,20.8);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחרו משחק, 0, אותיות בעברית, 1, אותיות גדולות באנגלית, 2, אותיות קטנות באנגלית, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(408.25,36.6,2.545,2.545,0,0,0,50.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forcombo, new cjs.Rectangle(0,6.9,536.5,64.89999999999999), null);


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
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1879.8,360,1,1,0,0,0,1879.8,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1871.55},0).wait(1).to({x:1863.25},0).wait(1).to({x:1854.95},0).wait(1).to({x:1846.65},0).wait(1).to({x:1838.35},0).wait(1).to({x:1830.05},0).wait(1).to({x:1821.75},0).wait(1).to({x:1813.5},0).wait(1).to({x:1805.2},0).wait(1).to({x:1796.9},0).wait(1).to({x:1788.6},0).wait(1).to({x:1780.3},0).wait(1).to({x:1772},0).wait(1).to({x:1763.7},0).wait(1).to({x:1755.45},0).wait(1).to({x:1747.15},0).wait(1).to({x:1738.85},0).wait(1).to({x:1730.55},0).wait(1).to({x:1722.25},0).wait(1).to({x:1713.95},0).wait(1).to({x:1705.65},0).wait(1).to({x:1697.4},0).wait(1).to({x:1689.1},0).wait(1).to({x:1680.8},0).wait(1).to({x:1672.5},0).wait(1).to({x:1664.2},0).wait(1).to({x:1655.9},0).wait(1).to({x:1647.6},0).wait(1).to({x:1639.3},0).wait(1).to({x:1631.05},0).wait(1).to({x:1622.75},0).wait(1).to({x:1614.45},0).wait(1).to({x:1606.15},0).wait(1).to({x:1597.85},0).wait(1).to({x:1589.55},0).wait(1).to({x:1581.25},0).wait(1).to({x:1573},0).wait(1).to({x:1564.7},0).wait(1).to({x:1556.4},0).wait(1).to({x:1548.1},0).wait(1).to({x:1539.8},0).wait(1).to({x:1531.5},0).wait(1).to({x:1523.2},0).wait(1).to({x:1514.95},0).wait(1).to({x:1506.65},0).wait(1).to({x:1498.35},0).wait(1).to({x:1490.05},0).wait(1).to({x:1481.75},0).wait(1).to({x:1473.45},0).wait(1).to({x:1465.15},0).wait(1).to({x:1456.85},0).wait(1).to({x:1448.6},0).wait(1).to({x:1440.3},0).wait(1).to({x:1432},0).wait(1).to({x:1423.7},0).wait(1).to({x:1415.4},0).wait(1).to({x:1407.1},0).wait(1).to({x:1398.8},0).wait(1).to({x:1390.55},0).wait(1).to({x:1382.25},0).wait(1).to({x:1373.95},0).wait(1).to({x:1365.65},0).wait(1).to({x:1357.35},0).wait(1).to({x:1349.05},0).wait(1).to({x:1340.75},0).wait(1).to({x:1332.5},0).wait(1).to({x:1324.2},0).wait(1).to({x:1315.9},0).wait(1).to({x:1307.6},0).wait(1).to({x:1299.3},0).wait(1).to({x:1291},0).wait(1).to({x:1282.7},0).wait(1).to({x:1274.45},0).wait(1).to({x:1266.15},0).wait(1).to({x:1257.85},0).wait(1).to({x:1249.55},0).wait(1).to({x:1241.25},0).wait(1).to({x:1232.95},0).wait(1).to({x:1224.65},0).wait(1).to({x:1216.35},0).wait(1).to({x:1208.1},0).wait(1).to({x:1199.8},0).wait(1).to({x:1191.5},0).wait(1).to({x:1183.2},0).wait(1).to({x:1174.9},0).wait(1).to({x:1166.6},0).wait(1).to({x:1158.3},0).wait(1).to({x:1150.05},0).wait(1).to({x:1141.75},0).wait(1).to({x:1133.45},0).wait(1).to({x:1125.15},0).wait(1).to({x:1116.85},0).wait(1).to({x:1108.55},0).wait(1).to({x:1100.25},0).wait(1).to({x:1092},0).wait(1).to({x:1083.7},0).wait(1).to({x:1075.4},0).wait(1).to({x:1067.1},0).wait(1).to({x:1058.8},0).wait(1).to({x:1050.5},0).wait(1).to({x:1042.2},0).wait(1).to({x:1033.9},0).wait(1).to({x:1025.65},0).wait(1).to({x:1017.35},0).wait(1).to({x:1009.05},0).wait(1).to({x:1000.75},0).wait(1).to({x:992.45},0).wait(1).to({x:984.15},0).wait(1).to({x:975.85},0).wait(1).to({x:967.6},0).wait(1).to({x:959.3},0).wait(1).to({x:951},0).wait(1).to({x:942.7},0).wait(1).to({x:934.4},0).wait(1).to({x:926.1},0).wait(1).to({x:917.8},0).wait(1).to({x:909.55},0).wait(1).to({x:901.25},0).wait(1).to({x:892.95},0).wait(1).to({x:884.65},0).wait(1).to({x:876.35},0).wait(1).to({x:868.05},0).wait(1).to({x:859.75},0).wait(1).to({x:851.5},0).wait(1).to({x:843.2},0).wait(1).to({x:834.9},0).wait(1).to({x:826.6},0).wait(1).to({x:818.3},0).wait(1).to({x:810},0).wait(1).to({x:801.7},0).wait(1).to({x:793.4},0).wait(1).to({x:785.15},0).wait(1).to({x:776.85},0).wait(1).to({x:768.55},0).wait(1).to({x:760.25},0).wait(1).to({x:751.95},0).wait(1).to({x:743.65},0).wait(1).to({x:735.35},0).wait(1).to({x:727.1},0).wait(1).to({x:718.8},0).wait(1).to({x:710.5},0).wait(1).to({x:702.2},0).wait(1).to({x:693.9},0).wait(1).to({x:685.6},0).wait(1).to({x:677.3},0).wait(1).to({x:669.05},0).wait(1).to({x:660.75},0).wait(1).to({x:652.45},0).wait(1).to({x:644.15},0).wait(1).to({x:635.85},0).wait(1).to({x:627.55},0).wait(1).to({x:619.25},0).wait(1).to({x:610.95},0).wait(1).to({x:602.7},0).wait(1).to({x:594.4},0).wait(1).to({x:586.1},0).wait(1).to({x:577.8},0).wait(1).to({x:569.5},0).wait(1).to({x:561.2},0).wait(1).to({x:552.9},0).wait(1).to({x:544.65},0).wait(1).to({x:536.35},0).wait(1).to({x:528.05},0).wait(1).to({x:519.75},0).wait(1).to({x:511.45},0).wait(1).to({x:503.15},0).wait(1).to({x:494.85},0).wait(1).to({x:486.6},0).wait(1).to({x:478.3},0).wait(1).to({x:470},0).wait(1).to({x:461.7},0).wait(1).to({x:453.4},0).wait(1).to({x:445.1},0).wait(1).to({x:436.8},0).wait(1).to({x:428.5},0).wait(1).to({x:420.25},0).wait(1).to({x:411.95},0).wait(1).to({x:403.65},0).wait(1).to({x:395.35},0).wait(1).to({x:387.05},0).wait(1).to({x:378.75},0).wait(1).to({x:370.45},0).wait(1).to({x:362.2},0).wait(1).to({x:353.9},0).wait(1).to({x:345.6},0).wait(1).to({x:337.3},0).wait(1).to({x:329},0).wait(1).to({x:320.7},0).wait(1).to({x:312.4},0).wait(1).to({x:304.15},0).wait(1).to({x:295.85},0).wait(1).to({x:287.55},0).wait(1).to({x:279.25},0).wait(1).to({x:270.95},0).wait(1).to({x:262.65},0).wait(1).to({x:254.35},0).wait(1).to({x:246.1},0).wait(1).to({x:237.8},0).wait(1).to({x:229.5},0).wait(1).to({x:221.2},0).wait(1).to({x:212.9},0).wait(1).to({x:204.6},0).wait(1).to({x:196.3},0).wait(1).to({x:188},0).wait(1).to({x:179.75},0).wait(1).to({x:171.45},0).wait(1).to({x:163.15},0).wait(1).to({x:154.85},0).wait(1).to({x:146.55},0).wait(1).to({x:138.25},0).wait(1).to({x:129.95},0).wait(1).to({x:121.7},0).wait(1).to({x:113.4},0).wait(1).to({x:105.1},0).wait(1).to({x:96.8},0).wait(1).to({x:88.5},0).wait(1).to({x:80.2},0).wait(1).to({x:71.9},0).wait(1).to({x:63.65},0).wait(1).to({x:55.35},0).wait(1).to({x:47.05},0).wait(1).to({x:38.75},0).wait(1).to({x:30.45},0).wait(1).to({x:22.15},0).wait(1).to({x:13.85},0).wait(1).to({x:5.55},0).wait(1).to({x:-2.7},0).wait(1).to({x:-11},0).wait(1).to({x:-19.3},0).wait(1).to({x:-27.6},0).wait(1).to({x:-35.9},0).wait(1).to({x:-44.2},0).wait(1).to({x:-52.5},0).wait(1).to({x:-60.75},0).wait(1).to({x:-69.05},0).wait(1).to({x:-77.35},0).wait(1).to({x:-85.65},0).wait(1).to({x:-93.95},0).wait(1).to({x:-102.25},0).wait(1).to({x:-110.55},0).wait(1).to({x:-118.8},0).wait(1).to({x:-127.1},0).wait(1).to({x:-135.4},0).wait(1).to({x:-143.7},0).wait(1).to({x:-152},0).wait(1).to({x:-160.3},0).wait(1).to({x:-168.6},0).wait(1).to({x:-176.85},0).wait(1).to({x:-185.15},0).wait(1).to({x:-193.45},0).wait(1).to({x:-201.75},0).wait(1).to({x:-210.05},0).wait(1).to({x:-218.35},0).wait(1).to({x:-226.65},0).wait(1).to({x:-234.95},0).wait(1).to({x:-243.2},0).wait(1).to({x:-251.5},0).wait(1).to({x:-259.8},0).wait(1).to({x:-268.1},0).wait(1).to({x:-276.4},0).wait(1).to({x:-284.7},0).wait(1).to({x:-293},0).wait(1).to({x:-301.25},0).wait(1).to({x:-309.55},0).wait(1).to({x:-317.85},0).wait(1).to({x:-326.15},0).wait(1).to({x:-334.45},0).wait(1).to({x:-342.75},0).wait(1).to({x:-351.05},0).wait(1).to({x:-359.3},0).wait(1).to({x:-367.6},0).wait(1).to({x:-375.9},0).wait(1).to({x:-384.2},0).wait(1).to({x:-392.5},0).wait(1).to({x:-400.8},0).wait(1).to({x:-409.1},0).wait(1).to({x:-417.4},0).wait(1).to({x:-425.65},0).wait(1).to({x:-433.95},0).wait(1).to({x:-442.25},0).wait(1).to({x:-450.55},0).wait(1).to({x:-458.85},0).wait(1).to({x:-467.15},0).wait(1).to({x:-475.45},0).wait(1).to({x:-483.7},0).wait(1).to({x:-492},0).wait(1).to({x:-500.3},0).wait(1).to({x:-508.6},0).wait(1).to({x:-516.9},0).wait(1).to({x:-525.2},0).wait(1).to({x:-533.5},0).wait(1).to({x:-541.75},0).wait(1).to({x:-550.05},0).wait(1).to({x:-558.35},0).wait(1).to({x:-566.65},0).wait(1).to({x:-574.95},0).wait(1).to({x:-583.25},0).wait(1).to({x:-591.55},0).wait(1).to({x:-599.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2479.6,0,6239.1,720);


(lib.startf = function(mode,startPosition,loop,reversed) {
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
	this.forcombo = new lib.forcombo();
	this.forcombo.name = "forcombo";
	this.forcombo.setTransform(521.8,233.4,1,1,0,0,0,268.2,32.6);

	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.forcombo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startf, new cjs.Rectangle(0,0,1022,272.6), null);


// stage content:
(lib.typinggame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var game = this; //במה
		canvas.style.direction = "rtl";
		
		webfontL();
		function webfontL() {
			WebFontConfig = {
				google: {
					families: ['Alef'] //כאן בחרו את הפונט
				}
			};
		
			(function () {
				var wf = document.createElement('script');
				wf.src = ('https' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
				wf.type = 'text/javascript';
				wf.async = true;
				var s = document.getElementsByTagName('script')[0];
		
				s.parentNode.insertBefore(wf, s);
			})();
		
		}
		
		var meteor;
		var letter = 0;
		var spaceship;
		var speed = 6;
		var boom;
		var meteorgo;
		var shoot = false;
		var fire;
		var level = 1;
		var score = 0;
		var scoreboard;
		var mytime = 0;
		var myinterval;
		var game;
		var trys = 0;
		var lives
		var keyboard;
		var highscore = 0;
		
		mystart();
		function mystart() {
			stage.removeAllChildren();
			//רקע
			var bg = new lib.bg();
			bg.alpha = 0.3;
			stage.addChildAt(bg, 0);
		
			mychoice = 0;
		
			//הוספת הקומבו לבמה
			var startframe = new lib.startf();
			startframe.x = 129;
			startframe.y = 166;
			startframe.name = "startframe";
			stage.addChild(startframe);
		
		
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			startframe.forcombo.startbtn.alpha = 0.3;
			startframe.forcombo.startbtn.cursor = "not-allowed";
			startframe.forcombo.mycb.value = 0;
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		
		}
		
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
		
			var startframe = stage.getChildByName("startframe");
			//שמירת הערך שנבחר בקומבו
		
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				startframe.forcombo.startbtn.cursor = "not-allowed";
				startframe.forcombo.startbtn.alpha = 0.3;
				startframe.forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				startframe.forcombo.startbtn.cursor = "pointer";
		
				startframe.forcombo.startbtn.alpha = 1;
				startframe.forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
		}
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			if (mychoice == 1) {
				heb();
			} else if (mychoice == 2) {
				engB();
			} else if (mychoice == 3) {
				engS();
			}
		}
		
		function heb() {
			game = [
				["א", 84],
				["ב", 67],
				["ג", 68],
				["ד", 83],
				["ה", 86],
				["ו", 85],
				["ז", 90],
				["ח", 74],
				["ט", 89],
				["י", 72],
				["כ", 70],
				["ל", 75],
				["מ", 78],
				["נ", 66],
				["ס", 88],
				["ע", 71],
				["פ", 80],
				["צ", 77],
				["ק", 69],
				["ר", 82],
				["ש", 65],
				["ת", 188],
				[".", 191],
				[",", 222],
				["'", 87],
				["/", 81],
				["ן", 73],
				["ם", 79],
				["ך", 76],
				["ף", 186],
				["ץ", 190]
		
		
			];
			start();
		}
		function engB() {
			game = [
				["A", 65],
				["B", 66],
				["C", 67],
				["D", 68],
				["E", 69],
				["F", 70],
				["G", 71],
				["H", 72],
				["I", 73],
				["J", 74],
				["K", 75],
				["L", 76],
				["M", 77],
				["N", 78],
				["O", 79],
				["P", 80],
				["Q", 81],
				["R", 82],
				["S", 83],
				["T", 84],
				["U", 85],
				["V", 86],
				["W", 87],
				["X", 88],
				["Y", 89],
				["Z", 90],
				["'", 222],
				[",", 188],
				[".", 190],
				["/", 191]
			]
			start();
		}
		function engS() {
			game = [
				["a", 65],
				["b", 66],
				["c", 67],
				["d", 68],
				["e", 69],
				["f", 70],
				["g", 71],
				["h", 72],
				["i", 73],
				["j", 74],
				["k", 75],
				["l", 76],
				["m", 77],
				["n", 78],
				["o", 79],
				["p", 80],
				["q", 81],
				["r", 82],
				["s", 83],
				["t", 84],
				["u", 85],
				["v", 86],
				["w", 87],
				["x", 88],
				["y", 89],
				["z", 90],
				["'", 222],
				[",", 188],
				[".", 190],
				["/", 191]
			]
			start()
		}
		
		function start() {
			letter = 0;
			speed = 6;
			shoot = false;
			level = 1;
			score = 0;
			mytime = 0;
		
			trys = 0;
		
			var startframe = stage.getChildByName("startframe");
			stage.removeChild(startframe);
			spaceship = new lib.ship();
			spaceship.x = 235;
			spaceship.y = 200;
			stage.addChild(spaceship);
		
			scoreboard = new lib.scoreb();
			scoreboard.y = 470;
			scoreboard.x = 50;
		
			//מקלדת
			stage.addChild(scoreboard);
			myinterval = setInterval(again, 1000);
			keyboard = new lib.keyboard();
			keyboard.x = 640;
			keyboard.y = 530;
			stage.addChild(keyboard);
			//חיים
			lives = new lib.lives();
			lives.x = 1080;
			lives.y = 70;
			stage.addChild(lives);
		
			question();
		}
		
		function question() {
			if (trys == 3) {
				end();
			} else {
				keyboard["key" + game[letter][1]].gotoAndStop(0);
				scoreboard.scoreb.text = score;
				scoreboard.scorel.text = level;
				meteorgo = true;
				letter = Math.floor((Math.random() * (game.length)));
				meteor = new lib.m();
				meteor.x = 1280;
				meteor.y = 200;
				meteor.name = "meteor";
				stage.addChild(meteor)
		
				var myQ = new createjs.Text(game[letter][0], "bold 60px Alef", "#000033");
				myQ.textAlign = "center";
				myQ.y = -35;
				meteor.addChild(myQ);
			}
		}
		
		window.addEventListener("keydown", check);
		function check(evt) {
			if (shoot == false) {
				if (evt.keyCode == game[letter][1]) {
					keyboard["key" + game[letter][1]].gotoAndStop(0);
					fire = new lib.fire();
					fire.x = 360;
					fire.y = 200;
					stage.addChild(fire)
					shoot = true;
				} else {
					keyboard["key" + game[letter][1]].gotoAndStop(1);
				}
			}
		}
		function explod() {
			boom = new lib.boom();
			boom.x = meteor.x;
			boom.y = meteor.y;
			boom.scale = 0.2;
		
			stage.addChildAt(boom, stage.numChildren);
			createjs.Tween.get(boom).to({
				scale: 1
			}, 300).call(more);
			meteorgo = false;
		
		}
		createjs.Ticker.addEventListener("tick", tick);
		function tick() {
			if (meteorgo == true) {
				meteor.x -= speed;
				if (shoot == true) {
					fire.x += 10;
					if (intersect(fire, meteor)) {
						shoot = false;
						stage.removeChild(fire);
						score += 10 * level;
						explod();
					}
				}
				if (intersect(spaceship, meteor)) {
					stage.removeChild(meteor);
					trys++;
					var heart = lives["live" + trys];
					createjs.Tween.get(heart).to({
						alpha: 0
					}, 300);
					explod();
					keyboard["key" + game[letter][1]].gotoAndStop(1);
				}
			}
		}
		function more() {
			stage.removeChild(boom);
			stage.removeChild(meteor);
			question();
		}
		function again(evant) {
			mytime++;
			if (mytime % 10 == 0) {
				level += 1;
				speed += 1;
			}
		}
		function end() {
			if (score > highscore)
				highscore = score;
			var theend = new lib.end()
			theend.myscore.text = "ניקוד: " + score;
			theend.myhigescore.text = "שיא: " + highscore;
			theend.x = 640;
			theend.y = 360;
			theend.scaleY = 0.1;
			theend.name = "end";
			stage.addChild(theend)
			createjs.Tween.get(theend).to({
				scaleY: 1
			}, 1000);
			theend.rebtn.addEventListener("click", restart);
			theend.newg.addEventListener("click", mystart);
		
		}
		function restart() {
			stage.removechild(stage.getChildByName("end"));
			start();
		}
		function intersect(obj1, obj2) {
		
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
				return false;
			} else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			} else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
				return false;
			} else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
			return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '5EE4DA970F52064EBE1FC9DAC81CF831',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#000033",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_1.png?1618400427340", id:"CachedBmp_1"},
		{src:"images/typinggame_atlas_1.png?1618400427149", id:"typinggame_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1618400427340", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1618400427340", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1618400427340", id:"an.ComboBox"}
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
an.compositions['5EE4DA970F52064EBE1FC9DAC81CF831'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;