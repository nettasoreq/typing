(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"typinggame_atlas_1", frames: [[0,445,2044,288],[0,735,385,904],[881,735,617,263],[1842,0,145,157],[1989,0,48,158],[0,0,1840,443],[1842,159,91,54],[387,735,492,492],[881,1000,617,263],[387,1265,617,263],[1500,735,375,388]]}
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



(lib.CachedBmp_12 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["typinggame_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E0DCBF").s().p("AAACCIh/BDIAYiOIhohlICQgUIA/iCIBACCICPAUIhnBlIAYCOg");
	this.shape.setTransform(20.75,19.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A4AFD9").s().p("AAACCIh/BDIAZiOIhphkICQgVIA/iCIBACCICPAVIhnBkIAYCOg");
	this.shape.setTransform(20.75,19.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C3E2C5").s().p("AAACCIh/BEIAZiPIhphkICQgWIA/iBIBACBICPAWIhnBkIAYCPg");
	this.shape.setTransform(20.75,19.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E3ACCF").s().p("AAACCIh/BDIAYiOIhnhlICPgUIA/iCIBACCICQAUIhoBlIAZCOg");
	this.shape.setTransform(20.75,19.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A8DDDF").s().p("AAACCIh/BDIAZiPIhphkICQgUIA/iDIBACDICPAUIhnBkIAYCPg");
	this.shape.setTransform(20.75,19.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A4AFD9").s().p("AAACCIh/BDIAZiOIhphkICQgVIA/iCIBACCICPAVIhnBkIAYCOg");
	this.shape.setTransform(20.75,19.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C3E2C5").s().p("AAACCIh/BEIAZiPIhphkICQgWIA/iBIBACBICPAWIhnBkIAYCPg");
	this.shape.setTransform(20.75,19.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E3ACCF").s().p("AAACCIh/BDIAYiOIhnhlICPgUIA/iCIBACCICQAUIhoBlIAZCOg");
	this.shape.setTransform(20.75,19.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,41.5,39.5), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A8DDDF").s().p("AAACCIh/BDIAZiPIhphkICQgUIA/iDIBACDICPAUIhnBkIAYCPg");
	this.shape.setTransform(20.75,19.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,41.5,39.5), null);


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
	this.instance = new lib.CachedBmp_9();
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


(lib.ins = function(mode,startPosition,loop,reversed) {
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
		this.ins.font = "bold 40px Alef";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ins = new cjs.Text("לחצו על המקשים במקלדת כדי לפוצץ את המטאורים", "normal 700 49px 'Alef'", "#FFD791");
	this.ins.name = "ins";
	this.ins.textAlign = "center";
	this.ins.lineHeight = 68;
	this.ins.lineWidth = 1354;
	this.ins.parent = this;
	this.ins.setTransform(0,-40.3);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.ins);
	}

	this.timeline.addTween(cjs.Tween.get(this.ins).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ins, new cjs.Rectangle(-678.8,-42.3,1357.6999999999998,84.69999999999999), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCB").s().p("Ah0DwQgjgEgkggQgSgRgYgdQglgxgNg9QgLg4AMgwQAOg1AwghQAfgVBMgdQBaggBIgKQCbgXA0BIQAaAkgBA2QgBAxgWAmQgFAIgSATQggAhgoAbQgwAegeAVQhCAzgaASQgsAfgqAIQgLADgJAAIgHgBg");
	this.shape.setTransform(28.5013,24.0296);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,57,48.1), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCB").s().p("AAHCYQgfgCgcgPQgagOgOgUQgQgXACgdQACgTAOgnQAQgrAVgjQAqhDAsADQAXACAUASQAUAQAHAVQACAGABAMQADAYgDAYIgGAuQgCAYgBAkQgCAbgLATQgFAJgDACQgTARgpAAIgJAAg");
	this.shape.setTransform(10.6956,15.2034);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,21.4,30.4), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCB").s().p("AAjBvQgTgDgkgSQgtgWgdgXQg/gwAIgtQAEgWAUgSQATgSAVgFQAEgBAPAAQAXAAAYAFIAuAKQAXAFAjAFQAbAFARANQAHAEAEAFQAPAVgGAwQgEAggSAaQgRAYgWANQgRAJgTAAQgIAAgJgCg");
	this.shape.setTransform(15.0887,11.3173);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,30.2,22.7), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCB").s().p("AAjBwQgTgEglgSQgpgUgggZQg/gwAIgsQAEgXAUgSQASgRAWgGQAGgBAMAAQAYAAAYAFIAtALQAYAFAjAEQAbAFARANIALAJQARAXgIAvQgEAfgSAaQgRAYgWANQgRAJgUAAQgIAAgIgBg");
	this.shape.setTransform(15.145,11.34);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,30.3,22.7), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCB").s().p("AgpBCQgPgKgJgPQgJgOgBgPQgBgOAKgOQAGgIASgPQAUgRAUgKQAngVAVAPQALAHAEAPQAFAOgDAMQgBAFgCAEQgGAMgIAKIgRAWIgSAbQgJANgLAGIgGADIgFABQgOAAgTgNg");
	this.shape.setTransform(7.6349,7.8625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0.1,0,15.200000000000001,15.8), null);


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
	this.shape.graphics.f("#CCCCCB").s().p("AgqBCQgOgJgKgQQgIgOgBgOQgBgPAKgOQAGgIASgPQAZgTAPgIQAngVAVAPQAKAHAFAPQAEANgCANIgEAKQgFAMgJAKIgQAVIgTAbQgJANgKAGQgDADgEAAIgFABQgOAAgTgNg");
	this.shape.setTransform(7.6038,7.8625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,15.2,15.8), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CCCCCB").s().p("AAUBBQgKgCgWgKQgZgNgSgOQglgcAFgaQACgNAMgLQALgJAMgEIALgBQAOAAAOADIAaAHQAOADAVACQAQADAKAIIAGAFQAKANgEAcQgDASgLAPQgJAPgNAHQgKAGgMAAIgKgCg");
	this.shape.setTransform(8.8849,6.6533);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,17.8,13.3), null);


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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-22.8,-13.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire, new cjs.Rectangle(-22.8,-13.5,45.5,27), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
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
		var self = this;
		self.stop();
		self.cursor = "pointer";
		self.addEventListener("rollover", pref);
		
		function pref() {
			self.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
		self.cursor = "pointer";
		self.addEventListener("rollout", pref);
		
		function pref() {
			self.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Am6D7QhGAAgzgyQgxgxAAhHIAAihQAAhHAxgyQAzgxBGAAIN1AAQBHAAAxAxQAyAyAABHIAAChQAABHgyAxQgxAyhHAAg");
	this.shape.setTransform(61.3,25.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Am6D7QhGAAgzgyQgxgxAAhHIAAihQAAhHAxgyQAzgxBGAAIN1AAQBHAAAxAxQAyAyAABHIAAChQAABHgyAxQgxAyhHAAg");
	this.shape_1.setTransform(61.3,30.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD791").s().p("Am6D7QhGAAgzgyQgxgxAAhHIAAihQAAhHAxgyQAzgxBGAAIN1AAQBHAAAxAxQAyAyAABHIAAChQAABHgyAxQgxAyhHAAg");
	this.shape_2.setTransform(61.3,30.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:25.125}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{y:29.625}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.6,55.3);


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
		this.headline.font="bold 70px Alef"
		this.myhigescore.font="bold 40px Alef"
		this.myscore.font="bold 40px Alef"
		this.b1.font="bold 25px Alef"
		this.b2.font="bold 25px Alef"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.b1 = new cjs.Text("נסו שוב", "normal 700 25px 'Alef'", "#FFFFFF");
	this.b1.name = "b1";
	this.b1.textAlign = "center";
	this.b1.lineHeight = 36;
	this.b1.lineWidth = 149;
	this.b1.parent = this;
	this.b1.setTransform(80.4,-40);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.b1);
	}

	this.b2 = new cjs.Text("משחק חדש", "normal 700 25px 'Alef'", "#FFFFFF");
	this.b2.name = "b2";
	this.b2.textAlign = "center";
	this.b2.lineHeight = 36;
	this.b2.lineWidth = 149;
	this.b2.parent = this;
	this.b2.setTransform(-68.5,-40);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.b2);
	}

	this.newgame = new lib.btn();
	this.newgame.name = "newgame";
	this.newgame.setTransform(-69.85,-22.95,1.0974,1,0,0,0,61.4,27.6);

	this.retry = new lib.btn();
	this.retry.name = "retry";
	this.retry.setTransform(80.4,-22.95,1.0974,1,0,0,0,61.4,27.6);

	this.headline = new cjs.Text("כל הכבוד!", "normal 700 70px 'Alef'", "#000033");
	this.headline.name = "headline";
	this.headline.textAlign = "center";
	this.headline.lineHeight = 96;
	this.headline.lineWidth = 349;
	this.headline.parent = this;
	this.headline.setTransform(0,-309.3);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.headline);
	}

	this.myhigescore = new cjs.Text("", "normal 700 40px 'Alef'", "#FFD791");
	this.myhigescore.name = "myhigescore";
	this.myhigescore.textAlign = "right";
	this.myhigescore.lineHeight = 56;
	this.myhigescore.lineWidth = 290;
	this.myhigescore.parent = this;
	this.myhigescore.setTransform(151.7084,-140.2,1.0417,1);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.myhigescore);
	}

	this.myscore = new cjs.Text("", "normal 700 40px 'Alef'", "#FFD791");
	this.myscore.name = "myscore";
	this.myscore.textAlign = "right";
	this.myscore.lineHeight = 56;
	this.myscore.lineWidth = 290;
	this.myscore.parent = this;
	this.myscore.setTransform(152.3992,-206.7,1.0557,1);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.myscore);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.myscore},{t:this.myhigescore},{t:this.headline},{t:this.retry},{t:this.newgame},{t:this.b2},{t:this.b1}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD791").s().p("EhBsALeIJFreIpFrdMCDYAAAIoqLdIIqLeg");
	this.shape.setTransform(-0.002,-269.8538,0.6732,0.6732);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end, new cjs.Rectangle(-283,-319.2,566.1,323.9), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path();
	this.instance.setTransform(129.25,28.5,0.6744,0.6744,0,0,0,9.2,7);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(213.35,144.3,0.6744,0.6744,0,0,0,7.9,8.1);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(66,202,0.6744,0.6744,0,0,0,8,8.1);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(125.3,228.35,0.6744,0.6744,0,0,0,15.4,11.7);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(177.5,51.85,0.6744,0.6744,0,0,0,15.3,11.7);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(213.25,105.15,0.6744,0.6744,0,0,0,11,15.4);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(177.55,204.35,0.6744,0.6744,0,0,0,28.7,24.2);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.CachedBmp_5();
	this.instance_7.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,246,246), null);


