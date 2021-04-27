(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.lev.font="bold 24px Alef"
		this.sco.font="bold 24px Alef"
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.sco = new cjs.Text("ניקוד:", "normal 700 24px 'Alef'", "#FFFFFF");
	this.sco.name = "sco";
	this.sco.textAlign = "right";
	this.sco.lineHeight = 34;
	this.sco.lineWidth = 84;
	this.sco.parent = this;
	this.sco.setTransform(102.3,-29.95);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.sco);
	}

	this.lev = new cjs.Text("שלב:", "normal 700 24px 'Alef'", "#FFFFFF");
	this.lev.name = "lev";
	this.lev.textAlign = "right";
	this.lev.lineHeight = 34;
	this.lev.lineWidth = 70;
	this.lev.parent = this;
	this.lev.setTransform(102.3,-67.05);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.lev);
	}

	this.scorel = new cjs.Text("", "normal 700 24px 'Alef'", "#FFFFFF");
	this.scorel.name = "scorel";
	this.scorel.textAlign = "right";
	this.scorel.lineHeight = 34;
	this.scorel.lineWidth = 34;
	this.scorel.parent = this;
	this.scorel.setTransform(33.05,-67.05);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.scorel);
	}

	this.scoreb = new cjs.Text("", "normal 700 24px 'Alef'", "#FFFFFF");
	this.scoreb.name = "scoreb";
	this.scoreb.textAlign = "right";
	this.scoreb.lineHeight = 34;
	this.scoreb.lineWidth = 56;
	this.scoreb.parent = this;
	this.scoreb.setTransform(33.05,-29.95);
	if(!lib.properties.webfonts['Alef']) {
		lib.webFontTxtInst['Alef'] = lib.webFontTxtInst['Alef'] || [];
		lib.webFontTxtInst['Alef'].push(this.scoreb);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreb},{t:this.scorel},{t:this.lev},{t:this.sco}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scoreb, new cjs.Rectangle(-25,-69,129.3,78.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DDB16A").s().p("AAxBCQgNgFgLgJQgngdgUgRQgigeAEgiQAIgMAXADQArAMAeAmQAhAngJAqQgBAFgEAAQgEAAgGgDg");
	this.shape.setTransform(0.3104,-1.4902,0.352,0.3765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DDB16A").s().p("AAwBCQgMgFgLgJQgogdgTgRQgjgeAFgiQAIgMAWADQArAMAfAmQAhAngKAqQAAAEgFAAQgDAAgHgCg");
	this.shape_1.setTransform(-7.8876,-23.5555,0.352,0.3765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDB16A").s().p("AAwBCQgMgFgLgJQgngcgUgSQgigeAEghQAIgMAXACQArAMAeAmQAhAogJApQgBAEgFAAQgEAAgGgCg");
	this.shape_2.setTransform(-12.6599,7.3514,0.352,0.3765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EBCA7D").s().p("AAwCGQg1gXg0g4Qg1g3gTg4QgUg3AXgXQAZgXA2AYQA1AXA0A4QA0A3AUA4QAUA3gXAXQgMALgUAAQgTAAgcgMg");
	this.shape_3.setTransform(0.29,21.3525,0.3519,0.3765);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#543010").s().p("AA1CVQg7gag6g+Qg6g9gWg+QgWg+AbgZQAagZA9AaQA7AaA6A+QA6A9AWA+QAWA+gbAZQgNAMgVAAQgWAAgfgNg");
	this.shape_4.setTransform(-0.0355,21.7736,0.3519,0.3765);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DDB16A").s().p("AAwBCQgNgFgKgJQgogcgTgSQgjgeAFgiQAIgLAWACQArAMAfAmQAhAogJApQgBAEgFAAQgEAAgGgCg");
	this.shape_5.setTransform(18.5339,13.1306,0.352,0.3765);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDB16A").s().p("AAwCGQg1gXg0g4Qg1g3gTg3QgUg4AYgXQAYgWA2AXQA1AXA1A4QA0A3AUA4QAUA3gZAXQgMALgTAAQgUAAgbgMg");
	this.shape_6.setTransform(-20.3181,19.6723,0.3519,0.3765);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#543010").s().p("AA1CVQg7gag6g+Qg6g9gWg+QgWg+AbgZQAagZA9AaQA7AaA6A+QA6A9AWA+QAWA9gbAaQgNAMgVAAQgWAAgfgNg");
	this.shape_7.setTransform(-20.6418,20.0982,0.3519,0.3765);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBCA7D").s().p("AhOCbQgjhgAehfQAfhjBVgwQAdgKANAUQAgBXgNBZQgNBUgyBQQADgDAJgBIAIgCQgsAWgZADIgMABQgjAAgNggg");
	this.shape_8.setTransform(-25.3394,-9.1973,0.3519,0.3765);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#543010").s().p("AglDKQglgHgOhAQgOhAAQhTQAPhTAlg2QAkg2AlAGQAkAHAOBAQAOBAgQBTQgPBTglA2QghAwgfAAIgIAAg");
	this.shape_9.setTransform(-26.2881,-10.1689,0.3519,0.3765);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBCA7D").s().p("AAwCGQg1gXg0g4Qg1g3gTg3QgVg4AYgXQAZgWA2AXQA1AYA1A3QAzA3AVA4QATA3gYAXQgMALgTAAQgUAAgbgMg");
	this.shape_10.setTransform(20.8084,-12.2532,0.3519,0.3765);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#543010").s().p("AA2CVQg8gag6g+Qg6g9gWg+QgWg+AbgZQAbgZA8AaQA7AaA6A+QA6A9AWA+QAWA+gbAZQgNAMgVAAQgWAAgegNg");
	this.shape_11.setTransform(20.4828,-11.8273,0.3519,0.3765);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DDB16A").s().p("AFCM7IAAAAQgPgCgGgDQiJgShxgLQgygBhKABIh9AAQgVAAgigMIg2gVQgsgVgfgSQihhfhziPQgYgdgTgeIgmg9QgSghAAgeQAHiPgChHQgFh6g1hSQgKgZgHgRIgCgDQgJgXgJgaQgOgcgBgnIAAhEQAFgiAKgvQgLjlCTiwIABAdQALCWApCkQBFEPCGDUQGOJ4NfgpIA5gEQhOBjhiA4QguAag5AUQg7AVg7AIIgcAJQgbAPggAAQgTAAgmgHg");
	this.shape_12.setTransform(-5.957,7.8344,0.3519,0.3765);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EBCA7D").s().p("AC6PuIAAAAQgPgCgHgCIgdgHQhlgSh2gEQgzgBhKAAIh9ABQgWAAghgNIg2gUQgtgVgfgTQighehziPQgYgegTgdIgmg9QgSgiAAgdQAHiPgDhHQgEh8g1hSQgLgYgGgRIgCgGQgth+AahXQANgzAGgbQgCjJB5iRQBsiCC5g8QAUgNAlgbQDoihDLAIQAlACAlAHQAagDAcAMQAQAHAeARQBJAzBhAuQAjARCJA6QAqASAcANQDZBkCCC8QCJDIgQDjQgCApgJAsQgICphRC9Qg9CMh1C1QgXAagXAVIgKAJQhBA7hEAsQguAegoAUQguAYgqAQQgcAMgpANQgdARgnAAQgOAAgPgCg");
	this.shape_13.setTransform(-1.196,1.057,0.3519,0.3764);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#543010").s().p("ACaQKIgBAAIgUgDIgBgBQiIgThxgKQhogKhzgFQhdAAg4glQgkgTgigVQh+hOhkhvQgXgagYgfQhLhVAAg+QgKjOgFgkQgRiGg8hdIgDgDQgJgXgJgZQgOgdgBgnIABhDQAEgjALguQgLjlCSiwQBwiGDAhdQAcgXAcgTQDciWDiAEQAqABAiAEQAJAIAdAAQAdAAALAHQBgA2BzA1QBTAnCBA3IBIAeQDhBkCBDuQB+DpgdD2QAAAugDAnQgkC5hWCwQhVCxh6CJQgmAjgaAUQiGBqihA5IhCAUQgbAPgfABQgUAAglgIg");
	this.shape_14.setTransform(-0.0626,0.0053,0.3519,0.3764);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(1,1,1).p("AhxmFIABADAByFrIgwAb");
	this.shape_15.setTransform(7.4,-0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.m, new cjs.Rectangle(-36.3,-40.9,72.6,80.19999999999999), null);


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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

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

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#231F20").p("AjzFpIHnAAQAwAAAjgiQAigjAAgwIAAnnQAAgxgigiQgjgigwAAInnAAQgxAAgiAiQgiAiAAAxIAAHnQAAAwAiAjQAiAiAxAAg");
	this.shape_3.setTransform(36.1,36.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("AjzFpQgxAAgigiQgigjAAgwIAAnnQAAgxAigiQAigiAxAAIHoAAQAvAAAjAiQAiAiAAAxIAAHnQAAAwgiAjQgjAigvAAg");
	this.shape_4.setTransform(36.1,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD791").s().p("AAtDxQACgFAGgCIAJgCQATgFARggQgcAWgiAPQg2AXgQgUQgEgEgDgHQAIgQAKgMQAJgKALgGQggAHgdAAQhIAAhDgdQgQgNABgHQACgMAyABIhMgGQgTgMABgIQAAgEAGgDQgPAFgHABQgWADgGgNQgCgEAAgIQAGgIAIgGQATgQAagBIAsADQArAEAvgRQg1gDgsABQgcABgKgCQgUgEgMgQQgLgMgGgRQAAgHACgGQAHgPAiAGQA2AJAYgCQAYgBAbgKQgeAHgWgIQgWgIgEgSQgDgKADgOQgFgEAAgDQAAgJA6gGQhCACgBgGQAAgCAGgDQgEgNADgIQAEgSAggGIBagIIBLgIQhOAEgDgUQgCgHAIgLQAYgCAZAAQA1ABAuAJQhAgYABgQQAAgJAXgHQBLAKA9AeQBtA3AeBsQAGAWACAPQAEAngFAgQgOBWhIA9QhGA7hnAQQgEgRAEgJg");
	this.shape.setTransform(11.0604,-0.0218,0.3557,0.3557);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4A037").s().p("ABJERQAEgFAJgDIAQgDQAggGAagkQgvAag3AQQhYAbgbgXQgFgEgGgJQAMgRARgOQAPgLASgGQgyAGgyAAQh1AAhughQgagNABgIQADgOBUABIh/gHQgegOABgIQABgFAKgDQgbAFgKABQgjADgKgOQgEgGAAgHIAWgQQAggTAqgBIBIADQBIAEBMgSQhTgDhMABQgsABgSgDQgggEgVgSQgQgNgLgUQAAgKAEgFQAKgQA4AGQBaAKAngCQApgCAqgKQgyAIgkgJQgkgJgHgVQgEgLAFgRQgIgEAAgDQAAgKBVgHQhjADgBgIQAAgCAJgDQgFgNADgLQAHgUA2gHICTgJQA2gDBEgHQh/AGgGgYQgCgIANgMQAigCAuAAQBNABBWAKQhqgbABgSQACgLAmgHQB5AKBkAjQCzA/AxB5QAJAVAEAVQAIAqgKAnQgXBih1BEQhzBDipASQgHgTAHgKg");
	this.shape_1.setTransform(4.3314,-0.004,0.3557,0.3557);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F36E2E").s().p("ABPEpQAFgGAKgDIARgDQAjgIAcglQg2Adg4AQQhgAcgegZQgGgEgGgIQAOgWASgMQAQgNATgHQg0AHg4ABQh8AAh6gkQgdgPACgJQADgQBjACIiRgHQghgOABgKQABgGALgDQgeAGgKABQgnADgKgPQgEgHAAgHQALgKANgIQAigUAugCIBOAFQBPAEBRgVQhagChSABQgwAAgUgCQgigGgXgSQgRgPgMgVQAAgKAEgHQALgSA9AIQBhALAqgCQArgCAwgMQg2AIgngJQgngKgIgXQgFgNAGgRQgJgDAAgFQAAgLBcgHQhrADgBgIQAAgCAKgEQgGgPAEgLQAIgWA5gHICggKQA9gDBIgHQiLAGgGgaQgCgJAOgNQAmgCAxABQBZAABYALQhzgdABgUQACgMApgIQCDALBtAmQDCBEA2CEQAKAYAEAVQAIAvgKApQgZBrh/BJQh9BKi4ATQgGgWAGgJg");
	this.shape_2.setTransform(3.2509,-0.0129,0.3557,0.3557);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E16325").s().p("ABWFAQAEgHALgDIATgDQAkgHAggqQg7Afg8ASQhnAeghgaQgJgIgEgGQAOgVAVgQQARgNATgHQg5AHg6AAQiGAAiDgmQgfgQACgKQACgQBjABIiUgIQgkgQACgKQAAgGAOgEQghAHgMABQgpAEgLgRQgFgGAAgJQAMgLAOgIQAlgWAxgBQAGgBBOAFQBTAFBagWQhhgDhYABQg0ABgVgDQglgGgZgUQgTgPgNgYQAAgKAFgHQAMgUBCAIQBoAMAugDQAvgCAzgMQg7AJgqgLQgqgKgJgZQgFgNAHgTQgKgEAAgEQAAgNBrgHQh7ADgBgJQAAgCAKgEQgGgPAEgNQAJgYA+gHICsgLQBJgEBGgHQiVAHgHgcQgCgKAPgOQA1gCApAAQBjABBcAMQh9ghACgVQABgMAtgJQCOANB1ApQDRBIA6CPQAKAWAFAbQAJAwgLAvQgaByiKBQQiGBOjGAWQgJgXAJgLg");
	this.shape_3.setTransform(1.8326,-0.004,0.3557,0.3557);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DF3F26").s().p("ABcFYQAFgHALgDIAUgEQAogIAigtQg9AhhEAUQhGAVgogEQgYgCgLgKQgGgFgIgLQAPgXAWgQQATgPAVgIQg/AJg+AAQiRAAiMgpQgigSACgKQAEgSBrACIihgJQgmgRABgLQABgHATgEQgoAHgNACQgsAEgMgSQgFgGAAgKQALgLARgJQAngYA2gBQAHgBBTAFQBbAEBfgWQhmgEhiABQg4ABgWgDQgogGgagVQgVgRgOgaQAAgLAFgHQANgVBHAIQBwANAxgDQA3gCAzgOQg/AKgugLQgsgLgKgbQgFgOAHgUQgLgFAAgEQABgNBrgIQh9ADgBgKQgBgCAMgFQgHgQAFgNQAJgaBDgIIC5gMQBAgEBagIQigAHgIgeQgCgLAQgOQAogCA9AAQBlAABoAOQiFgjABgXQACgNAwgKQCYAOB/AsQDhBOA+CZQALAaAFAbQAKA2gMAwQgdB7iTBWQiRBVjVAXQgJgZAJgMg");
	this.shape_4.setTransform(-0.2945,-0.004,0.3557,0.3557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire, new cjs.Rectangle(-22.8,-13.5,45.6,27.1), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD791").s().p("AgGB0IgDghQgCgKgFgDQgYgQhdBXQAfgiAYgnQAUghgDgJQgKgfh8AFIBMgPQAhgHAIgDQALgDACgFQARgbhXhZQBsBQARgQQAEgEgBgMIgCglQABgfAIgiQADAfAHAmQAIArAFACQARAEAthoQgLAjgIAhQgKArgBAPQgCAWAHAJQAOATAngCQAVgCATgFQgQAOgSAFQgIADgLAAQgJABAAACQgEAKBuA6QgagIgbgFQgvgJgQAAQgagBgPALQgHAGgEAOQgEAIgGAbQgJAngCAzQgIgmgGgyg");
	this.shape.setTransform(5.1115,-2.693,2.1434,2.1434);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBB16").s().p("AgJCwIgGgxQgCgQgIgFQgjgZiPCEQAxgzAkg8QAdgwgEgOQgKgfhTgIQgvgEhAADIB0gXQAygKANgEQAPgFAFgIQAPgZgsg+QgegogxgxQCjB6AbgZQAGgGgBgTQgDgoAAgPQACgzAMgwQAFA0AKA1QAMBCAJACQAZAHBEifQgQAxgMA2QgPBBgDAYQgCAgAKAPQAWAcA6gEQAkgCAZgIQgXAVgdAJQgLADgSABQgLABgBADQgIAQCmBXQgjgLgsgIQhGgNgZgBQgogCgVASQgLAJgIAUQgFAOgJAoQgQBHgBBBQgOhBgHhEg");
	this.shape_1.setTransform(2.1108,-0.6568,2.1434,2.1434);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4A037").s().p("AgOECIgHhIQgFgYgLgHQg1gjjQDBQBHhMA1hXQAagsAIgXQAFgPgCgJQgVhHkWAMICqgiQBJgPAUgGQAVgHAIgLQAXglhDhbQgqg6hJhKQDxCzAngkQAJgIgDgdQgEg3ABgZQAAhJAUhIQAHBKAPBQQALA8AJAXQAEAPAHABQAkAKBkjpQgZBOgQBJQgWBigDAgQgFAwAQAWQAfAoBWgEQAsgDAugMQgjAegpANQgTAGgYACQgSABgBAEQgKAXD0CAQg6gRg6gLQhogTglgCQg6gCggAaQgRAOgKAdQgHAVgNA5QgXBjgDBlQgVhmgKhdg");
	this.shape_2.setTransform(-0.0327,-0.6568,2.1434,2.1434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.boom, new cjs.Rectangle(-93.7,-97.7,187.4,194.10000000000002), null);


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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFCFC").s().p("Ao2V0QkZhxjZjaQjZjZhykZQhvkQAAknQAAkmBvkQQBykZDZjZQDZjaEZhxQEQhvEmAAQEnAAEQBvQEaBxDYDaQDZDZByEZQBvEQAAEmQAAEnhvEQQhyEZjZDZQjYDakaBxQkQBvknAAQkmAAkQhvg");
	this.shape.setTransform(123.9258,105.8847,0.6743,0.6743);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBEBEB").s().p("ApxYIQk4h+jwjwQjvjvh/k4Qh6ktAAlGQAAlFB6ktQB/k4DvjvQDwjwE4h+QEsh6FFAAQFHAAEsB6QE4B+DvDwQDwDvB+E4QB6EtAAFFQAAFGh6EtQh+E4jwDvQjvDwk4B+QksB6lHAAQlFAAksh6g");
	this.shape_1.setTransform(123.4706,114.4658,0.6743,0.6743);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DDDDDD").s().p("AquabQlViKkHkGQkGkHiLlVQiFlKAAllQAAllCFlJQCLlVEGkHQEHkGFViLQFKiGFkAAQFlAAFKCGQFVCLEGEGQEHEHCKFVQCGFJAAFlQAAFliGFKQiKFVkHEHQkGEGlVCKQlKCGllAAQlkAAlKiGg");
	this.shape_2.setTransform(123.0154,123.0806,0.6743,0.6743);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,246.1,246.2), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3024").s().p("AgfGGQgOgNAAgTIAArLQAAgTAOgNQANgOASAAQATAAANAOQAOANAAATIAALLQAAATgOANQgNAOgTAAQgSAAgNgOg");
	this.shape.setTransform(-101.34,-0.3259,1.0929,1.0929,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A395D").s().p("Aj0BrQgWAAgQgMQgQgMAAgSIAAgVQAAgRAQgMQAQgNAWAAIAZAAIAqhsIFjAAIArBsIAYAAQAWAAAQANQAPAMABARIAAAVQgBASgPAMQgQAMgWAAg");
	this.shape_1.setTransform(-142.4346,-2.7577,1.0929,1.0929,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCE6F6").s().p("AihhdQAagfAjgSQAlgSAqgBIC3C3QgBAqgSAlQgSAkgfAZg");
	this.shape_2.setTransform(2.708,2.5704,1.0929,1.0929,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCE6F6").s().p("AiBhEQADggAOgdIDyDyIg9ARg");
	this.shape_3.setTransform(-5.1065,-5.2441,1.0929,1.0929,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4189C8").s().p("Ah/CBQg2g2AAhLIABgRQADgfAOgdQAIgRAOgTQAagfAjgSQAlgSAqgBIABAAQBLAAA1A2QA2A1AABKIAAACQgBAqgSAlQgSAkgeAZQgQALgUALQgcANghAEIgSABQhKAAg1g1g");
	this.shape_4.setTransform(0.5221,0.3572,1.0929,1.0929,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#443367").s().p("AihCiQhDhDAAhfQAAheBDhDQBDhEBeAAQBfAABDBEQBEBDAABeQAABfhEBDQhDBDhfAAQheAAhDhDg");
	this.shape_5.setTransform(0.4948,0.3572,1.0929,1.0929,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B1B0D8").s().p("AgPNeQh3gEg8ADQiAkwg3k8QhTndBcnMQAThdAVhKIKXAEQA7DfARDfQAcGFhhGHQhCEKhxDmQgaABgkAAQgxAAhDgCg");
	this.shape_6.setTransform(-37.3366,-0.3413,1.0929,1.0929,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3024").s().p("AlLEIQA4jLBdjGQAQgjAZgrIAdg1IDYAAQASAeAPAWQAaAnAWAuQBcDDA3DNg");
	this.shape_7.setTransform(85.9901,-0.3259,1.0929,1.0929,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C72026").s().p("AhsCyQAUgmATgvQA1iBARiNQAKCQA5CCQASAqAXAng");
	this.shape_8.setTransform(134.79,-0.3259,1.0929,1.0929,90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE3024").s().p("AggGGQgNgNAAgTIAArLQAAgTANgNQAOgOASAAQATAAANAOQAOAOAAASIAALLQAAATgOANQgNAOgTAAQgSAAgOgOg");
	this.shape_9.setTransform(-101.34,60.5236,1.0929,1.0929,90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C02026").s().p("AiIBFIBWm8IC7CXIAAJYg");
	this.shape_10.setTransform(-89.6182,40.4682,1.0929,1.0929,90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE3024").s().p("AggGGQgNgNAAgTIAArLQAAgSANgOQAOgOASAAQATAAAOAOQANANAAATIAALLQAAATgNANQgOAOgTAAQgSAAgOgOg");
	this.shape_11.setTransform(-101.34,-60.7382,1.0929,1.0929,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C02026").s().p("AiJjgIC7iXIBYG7IkTE0g");
	this.shape_12.setTransform(-91.3669,-42.8686,1.0929,1.0929,90);

	this.instance = new lib.Symbol2();
	this.instance.setTransform(-180.45,-0.75,0.5184,0.4662,0,0,0,68.5,50.4);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(-186.6,-1.8,0.723,0.3094,0,177.6424,0,68.3,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ship, new cjs.Rectangle(-236.6,-65.7,390.79999999999995,131.3), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AhpCwICsleIAnAAIitFeg");
	this.shape.setTransform(319.1707,62.8675,0.6952,0.6952);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgiA7IATg/IgMgrQAKgHAGgCQAHgCAGgBQAMAAAHAGQAHAEADAIQAEAHgBAKQAAAJgEAJIgHAPIgbAyg");
	this.shape_1.setTransform(389.6031,27.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgnDQIAAggIAoAAIAAleIgoAAIAAghIBPAAIAAGfg");
	this.shape_2.setTransform(446.925,-71.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgoDQIAAmfIBQAAIAAAgIgoAAIAAFeIAoAAIAAAhg");
	this.shape_3.setTransform(367.7,-71.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AhnCEIAAglICmAAIAAh9QAAgMgCgJQgBgIgFgGQgEgFgHgDQgGgDgMgDIgsgLIgcA/IAwAcIgSAgIhRguIA1h2IBbATIAOAFQAMAFAKAHQAJAJAEAHQAEAIADAMQABALAAAMIAACDIgHAlg");
	this.shape_4.setTransform(289.625,-67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AheCDIABidIABgUIAFgTQACgIAFgNIgQgDIgSgGIAMgjIAhAHIAQABIBUAAQANAAASAEQAQAEALAJQALAJAIAQQAHARAAAaIAACogAgvhAIgDAUIgCCKIB9AAIAAh9QAAgQgCgKQgDgKgFgGQgGgHgJgCQgIgCgQAAIg/AAIgIAUg");
	this.shape_5.setTransform(212.775,-66.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAECmIAAklIgxAAIAAglIBbAAIAAFKg");
	this.shape_6.setTransform(130.35,-62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAAB/IAAjYIgpAAIAAglIBTAAIAAD9g");
	this.shape_7.setTransform(52.4,-66.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhjCAIgLjGIgEgWQgCgJgFgMIASgJIATgHQAFAIACAJQACAFADAMIAMC8IAOAAQAbAAAYgIQAYgKAQgRQARgRALgdQAJgaAAgnIAAgRIgCgNIgugIIgTA7IghgLIAMgrIAPgqQAcABAcAGIAzAKIAEAcQACAPAAASQAAAqgMAgQgMAhgUAWQgOAQgQAJQgRALgQAFQgSAGgQACQgQACgUAAg");
	this.shape_8.setTransform(-24.6,-67.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgzgOQgHAKgEAKQgEAMgBAPQgCANAAAOIAABFIgrAAIAChOQAAgQACgQQADgQAEgJQADgKAHgMIAPgTIgPgXIgJgSIgHgSIgFgQIAogNIARAsIAMAVIATAZIAwA3IABACQAHgFAHgIIAKgPIAHgSIAQg6IgjgHIAGgiIBFAMIABAfIgWBPQgGAMgEAHQgGAJgHAIQgJAJgJAHIA6BEIgeAbg");
	this.shape_9.setTransform(-105.475,-66.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAzCDIAAihQAAgRgCgJQgCgKgGgHQgFgGgKgCQgJgDgPAAIgtAAIgQgCQgIAAgIgDIgSgFIANgkQAIADAKACIAPACIA5ACQAQAAAOADQAOADANAKQALAJAIARQAIASAAAaIAACmg");
	this.shape_10.setTransform(-187.225,-67.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AhlCqIABjLIAFggIAqAGIgGAsIAAC5gAgTA9IBDhJQAHgHAEgJQAEgKABgGQACgIAAgKIgBg9Ih6AAIgRgBQgHgBgJgCIgRgGIAMgkQAJAEAJABIAyAEICBAAIAGAlIAABLIgEAWQgEAMgEAIQgFAJgJAJIhGBOg");
	this.shape_11.setTransform(-264.425,-63.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgWA8QgIgFgEgIQgDgJAAgKQABgLAEgKIAmhHIAgAAIgVBFIAOAwIgSAKQgIACgGAAQgOAAgHgFg");
	this.shape_12.setTransform(-350.7031,-77.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AhpCwICsleIAnAAIitFeg");
	this.shape_13.setTransform(-428.75,-71.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AA7CrIAAjvQAAgOgCgIQgCgHgEgGQgFgHgIgCQgJgEgKgCIgpgJIgbA+IAwAdIgSAgIhSgwIA1h2IBRARIAZAIQAMAFAJAIQAKAIAGAPQAHAOAAAVIAAD1g");
	this.shape_14.setTransform(308.15,19.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAwCqIAAklIhXAAIgQgBIgQgDIgSgGIAMgkIAiAIIB+ABIAEANIADAZIAAEkg");
	this.shape_15.setTransform(227.475,19.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgoCLIA3g+IAbgkQAGgMACgJQACgLAAgMIAAg4IiRAAIAAhrIAqAAIAABGICLAAIAGAXIABBFQAAAcgMAZQgLAagXAZIg7BCg");
	this.shape_16.setTransform(147.5,12.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("ABGCDIAAiiQAAgQgCgKQgDgLgFgFQgFgHgKgCQgJgDgPAAIg5AAIgIAVIgFA5IAACKIgqAAIABidIABgUIAEgTQACgIAFgNIgQgDIgSgGIANgjIASAEIAPADIBeABQANAAARAEQARAEAKAJQAMAJAIAQQAIARgBAaIAACog");
	this.shape_17.setTransform(70.6,15.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AABBDIADgNIADhZIg3AAIAAglIBhAAIgBB0IgFAdg");
	this.shape_18.setTransform(-16.475,10.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AhoBmIAngMQAbgKAOgHIg6iVIgHgKQgDgDgJgFIgTgJIATgjIAXAKQAIADAIAHQAIAFAEAGQAEAHAFAKIAzCPQAPgMANgPQAKgOAJgTQAJgTAEgUQAGgUACgZIgpgMIAKgkIBIATIACAiQgDAVgFAUQgEAUgHARQgHAQgMAUQgKAPgPARQgSARgRAMQgUAOgWAKQgNAHgWAHIgmANg");
	this.shape_19.setTransform(-89.9,16.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AhgCDIAAglICYAAIgDh9QAAgOgDgLQgBgKgHgHQgEgGgKgDQgJgDgQAAIgkAAIgRgBIgQgDQgFgBgMgFIANgjIAgAHIAxABQAOAAAPAEQAPAEAMAKQALAKAIAQQAIARABAaIABCAIgGAmg");
	this.shape_20.setTransform(-172.5,15.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhRBvIgEgSIAQgFIAMgFIAMgIIAMgLIArgwIAAhsIg3AAIAAglIBfAAIAACCQAAAMADAKIAWA8IALApIgnAAIgRg2IgHgPIgkAqQgOANgOAJQgQAIgTADIgFgTg");
	this.shape_21.setTransform(-254.15,15.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AASCDIAAjYIhNAAIgQgBIgQgDQgIgCgKgEIAMgjIAiAHICtABIAAAlIgxAAIAADYg");
	this.shape_22.setTransform(-331.85,15.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("Ah1CAIgQjGIgEgXQgCgIgFgMQAIgGAKgDIATgHIAHAQQAEALABAHQADAKAAALIANClIARABQApAAAfgNQAegMAVgYQAUgVALggQAKghAAgkIgDgqIAqgIIAEAtQAAA1gPAnQgOAogcAcQgcAbgnAOQgnAOgyAAgAg+AOIAlhUIAGgSQACgGAAgJIgCgSIAmgIQAEALAAAMIgBAOIgDAPIgJAYIgkBTg");
	this.shape_23.setTransform(-405.625,15.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgLAbQgFgCgEgEQgFgFgCgFQgCgEAAgHQAAgFACgGIAHgJQAIgJAMAAQAHAAAEACQAGACAEAFQAJAIAAAMQAAAMgJAJQgEAEgGACQgGADgFAAQgFAAgGgDg");
	this.shape_24.setTransform(347.175,102.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AAjCjQgLgNgIgMIgNgbIhwkHIAngRIBBCaIAagWQAHgGAFgIIALgTIANgYIALgcIgogLIALglIBHAUQABARgBAQIgQAlQgJATgJAQIgPAWIgPARIgkAZIAlBWIALATIAQARQgRARgPANg");
	this.shape_25.setTransform(272.8875,95.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("ABPCDIAAihQAAgRgCgJQgCgLgFgGQgGgGgJgCQgJgDgPAAIguAAQgNARgHAZQgFAXAAAXQAAAUADATQACAOAGAWIAIAbIgDAZIhgAAIAAgkIA1AAQgIgYgEgVQgEgVAAgVQAAgZAGgVQAGgXAOgXIgYgDIgZgHIAMgkIASAFIAQACIBhACQAQAAAOADQAOADAOAKQAMAKAHAQQAHASAAAaIAACmg");
	this.shape_26.setTransform(192.625,91.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AhlCDIAAglICOAAIhZhnQgOgQgNgRQgMgTgFgKQgIgQgDgJIgGgVIAogNIADALIAOAhIAMAVIATAZIAnAtQAHgFAGgEQAGgGAEgGQAFgHADgIIATg3IgigKIAJgiIBDATIgCAgIgIAZIgJAYQgGAQgEAGQgFAJgFAHQgIAJgFAEQgJAHgIAEIA4BBIgCAOQgBAIgDAMg");
	this.shape_27.setTransform(113.775,91.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("Ah0CFIAbinQACgLgBgJQgBgIgDgJIgYgnIAlgWIAXAiIAFALIATgSQAJgGALgGQAKgFAKgCQALgDANgBQAgAAAWARQAVARAHAjQACAKABAOIgBCPIgCAXIh4AAIAAglIBRAAIACgWIgFh6QgBgJgFgHQgDgHgFgGQgHgFgGgDQgHgCgKAAQgLgBgJAEQgJADgJAGQgKAGgIAIIgQAPIgdC1g");
	this.shape_28.setTransform(33.9,91.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AhJB/IAAglIBpAAIgTizIg6AAIAAglIBgAAIAXDlIgCAYg");
	this.shape_29.setTransform(-50.525,91.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("ABACDIAAiiQAAgLgCgOQgDgLgFgGQgFgGgKgDQgLgCgOAAIhFgBIgQgBIgQgDIgSgGIANgjIAhAHIAQABIBBABQAQAAAPADQAPAEALAJQAMAJAIARQAHARAAAbIAACmgAhlCDIAAhgIAGgvIAqAGIgFAdIgBBsg");
	this.shape_30.setTransform(-126.725,91.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AhzCDIAAglICPAAIAAh9QAAgQgBgJQgDgLgGgGQgEgGgLgDQgIgCgOAAIgfgBIgQgBIgQgDIgRgGIAMgjIAiAHIAqACQAOAAAOADQAPADAMAKQAMAKAHAPQAIARAAAaIAACDIAtAAIAAAlg");
	this.shape_31.setTransform(-206.4,91.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgnB8QgUgIgNgSQgMgPgHgXQgFgWAAgaQAAgPACgOQABgQAFgQIAHgUQADgJAGgJQgKgBgLgDQgMgDgKgDIANgkIAhAHIBiACQAXAAAPAFQARAGAKALQAHAKAEAKQADAIAEAQQADANAAANIABAaQAAAQgDAVQgBAYgJAUQgIASgPAOQgNAOgSAGQgSAHgXAAQgcAAgTgKgAgug0QgGAQgBAWIgBAcQAAASADANQABAPAJALQAGAMAOAHQANAHAQAAQAMAAALgEQALgEAIgIQAIgIAGgLQAFgKACgRIADglIgBgZIgEgYQgBgLgDgGQgDgHgFgEQgFgEgJgCIhJgCQgLAQgFATg");
	this.shape_32.setTransform(-287.45,91.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AAICDIghjXIgNgBQgHAAgHgCIgcgIIANgjIAhAHIByACIAAAlIg/AAIAjDXg");
	this.shape_33.setTransform(-369.3,91.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AgGARIgGgEIgEgGQgBgDAAgEQAAgDABgDIAEgGQAGgGAGABIAHABIAGAEQAFAFABAHQgBAIgFAFIgGAEIgHACg");
	this.shape_34.setTransform(234.65,71.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgVAlIAMgnIgHgbIAKgFIAHgCQAIAAAEADQAFAEACAEQACAEAAAGQgBAIgCAEIgVAog");
	this.shape_35.setTransform(154.8,69.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#58595B").s().p("ABlBtIgWi2IgCAAIg8C2IghAAIg8i2IgCAAIgWC2IgcAAIAajZIAqAAIA8C8IA9i8IApAAIAbDZg");
	this.shape_36.setTransform(84.7,62.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#58595B").s().p("AA3BuIhzi1IAACzIgcAAIAAjZIAhAAIBzC1IAAi1IAdAAIAADbg");
	this.shape_37.setTransform(2.275,61.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#58595B").s().p("AhNBtIAAjZIBFAAQANAAAPACQANACAKAHQALAFAFALQAHAKAAAQQAAAKgCAGQgDAIgDAFQgDAEgHAGIgMAHIAAAAQAHABAIAFQAJAEAFAHQAFAGAEAJQAEAJgBANQAAARgFAMQgHAMgKAIQgLAHgOAEQgPAEgQAAgAgxBWIAwAAQAMAAAHgCQAJgDAHgFQAHgFAEgIQAEgJAAgJQAAgLgEgHQgEgIgHgGQgIgFgIgDQgJgDgKAAIgwAAgAgxgSIA7gCQAJgCAFgEQAGgEAEgIQADgHAAgKQAAgJgEgGQgEgGgGgEQgGgDgJgCIg5gBg");
	this.shape_38.setTransform(-78.1,61.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#58595B").s().p("AgLBtIhSjZIAeAAIA/C2IBAi2IAeAAIhRDZg");
	this.shape_39.setTransform(-158.6,61.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#58595B").s().p("Ag3BUQgXgbAAg2QAAg4AXgdQAZgdAsAAQATAAANADQAOADANAEIgHAXIgZgHIgbgDQgOAAgNAGQgMAGgIAMQgJALgDARQgDAPgBAVQABAWADAQQADAQAJAMQAHALANAGQANAFAOAAQASAAAMgCQAKgCASgFIAHAXQgPAFgPACQgQADgTAAQgsAAgZgcg");
	this.shape_40.setTransform(-239.65,61.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#58595B").s().p("AAAAYIg4BVIgiAAIBJhrIhHhiIAWgQIBCBdIA6hZIAgAAIhKBtIBFBfIgXAQg");
	this.shape_41.setTransform(-319.7,61.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#58595B").s().p("AhGBtIAAgUIBpiuIhmAAIAAgXICJAAIAAAVIhpCsIBqAAIAAAYg");
	this.shape_42.setTransform(-399.2,61.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#58595B").s().p("ABIBtIgdhKIhVAAIgcBKIgdAAIBVjZIAcAAIBXDZgAghALIBDAAIgihXg");
	this.shape_43.setTransform(-439.7,-13.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#58595B").s().p("AgNAlQgFgDgDgFQgCgFABgHQAAgGADgHIAWgrIAVAAIgOAqIAJAeQgGAEgFACQgEABgEAAQgIAAgFgDg");
	this.shape_44.setTransform(352.3857,-20.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#58595B").s().p("AgVBXIAMgnIgIgbIAKgGIAHgBQAIAAAEACQAFAEACAEQACAEAAAGQgBAIgCAFIgEAJIgRAfgAgFgvQgDgCgDgCIgFgHQgBgDAAgFIABgIIAFgGIAGgEIAHgCQAFAAADACIAHAEIAEAGIABAIQAAAFgBADIgEAHQgDACgEACQgDACgFgBIgHgBg");
	this.shape_45.setTransform(274.775,-7.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#58595B").s().p("Ag6BtIAAjZIAcAAIAADCIBZAAIAAAXg");
	this.shape_46.setTransform(196.75,-13.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#58595B").s().p("AAqBuIhZhoIAABoIgcAAIAAjYIAcAAIAABvIBhhyIATAPIhSBiIBZBqg");
	this.shape_47.setTransform(120.15,-14.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#58595B").s().p("AgfBtQAPgMAFgGIAGgIQAIgPAAgeIAAijIAdAAIAACXQAAAYgCAMQgBANgGANQgLAYggAOg");
	this.shape_48.setTransform(33.725,-12.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#58595B").s().p("AA7BtIAAhsIh0AAIAABsIgdAAIAAjZIAdAAIAABXIB0AAIAAhXIAcAAIAADZg");
	this.shape_49.setTransform(-39.15,-13.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#58595B").s().p("AgdBqQgTgHgMgNQgNgPgGgUQgGgTAAgeQAAgeAGgVQAHgUAMgPQANgOASgHQAVgHAUABQAPAAAQADQAOACAUAGIgIAXQgTgGgKgCQgPgDgMAAQgSABgMAFQgMAEgKAMQgIAJgFASQgEAQAAAXQAAAWAEARQAEARAIALQAJALAMAFQANAFARAAQALAAAOgCIAXgGIAAg9IglAAIAAgVIBAAAIAABjQgTAIgSADQgUAFgSAAQgWgBgSgGg");
	this.shape_50.setTransform(-121.325,-13.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58595B").s().p("Ag7BtIAAjZIB3AAIAAAYIhbAAIAAA8IBAAAIAAAXIhAAAIAABug");
	this.shape_51.setTransform(-202.525,-13.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#58595B").s().p("AhSBtIAAjZIAuAAQAVAAAOACQANACAPAFQAMAEAMAIQAKAIAHAMQAHAMAEARQAEAQgBAWQABAYgEAPQgEARgHAMQgGAMgLAIQgKAIgOAEQgLAFgRACQgPACgUAAgAg1BWIAXAAQAXAAAOgFQARgFAKgKQAKgKAFgRQAEgPAAgYQAAgWgEgQQgFgRgKgKQgKgKgRgFQgOgEgXAAIgXAAg");
	this.shape_52.setTransform(-281.45,-13.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#58595B").s().p("AhIBjIAJgWIAbAIIAOADIAPAAQAKAAAKgCQAKgDAHgFQAGgFAEgIQAFgIAAgKQAAgIgEgHQgDgHgIgEQgGgEgKgDIgVgHIgagHQgLgDgJgIQgJgIgFgJQgFgLABgQQAAgOAEgKQAFgJAKgIQAIgHAOgFQAPgDAPAAIAOABIAQACIAeAJIgJAXIgXgIIgOgDIgOgBQgJAAgHADQgGAAgIAFQgFADgEAHQgDAHAAAIQAAAJADAHQAEAHAGAEQAIAEAJADIAWAGIAZAIQAKAEALAHQAIAHAFALQAEAKABAPQAAARgHAMQgFALgMAKQgLAIgPADQgQAFgPAAQgiAAgfgOg");
	this.shape_53.setTransform(-361.5,-13.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#58595B").s().p("AgYCBIAAgUIAZAAIAAjZIgZAAIAAgUIAxAAIAAEBg");
	this.shape_54.setTransform(416.55,-95.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#58595B").s().p("AgYCBIAAkBIAxAAIAAAUIgZAAIAADZIAZAAIAAAUg");
	this.shape_55.setTransform(335.725,-95.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#58595B").s().p("AhFBtIAAjZIBEAAQAMAAAPADQAOAEAJAHQAJAHAGAMQAGANAAAQQAAASgHANQgGALgLAHQgKAGgPADQgQADgNAAIghgCIAABggAgpgJQAIABAIABIAkgBQAJgBAHgFQAIgFADgHQADgHAAgNQAAgMgDgHQgDgIgGgEQgFgEgIgDQgIgBgJAAIgoAAg");
	this.shape_56.setTransform(260.725,-95.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#58595B").s().p("AhGBTQgZgcAAg3QAAg2AZgdQAZgcAtAAQAuAAAZAdQAZAdAAA1QAAA2gZAdQgZAdguAAQgtAAgZgdgAgxhAQgQAXAAApQAAATADARQAEAPAIANQAIAMANAGQANAGAQAAQAhAAARgXQAQgXAAgqQAAgpgQgXQgRgYghAAQghAAgQAYg");
	this.shape_57.setTransform(181.05,-95.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#58595B").s().p("AgNBtIAAjZIAbAAIAADZg");
	this.shape_58.setTransform(96.175,-96.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#58595B").s().p("AhWAPIAAh9IAdAAIAAB9QAAARADAMQADAOAGAJQAHAKALAFQALAFAQAAQAOAAAKgEQAJgCAHgHQAHgGAEgJQAEgJACgLQABgKAAgOIAAh9IAdAAIAAB9QAAAwgVAYQgWAYgsAAQhWAAAAhgg");
	this.shape_59.setTransform(21.775,-95.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#58595B").s().p("AgNBtIAAhiIhPh3IAgAAIA8BhIA8hhIAhAAIhPB3IAABig");
	this.shape_60.setTransform(-58.425,-96.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#58595B").s().p("AgNBtIAAjBIhDAAIAAgYICiAAIAAAYIhEAAIAADBg");
	this.shape_61.setTransform(-140.45,-96.075);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#58595B").s().p("AAtBtIgxhNIgNgOQgEgEgIgDQgGgBgJAAIgFAAIAABjIgcAAIAAjZIBEAAQAOAAAMAEQANADAJAHQAKAHAGAMQAGAMAAAPQAAAOgGANQgGALgKAHQgHAFgKADIgUAFIAAAAIAKAIIALAMIALAQQAHAIAGAJIAfAugAgxgLIAoAAQAIAAAIgDQAIgCAGgEQAGgFACgHQAEgGAAgKQAAgKgEgHQgCgGgGgFQgHgFgHgCQgIgCgIAAIgoAAg");
	this.shape_62.setTransform(-218.775,-96.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#58595B").s().p("Ag9BtIAAjZIB4AAIAAAYIhcAAIAAA8IBBAAIAAAXIhBAAIAABXIBfAAIAAAXg");
	this.shape_63.setTransform(-301.575,-96.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#58595B").s().p("AA9BtIg9i8Ig8C8IgqAAIgajZIAcAAIAWC3IACAAIA8i3IAhAAIA8C3IACAAIAWi3IAcAAIgaDZg");
	this.shape_64.setTransform(-375.8,-96.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#58595B").s().p("ABACEIgVgJIgrgiQgVABgTgIQgPgGgOgPQgNgPgGgVQgGgUgBgbQABgcAGgVQAGgUANgPQAOgPAPgGQATgIAVAAQAXAAASAIQASAHAMAPQALANAIAWQAFAVAAAbQAAArgPAbQgQAageALIAXAQIALAGIAQAFIgEAMIgGALgAgdhoQgMAGgJAMQgIAMgDAQQgFARAAATQAAATAFARQADAPAIANQAKAMALAFQANAHAQAAQARgBAMgGQAMgFAJgMQAIgLAFgRQADgQAAgUQAAgTgDgSQgFgRgIgLQgJgMgMgFQgMgHgRABQgQgBgNAHg");
	this.shape_65.setTransform(-459.6,-93.75);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.key65},{t:this.key83},{t:this.key68},{t:this.key70},{t:this.key71},{t:this.key72},{t:this.key74},{t:this.key75},{t:this.key76},{t:this.key186},{t:this.key222},{t:this.key191},{t:this.key190},{t:this.key188},{t:this.key77},{t:this.key78},{t:this.key66},{t:this.key86},{t:this.key67},{t:this.key88},{t:this.key90},{t:this.key221},{t:this.key219},{t:this.key80},{t:this.key79},{t:this.key73},{t:this.key85},{t:this.key89},{t:this.key84},{t:this.key82},{t:this.key69},{t:this.key87},{t:this.key81},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		star1 = self.star1;
		star2 = self.star2;
		star3 = self.star3;
		star4 = self.star4;
		star5 = self.star5;
		star6 = self.star6;
		star7 = self.star7;
		star8 = self.star8;
		star9 = self.star9;
		star10 = self.star10;
		
		
		
		mstar1()
		mstar3()
		mstar5()
		mstar7()
		mstar9()
		
		
		star8.x = 700;
		star6.x = 700;
		star10.x = 700;
		star2.x = 700;
		star4.x = 700;
		
		var t = setTimeout(more, 4000);
		function more() {
		
			mstar8()
			mstar6()
			mstar4()
			mstar2()
			mstar10()
		}
		function mstar1() {
			star1.x = 700;
			createjs.Tween.get(star1).wait(2000).to({
				x: -700
			}, 8800).call(mstar1);
		}
		
		function mstar2() {
			star2.x = 750;
			createjs.Tween.get(star2).wait(4000).to({
				x: -700
			}, 8100).call(mstar2);
		}
		
		function mstar3() {
			star3.x = 850;
			createjs.Tween.get(star3).wait(3000).to({
				x: -700
			}, 8900).call(mstar3);
		}
		
		function mstar4() {
			star4.x = 700;
			createjs.Tween.get(star4).wait(2000).to({
				x: -700
			}, 8400).call(mstar4);
		}
		
		function mstar5() {
			star5.x = 780;
			createjs.Tween.get(star5).wait(2000).to({
				x: -700
			}, 8700).call(mstar5);
		}
		
		function mstar6() {
			star6.x = 750;
			createjs.Tween.get(star6).wait(5000).to({
				x: -700
			}, 9000).call(mstar6);
		}
		
		
		function mstar7() {
			star7.x = 820;
			createjs.Tween.get(star7).wait(1500).to({
				x: -700
			}, 8300).call(mstar7);
		}
		
		function mstar8() {
			star8.x = 750;
			createjs.Tween.get(star8).wait(2500).to({
				x: -700
			}, 8900).call(mstar8);
		}
		
		function mstar9() {
			star9.x = 700;
			createjs.Tween.get(star9).wait(3500).to({
				x: -700
			}, 8200).call(mstar9);
		}
		
		function mstar10() {
			star10.x = 750;
			createjs.Tween.get(star10).wait(4500).to({
				x: -700
			}, 8100).call(mstar10);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.star10 = new lib.Symbol13();
	this.star10.name = "star10";
	this.star10.setTransform(23.3,301.9,1,1,0,0,0,20.8,19.7);

	this.star4 = new lib.Symbol13();
	this.star4.name = "star4";
	this.star4.setTransform(-18.2,-90.5,1,1,0,0,0,20.8,19.7);

	this.star7 = new lib.Symbol12();
	this.star7.name = "star7";
	this.star7.setTransform(9,118.55,1,1,0,0,0,20.8,19.7);

	this.star2 = new lib.Symbol11();
	this.star2.name = "star2";
	this.star2.setTransform(9,-313.6,1,1,0,0,0,20.8,19.8);

	this.star9 = new lib.Symbol10();
	this.star9.name = "star9";
	this.star9.setTransform(-8.9,262.45,1,1,0,0,0,20.8,19.7);

	this.star8 = new lib.Symbol9();
	this.star8.name = "star8";
	this.star8.setTransform(-22.5,190.5,1,1,0,0,0,20.8,19.8);

	this.star6 = new lib.Symbol8();
	this.star6.name = "star6";
	this.star6.setTransform(32.6,62.85,1,1,0,0,0,20.8,19.7);

	this.star5 = new lib.Symbol7();
	this.star5.name = "star5";
	this.star5.setTransform(-8.9,7.15,1,1,0,0,0,20.8,19.8);

	this.star3 = new lib.Symbol6();
	this.star3.name = "star3";
	this.star3.setTransform(4.35,-149.4,1,1,0,0,0,20.8,19.7);

	this.star1 = new lib.Symbol5();
	this.star1.name = "star1";
	this.star1.setTransform(-18.2,-265.55,1,1,0,0,0,20.8,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star1},{t:this.star3},{t:this.star5},{t:this.star6},{t:this.star8},{t:this.star9},{t:this.star2},{t:this.star7},{t:this.star4},{t:this.star10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-43.3,-333.4,96.6,655.0999999999999), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3024").s().p("AgfGGQgOgNAAgTIAArLQAAgTAOgNQANgOASAAQATAAANAOQAOANAAATIAALLQAAATgOANQgNAOgTAAQgSAAgNgOg");
	this.shape.setTransform(65.4366,255.549,1.0928,1.0928);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A395D").s().p("Aj0BrQgWAAgQgMQgQgMAAgSIAAgVQAAgRAQgMQAQgNAWAAIAZAAIAqhsIFjAAIArBsIAYAAQAWAAAQANQAPAMABARIAAAVQgBASgPAMQgQAMgWAAg");
	this.shape_1.setTransform(63.005,296.6395,1.0928,1.0928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCE6F6").s().p("AihhdQAagfAjgSQAlgSAqgBIC3C3QgBAqgSAlQgSAkgfAZg");
	this.shape_2.setTransform(68.3326,151.5111,1.0928,1.0928);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCE6F6").s().p("AiBhEQADggAOgdIDyDyIg9ARg");
	this.shape_3.setTransform(60.5188,159.3249,1.0928,1.0928);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4189C8").s().p("Ah/CBQg2g2AAhLIABgRQADgfAOgdQAIgRAOgTQAagfAjgSQAlgSAqgBIABAAQBLAAA1A2QA2A1AABKIAAACQgBAqgSAlQgSAkgeAZQgQALgUALQgcANghAEIgSABQhKAAg1g1g");
	this.shape_4.setTransform(66.1196,153.6968,1.0928,1.0928);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#443367").s().p("AihCiQhDhDAAhfQAAheBDhDQBDhEBeAAQBfAABDBEQBEBDAABeQAABfhEBDQhDBDhfAAQheAAhDhDg");
	this.shape_5.setTransform(66.1196,153.7241,1.0928,1.0928);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B1B0D8").s().p("AgPNeQh3gEg8ADQiAkwg3k8QhTndBcnMQAThdAVhKIKXAEQA7DfARDfQAcGFhhGHQhCEKhxDmQgaABgkAAQgxAAhDgCg");
	this.shape_6.setTransform(65.4212,191.5518,1.0928,1.0928);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3024").s().p("AlLEIQA4jLBdjGQAQgjAZgrIAdg1IDYAAQASAeAPAWQAaAnAWAuQBcDDA3DNg");
	this.shape_7.setTransform(65.4366,68.2371,1.0928,1.0928);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C72026").s().p("AhsCyQAUgmATgvQA1iBARiNQAKCQA5CCQASAqAXAng");
	this.shape_8.setTransform(65.4366,19.4421,1.0928,1.0928);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE3024").s().p("AggGGQgNgNAAgTIAArLQAAgTANgNQAOgOASAAQATAAANAOQAOAOAAASIAALLQAAATgOANQgNAOgTAAQgSAAgOgOg");
	this.shape_9.setTransform(126.2802,255.549,1.0928,1.0928);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C02026").s().p("AiIBFIBWm8IC7CXIAAJYg");
	this.shape_10.setTransform(106.2267,243.8283,1.0928,1.0928);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE3024").s().p("AggGGQgNgNAAgTIAArLQAAgSANgOQAOgOASAAQATAAAOAOQANANAAATIAALLQAAATgNANQgOAOgTAAQgSAAgOgOg");
	this.shape_11.setTransform(5.0302,255.549,1.0928,1.0928);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C02026").s().p("AiJjgIC7iXIBYG7IkTE0g");
	this.shape_12.setTransform(22.898,245.5769,1.0928,1.0928);

	this.end = new lib.Symbol4();
	this.end.name = "end";
	this.end.setTransform(60.85,340.7,1,1,-90,0,0,50.2,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.end},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDF5F9").s().p("AmcMXIkPhrQhCgaAAg2QAAgdARgdIFrqHIlRlxQggglAAggQAAgrAxgjIDhieQAjgaAfAAQArAAAjAxIGPIVIEmnQQAig0AsAAQAiAAAgAdIDBCeQAoAhAAAqQAAApgcAfImOHPIFrGFQAgAlAAAgQAAAoguAmIjVCeQgjAaggAAQgrAAgiguImeo0Ii2IuQgLAjgWATQgVASgdAAQgOAAgjgLg");
	this.shape.setTransform(457.7427,-184.4491,0.7088,0.7088);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDF5F9").s().p("ACZMBIi4gFQhhgGgJhfIh20eQgDgwAageQAagcAxgDIEigMQAxgDAcAcQAdAbAAAxIASU1QAAAwgcAdQgZAagqAAIgJAAg");
	this.shape_1.setTransform(376.5864,-184.7508,0.7088,0.7088);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDF5F9").s().p("AsCLWIhqkjQgJgaAAgUQAAhFBWgJIEpgdIiKvPQgGg2AZgcQAYgbA3ACITBBLQBgAGAIBfIBqSqQAGA0gbAdQgbAdg0gDIk1gRQgxgDgbgbQgbgcADg0IAcsuIorhTICIOQQAOBihiAXIogBwQgJADgUAAQhIAAgahLg");
	this.shape_2.setTransform(285.2474,-180.2744,0.7088,0.7088);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDF5F9").s().p("AB5GjIjRgGQhigGgGhfIgrphQgDgxAbgdQAdgeAwgCIELgLQAxgDAbAcQAbAdAAAxIgIJ5QAAA0gdAaQgaAXgqAAIgKAAg");
	this.shape_3.setTransform(198.3296,-207.5035,0.7088,0.7088);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDF5F9").s().p("ACZMBIi3gFQhigGgJhfIh20eQgDgwAageQAagcAxgDIEigMQAxgDAcAcQAdAbAAAxIASU1QAAAwgcAdQgZAagqAAIgJAAg");
	this.shape_4.setTransform(153.8312,-184.7508,0.7088,0.7088);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDF5F9").s().p("AsCLWIhrkjQgIgZAAgVQAAhFBWgJIEpgdIiLvPQgGg2AZgcQAYgbA3ACITCBLQBfAGAIBfIBrSqQAGA0gcAdQgbAdg0gDIk0gRQgxgDgbgbQgcgcADg0IAdsuIorhTICHOQQAOBihhAXIohBwQgJADgTAAQhIAAgahLg");
	this.shape_5.setTransform(62.5099,-180.2744,0.7088,0.7088);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDF5F9").s().p("ArHLQQgcgdAGg0IAgkrQAJhfBkAAILBAOIAdo/IrbAgQg0ACgagZQgagbADg2IASkAQAFhlBlAAIPHADQBoAAAABnIALONIB2ADQBlAGAABlIgDDBQAAAygaAaQgZAcgyACIzvBDIgKAAQgtAAgYgag");
	this.shape_6.setTransform(-118.145,-182.8974,0.7088,0.7088);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDF5F9").s().p("AGXL4QhfAAgIhkIhLwMIllAaIg2PPQgDBihlAGIkjARQgzADgcgdQgcgdAGg0IBuu7IhlAGQg0ADgbgZQgcgYAAg0IADj7QAAgxAdgcQAdgdAxADISWAuQBfADAMBfIChT4QAGA3gaAbQgaAbg0AAg");
	this.shape_7.setTransform(-233.3433,-183.3249,0.7088,0.7088);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDF5F9").s().p("AgPPOIkBi2QgxgiAAgvQAAgYAXgnIIGrmItRgDQhoAAAAhoIAJq2QAAgzAbgbQAdgaAzADIEXAaQArADAXAXQAXAXAAAmQAAAKgFAYIhRFDIPPBcQAyAGAYAdQAYAcgFAxIgdDeQgGA4glBDIoVOXQgeA3gzAAQglAAgZgXg");
	this.shape_8.setTransform(-348.287,-197.0067,0.7088,0.7088);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDF5F9").s().p("AgPPOIkBi2QgxgiAAgvQAAgaAXglIIGrmItRgDQhoAAAAhoIAJq2QAAgzAbgbQAcgaA0ADIEXAaQArADAXAXQAXAXAAAmQAAALgGAXIhQFDIPPBcQAxAGAZAdQAYAcgGAxIgcDeQgGA2gmBFIoUOXQgeA3gzAAQglAAgZgXg");
	this.shape_9.setTransform(-458.9497,-197.0067,0.7088,0.7088);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.tttt},{t:this.instance},{t:this.big},{t:this.b2},{t:this.small},{t:this.b3},{t:this.heb},{t:this.b1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startf, new cjs.Rectangle(-510.9,-267.6,1021.8,583.5), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1.4659,scaleY:1.4659,y:962.9},0).wait(1).to({scaleX:1.4512,scaleY:1.4512,y:947.75},0).wait(1).to({scaleX:1.4366,scaleY:1.4366,y:932.6},0).wait(1).to({scaleX:1.422,scaleY:1.422,y:917.45},0).wait(1).to({scaleX:1.4074,scaleY:1.4074,x:96.25,y:902.3},0).wait(1).to({scaleX:1.3928,scaleY:1.3928,x:96.3,y:887.15},0).wait(1).to({scaleX:1.3781,scaleY:1.3781,y:872},0).wait(1).to({scaleX:1.3635,scaleY:1.3635,y:856.8},0).wait(1).to({scaleX:1.3489,scaleY:1.3489,x:96.25,y:841.65},0).wait(1).to({scaleX:1.3343,scaleY:1.3343,y:826.5},0).wait(1).to({scaleX:1.3197,scaleY:1.3197,x:96.3,y:811.35},0).wait(1).to({scaleX:1.3051,scaleY:1.3051,y:796.2},0).wait(1).to({scaleX:1.2904,scaleY:1.2904,y:781.05},0).wait(1).to({scaleX:1.2758,scaleY:1.2758,x:96.25,y:765.85},0).wait(1).to({scaleX:1.2612,scaleY:1.2612,y:750.7},0).wait(1).to({scaleX:1.2466,scaleY:1.2466,x:96.3,y:735.55},0).wait(1).to({scaleX:1.232,scaleY:1.232,y:720.4},0).wait(1).to({scaleX:1.2174,scaleY:1.2174,y:705.25},0).wait(1).to({scaleX:1.2027,scaleY:1.2027,x:96.25,y:690.1},0).wait(1).to({scaleX:1.1881,scaleY:1.1881,y:674.95},0).wait(1).to({scaleX:1.1735,scaleY:1.1735,x:96.3,y:659.75},0).wait(1).to({scaleX:1.1589,scaleY:1.1589,y:644.6},0).wait(1).to({scaleX:1.1443,scaleY:1.1443,y:629.45},0).wait(1).to({scaleX:1.1297,scaleY:1.1297,x:96.25,y:614.35},0).wait(1).to({scaleX:1.115,scaleY:1.115,y:599.2},0).wait(1).to({scaleX:1.1004,scaleY:1.1004,x:96.3,y:584.05},0).wait(1).to({scaleX:1.0858,scaleY:1.0858,y:568.85},0).wait(1).to({scaleX:1.0712,scaleY:1.0712,y:553.7},0).wait(1).to({scaleX:1.0566,scaleY:1.0566,x:96.25,y:538.55},0).wait(1).to({scaleX:1.042,scaleY:1.042,y:523.4},0).wait(1).to({scaleX:1.0273,scaleY:1.0273,x:96.3,y:508.25},0).wait(1).to({scaleX:1.0127,scaleY:1.0127,y:493.1},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:96.25,y:477.95},0).wait(1).to({scaleX:0.9835,scaleY:0.9835,y:462.75},0).wait(1).to({scaleX:0.9689,scaleY:0.9689,x:96.3,y:447.6},0).wait(1).to({scaleX:0.9543,scaleY:0.9543,y:432.45},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,y:417.3},0).wait(1).to({scaleX:0.925,scaleY:0.925,x:96.25,y:402.15},0).wait(1).to({scaleX:0.9104,scaleY:0.9104,y:387},0).wait(1).to({scaleX:0.8958,scaleY:0.8958,x:96.3,y:371.85},0).wait(1).to({scaleX:0.8812,scaleY:0.8812,y:356.65},0).wait(1).to({scaleX:0.8666,scaleY:0.8666,y:341.5},0).wait(1).to({scaleX:0.8519,scaleY:0.8519,x:96.25,y:326.35},0).wait(1).to({scaleX:0.8373,scaleY:0.8373,y:311.2},0).wait(1).to({scaleX:0.8227,scaleY:0.8227,x:96.3,y:296.05},0).wait(1).to({scaleX:0.8081,scaleY:0.8081,y:280.9},0).wait(1).to({scaleX:0.7935,scaleY:0.7935,y:265.75},0).wait(1).to({scaleX:0.7788,scaleY:0.7788,x:96.25,y:250.6},0).wait(1).to({scaleX:0.7642,scaleY:0.7642,y:235.45},0).wait(1).to({scaleX:0.7496,scaleY:0.7496,x:96.3,y:220.3},0).wait(1).to({scaleX:0.735,scaleY:0.735,y:205.15},0).wait(1).to({scaleX:0.7204,scaleY:0.7204,y:190},0).wait(1).to({scaleX:0.7058,scaleY:0.7058,x:96.25,y:174.8},0).wait(1).to({scaleX:0.6911,scaleY:0.6911,y:159.65},0).wait(1).to({scaleX:0.6765,scaleY:0.6765,x:96.3,y:144.5},0).wait(1).to({scaleX:0.6619,scaleY:0.6619,y:129.4},0).wait(1));

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3024").s().p("AgfGGQgOgNAAgTIAArLQAAgTAOgNQANgOASAAQATAAANAOQAOANAAATIAALLQAAATgOANQgNAOgTAAQgSAAgNgOg");
	this.shape.setTransform(135.351,65.3366,1.0928,1.0928,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A395D").s().p("Aj0BrQgWAAgQgMQgQgMAAgSIAAgVQAAgRAQgMQAQgNAWAAIAZAAIAqhsIFjAAIArBsIAYAAQAWAAAQANQAPAMABARIAAAVQgBASgPAMQgQAMgWAAg");
	this.shape_1.setTransform(94.2605,62.905,1.0928,1.0928,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCE6F6").s().p("AihhdQAagfAjgSQAlgSAqgBIC3C3QgBAqgSAlQgSAkgfAZg");
	this.shape_2.setTransform(239.3889,68.2326,1.0928,1.0928,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCE6F6").s().p("AiBhEQADggAOgdIDyDyIg9ARg");
	this.shape_3.setTransform(231.5751,60.4188,1.0928,1.0928,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4189C8").s().p("Ah/CBQg2g2AAhLIABgRQADgfAOgdQAIgRAOgTQAagfAjgSQAlgSAqgBIABAAQBLAAA1A2QA2A1AABKIAAACQgBAqgSAlQgSAkgeAZQgQALgUALQgcANghAEIgSABQhKAAg1g1g");
	this.shape_4.setTransform(237.2032,66.0196,1.0928,1.0928,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#443367").s().p("AihCiQhDhDAAhfQAAheBDhDQBDhEBeAAQBfAABDBEQBEBDAABeQAABfhEBDQhDBDhfAAQheAAhDhDg");
	this.shape_5.setTransform(237.1759,66.0196,1.0928,1.0928,90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B1B0D8").s().p("AgPNeQh3gEg8ADQiAkwg3k8QhTndBcnMQAThdAVhKIKXAEQA7DfARDfQAcGFhhGHQhCEKhxDmQgaABgkAAQgxAAhDgCg");
	this.shape_6.setTransform(199.3482,65.3212,1.0928,1.0928,90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3024").s().p("AlLEIQA4jLBdjGQAQgjAZgrIAdg1IDYAAQASAeAPAWQAaAnAWAuQBcDDA3DNg");
	this.shape_7.setTransform(322.6629,65.3366,1.0928,1.0928,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C72026").s().p("AhsCyQAUgmATgvQA1iBARiNQAKCQA5CCQASAqAXAng");
	this.shape_8.setTransform(371.4579,65.3366,1.0928,1.0928,90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE3024").s().p("AggGGQgNgNAAgTIAArLQAAgTANgNQAOgOASAAQATAAANAOQAOAOAAASIAALLQAAATgOANQgNAOgTAAQgSAAgOgOg");
	this.shape_9.setTransform(135.351,126.1802,1.0928,1.0928,90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C02026").s().p("AiIBFIBWm8IC7CXIAAJYg");
	this.shape_10.setTransform(147.0717,106.1267,1.0928,1.0928,90);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE3024").s().p("AggGGQgNgNAAgTIAArLQAAgSANgOQAOgOASAAQATAAAOAOQANANAAATIAALLQAAATgNANQgOAOgTAAQgSAAgOgOg");
	this.shape_11.setTransform(135.351,4.9302,1.0928,1.0928,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C02026").s().p("AiJjgIC7iXIBYG7IkTE0g");
	this.shape_12.setTransform(145.3232,22.798,1.0928,1.0928,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{scaleX:1.0928,scaleY:1.0928,x:145.3232,y:22.798}},{t:this.shape_11,p:{scaleX:1.0928,scaleY:1.0928,x:135.351,y:4.9302}},{t:this.shape_10,p:{scaleX:1.0928,scaleY:1.0928,x:147.0717,y:106.1267}},{t:this.shape_9,p:{scaleX:1.0928,scaleY:1.0928,x:135.351,y:126.1802}},{t:this.shape_8,p:{scaleX:1.0928,scaleY:1.0928,x:371.4579,y:65.3366}},{t:this.shape_7,p:{scaleX:1.0928,scaleY:1.0928,x:322.6629,y:65.3366}},{t:this.shape_6,p:{scaleX:1.0928,scaleY:1.0928,x:199.3482,y:65.3212}},{t:this.shape_5,p:{scaleX:1.0928,scaleY:1.0928,x:237.1759,y:66.0196}},{t:this.shape_4,p:{scaleX:1.0928,scaleY:1.0928,x:237.2032,y:66.0196}},{t:this.shape_3,p:{scaleX:1.0928,scaleY:1.0928,x:231.5751,y:60.4188}},{t:this.shape_2,p:{scaleX:1.0928,scaleY:1.0928,x:239.3889,y:68.2326}},{t:this.shape_1,p:{scaleX:1.0928,scaleY:1.0928,x:94.2605,y:62.905}},{t:this.shape,p:{scaleX:1.0928,scaleY:1.0928,x:135.351,y:65.3366}}]}).to({state:[{t:this.shape_12,p:{scaleX:1.0927,scaleY:1.0927,x:145.3632,y:22.7147}},{t:this.shape_11,p:{scaleX:1.0927,scaleY:1.0927,x:135.3921,y:4.8486}},{t:this.shape_10,p:{scaleX:1.0927,scaleY:1.0927,x:147.1116,y:106.0352}},{t:this.shape_9,p:{scaleX:1.0927,scaleY:1.0927,x:135.3921,y:126.0867}},{t:this.shape_8,p:{scaleX:1.0927,scaleY:1.0927,x:371.4759,y:65.2491}},{t:this.shape_7,p:{scaleX:1.0927,scaleY:1.0927,x:322.6856,y:65.2491}},{t:this.shape_6,p:{scaleX:1.0927,scaleY:1.0927,x:199.383,y:65.2337}},{t:this.shape_5,p:{scaleX:1.0927,scaleY:1.0927,x:237.207,y:65.932}},{t:this.shape_4,p:{scaleX:1.0927,scaleY:1.0927,x:237.2343,y:65.932}},{t:this.shape_3,p:{scaleX:1.0927,scaleY:1.0927,x:231.6068,y:60.3318}},{t:this.shape_2,p:{scaleX:1.0927,scaleY:1.0927,x:239.4198,y:68.1448}},{t:this.shape_1,p:{scaleX:1.0927,scaleY:1.0927,x:94.3055,y:62.8178}},{t:this.shape,p:{scaleX:1.0927,scaleY:1.0927,x:135.3921,y:65.2491}}]},34).wait(1));

	// Symbol_4
	this.end = new lib.Symbol4();
	this.end.name = "end";
	this.end.setTransform(50.2,65.2,1,1,0,0,0,50.2,23.7);

	this.timeline.addTween(cjs.Tween.get(this.end).wait(1).to({scaleX:0.9596,x:52.5},0).wait(1).to({regX:50.3,regY:23.6,scaleX:0.9375,scaleY:0.9908,x:53.85,y:65.1},0).wait(1).to({scaleX:0.9155,scaleY:0.9816,x:55.1,y:65.05},0).wait(1).to({scaleX:0.8934,scaleY:0.9724,x:56.4,y:65.1},0).wait(1).to({scaleX:0.8714,scaleY:0.9632,x:57.65},0).wait(1).to({scaleX:0.8493,scaleY:0.954,x:58.85,y:65.05},0).wait(1).to({scaleX:0.8273,scaleY:0.9448,x:60.15,y:65.1},0).wait(1).to({scaleX:0.8052,scaleY:0.9356,x:61.4},0).wait(1).to({scaleX:0.7832,scaleY:0.9264,x:62.65,y:65.05},0).wait(1).to({scaleX:0.7611,scaleY:0.9172,x:63.95,y:65.1},0).wait(1).to({scaleX:0.739,scaleY:0.9081,x:65.15},0).wait(1).to({scaleX:0.717,scaleY:0.8989,x:66.45,y:65.05},0).wait(1).to({scaleX:0.6949,scaleY:0.8897,x:67.7,y:65.1},0).wait(1).to({scaleX:0.6729,scaleY:0.8805,x:68.95},0).wait(1).to({scaleX:0.6508,scaleY:0.8713,x:70.25,y:65.05},0).wait(1).to({scaleX:0.6288,scaleY:0.8621,x:71.5,y:65.1},0).wait(1).to({scaleX:0.6067,scaleY:0.8529,x:72.7},0).wait(1).to({scaleX:0.5847,scaleY:0.8437,x:74,y:65.05},0).wait(1).to({scaleX:0.5626,scaleY:0.8345,x:75.25,y:65.1},0).wait(1).to({scaleX:0.5406,scaleY:0.8253,x:76.5},0).wait(1).to({scaleX:0.5185,scaleY:0.8161,x:77.8,y:65.05},0).wait(1).to({scaleX:0.4965,scaleY:0.8069,x:79,y:65.1},0).wait(1).to({scaleX:0.4744,scaleY:0.7977,x:80.3},0).wait(1).to({scaleX:0.4524,scaleY:0.7885,x:81.55},0).wait(1).to({scaleX:0.4303,scaleY:0.7793,x:82.8},0).wait(1).to({scaleX:0.4083,scaleY:0.7701,x:84.1,y:65.05},0).wait(1).to({scaleX:0.3862,scaleY:0.7609,x:85.35,y:65.1},0).wait(1).to({scaleX:0.3642,scaleY:0.7517,x:86.55},0).wait(1).to({scaleX:0.3421,scaleY:0.7426,x:87.85,y:65.05},0).wait(1).to({scaleX:0.3201,scaleY:0.7334,x:89.1,y:65.1},0).wait(1).to({scaleX:0.298,scaleY:0.7242,x:90.4},0).wait(1).to({scaleX:0.2759,scaleY:0.715,x:91.65,y:65.05},0).wait(1).to({scaleX:0.2539,scaleY:0.7058,x:92.85,y:65.1},0).wait(1).to({scaleX:0.2318,scaleY:0.6966,x:94.15},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,390.9,131.39999999999998);


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

	this.timeline.addTween(cjs.Tween.get(this.space).wait(1).to({regX:195.5,regY:65.5,rotation:-15.3868,x:159.75,y:549.4},0).wait(1).to({rotation:-15.774,x:182.2,y:527.45},0).wait(1).to({rotation:-16.1611,x:202.7,y:508.25},0).wait(1).to({rotation:-16.5473,x:221.8,y:491.1},0).wait(1).to({rotation:-16.933,x:239.85,y:475.45},0).wait(1).to({rotation:-17.3184,x:257.15,y:460.95},0).wait(1).to({rotation:-17.7031,x:273.85,y:447.45},0).wait(1).to({rotation:-18.0871,x:289.95,y:434.8},0).wait(1).to({rotation:-18.4708,x:305.7,y:422.9},0).wait(1).to({rotation:-18.8537,x:321.1,y:411.65},0).wait(1).to({rotation:-19.2363,x:336.2,y:400.9},0).wait(1).to({rotation:-19.6182,x:351.1,y:390.7},0).wait(1).to({rotation:-19.9994,x:365.8,y:380.9},0).wait(1).to({rotation:-20.3805,x:380.35,y:371.55},0).wait(1).to({rotation:-20.7607,x:394.8,y:362.6},0).wait(1).to({rotation:-21.1404,x:409.1,y:353.9},0).wait(1).to({rotation:-21.5195,x:423.3,y:345.6},0).wait(1).to({rotation:-21.8982,x:437.55,y:337.6},0).wait(1).to({rotation:-22.2765,x:451.7,y:329.85},0).wait(1).to({rotation:-22.6538,x:465.8,y:322.35},0).wait(1).to({rotation:-23.0311,x:479.95,y:315.15},0).wait(1).to({rotation:-23.4074,x:494.2,y:308.1},0).wait(1).to({rotation:-23.7833,x:508.4,y:301.4},0).wait(1).to({rotation:-24.1588,x:522.75,y:294.9},0).wait(1).to({rotation:-24.5336,x:537.1,y:288.5},0).wait(1).to({rotation:-24.9077,x:551.55,y:282.4},0).wait(1).to({rotation:-25.2815,x:566.2,y:276.5},0).wait(1).to({rotation:-25.6549,x:580.95,y:270.75},0).wait(1).to({rotation:-26.0276,x:595.9,y:265.25},0).wait(1).to({rotation:-26.3996,x:610.95,y:259.85},0).wait(1).to({rotation:-26.7713,x:626.25,y:254.65},0).wait(1).to({rotation:-27.1422,x:641.85,y:249.65},0).wait(1).to({rotation:-27.5124,x:657.65,y:244.9},0).wait(1).to({rotation:-27.8823,x:673.75,y:240.25},0).wait(1).to({rotation:-28.2518,x:690.35,y:235.75},0).wait(1).to({rotation:-28.6207,x:707.2,y:231.55},0).wait(1).to({rotation:-28.9888,x:724.55,y:227.45},0).wait(1).to({rotation:-29.3565,x:742.4,y:223.5},0).wait(1).to({rotation:-29.7236,x:760.8,y:219.85},0).wait(1).to({rotation:-30.0903,x:779.95,y:216.35},0).wait(1).to({rotation:-30.4563,x:799.85,y:213.1},0).wait(1).to({rotation:-30.822,x:820.75,y:210.1},0).wait(1).to({rotation:-31.1869,x:842.75,y:207.4},0).wait(1).to({rotation:-31.5515,x:866.2,y:204.9},0).wait(1).to({rotation:-31.9154,x:891.4,y:202.8},0).wait(1).to({rotation:-32.2785,x:919,y:201.15},0).wait(1).to({rotation:-32.6414,x:950,y:200.15},0).wait(1).to({rotation:-33.0589,x:985.55,y:199.7},0).wait(1).to({rotation:-37.7896,x:983.1,y:188.4},0).wait(1).to({rotation:-42.5158,x:979.8,y:177.55},0).wait(1).to({rotation:-47.2281,x:975.6,y:167.1},0).wait(1).to({rotation:-51.9357,x:970.55,y:157.2},0).wait(1).to({rotation:-56.6388,x:964.65,y:147.85},0).wait(1).to({rotation:-61.3326,x:958,y:139.25},0).wait(1).to({rotation:-66.0218,x:950.7,y:131.3},0).wait(1).to({rotation:-70.6972,x:942.75,y:124.1},0).wait(1).to({rotation:-75.3725,x:934.15,y:117.75},0).wait(1).to({rotation:-80.0387,x:925.1,y:112.15},0).wait(1).to({rotation:-84.6956,x:915.6,y:107.55},0).wait(1).to({rotation:-89.3478,x:905.7,y:103.9},0).wait(1).to({rotation:-92.9986,x:897.95,y:101.7},0).wait(1).to({x:899.2,y:102.4},0).wait(1).to({x:900.4,y:103.15},0).wait(1).to({x:901.65,y:103.9},0).wait(1).to({x:902.9,y:104.7},0).wait(1).to({x:904.15,y:105.5},0).wait(1).to({x:905.4,y:106.35},0).wait(1).to({x:906.65,y:107.2},0).wait(1).to({x:907.9,y:108.1},0).wait(1).to({x:909.2,y:109},0).wait(1).to({x:910.5,y:109.95},0).wait(1).to({x:911.75,y:110.95},0).wait(1).to({x:913.05,y:111.95},0).wait(1).to({x:914.4,y:113},0).wait(1).to({x:915.7,y:114.1},0).wait(1).to({x:917,y:115.25},0).wait(1).to({x:918.35,y:116.4},0).wait(1).to({x:919.7,y:117.6},0).wait(1).to({x:921.05,y:118.85},0).wait(1).to({x:922.4,y:120.15},0).wait(1).to({x:923.8,y:121.45},0).wait(1).to({x:925.2,y:122.85},0).wait(1).to({x:926.6,y:124.3},0).wait(1).to({x:928,y:125.75},0).wait(1).to({x:929.45,y:127.3},0).wait(1).to({x:930.9,y:128.9},0).wait(1).to({x:932.35,y:130.55},0).wait(1).to({x:933.85,y:132.3},0).wait(1).to({x:935.35,y:134.1},0).wait(1).to({x:936.9,y:136},0).wait(1).to({x:938.45,y:137.95},0).wait(1).to({x:940.05,y:140.05},0).wait(1).to({x:941.65,y:142.2},0).wait(1).to({x:943.3,y:144.5},0).wait(1).to({x:944.95,y:146.9},0).wait(1).to({x:946.65,y:149.45},0).wait(1).to({x:948.45,y:152.2},0).wait(1).to({x:950.25,y:155.1},0).wait(1).to({x:952.15,y:158.2},0).wait(1).to({x:954.1,y:161.6},0).wait(1).to({x:956.15,y:165.25},0).wait(1).to({x:958.3,y:169.35},0).wait(1).to({x:960.6,y:173.95},0).wait(1).to({x:963.15,y:179.25},0).wait(1).to({x:965.95,y:185.65},0).wait(1).to({x:969.4,y:194},0).wait(1).to({x:974.7,y:208.7},0).wait(1).to({x:979.85,y:223.9},0).wait(1).to({x:982.3,y:230.3},0).wait(1).to({x:984.8,y:236.75},0).wait(1).to({x:987.3,y:243.35},0).wait(1).to({x:989.85,y:250.05},0).wait(1).to({x:992.4,y:256.9},0).wait(1).to({x:994.95,y:263.85},0).wait(1).to({x:997.55,y:270.95},0).wait(1).to({x:1000.2,y:278.15},0).wait(1).to({x:1002.9,y:285.55},0).wait(1).to({x:1005.6,y:293.1},0).wait(1).to({x:1008.3,y:300.85},0).wait(1).to({x:1011.1,y:308.8},0).wait(1).to({x:1013.95,y:317},0).wait(1).to({x:1016.9,y:325.55},0).wait(1).to({x:1019.85,y:334.4},0).wait(1).to({x:1022.95,y:343.75},0).wait(1).to({x:1026.2,y:353.75},0).wait(1).to({x:1029.6,y:364.6},0).wait(1).to({x:1033.3,y:376.75},0).wait(1).to({x:1037.6,y:391.5},0).wait(1).to({x:1045.35,y:422.05},0).wait(1));

	// Layer_3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(1812.8,123,1,1,0,0,0,123,123);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:123.1,scaleX:1.0411,scaleY:1.0411,x:1801.35,y:134.35},0).wait(1).to({scaleX:1.0821,scaleY:1.0821,x:1789.9,y:145.65},0).wait(1).to({scaleX:1.1232,scaleY:1.1232,x:1778.5,y:156.95},0).wait(1).to({scaleX:1.1642,scaleY:1.1642,x:1767.05,y:168.25},0).wait(1).to({scaleX:1.2053,scaleY:1.2053,x:1755.6,y:179.55},0).wait(1).to({scaleX:1.2463,scaleY:1.2463,x:1744.2,y:190.85},0).wait(1).to({scaleX:1.2874,scaleY:1.2874,x:1732.75,y:202.2},0).wait(1).to({scaleX:1.3284,scaleY:1.3284,x:1721.35,y:213.5},0).wait(1).to({scaleX:1.3695,scaleY:1.3695,x:1709.9,y:224.8},0).wait(1).to({scaleX:1.4106,scaleY:1.4106,x:1698.45,y:236.1},0).wait(1).to({scaleX:1.4516,scaleY:1.4516,x:1687.05,y:247.35},0).wait(1).to({scaleX:1.4927,scaleY:1.4927,x:1675.6,y:258.65},0).wait(1).to({scaleX:1.5337,scaleY:1.5337,x:1664.2,y:269.95},0).wait(1).to({scaleX:1.5748,scaleY:1.5748,x:1652.75,y:281.25},0).wait(1).to({scaleX:1.6158,scaleY:1.6158,x:1641.3,y:292.55},0).wait(1).to({scaleX:1.6569,scaleY:1.6569,x:1629.9,y:303.85},0).wait(1).to({scaleX:1.698,scaleY:1.698,x:1618.45,y:315.15},0).wait(1).to({scaleX:1.739,scaleY:1.739,x:1607.05,y:326.45},0).wait(1).to({scaleX:1.7801,scaleY:1.7801,x:1595.6,y:337.8},0).wait(1).to({scaleX:1.8211,scaleY:1.8211,x:1584.15,y:349.1},0).wait(1).to({scaleX:1.8622,scaleY:1.8622,x:1572.75,y:360.35},0).wait(1).to({scaleX:1.9032,scaleY:1.9032,x:1561.3,y:371.65},0).wait(1).to({scaleX:1.9443,scaleY:1.9443,x:1549.9,y:382.95},0).wait(1).to({scaleX:1.9853,scaleY:1.9853,x:1538.45,y:394.25},0).wait(1).to({scaleX:2.0264,scaleY:2.0264,x:1527,y:405.55},0).wait(1).to({scaleX:2.0675,scaleY:2.0675,x:1515.6,y:416.85},0).wait(1).to({scaleX:2.1085,scaleY:2.1085,x:1504.15,y:428.15},0).wait(1).to({scaleX:2.1496,scaleY:2.1496,x:1492.75,y:439.45},0).wait(1).to({scaleX:2.1906,scaleY:2.1906,x:1481.3,y:450.75},0).wait(1).to({scaleX:2.2317,scaleY:2.2317,x:1469.85,y:462.05},0).wait(1).to({scaleX:2.2727,scaleY:2.2727,x:1458.45,y:473.35},0).wait(1).to({scaleX:2.3138,scaleY:2.3138,x:1447,y:484.65},0).wait(1).to({scaleX:2.3548,scaleY:2.3548,x:1435.6,y:495.95},0).wait(1).to({scaleX:2.3959,scaleY:2.3959,x:1424.15,y:507.25},0).wait(1).to({scaleX:2.437,scaleY:2.437,x:1412.7,y:518.55},0).wait(1).to({scaleX:2.478,scaleY:2.478,x:1401.3,y:529.85},0).wait(1).to({scaleX:2.5191,scaleY:2.5191,x:1389.85,y:541.15},0).wait(1).to({scaleX:2.5601,scaleY:2.5601,x:1378.45,y:552.45},0).wait(1).to({scaleX:2.6012,scaleY:2.6012,x:1367,y:563.75},0).wait(1).to({scaleX:2.6422,scaleY:2.6422,x:1355.55,y:575.05},0).wait(1).to({scaleX:2.6833,scaleY:2.6833,x:1344.15,y:586.35},0).wait(1).to({scaleX:2.7244,scaleY:2.7244,x:1332.7,y:597.6},0).wait(1).to({scaleX:2.7654,scaleY:2.7654,x:1321.3,y:608.9},0).wait(1).to({scaleX:2.8065,scaleY:2.8065,x:1309.85,y:620.2},0).wait(1).to({scaleX:2.8475,scaleY:2.8475,x:1298.4,y:631.55},0).wait(1).to({scaleX:2.8886,scaleY:2.8886,x:1287,y:642.85},0).wait(1).to({scaleX:2.9296,scaleY:2.9296,x:1275.55,y:654.15},0).wait(1).to({scaleX:2.9707,scaleY:2.9707,x:1264.15,y:665.45},0).wait(1).to({scaleX:3.0117,scaleY:3.0117,x:1252.7,y:676.75},0).wait(1).to({scaleX:3.0528,scaleY:3.0528,x:1241.25,y:688.05},0).wait(1).to({scaleX:3.0939,scaleY:3.0939,x:1229.85,y:699.35},0).wait(1).to({scaleX:3.1349,scaleY:3.1349,x:1218.4,y:710.65},0).wait(1).to({scaleX:3.176,scaleY:3.176,x:1207,y:721.9},0).wait(1).to({scaleX:3.217,scaleY:3.217,x:1195.55,y:733.2},0).wait(1).to({scaleX:3.2581,scaleY:3.2581,x:1184.1,y:744.5},0).wait(1).to({scaleX:3.2991,scaleY:3.2991,x:1172.7,y:755.8},0).wait(1).to({scaleX:3.3402,scaleY:3.3402,x:1161.25,y:767.15},0).wait(1).to({scaleX:3.3813,scaleY:3.3813,x:1149.85,y:778.45},0).wait(1).to({scaleX:3.4223,scaleY:3.4223,x:1138.4,y:789.75},0).wait(1).to({scaleX:3.4634,scaleY:3.4634,x:1126.95,y:801.05},0).wait(1).to({scaleX:3.5044,scaleY:3.5044,x:1115.55,y:812.35},0).wait(1).to({scaleX:3.5455,scaleY:3.5455,x:1104.1,y:823.65},0).wait(1).to({scaleX:3.5865,scaleY:3.5865,x:1092.7,y:834.9},0).wait(1).to({scaleX:3.6276,scaleY:3.6276,x:1081.25,y:846.2},0).wait(1).to({scaleX:3.6686,scaleY:3.6686,x:1069.8,y:857.5},0).wait(1).to({scaleX:3.7097,scaleY:3.7097,x:1058.4,y:868.8},0).wait(1).to({scaleX:3.7508,scaleY:3.7508,x:1046.95,y:880.1},0).wait(1).to({scaleX:3.7918,scaleY:3.7918,x:1035.55,y:891.4},0).wait(1).to({scaleX:3.8329,scaleY:3.8329,x:1024.1,y:902.7},0).wait(1).to({scaleX:3.8739,scaleY:3.8739,x:1012.65,y:914.05},0).wait(1).to({scaleX:3.915,scaleY:3.915,x:1001.25,y:925.35},0).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-37.2,1939.5,1444.5);


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
			createjs.Sound.registerSound("sounds/boooooooomwav.mp3", "boom");
			createjs.Sound.registerSound("sounds/musicwav.mp3", "music");
			createjs.Sound.registerSound("sounds/wrongwav.mp3", "no");
			createjs.Sound.registerSound("sounds/correctwav.mp3", "yes");
		}
		
		
		
		var meteor;
		var letter = 0;
		var spaceship;
		var speed = 4;
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
		var count;
		var startframe;
		var music;
		
		
		
		mystart();
		function mystart() {
			stage.removeAllChildren();
			startframe = new lib.startf()
			startframe.name = "startframe"
			startframe.x = 640
			startframe.y = 360
			stage.addChild(startframe)
			startframe.heb.addEventListener("click", heb);
			startframe.small.addEventListener("click", engS);
			startframe.big.addEventListener("click", engB);
		
		
		
		}
		
		
		function heb() {
			game = [
				["א", 84, 0],
				["ב", 67, 0],
				["ג", 68, 0],
				["ד", 83, 1],
				["ה", 86, 0],
				["ו", 85, 0],
				["ז", 90, 1],
				["ח", 74, 0],
				["ט", 89, 0],
				["י", 72, 0],
				["כ", 70, 0],
				["ל", 75, 0],
				["מ", 78, 0],
				["נ", 66, 0],
				["ס", 88, 1],
				["ע", 71, 0],
				["פ", 80, 1],
				["צ", 77, 0],
				["ק", 69, 0],
				["ר", 82, 0],
				["ש", 65, 1],
				["ת", 188, 1],
				[".", 191, 4],
				[",", 222, 4],
				["'", 87, 4],
				["/", 81, 4],
				["ן", 73, 2],
				["ם", 79, 2],
				["ך", 76, 2],
				["ף", 186, 2],
				["ץ", 190, 2]
		
		
			];
			start();
		}
		function engB() {
			game = [
				["A", 65, 0],
				["B", 66, 0],
				["C", 67, 0],
				["D", 68, 1],
				["E", 69, 1],
				["F", 70, 0],
				["G", 71, 0],
				["H", 72, 0],
				["I", 73, 0],
				["J", 74, 0],
				["K", 75, 0],
				["L", 76, 1],
				["M", 77, 0],
				["N", 78, 0],
				["O", 79, 1],
				["P", 80, 1],
				["Q", 81, 2],
				["R", 82, 0],
				["S", 83, 1],
				["T", 84, 0],
				["U", 85, 0],
				["V", 86, 0],
				["W", 87, 2],
				["X", 88, 1],
				["Y", 89, 0],
				["Z", 90, 1],
				["'", 222, 4],
				[",", 188, 4],
				[".", 190, 4],
				["/", 191, 4]
			]
			start();
		}
		function engS() {
			game = [
				["a", 65, 0],
				["b", 66, 0],
				["c", 67, 0],
				["d", 68, 1],
				["e", 69, 1],
				["f", 70, 0],
				["g", 71, 0],
				["h", 72, 0],
				["i", 73, 0],
				["j", 74, 0],
				["k", 75, 0],
				["l", 76, 1],
				["m", 77, 0],
				["n", 78, 0],
				["o", 79, 1],
				["p", 80, 1],
				["q", 81, 2],
				["r", 82, 0],
				["s", 83, 1],
				["t", 84, 0],
				["u", 85, 0],
				["v", 86, 0],
				["w", 87, 2],
				["x", 88, 1],
				["y", 89, 0],
				["z", 90, 1],
				["'", 222, 4],
				[",", 188, 4],
				[".", 190, 4],
				["/", 191, 4]
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
		
			music = createjs.Sound.play("music");
			music.volume = 0
		
			createjs.Tween.get(music).to({
				volume: 0.5
			}, 2000);
			music.loop = -1;
		
		
			startani.addEventListener("removed", thegame)
		
		
		}
		
		function thegame() {
		
		
			//רקע
			var bg = new lib.bg();
			bg.x = 640
			bg.y = 360
			bg.alpha = 0.3;
			stage.addChildAt(bg, 0);
		
			
		
			letter = 0;
			speed = 4;
			shoot = false;
			level = 1;
			score = 0;
			mytime = 0;
			count = 0;
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
				
				var newl = Math.floor((Math.random() * (game.length)));
				while (game[newl][2] >= level && newl != letter) {
					newl = Math.floor((Math.random() * (game.length)));
				}
				letter=newl;
				meteor = new lib.m();
				meteor.x = 1280;
				meteor.y = 200;
				meteor.name = "meteor";
				stage.addChild(meteor)
		
				var myQ = new createjs.Text(game[letter][0], "bold 50px Alef", "#000033");
				myQ.textAlign = "center";
				myQ.y = -30;
				meteor.addChild(myQ);
			}
		}
		
		window.addEventListener("keydown", check);
		function check(evt) {
			if (shoot == false) {
				if (evt.keyCode == game[letter][1]) {
					var yes = createjs.Sound.play("yes");
					yes.volume = 0.8
		
					keyboard["key" + game[letter][1]].gotoAndStop(2);
					fire = new lib.fire();
					fire.x = 360;
					fire.y = 200;
					stage.addChild(fire)
					shoot = true;
					count++;
					if (count % 10 == 0) {
						level += 1;
						speed += 1;
					}
		
				} else {
					var no = createjs.Sound.play("no");
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
			var musicboom = createjs.Sound.play("boom");
			//musicboom.volume = 1;
		}
		createjs.Ticker.addEventListener("tick", tick);
		function tick() {
			if (meteorgo == true) {
				meteor.x -= speed;
				if (shoot == true) {
					fire.x += 15;
					if (intersect(fire, meteor)) {
						shoot = false;
						stage.removeChild(fire);
						score += 10 + 5 * (level - 1);
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
			theend.newgame.addEventListener("click", startnewgame);
		
		}
		function restart() {
			stage.removeChild(stage.getChildByName("end"));
			stage.removeChild(stage.getChildByName("endani"));
		
			thegame();
		}
		
		function restart() {
			stage.removeChild(stage.getChildByName("end"));
			stage.removeChild(stage.getChildByName("endani"));
		
			thegame();
		}
		
		function startnewgame(){
			music.stop();
			mystart();
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
	manifest: [],
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