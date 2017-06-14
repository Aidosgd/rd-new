// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: _html.ggsk
// Generated Пн 27. мар 03:42:30 2017

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/show__o.png';
		preLoadImg.src=basePath + 'images/show__a.png';
		preLoadImg.src=basePath + 'images/hide__o.png';
		preLoadImg.src=basePath + 'images/hide__a.png';
		preLoadImg.src=basePath + 'images/info__a.png';
		preLoadImg.src=basePath + 'images/___a.png';
		preLoadImg.src=basePath + 'images/zoom_out__a.png';
		preLoadImg.src=basePath + 'images/left0__a.png';
		preLoadImg.src=basePath + 'images/right0__a.png';
		preLoadImg.src=basePath + 'images/up__a.png';
		preLoadImg.src=basePath + 'images/down__a.png';
		preLoadImg.src=basePath + 'images/autorotate__a.png';
		preLoadImg.src=basePath + 'images/fullscreen__a.png';
		preLoadImg.src=basePath + 'images/music_on__a.png';
		preLoadImg.src=basePath + 'images/music_off__a.png';
	}
	
	this.addSkin=function() {
		this._image_1=document.createElement('div');
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=false;
		this._image_1.className='ggskin ggskin_image';
		this._image_1.ggType='image';
		this._image_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-235 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-180 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -235px;';
		hs+='top:  -180px;';
		hs+='width: 473px;';
		hs+='height: 335px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._image_1.setAttribute('style',hs);
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._image_1.ggParameter.sx=0;me._image_1.ggParameter.sy=0;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			if (me.player.transitionsDisabled) {
				me._image_1.style[domTransition]='none';
			} else {
				me._image_1.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._image_1.ggParameter.a="360";
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
		}
		this._close=document.createElement('div');
		this._close.ggId="close";
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=true;
		this._close.className='ggskin ggskin_button';
		this._close.ggType='button';
		hs ='position:absolute;';
		hs+='left: 333px;';
		hs+='top:  291px;';
		hs+='width: 100px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._close.setAttribute('style',hs);
		this._close__img=document.createElement('img');
		this._close__img.className='ggskin ggskin_button';
		this._close__img.setAttribute('src',basePath + 'images/close.png');
		this._close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._close__img.className='ggskin ggskin_button';
		this._close__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._close__img);
		this._close.appendChild(this._close__img);
		this._close.onclick=function () {
			me.player.openUrl("http:\/\/almaty3d.kz\/","_blank");
		}
		this._image_1.appendChild(this._close);
		this.divSkin.appendChild(this._image_1);
		this._show=document.createElement('div');
		this._show.ggId="show";
		this._show.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._show.ggVisible=true;
		this._show.className='ggskin ggskin_button';
		this._show.ggType='button';
		this._show.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-13 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-17 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -17px;';
		hs+='width: 24px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._show.setAttribute('style',hs);
		this._show__img=document.createElement('img');
		this._show__img.className='ggskin ggskin_button';
		this._show__img.setAttribute('src',basePath + 'images/show.png');
		this._show__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._show__img.className='ggskin ggskin_button';
		this._show__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._show__img);
		this._show.appendChild(this._show__img);
		this._show.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.rx=0;me._container_main_control.ggParameter.ry=0;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			if (me.player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.sx=1;me._container_main_control.ggParameter.sy=1;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			me._show.style[domTransition]='none';
			me._show.style.opacity='0';
			me._show.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._hide.style[domTransition]='none';
			} else {
				me._hide.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._hide.style.opacity='1';
			me._hide.style.visibility=me._hide.ggVisible?'inherit':'hidden';
		}
		this._show.onmouseover=function () {
			me._show__img.src=basePath + 'images/show__o.png';
			me._show.ggIsOver=true;
		}
		this._show.onmouseout=function () {
			me._show__img.src=basePath + 'images/show.png';
			me._show.ggIsOver=false;
		}
		this._show.onmousedown=function () {
			me._show__img.src=basePath + 'images/show__a.png';
		}
		this._show.onmouseup=function () {
			if (me._show.ggIsOver) {
				me._show__img.src=basePath + 'images/show__o.png';
			} else {
				me._show__img.src=basePath + 'images/show.png';
			}
		}
		this.divSkin.appendChild(this._show);
		this._hide=document.createElement('div');
		this._hide.ggId="hide";
		this._hide.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide.ggVisible=true;
		this._hide.className='ggskin ggskin_button';
		this._hide.ggType='button';
		this._hide.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-13 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-17 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -17px;';
		hs+='width: 24px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._hide.setAttribute('style',hs);
		this._hide__img=document.createElement('img');
		this._hide__img.className='ggskin ggskin_button';
		this._hide__img.setAttribute('src',basePath + 'images/hide.png');
		this._hide__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._hide__img.className='ggskin ggskin_button';
		this._hide__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._hide__img);
		this._hide.appendChild(this._hide__img);
		this._hide.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.sx=0;me._container_main_control.ggParameter.sy=0;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			if (me.player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_main_control.ggParameter.rx=0;me._container_main_control.ggParameter.ry=80;
			me._container_main_control.style[domTransform]=parameterToTransform(me._container_main_control.ggParameter);
			me._hide.style[domTransition]='none';
			me._hide.style.opacity='0';
			me._hide.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._show.style[domTransition]='none';
			} else {
				me._show.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._show.style.opacity='1';
			me._show.style.visibility=me._show.ggVisible?'inherit':'hidden';
		}
		this._hide.onmouseover=function () {
			me._hide__img.src=basePath + 'images/hide__o.png';
			me._hide.ggIsOver=true;
		}
		this._hide.onmouseout=function () {
			me._hide__img.src=basePath + 'images/hide.png';
			me._hide.ggIsOver=false;
		}
		this._hide.onmousedown=function () {
			me._hide__img.src=basePath + 'images/hide__a.png';
		}
		this._hide.onmouseup=function () {
			if (me._hide.ggIsOver) {
				me._hide__img.src=basePath + 'images/hide__o.png';
			} else {
				me._hide__img.src=basePath + 'images/hide.png';
			}
		}
		this.divSkin.appendChild(this._hide);
		this._container_main_control=document.createElement('div');
		this._container_main_control.ggId="Container main control";
		this._container_main_control.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_main_control.ggVisible=true;
		this._container_main_control.className='ggskin ggskin_container';
		this._container_main_control.ggType='container';
		this._container_main_control.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-192 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-56 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -192px;';
		hs+='top:  -56px;';
		hs+='width: 379px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._container_main_control.setAttribute('style',hs);
		this._container_main_control.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.style.opacity='1';
			me._container_main_control.style.visibility=me._container_main_control.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._glow.style[domTransition]='none';
			} else {
				me._glow.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._glow.style.opacity='1';
			me._glow.style.visibility=me._glow.ggVisible?'inherit':'hidden';
		}
		this._container_main_control.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._container_main_control.style[domTransition]='none';
			} else {
				me._container_main_control.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._container_main_control.style.opacity='0.5';
			me._container_main_control.style.visibility=me._container_main_control.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._glow.style[domTransition]='none';
			} else {
				me._glow.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._glow.style.opacity='0';
			me._glow.style.visibility='hidden';
		}
		this._glow=document.createElement('div');
		this._glow.ggId="glow";
		this._glow.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:1 };
		this._glow.ggVisible=true;
		this._glow.className='ggskin ggskin_image';
		this._glow.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  -13px;';
		hs+='width: 378px;';
		hs+='height: 82px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._glow.ggParameter) + ';';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._glow.setAttribute('style',hs);
		this._glow__img=document.createElement('img');
		this._glow__img.className='ggskin ggskin_image';
		this._glow__img.setAttribute('src',basePath + 'images/glow.png');
		this._glow__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._glow__img.className='ggskin ggskin_image';
		this._glow__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._glow__img);
		this._glow.appendChild(this._glow__img);
		this._container_main_control.appendChild(this._glow);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_button';
		this._info.ggType='button';
		hs ='position:absolute;';
		hs+='left: 41px;';
		hs+='top:  16px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_button';
		this._info__img.setAttribute('src',basePath + 'images/info.png');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._info__img.className='ggskin ggskin_button';
		this._info__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._info__img);
		this._info.appendChild(this._info__img);
		this._info.onclick=function () {
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='inherit';
			me._image_1.ggVisible=true;
			me._image_1.style[domTransition]='none';
			me._image_1.ggParameter.sx=1;me._image_1.ggParameter.sy=1;
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			me._image_1.style[domTransition]='none';
			me._image_1.ggParameter.a="0";
			me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
		}
		this._info.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._info.style[domTransition]='none';
			} else {
				me._info.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=-4;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
			me._tt_fullscreen7.style[domTransition]='none';
			me._tt_fullscreen7.style.visibility='inherit';
			me._tt_fullscreen7.ggVisible=true;
		}
		this._info.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._info.style[domTransition]='none';
			} else {
				me._info.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._info.ggParameter.rx=0;me._info.ggParameter.ry=0;
			me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
			me._tt_fullscreen7.style[domTransition]='none';
			me._tt_fullscreen7.style.visibility='hidden';
			me._tt_fullscreen7.ggVisible=false;
		}
		this._info.onmousedown=function () {
			me._info__img.src=basePath + 'images/info__a.png';
		}
		this._info.onmouseup=function () {
			me._info__img.src=basePath + 'images/info.png';
		}
		this._tt_fullscreen7=document.createElement('div');
		this._tt_fullscreen7__text=document.createElement('div');
		this._tt_fullscreen7.className='ggskin ggskin_textdiv';
		this._tt_fullscreen7.ggTextDiv=this._tt_fullscreen7__text;
		this._tt_fullscreen7.ggId="tt_fullscreen";
		this._tt_fullscreen7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen7.ggVisible=false;
		this._tt_fullscreen7.className='ggskin ggskin_text';
		this._tt_fullscreen7.ggType='text';
		hs ='position:absolute;';
		hs+='left: 64px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen7.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen7__text.setAttribute('style',hs);
		this._tt_fullscreen7.ggTextDiv.innerHTML="<b>\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f<\/b>";
		this._tt_fullscreen7.appendChild(this._tt_fullscreen7__text);
		this._tt_fullscreen_white7=document.createElement('div');
		this._tt_fullscreen_white7__text=document.createElement('div');
		this._tt_fullscreen_white7.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white7.ggTextDiv=this._tt_fullscreen_white7__text;
		this._tt_fullscreen_white7.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white7.ggVisible=true;
		this._tt_fullscreen_white7.className='ggskin ggskin_text';
		this._tt_fullscreen_white7.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white7.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white7__text.setAttribute('style',hs);
		this._tt_fullscreen_white7.ggTextDiv.innerHTML="<b>\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f<\/b>";
		this._tt_fullscreen_white7.appendChild(this._tt_fullscreen_white7__text);
		this._tt_fullscreen7.appendChild(this._tt_fullscreen_white7);
		this._info.appendChild(this._tt_fullscreen7);
		this._container_main_control.appendChild(this._info);
		this.__=document.createElement('div');
		this.__.ggId="\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c";
		this.__.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__.ggVisible=true;
		this.__.className='ggskin ggskin_button';
		this.__.ggType='button';
		hs ='position:absolute;';
		hs+='left: 79px;';
		hs+='top:  16px;';
		hs+='width: 27px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__.setAttribute('style',hs);
		this.____img=document.createElement('img');
		this.____img.className='ggskin ggskin_button';
		this.____img.setAttribute('src',basePath + 'images/_.png');
		this.____img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.____img.className='ggskin ggskin_button';
		this.____img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.____img);
		this.__.appendChild(this.____img);
		this.__.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me.__.ggParameter.rx=0;me.__.ggParameter.ry=-4;
			me.__.style[domTransform]=parameterToTransform(me.__.ggParameter);
			me._tt_fullscreen6.style[domTransition]='none';
			me._tt_fullscreen6.style.visibility='inherit';
			me._tt_fullscreen6.ggVisible=true;
		}
		this.__.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__.style[domTransition]='none';
			} else {
				me.__.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me.__.ggParameter.rx=0;me.__.ggParameter.ry=0;
			me.__.style[domTransform]=parameterToTransform(me.__.ggParameter);
			me._tt_fullscreen6.style[domTransition]='none';
			me._tt_fullscreen6.style.visibility='hidden';
			me._tt_fullscreen6.ggVisible=false;
			me.elementMouseDown['_']=false;
		}
		this.__.onmousedown=function () {
			me.____img.src=basePath + 'images/___a.png';
			me.elementMouseDown['_']=true;
		}
		this.__.onmouseup=function () {
			me.____img.src=basePath + 'images/_.png';
			me.elementMouseDown['_']=false;
		}
		this.__.ontouchend=function () {
			me.elementMouseDown['_']=false;
		}
		this._tt_fullscreen6=document.createElement('div');
		this._tt_fullscreen6__text=document.createElement('div');
		this._tt_fullscreen6.className='ggskin ggskin_textdiv';
		this._tt_fullscreen6.ggTextDiv=this._tt_fullscreen6__text;
		this._tt_fullscreen6.ggId="tt_fullscreen";
		this._tt_fullscreen6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen6.ggVisible=false;
		this._tt_fullscreen6.className='ggskin ggskin_text';
		this._tt_fullscreen6.ggType='text';
		hs ='position:absolute;';
		hs+='left: 26px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen6.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen6__text.setAttribute('style',hs);
		this._tt_fullscreen6.ggTextDiv.innerHTML="<b>\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c<\/b>";
		this._tt_fullscreen6.appendChild(this._tt_fullscreen6__text);
		this._tt_fullscreen_white6=document.createElement('div');
		this._tt_fullscreen_white6__text=document.createElement('div');
		this._tt_fullscreen_white6.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white6.ggTextDiv=this._tt_fullscreen_white6__text;
		this._tt_fullscreen_white6.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white6.ggVisible=true;
		this._tt_fullscreen_white6.className='ggskin ggskin_text';
		this._tt_fullscreen_white6.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white6.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white6__text.setAttribute('style',hs);
		this._tt_fullscreen_white6.ggTextDiv.innerHTML="<b>\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u044c<\/b>";
		this._tt_fullscreen_white6.appendChild(this._tt_fullscreen_white6__text);
		this._tt_fullscreen6.appendChild(this._tt_fullscreen_white6);
		this.__.appendChild(this._tt_fullscreen6);
		this._container_main_control.appendChild(this.__);
		this._zoom_out=document.createElement('div');
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button';
		this._zoom_out.ggType='button';
		hs ='position:absolute;';
		hs+='left: 109px;';
		hs+='top:  17px;';
		hs+='width: 25px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._zoom_out.style[domTransition]='none';
			} else {
				me._zoom_out.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_out.ggParameter.rx=0;me._zoom_out.ggParameter.ry=-4;
			me._zoom_out.style[domTransform]=parameterToTransform(me._zoom_out.ggParameter);
			me._tt_fullscreen5.style[domTransition]='none';
			me._tt_fullscreen5.style.visibility='inherit';
			me._tt_fullscreen5.ggVisible=true;
		}
		this._zoom_out.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._zoom_out.style[domTransition]='none';
			} else {
				me._zoom_out.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._zoom_out.ggParameter.rx=0;me._zoom_out.ggParameter.ry=0;
			me._zoom_out.style[domTransform]=parameterToTransform(me._zoom_out.ggParameter);
			me._tt_fullscreen5.style[domTransition]='none';
			me._tt_fullscreen5.style.visibility='hidden';
			me._tt_fullscreen5.ggVisible=false;
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out__a.png';
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out.png';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._tt_fullscreen5=document.createElement('div');
		this._tt_fullscreen5__text=document.createElement('div');
		this._tt_fullscreen5.className='ggskin ggskin_textdiv';
		this._tt_fullscreen5.ggTextDiv=this._tt_fullscreen5__text;
		this._tt_fullscreen5.ggId="tt_fullscreen";
		this._tt_fullscreen5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen5.ggVisible=false;
		this._tt_fullscreen5.className='ggskin ggskin_text';
		this._tt_fullscreen5.ggType='text';
		hs ='position:absolute;';
		hs+='left: -4px;';
		hs+='top:  -29px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen5.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen5__text.setAttribute('style',hs);
		this._tt_fullscreen5.ggTextDiv.innerHTML="<b>\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u044c<\/b>";
		this._tt_fullscreen5.appendChild(this._tt_fullscreen5__text);
		this._tt_fullscreen_white5=document.createElement('div');
		this._tt_fullscreen_white5__text=document.createElement('div');
		this._tt_fullscreen_white5.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white5.ggTextDiv=this._tt_fullscreen_white5__text;
		this._tt_fullscreen_white5.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white5.ggVisible=true;
		this._tt_fullscreen_white5.className='ggskin ggskin_text';
		this._tt_fullscreen_white5.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white5.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white5__text.setAttribute('style',hs);
		this._tt_fullscreen_white5.ggTextDiv.innerHTML="<b>\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u044c<\/b>";
		this._tt_fullscreen_white5.appendChild(this._tt_fullscreen_white5__text);
		this._tt_fullscreen5.appendChild(this._tt_fullscreen_white5);
		this._zoom_out.appendChild(this._tt_fullscreen5);
		this._container_main_control.appendChild(this._zoom_out);
		this._left0=document.createElement('div');
		this._left0.ggId="left";
		this._left0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left0.ggVisible=true;
		this._left0.className='ggskin ggskin_button';
		this._left0.ggType='button';
		hs ='position:absolute;';
		hs+='left: 136px;';
		hs+='top:  16px;';
		hs+='width: 25px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left0.setAttribute('style',hs);
		this._left0__img=document.createElement('img');
		this._left0__img.className='ggskin ggskin_button';
		this._left0__img.setAttribute('src',basePath + 'images/left0.png');
		this._left0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._left0__img.className='ggskin ggskin_button';
		this._left0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left0__img);
		this._left0.appendChild(this._left0__img);
		this._left0.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._left0.style[domTransition]='none';
			} else {
				me._left0.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._left0.ggParameter.rx=0;me._left0.ggParameter.ry=-4;
			me._left0.style[domTransform]=parameterToTransform(me._left0.ggParameter);
			me._tt_fullscreen4.style[domTransition]='none';
			me._tt_fullscreen4.style.visibility='inherit';
			me._tt_fullscreen4.ggVisible=true;
		}
		this._left0.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._left0.style[domTransition]='none';
			} else {
				me._left0.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._left0.ggParameter.rx=0;me._left0.ggParameter.ry=0;
			me._left0.style[domTransform]=parameterToTransform(me._left0.ggParameter);
			me._tt_fullscreen4.style[domTransition]='none';
			me._tt_fullscreen4.style.visibility='hidden';
			me._tt_fullscreen4.ggVisible=false;
			me.elementMouseDown['left0']=false;
		}
		this._left0.onmousedown=function () {
			me._left0__img.src=basePath + 'images/left0__a.png';
			me.elementMouseDown['left0']=true;
		}
		this._left0.onmouseup=function () {
			me._left0__img.src=basePath + 'images/left0.png';
			me.elementMouseDown['left0']=false;
		}
		this._left0.ontouchend=function () {
			me.elementMouseDown['left0']=false;
		}
		this._tt_fullscreen4=document.createElement('div');
		this._tt_fullscreen4__text=document.createElement('div');
		this._tt_fullscreen4.className='ggskin ggskin_textdiv';
		this._tt_fullscreen4.ggTextDiv=this._tt_fullscreen4__text;
		this._tt_fullscreen4.ggId="tt_fullscreen";
		this._tt_fullscreen4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen4.ggVisible=false;
		this._tt_fullscreen4.className='ggskin ggskin_text';
		this._tt_fullscreen4.ggType='text';
		hs ='position:absolute;';
		hs+='left: -31px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen4.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen4__text.setAttribute('style',hs);
		this._tt_fullscreen4.ggTextDiv.innerHTML="<b>\u0412\u043b\u0435\u0432\u043e<\/b>";
		this._tt_fullscreen4.appendChild(this._tt_fullscreen4__text);
		this._tt_fullscreen_white4=document.createElement('div');
		this._tt_fullscreen_white4__text=document.createElement('div');
		this._tt_fullscreen_white4.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white4.ggTextDiv=this._tt_fullscreen_white4__text;
		this._tt_fullscreen_white4.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white4.ggVisible=true;
		this._tt_fullscreen_white4.className='ggskin ggskin_text';
		this._tt_fullscreen_white4.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white4.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white4__text.setAttribute('style',hs);
		this._tt_fullscreen_white4.ggTextDiv.innerHTML="<b>\u0412\u043b\u0435\u0432\u043e<\/b>";
		this._tt_fullscreen_white4.appendChild(this._tt_fullscreen_white4__text);
		this._tt_fullscreen4.appendChild(this._tt_fullscreen_white4);
		this._left0.appendChild(this._tt_fullscreen4);
		this._container_main_control.appendChild(this._left0);
		this._right0=document.createElement('div');
		this._right0.ggId="right";
		this._right0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right0.ggVisible=true;
		this._right0.className='ggskin ggskin_button';
		this._right0.ggType='button';
		hs ='position:absolute;';
		hs+='left: 164px;';
		hs+='top:  16px;';
		hs+='width: 23px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right0.setAttribute('style',hs);
		this._right0__img=document.createElement('img');
		this._right0__img.className='ggskin ggskin_button';
		this._right0__img.setAttribute('src',basePath + 'images/right0.png');
		this._right0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._right0__img.className='ggskin ggskin_button';
		this._right0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right0__img);
		this._right0.appendChild(this._right0__img);
		this._right0.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._right0.style[domTransition]='none';
			} else {
				me._right0.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._right0.ggParameter.rx=0;me._right0.ggParameter.ry=-4;
			me._right0.style[domTransform]=parameterToTransform(me._right0.ggParameter);
			me._tt_fullscreen3.style[domTransition]='none';
			me._tt_fullscreen3.style.visibility='inherit';
			me._tt_fullscreen3.ggVisible=true;
		}
		this._right0.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._right0.style[domTransition]='none';
			} else {
				me._right0.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._right0.ggParameter.rx=0;me._right0.ggParameter.ry=0;
			me._right0.style[domTransform]=parameterToTransform(me._right0.ggParameter);
			me._tt_fullscreen3.style[domTransition]='none';
			me._tt_fullscreen3.style.visibility='hidden';
			me._tt_fullscreen3.ggVisible=false;
			me.elementMouseDown['right0']=false;
		}
		this._right0.onmousedown=function () {
			me._right0__img.src=basePath + 'images/right0__a.png';
			me.elementMouseDown['right0']=true;
		}
		this._right0.onmouseup=function () {
			me._right0__img.src=basePath + 'images/right0.png';
			me.elementMouseDown['right0']=false;
		}
		this._right0.ontouchend=function () {
			me.elementMouseDown['right0']=false;
		}
		this._tt_fullscreen3=document.createElement('div');
		this._tt_fullscreen3__text=document.createElement('div');
		this._tt_fullscreen3.className='ggskin ggskin_textdiv';
		this._tt_fullscreen3.ggTextDiv=this._tt_fullscreen3__text;
		this._tt_fullscreen3.ggId="tt_fullscreen";
		this._tt_fullscreen3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen3.ggVisible=false;
		this._tt_fullscreen3.className='ggskin ggskin_text';
		this._tt_fullscreen3.ggType='text';
		hs ='position:absolute;';
		hs+='left: -59px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen3__text.setAttribute('style',hs);
		this._tt_fullscreen3.ggTextDiv.innerHTML="<b>\u0412\u043f\u0440\u0430\u0432\u043e<\/b>";
		this._tt_fullscreen3.appendChild(this._tt_fullscreen3__text);
		this._tt_fullscreen_white3=document.createElement('div');
		this._tt_fullscreen_white3__text=document.createElement('div');
		this._tt_fullscreen_white3.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white3.ggTextDiv=this._tt_fullscreen_white3__text;
		this._tt_fullscreen_white3.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white3.ggVisible=true;
		this._tt_fullscreen_white3.className='ggskin ggskin_text';
		this._tt_fullscreen_white3.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white3__text.setAttribute('style',hs);
		this._tt_fullscreen_white3.ggTextDiv.innerHTML="<b>\u0412\u043f\u0440\u0430\u0432\u043e<\/b>";
		this._tt_fullscreen_white3.appendChild(this._tt_fullscreen_white3__text);
		this._tt_fullscreen3.appendChild(this._tt_fullscreen_white3);
		this._right0.appendChild(this._tt_fullscreen3);
		this._container_main_control.appendChild(this._right0);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button';
		this._up.ggType='button';
		hs ='position:absolute;';
		hs+='left: 195px;';
		hs+='top:  16px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up.style[domTransition]='none';
			} else {
				me._up.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._up.ggParameter.rx=0;me._up.ggParameter.ry=-4;
			me._up.style[domTransform]=parameterToTransform(me._up.ggParameter);
			me._tt_fullscreen2.style[domTransition]='none';
			me._tt_fullscreen2.style.visibility='inherit';
			me._tt_fullscreen2.ggVisible=true;
		}
		this._up.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up.style[domTransition]='none';
			} else {
				me._up.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._up.ggParameter.rx=0;me._up.ggParameter.ry=0;
			me._up.style[domTransform]=parameterToTransform(me._up.ggParameter);
			me._tt_fullscreen2.style[domTransition]='none';
			me._tt_fullscreen2.style.visibility='hidden';
			me._tt_fullscreen2.ggVisible=false;
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me._up__img.src=basePath + 'images/up__a.png';
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._tt_fullscreen2=document.createElement('div');
		this._tt_fullscreen2__text=document.createElement('div');
		this._tt_fullscreen2.className='ggskin ggskin_textdiv';
		this._tt_fullscreen2.ggTextDiv=this._tt_fullscreen2__text;
		this._tt_fullscreen2.ggId="tt_fullscreen";
		this._tt_fullscreen2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen2.ggVisible=false;
		this._tt_fullscreen2.className='ggskin ggskin_text';
		this._tt_fullscreen2.ggType='text';
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen2__text.setAttribute('style',hs);
		this._tt_fullscreen2.ggTextDiv.innerHTML="<b>\u0412\u0432\u0435\u0440\u0445<\/b>";
		this._tt_fullscreen2.appendChild(this._tt_fullscreen2__text);
		this._tt_fullscreen_white2=document.createElement('div');
		this._tt_fullscreen_white2__text=document.createElement('div');
		this._tt_fullscreen_white2.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white2.ggTextDiv=this._tt_fullscreen_white2__text;
		this._tt_fullscreen_white2.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white2.ggVisible=true;
		this._tt_fullscreen_white2.className='ggskin ggskin_text';
		this._tt_fullscreen_white2.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white2.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white2__text.setAttribute('style',hs);
		this._tt_fullscreen_white2.ggTextDiv.innerHTML="<b>\u0412\u0432\u0435\u0440\u0445<\/b>";
		this._tt_fullscreen_white2.appendChild(this._tt_fullscreen_white2__text);
		this._tt_fullscreen2.appendChild(this._tt_fullscreen_white2);
		this._up.appendChild(this._tt_fullscreen2);
		this._container_main_control.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button';
		this._down.ggType='button';
		hs ='position:absolute;';
		hs+='left: 232px;';
		hs+='top:  16px;';
		hs+='width: 29px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._down.style[domTransition]='none';
			} else {
				me._down.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._down.ggParameter.rx=0;me._down.ggParameter.ry=-4;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			me._tt_fullscreen1.style[domTransition]='none';
			me._tt_fullscreen1.style.visibility='inherit';
			me._tt_fullscreen1.ggVisible=true;
		}
		this._down.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._down.style[domTransition]='none';
			} else {
				me._down.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._down.ggParameter.rx=0;me._down.ggParameter.ry=0;
			me._down.style[domTransform]=parameterToTransform(me._down.ggParameter);
			me._tt_fullscreen1.style[domTransition]='none';
			me._tt_fullscreen1.style.visibility='hidden';
			me._tt_fullscreen1.ggVisible=false;
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me._down__img.src=basePath + 'images/down__a.png';
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._tt_fullscreen1=document.createElement('div');
		this._tt_fullscreen1__text=document.createElement('div');
		this._tt_fullscreen1.className='ggskin ggskin_textdiv';
		this._tt_fullscreen1.ggTextDiv=this._tt_fullscreen1__text;
		this._tt_fullscreen1.ggId="tt_fullscreen";
		this._tt_fullscreen1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen1.ggVisible=false;
		this._tt_fullscreen1.className='ggskin ggskin_text';
		this._tt_fullscreen1.ggType='text';
		hs ='position:absolute;';
		hs+='left: -127px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen1__text.setAttribute('style',hs);
		this._tt_fullscreen1.ggTextDiv.innerHTML="<b>\u0412\u043d\u0438\u0437<\/b>";
		this._tt_fullscreen1.appendChild(this._tt_fullscreen1__text);
		this._tt_fullscreen_white1=document.createElement('div');
		this._tt_fullscreen_white1__text=document.createElement('div');
		this._tt_fullscreen_white1.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white1.ggTextDiv=this._tt_fullscreen_white1__text;
		this._tt_fullscreen_white1.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white1.ggVisible=true;
		this._tt_fullscreen_white1.className='ggskin ggskin_text';
		this._tt_fullscreen_white1.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white1__text.setAttribute('style',hs);
		this._tt_fullscreen_white1.ggTextDiv.innerHTML="<b>\u0412\u043d\u0438\u0437<\/b>";
		this._tt_fullscreen_white1.appendChild(this._tt_fullscreen_white1__text);
		this._tt_fullscreen1.appendChild(this._tt_fullscreen_white1);
		this._down.appendChild(this._tt_fullscreen1);
		this._container_main_control.appendChild(this._down);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_button';
		this._autorotate.ggType='button';
		hs ='position:absolute;';
		hs+='left: 265px;';
		hs+='top:  16px;';
		hs+='width: 34px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_button';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._autorotate__img.className='ggskin ggskin_button';
		this._autorotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._autorotate__img);
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._autorotate.style[domTransition]='none';
			} else {
				me._autorotate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._autorotate.ggParameter.rx=0;me._autorotate.ggParameter.ry=-4;
			me._autorotate.style[domTransform]=parameterToTransform(me._autorotate.ggParameter);
			me._tt_fullscreen0.style[domTransition]='none';
			me._tt_fullscreen0.style.visibility='inherit';
			me._tt_fullscreen0.ggVisible=true;
		}
		this._autorotate.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._autorotate.style[domTransition]='none';
			} else {
				me._autorotate.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._autorotate.ggParameter.rx=0;me._autorotate.ggParameter.ry=0;
			me._autorotate.style[domTransform]=parameterToTransform(me._autorotate.ggParameter);
			me._tt_fullscreen0.style[domTransition]='none';
			me._tt_fullscreen0.style.visibility='hidden';
			me._tt_fullscreen0.ggVisible=false;
		}
		this._autorotate.onmousedown=function () {
			me._autorotate__img.src=basePath + 'images/autorotate__a.png';
		}
		this._autorotate.onmouseup=function () {
			me._autorotate__img.src=basePath + 'images/autorotate.png';
		}
		this._tt_fullscreen0=document.createElement('div');
		this._tt_fullscreen0__text=document.createElement('div');
		this._tt_fullscreen0.className='ggskin ggskin_textdiv';
		this._tt_fullscreen0.ggTextDiv=this._tt_fullscreen0__text;
		this._tt_fullscreen0.ggId="tt_fullscreen";
		this._tt_fullscreen0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen0.ggVisible=false;
		this._tt_fullscreen0.className='ggskin ggskin_text';
		this._tt_fullscreen0.ggType='text';
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen0.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen0__text.setAttribute('style',hs);
		this._tt_fullscreen0.ggTextDiv.innerHTML="<b>\u0410\u0432\u0442\u043e\u0440\u043e\u0442\u0430\u0446\u0438\u044f<\/b>";
		this._tt_fullscreen0.appendChild(this._tt_fullscreen0__text);
		this._tt_fullscreen_white0=document.createElement('div');
		this._tt_fullscreen_white0__text=document.createElement('div');
		this._tt_fullscreen_white0.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white0.ggTextDiv=this._tt_fullscreen_white0__text;
		this._tt_fullscreen_white0.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white0.ggVisible=true;
		this._tt_fullscreen_white0.className='ggskin ggskin_text';
		this._tt_fullscreen_white0.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white0.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white0__text.setAttribute('style',hs);
		this._tt_fullscreen_white0.ggTextDiv.innerHTML="<b>\u0410\u0432\u0442\u043e\u0440\u043e\u0442\u0430\u0446\u0438\u044f<\/b>";
		this._tt_fullscreen_white0.appendChild(this._tt_fullscreen_white0__text);
		this._tt_fullscreen0.appendChild(this._tt_fullscreen_white0);
		this._autorotate.appendChild(this._tt_fullscreen0);
		this._container_main_control.appendChild(this._autorotate);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_button';
		this._fullscreen.ggType='button';
		hs ='position:absolute;';
		hs+='left: 303px;';
		hs+='top:  16px;';
		hs+='width: 34px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.rx=0;me._fullscreen.ggParameter.ry=-4;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='inherit';
			me._tt_fullscreen.ggVisible=true;
		}
		this._fullscreen.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._fullscreen.style[domTransition]='none';
			} else {
				me._fullscreen.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._fullscreen.ggParameter.rx=0;me._fullscreen.ggParameter.ry=0;
			me._fullscreen.style[domTransform]=parameterToTransform(me._fullscreen.ggParameter);
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
		}
		this._fullscreen.onmousedown=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__a.png';
		}
		this._fullscreen.onmouseup=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		hs ='position:absolute;';
		hs+='left: -198px;';
		hs+='top:  -28px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen.ggTextDiv.innerHTML="<b>\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d<\/b>";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text';
		this._tt_fullscreen_white.ggType='text';
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  1px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white.ggTextDiv.innerHTML="<b>\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d<\/b>";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._container_main_control.appendChild(this._fullscreen);
		this._music_on=document.createElement('div');
		this._music_on.ggId="music on";
		this._music_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._music_on.ggVisible=true;
		this._music_on.className='ggskin ggskin_button';
		this._music_on.ggType='button';
		hs ='position:absolute;';
		hs+='left: 8px;';
		hs+='top:  16px;';
		hs+='width: 25px;';
		hs+='height: 29px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._music_on.setAttribute('style',hs);
		this._music_on__img=document.createElement('img');
		this._music_on__img.className='ggskin ggskin_button';
		this._music_on__img.setAttribute('src',basePath + 'images/music_on.png');
		this._music_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._music_on__img.className='ggskin ggskin_button';
		this._music_on__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._music_on__img);
		this._music_on.appendChild(this._music_on__img);
		this._music_on.onclick=function () {
			me.player.playSound("_background","3");
			me._music_on.style[domTransition]='none';
			me._music_on.style.visibility='hidden';
			me._music_on.ggVisible=false;
			me._music_off.style[domTransition]='none';
			me._music_off.style.visibility='inherit';
			me._music_off.ggVisible=true;
		}
		this._music_on.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._music_on.style[domTransition]='none';
			} else {
				me._music_on.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._music_on.ggParameter.rx=0;me._music_on.ggParameter.ry=-4;
			me._music_on.style[domTransform]=parameterToTransform(me._music_on.ggParameter);
		}
		this._music_on.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._music_on.style[domTransition]='none';
			} else {
				me._music_on.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._music_on.ggParameter.rx=0;me._music_on.ggParameter.ry=0;
			me._music_on.style[domTransform]=parameterToTransform(me._music_on.ggParameter);
		}
		this._music_on.onmousedown=function () {
			me._music_on__img.src=basePath + 'images/music_on__a.png';
		}
		this._music_on.onmouseup=function () {
			me._music_on__img.src=basePath + 'images/music_on.png';
		}
		this._container_main_control.appendChild(this._music_on);
		this._music_off=document.createElement('div');
		this._music_off.ggId="music off";
		this._music_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._music_off.ggVisible=true;
		this._music_off.className='ggskin ggskin_button';
		this._music_off.ggType='button';
		hs ='position:absolute;';
		hs+='left: 8px;';
		hs+='top:  16px;';
		hs+='width: 25px;';
		hs+='height: 29px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._music_off.setAttribute('style',hs);
		this._music_off__img=document.createElement('img');
		this._music_off__img.className='ggskin ggskin_button';
		this._music_off__img.setAttribute('src',basePath + 'images/music_off.png');
		this._music_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._music_off__img.className='ggskin ggskin_button';
		this._music_off__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._music_off__img);
		this._music_off.appendChild(this._music_off__img);
		this._music_off.onclick=function () {
			me.player.stopSound("_background");
			me._music_off.style[domTransition]='none';
			me._music_off.style.visibility='hidden';
			me._music_off.ggVisible=false;
			me._music_on.style[domTransition]='none';
			me._music_on.style.visibility='inherit';
			me._music_on.ggVisible=true;
		}
		this._music_off.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._music_off.style[domTransition]='none';
			} else {
				me._music_off.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._music_off.ggParameter.rx=0;me._music_off.ggParameter.ry=-4;
			me._music_off.style[domTransform]=parameterToTransform(me._music_off.ggParameter);
			me._volume_controller.style[domTransition]='none';
			me._volume_controller.style.opacity='1';
			me._volume_controller.style.visibility=me._volume_controller.ggVisible?'inherit':'hidden';
		}
		this._music_off.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._music_off.style[domTransition]='none';
			} else {
				me._music_off.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._music_off.ggParameter.rx=0;me._music_off.ggParameter.ry=0;
			me._music_off.style[domTransform]=parameterToTransform(me._music_off.ggParameter);
			if (me.player.transitionsDisabled) {
				me._volume_controller.style[domTransition]='none';
			} else {
				me._volume_controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._volume_controller.style.opacity='0';
			me._volume_controller.style.visibility='hidden';
		}
		this._music_off.onmousedown=function () {
			me._music_off__img.src=basePath + 'images/music_off__a.png';
		}
		this._music_off.onmouseup=function () {
			me._music_off__img.src=basePath + 'images/music_off.png';
		}
		this._container_main_control.appendChild(this._music_off);
		this._volume_controller=document.createElement('div');
		this._volume_controller.ggId="volume controller";
		this._volume_controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._volume_controller.ggVisible=true;
		this._volume_controller.className='ggskin ggskin_container';
		this._volume_controller.ggType='container';
		hs ='position:absolute;';
		hs+='left: -9px;';
		hs+='top:  -16px;';
		hs+='width: 62px;';
		hs+='height: 24px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._volume_controller.setAttribute('style',hs);
		this._volume_controller.onmouseover=function () {
			me._volume_controller.style[domTransition]='none';
			me._volume_controller.style.opacity='1';
			me._volume_controller.style.visibility=me._volume_controller.ggVisible?'inherit':'hidden';
			me._music_off.style[domTransition]='none';
			me._music_off.ggParameter.rx=0;me._music_off.ggParameter.ry=-4;
			me._music_off.style[domTransform]=parameterToTransform(me._music_off.ggParameter);
		}
		this._volume_controller.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._volume_controller.style[domTransition]='none';
			} else {
				me._volume_controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._volume_controller.style.opacity='0';
			me._volume_controller.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._music_off.style[domTransition]='none';
			} else {
				me._music_off.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._music_off.ggParameter.rx=0;me._music_off.ggParameter.ry=0;
			me._music_off.style[domTransform]=parameterToTransform(me._music_off.ggParameter);
		}
		this._bkgd=document.createElement('div');
		this._bkgd.ggId="bkgd";
		this._bkgd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bkgd.ggVisible=true;
		this._bkgd.className='ggskin ggskin_rectangle';
		this._bkgd.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  3px;';
		hs+='width: 55px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #f1f1f1;';
		hs+='border: 0px solid #000000;';
		this._bkgd.setAttribute('style',hs);
		this._volume_controller.appendChild(this._bkgd);
		this._green_bar=document.createElement('div');
		this._green_bar.ggId="green bar";
		this._green_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._green_bar.ggVisible=true;
		this._green_bar.className='ggskin ggskin_rectangle';
		this._green_bar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 53px;';
		hs+='top:  4px;';
		hs+='width: 6px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #00ff00;';
		hs+='border: 0px solid #000000;';
		this._green_bar.setAttribute('style',hs);
		this._volume_controller.appendChild(this._green_bar);
		this._vol_0=document.createElement('div');
		this._vol_0.ggId="vol 0";
		this._vol_0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_0.ggVisible=true;
		this._vol_0.className='ggskin ggskin_button';
		this._vol_0.ggType='button';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 6px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_0.setAttribute('style',hs);
		this._vol_0__img=document.createElement('img');
		this._vol_0__img.className='ggskin ggskin_button';
		this._vol_0__img.setAttribute('src',basePath + 'images/vol_0.png');
		this._vol_0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_0__img.className='ggskin ggskin_button';
		this._vol_0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_0__img);
		this._vol_0.appendChild(this._vol_0__img);
		this._vol_0.onclick=function () {
			me.player.setVolume("_main",0);
		}
		this._vol_0.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-49;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='inherit';
			me._txt_0.ggVisible=true;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_0);
		this._vol_1=document.createElement('div');
		this._vol_1.ggId="vol 1";
		this._vol_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_1.ggVisible=true;
		this._vol_1.className='ggskin ggskin_button';
		this._vol_1.ggType='button';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_1.setAttribute('style',hs);
		this._vol_1__img=document.createElement('img');
		this._vol_1__img.className='ggskin ggskin_button';
		this._vol_1__img.setAttribute('src',basePath + 'images/vol_1.png');
		this._vol_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_1__img.className='ggskin ggskin_button';
		this._vol_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_1__img);
		this._vol_1.appendChild(this._vol_1__img);
		this._vol_1.onclick=function () {
			me.player.setVolume("_main",0.1);
		}
		this._vol_1.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-44;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='inherit';
			me._txt_1.ggVisible=true;
		}
		this._volume_controller.appendChild(this._vol_1);
		this._vol_2=document.createElement('div');
		this._vol_2.ggId="vol 2";
		this._vol_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_2.ggVisible=true;
		this._vol_2.className='ggskin ggskin_button';
		this._vol_2.ggType='button';
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_2.setAttribute('style',hs);
		this._vol_2__img=document.createElement('img');
		this._vol_2__img.className='ggskin ggskin_button';
		this._vol_2__img.setAttribute('src',basePath + 'images/vol_2.png');
		this._vol_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_2__img.className='ggskin ggskin_button';
		this._vol_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_2__img);
		this._vol_2.appendChild(this._vol_2__img);
		this._vol_2.onclick=function () {
			me.player.setVolume("_main",0.2);
		}
		this._vol_2.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-39;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='inherit';
			me._txt_2.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_2);
		this._vol_3=document.createElement('div');
		this._vol_3.ggId="vol 3";
		this._vol_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_3.ggVisible=true;
		this._vol_3.className='ggskin ggskin_button';
		this._vol_3.ggType='button';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_3.setAttribute('style',hs);
		this._vol_3__img=document.createElement('img');
		this._vol_3__img.className='ggskin ggskin_button';
		this._vol_3__img.setAttribute('src',basePath + 'images/vol_3.png');
		this._vol_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_3__img.className='ggskin ggskin_button';
		this._vol_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_3__img);
		this._vol_3.appendChild(this._vol_3__img);
		this._vol_3.onclick=function () {
			me.player.setVolume("_main",0.3);
		}
		this._vol_3.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-34;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='inherit';
			me._txt_3.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_3);
		this._vol_4=document.createElement('div');
		this._vol_4.ggId="vol 4";
		this._vol_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_4.ggVisible=true;
		this._vol_4.className='ggskin ggskin_button';
		this._vol_4.ggType='button';
		hs ='position:absolute;';
		hs+='left: 25px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_4.setAttribute('style',hs);
		this._vol_4__img=document.createElement('img');
		this._vol_4__img.className='ggskin ggskin_button';
		this._vol_4__img.setAttribute('src',basePath + 'images/vol_4.png');
		this._vol_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_4__img.className='ggskin ggskin_button';
		this._vol_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_4__img);
		this._vol_4.appendChild(this._vol_4__img);
		this._vol_4.onclick=function () {
			me.player.setVolume("_main",0.4);
		}
		this._vol_4.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-29;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='inherit';
			me._txt_4.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_4);
		this._vol_5=document.createElement('div');
		this._vol_5.ggId="vol 5";
		this._vol_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_5.ggVisible=true;
		this._vol_5.className='ggskin ggskin_button';
		this._vol_5.ggType='button';
		hs ='position:absolute;';
		hs+='left: 30px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_5.setAttribute('style',hs);
		this._vol_5__img=document.createElement('img');
		this._vol_5__img.className='ggskin ggskin_button';
		this._vol_5__img.setAttribute('src',basePath + 'images/vol_5.png');
		this._vol_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_5__img.className='ggskin ggskin_button';
		this._vol_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_5__img);
		this._vol_5.appendChild(this._vol_5__img);
		this._vol_5.onclick=function () {
			me.player.setVolume("_main",0.5);
		}
		this._vol_5.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-24;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='inherit';
			me._txt_5.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_5);
		this._vol_6=document.createElement('div');
		this._vol_6.ggId="vol 6";
		this._vol_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_6.ggVisible=true;
		this._vol_6.className='ggskin ggskin_button';
		this._vol_6.ggType='button';
		hs ='position:absolute;';
		hs+='left: 35px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_6.setAttribute('style',hs);
		this._vol_6__img=document.createElement('img');
		this._vol_6__img.className='ggskin ggskin_button';
		this._vol_6__img.setAttribute('src',basePath + 'images/vol_6.png');
		this._vol_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_6__img.className='ggskin ggskin_button';
		this._vol_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_6__img);
		this._vol_6.appendChild(this._vol_6__img);
		this._vol_6.onclick=function () {
			me.player.setVolume("_main",0.6);
		}
		this._vol_6.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-19;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='inherit';
			me._txt_6.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_6);
		this._vol_7=document.createElement('div');
		this._vol_7.ggId="vol 7";
		this._vol_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_7.ggVisible=true;
		this._vol_7.className='ggskin ggskin_button';
		this._vol_7.ggType='button';
		hs ='position:absolute;';
		hs+='left: 40px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_7.setAttribute('style',hs);
		this._vol_7__img=document.createElement('img');
		this._vol_7__img.className='ggskin ggskin_button';
		this._vol_7__img.setAttribute('src',basePath + 'images/vol_7.png');
		this._vol_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_7__img.className='ggskin ggskin_button';
		this._vol_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_7__img);
		this._vol_7.appendChild(this._vol_7__img);
		this._vol_7.onclick=function () {
			me.player.setVolume("_main",0.7);
		}
		this._vol_7.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-14;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='inherit';
			me._txt_7.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_7);
		this._vol_8=document.createElement('div');
		this._vol_8.ggId="vol 8";
		this._vol_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_8.ggVisible=true;
		this._vol_8.className='ggskin ggskin_button';
		this._vol_8.ggType='button';
		hs ='position:absolute;';
		hs+='left: 45px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_8.setAttribute('style',hs);
		this._vol_8__img=document.createElement('img');
		this._vol_8__img.className='ggskin ggskin_button';
		this._vol_8__img.setAttribute('src',basePath + 'images/vol_8.png');
		this._vol_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_8__img.className='ggskin ggskin_button';
		this._vol_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_8__img);
		this._vol_8.appendChild(this._vol_8__img);
		this._vol_8.onclick=function () {
			me.player.setVolume("_main",0.8);
		}
		this._vol_8.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-9;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='inherit';
			me._txt_8.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_8);
		this._vol_9=document.createElement('div');
		this._vol_9.ggId="vol 9";
		this._vol_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_9.ggVisible=true;
		this._vol_9.className='ggskin ggskin_button';
		this._vol_9.ggType='button';
		hs ='position:absolute;';
		hs+='left: 50px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_9.setAttribute('style',hs);
		this._vol_9__img=document.createElement('img');
		this._vol_9__img.className='ggskin ggskin_button';
		this._vol_9__img.setAttribute('src',basePath + 'images/vol_9.png');
		this._vol_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_9__img.className='ggskin ggskin_button';
		this._vol_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_9__img);
		this._vol_9.appendChild(this._vol_9__img);
		this._vol_9.onclick=function () {
			me.player.setVolume("_main",0.9);
		}
		this._vol_9.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=-4;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='inherit';
			me._txt_9.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='hidden';
			me._txt_10.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_9);
		this._vol_10=document.createElement('div');
		this._vol_10.ggId="vol 10";
		this._vol_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vol_10.ggVisible=true;
		this._vol_10.className='ggskin ggskin_button';
		this._vol_10.ggType='button';
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  3px;';
		hs+='width: 5px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vol_10.setAttribute('style',hs);
		this._vol_10__img=document.createElement('img');
		this._vol_10__img.className='ggskin ggskin_button';
		this._vol_10__img.setAttribute('src',basePath + 'images/vol_10.png');
		this._vol_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vol_10__img.className='ggskin ggskin_button';
		this._vol_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vol_10__img);
		this._vol_10.appendChild(this._vol_10__img);
		this._vol_10.onclick=function () {
			me.player.setVolume("_main",1);
		}
		this._vol_10.onmouseover=function () {
			me._green_bar.style[domTransition]='none';
			me._green_bar.style.visibility='inherit';
			me._green_bar.ggVisible=true;
			me._green_bar.style[domTransition]='none';
			me._green_bar.ggParameter.rx=1;me._green_bar.ggParameter.ry=0;
			me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
			me._txt_10.style[domTransition]='none';
			me._txt_10.style.visibility='inherit';
			me._txt_10.ggVisible=true;
			me._txt_0.style[domTransition]='none';
			me._txt_0.style.visibility='hidden';
			me._txt_0.ggVisible=false;
			me._txt_1.style[domTransition]='none';
			me._txt_1.style.visibility='hidden';
			me._txt_1.ggVisible=false;
			me._txt_2.style[domTransition]='none';
			me._txt_2.style.visibility='hidden';
			me._txt_2.ggVisible=false;
			me._txt_3.style[domTransition]='none';
			me._txt_3.style.visibility='hidden';
			me._txt_3.ggVisible=false;
			me._txt_4.style[domTransition]='none';
			me._txt_4.style.visibility='hidden';
			me._txt_4.ggVisible=false;
			me._txt_5.style[domTransition]='none';
			me._txt_5.style.visibility='hidden';
			me._txt_5.ggVisible=false;
			me._txt_6.style[domTransition]='none';
			me._txt_6.style.visibility='hidden';
			me._txt_6.ggVisible=false;
			me._txt_7.style[domTransition]='none';
			me._txt_7.style.visibility='hidden';
			me._txt_7.ggVisible=false;
			me._txt_8.style[domTransition]='none';
			me._txt_8.style.visibility='hidden';
			me._txt_8.ggVisible=false;
			me._txt_9.style[domTransition]='none';
			me._txt_9.style.visibility='hidden';
			me._txt_9.ggVisible=false;
		}
		this._volume_controller.appendChild(this._vol_10);
		this._txt_0=document.createElement('div');
		this._txt_0.ggId="txt 0";
		this._txt_0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_0.ggVisible=true;
		this._txt_0.className='ggskin ggskin_image';
		this._txt_0.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_0.setAttribute('style',hs);
		this._txt_0__img=document.createElement('img');
		this._txt_0__img.className='ggskin ggskin_image';
		this._txt_0__img.setAttribute('src',basePath + 'images/txt_0.png');
		this._txt_0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_0__img.className='ggskin ggskin_image';
		this._txt_0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_0__img);
		this._txt_0.appendChild(this._txt_0__img);
		this._volume_controller.appendChild(this._txt_0);
		this._txt_1=document.createElement('div');
		this._txt_1.ggId="txt 1";
		this._txt_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_1.ggVisible=true;
		this._txt_1.className='ggskin ggskin_image';
		this._txt_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_1.setAttribute('style',hs);
		this._txt_1__img=document.createElement('img');
		this._txt_1__img.className='ggskin ggskin_image';
		this._txt_1__img.setAttribute('src',basePath + 'images/txt_1.png');
		this._txt_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_1__img.className='ggskin ggskin_image';
		this._txt_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_1__img);
		this._txt_1.appendChild(this._txt_1__img);
		this._volume_controller.appendChild(this._txt_1);
		this._txt_2=document.createElement('div');
		this._txt_2.ggId="txt 2";
		this._txt_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_2.ggVisible=true;
		this._txt_2.className='ggskin ggskin_image';
		this._txt_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_2.setAttribute('style',hs);
		this._txt_2__img=document.createElement('img');
		this._txt_2__img.className='ggskin ggskin_image';
		this._txt_2__img.setAttribute('src',basePath + 'images/txt_2.png');
		this._txt_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_2__img.className='ggskin ggskin_image';
		this._txt_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_2__img);
		this._txt_2.appendChild(this._txt_2__img);
		this._volume_controller.appendChild(this._txt_2);
		this._txt_3=document.createElement('div');
		this._txt_3.ggId="txt 3";
		this._txt_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_3.ggVisible=true;
		this._txt_3.className='ggskin ggskin_image';
		this._txt_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_3.setAttribute('style',hs);
		this._txt_3__img=document.createElement('img');
		this._txt_3__img.className='ggskin ggskin_image';
		this._txt_3__img.setAttribute('src',basePath + 'images/txt_3.png');
		this._txt_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_3__img.className='ggskin ggskin_image';
		this._txt_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_3__img);
		this._txt_3.appendChild(this._txt_3__img);
		this._volume_controller.appendChild(this._txt_3);
		this._txt_4=document.createElement('div');
		this._txt_4.ggId="txt 4";
		this._txt_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_4.ggVisible=true;
		this._txt_4.className='ggskin ggskin_image';
		this._txt_4.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_4.setAttribute('style',hs);
		this._txt_4__img=document.createElement('img');
		this._txt_4__img.className='ggskin ggskin_image';
		this._txt_4__img.setAttribute('src',basePath + 'images/txt_4.png');
		this._txt_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_4__img.className='ggskin ggskin_image';
		this._txt_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_4__img);
		this._txt_4.appendChild(this._txt_4__img);
		this._volume_controller.appendChild(this._txt_4);
		this._txt_5=document.createElement('div');
		this._txt_5.ggId="txt 5";
		this._txt_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_5.ggVisible=true;
		this._txt_5.className='ggskin ggskin_image';
		this._txt_5.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_5.setAttribute('style',hs);
		this._txt_5__img=document.createElement('img');
		this._txt_5__img.className='ggskin ggskin_image';
		this._txt_5__img.setAttribute('src',basePath + 'images/txt_5.png');
		this._txt_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_5__img.className='ggskin ggskin_image';
		this._txt_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_5__img);
		this._txt_5.appendChild(this._txt_5__img);
		this._volume_controller.appendChild(this._txt_5);
		this._txt_6=document.createElement('div');
		this._txt_6.ggId="txt 6";
		this._txt_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_6.ggVisible=true;
		this._txt_6.className='ggskin ggskin_image';
		this._txt_6.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_6.setAttribute('style',hs);
		this._txt_6__img=document.createElement('img');
		this._txt_6__img.className='ggskin ggskin_image';
		this._txt_6__img.setAttribute('src',basePath + 'images/txt_6.png');
		this._txt_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_6__img.className='ggskin ggskin_image';
		this._txt_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_6__img);
		this._txt_6.appendChild(this._txt_6__img);
		this._volume_controller.appendChild(this._txt_6);
		this._txt_7=document.createElement('div');
		this._txt_7.ggId="txt 7";
		this._txt_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_7.ggVisible=true;
		this._txt_7.className='ggskin ggskin_image';
		this._txt_7.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_7.setAttribute('style',hs);
		this._txt_7__img=document.createElement('img');
		this._txt_7__img.className='ggskin ggskin_image';
		this._txt_7__img.setAttribute('src',basePath + 'images/txt_7.png');
		this._txt_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_7__img.className='ggskin ggskin_image';
		this._txt_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_7__img);
		this._txt_7.appendChild(this._txt_7__img);
		this._volume_controller.appendChild(this._txt_7);
		this._txt_8=document.createElement('div');
		this._txt_8.ggId="txt 8";
		this._txt_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_8.ggVisible=true;
		this._txt_8.className='ggskin ggskin_image';
		this._txt_8.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_8.setAttribute('style',hs);
		this._txt_8__img=document.createElement('img');
		this._txt_8__img.className='ggskin ggskin_image';
		this._txt_8__img.setAttribute('src',basePath + 'images/txt_8.png');
		this._txt_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_8__img.className='ggskin ggskin_image';
		this._txt_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_8__img);
		this._txt_8.appendChild(this._txt_8__img);
		this._volume_controller.appendChild(this._txt_8);
		this._txt_9=document.createElement('div');
		this._txt_9.ggId="txt 9";
		this._txt_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_9.ggVisible=true;
		this._txt_9.className='ggskin ggskin_image';
		this._txt_9.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_9.setAttribute('style',hs);
		this._txt_9__img=document.createElement('img');
		this._txt_9__img.className='ggskin ggskin_image';
		this._txt_9__img.setAttribute('src',basePath + 'images/txt_9.png');
		this._txt_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_9__img.className='ggskin ggskin_image';
		this._txt_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_9__img);
		this._txt_9.appendChild(this._txt_9__img);
		this._volume_controller.appendChild(this._txt_9);
		this._txt_10=document.createElement('div');
		this._txt_10.ggId="txt 10";
		this._txt_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._txt_10.ggVisible=true;
		this._txt_10.className='ggskin ggskin_image';
		this._txt_10.ggType='image';
		hs ='position:absolute;';
		hs+='left: 4px;';
		hs+='top:  3px;';
		hs+='width: 14px;';
		hs+='height: 9px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._txt_10.setAttribute('style',hs);
		this._txt_10__img=document.createElement('img');
		this._txt_10__img.className='ggskin ggskin_image';
		this._txt_10__img.setAttribute('src',basePath + 'images/txt_10.png');
		this._txt_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._txt_10__img.className='ggskin ggskin_image';
		this._txt_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._txt_10__img);
		this._txt_10.appendChild(this._txt_10__img);
		this._volume_controller.appendChild(this._txt_10);
		this._container_main_control.appendChild(this._volume_controller);
		this.divSkin.appendChild(this._container_main_control);
		this._loader=document.createElement('div');
		this._loader.ggId="loader";
		this._loader.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loader.ggVisible=true;
		this._loader.className='ggskin ggskin_container';
		this._loader.ggType='container';
		this._loader.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-113 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-105 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -113px;';
		hs+='top:  -105px;';
		hs+='width: 224px;';
		hs+='height: 74px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: inherit;';
		this._loader.setAttribute('style',hs);
		this._loader_image=document.createElement('div');
		this._loader_image.ggId="loader_image";
		this._loader_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loader_image.ggVisible=true;
		this._loader_image.className='ggskin ggskin_image';
		this._loader_image.ggType='image';
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  6px;';
		hs+='width: 217px;';
		hs+='height: 62px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loader_image.setAttribute('style',hs);
		this._loader_image__img=document.createElement('img');
		this._loader_image__img.className='ggskin ggskin_image';
		this._loader_image__img.setAttribute('src',basePath + 'images/loader_image.png');
		this._loader_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._loader_image__img.className='ggskin ggskin_image';
		this._loader_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._loader_image__img);
		this._loader_image.appendChild(this._loader_image__img);
		this._loader.appendChild(this._loader_image);
		this._bar=document.createElement('div');
		this._bar.ggId="bar";
		this._bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bar.ggVisible=true;
		this._bar.className='ggskin ggskin_image';
		this._bar.ggType='image';
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  22px;';
		hs+='width: 183px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._bar.setAttribute('style',hs);
		this._bar__img=document.createElement('img');
		this._bar__img.className='ggskin ggskin_image';
		this._bar__img.setAttribute('src',basePath + 'images/bar.png');
		this._bar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._bar__img.className='ggskin ggskin_image';
		this._bar__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._bar__img);
		this._bar.appendChild(this._bar__img);
		this._loader.appendChild(this._bar);
		this._tip=document.createElement('div');
		this._tip.ggId="tip";
		this._tip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tip.ggVisible=true;
		this._tip.className='ggskin ggskin_image';
		this._tip.ggType='image';
		hs ='position:absolute;';
		hs+='left: 6px;';
		hs+='top:  14px;';
		hs+='width: 43px;';
		hs+='height: 27px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tip.setAttribute('style',hs);
		this._tip__img=document.createElement('img');
		this._tip__img.className='ggskin ggskin_image';
		this._tip__img.setAttribute('src',basePath + 'images/tip.png');
		this._tip__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._tip__img.className='ggskin ggskin_image';
		this._tip__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._tip__img);
		this._tip.appendChild(this._tip__img);
		this._loader.appendChild(this._tip);
		this._text_3=document.createElement('div');
		this._text_3__text=document.createElement('div');
		this._text_3.className='ggskin ggskin_textdiv';
		this._text_3.ggTextDiv=this._text_3__text;
		this._text_3.ggId="Text 3";
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=true;
		this._text_3.className='ggskin ggskin_text';
		this._text_3.ggType='text';
		hs ='position:absolute;';
		hs+='left: 21px;';
		hs+='top:  36px;';
		hs+='width: 182px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._text_3.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 182px;';
		hs+='height: 21px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #0f0f0f;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_3__text.setAttribute('style',hs);
		this._text_3.ggUpdateText=function() {
			var hs="<font face=\"Tahoma\"><b>\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430  "+(me.player.getPercentLoaded()*100.0).toFixed(0)+" % \/ "+(100.0).toFixed(1)+" kB<\/b><\/font>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._text_3.ggUpdateText();
		this._text_3.appendChild(this._text_3__text);
		this._loader.appendChild(this._text_3);
		this.divSkin.appendChild(this._loader);
		this._hide_template=document.createElement('div');
		this._hide_template.ggId="hide_template";
		this._hide_template.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hide_template.ggVisible=false;
		this._hide_template.className='ggskin ggskin_container';
		this._hide_template.ggType='container';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 187px;';
		hs+='height: 45px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._hide_template.setAttribute('style',hs);
		this._markertemplate=document.createElement('div');
		this._markertemplate.ggId="markertemplate";
		this._markertemplate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._markertemplate.ggVisible=true;
		this._markertemplate.className='ggskin ggskin_mark';
		this._markertemplate.ggType='mark';
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  0px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._markertemplate.setAttribute('style',hs);
		this._markertemplate.ggMarkerNodeId='';
		nodeMarker.push(this._markertemplate);
		this._markertemplate.onmouseover=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='inherit';
			me._marker_title.ggVisible=true;
		}
		this._markertemplate.onmouseout=function () {
			me._marker_title.style[domTransition]='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
		}
		this._marker_title=document.createElement('div');
		this._marker_title__text=document.createElement('div');
		this._marker_title.className='ggskin ggskin_textdiv';
		this._marker_title.ggTextDiv=this._marker_title__text;
		this._marker_title.ggId="marker_title";
		this._marker_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title.ggVisible=false;
		this._marker_title.className='ggskin ggskin_text';
		this._marker_title.ggType='text';
		this._marker_title.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (149-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -60px;';
		hs+='top:  25px;';
		hs+='width: 145px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._marker_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._marker_title__text.setAttribute('style',hs);
		this._marker_title.ggUpdateText=function() {
			var hs=me.player.userdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._marker_title.ggUpdateText();
		this._marker_title.appendChild(this._marker_title__text);
		this._markertemplate.appendChild(this._marker_title);
		this._hide_template.appendChild(this._markertemplate);
		this._marker_active=document.createElement('div');
		this._marker_active.ggId="marker_active";
		this._marker_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_active.ggVisible=true;
		this._marker_active.className='ggskin ggskin_svg';
		this._marker_active.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_active.setAttribute('style',hs);
		this._marker_active__img=document.createElement('img');
		this._marker_active__img.className='ggskin ggskin_svg';
		this._marker_active__img.setAttribute('src',basePath + 'images/marker_active.svg');
		this._marker_active__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 31px;-webkit-user-drag:none;');
		this._marker_active__img['ondragstart']=function() { return false; };
		this._marker_active.appendChild(this._marker_active__img);
		this._hide_template.appendChild(this._marker_active);
		this._marker_normal=document.createElement('div');
		this._marker_normal.ggId="marker_normal";
		this._marker_normal.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_normal.ggVisible=true;
		this._marker_normal.className='ggskin ggskin_svg';
		this._marker_normal.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 140px;';
		hs+='top:  0px;';
		hs+='width: 31px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_normal.setAttribute('style',hs);
		this._marker_normal__img=document.createElement('img');
		this._marker_normal__img.className='ggskin ggskin_svg';
		this._marker_normal__img.setAttribute('src',basePath + 'images/marker_normal.svg');
		this._marker_normal__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 31px;height: 32px;-webkit-user-drag:none;');
		this._marker_normal__img['ondragstart']=function() { return false; };
		this._marker_normal.appendChild(this._marker_normal__img);
		this._hide_template.appendChild(this._marker_normal);
		this.divSkin.appendChild(this._hide_template);
		this.__33=document.createElement('div');
		this.__33.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 33";
		this.__33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__33.ggVisible=true;
		this.__33.className='ggskin ggskin_button';
		this.__33.ggType='button';
		this.__33.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-106 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -106px;';
		hs+='top:  5px;';
		hs+='width: 100px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.7;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__33.setAttribute('style',hs);
		this.__33__img=document.createElement('img');
		this.__33__img.className='ggskin ggskin_button';
		this.__33__img.setAttribute('src',basePath + 'images/_33.png');
		this.__33__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__33__img.className='ggskin ggskin_button';
		this.__33__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__33__img);
		this.__33.appendChild(this.__33__img);
		this.__33.onclick=function () {
			me.player.openUrl("http:\/\/almaty3d.kz\/","_blank");
		}
		this.__33.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__33.style[domTransition]='none';
			} else {
				me.__33.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__33.style.opacity='1';
			me.__33.style.visibility=me.__33.ggVisible?'inherit':'hidden';
		}
		this.__33.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__33.style[domTransition]='none';
			} else {
				me.__33.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__33.style.opacity='0.7';
			me.__33.style.visibility=me.__33.ggVisible?'inherit':'hidden';
		}
		this.divSkin.appendChild(this.__33);
		me._music_on.style[domTransition]='none';
		me._music_on.style.visibility='hidden';
		me._music_on.ggVisible=false;
		me._green_bar.style[domTransition]='none';
		me._green_bar.ggParameter.rx=1;me._green_bar.ggParameter.ry=0;
		me._green_bar.style[domTransform]=parameterToTransform(me._green_bar.ggParameter);
		me._txt_0.style[domTransition]='none';
		me._txt_0.style.visibility='hidden';
		me._txt_0.ggVisible=false;
		me._txt_1.style[domTransition]='none';
		me._txt_1.style.visibility='hidden';
		me._txt_1.ggVisible=false;
		me._txt_2.style[domTransition]='none';
		me._txt_2.style.visibility='hidden';
		me._txt_2.ggVisible=false;
		me._txt_3.style[domTransition]='none';
		me._txt_3.style.visibility='hidden';
		me._txt_3.ggVisible=false;
		me._txt_4.style[domTransition]='none';
		me._txt_4.style.visibility='hidden';
		me._txt_4.ggVisible=false;
		me._txt_5.style[domTransition]='none';
		me._txt_5.style.visibility='hidden';
		me._txt_5.ggVisible=false;
		me._txt_6.style[domTransition]='none';
		me._txt_6.style.visibility='hidden';
		me._txt_6.ggVisible=false;
		me._txt_7.style[domTransition]='none';
		me._txt_7.style.visibility='hidden';
		me._txt_7.ggVisible=false;
		me._txt_8.style[domTransition]='none';
		me._txt_8.style.visibility='hidden';
		me._txt_8.ggVisible=false;
		me._txt_9.style[domTransition]='none';
		me._txt_9.style.visibility='hidden';
		me._txt_9.ggVisible=false;
		this._markertemplate__normal=this._marker_normal.cloneNode(true);
		this._markertemplate__normal.style.visibility='inherit';
		this._markertemplate__normal.style.left=0;
		this._markertemplate__normal.style.top=0;
		this._markertemplate.ggMarkerNormal=this._markertemplate__normal;
		this._markertemplate__active=this._marker_active.cloneNode(true);
		this._markertemplate__active.style.visibility='hidden';
		this._markertemplate__active.style.left=0;
		this._markertemplate__active.style.top=0;
		this._markertemplate.ggMarkerActive=this._markertemplate__active;
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__active,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__active);
		}
		if (this._markertemplate.firstChild) {
			this._markertemplate.insertBefore(this._markertemplate__normal,this._markertemplate.firstChild);
		} else {
			this._markertemplate.appendChild(this._markertemplate__normal);
		}
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loader.style[domTransition]='none';
			} else {
				me._loader.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loader.style.opacity='0';
			me._loader.style.visibility='hidden';
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['_']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['left0']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right0']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		var hs='';
		if (me._bar.ggParameter) {
			hs+=parameterToTransform(me._bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._bar.style[domTransform]=hs;
		var hs='';
		if (me._tip.ggParameter) {
			hs+=parameterToTransform(me._tip.ggParameter) + ' ';
		}
		hs+='translate(' + (168 * me.player.getPercentLoaded() + 0) + 'px,0px) ';
		me._tip.style[domTransform]=hs;
		this._text_3.ggUpdateText();
		this._marker_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='hs') {
			this.__div=document.createElement('div');
			this.__div.ggId="hs";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 210px;';
			hs+='top:  286px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				if (me.player.transitionsDisabled) {
					me._hsimage1.style[domTransition]='none';
				} else {
					me._hsimage1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsimage1.style.opacity='1';
				me._hsimage1.style.visibility=me._hsimage1.ggVisible?'inherit':'hidden';
				me._hstext2.style[domTransition]='none';
				me._hstext2.style.visibility='inherit';
				me._hstext2.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				if (me.player.transitionsDisabled) {
					me._hsimage1.style[domTransition]='none';
				} else {
					me._hsimage1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsimage1.style.opacity='0.7';
				me._hsimage1.style.visibility=me._hsimage1.ggVisible?'inherit':'hidden';
				me._hstext2.style[domTransition]='none';
				me._hstext2.style.visibility='hidden';
				me._hstext2.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage1=document.createElement('div');
			this._hsimage1.ggId="hsimage";
			this._hsimage1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage1.ggVisible=true;
			this._hsimage1.className='ggskin ggskin_button';
			this._hsimage1.ggType='button';
			hs ='position:absolute;';
			hs+='left: -31px;';
			hs+='top:  -26px;';
			hs+='width: 64px;';
			hs+='height: 64px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage1.setAttribute('style',hs);
			this._hsimage1__img=document.createElement('img');
			this._hsimage1__img.className='ggskin ggskin_button';
			this._hsimage1__img.setAttribute('src',basePath + 'images/hsimage1.png');
			this._hsimage1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage1__img.className='ggskin ggskin_button';
			this._hsimage1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage1__img);
			this._hsimage1.appendChild(this._hsimage1__img);
			this._hsimage1.onmouseover=function () {
				me._hsimage1__img.src=basePath + 'images/hsimage1__o.png';
				me._hsimage1.ggIsOver=true;
			}
			this._hsimage1.onmouseout=function () {
				me._hsimage1__img.src=basePath + 'images/hsimage1.png';
				me._hsimage1.ggIsOver=false;
			}
			this._hsimage1.onmousedown=function () {
				me._hsimage1__img.src=basePath + 'images/hsimage1__a.png';
			}
			this._hsimage1.onmouseup=function () {
				if (me._hsimage1.ggIsOver) {
					me._hsimage1__img.src=basePath + 'images/hsimage1__o.png';
				} else {
					me._hsimage1__img.src=basePath + 'images/hsimage1.png';
				}
			}
			this.__div.appendChild(this._hsimage1);
			this._hstext2=document.createElement('div');
			this._hstext2__text=document.createElement('div');
			this._hstext2.className='ggskin ggskin_textdiv';
			this._hstext2.ggTextDiv=this._hstext2__text;
			this._hstext2.ggId="hstext";
			this._hstext2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext2.ggVisible=false;
			this._hstext2.className='ggskin ggskin_text';
			this._hstext2.ggType='text';
			this._hstext2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -69px;';
			hs+='top:  42px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext2__text.setAttribute('style',hs);
			this._hstext2.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext2.appendChild(this._hstext2__text);
			this._hstext_white2=document.createElement('div');
			this._hstext_white2__text=document.createElement('div');
			this._hstext_white2.className='ggskin ggskin_textdiv';
			this._hstext_white2.ggTextDiv=this._hstext_white2__text;
			this._hstext_white2.ggId="hstext_white";
			this._hstext_white2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_white2.ggVisible=true;
			this._hstext_white2.className='ggskin ggskin_text';
			this._hstext_white2.ggType='text';
			this._hstext_white2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -2px;';
			hs+='top:  -1px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._hstext_white2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext_white2__text.setAttribute('style',hs);
			this._hstext_white2.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext_white2.appendChild(this._hstext_white2__text);
			this._hstext2.appendChild(this._hstext_white2);
			this.__div.appendChild(this._hstext2);
		} else
		if (hotspot.skinid=='right') {
			this.__div=document.createElement('div');
			this.__div.ggId="right";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 210px;';
			hs+='top:  286px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				if (me.player.transitionsDisabled) {
					me._hsimage0.style[domTransition]='none';
				} else {
					me._hsimage0.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsimage0.style.opacity='1';
				me._hsimage0.style.visibility=me._hsimage0.ggVisible?'inherit':'hidden';
				me._hstext1.style[domTransition]='none';
				me._hstext1.style.visibility='inherit';
				me._hstext1.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				if (me.player.transitionsDisabled) {
					me._hsimage0.style[domTransition]='none';
				} else {
					me._hsimage0.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsimage0.style.opacity='0.7';
				me._hsimage0.style.visibility=me._hsimage0.ggVisible?'inherit':'hidden';
				me._hstext1.style[domTransition]='none';
				me._hstext1.style.visibility='hidden';
				me._hstext1.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage0=document.createElement('div');
			this._hsimage0.ggId="hsimage";
			this._hsimage0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage0.ggVisible=true;
			this._hsimage0.className='ggskin ggskin_button';
			this._hsimage0.ggType='button';
			hs ='position:absolute;';
			hs+='left: -31px;';
			hs+='top:  -26px;';
			hs+='width: 64px;';
			hs+='height: 64px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage0.setAttribute('style',hs);
			this._hsimage0__img=document.createElement('img');
			this._hsimage0__img.className='ggskin ggskin_button';
			this._hsimage0__img.setAttribute('src',basePath + 'images/hsimage0.png');
			this._hsimage0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage0__img.className='ggskin ggskin_button';
			this._hsimage0__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage0__img);
			this._hsimage0.appendChild(this._hsimage0__img);
			this._hsimage0.onmouseover=function () {
				me._hsimage0__img.src=basePath + 'images/hsimage0__o.png';
				me._hsimage0.ggIsOver=true;
			}
			this._hsimage0.onmouseout=function () {
				me._hsimage0__img.src=basePath + 'images/hsimage0.png';
				me._hsimage0.ggIsOver=false;
			}
			this._hsimage0.onmousedown=function () {
				me._hsimage0__img.src=basePath + 'images/hsimage0__a.png';
			}
			this._hsimage0.onmouseup=function () {
				if (me._hsimage0.ggIsOver) {
					me._hsimage0__img.src=basePath + 'images/hsimage0__o.png';
				} else {
					me._hsimage0__img.src=basePath + 'images/hsimage0.png';
				}
			}
			this.__div.appendChild(this._hsimage0);
			this._hstext1=document.createElement('div');
			this._hstext1__text=document.createElement('div');
			this._hstext1.className='ggskin ggskin_textdiv';
			this._hstext1.ggTextDiv=this._hstext1__text;
			this._hstext1.ggId="hstext";
			this._hstext1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext1.ggVisible=false;
			this._hstext1.className='ggskin ggskin_text';
			this._hstext1.ggType='text';
			this._hstext1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -69px;';
			hs+='top:  42px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext1__text.setAttribute('style',hs);
			this._hstext1.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext1.appendChild(this._hstext1__text);
			this._hstext_white1=document.createElement('div');
			this._hstext_white1__text=document.createElement('div');
			this._hstext_white1.className='ggskin ggskin_textdiv';
			this._hstext_white1.ggTextDiv=this._hstext_white1__text;
			this._hstext_white1.ggId="hstext_white";
			this._hstext_white1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_white1.ggVisible=true;
			this._hstext_white1.className='ggskin ggskin_text';
			this._hstext_white1.ggType='text';
			this._hstext_white1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -2px;';
			hs+='top:  -1px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._hstext_white1.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext_white1__text.setAttribute('style',hs);
			this._hstext_white1.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext_white1.appendChild(this._hstext_white1__text);
			this._hstext1.appendChild(this._hstext_white1);
			this.__div.appendChild(this._hstext1);
		} else
		if (hotspot.skinid=='left') {
			this.__div=document.createElement('div');
			this.__div.ggId="left";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 210px;';
			hs+='top:  286px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openNext(me.hotspot.url,"");
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				if (me.player.transitionsDisabled) {
					me._hsimage.style[domTransition]='none';
				} else {
					me._hsimage.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsimage.style.opacity='1';
				me._hsimage.style.visibility=me._hsimage.ggVisible?'inherit':'hidden';
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='inherit';
				me._hstext0.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				if (me.player.transitionsDisabled) {
					me._hsimage.style[domTransition]='none';
				} else {
					me._hsimage.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._hsimage.style.opacity='0.7';
				me._hsimage.style.visibility=me._hsimage.ggVisible?'inherit':'hidden';
				me._hstext0.style[domTransition]='none';
				me._hstext0.style.visibility='hidden';
				me._hstext0.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_button';
			this._hsimage.ggType='button';
			hs ='position:absolute;';
			hs+='left: -31px;';
			hs+='top:  -26px;';
			hs+='width: 64px;';
			hs+='height: 64px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0.8;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_button';
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.png');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._hsimage__img.className='ggskin ggskin_button';
			this._hsimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._hsimage__img);
			this._hsimage.appendChild(this._hsimage__img);
			this._hsimage.onmouseover=function () {
				me._hsimage__img.src=basePath + 'images/hsimage__o.png';
				me._hsimage.ggIsOver=true;
			}
			this._hsimage.onmouseout=function () {
				me._hsimage__img.src=basePath + 'images/hsimage.png';
				me._hsimage.ggIsOver=false;
			}
			this._hsimage.onmousedown=function () {
				me._hsimage__img.src=basePath + 'images/hsimage__a.png';
			}
			this._hsimage.onmouseup=function () {
				if (me._hsimage.ggIsOver) {
					me._hsimage__img.src=basePath + 'images/hsimage__o.png';
				} else {
					me._hsimage__img.src=basePath + 'images/hsimage.png';
				}
			}
			this.__div.appendChild(this._hsimage);
			this._hstext0=document.createElement('div');
			this._hstext0__text=document.createElement('div');
			this._hstext0.className='ggskin ggskin_textdiv';
			this._hstext0.ggTextDiv=this._hstext0__text;
			this._hstext0.ggId="hstext";
			this._hstext0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext0.ggVisible=false;
			this._hstext0.className='ggskin ggskin_text';
			this._hstext0.ggType='text';
			this._hstext0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -69px;';
			hs+='top:  42px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext0__text.setAttribute('style',hs);
			this._hstext0.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext0.appendChild(this._hstext0__text);
			this._hstext_white0=document.createElement('div');
			this._hstext_white0__text=document.createElement('div');
			this._hstext_white0.className='ggskin ggskin_textdiv';
			this._hstext_white0.ggTextDiv=this._hstext_white0__text;
			this._hstext_white0.ggId="hstext_white";
			this._hstext_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_white0.ggVisible=true;
			this._hstext_white0.className='ggskin ggskin_text';
			this._hstext_white0.ggType='text';
			this._hstext_white0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -2px;';
			hs+='top:  -1px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._hstext_white0.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext_white0__text.setAttribute('style',hs);
			this._hstext_white0.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext_white0.appendChild(this._hstext_white0__text);
			this._hstext0.appendChild(this._hstext_white0);
			this.__div.appendChild(this._hstext0);
		} else
		if (hotspot.skinid=='hst') {
			this.__div=document.createElement('div');
			this.__div.ggId="hst";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 340px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._svg_31=document.createElement('div');
			this._svg_31.ggId="Svg 31";
			this._svg_31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._svg_31.ggVisible=true;
			this._svg_31.className='ggskin ggskin_svg';
			this._svg_31.ggType='svg';
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._svg_31.setAttribute('style',hs);
			this._svg_31__img=document.createElement('img');
			this._svg_31__img.className='ggskin ggskin_svg';
			this._svg_31__img.setAttribute('src',basePath + 'images/svg_31.svg');
			this._svg_31__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._svg_31__img['ondragstart']=function() { return false; };
			this._svg_31.appendChild(this._svg_31__img);
			this.__div.appendChild(this._svg_31);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.className='ggskin ggskin_text';
			this._hstext.ggType='text';
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -70px;';
			hs+='top:  25px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hstext.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext.appendChild(this._hstext__text);
			this._hstext_white=document.createElement('div');
			this._hstext_white__text=document.createElement('div');
			this._hstext_white.className='ggskin ggskin_textdiv';
			this._hstext_white.ggTextDiv=this._hstext_white__text;
			this._hstext_white.ggId="hstext_white";
			this._hstext_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_white.ggVisible=true;
			this._hstext_white.className='ggskin ggskin_text';
			this._hstext_white.ggType='text';
			this._hstext_white.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (148-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -2px;';
			hs+='top:  -1px;';
			hs+='width: 148px;';
			hs+='height: 18px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._hstext_white.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._hstext_white__text.setAttribute('style',hs);
			this._hstext_white.ggTextDiv.innerHTML="<b>"+me.hotspot.title+"<\/b>";
			this._hstext_white.appendChild(this._hstext_white__text);
			this._hstext.appendChild(this._hstext_white);
			this.__div.appendChild(this._hstext);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="lf";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 309px;';
			hs+='top:  277px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};