(lib.star14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.instance = new lib.Symbol12();
	this.instance.setTransform(1728.8,19.7,1,1,0,0,0,20.8,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).wait(1).to({x:1719.2},0).wait(1).to({x:1709.6},0).wait(1).to({x:1700},0).wait(1).to({x:1690.4},0).wait(1).to({x:1680.8},0).wait(1).to({x:1671.2},0).wait(1).to({x:1661.6},0).wait(1).to({x:1652},0).wait(1).to({x:1642.4},0).wait(1).to({x:1632.8},0).wait(1).to({x:1623.2},0).wait(1).to({x:1613.65},0).wait(1).to({x:1604.05},0).wait(1).to({x:1594.45},0).wait(1).to({x:1584.85},0).wait(1).to({x:1575.25},0).wait(1).to({x:1565.65},0).wait(1).to({x:1556.05},0).wait(1).to({x:1546.45},0).wait(1).to({x:1536.85},0).wait(1).to({x:1527.25},0).wait(1).to({x:1517.65},0).wait(1).to({x:1508.1},0).wait(1).to({x:1498.5},0).wait(1).to({x:1488.9},0).wait(1).to({x:1479.3},0).wait(1).to({x:1469.7},0).wait(1).to({x:1460.1},0).wait(1).to({x:1450.5},0).wait(1).to({x:1440.9},0).wait(1).to({x:1431.3},0).wait(1).to({x:1421.7},0).wait(1).to({x:1412.1},0).wait(1).to({x:1402.55},0).wait(1).to({x:1392.95},0).wait(1).to({x:1383.35},0).wait(1).to({x:1373.75},0).wait(1).to({x:1364.15},0).wait(1).to({x:1354.55},0).wait(1).to({x:1344.95},0).wait(1).to({x:1335.35},0).wait(1).to({x:1325.75},0).wait(1).to({x:1316.15},0).wait(1).to({x:1306.55},0).wait(1).to({x:1297},0).wait(1).to({x:1287.4},0).wait(1).to({x:1277.8},0).wait(1).to({x:1268.2},0).wait(1).to({x:1258.6},0).wait(1).to({x:1249},0).wait(1).to({x:1239.4},0).wait(1).to({x:1229.8},0).wait(1).to({x:1220.2},0).wait(1).to({x:1210.6},0).wait(1).to({x:1201},0).wait(1).to({x:1191.45},0).wait(1).to({x:1181.85},0).wait(1).to({x:1172.25},0).wait(1).to({x:1162.65},0).wait(1).to({x:1153.05},0).wait(1).to({x:1143.45},0).wait(1).to({x:1133.85},0).wait(1).to({x:1124.25},0).wait(1).to({x:1114.65},0).wait(1).to({x:1105.05},0).wait(1).to({x:1095.45},0).wait(1).to({x:1085.9},0).wait(1).to({x:1076.3},0).wait(1).to({x:1066.7},0).wait(1).to({x:1057.1},0).wait(1).to({x:1047.5},0).wait(1).to({x:1037.9},0).wait(1).to({x:1028.3},0).wait(1).to({x:1018.7},0).wait(1).to({x:1009.1},0).wait(1).to({x:999.5},0).wait(1).to({x:989.9},0).wait(1).to({x:980.35},0).wait(1).to({x:970.75},0).wait(1).to({x:961.15},0).wait(1).to({x:951.55},0).wait(1).to({x:941.95},0).wait(1).to({x:932.35},0).wait(1).to({x:922.75},0).wait(1).to({x:913.15},0).wait(1).to({x:903.55},0).wait(1).to({x:893.95},0).wait(1).to({x:884.35},0).wait(1).to({x:874.8},0).wait(1).to({x:865.2},0).wait(1).to({x:855.6},0).wait(1).to({x:846},0).wait(1).to({x:836.4},0).wait(1).to({x:826.8},0).wait(1).to({x:817.2},0).wait(1).to({x:807.6},0).wait(1).to({x:798},0).wait(1).to({x:788.4},0).wait(1).to({x:778.8},0).wait(1).to({x:769.2},0).wait(1).to({x:759.65},0).wait(1).to({x:750.05},0).wait(1).to({x:740.45},0).wait(1).to({x:730.85},0).wait(1).to({x:721.25},0).wait(1).to({x:711.65},0).wait(1).to({x:702.05},0).wait(1).to({x:692.45},0).wait(1).to({x:682.85},0).wait(1).to({x:673.25},0).wait(1).to({x:663.65},0).wait(1).to({x:654.1},0).wait(1).to({x:644.5},0).wait(1).to({x:634.9},0).wait(1).to({x:625.3},0).wait(1).to({x:615.7},0).wait(1).to({x:606.1},0).wait(1).to({x:596.5},0).wait(1).to({x:586.9},0).wait(1).to({x:577.3},0).wait(1).to({x:567.7},0).wait(1).to({x:558.1},0).wait(1).to({x:548.55},0).wait(1).to({x:538.95},0).wait(1).to({x:529.35},0).wait(1).to({x:519.75},0).wait(1).to({x:510.15},0).wait(1).to({x:500.55},0).wait(1).to({x:490.95},0).wait(1).to({x:481.35},0).wait(1).to({x:471.75},0).wait(1).to({x:462.15},0).wait(1).to({x:452.55},0).wait(1).to({x:443},0).wait(1).to({x:433.4},0).wait(1).to({x:423.8},0).wait(1).to({x:414.2},0).wait(1).to({x:404.6},0).wait(1).to({x:395},0).wait(1).to({x:385.4},0).wait(1).to({x:375.8},0).wait(1).to({x:366.2},0).wait(1).to({x:356.6},0).wait(1).to({x:347},0).wait(1).to({x:337.45},0).wait(1).to({x:327.85},0).wait(1).to({x:318.25},0).wait(1).to({x:308.65},0).wait(1).to({x:299.05},0).wait(1).to({x:289.45},0).wait(1).to({x:279.85},0).wait(1).to({x:270.25},0).wait(1).to({x:260.65},0).wait(1).to({x:251.05},0).wait(1).to({x:241.45},0).wait(1).to({x:231.9},0).wait(1).to({x:222.3},0).wait(1).to({x:212.7},0).wait(1).to({x:203.1},0).wait(1).to({x:193.5},0).wait(1).to({x:183.9},0).wait(1).to({x:174.3},0).wait(1).to({x:164.7},0).wait(1).to({x:155.1},0).wait(1).to({x:145.5},0).wait(1).to({x:135.9},0).wait(1).to({x:126.35},0).wait(1).to({x:116.75},0).wait(1).to({x:107.15},0).wait(1).to({x:97.55},0).wait(1).to({x:87.95},0).wait(1).to({x:78.35},0).wait(1).to({x:68.75},0).wait(1).to({x:59.15},0).wait(1).to({x:49.55},0).wait(1).to({x:39.95},0).wait(1).to({x:30.35},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1749.5,39.5);


(lib.star13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_8
	this.instance = new lib.Symbol11();
	this.instance.setTransform(1637.3,19.8,1,1,0,0,0,20.8,19.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(1).to({x:1627},0).wait(1).to({x:1616.7},0).wait(1).to({x:1606.4},0).wait(1).to({x:1596.1},0).wait(1).to({x:1585.8},0).wait(1).to({x:1575.5},0).wait(1).to({x:1565.2},0).wait(1).to({x:1554.9},0).wait(1).to({x:1544.6},0).wait(1).to({x:1534.3},0).wait(1).to({x:1524},0).wait(1).to({x:1513.7},0).wait(1).to({x:1503.4},0).wait(1).to({x:1493.15},0).wait(1).to({x:1482.85},0).wait(1).to({x:1472.55},0).wait(1).to({x:1462.25},0).wait(1).to({x:1451.95},0).wait(1).to({x:1441.65},0).wait(1).to({x:1431.35},0).wait(1).to({x:1421.05},0).wait(1).to({x:1410.75},0).wait(1).to({x:1400.45},0).wait(1).to({x:1390.15},0).wait(1).to({x:1379.85},0).wait(1).to({x:1369.55},0).wait(1).to({x:1359.3},0).wait(1).to({x:1349},0).wait(1).to({x:1338.7},0).wait(1).to({x:1328.4},0).wait(1).to({x:1318.1},0).wait(1).to({x:1307.8},0).wait(1).to({x:1297.5},0).wait(1).to({x:1287.2},0).wait(1).to({x:1276.9},0).wait(1).to({x:1266.6},0).wait(1).to({x:1256.3},0).wait(1).to({x:1246},0).wait(1).to({x:1235.7},0).wait(1).to({x:1225.45},0).wait(1).to({x:1215.15},0).wait(1).to({x:1204.85},0).wait(1).to({x:1194.55},0).wait(1).to({x:1184.25},0).wait(1).to({x:1173.95},0).wait(1).to({x:1163.65},0).wait(1).to({x:1153.35},0).wait(1).to({x:1143.05},0).wait(1).to({x:1132.75},0).wait(1).to({x:1122.45},0).wait(1).to({x:1112.15},0).wait(1).to({x:1101.85},0).wait(1).to({x:1091.6},0).wait(1).to({x:1081.3},0).wait(1).to({x:1071},0).wait(1).to({x:1060.7},0).wait(1).to({x:1050.4},0).wait(1).to({x:1040.1},0).wait(1).to({x:1029.8},0).wait(1).to({x:1019.5},0).wait(1).to({x:1009.2},0).wait(1).to({x:998.9},0).wait(1).to({x:988.6},0).wait(1).to({x:978.3},0).wait(1).to({x:968},0).wait(1).to({x:957.75},0).wait(1).to({x:947.45},0).wait(1).to({x:937.15},0).wait(1).to({x:926.85},0).wait(1).to({x:916.55},0).wait(1).to({x:906.25},0).wait(1).to({x:895.95},0).wait(1).to({x:885.65},0).wait(1).to({x:875.35},0).wait(1).to({x:865.05},0).wait(1).to({x:854.75},0).wait(1).to({x:844.45},0).wait(1).to({x:834.15},0).wait(1).to({x:823.9},0).wait(1).to({x:813.6},0).wait(1).to({x:803.3},0).wait(1).to({x:793},0).wait(1).to({x:782.7},0).wait(1).to({x:772.4},0).wait(1).to({x:762.1},0).wait(1).to({x:751.8},0).wait(1).to({x:741.5},0).wait(1).to({x:731.2},0).wait(1).to({x:720.9},0).wait(1).to({x:710.6},0).wait(1).to({x:700.3},0).wait(1).to({x:690.05},0).wait(1).to({x:679.75},0).wait(1).to({x:669.45},0).wait(1).to({x:659.15},0).wait(1).to({x:648.85},0).wait(1).to({x:638.55},0).wait(1).to({x:628.25},0).wait(1).to({x:617.95},0).wait(1).to({x:607.65},0).wait(1).to({x:597.35},0).wait(1).to({x:587.05},0).wait(1).to({x:576.75},0).wait(1).to({x:566.45},0).wait(1).to({x:556.2},0).wait(1).to({x:545.9},0).wait(1).to({x:535.6},0).wait(1).to({x:525.3},0).wait(1).to({x:515},0).wait(1).to({x:504.7},0).wait(1).to({x:494.4},0).wait(1).to({x:484.1},0).wait(1).to({x:473.8},0).wait(1).to({x:463.5},0).wait(1).to({x:453.2},0).wait(1).to({x:442.9},0).wait(1).to({x:432.6},0).wait(1).to({x:422.35},0).wait(1).to({x:412.05},0).wait(1).to({x:401.75},0).wait(1).to({x:391.45},0).wait(1).to({x:381.15},0).wait(1).to({x:370.85},0).wait(1).to({x:360.55},0).wait(1).to({x:350.25},0).wait(1).to({x:339.95},0).wait(1).to({x:329.65},0).wait(1).to({x:319.35},0).wait(1).to({x:309.05},0).wait(1).to({x:298.75},0).wait(1).to({x:288.5},0).wait(1).to({x:278.2},0).wait(1).to({x:267.9},0).wait(1).to({x:257.6},0).wait(1).to({x:247.3},0).wait(1).to({x:237},0).wait(1).to({x:226.7},0).wait(1).to({x:216.4},0).wait(1).to({x:206.1},0).wait(1).to({x:195.8},0).wait(1).to({x:185.5},0).wait(1).to({x:175.2},0).wait(1).to({x:164.9},0).wait(1).to({x:154.65},0).wait(1).to({x:144.35},0).wait(1).to({x:134.05},0).wait(1).to({x:123.75},0).wait(1).to({x:113.45},0).wait(1).to({x:103.15},0).wait(1).to({x:92.85},0).wait(1).to({x:82.55},0).wait(1).to({x:72.25},0).wait(1).to({x:61.95},0).wait(1).to({x:51.65},0).wait(1).to({x:41.35},0).wait(1).to({x:31.05},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1658,39.5);


(lib.star12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Symbol10();
	this.instance.setTransform(2033.8,19.7,1,1,0,0,0,20.8,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(1).to({x:2020},0).wait(1).to({x:2006.2},0).wait(1).to({x:1992.4},0).wait(1).to({x:1978.6},0).wait(1).to({x:1964.85},0).wait(1).to({x:1951.05},0).wait(1).to({x:1937.25},0).wait(1).to({x:1923.45},0).wait(1).to({x:1909.7},0).wait(1).to({x:1895.9},0).wait(1).to({x:1882.1},0).wait(1).to({x:1868.3},0).wait(1).to({x:1854.55},0).wait(1).to({x:1840.75},0).wait(1).to({x:1826.95},0).wait(1).to({x:1813.15},0).wait(1).to({x:1799.4},0).wait(1).to({x:1785.6},0).wait(1).to({x:1771.8},0).wait(1).to({x:1758},0).wait(1).to({x:1744.25},0).wait(1).to({x:1730.45},0).wait(1).to({x:1716.65},0).wait(1).to({x:1702.85},0).wait(1).to({x:1689.1},0).wait(1).to({x:1675.3},0).wait(1).to({x:1661.5},0).wait(1).to({x:1647.7},0).wait(1).to({x:1633.95},0).wait(1).to({x:1620.15},0).wait(1).to({x:1606.35},0).wait(1).to({x:1592.55},0).wait(1).to({x:1578.8},0).wait(1).to({x:1565},0).wait(1).to({x:1551.2},0).wait(1).to({x:1537.4},0).wait(1).to({x:1523.65},0).wait(1).to({x:1509.85},0).wait(1).to({x:1496.05},0).wait(1).to({x:1482.25},0).wait(1).to({x:1468.5},0).wait(1).to({x:1454.7},0).wait(1).to({x:1440.9},0).wait(1).to({x:1427.1},0).wait(1).to({x:1413.35},0).wait(1).to({x:1399.55},0).wait(1).to({x:1385.75},0).wait(1).to({x:1371.95},0).wait(1).to({x:1358.2},0).wait(1).to({x:1344.4},0).wait(1).to({x:1330.6},0).wait(1).to({x:1316.8},0).wait(1).to({x:1303.05},0).wait(1).to({x:1289.25},0).wait(1).to({x:1275.45},0).wait(1).to({x:1261.65},0).wait(1).to({x:1247.9},0).wait(1).to({x:1234.1},0).wait(1).to({x:1220.3},0).wait(1).to({x:1206.5},0).wait(1).to({x:1192.75},0).wait(1).to({x:1178.95},0).wait(1).to({x:1165.15},0).wait(1).to({x:1151.35},0).wait(1).to({x:1137.6},0).wait(1).to({x:1123.8},0).wait(1).to({x:1110},0).wait(1).to({x:1096.2},0).wait(1).to({x:1082.45},0).wait(1).to({x:1068.65},0).wait(1).to({x:1054.85},0).wait(1).to({x:1041.05},0).wait(1).to({x:1027.3},0).wait(1).to({x:1013.5},0).wait(1).to({x:999.7},0).wait(1).to({x:985.9},0).wait(1).to({x:972.1},0).wait(1).to({x:958.35},0).wait(1).to({x:944.55},0).wait(1).to({x:930.75},0).wait(1).to({x:916.95},0).wait(1).to({x:903.2},0).wait(1).to({x:889.4},0).wait(1).to({x:875.6},0).wait(1).to({x:861.8},0).wait(1).to({x:848.05},0).wait(1).to({x:834.25},0).wait(1).to({x:820.45},0).wait(1).to({x:806.65},0).wait(1).to({x:792.9},0).wait(1).to({x:779.1},0).wait(1).to({x:765.3},0).wait(1).to({x:751.5},0).wait(1).to({x:737.75},0).wait(1).to({x:723.95},0).wait(1).to({x:710.15},0).wait(1).to({x:696.35},0).wait(1).to({x:682.6},0).wait(1).to({x:668.8},0).wait(1).to({x:655},0).wait(1).to({x:641.2},0).wait(1).to({x:627.45},0).wait(1).to({x:613.65},0).wait(1).to({x:599.85},0).wait(1).to({x:586.05},0).wait(1).to({x:572.3},0).wait(1).to({x:558.5},0).wait(1).to({x:544.7},0).wait(1).to({x:530.9},0).wait(1).to({x:517.15},0).wait(1).to({x:503.35},0).wait(1).to({x:489.55},0).wait(1).to({x:475.75},0).wait(1).to({x:462},0).wait(1).to({x:448.2},0).wait(1).to({x:434.4},0).wait(1).to({x:420.6},0).wait(1).to({x:406.85},0).wait(1).to({x:393.05},0).wait(1).to({x:379.25},0).wait(1).to({x:365.45},0).wait(1).to({x:351.7},0).wait(1).to({x:337.9},0).wait(1).to({x:324.1},0).wait(1).to({x:310.3},0).wait(1).to({x:296.55},0).wait(1).to({x:282.75},0).wait(1).to({x:268.95},0).wait(1).to({x:255.15},0).wait(1).to({x:241.4},0).wait(1).to({x:227.6},0).wait(1).to({x:213.8},0).wait(1).to({x:200},0).wait(1).to({x:186.25},0).wait(1).to({x:172.45},0).wait(1).to({x:158.65},0).wait(1).to({x:144.85},0).wait(1).to({x:131.1},0).wait(1).to({x:117.3},0).wait(1).to({x:103.5},0).wait(1).to({x:89.7},0).wait(1).to({x:75.95},0).wait(1).to({x:62.15},0).wait(1).to({x:48.35},0).wait(1).to({x:34.55},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2054.5,39.5);


(lib.star11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.Symbol9();
	this.instance.setTransform(1728.8,19.8,1,1,0,0,0,20.8,19.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(1).to({x:1716.75},0).wait(1).to({x:1704.7},0).wait(1).to({x:1692.7},0).wait(1).to({x:1680.65},0).wait(1).to({x:1668.65},0).wait(1).to({x:1656.6},0).wait(1).to({x:1644.6},0).wait(1).to({x:1632.55},0).wait(1).to({x:1620.5},0).wait(1).to({x:1608.5},0).wait(1).to({x:1596.45},0).wait(1).to({x:1584.45},0).wait(1).to({x:1572.4},0).wait(1).to({x:1560.4},0).wait(1).to({x:1548.35},0).wait(1).to({x:1536.3},0).wait(1).to({x:1524.3},0).wait(1).to({x:1512.25},0).wait(1).to({x:1500.25},0).wait(1).to({x:1488.2},0).wait(1).to({x:1476.2},0).wait(1).to({x:1464.15},0).wait(1).to({x:1452.15},0).wait(1).to({x:1440.1},0).wait(1).to({x:1428.05},0).wait(1).to({x:1416.05},0).wait(1).to({x:1404},0).wait(1).to({x:1392},0).wait(1).to({x:1379.95},0).wait(1).to({x:1367.95},0).wait(1).to({x:1355.9},0).wait(1).to({x:1343.85},0).wait(1).to({x:1331.85},0).wait(1).to({x:1319.8},0).wait(1).to({x:1307.8},0).wait(1).to({x:1295.75},0).wait(1).to({x:1283.75},0).wait(1).to({x:1271.7},0).wait(1).to({x:1259.7},0).wait(1).to({x:1247.65},0).wait(1).to({x:1235.6},0).wait(1).to({x:1223.6},0).wait(1).to({x:1211.55},0).wait(1).to({x:1199.55},0).wait(1).to({x:1187.5},0).wait(1).to({x:1175.5},0).wait(1).to({x:1163.45},0).wait(1).to({x:1151.4},0).wait(1).to({x:1139.4},0).wait(1).to({x:1127.35},0).wait(1).to({x:1115.35},0).wait(1).to({x:1103.3},0).wait(1).to({x:1091.3},0).wait(1).to({x:1079.25},0).wait(1).to({x:1067.25},0).wait(1).to({x:1055.2},0).wait(1).to({x:1043.15},0).wait(1).to({x:1031.15},0).wait(1).to({x:1019.1},0).wait(1).to({x:1007.1},0).wait(1).to({x:995.05},0).wait(1).to({x:983.05},0).wait(1).to({x:971},0).wait(1).to({x:958.95},0).wait(1).to({x:946.95},0).wait(1).to({x:934.9},0).wait(1).to({x:922.9},0).wait(1).to({x:910.85},0).wait(1).to({x:898.85},0).wait(1).to({x:886.8},0).wait(1).to({x:874.8},0).wait(1).to({x:862.75},0).wait(1).to({x:850.7},0).wait(1).to({x:838.7},0).wait(1).to({x:826.65},0).wait(1).to({x:814.65},0).wait(1).to({x:802.6},0).wait(1).to({x:790.6},0).wait(1).to({x:778.55},0).wait(1).to({x:766.5},0).wait(1).to({x:754.5},0).wait(1).to({x:742.45},0).wait(1).to({x:730.45},0).wait(1).to({x:718.4},0).wait(1).to({x:706.4},0).wait(1).to({x:694.35},0).wait(1).to({x:682.3},0).wait(1).to({x:670.3},0).wait(1).to({x:658.25},0).wait(1).to({x:646.25},0).wait(1).to({x:634.2},0).wait(1).to({x:622.2},0).wait(1).to({x:610.15},0).wait(1).to({x:598.15},0).wait(1).to({x:586.1},0).wait(1).to({x:574.05},0).wait(1).to({x:562.05},0).wait(1).to({x:550},0).wait(1).to({x:538},0).wait(1).to({x:525.95},0).wait(1).to({x:513.95},0).wait(1).to({x:501.9},0).wait(1).to({x:489.85},0).wait(1).to({x:477.85},0).wait(1).to({x:465.8},0).wait(1).to({x:453.8},0).wait(1).to({x:441.75},0).wait(1).to({x:429.75},0).wait(1).to({x:417.7},0).wait(1).to({x:405.7},0).wait(1).to({x:393.65},0).wait(1).to({x:381.6},0).wait(1).to({x:369.6},0).wait(1).to({x:357.55},0).wait(1).to({x:345.55},0).wait(1).to({x:333.5},0).wait(1).to({x:321.5},0).wait(1).to({x:309.45},0).wait(1).to({x:297.4},0).wait(1).to({x:285.4},0).wait(1).to({x:273.35},0).wait(1).to({x:261.35},0).wait(1).to({x:249.3},0).wait(1).to({x:237.3},0).wait(1).to({x:225.25},0).wait(1).to({x:213.25},0).wait(1).to({x:201.2},0).wait(1).to({x:189.15},0).wait(1).to({x:177.15},0).wait(1).to({x:165.1},0).wait(1).to({x:153.1},0).wait(1).to({x:141.05},0).wait(1).to({x:129.05},0).wait(1).to({x:117},0).wait(1).to({x:104.95},0).wait(1).to({x:92.95},0).wait(1).to({x:80.9},0).wait(1).to({x:68.9},0).wait(1).to({x:56.85},0).wait(1).to({x:44.85},0).wait(1).to({x:32.8},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1749.5,39.5);


(lib.star10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Symbol8();
	this.instance.setTransform(2521.8,19.7,1,1,0,0,0,20.8,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(131).to({_off:false},0).wait(1).to({x:2508.55},0).wait(1).to({x:2495.3},0).wait(1).to({x:2482.1},0).wait(1).to({x:2468.85},0).wait(1).to({x:2455.6},0).wait(1).to({x:2442.4},0).wait(1).to({x:2429.15},0).wait(1).to({x:2415.9},0).wait(1).to({x:2402.7},0).wait(1).to({x:2389.45},0).wait(1).to({x:2376.2},0).wait(1).to({x:2363},0).wait(1).to({x:2349.75},0).wait(1).to({x:2336.5},0).wait(1).to({x:2323.3},0).wait(1).to({x:2310.05},0).wait(1).to({x:2296.8},0).wait(1).to({x:2283.6},0).wait(1).to({x:2270.35},0).wait(1).to({x:2257.1},0).wait(1).to({x:2243.9},0).wait(1).to({x:2230.65},0).wait(1).to({x:2217.4},0).wait(1).to({x:2204.2},0).wait(1).to({x:2190.95},0).wait(1).to({x:2177.7},0).wait(1).to({x:2164.5},0).wait(1).to({x:2151.25},0).wait(1).to({x:2138},0).wait(1).to({x:2124.8},0).wait(1).to({x:2111.55},0).wait(1).to({x:2098.35},0).wait(1).to({x:2085.1},0).wait(1).to({x:2071.85},0).wait(1).to({x:2058.65},0).wait(1).to({x:2045.4},0).wait(1).to({x:2032.15},0).wait(1).to({x:2018.95},0).wait(1).to({x:2005.7},0).wait(1).to({x:1992.45},0).wait(1).to({x:1979.25},0).wait(1).to({x:1966},0).wait(1).to({x:1952.75},0).wait(1).to({x:1939.55},0).wait(1).to({x:1926.3},0).wait(1).to({x:1913.05},0).wait(1).to({x:1899.85},0).wait(1).to({x:1886.6},0).wait(1).to({x:1873.35},0).wait(1).to({x:1860.15},0).wait(1).to({x:1846.9},0).wait(1).to({x:1833.65},0).wait(1).to({x:1820.45},0).wait(1).to({x:1807.2},0).wait(1).to({x:1793.95},0).wait(1).to({x:1780.75},0).wait(1).to({x:1767.5},0).wait(1).to({x:1754.25},0).wait(1).to({x:1741.05},0).wait(1).to({x:1727.8},0).wait(1).to({x:1714.55},0).wait(1).to({x:1701.35},0).wait(1).to({x:1688.1},0).wait(1).to({x:1674.9},0).wait(1).to({x:1661.65},0).wait(1).to({x:1648.4},0).wait(1).to({x:1635.2},0).wait(1).to({x:1621.95},0).wait(1).to({x:1608.7},0).wait(1).to({x:1595.5},0).wait(1).to({x:1582.25},0).wait(1).to({x:1569},0).wait(1).to({x:1555.8},0).wait(1).to({x:1542.55},0).wait(1).to({x:1529.3},0).wait(1).to({x:1516.1},0).wait(1).to({x:1502.85},0).wait(1).to({x:1489.6},0).wait(1).to({x:1476.4},0).wait(1).to({x:1463.15},0).wait(1).to({x:1449.9},0).wait(1).to({x:1436.7},0).wait(1).to({x:1423.45},0).wait(1).to({x:1410.2},0).wait(1).to({x:1397},0).wait(1).to({x:1383.75},0).wait(1).to({x:1370.5},0).wait(1).to({x:1357.3},0).wait(1).to({x:1344.05},0).wait(1).to({x:1330.8},0).wait(1).to({x:1317.6},0).wait(1).to({x:1304.35},0).wait(1).to({x:1291.1},0).wait(1).to({x:1277.9},0).wait(1).to({x:1264.65},0).wait(1).to({x:1251.45},0).wait(1).to({x:1238.2},0).wait(1).to({x:1224.95},0).wait(1).to({x:1211.75},0).wait(1).to({x:1198.5},0).wait(1).to({x:1185.25},0).wait(1).to({x:1172.05},0).wait(1).to({x:1158.8},0).wait(1).to({x:1145.55},0).wait(1).to({x:1132.35},0).wait(1).to({x:1119.1},0).wait(1).to({x:1105.85},0).wait(1).to({x:1092.65},0).wait(1).to({x:1079.4},0).wait(1).to({x:1066.15},0).wait(1).to({x:1052.95},0).wait(1).to({x:1039.7},0).wait(1).to({x:1026.45},0).wait(1).to({x:1013.25},0).wait(1).to({x:1000},0).wait(1).to({x:986.75},0).wait(1).to({x:973.55},0).wait(1).to({x:960.3},0).wait(1).to({x:947.05},0).wait(1).to({x:933.85},0).wait(1).to({x:920.6},0).wait(1).to({x:907.35},0).wait(1).to({x:894.15},0).wait(1).to({x:880.9},0).wait(1).to({x:867.65},0).wait(1).to({x:854.45},0).wait(1).to({x:841.2},0).wait(1).to({x:828},0).wait(1).to({x:814.75},0).wait(1).to({x:801.5},0).wait(1).to({x:788.3},0).wait(1).to({x:775.05},0).wait(1).to({x:761.8},0).wait(1).to({x:748.6},0).wait(1).to({x:735.35},0).wait(1).to({x:722.1},0).wait(1).to({x:708.9},0).wait(1).to({x:695.65},0).wait(1).to({x:682.4},0).wait(1).to({x:669.2},0).wait(1).to({x:655.95},0).wait(1).to({x:642.7},0).wait(1).to({x:629.5},0).wait(1).to({x:616.25},0).wait(1).to({x:603},0).wait(1).to({x:589.8},0).wait(1).to({x:576.55},0).wait(1).to({x:563.3},0).wait(1).to({x:550.1},0).wait(1).to({x:536.85},0).wait(1).to({x:523.6},0).wait(1).to({x:510.4},0).wait(1).to({x:497.15},0).wait(1).to({x:483.9},0).wait(1).to({x:470.7},0).wait(1).to({x:457.45},0).wait(1).to({x:444.2},0).wait(1).to({x:431},0).wait(1).to({x:417.75},0).wait(1).to({x:404.55},0).wait(1).to({x:391.3},0).wait(1).to({x:378.05},0).wait(1).to({x:364.85},0).wait(1).to({x:351.6},0).wait(1).to({x:338.35},0).wait(1).to({x:325.15},0).wait(1).to({x:311.9},0).wait(1).to({x:298.65},0).wait(1).to({x:285.45},0).wait(1).to({x:272.2},0).wait(1).to({x:258.95},0).wait(1).to({x:245.75},0).wait(1).to({x:232.5},0).wait(1).to({x:219.25},0).wait(1).to({x:206.05},0).wait(1).to({x:192.8},0).wait(1).to({x:179.55},0).wait(1).to({x:166.35},0).wait(1).to({x:153.1},0).wait(1).to({x:139.85},0).wait(1).to({x:126.65},0).wait(1).to({x:113.4},0).wait(1).to({x:100.15},0).wait(1).to({x:86.95},0).wait(1).to({x:73.7},0).wait(1).to({x:60.45},0).wait(1).to({x:47.25},0).wait(1).to({x:34},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2542.5,39.5);


(lib.star9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.Symbol7();
	this.instance.setTransform(2521.8,19.8,1,1,0,0,0,20.8,19.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).wait(1).to({x:2506.55},0).wait(1).to({x:2491.3},0).wait(1).to({x:2476.05},0).wait(1).to({x:2460.8},0).wait(1).to({x:2445.55},0).wait(1).to({x:2430.3},0).wait(1).to({x:2415.05},0).wait(1).to({x:2399.8},0).wait(1).to({x:2384.55},0).wait(1).to({x:2369.3},0).wait(1).to({x:2354.05},0).wait(1).to({x:2338.8},0).wait(1).to({x:2323.55},0).wait(1).to({x:2308.3},0).wait(1).to({x:2293.05},0).wait(1).to({x:2277.8},0).wait(1).to({x:2262.55},0).wait(1).to({x:2247.3},0).wait(1).to({x:2232.05},0).wait(1).to({x:2216.8},0).wait(1).to({x:2201.55},0).wait(1).to({x:2186.3},0).wait(1).to({x:2171.05},0).wait(1).to({x:2155.8},0).wait(1).to({x:2140.55},0).wait(1).to({x:2125.3},0).wait(1).to({x:2110.05},0).wait(1).to({x:2094.8},0).wait(1).to({x:2079.55},0).wait(1).to({x:2064.3},0).wait(1).to({x:2049.05},0).wait(1).to({x:2033.8},0).wait(1).to({x:2018.55},0).wait(1).to({x:2003.3},0).wait(1).to({x:1988.05},0).wait(1).to({x:1972.8},0).wait(1).to({x:1957.55},0).wait(1).to({x:1942.3},0).wait(1).to({x:1927.05},0).wait(1).to({x:1911.8},0).wait(1).to({x:1896.55},0).wait(1).to({x:1881.3},0).wait(1).to({x:1866.05},0).wait(1).to({x:1850.8},0).wait(1).to({x:1835.55},0).wait(1).to({x:1820.3},0).wait(1).to({x:1805.05},0).wait(1).to({x:1789.8},0).wait(1).to({x:1774.55},0).wait(1).to({x:1759.3},0).wait(1).to({x:1744.05},0).wait(1).to({x:1728.8},0).wait(1).to({x:1713.55},0).wait(1).to({x:1698.3},0).wait(1).to({x:1683.05},0).wait(1).to({x:1667.8},0).wait(1).to({x:1652.55},0).wait(1).to({x:1637.3},0).wait(1).to({x:1622.05},0).wait(1).to({x:1606.8},0).wait(1).to({x:1591.55},0).wait(1).to({x:1576.3},0).wait(1).to({x:1561.05},0).wait(1).to({x:1545.8},0).wait(1).to({x:1530.55},0).wait(1).to({x:1515.3},0).wait(1).to({x:1500.05},0).wait(1).to({x:1484.8},0).wait(1).to({x:1469.55},0).wait(1).to({x:1454.3},0).wait(1).to({x:1439.05},0).wait(1).to({x:1423.8},0).wait(1).to({x:1408.55},0).wait(1).to({x:1393.3},0).wait(1).to({x:1378.05},0).wait(1).to({x:1362.8},0).wait(1).to({x:1347.55},0).wait(1).to({x:1332.3},0).wait(1).to({x:1317.05},0).wait(1).to({x:1301.8},0).wait(1).to({x:1286.55},0).wait(1).to({x:1271.3},0).wait(1).to({x:1256.05},0).wait(1).to({x:1240.8},0).wait(1).to({x:1225.55},0).wait(1).to({x:1210.3},0).wait(1).to({x:1195.05},0).wait(1).to({x:1179.8},0).wait(1).to({x:1164.55},0).wait(1).to({x:1149.3},0).wait(1).to({x:1134.05},0).wait(1).to({x:1118.8},0).wait(1).to({x:1103.55},0).wait(1).to({x:1088.3},0).wait(1).to({x:1073.05},0).wait(1).to({x:1057.8},0).wait(1).to({x:1042.55},0).wait(1).to({x:1027.3},0).wait(1).to({x:1012.05},0).wait(1).to({x:996.8},0).wait(1).to({x:981.55},0).wait(1).to({x:966.3},0).wait(1).to({x:951.05},0).wait(1).to({x:935.8},0).wait(1).to({x:920.55},0).wait(1).to({x:905.3},0).wait(1).to({x:890.05},0).wait(1).to({x:874.8},0).wait(1).to({x:859.55},0).wait(1).to({x:844.3},0).wait(1).to({x:829.05},0).wait(1).to({x:813.8},0).wait(1).to({x:798.55},0).wait(1).to({x:783.3},0).wait(1).to({x:768.05},0).wait(1).to({x:752.8},0).wait(1).to({x:737.55},0).wait(1).to({x:722.3},0).wait(1).to({x:707.05},0).wait(1).to({x:691.8},0).wait(1).to({x:676.55},0).wait(1).to({x:661.3},0).wait(1).to({x:646.05},0).wait(1).to({x:630.8},0).wait(1).to({x:615.55},0).wait(1).to({x:600.3},0).wait(1).to({x:585.05},0).wait(1).to({x:569.8},0).wait(1).to({x:554.55},0).wait(1).to({x:539.3},0).wait(1).to({x:524.05},0).wait(1).to({x:508.8},0).wait(1).to({x:493.55},0).wait(1).to({x:478.3},0).wait(1).to({x:463.05},0).wait(1).to({x:447.8},0).wait(1).to({x:432.55},0).wait(1).to({x:417.3},0).wait(1).to({x:402.05},0).wait(1).to({x:386.8},0).wait(1).to({x:371.55},0).wait(1).to({x:356.3},0).wait(1).to({x:341.05},0).wait(1).to({x:325.8},0).wait(1).to({x:310.55},0).wait(1).to({x:295.3},0).wait(1).to({x:280.05},0).wait(1).to({x:264.8},0).wait(1).to({x:249.55},0).wait(1).to({x:234.3},0).wait(1).to({x:219.05},0).wait(1).to({x:203.8},0).wait(1).to({x:188.55},0).wait(1).to({x:173.3},0).wait(1).to({x:158.05},0).wait(1).to({x:142.8},0).wait(1).to({x:127.55},0).wait(1).to({x:112.3},0).wait(1).to({x:97.05},0).wait(1).to({x:81.8},0).wait(1).to({x:66.55},0).wait(1).to({x:51.3},0).wait(1).to({x:36.05},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2542.5,39.5);


(lib.star8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol6();
	this.instance.setTransform(2521.8,19.7,1,1,0,0,0,20.8,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).wait(1).to({x:2505.95},0).wait(1).to({x:2490.1},0).wait(1).to({x:2474.3},0).wait(1).to({x:2458.45},0).wait(1).to({x:2442.65},0).wait(1).to({x:2426.8},0).wait(1).to({x:2410.95},0).wait(1).to({x:2395.15},0).wait(1).to({x:2379.3},0).wait(1).to({x:2363.5},0).wait(1).to({x:2347.65},0).wait(1).to({x:2331.85},0).wait(1).to({x:2316},0).wait(1).to({x:2300.15},0).wait(1).to({x:2284.35},0).wait(1).to({x:2268.5},0).wait(1).to({x:2252.7},0).wait(1).to({x:2236.85},0).wait(1).to({x:2221},0).wait(1).to({x:2205.2},0).wait(1).to({x:2189.35},0).wait(1).to({x:2173.55},0).wait(1).to({x:2157.7},0).wait(1).to({x:2141.9},0).wait(1).to({x:2126.05},0).wait(1).to({x:2110.2},0).wait(1).to({x:2094.4},0).wait(1).to({x:2078.55},0).wait(1).to({x:2062.75},0).wait(1).to({x:2046.9},0).wait(1).to({x:2031.05},0).wait(1).to({x:2015.25},0).wait(1).to({x:1999.4},0).wait(1).to({x:1983.6},0).wait(1).to({x:1967.75},0).wait(1).to({x:1951.95},0).wait(1).to({x:1936.1},0).wait(1).to({x:1920.25},0).wait(1).to({x:1904.45},0).wait(1).to({x:1888.6},0).wait(1).to({x:1872.8},0).wait(1).to({x:1856.95},0).wait(1).to({x:1841.1},0).wait(1).to({x:1825.3},0).wait(1).to({x:1809.45},0).wait(1).to({x:1793.65},0).wait(1).to({x:1777.8},0).wait(1).to({x:1762},0).wait(1).to({x:1746.15},0).wait(1).to({x:1730.3},0).wait(1).to({x:1714.5},0).wait(1).to({x:1698.65},0).wait(1).to({x:1682.85},0).wait(1).to({x:1667},0).wait(1).to({x:1651.15},0).wait(1).to({x:1635.35},0).wait(1).to({x:1619.5},0).wait(1).to({x:1603.7},0).wait(1).to({x:1587.85},0).wait(1).to({x:1572.05},0).wait(1).to({x:1556.2},0).wait(1).to({x:1540.35},0).wait(1).to({x:1524.55},0).wait(1).to({x:1508.7},0).wait(1).to({x:1492.9},0).wait(1).to({x:1477.05},0).wait(1).to({x:1461.2},0).wait(1).to({x:1445.4},0).wait(1).to({x:1429.55},0).wait(1).to({x:1413.75},0).wait(1).to({x:1397.9},0).wait(1).to({x:1382.1},0).wait(1).to({x:1366.25},0).wait(1).to({x:1350.4},0).wait(1).to({x:1334.6},0).wait(1).to({x:1318.75},0).wait(1).to({x:1302.95},0).wait(1).to({x:1287.1},0).wait(1).to({x:1271.3},0).wait(1).to({x:1255.45},0).wait(1).to({x:1239.6},0).wait(1).to({x:1223.8},0).wait(1).to({x:1207.95},0).wait(1).to({x:1192.15},0).wait(1).to({x:1176.3},0).wait(1).to({x:1160.45},0).wait(1).to({x:1144.65},0).wait(1).to({x:1128.8},0).wait(1).to({x:1113},0).wait(1).to({x:1097.15},0).wait(1).to({x:1081.35},0).wait(1).to({x:1065.5},0).wait(1).to({x:1049.65},0).wait(1).to({x:1033.85},0).wait(1).to({x:1018},0).wait(1).to({x:1002.2},0).wait(1).to({x:986.35},0).wait(1).to({x:970.5},0).wait(1).to({x:954.7},0).wait(1).to({x:938.85},0).wait(1).to({x:923.05},0).wait(1).to({x:907.2},0).wait(1).to({x:891.4},0).wait(1).to({x:875.55},0).wait(1).to({x:859.7},0).wait(1).to({x:843.9},0).wait(1).to({x:828.05},0).wait(1).to({x:812.25},0).wait(1).to({x:796.4},0).wait(1).to({x:780.55},0).wait(1).to({x:764.75},0).wait(1).to({x:748.9},0).wait(1).to({x:733.1},0).wait(1).to({x:717.25},0).wait(1).to({x:701.45},0).wait(1).to({x:685.6},0).wait(1).to({x:669.75},0).wait(1).to({x:653.95},0).wait(1).to({x:638.1},0).wait(1).to({x:622.3},0).wait(1).to({x:606.45},0).wait(1).to({x:590.6},0).wait(1).to({x:574.8},0).wait(1).to({x:558.95},0).wait(1).to({x:543.15},0).wait(1).to({x:527.3},0).wait(1).to({x:511.5},0).wait(1).to({x:495.65},0).wait(1).to({x:479.8},0).wait(1).to({x:464},0).wait(1).to({x:448.15},0).wait(1).to({x:432.35},0).wait(1).to({x:416.5},0).wait(1).to({x:400.65},0).wait(1).to({x:384.85},0).wait(1).to({x:369},0).wait(1).to({x:353.2},0).wait(1).to({x:337.35},0).wait(1).to({x:321.55},0).wait(1).to({x:305.7},0).wait(1).to({x:289.85},0).wait(1).to({x:274.05},0).wait(1).to({x:258.2},0).wait(1).to({x:242.4},0).wait(1).to({x:226.55},0).wait(1).to({x:210.7},0).wait(1).to({x:194.9},0).wait(1).to({x:179.05},0).wait(1).to({x:163.25},0).wait(1).to({x:147.4},0).wait(1).to({x:131.6},0).wait(1).to({x:115.75},0).wait(1).to({x:99.9},0).wait(1).to({x:84.1},0).wait(1).to({x:68.25},0).wait(1).to({x:52.45},0).wait(1).to({x:36.6},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2542.5,39.5);


(lib.star7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol5();
	this.instance.setTransform(2460.8,19.8,1,1,0,0,0,20.8,19.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(157).to({_off:false},0).wait(1).to({x:2447.45},0).wait(1).to({x:2434.1},0).wait(1).to({x:2420.8},0).wait(1).to({x:2407.45},0).wait(1).to({x:2394.1},0).wait(1).to({x:2380.8},0).wait(1).to({x:2367.45},0).wait(1).to({x:2354.1},0).wait(1).to({x:2340.8},0).wait(1).to({x:2327.45},0).wait(1).to({x:2314.1},0).wait(1).to({x:2300.8},0).wait(1).to({x:2287.45},0).wait(1).to({x:2274.1},0).wait(1).to({x:2260.8},0).wait(1).to({x:2247.45},0).wait(1).to({x:2234.1},0).wait(1).to({x:2220.8},0).wait(1).to({x:2207.45},0).wait(1).to({x:2194.1},0).wait(1).to({x:2180.8},0).wait(1).to({x:2167.45},0).wait(1).to({x:2154.1},0).wait(1).to({x:2140.8},0).wait(1).to({x:2127.45},0).wait(1).to({x:2114.1},0).wait(1).to({x:2100.8},0).wait(1).to({x:2087.45},0).wait(1).to({x:2074.1},0).wait(1).to({x:2060.8},0).wait(1).to({x:2047.45},0).wait(1).to({x:2034.1},0).wait(1).to({x:2020.8},0).wait(1).to({x:2007.45},0).wait(1).to({x:1994.1},0).wait(1).to({x:1980.8},0).wait(1).to({x:1967.45},0).wait(1).to({x:1954.1},0).wait(1).to({x:1940.8},0).wait(1).to({x:1927.45},0).wait(1).to({x:1914.1},0).wait(1).to({x:1900.8},0).wait(1).to({x:1887.45},0).wait(1).to({x:1874.1},0).wait(1).to({x:1860.8},0).wait(1).to({x:1847.45},0).wait(1).to({x:1834.1},0).wait(1).to({x:1820.8},0).wait(1).to({x:1807.45},0).wait(1).to({x:1794.1},0).wait(1).to({x:1780.8},0).wait(1).to({x:1767.45},0).wait(1).to({x:1754.1},0).wait(1).to({x:1740.8},0).wait(1).to({x:1727.45},0).wait(1).to({x:1714.1},0).wait(1).to({x:1700.8},0).wait(1).to({x:1687.45},0).wait(1).to({x:1674.1},0).wait(1).to({x:1660.8},0).wait(1).to({x:1647.45},0).wait(1).to({x:1634.1},0).wait(1).to({x:1620.8},0).wait(1).to({x:1607.45},0).wait(1).to({x:1594.1},0).wait(1).to({x:1580.8},0).wait(1).to({x:1567.45},0).wait(1).to({x:1554.1},0).wait(1).to({x:1540.8},0).wait(1).to({x:1527.45},0).wait(1).to({x:1514.1},0).wait(1).to({x:1500.8},0).wait(1).to({x:1487.45},0).wait(1).to({x:1474.1},0).wait(1).to({x:1460.8},0).wait(1).to({x:1447.45},0).wait(1).to({x:1434.1},0).wait(1).to({x:1420.8},0).wait(1).to({x:1407.45},0).wait(1).to({x:1394.1},0).wait(1).to({x:1380.8},0).wait(1).to({x:1367.45},0).wait(1).to({x:1354.1},0).wait(1).to({x:1340.8},0).wait(1).to({x:1327.45},0).wait(1).to({x:1314.1},0).wait(1).to({x:1300.8},0).wait(1).to({x:1287.45},0).wait(1).to({x:1274.1},0).wait(1).to({x:1260.8},0).wait(1).to({x:1247.45},0).wait(1).to({x:1234.1},0).wait(1).to({x:1220.8},0).wait(1).to({x:1207.45},0).wait(1).to({x:1194.1},0).wait(1).to({x:1180.8},0).wait(1).to({x:1167.45},0).wait(1).to({x:1154.1},0).wait(1).to({x:1140.8},0).wait(1).to({x:1127.45},0).wait(1).to({x:1114.1},0).wait(1).to({x:1100.8},0).wait(1).to({x:1087.45},0).wait(1).to({x:1074.1},0).wait(1).to({x:1060.8},0).wait(1).to({x:1047.45},0).wait(1).to({x:1034.1},0).wait(1).to({x:1020.8},0).wait(1).to({x:1007.45},0).wait(1).to({x:994.1},0).wait(1).to({x:980.8},0).wait(1).to({x:967.45},0).wait(1).to({x:954.1},0).wait(1).to({x:940.8},0).wait(1).to({x:927.45},0).wait(1).to({x:914.1},0).wait(1).to({x:900.8},0).wait(1).to({x:887.45},0).wait(1).to({x:874.1},0).wait(1).to({x:860.8},0).wait(1).to({x:847.45},0).wait(1).to({x:834.1},0).wait(1).to({x:820.8},0).wait(1).to({x:807.45},0).wait(1).to({x:794.1},0).wait(1).to({x:780.8},0).wait(1).to({x:767.45},0).wait(1).to({x:754.1},0).wait(1).to({x:740.8},0).wait(1).to({x:727.45},0).wait(1).to({x:714.1},0).wait(1).to({x:700.8},0).wait(1).to({x:687.45},0).wait(1).to({x:674.1},0).wait(1).to({x:660.8},0).wait(1).to({x:647.45},0).wait(1).to({x:634.1},0).wait(1).to({x:620.8},0).wait(1).to({x:607.45},0).wait(1).to({x:594.1},0).wait(1).to({x:580.8},0).wait(1).to({x:567.45},0).wait(1).to({x:554.1},0).wait(1).to({x:540.8},0).wait(1).to({x:527.45},0).wait(1).to({x:514.1},0).wait(1).to({x:500.8},0).wait(1).to({x:487.45},0).wait(1).to({x:474.1},0).wait(1).to({x:460.8},0).wait(1).to({x:447.45},0).wait(1).to({x:434.1},0).wait(1).to({x:420.8},0).wait(1).to({x:407.45},0).wait(1).to({x:394.1},0).wait(1).to({x:380.8},0).wait(1).to({x:367.45},0).wait(1).to({x:354.1},0).wait(1).to({x:340.8},0).wait(1).to({x:327.45},0).wait(1).to({x:314.1},0).wait(1).to({x:300.8},0).wait(1).to({x:287.45},0).wait(1).to({x:274.1},0).wait(1).to({x:260.8},0).wait(1).to({x:247.45},0).wait(1).to({x:234.1},0).wait(1).to({x:220.8},0).wait(1).to({x:207.45},0).wait(1).to({x:194.1},0).wait(1).to({x:180.8},0).wait(1).to({x:167.45},0).wait(1).to({x:154.1},0).wait(1).to({x:140.8},0).wait(1).to({x:127.45},0).wait(1).to({x:114.1},0).wait(1).to({x:100.8},0).wait(1).to({x:87.45},0).wait(1).to({x:74.1},0).wait(1).to({x:60.8},0).wait(1).to({x:47.45},0).wait(1).to({x:34.1},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2481.5,39.5);


(lib.star6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.Symbol13();
	this.instance.setTransform(1820.3,19.7,1,1,0,0,0,20.8,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(262).to({_off:false},0).wait(1).to({x:1811.2},0).wait(1).to({x:1802.1},0).wait(1).to({x:1793},0).wait(1).to({x:1783.9},0).wait(1).to({x:1774.85},0).wait(1).to({x:1765.75},0).wait(1).to({x:1756.65},0).wait(1).to({x:1747.55},0).wait(1).to({x:1738.5},0).wait(1).to({x:1729.4},0).wait(1).to({x:1720.3},0).wait(1).to({x:1711.2},0).wait(1).to({x:1702.15},0).wait(1).to({x:1693.05},0).wait(1).to({x:1683.95},0).wait(1).to({x:1674.85},0).wait(1).to({x:1665.75},0).wait(1).to({x:1656.7},0).wait(1).to({x:1647.6},0).wait(1).to({x:1638.5},0).wait(1).to({x:1629.4},0).wait(1).to({x:1620.35},0).wait(1).to({x:1611.25},0).wait(1).to({x:1602.15},0).wait(1).to({x:1593.05},0).wait(1).to({x:1584},0).wait(1).to({x:1574.9},0).wait(1).to({x:1565.8},0).wait(1).to({x:1556.7},0).wait(1).to({x:1547.6},0).wait(1).to({x:1538.55},0).wait(1).to({x:1529.45},0).wait(1).to({x:1520.35},0).wait(1).to({x:1511.25},0).wait(1).to({x:1502.2},0).wait(1).to({x:1493.1},0).wait(1).to({x:1484},0).wait(1).to({x:1474.9},0).wait(1).to({x:1465.85},0).wait(1).to({x:1456.75},0).wait(1).to({x:1447.65},0).wait(1).to({x:1438.55},0).wait(1).to({x:1429.45},0).wait(1).to({x:1420.4},0).wait(1).to({x:1411.3},0).wait(1).to({x:1402.2},0).wait(1).to({x:1393.1},0).wait(1).to({x:1384.05},0).wait(1).to({x:1374.95},0).wait(1).to({x:1365.85},0).wait(1).to({x:1356.75},0).wait(1).to({x:1347.7},0).wait(1).to({x:1338.6},0).wait(1).to({x:1329.5},0).wait(1).to({x:1320.4},0).wait(1).to({x:1311.35},0).wait(1).to({x:1302.25},0).wait(1).to({x:1293.15},0).wait(1).to({x:1284.05},0).wait(1).to({x:1274.95},0).wait(1).to({x:1265.9},0).wait(1).to({x:1256.8},0).wait(1).to({x:1247.7},0).wait(1).to({x:1238.6},0).wait(1).to({x:1229.55},0).wait(1).to({x:1220.45},0).wait(1).to({x:1211.35},0).wait(1).to({x:1202.25},0).wait(1).to({x:1193.2},0).wait(1).to({x:1184.1},0).wait(1).to({x:1175},0).wait(1).to({x:1165.9},0).wait(1).to({x:1156.8},0).wait(1).to({x:1147.75},0).wait(1).to({x:1138.65},0).wait(1).to({x:1129.55},0).wait(1).to({x:1120.45},0).wait(1).to({x:1111.4},0).wait(1).to({x:1102.3},0).wait(1).to({x:1093.2},0).wait(1).to({x:1084.1},0).wait(1).to({x:1075.05},0).wait(1).to({x:1065.95},0).wait(1).to({x:1056.85},0).wait(1).to({x:1047.75},0).wait(1).to({x:1038.65},0).wait(1).to({x:1029.6},0).wait(1).to({x:1020.5},0).wait(1).to({x:1011.4},0).wait(1).to({x:1002.3},0).wait(1).to({x:993.25},0).wait(1).to({x:984.15},0).wait(1).to({x:975.05},0).wait(1).to({x:965.95},0).wait(1).to({x:956.9},0).wait(1).to({x:947.8},0).wait(1).to({x:938.7},0).wait(1).to({x:929.6},0).wait(1).to({x:920.55},0).wait(1).to({x:911.45},0).wait(1).to({x:902.35},0).wait(1).to({x:893.25},0).wait(1).to({x:884.15},0).wait(1).to({x:875.1},0).wait(1).to({x:866},0).wait(1).to({x:856.9},0).wait(1).to({x:847.8},0).wait(1).to({x:838.75},0).wait(1).to({x:829.65},0).wait(1).to({x:820.55},0).wait(1).to({x:811.45},0).wait(1).to({x:802.4},0).wait(1).to({x:793.3},0).wait(1).to({x:784.2},0).wait(1).to({x:775.1},0).wait(1).to({x:766},0).wait(1).to({x:756.95},0).wait(1).to({x:747.85},0).wait(1).to({x:738.75},0).wait(1).to({x:729.65},0).wait(1).to({x:720.6},0).wait(1).to({x:711.5},0).wait(1).to({x:702.4},0).wait(1).to({x:693.3},0).wait(1).to({x:684.25},0).wait(1).to({x:675.15},0).wait(1).to({x:666.05},0).wait(1).to({x:656.95},0).wait(1).to({x:647.85},0).wait(1).to({x:638.8},0).wait(1).to({x:629.7},0).wait(1).to({x:620.6},0).wait(1).to({x:611.5},0).wait(1).to({x:602.45},0).wait(1).to({x:593.35},0).wait(1).to({x:584.25},0).wait(1).to({x:575.15},0).wait(1).to({x:566.1},0).wait(1).to({x:557},0).wait(1).to({x:547.9},0).wait(1).to({x:538.8},0).wait(1).to({x:529.7},0).wait(1).to({x:520.65},0).wait(1).to({x:511.55},0).wait(1).to({x:502.45},0).wait(1).to({x:493.35},0).wait(1).to({x:484.3},0).wait(1).to({x:475.2},0).wait(1).to({x:466.1},0).wait(1).to({x:457},0).wait(1).to({x:447.95},0).wait(1).to({x:438.85},0).wait(1).to({x:429.75},0).wait(1).to({x:420.65},0).wait(1).to({x:411.6},0).wait(1).to({x:402.5},0).wait(1).to({x:393.4},0).wait(1).to({x:384.3},0).wait(1).to({x:375.2},0).wait(1).to({x:366.15},0).wait(1).to({x:357.05},0).wait(1).to({x:347.95},0).wait(1).to({x:338.85},0).wait(1).to({x:329.8},0).wait(1).to({x:320.7},0).wait(1).to({x:311.6},0).wait(1).to({x:302.5},0).wait(1).to({x:293.45},0).wait(1).to({x:284.35},0).wait(1).to({x:275.25},0).wait(1).to({x:266.15},0).wait(1).to({x:257.05},0).wait(1).to({x:248},0).wait(1).to({x:238.9},0).wait(1).to({x:229.8},0).wait(1).to({x:220.7},0).wait(1).to({x:211.65},0).wait(1).to({x:202.55},0).wait(1).to({x:193.45},0).wait(1).to({x:184.35},0).wait(1).to({x:175.3},0).wait(1).to({x:166.2},0).wait(1).to({x:157.1},0).wait(1).to({x:148},0).wait(1).to({x:138.9},0).wait(1).to({x:129.85},0).wait(1).to({x:120.75},0).wait(1).to({x:111.65},0).wait(1).to({x:102.55},0).wait(1).to({x:93.5},0).wait(1).to({x:84.4},0).wait(1).to({x:75.3},0).wait(1).to({x:66.2},0).wait(1).to({x:57.15},0).wait(1).to({x:48.05},0).wait(1).to({x:38.95},0).wait(1).to({x:29.85},0).wait(1).to({x:20.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1841,39.5);


(lib.star1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.instance = new lib.Symbol13();
	this.instance.setTransform(1576.3,19.7,1,1,0,0,0,20.8,19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360).to({_off:false},0).wait(1).to({x:1563.95},0).wait(1).to({x:1551.6},0).wait(1).to({x:1539.25},0).wait(1).to({x:1526.9},0).wait(1).to({x:1514.55},0).wait(1).to({x:1502.2},0).wait(1).to({x:1489.85},0).wait(1).to({x:1477.5},0).wait(1).to({x:1465.15},0).wait(1).to({x:1452.8},0).wait(1).to({x:1440.5},0).wait(1).to({x:1428.15},0).wait(1).to({x:1415.8},0).wait(1).to({x:1403.45},0).wait(1).to({x:1391.1},0).wait(1).to({x:1378.75},0).wait(1).to({x:1366.4},0).wait(1).to({x:1354.05},0).wait(1).to({x:1341.7},0).wait(1).to({x:1329.35},0).wait(1).to({x:1317.05},0).wait(1).to({x:1304.7},0).wait(1).to({x:1292.35},0).wait(1).to({x:1280},0).wait(1).to({x:1267.65},0).wait(1).to({x:1255.3},0).wait(1).to({x:1242.95},0).wait(1).to({x:1230.6},0).wait(1).to({x:1218.25},0).wait(1).to({x:1205.9},0).wait(1).to({x:1193.55},0).wait(1).to({x:1181.25},0).wait(1).to({x:1168.9},0).wait(1).to({x:1156.55},0).wait(1).to({x:1144.2},0).wait(1).to({x:1131.85},0).wait(1).to({x:1119.5},0).wait(1).to({x:1107.15},0).wait(1).to({x:1094.8},0).wait(1).to({x:1082.45},0).wait(1).to({x:1070.1},0).wait(1).to({x:1057.8},0).wait(1).to({x:1045.45},0).wait(1).to({x:1033.1},0).wait(1).to({x:1020.75},0).wait(1).to({x:1008.4},0).wait(1).to({x:996.05},0).wait(1).to({x:983.7},0).wait(1).to({x:971.35},0).wait(1).to({x:959},0).wait(1).to({x:946.65},0).wait(1).to({x:934.3},0).wait(1).to({x:922},0).wait(1).to({x:909.65},0).wait(1).to({x:897.3},0).wait(1).to({x:884.95},0).wait(1).to({x:872.6},0).wait(1).to({x:860.25},0).wait(1).to({x:847.9},0).wait(1).to({x:835.55},0).wait(1).to({x:823.2},0).wait(1).to({x:810.85},0).wait(1).to({x:798.55},0).wait(1).to({x:786.2},0).wait(1).to({x:773.85},0).wait(1).to({x:761.5},0).wait(1).to({x:749.15},0).wait(1).to({x:736.8},0).wait(1).to({x:724.45},0).wait(1).to({x:712.1},0).wait(1).to({x:699.75},0).wait(1).to({x:687.4},0).wait(1).to({x:675.05},0).wait(1).to({x:662.75},0).wait(1).to({x:650.4},0).wait(1).to({x:638.05},0).wait(1).to({x:625.7},0).wait(1).to({x:613.35},0).wait(1).to({x:601},0).wait(1).to({x:588.65},0).wait(1).to({x:576.3},0).wait(1).to({x:563.95},0).wait(1).to({x:551.6},0).wait(1).to({x:539.3},0).wait(1).to({x:526.95},0).wait(1).to({x:514.6},0).wait(1).to({x:502.25},0).wait(1).to({x:489.9},0).wait(1).to({x:477.55},0).wait(1).to({x:465.2},0).wait(1).to({x:452.85},0).wait(1).to({x:440.5},0).wait(1).to({x:428.15},0).wait(1).to({x:415.8},0).wait(1).to({x:403.5},0).wait(1).to({x:391.15},0).wait(1).to({x:378.8},0).wait(1).to({x:366.45},0).wait(1).to({x:354.1},0).wait(1).to({x:341.75},0).wait(1).to({x:329.4},0).wait(1).to({x:317.05},0).wait(1).to({x:304.7},0).wait(1).to({x:292.35},0).wait(1).to({x:280.05},0).wait(1).to({x:267.7},0).wait(1).to({x:255.35},0).wait(1).to({x:243},0).wait(1).to({x:230.65},0).wait(1).to({x:218.3},0).wait(1).to({x:205.95},0).wait(1).to({x:193.6},0).wait(1).to({x:181.25},0).wait(1).to({x:168.9},0).wait(1).to({x:156.55},0).wait(1).to({x:144.25},0).wait(1).to({x:131.9},0).wait(1).to({x:119.55},0).wait(1).to({x:107.2},0).wait(1).to({x:94.85},0).wait(1).to({x:82.5},0).wait(1).to({x:70.15},0).wait(1).to({x:57.8},0).wait(1).to({x:45.45},0).wait(1).to({x:33.1},0).wait(1).to({x:20.8},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1597,39.5);


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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-154.15,-65.75,0.5,0.5);

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
	this.instance = new lib.CachedBmp_7();
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


(lib.endfire = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(35.5,23.5,0.5184,0.4662,0,0,0,68.5,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endfire, new cjs.Rectangle(0,0,70.8,47.1), null);


(lib.thestars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// star1
	this.instance = new lib.star1();
	this.instance.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,632.8,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// star6
	this.instance_1 = new lib.star6();
	this.instance_1.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,663.3,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// star7
	this.instance_2 = new lib.star7();
	this.instance_2.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,663.7,22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// star8
	this.instance_3 = new lib.star8();
	this.instance_3.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,483.6,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// star9
	this.instance_4 = new lib.star9();
	this.instance_4.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,717.2,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// star10
	this.instance_5 = new lib.star10();
	this.instance_5.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,591.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// star11
	this.instance_6 = new lib.star11();
	this.instance_6.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,689.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// star12
	this.instance_7 = new lib.star12();
	this.instance_7.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,375.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// star13
	this.instance_8 = new lib.star13();
	this.instance_8.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,554.9,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// star14
	this.instance_9 = new lib.star14();
	this.instance_9.setTransform(-2147483.648,-2147483.648,1,1,0,0,0,717,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thestars, new cjs.Rectangle(0,0,0,0), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol2();
	this.instance.setTransform(50.05,22.45,0.723,0.3094,0,177.6424,0,68.3,50.1);

	this.instance_1 = new lib.endfire();
	this.instance_1.setTransform(56.3,23.7,1,1,0,0,0,35.6,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,100,47.1), null);


(lib.startspace = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.3411,0.3411);

	this.end = new lib.Symbol4();
	this.end.name = "end";
	this.end.setTransform(60.85,340.7,1,1,-90,0,0,50.2,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.end},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startspace, new cjs.Rectangle(0,0,131.3,390.9), null);


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.tttt.font="bold 60px Alef";
		this.b1.font="bold 25px Alef";
		this.b2.font="bold 25px Alef";
		this.b3.font="bold 25px Alef";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.b1 = new cjs.Text("אותיות בעברית", "normal 700 25px 'Alef'", "#FFFFFF");
	this.b1.name = "b1";
	this.b1.textAlign = "center";
	this.b1.lineHeight = 36;
	this.b1.lineWidth = 347;
	this.b1.parent = this;
	this.b1.setTransform(252.8,47.9);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.b1);
	}

	this.heb = new lib.btn();
	this.heb.name = "heb";
	this.heb.setTransform(252.65,66.3,1.5496,1.3653,0,0,0,61.2,27.7);

	this.b3 = new cjs.Text("אותיות קטנות באנגלית", "normal 700 25px 'Alef'", "#FFFFFF");
	this.b3.name = "b3";
	this.b3.textAlign = "center";
	this.b3.lineHeight = 36;
	this.b3.lineWidth = 240;
	this.b3.parent = this;
	this.b3.setTransform(-306.25,32.45);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.b3);
	}

	this.small = new lib.btn();
	this.small.name = "small";
	this.small.setTransform(-306.4,67.85,1.5496,1.3101,0,0,0,61.2,27.7);

	this.b2 = new cjs.Text("אותיות גדולות באנגלית", "normal 700 25px 'Alef'", "#FFFFFF");
	this.b2.name = "b2";
	this.b2.textAlign = "center";
	this.b2.lineHeight = 36;
	this.b2.lineWidth = 247;
	this.b2.parent = this;
	this.b2.setTransform(-27.25,32.45);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.b2);
	}

	this.big = new lib.btn();
	this.big.name = "big";
	this.big.setTransform(-27.35,67.1,1.5497,1.3373,0,0,0,61.2,27.7);

	this.instance = new lib.startspace();
	this.instance.setTransform(-53.4,254.1,0.9408,0.9408,90,0,0,65.7,195.4);

	this.tttt = new cjs.Text("איזה משחק תרצו לשחק?", "normal 700 60px 'Alef'", "#FFFFFF");
	this.tttt.name = "tttt";
	this.tttt.textAlign = "center";
	this.tttt.lineHeight = 83;
	this.tttt.lineWidth = 798;
	this.tttt.parent = this;
	this.tttt.setTransform(0,-71.45);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.tttt);
	}

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-510.95,-267.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.tttt},{t:this.instance},{t:this.big},{t:this.b2},{t:this.small},{t:this.b3},{t:this.heb},{t:this.b1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startf, new cjs.Rectangle(-510.9,-267.6,1022,583.5), null);


(lib.startani = function(mode,startPosition,loop,reversed) {
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
	this.frame_58 = function() {
		stage.removeChild(stage.getChildByName("startani"));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(2));

	// Layer_4
	this.instance = new lib.startspace();
	this.instance.setTransform(96.3,951.1,1.4658,1.4658,0,0,0,65.7,195.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1.4659,scaleY:1.4659,y:962.9},0).wait(1).to({regY:195.4,scaleX:1.4512,scaleY:1.4512,y:947.6},0).wait(1).to({scaleX:1.4366,scaleY:1.4366,y:932.45},0).wait(1).to({scaleX:1.422,scaleY:1.422,y:917.3},0).wait(1).to({scaleX:1.4074,scaleY:1.4074,x:96.25,y:902.15},0).wait(1).to({scaleX:1.3928,scaleY:1.3928,x:96.3,y:887},0).wait(1).to({scaleX:1.3781,scaleY:1.3781,y:871.85},0).wait(1).to({scaleX:1.3635,scaleY:1.3635,y:856.7},0).wait(1).to({scaleX:1.3489,scaleY:1.3489,x:96.25,y:841.55},0).wait(1).to({scaleX:1.3343,scaleY:1.3343,y:826.35},0).wait(1).to({scaleX:1.3197,scaleY:1.3197,x:96.3,y:811.2},0).wait(1).to({scaleX:1.3051,scaleY:1.3051,y:796.05},0).wait(1).to({scaleX:1.2904,scaleY:1.2904,y:780.9},0).wait(1).to({scaleX:1.2758,scaleY:1.2758,x:96.25,y:765.75},0).wait(1).to({scaleX:1.2612,scaleY:1.2612,y:750.6},0).wait(1).to({scaleX:1.2466,scaleY:1.2466,x:96.3,y:735.45},0).wait(1).to({scaleX:1.232,scaleY:1.232,y:720.3},0).wait(1).to({scaleX:1.2174,scaleY:1.2174,y:705.1},0).wait(1).to({scaleX:1.2027,scaleY:1.2027,x:96.25,y:689.95},0).wait(1).to({scaleX:1.1881,scaleY:1.1881,y:674.8},0).wait(1).to({scaleX:1.1735,scaleY:1.1735,x:96.3,y:659.65},0).wait(1).to({scaleX:1.1589,scaleY:1.1589,y:644.5},0).wait(1).to({scaleX:1.1443,scaleY:1.1443,y:629.35},0).wait(1).to({scaleX:1.1297,scaleY:1.1297,x:96.25,y:614.25},0).wait(1).to({scaleX:1.115,scaleY:1.115,y:599.1},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:96.3,y:583.9},0).wait(1).to({scaleX:1.0858,scaleY:1.0858,y:568.75},0).wait(1).to({scaleX:1.0712,scaleY:1.0712,y:553.6},0).wait(1).to({scaleX:1.0566,scaleY:1.0566,x:96.25,y:538.45},0).wait(1).to({scaleX:1.042,scaleY:1.042,y:523.3},0).wait(1).to({scaleX:1.0273,scaleY:1.0273,x:96.3,y:508.15},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,y:493},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:96.25,y:477.85},0).wait(1).to({scaleX:0.9835,scaleY:0.9835,y:462.65},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,x:96.3,y:447.5},0).wait(1).to({scaleX:0.9543,scaleY:0.9543,y:432.35},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,y:417.2},0).wait(1).to({scaleX:0.925,scaleY:0.925,x:96.25,y:402.05},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,y:386.9},0).wait(1).to({scaleX:0.8958,scaleY:0.8958,x:96.3,y:371.75},0).wait(1).to({scaleX:0.8812,scaleY:0.8812,y:356.6},0).wait(1).to({scaleX:0.8666,scaleY:0.8666,y:341.4},0).wait(1).to({scaleX:0.8519,scaleY:0.8519,x:96.25,y:326.25},0).wait(1).to({scaleX:0.8373,scaleY:0.8373,y:311.1},0).wait(1).to({scaleX:0.8227,scaleY:0.8227,x:96.3,y:295.95},0).wait(1).to({scaleX:0.8081,scaleY:0.8081,y:280.8},0).wait(1).to({scaleX:0.7935,scaleY:0.7935,y:265.7},0).wait(1).to({scaleX:0.7788,scaleY:0.7788,x:96.25,y:250.55},0).wait(1).to({scaleX:0.7642,scaleY:0.7642,y:235.4},0).wait(1).to({scaleX:0.7496,scaleY:0.7496,x:96.3,y:220.2},0).wait(1).to({scaleX:0.735,scaleY:0.735,y:205.05},0).wait(1).to({scaleX:0.7204,scaleY:0.7204,y:189.9},0).wait(1).to({scaleX:0.7058,scaleY:0.7058,x:96.25,y:174.75},0).wait(1).to({scaleX:0.6911,scaleY:0.6911,y:159.6},0).wait(1).to({scaleX:0.6765,scaleY:0.6765,x:96.3,y:144.45},0).wait(1).to({scaleX:0.6619,scaleY:0.6619,y:129.35},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.5,1249.3);


(lib.endspace = function(mode,startPosition,loop,reversed) {
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
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(82.55,-0.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(82.55,-0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},34).wait(1));

	// Symbol_4
	this.end = new lib.Symbol4();
	this.end.name = "end";
	this.end.setTransform(50.2,65.2,1,1,0,0,0,50.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.end).wait(1).to({scaleX:0.9596,x:52.5},0).wait(1).to({regX:50.3,regY:23.6,scaleX:0.9375,scaleY:0.9908,x:53.85,y:65.1},0).wait(1).to({scaleX:0.9155,scaleY:0.9816,x:55.1,y:65.05},0).wait(1).to({scaleX:0.8934,scaleY:0.9724,x:56.4,y:65.1},0).wait(1).to({scaleX:0.8714,scaleY:0.9632,x:57.65},0).wait(1).to({scaleX:0.8493,scaleY:0.954,x:58.85,y:65.05},0).wait(1).to({scaleX:0.8273,scaleY:0.9448,x:60.15,y:65.1},0).wait(1).to({scaleX:0.8052,scaleY:0.9356,x:61.4},0).wait(1).to({scaleX:0.7832,scaleY:0.9264,x:62.65,y:65.05},0).wait(1).to({scaleX:0.7611,scaleY:0.9172,x:63.95,y:65.1},0).wait(1).to({scaleX:0.739,scaleY:0.9081,x:65.15},0).wait(1).to({scaleX:0.717,scaleY:0.8989,x:66.45,y:65.05},0).wait(1).to({scaleX:0.6949,scaleY:0.8897,x:67.7,y:65.1},0).wait(1).to({scaleX:0.6729,scaleY:0.8805,x:68.95},0).wait(1).to({scaleX:0.6508,scaleY:0.8713,x:70.25,y:65.05},0).wait(1).to({scaleX:0.6288,scaleY:0.8621,x:71.5,y:65.1},0).wait(1).to({scaleX:0.6067,scaleY:0.8529,x:72.7},0).wait(1).to({scaleX:0.5847,scaleY:0.8437,x:74,y:65.05},0).wait(1).to({scaleX:0.5626,scaleY:0.8345,x:75.25,y:65.1},0).wait(1).to({scaleX:0.5406,scaleY:0.8253,x:76.5},0).wait(1).to({scaleX:0.5185,scaleY:0.8161,x:77.8,y:65.05},0).wait(1).to({scaleX:0.4965,scaleY:0.8069,x:79,y:65.1},0).wait(1).to({scaleX:0.4744,scaleY:0.7977,x:80.3},0).wait(1).to({scaleX:0.4524,scaleY:0.7885,x:81.55},0).wait(1).to({scaleX:0.4303,scaleY:0.7793,x:82.8},0).wait(1).to({scaleX:0.4083,scaleY:0.7701,x:84.1,y:65.05},0).wait(1).to({scaleX:0.3862,scaleY:0.7609,x:85.35,y:65.1},0).wait(1).to({scaleX:0.3642,scaleY:0.7517,x:86.55},0).wait(1).to({scaleX:0.3421,scaleY:0.7426,x:87.85,y:65.05},0).wait(1).to({scaleX:0.3201,scaleY:0.7334,x:89.1,y:65.1},0).wait(1).to({scaleX:0.298,scaleY:0.7242,x:90.4},0).wait(1).to({scaleX:0.2759,scaleY:0.715,x:91.65,y:65.05},0).wait(1).to({scaleX:0.2539,scaleY:0.7058,x:92.85,y:65.1},0).wait(1).to({scaleX:0.2318,scaleY:0.6966,x:94.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,391.1,131.5);


(lib.endani = function(mode,startPosition,loop,reversed) {
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
		this.space.gotoAndPlay(0);
	}
	this.frame_99 = function() {
		this.space.gotoAndPlay(1);
	}
	this.frame_129 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(30).call(this.frame_129).wait(1));

	// Layer_1
	this.space = new lib.endspace();
	this.space.name = "space";
	this.space.setTransform(-12.55,566.7,0.7124,0.7124,-14.9977);

	this.timeline.addTween(cjs.Tween.get(this.space).wait(1).to({regX:195.5,regY:65.6,rotation:-15.3868,x:159.75,y:549.45},0).wait(1).to({rotation:-15.774,x:182.2,y:527.5},0).wait(1).to({rotation:-16.1611,x:202.7,y:508.35},0).wait(1).to({rotation:-16.5473,x:221.8,y:491.15},0).wait(1).to({rotation:-16.933,x:239.85,y:475.5},0).wait(1).to({rotation:-17.3184,x:257.15,y:461},0).wait(1).to({rotation:-17.7031,x:273.85,y:447.5},0).wait(1).to({rotation:-18.0871,x:289.95,y:434.85},0).wait(1).to({rotation:-18.4708,x:305.7,y:423},0).wait(1).to({rotation:-18.8537,x:321.1,y:411.75},0).wait(1).to({rotation:-19.2363,x:336.25,y:401},0).wait(1).to({rotation:-19.6182,x:351.15,y:390.75},0).wait(1).to({rotation:-19.9994,x:365.85,y:380.95},0).wait(1).to({rotation:-20.3805,x:380.35,y:371.6},0).wait(1).to({rotation:-20.7607,x:394.8,y:362.65},0).wait(1).to({rotation:-21.1404,x:409.1,y:354},0).wait(1).to({rotation:-21.5195,x:423.35,y:345.7},0).wait(1).to({rotation:-21.8982,x:437.6,y:337.65},0).wait(1).to({rotation:-22.2765,x:451.7,y:329.9},0).wait(1).to({rotation:-22.6538,x:465.85,y:322.45},0).wait(1).to({rotation:-23.0311,x:480,y:315.2},0).wait(1).to({rotation:-23.4074,x:494.2,y:308.2},0).wait(1).to({rotation:-23.7833,x:508.45,y:301.45},0).wait(1).to({rotation:-24.1588,x:522.8,y:294.95},0).wait(1).to({rotation:-24.5336,x:537.1,y:288.55},0).wait(1).to({rotation:-24.9077,x:551.6,y:282.5},0).wait(1).to({rotation:-25.2815,x:566.2,y:276.55},0).wait(1).to({rotation:-25.6549,x:581,y:270.85},0).wait(1).to({rotation:-26.0276,x:595.9,y:265.3},0).wait(1).to({rotation:-26.3996,x:611,y:259.9},0).wait(1).to({rotation:-26.7713,x:626.3,y:254.7},0).wait(1).to({rotation:-27.1422,x:641.85,y:249.75},0).wait(1).to({rotation:-27.5124,x:657.7,y:244.95},0).wait(1).to({rotation:-27.8823,x:673.8,y:240.3},0).wait(1).to({rotation:-28.2518,x:690.35,y:235.8},0).wait(1).to({rotation:-28.6207,x:707.25,y:231.6},0).wait(1).to({rotation:-28.9888,x:724.6,y:227.55},0).wait(1).to({rotation:-29.3565,x:742.4,y:223.6},0).wait(1).to({rotation:-29.7236,x:760.8,y:219.95},0).wait(1).to({rotation:-30.0903,x:780,y:216.45},0).wait(1).to({rotation:-30.4563,x:799.9,y:213.2},0).wait(1).to({rotation:-30.822,x:820.8,y:210.2},0).wait(1).to({rotation:-31.1869,x:842.8,y:207.5},0).wait(1).to({rotation:-31.5515,x:866.25,y:205},0).wait(1).to({rotation:-31.9154,x:891.45,y:202.85},0).wait(1).to({rotation:-32.2785,x:919.05,y:201.2},0).wait(1).to({rotation:-32.6414,x:950.05,y:200.2},0).wait(1).to({rotation:-33.0589,x:985.6,y:199.75},0).wait(1).to({rotation:-37.7896,x:983.15,y:188.45},0).wait(1).to({rotation:-42.5158,x:979.85,y:177.6},0).wait(1).to({rotation:-47.2281,x:975.65,y:167.15},0).wait(1).to({rotation:-51.9357,x:970.6,y:157.25},0).wait(1).to({rotation:-56.6388,x:964.75,y:147.9},0).wait(1).to({rotation:-61.3326,x:958.05,y:139.25},0).wait(1).to({rotation:-66.0218,x:950.75,y:131.35},0).wait(1).to({rotation:-70.6972,x:942.8,y:124.15},0).wait(1).to({rotation:-75.3725,x:934.2,y:117.75},0).wait(1).to({rotation:-80.0387,x:925.2,y:112.2},0).wait(1).to({rotation:-84.6956,x:915.7,y:107.55},0).wait(1).to({rotation:-89.3478,x:905.8,y:103.9},0).wait(1).to({rotation:-92.9986,x:898,y:101.7},0).wait(1).to({x:899.25,y:102.4},0).wait(1).to({x:900.45,y:103.15},0).wait(1).to({x:901.7,y:103.9},0).wait(1).to({x:902.95,y:104.7},0).wait(1).to({x:904.2,y:105.5},0).wait(1).to({x:905.45,y:106.35},0).wait(1).to({x:906.7,y:107.2},0).wait(1).to({x:907.95,y:108.1},0).wait(1).to({x:909.25,y:109},0).wait(1).to({x:910.55,y:109.95},0).wait(1).to({x:911.8,y:110.95},0).wait(1).to({x:913.1,y:111.95},0).wait(1).to({x:914.45,y:113},0).wait(1).to({x:915.75,y:114.1},0).wait(1).to({x:917.05,y:115.25},0).wait(1).to({x:918.4,y:116.4},0).wait(1).to({x:919.75,y:117.6},0).wait(1).to({x:921.1,y:118.85},0).wait(1).to({x:922.45,y:120.15},0).wait(1).to({x:923.85,y:121.45},0).wait(1).to({x:925.25,y:122.85},0).wait(1).to({x:926.65,y:124.3},0).wait(1).to({x:928.05,y:125.75},0).wait(1).to({x:929.5,y:127.3},0).wait(1).to({x:930.95,y:128.9},0).wait(1).to({x:932.4,y:130.55},0).wait(1).to({x:933.9,y:132.3},0).wait(1).to({x:935.4,y:134.1},0).wait(1).to({x:936.95,y:136},0).wait(1).to({x:938.5,y:137.95},0).wait(1).to({x:940.1,y:140.05},0).wait(1).to({x:941.7,y:142.2},0).wait(1).to({x:943.35,y:144.5},0).wait(1).to({x:945,y:146.9},0).wait(1).to({x:946.7,y:149.45},0).wait(1).to({x:948.5,y:152.2},0).wait(1).to({x:950.3,y:155.1},0).wait(1).to({x:952.2,y:158.2},0).wait(1).to({x:954.15,y:161.6},0).wait(1).to({x:956.2,y:165.25},0).wait(1).to({x:958.35,y:169.35},0).wait(1).to({x:960.65,y:173.95},0).wait(1).to({x:963.2,y:179.25},0).wait(1).to({x:966,y:185.65},0).wait(1).to({x:969.45,y:194},0).wait(1).to({x:974.75,y:208.7},0).wait(1).to({x:979.9,y:223.9},0).wait(1).to({x:982.35,y:230.3},0).wait(1).to({x:984.85,y:236.75},0).wait(1).to({x:987.35,y:243.35},0).wait(1).to({x:989.9,y:250.05},0).wait(1).to({x:992.45,y:256.9},0).wait(1).to({x:995,y:263.85},0).wait(1).to({x:997.6,y:270.95},0).wait(1).to({x:1000.25,y:278.15},0).wait(1).to({x:1002.95,y:285.55},0).wait(1).to({x:1005.65,y:293.1},0).wait(1).to({x:1008.35,y:300.85},0).wait(1).to({x:1011.15,y:308.8},0).wait(1).to({x:1014,y:317},0).wait(1).to({x:1016.95,y:325.55},0).wait(1).to({x:1019.9,y:334.4},0).wait(1).to({x:1023,y:343.75},0).wait(1).to({x:1026.25,y:353.75},0).wait(1).to({x:1029.65,y:364.6},0).wait(1).to({x:1033.35,y:376.75},0).wait(1).to({x:1037.65,y:391.5},0).wait(1).to({x:1045.4,y:422.05},0).wait(1));

	// Layer_3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(1812.8,123,1,1,0,0,0,123,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:122.9,scaleX:1.0411,scaleY:1.0411,x:1801.25,y:134.25},0).wait(1).to({scaleX:1.0821,scaleY:1.0821,x:1789.8,y:145.55},0).wait(1).to({scaleX:1.1232,scaleY:1.1232,x:1778.4,y:156.85},0).wait(1).to({scaleX:1.1642,scaleY:1.1642,x:1766.95,y:168.15},0).wait(1).to({scaleX:1.2053,scaleY:1.2053,x:1755.5,y:179.45},0).wait(1).to({scaleX:1.2463,scaleY:1.2463,x:1744.05,y:190.75},0).wait(1).to({scaleX:1.2874,scaleY:1.2874,x:1732.6,y:202.05},0).wait(1).to({scaleX:1.3284,scaleY:1.3284,x:1721.2,y:213.35},0).wait(1).to({scaleX:1.3695,scaleY:1.3695,x:1709.75,y:224.65},0).wait(1).to({scaleX:1.4106,scaleY:1.4106,x:1698.3,y:235.95},0).wait(1).to({scaleX:1.4516,scaleY:1.4516,x:1686.9,y:247.2},0).wait(1).to({scaleX:1.4927,scaleY:1.4927,x:1675.45,y:258.5},0).wait(1).to({scaleX:1.5337,scaleY:1.5337,x:1664.05,y:269.8},0).wait(1).to({scaleX:1.5748,scaleY:1.5748,x:1652.6,y:281.1},0).wait(1).to({scaleX:1.6158,scaleY:1.6158,x:1641.15,y:292.4},0).wait(1).to({scaleX:1.6569,scaleY:1.6569,x:1629.75,y:303.7},0).wait(1).to({scaleX:1.698,scaleY:1.698,x:1618.3,y:315},0).wait(1).to({scaleX:1.739,scaleY:1.739,x:1606.85,y:326.3},0).wait(1).to({scaleX:1.7801,scaleY:1.7801,x:1595.4,y:337.6},0).wait(1).to({scaleX:1.8211,scaleY:1.8211,x:1583.95,y:348.9},0).wait(1).to({scaleX:1.8622,scaleY:1.8622,x:1572.55,y:360.15},0).wait(1).to({scaleX:1.9032,scaleY:1.9032,x:1561.1,y:371.45},0).wait(1).to({scaleX:1.9443,scaleY:1.9443,x:1549.7,y:382.75},0).wait(1).to({scaleX:1.9853,scaleY:1.9853,x:1538.25,y:394.05},0).wait(1).to({scaleX:2.0264,scaleY:2.0264,x:1526.8,y:405.35},0).wait(1).to({scaleX:2.0675,scaleY:2.0675,x:1515.4,y:416.65},0).wait(1).to({scaleX:2.1085,scaleY:2.1085,x:1503.95,y:427.95},0).wait(1).to({scaleX:2.1496,scaleY:2.1496,x:1492.55,y:439.25},0).wait(1).to({scaleX:2.1906,scaleY:2.1906,x:1481.1,y:450.55},0).wait(1).to({scaleX:2.2317,scaleY:2.2317,x:1469.6,y:461.85},0).wait(1).to({scaleX:2.2727,scaleY:2.2727,x:1458.2,y:473.15},0).wait(1).to({scaleX:2.3138,scaleY:2.3138,x:1446.75,y:484.4},0).wait(1).to({scaleX:2.3548,scaleY:2.3548,x:1435.35,y:495.7},0).wait(1).to({scaleX:2.3959,scaleY:2.3959,x:1423.9,y:507},0).wait(1).to({scaleX:2.437,scaleY:2.437,x:1412.45,y:518.3},0).wait(1).to({scaleX:2.478,scaleY:2.478,x:1401.05,y:529.6},0).wait(1).to({scaleX:2.5191,scaleY:2.5191,x:1389.6,y:540.9},0).wait(1).to({scaleX:2.5601,scaleY:2.5601,x:1378.2,y:552.2},0).wait(1).to({scaleX:2.6012,scaleY:2.6012,x:1366.75,y:563.5},0).wait(1).to({scaleX:2.6422,scaleY:2.6422,x:1355.3,y:574.8},0).wait(1).to({scaleX:2.6833,scaleY:2.6833,x:1343.9,y:586.1},0).wait(1).to({scaleX:2.7244,scaleY:2.7244,x:1332.4,y:597.35},0).wait(1).to({scaleX:2.7654,scaleY:2.7654,x:1321,y:608.65},0).wait(1).to({scaleX:2.8065,scaleY:2.8065,x:1309.55,y:619.95},0).wait(1).to({scaleX:2.8475,scaleY:2.8475,x:1298.1,y:631.25},0).wait(1).to({scaleX:2.8886,scaleY:2.8886,x:1286.7,y:642.55},0).wait(1).to({scaleX:2.9296,scaleY:2.9296,x:1275.25,y:653.85},0).wait(1).to({scaleX:2.9707,scaleY:2.9707,x:1263.85,y:665.15},0).wait(1).to({scaleX:3.0117,scaleY:3.0117,x:1252.4,y:676.45},0).wait(1).to({scaleX:3.0528,scaleY:3.0528,x:1240.95,y:687.75},0).wait(1).to({scaleX:3.0939,scaleY:3.0939,x:1229.55,y:699.05},0).wait(1).to({scaleX:3.1349,scaleY:3.1349,x:1218.1,y:710.35},0).wait(1).to({scaleX:3.176,scaleY:3.176,x:1206.7,y:721.6},0).wait(1).to({scaleX:3.217,scaleY:3.217,x:1195.2,y:732.9},0).wait(1).to({scaleX:3.2581,scaleY:3.2581,x:1183.75,y:744.2},0).wait(1).to({scaleX:3.2991,scaleY:3.2991,x:1172.35,y:755.5},0).wait(1).to({scaleX:3.3402,scaleY:3.3402,x:1160.9,y:766.8},0).wait(1).to({scaleX:3.3813,scaleY:3.3813,x:1149.5,y:778.1},0).wait(1).to({scaleX:3.4223,scaleY:3.4223,x:1138.05,y:789.4},0).wait(1).to({scaleX:3.4634,scaleY:3.4634,x:1126.6,y:800.7},0).wait(1).to({scaleX:3.5044,scaleY:3.5044,x:1115.2,y:812},0).wait(1).to({scaleX:3.5455,scaleY:3.5455,x:1103.75,y:823.3},0).wait(1).to({scaleX:3.5865,scaleY:3.5865,x:1092.35,y:834.55},0).wait(1).to({scaleX:3.6276,scaleY:3.6276,x:1080.9,y:845.85},0).wait(1).to({scaleX:3.6686,scaleY:3.6686,x:1069.45,y:857.15},0).wait(1).to({scaleX:3.7097,scaleY:3.7097,x:1058,y:868.45},0).wait(1).to({scaleX:3.7508,scaleY:3.7508,x:1046.55,y:879.75},0).wait(1).to({scaleX:3.7918,scaleY:3.7918,x:1035.15,y:891.05},0).wait(1).to({scaleX:3.8329,scaleY:3.8329,x:1023.7,y:902.35},0).wait(1).to({scaleX:3.8739,scaleY:3.8739,x:1012.25,y:913.65},0).wait(1).to({scaleX:3.915,scaleY:3.915,x:1000.85,y:924.95},0).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-39.8,1939.3999999999999,1446.3999999999999);


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

	// Layer_2
	this.instance = new lib.thestars();
	this.instance.setTransform(-115200,-115200,1,1,0,0,0,-115200,-115200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(381));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
		stage.enableMouseOver(24); //תמיכה במעברי עכבר
		
		
		
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
		var speed = 7;
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
		var startani;
		var ins;
		
		var startframe
		mystart();
		function mystart() {
			stage.removeAllChildren();
			startframe = new lib.startf()
			startframe.name = "startframe"
			startframe.x = 640
				startframe.y = 360
			stage.addChild(startframe)
		startframe.heb.addEventListener("click",heb);
		startframe.small.addEventListener("click",engS);
		startframe.big.addEventListener("click",engB);
		
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
		
			stage.removeChild(startframe);
		
			startani = new lib.startani();
			startani.name = "startani";
			startani.x = 545;
			startani.y = -400;
			stage.addChild(startani);
		
			startani.addEventListener("removed", thegame)
		
		}
		
		function thegame() {
			//רקע
			var bg = new lib.bg();
			bg.x=640
			bg.y=360
			//bg.alpha = 0.3;
			stage.addChildAt(bg, 0);	
			
			
			letter = 0;
			speed = 7;
			shoot = false;
			level = 1;
			score = 0;
			mytime = 0;
		
			trys = 0;
			
			
			ins = new lib.ins();
			ins.x = 640
			ins.y = 420
			ins.alpha = 0
			stage.addChild(ins);
		
			createjs.Tween.get(ins).wait(500).to({
				alpha: 1
			}, 500);
		
		
			spaceship = new lib.ship();
			spaceship.x = -235;
			spaceship.y = 200;
			stage.addChild(spaceship);
			createjs.Tween.get(spaceship).wait(300).to({
				x: 235
			}, 1000);
			scoreboard = new lib.scoreb();
			scoreboard.y = 500;
			scoreboard.x = 50;
			scoreboard.alpha = 0;
			stage.addChild(scoreboard);
		
			createjs.Tween.get(scoreboard).wait(1000).to({
				alpha: 1
			}, 500);
			//מקלדת
		
			myinterval = setInterval(again, 1000);
		
			keyboard = new lib.keyboard();
			keyboard.x = 640;
			keyboard.y = 550;
			keyboard.alpha = 0
			stage.addChild(keyboard);
			createjs.Tween.get(keyboard).wait(500).to({
				alpha: 1
			}, 1000);
		
		
		
			//חיים
			lives = new lib.lives();
			lives.x = 1080;
			lives.y = 70;
			lives.alpha = 0
			stage.addChild(lives);
		
			createjs.Tween.get(lives).wait(700).to({
				alpha: 1
			}, 1000).wait(500).call(question);
		
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
					shoot = false;
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
			if (mytime % 20 == 0) {
				level += 1;
				speed += 1;
			}
		}
		function end() {
			stage.removeAllChildren()
			var endani = new lib.endani();
			endani.x = -365
			endani.y = 100
		endani.name = "endani"
			stage.addChild(endani)
		
			if (score > highscore)
				highscore = score;
			var theend = new lib.end()
			theend.myscore.text = "ניקוד: " + score;
			theend.myhigescore.text = "שיא: " + highscore;
			theend.x = 640;
			theend.y = 360;
			theend.alpha = 0;
			theend.name = "end";
			stage.addChild(theend)
			createjs.Tween.get(theend).wait(4500).to({
				alpha: 1
			}, 1000);
			theend.retry.addEventListener("click", restart);
			theend.newgame.addEventListener("click", mystart);
		
		}
		function restart() {
			stage.removeChild(stage.getChildByName("end"));
				stage.removeChild(stage.getChildByName("endani"));
		
			thegame();
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
	color: "#0E1030",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/typinggame_atlas_1.png?1619070625262", id:"typinggame_atlas_1"}
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