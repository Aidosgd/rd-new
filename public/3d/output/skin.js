// Garden Gnome Software - Skin
// Pano2VR 6.0 beta4/17095
// Filename: v6_2018strelki.ggsk
// Generated Чт сен 27 01:27:23 2018

function pano2vrSkin(player,base) {
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_info', 2, true);
	player.addVariable('opt_thumbnail', 2, false);
	player.addVariable('opt_thumbnail_tooltip', 2, false);
	player.addVariable('opt_projection', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_autohide', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, false);
	player.addVariable('opt_url', 2, false);
	player.addVariable('vis_userdata', 2, false);
	player.addVariable('vis_close_buton', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_video_popup_file', 2, false);
	player.addVariable('vis_video_popup_url', 2, false);
	player.addVariable('vis_video_popup_vimeo', 2, false);
	player.addVariable('vis_video_popup_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_thumbnail_menu_show', 2, true);
	player.addVariable('vis_thumbnail_menu_mobile', 2, false);
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true);
	player.addVariable('vis_360image_once', 2, true);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('pos_zoom_in', 1, 0);
	player.addVariable('pos_zoom_out', 1, 0);
	player.addVariable('pos_autorotate', 1, 0);
	player.addVariable('pos_information', 1, 0);
	player.addVariable('pos_thumbnail', 1, 0);
	player.addVariable('pos_projection', 1, 0);
	player.addVariable('pos_gyro', 1, 0);
	player.addVariable('pos_fullscreen', 1, 0);
	player.addVariable('pos_controller', 1, 0);
	player.addVariable('pos_360image', 1, 0);
	var me=this;
	var flag=false;
	var hotspotTemplates=[];
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
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
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._menu_button=document.createElement('div');
		els=this._menu_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNyAxMjQuNzsiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTI0LjcgMTI0LjciIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNMTIsNDIuMWMtMi4yLDAtNCwxLjgtNCw0djMyLjdjMCwyLjIsMS44LDQsNCw0aDEwMC44YzIuMiwwLDQtMS44LDQtNFY0NmMwLTIuMi0xLjgtNC00LTRIMTJ6IE0zMC40LDczLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi4zLDAtMTEuNC01LjEtMTEuNC0xMS40QzE5LDU2LjEsMjQuMSw1MSwzMC40LDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEM0MS44LDY4LjYsMzYuNyw3My43LDMwLjQsNzMuN3ogTTYyLjQsNzMuNyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy02LjMsMC0xMS40LTUuMS0xMS40LTExLjRDNTEsNTYuMSw1Ni4xLDUxLDYyLjQsNTFjNi4zLDAsMTEuNCw1LjEsMTEuNCwxMS40QzczLjcsNjguNiw2OC42LDczLjcsNjIuNCw3My43eiBNOTQuMyw3My43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODgsNzMuNyw4Myw2OC42LDgzLDYyLjRDODMsNTYuMSw4OCw1MSw5NC4zLDUxYzYuMywwLDExLjQsNS4xLDExLjQsMTEuNEMxMDUuNyw2OC42LDEwMC42LDczLjcsOTQuMyw3My43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxnPgogICA8Y2lyY2xlIGN4PSIzMC40IiBmaWxsPSIjRkZGRkZGIiBjeT0iNjIuNCIgcj0iMTEuNCIvPg'+
			'ogICA8Y2lyY2xlIGN4PSI2Mi40IiBmaWxsPSIjRkZGRkZGIiBjeT0iNjIuNCIgcj0iMTEuNCIvPgogICA8Y2lyY2xlIGN4PSI5NC4zIiBmaWxsPSIjRkZGRkZGIiBjeT0iNjIuNCIgcj0iMTEuNCIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._menu_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;menu_button;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._menu_button__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjQuNyAxMjQuNzsiIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMTI0LjcgMTI0LjciIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNi40LDM5LjhjLTIuNCwwLTQuNCwyLTQuNCw0LjR2MzYuM2MwLDIuNCwyLDQuNCw0LjQsNC40aDExMmMyLjQsMCw0LjQtMiw0LjQtNC40VjQ0LjJjMC0yLjQtMi00LjQtNC40LTQuNEg2LjR6IE0yNi45LDc1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcsMC0xMi42LTUuNy0xMi42LTEyLjZjMC03LDUuNy0xMi42LDEyLjYtMTIuNmM3LDAsMTIuNiw1LjcsMTIuNiwxMi42QzM5LjUsNjkuMywzMy44LDc1LDI2LjksNzV6IE02Mi40LDc1JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtjLTcsMC0xMi42LTUuNy0xMi42LTEyLjZjMC03LDUuNy0xMi42LDEyLjYtMTIuNmM3LDAsMTIuNiw1LjcsMTIuNiwxMi42Qzc1LDY5LjMsNjkuMyw3NSw2Mi40LDc1eiBNOTcuOSw3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy03LDAtMTIuNi01LjctMTIuNi0xMi42YzAtNyw1LjctMTIuNiwxMi42LTEyLjZjNywwLDEyLjYsNS43LDEyLjYsMTIuNkMxMTAuNSw2OS4zLDEwNC44LDc1LDk3LjksNzV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPGc+CiAgIDxjaXJjbGUgY3g9IjI2LjkiIGZpbGw9IiNGRkZGRkYiIGNsYXNzPSJzdDAiIGN5PSI2Mi40IiByPSIxMi42Ii8+Ci'+
			'AgIDxjaXJjbGUgY3g9IjYyLjQiIGZpbGw9IiNGRkZGRkYiIGNsYXNzPSJzdDAiIGN5PSI2Mi40IiByPSIxMi42Ii8+CiAgIDxjaXJjbGUgY3g9Ijk3LjkiIGZpbGw9IiNGRkZGRkYiIGNsYXNzPSJzdDAiIGN5PSI2Mi40IiByPSIxMi42Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._menu_button__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;menu_button;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="menu_button";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_button.ggIsActive=function() {
			return false;
		}
		me._menu_button.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._menu_button.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('vis_website') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_button.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_button.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_button.style[domTransition]='left 0s, top 0s';
				if (me._menu_button.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._menu_button.style.bottom='-100px';
					me._menu_button.ggUpdatePosition(true);
				}
				else {
					me._menu_button.ggDx=0;
					me._menu_button.style.bottom='12px';
					me._menu_button.ggUpdatePosition(true);
				}
			}
		}
		this._menu_button.onclick=function (e) {
			me._hide_timer.ggTimeout=Number("5") * 1000.0;
			me._hide_timer.ggTimestamp=me.ggCurrentTime;
		}
		this._menu_button.onmouseover=function (e) {
			me._menu_button__img.style.visibility='hidden';
			me._menu_button__imgo.style.visibility='inherit';
		}
		this._menu_button.onmouseout=function (e) {
			me._menu_button__img.style.visibility='inherit';
			me._menu_button__imgo.style.visibility='hidden';
		}
		this._menu_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hide_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=0;
		el.ggId="hide_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_timer.ggIsActive=function() {
			return (me._hide_timer.ggTimestamp + me._hide_timer.ggTimeout) >= me.ggCurrentTime;
		}
		me._hide_timer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._hide_timer.ggActivate=function () {
			if (me.player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='1';
			me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='0';
			me._menu_button.style.visibility='hidden';
			me.player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
		}
		this._hide_timer.ggDeactivate=function () {
			if (me.player.transitionsDisabled) {
				me._menu_button.style[domTransition]='none';
			} else {
				me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._menu_button.style.opacity='1';
			me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._controller.style[domTransition]='none';
			} else {
				me._controller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._controller.style.opacity='0';
			me._controller.style.visibility='hidden';
			me.player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
		}
		this._hide_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_button.appendChild(me._hide_timer);
		me.divSkin.appendChild(me._menu_button);
		el=me._loading_multires=document.createElement('div');
		els=this._loading_multires__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iN3B4IiB2aWV3Qm94PSIwIDAgMTI4IDM1IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2cHgiPgogPGc+CiAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIGN4PSIxNy41IiBmaWxsPSIjNTU1NWZmIiBjeT0iMTcuNSIgcj0iMTcuNSIvPg'+
			'ogIDxhbmltYXRlIGR1cj0iNjAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE2NzswLjU7MC42Njg7MSIgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgYmVnaW49IjBzIiB2YWx1ZXM9IjAuMzsxOzE7MC4zOzAuMyIvPgogPC9nPgogPGc+CiAgPGNpcmNsZSBmaWxsLW9wYWNpdHk9IjEiIGN4PSIxMTAuNSIgZmlsbD0iIzU1NTVmZiIgY3k9IjE3LjUiIHI9IjE3LjUiLz4KICA8YW5pbWF0ZSBkdXI9IjYwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4zMzQ7MC41OzAuODM1OzEiIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGJlZ2luPSIw'+
			'cyIgdmFsdWVzPSIwLjM7MC4zOzE7MTswLjMiLz4KIDwvZz4KIDxnPgogIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIxIiBjeD0iNjQiIGZpbGw9IiM1NTU1ZmYiIGN5PSIxNy41IiByPSIxNy41Ii8+CiAgPGFuaW1hdGUgZHVyPSI2MDBtcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTY3OzAuMzM0OzAuNjY4OzAuODM1OzEiIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGJlZ2luPSIwcyIgdmFsdWVzPSIwLjM7MC4zOzE7MTswLjM7MC4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._loading_multires__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_multires;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_multires";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 7px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_multires.ggIsActive=function() {
			return false;
		}
		me._loading_multires.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._loading_multires.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getIsTileLoading() == true) && 
				(me.player.getVariableValue('opt_loader_mulires') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading_multires.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading_multires.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading_multires.style[domTransition]='';
				if (me._loading_multires.ggCurrentLogicStateVisible == 0) {
					me._loading_multires.style.visibility=(Number(me._loading_multires.style.opacity)>0||!me._loading_multires.style.opacity)?'inherit':'hidden';
					me._loading_multires.ggVisible=true;
				}
				else {
					me._loading_multires.style.visibility="hidden";
					me._loading_multires.ggVisible=false;
				}
			}
		}
		this._loading_multires.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._loading_multires);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(179,179,179,0.392157);';
		hs+='border : 1px solid #5555ff;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._screentint.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_website') == true) || 
				(me.player.getVariableValue('vis_thumbnail_menu_mobile') == true) && 
				(me.player.getVariableValue('vis_thumbnail_menu_auto_hide') == true) && 
				(me.player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._screentint.ggCurrentLogicStateAlpha == 0) {
					me._screentint.style.visibility=me._screentint.ggVisible?'inherit':'hidden';
					me._screentint.style.opacity=1;
				}
				else {
					me._screentint.style.visibility="hidden";
					me._screentint.style.opacity=0;
				}
			}
		}
		this._screentint.onclick=function (e) {
			me.player.setVariableValue('vis_image_popup', false);
			me.player.setVariableValue('vis_info_popup', false);
			me.player.setVariableValue('vis_video_popup_file', false);
			me.player.setVariableValue('vis_video_popup_url', false);
			me.player.setVariableValue('vis_video_popup_vimeo', false);
			me.player.setVariableValue('vis_video_popup_youtube', false);
			me.player.setVariableValue('vis_website', false);
			me.player.setVariableValue('vis_userdata', false);
		}
		this._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 256px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		me._controller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('vis_website') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style[domTransition]='left 0s, top 0s';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._controller.style.bottom='-100px';
					me._controller.ggUpdatePosition(true);
				}
				else {
					me._controller.ggDx=0;
					me._controller.style.bottom='23px';
					me._controller.ggUpdatePosition(true);
				}
			}
		}
		this._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		this._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		this._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		this._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller_bg=document.createElement('div');
		el.ggId="controller_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 3px;';
		hs+='border-radius : 3px;';
		hs+='background : rgba(138,138,138,0.498039);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._controller_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._controller_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_controller') == 1)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 2)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 3)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 4)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 5)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 6)
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 7)
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_bg.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStatePosition == 0) {
					me._controller_bg.style.left='87px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 1) {
					me._controller_bg.style.left='71px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 2) {
					me._controller_bg.style.left='55px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 3) {
					me._controller_bg.style.left='39px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 4) {
					me._controller_bg.style.left='23px';
					me._controller_bg.style.top='-8px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 5) {
					me._controller_bg.style.left='7px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 6) {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
				else {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
			}
		}
		me._controller_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				(me.player.getVariableValue('pos_controller') == 1)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 2)
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 3)
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 4)
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 5)
			)
			{
				newLogicStateSize = 4;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 6)
			)
			{
				newLogicStateSize = 5;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 7)
			)
			{
				newLogicStateSize = 6;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._controller_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._controller_bg.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateSize == 0) {
					me._controller_bg.style.width='82px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 1) {
					me._controller_bg.style.width='114px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 2) {
					me._controller_bg.style.width='146px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 3) {
					me._controller_bg.style.width='178px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 4) {
					me._controller_bg.style.width='210px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 5) {
					me._controller_bg.style.width='242px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 6) {
					me._controller_bg.style.width='274px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
				else {
					me._controller_bg.style.width='274px';
					me._controller_bg.style.height='50px';
					me.updateSize(me._controller_bg);
				}
			}
		}
		me._controller_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('pos_controller') == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_bg.style[domTransition]='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateVisible == 0) {
					me._controller_bg.style.visibility="hidden";
					me._controller_bg.ggVisible=false;
				}
				else {
					me._controller_bg.style.visibility=(Number(me._controller_bg.style.opacity)>0||!me._controller_bg.style.opacity)?'inherit':'hidden';
					me._controller_bg.ggVisible=true;
				}
			}
		}
		this._controller_bg.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controller_bg);
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._controller_slider.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_controller') == 1)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 2)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 3)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 4)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 5)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 6)
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 7)
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				(me.player.getVariableValue('pos_controller') == 8)
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style[domTransition]='left 0s, top 0s';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.left='112px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 1) {
					me._controller_slider.style.left='96px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 2) {
					me._controller_slider.style.left='80px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 3) {
					me._controller_slider.style.left='64px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 4) {
					me._controller_slider.style.left='48px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 5) {
					me._controller_slider.style.left='32px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 6) {
					me._controller_slider.style.left='16px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 7) {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
				else {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
			}
		}
		this._controller_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_buttons.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._fullscreen_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_fullscreen') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 4)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 5)
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 6)
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				(me.player.getVariableValue('pos_fullscreen') == 7)
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_buttons.style.left='0px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 1) {
					me._fullscreen_buttons.style.left='32px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 2) {
					me._fullscreen_buttons.style.left='64px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 3) {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 4) {
					me._fullscreen_buttons.style.left='128px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 5) {
					me._fullscreen_buttons.style.left='160px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 6) {
					me._fullscreen_buttons.style.left='192px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 7) {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
				else {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
			}
		}
		me._fullscreen_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_fullscreen') == true) && 
				(me.player.getOS() != 4)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_buttons.style[domTransition]='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
				else {
					me._fullscreen_buttons.style.visibility="hidden";
					me._fullscreen_buttons.ggVisible=false;
				}
			}
		}
		this._fullscreen_buttons.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen=document.createElement('div');
		els=this._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMDYuMiw0MTkuMmg2Mi4zdi00NC4zaC02Mi4zVjQxOS4yeiBNLTE3OC45LDM5Ny4zYzAsMCwxNy43LTEyLjcsMTcuNy0xMi43bC00LTUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45YzAuMi0wLjQsMC41LTAuNSwwLjgtMC41bDE2LjItMC4xYzAuNCwwLDAuNiwwLjEsMC44LDAuNGMwLjIsMC4yLDAuMiwwLjUsMC4xLDAuOGwtNS4yLDE1LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEsMC4zLTAuNCwwLjYtMC44LDAuNmMtMC40'+
			'LDAtMC43LTAuMS0wLjktMC4zbC0zLjktNS40YzAsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTEuNiwwLjMtMi4xLTAuNGwtMS40LTEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OS43LDM5OC44LTE3OS41LDM5Ny44LTE3OC45LDM5Ny4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOC40LDQyMC'+
			'4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjMsMCw0LjIsMS45LDQuMiw0LjJWNDIwLjN6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ3LjQsMzc3LjljLTAuMi0wLjMtMC40LTAuNC0wLjgtMC40bC0xNi4yLDAuMWMtMC40LDAtMC43LDAuMS0wLjgsMC41Yy0wLjIsMC40LTAuMiwwLjYsMC4xLDAuOWw0LDUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC0xNy43LDEy'+
			'LjctMTcuNywxMi43Yy0wLjcsMC41LTAuOCwxLjUtMC40LDIuMWwxLjQsMS45YzAuNSwwLjcsMS41LDAuOCwyLjEsMC40YzAsMCwxNy42LTEyLjcsMTcuNy0xMi43bDMuOSw1LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC4zLDAuNCwwLjQsMC45LDAuM2MwLjQsMCwwLjctMC4zLDAuOC0wLjZsNS4yLTE1LjRDLTE0Ny4yLDM3OC40LTE0Ny4yLDM3OC4xLTE0Ny40LDM3Ny45eiIvPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQyLjcsNDI0LjZoLTY0LjdjLTIuMywwLTQuMi0xLjktNC4yLTQuMnYtNDYuN2MwLTIuMywxLjktNC4yLDQuMi00LjJoNjQuN2MyLjMsMCw0LjIsMS45LDQuMi'+
			'w0LjJ2NDYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzguNCw0MjIuNy0xNDAuMyw0MjQuNi0xNDIuNyw0MjQuNnogTS0yMDYuMiw0MTkuMmg2Mi4zdi00NC4zaC02Mi4zVjQxOS4yeiIvPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;fullscreen;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMDkuNiw0MjEuNmg2OS4zdi00OS4zaC02OS4zVjQyMS42eiBNLTE3OS4zLDM5Ny40YzAsMCwxOS42LTE0LjEsMTkuNy0xNC4xbC00LjUtNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yLTAuMy0wLjItMC42LTAuMS0xYzAuMi0wLjQsMC41LTAuNiwwLjktMC42bDE4LTAuMWMwLjQsMCwwLjcsMC4xLDAuOSwwLjRjMC4yLDAuMywwLjIsMC41LDAuMSwwLjlsLTUuOCwxNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuNC0wLjQsMC43LTAuOCwwLjdjLTAuNSww'+
			'LTAuNy0wLjEtMS0wLjRsLTQuMy02Yy0wLjEsMC4xLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMS44LDAuNC0yLjQtMC40bC0xLjUtMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsMzk5LTE4MCwzOTcuOS0xNzkuMywzOTcuNHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xMzQuNCw0Mj'+
			'IuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDAsNC43LDIuMSw0LjcsNC43VjQyMi45eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0NC4zLDM3NS44Yy0wLjItMC4zLTAuNS0wLjQtMC45LTAuNGwtMTgsMC4xYy0wLjQsMC0wLjgsMC4yLTAuOSwwLjZjLTAuMiwwLjQtMC4yLDAuNywwLjEsMWw0LjUsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE5LjcsMTQu'+
			'MS0xOS43LDE0LjFjLTAuOCwwLjUtMC45LDEuNi0wLjQsMi40bDEuNSwyLjFjMC41LDAuOCwxLjYsMC45LDIuNCwwLjRjMCwwLDE5LjYtMTQuMSwxOS43LTE0LjFsNC4zLDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC4zLDAuNSwwLjQsMSwwLjRjMC41LDAsMC43LTAuMywwLjgtMC43bDUuOC0xNy4xQy0xNDQuMSwzNzYuMy0xNDQuMSwzNzYtMTQ0LjMsMzc1Ljh6Ii8+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzkuMSw0MjcuNmgtNzEuOGMtMi42LDAtNC43LTIuMS00LjctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44YzIuNiwwLDQuNywyLjEsNC43LDQuN3Y1MS'+
			'44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzNC40LDQyNS41LTEzNi41LDQyNy42LTEzOS4xLDQyNy42eiBNLTIwOS42LDQyMS42aDY5LjN2LTQ5LjNoLTY5LjNWNDIxLjZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;fullscreen;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen.style.visibility="hidden";
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		this._fullscreen.onmouseover=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
		}
		this._fullscreen.onmouseout=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen);
		el=me._fullscreen_off=document.createElement('div');
		els=this._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIyMi4yIiBmaWxsPSIjNTU1NWZmIiB4PSItMjA2LjIiIHk9IjM5NyIgd2lkdGg9IjMyLjEiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNjguNiw0MjAuM2MwLDIuMy0xLjksNC4yLTQuMiw0LjJoLTM0LjVj'+
			'LTIuMywwLTQuMi0xLjktNC4yLTQuMnYtMjQuNWMwLTIuMywxLjktNC4yLDQuMi00LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDM0LjVjMi4zLDAsNC4yLDEuOSw0LjIsNC4yTC0xNjguNiw0MjAuM0wtMTY4LjYsNDIwLjN6IE0tMTM2LjgsMzcyLjZsLTE3LjUsMTIuNmMtMC4xLDAtMC4xLDAuMS0wLjIsMC4xbDAuNywwLjlsMy4zLDQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yLDAuMywwLjIsMC41LDAuMSwwLjljLTAuMiwwLjQtMC41LDAuNS0wLjgsMC41bC0xNi4yLDAuMWMtMC40LDAtMC42LTAuMS0wLjgtMC40Yy0wLjItMC4yLTAuMi0wLjUtMC4xLTAuOGw1LjItMTUuNCYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xLTAuMywwLjQtMC42LDAuOC0wLjZjMC40LDAsMC43LDAuMSwwLjksMC4zbDMuMyw0LjZsMC42LDAuOGMwLDAsMC4xLTAuMSwwLjEtMC4xbDE3LjUtMTIuNmMwLjctMC41LDEuNi0wLjMsMi4xLDAuNGwxLjQsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM1LjksMzcxLjItMTM2LjEsMzcyLjEtMTM2LjgsMzcyLjZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzNi40LDM3MC41bC0xLjQtMS45Yy0wLjUtMC43LTEuNS0wLjgtMi4xLTAuNGwtMTcuNSwxMi42Yy0w'+
			'LjEsMC0wLjEsMC4xLTAuMSwwLjFsLTAuNi0wLjhsLTMuMy00LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNC0wLjQtMC45LTAuM2MtMC40LDAtMC43LDAuMy0wLjgsMC42bC01LjIsMTUuNGMtMC4xLDAuMy0wLjEsMC42LDAuMSwwLjhjMC4yLDAuMywwLjQsMC40LDAuOCwwLjRsMTYuMi0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuNy0wLjEsMC44LTAuNWMwLjItMC40LDAuMi0wLjYtMC4xLTAuOWwtMy4zLTQuN2wtMC43LTAuOWMwLjEsMCwwLjEtMC4xLDAuMi0wLjFsMTcuNS0xMi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM2LjEsMzcyLj'+
			'EtMTM1LjksMzcxLjItMTM2LjQsMzcwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcyLjgsMzkxLjZoLTM0LjVjLTIuMywwLTQuMiwxLjktNC4yLDQuMnYyNC41YzAsMi4zLDEuOSw0LjIsNC4yLDQuMmgzNC41YzIuMywwLDQuMi0xLjksNC4yLTQuMnYtMjQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2OC42LDM5My41LTE3MC41LDM5MS42LTE3Mi44LDM5MS42eiBNLTE3NCw0MTkuMmgtMzIuMVYzOTdoMzIuMVY0MTkuMnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;fullscreen_off;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IGZpbGwtb3BhY2l0eT0iMSIgaGVpZ2h0PSIyNC42IiBmaWxsPSIjNTU1NWZmIiB4PSItMjA5LjYiIHk9IjM5NyIgd2lkdGg9IjM1LjciLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTY3LjksNDIyLjljMCwyLjYtMi4xLDQuNy00Ljcs'+
			'NC43aC0zOC4zYy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTI3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMi42LDIuMS00LjcsNC43LTQuN2gzOC4zYzIuNiwwLDQuNywyLjEsNC43LDQuN0wtMTY3LjksNDIyLjlMLTE2Ny45LDQyMi45eiBNLTEzMi41LDM2OS45bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAuNywxbDMuNyw1LjJjMC4yLDAuMywwLjIsMC42LDAuMSwxYy0wLjIsMC40LTAuNSwwLjYtMC45LDAuNmwtMTgsMC4xYy0wLjQsMC0wLjctMC4xLTAuOS0wLjRjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2w1LjgtMTcuMWMwLjEtMC40LDAuNC0wLjcsMC44LTAuN2MwLjUsMCwwLjcsMC4xLDEsMC40bDMuNiw1LjFsMC43LDAuOWMwLjEsMCwwLjEtMC4xLDAuMi0wLjFsMTkuNS0xNGMwLjgtMC41LDEuOC0wLjQsMi40LDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS41LDIuMUMtMTMxLjYsMzY4LjMtMTMxLjgsMzY5LjQtMTMyLjUsMzY5Ljl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMi4xLDM2Ny41bC0xLjUtMi4xYy0wLjUtMC44LTEuNi0wLjktMi40LTAuNGwtMTkuNSwxNGMtMC4x'+
			'LDAtMC4xLDAuMS0wLjIsMC4xbC0wLjctMC45bC0zLjYtNS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yLTAuMy0wLjUtMC40LTEtMC40Yy0wLjUsMC0wLjcsMC4zLTAuOCwwLjdsLTUuOCwxNy4xYy0wLjEsMC40LTAuMSwwLjcsMC4xLDAuOWMwLjIsMC4zLDAuNSwwLjQsMC45LDAuNGwxOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuOC0wLjIsMC45LTAuNmMwLjItMC40LDAuMi0wLjctMC4xLTFsLTMuNy01LjJsLTAuNy0xYzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjgsMzY5LjQtMTMxLjYsMzY4Lj'+
			'MtMTMyLjEsMzY3LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcyLjYsMzkxaC0zOC4zYy0yLjYsMC00LjcsMi4xLTQuNyw0Ljd2MjcuMmMwLDIuNiwyLjEsNC43LDQuNyw0LjdoMzguM2MyLjYsMCw0LjctMi4xLDQuNy00Ljd2LTI3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjcuOSwzOTMuMS0xNzAsMzkxLTE3Mi42LDM5MXogTS0xNzMuOSw0MjEuNmgtMzUuN1YzOTdoMzUuN1Y0MjEuNnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;fullscreen_off;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fullscreen_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_off.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._fullscreen_off.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_off.style.visibility=me._fullscreen_off.ggVisible?'inherit':'hidden';
					me._fullscreen_off.style.opacity=1;
				}
				else {
					me._fullscreen_off.style.visibility="hidden";
					me._fullscreen_off.style.opacity=0;
				}
			}
		}
		this._fullscreen_off.onmouseover=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
		}
		this._fullscreen_off.onmouseout=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
		}
		this._fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen_off);
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_gyro') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_gyro') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_gyro') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_gyro') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_gyro') == 4)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(me.player.getVariableValue('pos_gyro') == 5)
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				(me.player.getVariableValue('pos_gyro') == 6)
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._gyro.style[domTransition]='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStatePosition == 0) {
					me._gyro.style.left='0px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 1) {
					me._gyro.style.left='32px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 2) {
					me._gyro.style.left='64px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 3) {
					me._gyro.style.left='96px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 4) {
					me._gyro.style.left='128px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 5) {
					me._gyro.style.left='160px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 6) {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
				else {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
			}
		}
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_gyro') == true) && 
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style[domTransition]='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		this._gyro.onclick=function (e) {
			me.player.stopAutorotate();
			me.player.setUseGyro(!(me.player.getUseGyro()));
		}
		this._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=this._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNMTAzLjUsNTkuNGMtMS45LTEuOS00LjktMy44LTguNi01LjRjLTQuMS0xLjgtOS4yLTMuMi0xNC45LTQuMWMxLjIsMy42LDIuMyw3LjUsMy4xLDExLjZjMS4xLDUuNiwxLjYsMTEsMS43LDE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNGMwLTQuOC0wLjUtMTAuMS0xLjYtMTUuNWMtMC45LTQuNy0y'+
			'LjItOS4xLTMuNy0xMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy4yLTAuMy02LjUtMC41LTEwLTAuNWwtMC45LTQuNWMwLjMsMCwwLjYsMCwwLjksMGMyLjcsMCw1LjQsMC4xLDgsMC4zYy0yLjEtNC40LTQuNC04LjEtNi44LTEwLjZjLTEuNy0xLjgtMy40LTMtNC44LTMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNy0wLjMtMS4zLTAuNC0xLjktMC41bDYuOSwzNC45bDIuOSwxNC43Yy0wLjksMC0xLjgsMC4xLTIuNywwLjFsLTIuOC0xNC4ybC02LjktMzQuOWMtMC42LDAuMy0xLjIsMC43LTEuOCwxLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLDEtMS45LDIuNi0yLj'+
			'csNC41Yy0xLjYsMy45LTIuNSw5LjUtMi41LDE1LjljMCw0LjgsMC41LDEwLjEsMS42LDE1LjVsMCwwYzAuOSw0LjcsMi4yLDkuMSwzLjcsMTMuMWMzLjIsMC4zLDYuNSwwLjUsMTAsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M3LjcsMCwxNC45LTAuOSwyMS4xLTIuNGM2LjItMS41LDExLjMtMy43LDE0LjgtNi4xYzIuMy0xLjYsMy45LTMuNCw0LjctNWMwLjQtMC45LDAuNy0xLjgsMC43LTIuOGMwLTAuOS0wLjItMS44LTAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwNS4xLDYxLjMsMTA0LjQsNjAuMywxMDMuNSw1OS40eiBNNTEuNiw0OS42YzAuMS0xLjYsMC4yLTMuMSww'+
			'LjQtNC42YzEuOS0wLjIsMy44LTAuNCw1LjgtMC42bDAuOSw0LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzU2LjIsNDkuMSw1My44LDQ5LjMsNTEuNiw0OS42eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNCw5Niw4LjksNjUsOC45eiBNMTA2LjcsNzMuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNSwyLjUtNS45LDQuNi0xMCw2LjRjLTguMiwzLjUtMTkuNCw1LjYtMzEuNiw1LjZjLTIuNy'+
			'wwLTUuNC0wLjEtOC0wLjNjMi4xLDQuNCw0LjQsOC4xLDYuOCwxMC42YzEuNywxLjgsMy40LDMsNC44LDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LDAuMywxLjQsMC40LDIsMC41bC0yLjUtMTIuNmMwLjksMCwxLjgtMC4xLDIuNy0wLjFsMi40LDEyLjJjMC42LTAuMywxLjItMC43LDEuOC0xLjNjMS0xLDEuOS0yLjYsMi43LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTIsMS40LTQuNCwxLjktNy4yYzEtMC4xLDItMC4zLDMtMC41YzAuNi0wLjEsMS4xLTAuMiwxLjYtMC4zYy0wLjMsMi4xLTAuNiw0LjEtMS4xLDUuOWMtMS4xLDQtMi42LDcuMy00LjksOS43JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5O2MtMS41LDEuNi0zLjQsMi43LTUuNSwzLjFsMCwwYy0wLjYsMC4xLTEuMiwwLjItMS44LDAuMmMtMS40LDAtMi44LTAuMy00LjEtMC44Yy0xLjMtMC41LTIuNi0xLjMtMy44LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNC0xLjktNC43LTQuNS02LjctNy44Yy0xLjctMi42LTMuMi01LjYtNC42LTguOWMtMy4yLTAuNC02LjItMS05LTEuN2MtNi42LTEuNi0xMi4yLTMuOS0xNi4zLTYuOGMtMi44LTEuOS00LjktNC4yLTYuMi02LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjctMS41LTEuMS0zLjEtMS4xLTQuN2MwLTEuNiwwLjQtMy4yLDEuMS'+
			'00LjdjMC43LTEuNSwxLjctMi44LDMtNC4xYzIuNS0yLjUsNS45LTQuNiwxMC02LjRjMy4xLTEuMyw2LjUtMi40LDEwLjMtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDEuNS0wLjIsMy4xLTAuMiw0LjdjLTYsMS41LTExLDMuNi0xNC40LDZjLTIuMywxLjYtMy45LDMuNC00LjcsNWMtMC40LDAuOS0wLjcsMS44LTAuNywyLjhoMGMwLDAuOSwwLjIsMS44LDAuNywyLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLjksMS4xLDEuOSwyLjEsMi45YzEuOSwxLjksNC45LDMuOCw4LjYsNS40YzQuMSwxLjgsOS4yLDMuMiwxNC45LDQuMWMtMS4yLTMuNi0yLjMtNy41LTMuMS0x'+
			'MS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xLTUuNy0xLjctMTEuMy0xLjctMTYuNGMwLTUuMSwwLjUtOS44LDEuNi0xMy44YzEuMS00LDIuNi03LjMsNC45LTkuN2MxLjUtMS42LDMuNC0yLjcsNS41LTMuMXYwYzAuNi0wLjEsMS4yLTAuMiwxLjgtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMCwyLjgsMC4zLDQuMSwwLjhjMS4zLDAuNSwyLjYsMS4zLDMuOCwyLjNjMi40LDEuOSw0LjcsNC41LDYuNyw3LjhjMS43LDIuNiwzLjIsNS42LDQuNiw4LjljMy4yLDAuNCw2LjIsMSw5LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi42LDEuNiwxMi4yLDMuOSwxNi4zLD'+
			'YuOGMyLjgsMS45LDQuOSw0LjIsNi4xLDYuN2MwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwOC45LDcxLjIsMTA3LjksNzIuNiwxMDYuNyw3My44eiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUyLDQ1Yy0wLjIsMS40LTAuMywzLTAuNCw0LjZjMi4zLTAuMyw0LjYtMC42LDctMC43bC0wLjktNC41QzU1LjgsNDQuNiw1My44LDQ0LjgsNTIsNDV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDkuNiw2MC4zYy0xLjItMi42LTMuNC00LjgtNi4xLTYuN2MtNC4xLTIu'+
			'OS05LjctNS4yLTE2LjMtNi44Yy0yLjgtMC43LTUuOS0xLjItOS0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjQtMy4zLTIuOS02LjMtNC42LTguOWMtMi4xLTMuMi00LjMtNS45LTYuNy03LjhjLTEuMi0xLTIuNS0xLjctMy44LTIuM2MtMS4zLTAuNS0yLjctMC44LTQuMS0wLjhjLTAuNiwwLTEuMiwwLjEtMS44LDAuMnYwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi4xLDAuNC00LDEuNi01LjUsMy4xYy0yLjMsMi40LTMuOCw1LjctNC45LDkuN2MtMS4xLDQtMS42LDguNy0xLjYsMTMuOGMwLDUuMSwwLjUsMTAuNywxLjcsMTYuNGMwLjgsNC4xLDEuOSw4LDMuMSwxMS42JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTsmI3g5O2MtNS43LTAuOS0xMC44LTIuMy0xNC45LTQuMWMtMy43LTEuNi02LjctMy41LTguNi01LjRjLTEtMS0xLjctMS45LTIuMS0yLjljLTAuNC0wLjktMC43LTEuOC0wLjctMi44aDBjMC0wLjksMC4yLTEuOCwwLjctMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjgtMS42LDIuMy0zLjQsNC43LTVjMy40LTIuNCw4LjQtNC41LDE0LjQtNmMwLTEuNiwwLjEtMy4yLDAuMi00LjdjLTMuOCwwLjktNy4yLDItMTAuMywzLjNjLTQuMSwxLjgtNy41LDMuOS0xMCw2LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjIsMS4zLTIuMywyLjYtMyw0LjFjLTAuNywx'+
			'LjUtMS4xLDMuMS0xLjEsNC43YzAsMS42LDAuNCwzLjIsMS4xLDQuN2MxLjIsMi42LDMuNCw0LjgsNi4yLDYuN2M0LjEsMi45LDkuNyw1LjIsMTYuMyw2LjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuOCwwLjcsNS45LDEuMyw5LDEuN2MxLjQsMy4zLDIuOSw2LjMsNC42LDguOWMyLjEsMy4yLDQuMyw1LjksNi43LDcuOGMxLjIsMSwyLjUsMS43LDMuOCwyLjNjMS4zLDAuNSwyLjcsMC44LDQuMSwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNiwwLDEuMi0wLjEsMS44LTAuMmwwLDBjMi4xLTAuNCw0LTEuNiw1LjUtMy4xYzIuMy0yLjQsMy44LTUuNyw0LjktOS43YzAuNS0xLjgsMC'+
			'45LTMuOCwxLjEtNS45Yy0wLjUsMC4xLTEuMSwwLjItMS42LDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEsMC4yLTIsMC4zLTMsMC41Yy0wLjQsMi43LTEuMSw1LjItMS45LDcuMmMtMC44LDItMS43LDMuNS0yLjcsNC41Yy0wLjYsMC42LTEuMiwxLTEuOCwxLjNsLTIuNC0xMi4yYy0wLjksMC0xLjgsMC4xLTIuNywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNSwxMi42Yy0wLjYsMC0xLjMtMC4yLTItMC41Yy0xLjUtMC42LTMuMi0xLjgtNC44LTMuNmMtMi40LTIuNS00LjctNi4xLTYuOC0xMC42YzIuNiwwLjIsNS4zLDAuMyw4LDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4'+
			'OTtjMTIuMywwLDIzLjQtMi4xLDMxLjYtNS42YzQuMS0xLjgsNy41LTMuOSwxMC02LjRjMS4yLTEuMywyLjMtMi42LDMtNC4xYzAuNy0xLjUsMS4xLTMuMSwxLjEtNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMTAuOCw2My40LDExMC40LDYxLjgsMTA5LjYsNjAuM3ogTTEwNS42LDY3LjhjLTAuOCwxLjYtMi4zLDMuNC00LjcsNWMtMy41LDIuNS04LjYsNC42LTE0LjgsNi4xYy02LjIsMS41LTEzLjQsMi40LTIxLjEsMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy40LDAtNi44LTAuMi0xMC0wLjVjLTEuNS00LTIuOC04LjQtMy43LTEzLjFsMCwwYy0xLjEtNS41LTEuNi0xMC43LT'+
			'EuNi0xNS41YzAtNi40LDAuOS0xMiwyLjUtMTUuOWMwLjgtMiwxLjctMy41LDIuNy00LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYuOSwzNC45bDIuOCwxNC4yYzAuOSwwLDEuOCwwLDIuNy0wLjFsLTIuOS0xNC43bC02LjktMzQuOWMwLjYsMCwxLjMsMC4yLDEuOSwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNSwwLjYsMy4yLDEuOCw0LjgsMy42YzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41YzMuNCwwLDYuOCwwLjIsMTAsMC41JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5O2MxLjUsNCwyLjgsOC40LDMuNywxMy4xYzEuMSw1LjUsMS42LDEwLjcsMS42LDE1LjVjMCwwLjIsMCwwLjMsMCwwLjRjMS4xLTAuMiwyLjEtMC40LDMuMS0wLjZjMC41LTAuMSwwLjktMC4yLDEuNC0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtNS0wLjYtMTAuNC0xLjctMTUuOWMtMC44LTQuMS0xLjktOC0zLjEtMTEuNmM1LjcsMC45LDEwLjcsMi4zLDE0LjksNC4xYzMuNywxLjYsNi43LDMuNSw4LjYsNS40YzEsMSwxLjcsMS45LDIuMSwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLjksMC43LDEuOCwwLjcsMi44QzEwNi4yLDY1LjksMTA2LDY2Lj'+
			'gsMTA1LjYsNjcuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;gyro_on;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNMTA3LjgsNTguN2MtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy00LjYtMi0xMC4yLTMuNS0xNi41LTQuNWMxLjQsNCwyLjUsOC4zLDMuNCwxMi44YzEuMiw2LjIsMS44LDEyLjIsMS45LDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMC4xLTEsMC4yLTEuNiwwLjNjLTEuMSwwLjItMi4zLDAuNC0zLjQsMC42YzAtMC4yLDAtMC4zLDAtMC41YzAtNS4zLTAuNi0xMS4yLTEuOC0xNy4zYy0xLTUuMi0yLjQt'+
			'MTAuMS00LjEtMTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuNi0wLjQtNy4zLTAuNi0xMS4xLTAuNmwtMS01YzAuMywwLDAuNywwLDEsMGMzLDAsNiwwLjEsOC45LDAuNGMtMi4zLTQuOS00LjktOS03LjUtMTEuN2MtMS45LTItMy43LTMuMy01LjQtNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuOC0wLjMtMS41LTAuNS0yLjItMC41bDcuNywzOC44TDY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMy4xLTE1LjhsLTcuNy0zOC43Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzQ5LjEsMzcuNSw0OCw0My'+
			'42LDQ4LDUwLjhjMCw1LjMsMC42LDExLjIsMS44LDE3LjJsMCwwYzEsNS4yLDIuNCwxMC4xLDQuMSwxNC41YzMuNiwwLjQsNy4zLDAuNiwxMS4xLDAuNmM4LjYsMCwxNi42LTEsMjMuNS0yLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzYuOS0xLjcsMTIuNi00LjEsMTYuNC02LjhjMi42LTEuOCw0LjMtMy43LDUuMi01LjZjMC41LTEsMC43LTIsMC43LTMuMWMwLTEtMC4yLTItMC43LTMuMUMxMDkuNiw2MC45LDEwOC44LDU5LjgsMTA3LjgsNTguN3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE01MC4xLDQ3LjljMC4xLTEuOCwwLjItMy41LDAuNC01LjFjMi4xLTAuMyw0LjItMC41LDYuNC0w'+
			'LjZsMSw0LjlDNTUuMiw0Ny4zLDUyLjYsNDcuNiw1MC4xLDQ3Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRDMTI3LjQsMzAuNiw5OS40LDIuNiw2NSwyLjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTExLjMsNzQuOGMtMi44LDIuOC02LjYsNS4xLTExLjIsNy4xQzkxLDg1LjgsNzguNiw4OC4xLDY1LDg4LjFjLTMsMC02LTAuMS04LjktMC4zYzIuMyw0LjksNC45LDksNy41LDExLjcmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwyLDMuNywzLjMsNS40LDRjMC44LDAuMywxLjUsMC41LDIuMiwwLjVsLTIuOC0xNGMxLDAsMi0wLjEsMy0wLjFsMi43LDEzLjVjMC43LTAuMywxLjMtMC44LDItMS41YzEuMS0xLjIsMi4yLTIuOSwzLTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOS0yLjIsMS42LTQuOSwyLjEtOGMxLjEtMC4yLDIuMy0wLjMsMy4zLTAuNWMwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0wLjcsNC41LTEuMiw2LjVjLTEuMiw0LjQtMi45LDguMS01LjQsMTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNywxLjgtMy43LDMtNi4xLDMuNWwwLDBj'+
			'LTAuNywwLjEtMS4zLDAuMi0yLDAuMmMtMS41LDAtMy4xLTAuMy00LjUtMC45Yy0xLjUtMC42LTIuOS0xLjQtNC4yLTIuNWMtMi43LTIuMS01LjItNS03LjUtOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS44LTIuOS0zLjYtNi4yLTUuMS05LjljLTMuNS0wLjUtNi45LTEuMS0xMC0xLjlDMzMsODMuNSwyNi44LDgxLDIyLjIsNzcuN2MtMy4xLTIuMi01LjQtNC42LTYuOC03LjVjLTAuOC0xLjYtMS4yLTMuNC0xLjItNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEuOCwwLjQtMy42LDEuMi01LjJjMC44LTEuNiwxLjktMy4yLDMuMy00LjVjMi44LTIuOCw2LjYtNS4xLDExLjItNy'+
			'4xYzMuNC0xLjUsNy4zLTIuNywxMS41LTMuN2MtMC4xLDEuNy0wLjIsMy40LTAuMyw1LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy02LjYsMS43LTEyLjIsNC0xNiw2LjdjLTIuNiwxLjgtNC4zLDMuNy01LjIsNS42Yy0wLjUsMS0wLjcsMi0wLjcsMy4xaDBjMCwxLDAuMiwyLDAuNywzLjFjMC41LDEsMS4zLDIuMSwyLjMsMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjEsMi4xLDUuNCw0LjIsOS42LDZjNC42LDIsMTAuMiwzLjUsMTYuNSw0LjVjLTEuNC00LTIuNS04LjMtMy40LTEyLjhDNDMuNiw2Mi42LDQzLDU2LjQsNDMsNTAuOGMwLTUuNywwLjYtMTAuOSwxLjgtMTUuMyYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYwYzAuNy0wLjEsMS4zLTAuMiwyLTAuMmMxLjUsMCwzLjEsMC4zLDQuNSwwLjljMS41LDAuNiwyLjksMS40LDQuMiwyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNywyLjEsNS4yLDUsNy41LDguNmMxLjgsMi45LDMuNiw2LjIsNS4xLDkuOWMzLjUsMC41LDYuOSwxLjEsMTAsMS45YzcuMywxLjgsMTMuNSw0LjQsMTguMSw3LjZjMy4xLDIuMiw1LjQsNC42LDYuOCw3LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOCwxLjYsMS4yLDMuNCwxLjIsNS4yYzAsMS44LT'+
			'AuNCwzLjYtMS4yLDUuMkMxMTMuOCw3MS45LDExMi43LDczLjQsMTExLjMsNzQuOHoiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01MC41LDQyLjhjLTAuMiwxLjYtMC40LDMuMy0wLjQsNS4xYzIuNS0wLjQsNS4xLTAuNiw3LjgtMC44bC0xLTQuOUM1NC43LDQyLjMsNTIuNiw0Mi41LDUwLjUsNDIuOHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExNC42LDU5LjhjLTEuNC0yLjktMy44LTUuMy02LjgtNy41Yy00LjYtMy4yLTEwLjgtNS44LTE4LjEtNy42Yy0zLjEtMC44LTYuNS0xLjQtMTAtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS41'+
			'LTMuNy0zLjMtNy01LjEtOS45Yy0yLjMtMy42LTQuOC02LjUtNy41LTguNmMtMS4zLTEuMS0yLjctMS45LTQuMi0yLjVjLTEuNS0wLjYtMy0wLjktNC41LTAuOWMtMC43LDAtMS40LDAuMS0yLDAuMnYwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi40LDAuNS00LjQsMS43LTYuMSwzLjVjLTIuNSwyLjctNC4yLDYuNC01LjQsMTAuOGMtMS4yLDQuNC0xLjgsOS42LTEuOCwxNS4zYzAsNS43LDAuNiwxMS44LDEuOSwxOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjksNC41LDIuMSw4LjgsMy40LDEyLjhjLTYuMy0xLTExLjktMi42LTE2LjUtNC41Yy00LjItMS44LTcuNC0zLjktOS42LT'+
			'ZjLTEuMS0xLjEtMS44LTIuMS0yLjMtMy4yYy0wLjUtMS0wLjctMi0wLjctMy4xaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMSwwLjItMiwwLjctMy4xYzAuOS0xLjgsMi42LTMuOCw1LjItNS42YzMuOC0yLjcsOS4zLTUsMTUuOS02LjdjMC0xLjgsMC4xLTMuNSwwLjMtNS4yYy00LjIsMS04LDIuMi0xMS41LDMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuNiwyLTguNCw0LjMtMTEuMiw3LjFjLTEuNCwxLjQtMi41LDIuOS0zLjMsNC41Yy0wLjgsMS42LTEuMiwzLjQtMS4yLDUuMmMwLDEuOCwwLjQsMy42LDEuMiw1LjJjMS40LDIuOSwzLjgsNS4zLDYuOCw3LjUmI3hkOyYjeGE7'+
			'JiN4OTsmI3g5OyYjeDk7YzQuNiwzLjIsMTAuOCw1LjgsMTguMSw3LjZjMy4xLDAuOCw2LjUsMS40LDEwLDEuOWMxLjUsMy43LDMuMyw3LDUuMSw5LjljMi4zLDMuNiw0LjgsNi41LDcuNSw4LjZjMS4zLDEuMSwyLjcsMS45LDQuMiwyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNSwwLjYsMywwLjksNC41LDAuOWMwLjcsMCwxLjMtMC4xLDItMC4ybDAsMGMyLjQtMC41LDQuNC0xLjcsNi4xLTMuNWMyLjUtMi43LDQuMi02LjQsNS40LTEwLjhjMC41LTIsMC45LTQuMiwxLjItNi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC42LDAuMS0xLjIsMC4zLTEuOCwwLjRjLTEuMSwwLjItMi'+
			'4yLDAuNC0zLjMsMC41Yy0wLjUsMy0xLjIsNS43LTIuMSw4Yy0wLjksMi4yLTEuOSwzLjktMyw1Yy0wLjYsMC43LTEuMywxLjItMiwxLjVsLTIuNy0xMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMSwwLjEtMiwwLjEtMywwLjFsMi44LDE0Yy0wLjctMC4xLTEuNC0wLjItMi4yLTAuNWMtMS43LTAuNy0zLjUtMi01LjQtNGMtMi42LTIuOC01LjItNi44LTcuNS0xMS43QzU5LDg4LDYyLDg4LjEsNjUsODguMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTMuNiwwLDI2LTIuMywzNS4yLTYuMmM0LjYtMiw4LjQtNC4zLDExLjItNy4xYzEuNC0xLjQsMi41LTIuOSwzLjMtNC41YzAuOC0xLjYs'+
			'MS4yLTMuNCwxLjItNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMTUuOCw2My4yLDExNS40LDYxLjQsMTE0LjYsNTkuOHogTTExMC4xLDY4LjFjLTAuOSwxLjgtMi42LDMuOC01LjIsNS42Yy0zLjksMi43LTkuNiw1LjEtMTYuNCw2LjhjLTYuOSwxLjctMTQuOSwyLjctMjMuNSwyLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjgsMC03LjUtMC4yLTExLjEtMC42Yy0xLjctNC40LTMuMS05LjMtNC4xLTE0LjVsMCwwQzQ4LjYsNjEuOSw0OCw1Ni4xLDQ4LDUwLjhjMC03LjEsMS0xMy4zLDIuOC0xNy43YzAuOS0yLjIsMS45LTMuOSwzLTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yz'+
			'AuNy0wLjcsMS4zLTEuMiwyLTEuNWw3LjcsMzguN2wzLjEsMTUuOGMxLDAsMiwwLDMtMC4xbC0zLjItMTYuM0w1OC44LDI2YzAuNywwLjEsMS40LDAuMiwyLjIsMC41YzEuNiwwLjcsMy41LDIsNS40LDQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNiwyLjgsNS4yLDYuOCw3LjUsMTEuN0M3MSw0Miw2OCw0MS45LDY1LDQxLjljLTAuMywwLTAuNywwLTEsMGwxLDVjMy44LDAsNy41LDAuMiwxMS4xLDAuNmMxLjcsNC40LDMuMSw5LjMsNC4xLDE0LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMiw2LjEsMS44LDExLjksMS44LDE3LjNjMCwwLjIsMCwwLjMsMCwwLjVjMS4yLTAuMiwyLjMt'+
			'MC40LDMuNC0wLjZjMC41LTAuMSwxLTAuMiwxLjYtMC4zYzAtNS41LTAuNi0xMS41LTEuOS0xNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC45LTQuNS0yLjEtOC44LTMuNC0xMi44YzYuMywxLDExLjksMi42LDE2LjUsNC41YzQuMiwxLjgsNy40LDMuOSw5LjYsNmMxLjEsMS4xLDEuOCwyLjEsMi4zLDMuMmMwLjUsMSwwLjcsMiwwLjcsMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxMTAuOCw2NiwxMTAuNiw2NywxMTAuMSw2OC4xeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;gyro_on;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro_on.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getUseGyro() == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.style.opacity=0;
				}
			}
		}
		this._gyro_on.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='0';
			me._gyro_on.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
			me.__360image_gyro.ggTimeout=Number("4") * 1000.0;
			me.__360image_gyro.ggTimestamp=me.ggCurrentTime;
			me.__360image_timer.ggTimeout=Number("0.4") * 1000.0;
			me.__360image_timer.ggTimestamp=me.ggCurrentTime;
		}
		this._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
		}
		this._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
		}
		this._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=this._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNCw5Niw4LjksNjUsOC45eiBNNDYuOCwzOC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4xLTQsMi42LTcuMyw0LjktOS43YzEuNS0xLjYsMy40LTIuNyw1LjUtMy4xdjBjMC42LTAuMSwxLjItMC4yLDEuOC0wLjJjMS40LDAsMi44LDAuMyw0LjEsMC44YzEuMywwLjUsMi42LDEu'+
			'MywzLjgsMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDEuOSw0LjcsNC41LDYuNyw3LjhjMS43LDIuNiwzLjIsNS42LDQuNiw4LjljMC4xLDAsMC4yLDAsMC4zLDAuMWwtNC4xLDQuMWMtMy0wLjMtNi4yLTAuNS05LjUtMC41bC0wLjktNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC42LDAsMC45LDBjMi43LDAsNS40LDAuMSw4LDAuM2MtMi4xLTQuNC00LjQtOC4xLTYuOC0xMC42Yy0xLjctMS44LTMuNC0zLTQuOC0zLjZjLTAuNy0wLjMtMS4zLTAuNC0xLjktMC41bDUuNywyOC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTIuMywyLjNsLTYtMzAuNGMtMC42LDAuMy0xLjIsMC43LTEuOC'+
			'wxLjRjLTEsMS0xLjksMi42LTIuNyw0LjVjLTEuNiwzLjktMi41LDkuNS0yLjUsMTUuOWMwLDQuOCwwLjUsMTAuMSwxLjYsMTUuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMS4zLDAuNSwyLjUsMC44LDMuOGwtMy43LDMuN2MtMC42LTIuMS0xLjEtNC4zLTEuNi02LjZjLTEuMS01LjctMS43LTExLjMtMS43LTE2LjRDNDUuMiw0Nyw0NS44LDQyLjQsNDYuOCwzOC40eiBNNTguNiw0OC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuNCwwLjItNC44LDAuNC03LDAuN2MwLjEtMS42LDAuMi0zLjEsMC40LTQuNmMxLjktMC4yLDMuOC0wLjQsNS44LTAuNkw1OC42LDQ4Ljl6IE0yMC40LDY5Ljdj'+
			'LTAuNy0xLjUtMS4xLTMuMS0xLjEtNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjYsMC40LTMuMiwxLjEtNC43YzAuNy0xLjUsMS43LTIuOCwzLTQuMWMyLjUtMi41LDUuOS00LjYsMTAtNi40YzMuMS0xLjMsNi41LTIuNCwxMC4zLTMuM2MtMC4xLDEuNS0wLjIsMy4xLTAuMiw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOGMwLjUsMC45LDEuMSwxLjksMi4xLDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOSwxLjksNC45LDMuOCw4Lj'+
			'YsNS40YzIuOCwxLjIsNS45LDIuMiw5LjQsM2wtMy43LDMuN2MtNS43LTEuNi0xMC42LTMuNy0xNC40LTYuM0MyMy44LDc0LjUsMjEuNiw3Mi4zLDIwLjQsNjkuN3ogTTMyLjgsMTAwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjEtMC40bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRzMC44LDAuMSwxLjEsMC40bDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2QzMzLjYsMTAwLjIsMzMuMiwxMDAuMywzMi44LDEwMC4zeiBNNzguNyw2Mi4zYy0wLjMtMS4z'+
			'LTAuNS0yLjUtMC44LTMuOGwzLjctMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDIuMSwxLjEsNC4zLDEuNiw2LjZjMS4xLDUuNiwxLjYsMTEsMS43LDE1LjljLTAuNSwwLjEtMC45LDAuMi0xLjQsMC4zYy0xLDAuMi0yLDAuNC0zLjEsMC42YzAtMC4xLDAtMC4zLDAtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODAuMyw3Myw3OS44LDY3LjgsNzguNyw2Mi4zeiBNNjkuMyw3OS40Yy0wLjksMC0xLjgsMC4xLTIuNywwLjFsLTEuNi04LjFsMi4zLTIuM0w2OS4zLDc5LjR6IE0xMDYuNyw3My44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuNSwyLjUtNS45LDQuNi0xMCw2LjRjLTguMiwzLjUtMTkuNC'+
			'w1LjYtMzEuNiw1LjZjLTIuNywwLTUuNC0wLjEtOC0wLjNjMi4xLDQuNCw0LjQsOC4xLDYuOCwxMC42YzEuNywxLjgsMy40LDMsNC44LDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjMsMS40LDAuNCwyLDAuNWwtMi41LTEyLjZjMC45LDAsMS44LTAuMSwyLjctMC4xbDIuNCwxMi4yYzAuNi0wLjMsMS4yLTAuNywxLjgtMS4zYzEtMSwxLjktMi42LDIuNy00LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgtMiwxLjQtNC40LDEuOS03LjJjMS0wLjEsMi0wLjMsMy0wLjVjMC42LTAuMSwxLjEtMC4yLDEuNi0wLjNjLTAuMywyLjEtMC42LDQuMS0xLjEsNS45Yy0xLjEsNC0yLjYsNy4zLTQuOSw5'+
			'LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41LDEuNi0zLjQsMi43LTUuNSwzLjFsMCwwYy0wLjYsMC4xLTEuMiwwLjItMS44LDAuMmMtMS40LDAtMi44LTAuMy00LjEtMC44Yy0xLjMtMC41LTIuNi0xLjMtMy44LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjQtMS45LTQuNy00LjUtNi43LTcuOGMtMS43LTIuNi0zLjItNS42LTQuNi04LjljLTAuMSwwLTAuMiwwLTAuNC0wLjFsNC4xLTQuMWMzLDAuMyw2LjIsMC41LDkuNSwwLjVjNy43LDAsMTQuOS0wLjksMjEuMS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M2LjItMS41LDExLjMtMy43LDE0LjgtNi4xYzIuMy0xLjYsMy45LTMuNCw0LjctNW'+
			'MwLjQtMC45LDAuNy0xLjgsMC43LTIuOGMwLTAuOS0wLjItMS44LTAuNy0yLjhjLTAuNC0wLjktMS4xLTEuOS0yLjEtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy0yLjgtMS4yLTYtMi4yLTkuNS0zbDMuNy0zLjdjNS43LDEuNiwxMC42LDMuNywxNC40LDYuM2MyLjgsMS45LDQuOSw0LjIsNi4xLDYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywxLjUsMS4xLDMuMSwxLjEsNC43YzAsMS42LTAuNCwzLjItMS4xLDQuN0MxMDguOSw3MS4yLDEwNy45LDcyLjYsMTA2LjcsNzMuOHoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxLjYs'+
			'NDkuNmMyLjMtMC4zLDQuNi0wLjYsNy0wLjdsLTAuOS00LjVjLTIsMC4xLTMuOSwwLjMtNS44LDAuNkM1MS44LDQ2LjUsNTEuNyw0OCw1MS42LDQ5LjZ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05OS45LDMxLjhsLTEuNy0xLjdjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40cy0wLjgsMC4xLTEuMSwwLjRsLTY2LDY2Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMywwLjcsMC40LDEuMSwwLjRjMC40LDAsMC44LTAuMSwxLjEtMC40bDY2LTY2QzEwMC41LDMzLjMsMTAwLjUsMzIuNCw5OS45LDMxLjh6Ii8+CiAgIDxwYX'+
			'RoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02Ni41LDc5LjVjMC45LDAsMS44LDAsMi43LTAuMWwtMi0xMC4zbC0yLjMsMi4zTDY2LjUsNzkuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTgzLjQsNzcuN2MwLjUtMC4xLDAuOS0wLjIsMS40LTAuM2MwLTUtMC42LTEwLjQtMS43LTE1LjljLTAuNC0yLjMtMS00LjUtMS42LTYuNmwtMy43LDMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDEuMiwwLjYsMi41LDAuOCwzLjhjMS4xLDUuNSwxLjYsMTAuNywxLjYsMTUuNWMwLDAuMiwwLDAuMywwLDAuNEM4MS4zLDc4LjEsODIuNCw3Ny45LDgzLjQsNzcuN3oiLz4KICAgPHBhdGggZmls'+
			'bD0iI0ZGRkZGRiIgZD0iTTQ4LjUsNzUuMmwzLjctMy43Yy0wLjMtMS4yLTAuNi0yLjUtMC44LTMuOGwwLDBjLTEuMS01LjUtMS42LTEwLjctMS42LTE1LjVjMC02LjQsMC45LTEyLDIuNS0xNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjgtMiwxLjctMy41LDIuNy00LjVjMC42LTAuNiwxLjItMS4xLDEuOC0xLjRsNiwzMC40bDIuMy0yLjNsLTUuNy0yOC43YzAuNiwwLDEuMywwLjIsMS45LDAuNWMxLjUsMC42LDMuMiwxLjgsNC44LDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi40LDIuNSw0LjcsNi4xLDYuOCwxMC42Yy0yLjYtMC4yLTUuMy0wLjMtOC0wLjNjLTAuMywwLTAuNi'+
			'wwLTAuOSwwbDAuOSw0LjVjMy4zLDAsNi40LDAuMiw5LjUsMC41bDQuMS00LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEsMC0wLjIsMC0wLjMtMC4xYy0xLjQtMy4zLTIuOS02LjMtNC42LTguOWMtMi4xLTMuMi00LjMtNS45LTYuNy03LjhjLTEuMi0xLTIuNS0xLjctMy44LTIuM2MtMS4zLTAuNS0yLjctMC44LTQuMS0wLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJ2MGMtMi4xLDAuNC00LDEuNi01LjUsMy4xYy0yLjMsMi40LTMuOCw1LjctNC45LDkuN2MtMS4xLDQtMS42LDguNy0xLjYsMTMuOGMwLDUuMSwwLjUsMTAuNywxLjcsMTYuNCYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNDcuNCw3MC44LDQ3LjksNzMsNDguNSw3NS4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDQuNiw3OS4xYy0zLjUtMC44LTYuNy0xLjgtOS40LTNjLTMuNy0xLjYtNi43LTMuNS04LjYtNS40Yy0xLTEtMS43LTEuOS0yLjEtMi45Yy0wLjQtMC45LTAuNy0xLjgtMC43LTIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMGMwLTAuOSwwLjItMS44LDAuNy0yLjhjMC44LTEuNiwyLjMtMy40LDQuNy01YzMuNC0yLjQsOC40LTQuNSwxNC40LTZjMC0xLjYsMC4xLTMuMiwwLjItNC43Yy0zLjgsMC45LTcuMiwyLTEwLjMsMy4zJiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2MtNC4xLDEuOC03LjUsMy45LTEwLDYuNGMtMS4yLDEuMy0yLjMsMi42LTMsNC4xYy0wLjcsMS41LTEuMSwzLjEtMS4xLDQuN2MwLDEuNiwwLjQsMy4yLDEuMSw0LjdjMS4yLDIuNiwzLjQsNC44LDYuMiw2LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNywyLjYsOC42LDQuNywxNC40LDYuM0w0NC42LDc5LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDkuNyw2MC4zYy0xLjItMi42LTMuNC00LjgtNi4xLTYuN2MtMy43LTIuNi04LjYtNC43LTE0LjQtNi4zbC0zLjcsMy43YzMuNSwwLjgsNi43LDEuOCw5LjUsMyYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtjMy43LDEuNiw2LjcsMy41LDguNiw1LjRjMSwxLDEuNywxLjksMi4xLDIuOWMwLjQsMC45LDAuNywxLjgsMC43LDIuOGMwLDAuOS0wLjIsMS44LTAuNywyLjhjLTAuOCwxLjYtMi4zLDMuNC00LjcsNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuNSwyLjUtOC42LDQuNi0xNC44LDYuMWMtNi4yLDEuNS0xMy40LDIuNC0yMS4xLDIuNGMtMy4zLDAtNi40LTAuMi05LjUtMC41bC00LjEsNC4xYzAuMSwwLDAuMiwwLDAuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwzLjMsMi45LDYuMyw0LjYsOC45YzIuMSwzLjIsNC4zLDUuOSw2LjcsNy44YzEuMiwxLDIuNSwxLjcsMy'+
			'44LDIuM2MxLjMsMC41LDIuNywwLjgsNC4xLDAuOGMwLjYsMCwxLjItMC4xLDEuOC0wLjJsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjEtMC40LDQtMS42LDUuNS0zLjFjMi4zLTIuNCwzLjgtNS43LDQuOS05LjdjMC41LTEuOCwwLjktMy44LDEuMS01LjljLTAuNSwwLjEtMS4xLDAuMi0xLjYsMC4zYy0xLDAuMi0yLDAuMy0zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwyLjctMS4xLDUuMi0xLjksNy4yYy0wLjgsMi0xLjcsMy41LTIuNyw0LjVjLTAuNiwwLjYtMS4yLDEtMS44LDEuM2wtMi40LTEyLjJjLTAuOSwwLTEuOCwwLjEtMi43LDAuMWwyLjUsMTIuNiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNiwwLTEuMy0wLjItMi0wLjVjLTEuNS0wLjYtMy4yLTEuOC00LjgtMy42Yy0yLjQtMi41LTQuNy02LjEtNi44LTEwLjZjMi42LDAuMiw1LjMsMC4zLDgsMC4zYzEyLjMsMCwyMy40LTIuMSwzMS42LTUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC4xLTEuOCw3LjUtMy45LDEwLTYuNGMxLjItMS4zLDIuMy0yLjYsMy00LjFjMC43LTEuNSwxLjEtMy4xLDEuMS00LjdDMTEwLjgsNjMuNCwxMTAuNCw2MS44LDEwOS43LDYwLjN6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;gyro_off;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRDMTI3LjQsMzAuNiw5OS41LDIuNiw2NSwyLjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTQ0LjgsMzUuNGMxLjItNC40LDIuOS04LjEsNS40LTEwLjhjMS43LTEu'+
			'OCwzLjctMyw2LjEtMy41djBjMC43LTAuMSwxLjMtMC4yLDItMC4yYzEuNSwwLDMuMSwwLjMsNC41LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNSwwLjYsMi45LDEuNCw0LjIsMi41YzIuNywyLjEsNS4yLDUsNy41LDguNmMxLjgsMi45LDMuNiw2LjIsNS4xLDkuOWMwLjEsMCwwLjMsMCwwLjQsMC4xbC00LjUsNC41Yy0zLjQtMC4zLTYuOS0wLjUtMTAuNS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS01YzAuMywwLDAuNywwLDEsMGMzLDAsNiwwLjEsOC45LDAuNGMtMi4zLTQuOS00LjktOS03LjUtMTEuN2MtMS45LTItMy43LTMuMy01LjQtNGMtMC44LTAuMy0xLjUtMC41LTIuMi0wLjVsNi'+
			'4zLDMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMi42LDIuNmwtNi43LTMzLjhjLTAuNywwLjMtMS4zLDAuOC0yLDEuNWMtMS4xLDEuMi0yLjIsMi45LTMsNUM0OS4xLDM3LjUsNDgsNDMuNiw0OCw1MC44YzAsNS4zLDAuNiwxMS4yLDEuOCwxNy4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywxLjQsMC42LDIuOCwwLjksNC4ybC00LjEsNC4xYy0wLjctMi40LTEuMi00LjgtMS43LTcuM0M0My42LDYyLjYsNDMsNTYuNCw0Myw1MC44QzQzLDQ1LjEsNDMuNiwzOS45LDQ0LjgsMzUuNHogTTU3LjksNDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjcsMC4yLTUuMywwLjQtNy44LDAuOGMwLjEt'+
			'MS44LDAuMi0zLjUsMC40LTUuMWMyLjEtMC4zLDQuMi0wLjUsNi40LTAuNkw1Ny45LDQ3LjF6IE0xNS40LDcwLjJjLTAuOC0xLjYtMS4yLTMuNC0xLjItNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjgsMC40LTMuNiwxLjItNS4yYzAuOC0xLjYsMS45LTMuMiwzLjMtNC41YzIuOC0yLjgsNi42LTUuMSwxMS4yLTcuMWMzLjQtMS41LDcuMy0yLjcsMTEuNS0zLjdjLTAuMSwxLjctMC4yLDMuNC0wLjMsNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNiwxLjctMTIuMiw0LTE2LDYuN2MtMi42LDEuOC00LjMsMy43LTUuMiw1LjZjLTAuNSwxLTAuNywyLTAuNywzLjFoMGMwLDEsMC4yLDIsMC43LD'+
			'MuMWMwLjUsMSwxLjMsMi4xLDIuMywzLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjEsMi4xLDUuNCw0LjIsOS42LDZjMy4xLDEuMyw2LjYsMi40LDEwLjUsMy4zbC00LjEsNC4xYy02LjQtMS44LTExLjgtNC4xLTE2LTdDMTkuMiw3NS42LDE2LjgsNzMuMSwxNS40LDcwLjJ6IE0yOS4zLDEwNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNyww'+
			'LDIuNGwtNzMuMyw3My4zQzMwLjEsMTA0LjEsMjkuNywxMDQuMywyOS4zLDEwNC4zeiBNODAuMiw2MmMtMC4zLTEuNC0wLjYtMi44LTAuOS00LjJsNC4xLTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywyLjQsMS4yLDQuOCwxLjcsNy4zYzEuMiw2LjIsMS44LDEyLjIsMS45LDE3LjdjLTAuNSwwLjEtMSwwLjItMS42LDAuM2MtMS4xLDAuMi0yLjMsMC40LTMuNCwwLjZjMC0wLjIsMC0wLjMsMC0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M4Miw3My45LDgxLjQsNjguMSw4MC4yLDYyeiBNNjkuNyw4MWMtMSwwLTIsMC4xLTMsMC4xbC0xLjgtOC45bDIuNi0yLjZMNjkuNyw4MXogTTExMS4zLDc0Lj'+
			'hjLTIuOCwyLjgtNi42LDUuMS0xMS4yLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzkxLDg1LjgsNzguNiw4OC4xLDY1LDg4LjFjLTMsMC02LTAuMS04LjktMC4zYzIuMyw0LjksNC45LDksNy41LDExLjdjMS45LDIsMy43LDMuMyw1LjQsNGMwLjgsMC4zLDEuNSwwLjUsMi4yLDAuNWwtMi44LTE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMSwwLDItMC4xLDMtMC4xbDIuNywxMy41YzAuNy0wLjMsMS4zLTAuOCwyLTEuNWMxLjEtMS4yLDIuMi0yLjksMy01YzAuOS0yLjIsMS42LTQuOSwyLjEtOGMxLjEtMC4yLDIuMy0wLjMsMy4zLTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjEsMS4yLTAuMiwx'+
			'LjgtMC40Yy0wLjMsMi4zLTAuNyw0LjUtMS4yLDYuNWMtMS4yLDQuNC0yLjksOC4xLTUuNCwxMC44Yy0xLjcsMS44LTMuNywzLTYuMSwzLjVsMCwwYy0wLjcsMC4xLTEuMywwLjItMiwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41LDAtMy4xLTAuMy00LjUtMC45Yy0xLjUtMC42LTIuOS0xLjQtNC4yLTIuNWMtMi43LTIuMS01LjItNS03LjUtOC42Yy0xLjgtMi45LTMuNi02LjItNS4xLTkuOWMtMC4xLDAtMC4zLDAtMC40LTAuMWw0LjUtNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMy40LDAuMyw2LjksMC41LDEwLjUsMC41YzguNiwwLDE2LjYtMSwyMy41LTIuN2M2LjktMS43LDEyLjYtNC4xLD'+
			'E2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEtMC4yLTItMC43LTMuMWMtMC41LTEtMS4zLTIuMS0yLjMtMy4yYy0yLjEtMi4xLTUuNC00LjItOS42LTZjLTMuMS0xLjMtNi42LTIuNC0xMC41LTMuNGw0LjEtNC4xYzYuNCwxLjgsMTEuOCw0LjEsMTYsNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuMSwyLjIsNS40LDQuNiw2LjgsNy41YzAuOCwxLjYsMS4yLDMuNCwxLjIsNS4yYzAsMS44LTAuNCwzLjYtMS4yLDUuMkMxMTMuOCw3MS45LDExMi43LDczLjQsMTExLjMsNzQuOHoiLz4KICA8Zz4KICAgPHBhdGggZmls'+
			'bD0iI0ZGRkZGRiIgZD0iTTUwLjEsNDcuOWMyLjUtMC40LDUuMS0wLjYsNy44LTAuOGwtMS00LjljLTIuMiwwLjItNC4zLDAuNC02LjQsMC42QzUwLjMsNDQuNCw1MC4yLDQ2LjEsNTAuMSw0Ny45eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTAzLjgsMjguMWwtMS44LTEuOGMtMC4zLTAuMy0wLjgtMC41LTEuMi0wLjVzLTAuOSwwLjItMS4yLDAuNUwyNi4yLDk5LjVjLTAuNywwLjctMC43LDEuNywwLDIuNGwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC4zLDAuOCwwLjUsMS4yLDAuNXMwLjktMC4yLDEuMi0wLjVsNzMuMy03My4zQzEwNC40LDI5LjgsMTA0Lj'+
			'QsMjguNywxMDMuOCwyOC4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjYuNyw4MS4xYzEsMCwyLDAsMy0wLjFsLTIuMy0xMS40bC0yLjYsMi42TDY2LjcsODEuMXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTg1LjQsNzkuMWMwLjUtMC4xLDEtMC4yLDEuNi0wLjNjMC01LjUtMC42LTExLjUtMS45LTE3LjdjLTAuNS0yLjUtMS4xLTUtMS43LTcuM2wtNC4xLDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDEuNCwwLjcsMi44LDAuOSw0LjJjMS4yLDYuMSwxLjgsMTEuOSwxLjgsMTcuM2MwLDAuMiwwLDAuMywwLDAuNUM4My4yLDc5LjUsODQuMyw3OS4zLDg1'+
			'LjQsNzkuMXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ2LjYsNzYuM2w0LjEtNC4xYy0wLjMtMS40LTAuNi0yLjgtMC45LTQuMmwwLDBDNDguNiw2MS45LDQ4LDU2LjEsNDgsNTAuOGMwLTcuMSwxLTEzLjMsMi44LTE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOS0yLjIsMS45LTMuOSwzLTVjMC43LTAuNywxLjMtMS4yLDItMS41bDYuNywzMy44bDIuNi0yLjZMNTguOCwyNmMwLjcsMC4xLDEuNCwwLjIsMi4yLDAuNWMxLjYsMC43LDMuNSwyLDUuNCw0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMi44LDUuMiw2LjgsNy41LDExLjdDNzEsNDIsNjguMSw0MS45LD'+
			'Y1LDQxLjljLTAuMywwLTAuNywwLTEsMGwxLDVjMy42LDAsNy4xLDAuMiwxMC41LDAuNWw0LjUtNC41Yy0wLjEsMC0wLjMsMC0wLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS41LTMuNy0zLjMtNy01LjEtOS45Yy0yLjMtMy42LTQuOC02LjUtNy41LTguNmMtMS4zLTEuMS0yLjctMS45LTQuMi0yLjVjLTEuNS0wLjYtMy0wLjktNC41LTAuOWMtMC43LDAtMS40LDAuMS0yLDAuMnYwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi40LDAuNS00LjQsMS43LTYuMSwzLjVjLTIuNSwyLjctNC4yLDYuNC01LjQsMTAuOGMtMS4yLDQuNC0xLjgsOS42LTEuOCwxNS4zYzAsNS43LDAuNiwx'+
			'MS44LDEuOSwxOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M0NS40LDcxLjUsNDYsNzMuOSw0Ni42LDc2LjN6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00Mi4zLDgwLjZjLTMuOS0wLjktNy40LTItMTAuNS0zLjNjLTQuMi0xLjgtNy40LTMuOS05LjYtNmMtMS4xLTEuMS0xLjgtMi4xLTIuMy0zLjJjLTAuNS0xLTAuNy0yLTAuNy0zLjFoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLDAuMi0yLDAuNy0zLjFjMC45LTEuOCwyLjYtMy44LDUuMi01LjZjMy44LTIuNyw5LjMtNSwxNS45LTYuN2MwLTEuOCwwLjEtMy41LDAuMy01LjJjLTQuMiwxLTgsMi4yLTExLjUsMy43Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC42LDItOC40LDQuMy0xMS4yLDcuMWMtMS40LDEuNC0yLjUsMi45LTMuMyw0LjVjLTAuOCwxLjYtMS4yLDMuNC0xLjIsNS4yYzAsMS44LDAuNCwzLjYsMS4yLDUuMmMxLjQsMi45LDMuOCw1LjMsNi44LDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC4xLDIuOSw5LjYsNS4zLDE2LDdMNDIuMyw4MC42eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTE0LjYsNTkuOGMtMS40LTIuOS0zLjgtNS4zLTYuOC03LjVjLTQuMS0yLjktOS42LTUuMy0xNi03bC00LjEsNC4xYzMuOSwwLjksNy40LDIsMTAuNSwzLjQmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7YzQuMiwxLjgsNy40LDMuOSw5LjYsNmMxLjEsMS4xLDEuOCwyLjEsMi4zLDMuMmMwLjUsMSwwLjcsMiwwLjcsMy4xYzAsMS0wLjIsMi0wLjcsMy4xYy0wLjksMS44LTIuNiwzLjgtNS4yLDUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuOSwyLjctOS42LDUuMS0xNi40LDYuOGMtNi45LDEuNy0xNC45LDIuNy0yMy41LDIuN2MtMy42LDAtNy4yLTAuMi0xMC41LTAuNUw1MCw4Ny4xYzAuMSwwLDAuMywwLDAuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNSwzLjcsMy4zLDcsNS4xLDkuOWMyLjMsMy42LDQuOCw2LjUsNy41LDguNmMxLjMsMS4xLDIuNywxLjksNC'+
			'4yLDIuNWMxLjUsMC42LDMsMC45LDQuNSwwLjljMC43LDAsMS4zLTAuMSwyLTAuMmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNC0wLjUsNC40LTEuNyw2LjEtMy41YzIuNS0yLjcsNC4yLTYuNCw1LjQtMTAuOGMwLjUtMiwwLjktNC4yLDEuMi02LjVjLTAuNiwwLjEtMS4yLDAuMy0xLjgsMC40Yy0xLjEsMC4yLTIuMiwwLjQtMy4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNSwzLTEuMiw1LjctMi4xLDhjLTAuOSwyLjItMS45LDMuOS0zLDVjLTAuNiwwLjctMS4zLDEuMi0yLDEuNWwtMi43LTEzLjVjLTEsMC4xLTIsMC4xLTMsMC4xbDIuOCwxNCYjeGQ7JiN4YTsmI3g5'+
			'OyYjeDk7JiN4OTtjLTAuNy0wLjEtMS40LTAuMi0yLjItMC41Yy0xLjctMC43LTMuNS0yLTUuNC00Yy0yLjYtMi44LTUuMi02LjgtNy41LTExLjdDNTksODgsNjIsODguMSw2NSw4OC4xYzEzLjYsMCwyNi0yLjMsMzUuMi02LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQuNi0yLDguNC00LjMsMTEuMi03LjFjMS40LTEuNCwyLjUtMi45LDMuMy00LjVjMC44LTEuNiwxLjItMy40LDEuMi01LjJDMTE1LjgsNjMuMiwxMTUuNCw2MS40LDExNC42LDU5Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;gyro_off;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gyro_off.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getUseGyro() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.style.opacity=0;
				}
			}
		}
		this._gyro_off.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='0';
			me._gyro_off.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		this._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		this._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		this._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me._controller_slider.appendChild(me._gyro);
		el=me._projection_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="projection_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._projection_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._projection_buttons.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._projection_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_projection') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_projection') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_projection') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_projection') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_projection') == 4)
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				(me.player.getVariableValue('pos_projection') == 5)
			)
			{
				newLogicStatePosition = 5;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._projection_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._projection_buttons.style[domTransition]='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStatePosition == 0) {
					me._projection_buttons.style.left='0px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 1) {
					me._projection_buttons.style.left='32px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 2) {
					me._projection_buttons.style.left='64px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 3) {
					me._projection_buttons.style.left='96px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 4) {
					me._projection_buttons.style.left='128px';
					me._projection_buttons.style.top='0px';
				}
				else if (me._projection_buttons.ggCurrentLogicStatePosition == 5) {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
				else {
					me._projection_buttons.style.left='160px';
					me._projection_buttons.style.top='0px';
				}
			}
		}
		me._projection_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_projection') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._projection_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._projection_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._projection_buttons.style[domTransition]='left 0s, top 0s';
				if (me._projection_buttons.ggCurrentLogicStateVisible == 0) {
					me._projection_buttons.style.visibility=(Number(me._projection_buttons.style.opacity)>0||!me._projection_buttons.style.opacity)?'inherit':'hidden';
					me._projection_buttons.ggVisible=true;
				}
				else {
					me._projection_buttons.style.visibility="hidden";
					me._projection_buttons.ggVisible=false;
				}
			}
		}
		this._projection_buttons.onclick=function (e) {
			if (
				(
					(me.player.getProjection() == 4)
				)
			) {
				me.player.changeProjectionEx(9,1);
			}
			if (
				(
					(me.player.getProjection() == 9)
				)
			) {
				me.player.changeProjectionEx(12,1);
			}
			if (
				(
					(me.player.getProjection() == 12)
				)
			) {
				me.player.changeProjectionEx(4,1);
			}
		}
		this._projection_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectilinear=document.createElement('div');
		els=this._rectilinear__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLm'+
			'NvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTguOCw0MC4xYy04LjcsNC4yLTIxLDYuNi0zMy44LDYuNnMtMjUuMi0yLjQtMzMuOC02LjZjLTAuNy0wLjMtMS41LTAuMy0yLjIsMC4xYy0wLjcsMC40LTEuMSwxLjEtMS4xLDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7djQ1LjhjMCwwLjgsMC40LDEuNSwxLjEsMS45YzAuNCwwLjIsMC44LDAuMywxLjIsMC4zYzAuMywwLDAuNy0wLjEsMS0wLjJjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMywxLjUsMC4zLDIuMi0wLjFjMC43LT'+
			'AuNCwxLjEtMS4xLDEuMS0xLjlWNDIuMWMwLTAuOC0wLjQtMS41LTEuMS0xLjlDMTAwLjMsMzkuOCw5OS41LDM5LjgsOTguOCw0MC4xeiBNMzIuNCw4MC45Vjc0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNy41LTAuOSwxNC45LTEuNSwyMi4yLTEuOGMtMC4xLDAuNC0wLjUsMC44LTEuNiwxLjNjLTEuNiwwLjctNC4zLDEuNi03LjMsMi42QzQxLjksNzcuNSwzNy4yLDc5LjEsMzIuNCw4MC45eiBNOTcuNiw4NC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODguNiw4MC45LDc3LDc4LjgsNjUsNzguOGMtNS45LDAtMTEuOCwwLjUtMTcuMywxLjRjMy0xLDUuNC0xLjgsNy4xLTIuNWMzLTEuMyw0LjktMy40LDUu'+
			'MS01LjdjMS42LDAsMywwLDQuNS0wLjFsMCwxbDIuNiwwbDAtMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEwLjIsMC4xLDIwLjQsMC43LDMwLjUsMlY4NC40eiBNOTcuNiw2OS41Yy0xLjEtMC4xLTIuMi0wLjMtMy4zLTAuNGMtMC4xLTQuMiwwLjEtNywwLTExLjhjLTMuNC0yLjctNS4xLTMuOS04LjctNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0zLjQsMy40LTUsNC42LTguNCw3LjNjMCwwLjYsMCw4LjUsMCw5LjJjLTMuMy0wLjEtNi43LTAuMy0xMC4xLTAuM2wwLTIuOWMzLjQtMC40LDUuOS0yLjQsNS44LTQuOEM3Mi44LDU3LDY5LjUsNTUsNjUuNiw1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00LDAtNy'+
			'4yLDItNy4yLDQuOGMwLDIuNCwyLjYsNC40LDYuMSw0LjhsMCwzYy0xMC41LDAtMjEuMSwwLjctMzIsMlY0NS42YzguOSwzLjYsMjAuNiw1LjYsMzIuNiw1LjZjMTIsMCwyMy42LTIsMzIuNi01LjZWNjkuNXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMVMxMjEuMSw5NiwxMjEuMSw2NUMxMjEuMSwzNCw5Niw4LjksNjUsOC45eiBNMTAyLjEsODcuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjgtMC40LDEuNS0xLjEsMS45Yy0wLjcsMC40LTEu'+
			'NSwwLjUtMi4yLDAuMWMtOC43LTQuMi0yMS02LjYtMzMuOC02LjZzLTI1LjIsMi40LTMzLjgsNi42Yy0wLjMsMC4yLTAuNiwwLjItMSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMi0wLjNjLTAuNy0wLjQtMS4xLTEuMS0xLjEtMS45VjQyLjFjMC0wLjgsMC40LTEuNSwxLjEtMS45YzAuNy0wLjQsMS41LTAuNSwyLjItMC4xYzguNyw0LjIsMjEsNi42LDMzLjgsNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMi44LDAsMjUuMi0yLjQsMzMuOC02LjZjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjlDMTAyLjEsNDIuMS'+
			'wxMDIuMSw4Ny45LDEwMi4xLDg3Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTU0LjcsNzIuM0M0Ny40LDcyLjUsNDAsNzMuMSwzMi40LDc0djYuOWM0LjctMS44LDkuNC0zLjQsMTMuMy00LjdjMy4xLTEsNS43LTEuOSw3LjMtMi42QzU0LjIsNzMuMSw1NC42LDcyLjYsNTQuNyw3Mi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3oiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNMzIuNCw0NS42djIzLjljMTAuOS0xLjMsMjEuNS0xLjksMzItMmwwLTNjLTMuNC0wLjQtNi0yLjQtNi4xLTQuOGMwLTIuNywzLjIt'+
			'NC43LDcuMi00LjhjNCwwLDcuMywyLDcuNCw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMSwyLjQtMi40LDQuNC01LjgsNC44bDAsMi45YzMuMywwLDYuOCwwLjEsMTAuMSwwLjNjMC0wLjgsMC04LjYsMC05LjJjMy40LTIuNyw1LTMuOSw4LjQtNy4zYzMuNiwyLjEsNS4zLDMuMiw4LjcsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xLDQuOC0wLjEsNy42LDAsMTEuOGMxLjEsMC4xLDIuMiwwLjMsMy4zLDAuNFY0NS42Qzg4LjYsNDkuMSw3Nyw1MS4yLDY1LDUxLjJDNTMsNTEuMiw0MS40LDQ5LjEsMzIuNCw0NS42eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9Ii'+
			'M1NTU1ZmYiIGQ9Ik02Ny4xLDczbC0yLjYsMGwwLTFjLTEuNSwwLTMsMC00LjUsMC4xYy0wLjIsMi4zLTIuMSw0LjQtNS4xLDUuN2MtMS43LDAuNy00LjEsMS41LTcuMSwyLjVjNS41LTAuOSwxMS4zLTEuNCwxNy4zLTEuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTIsMCwyMy42LDIsMzIuNiw1LjZWNzRjLTEwLTEuMy0yMC4zLTEuOS0zMC41LTJMNjcuMSw3M3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._rectilinear__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;rectilinear;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._rectilinear__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLm'+
			'NvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTAyLjYwMiwzNy4zMTVjLTkuNjIsNC42NDUtMjMuMzI1LDcuMzA5LTM3LjYwMyw3LjMwOWMtMTQuMjc4LDAtMjcuOTgyLTIuNjY0LTM3LjYwMS03LjMwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc3NS0wLjM3NS0xLjY4Ny0wLjMyNC0yLjQxNiwwLjEzNWMtMC43MjksMC40NTctMS4xNzEsMS4yNTYtMS4xNzEsMi4xMTd2NTAuODY1YzAsMC44NTksMC40NDIsMS42NiwxLjE3MSwyLjExNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDA0LDAuMjU0LDAuODY2LDAuMzgzLDEuMzI5LDAuMzgzYzAuMzcxLDAsMC43NDItMC'+
			'4wODIsMS4wODctMC4yNWM5LjYxOS00LjY0MywyMy4zMjQtNy4zMDUsMzcuNjAxLTcuMzA1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMTQuMjc1LDAsMjcuOTgxLDIuNjYyLDM3LjYwMyw3LjMwN2MwLjc3NCwwLjM3MywxLjY4OCwwLjMyMiwyLjQxNi0wLjEzNXMxLjE3MS0xLjI1OCwxLjE3MS0yLjExN1YzOS41NjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuODYxLTAuNDQyLTEuNjYtMS4xNzEtMi4xMTdDMTA0LjI4OSwzNi45OTEsMTAzLjM3NiwzNi45NCwxMDIuNjAyLDM3LjMxNXogTTI4LjgxMiw4Mi42NzFWNzUuMDQmI3hkOyYjeGE7JiN4OTsmI3g5O2M4LjM2OC0wLjk4OCwxNi41OTUtMS42NDgs'+
			'MjQuNzE5LTEuOTc1Yy0wLjEwNCwwLjQxOC0wLjUxNywwLjkyOC0xLjc3NywxLjQ5NmMtMS43NTksMC43OTMtNC43MzEsMS43My04LjE0NywyLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzM5LjI3MSw3OC44ODIsMzQuMDQ3LDgwLjYzMiwyOC44MTIsODIuNjcxeiBNMTAxLjE4OCw4Ni42MDNjLTkuOTI2LTMuOTgtMjIuODU4LTYuMjI1LTM2LjE4OS02LjIyNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LjYwMiwwLTEzLjEwNCwwLjU1My0xOS4xOTMsMS41OTJjMy4zNi0xLjEyMyw2LjAzOC0yLjAyNSw3Ljg3NS0yLjc5NWMzLjM4OC0xLjQxNiw1LjQ4OS0zLjc1Niw1LjY5NS02LjI5MSYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7YzEuNzI3LTAuMDM3LDMuMjkyLTAuMDU1LDUuMDExLTAuMDYxbDAuMDE2LDEuMDc4bDIuOTQ1LTAuMDEybC0wLjAxNC0xLjA2NmMxMS4zMTIsMC4wOCwyMi42OTcsMC44MTYsMzMuODU0LDIuMjExVjg2LjYwM3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNMTAxLjE4OCw3MC4wMDljLTEuMjI1LTAuMTQ4LTIuNDQ4LTAuMzA3LTMuNjczLTAuNDQxYy0wLjA4OC00LjcyMSwwLjEtNy43NzUsMC0xMy4xNjZjLTMuNzQyLTMuMDM1LTUuNzA3LTQuMjg1LTkuNjU3LTYuNjMzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMuNzM3LDMuNzctNS41MDksNS4xMzUtOS4zNCw4LjFjMC4wMjYsMC42ODks'+
			'MC4wMjYsOS4zOTgsMC4wMjYsMTAuMjM0Yy0zLjY5MS0wLjE2Mi03LjQ4Ni0wLjI4My0xMS4yMDMtMC4zMDdsMC4wMTktMy4yNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNzY5LTAuNDc3LDYuNTMyLTIuNzAzLDYuNDQxLTUuMzg3Yy0wLjEwMy0zLjAyNy0zLjc1LTUuMjU0LTguMTgxLTUuMjI3Yy00LjQzMiwwLjAyNy04LjAxNSwyLjI3NS03Ljk4OSw1LjI4MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDIyLDIuNjY2LDIuOTI3LDQuODY5LDYuNzI4LDUuMzM2bDAuMDI5LDMuMjg3Yy0xMS42NywwLjA0My0yMy40NTYsMC43NjItMzUuNTc3LDIuMTc2VjQzLjM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yz'+
			'kuOTIzLDMuOTgsMjIuODU0LDYuMjI3LDM2LjE4OCw2LjIyN2MxMy4zMzIsMCwyNi4yNjUtMi4yNDYsMzYuMTg5LTYuMjI3VjcwLjAwOXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjQuOTk5LDIuNjM4Yy0zNC40NDEsMC02Mi4zNjEsMjcuOTItNjIuMzYxLDYyLjM2M2MwLDM0LjQ0MSwyNy45Miw2Mi4zNjEsNjIuMzYxLDYyLjM2MXM2Mi4zNjMtMjcuOTIsNjIuMzYzLTYyLjM2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTI3LjM2MiwzMC41NTgsOTkuNDQsMi42MzgsNjQuOTk5LDIuNjM4eiBNMTA2LjE4OCw5MC40MzNjMCwwLjg1OS0w'+
			'LjQ0MiwxLjY2LTEuMTcxLDIuMTE3cy0xLjY0MiwwLjUwOC0yLjQxNiwwLjEzNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTkuNjIxLTQuNjQ1LTIzLjMyNy03LjMwNy0zNy42MDMtNy4zMDdjLTE0LjI3NiwwLTI3Ljk4MSwyLjY2Mi0zNy42MDEsNy4zMDVjLTAuMzQ1LDAuMTY4LTAuNzE2LDAuMjUtMS4wODcsMC4yNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDYzLDAtMC45MjUtMC4xMjktMS4zMjktMC4zODNjLTAuNzI5LTAuNDU3LTEuMTcxLTEuMjU4LTEuMTcxLTIuMTE3VjM5LjU2N2MwLTAuODYxLDAuNDQyLTEuNjYsMS4xNzEtMi4xMTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeD'+
			'k7YzAuNzI5LTAuNDU5LDEuNjQxLTAuNTEsMi40MTYtMC4xMzVjOS42MTgsNC42NDUsMjMuMzIyLDcuMzA5LDM3LjYwMSw3LjMwOWMxNC4yNzcsMCwyNy45ODItMi42NjQsMzcuNjAzLTcuMzA5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjc3NC0wLjM3NSwxLjY4OC0wLjMyNCwyLjQxNiwwLjEzNWMwLjcyOSwwLjQ1NywxLjE3MSwxLjI1NiwxLjE3MSwyLjExN1Y5MC40MzN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTUzLjUzLDczLjA2NWMtOC4xMjQsMC4zMjYtMTYuMzUxLDAuOTg2LTI0LjcxOSwxLjk3NXY3LjYzMWM1LjIzNS0yLjAzOSwxMC40'+
			'NTktMy43ODksMTQuNzk0LTUuMjM2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjQxNi0xLjE0Myw2LjM4OS0yLjA4LDguMTQ3LTIuODczQzUzLjAxNCw3My45OTMsNTMuNDI2LDczLjQ4Myw1My41Myw3My4wNjV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTI4LjgxMiw0My4zOTd2MjYuNjA1YzEyLjEyMS0xLjQxNCwyMy45MDctMi4xMzMsMzUuNTc3LTIuMTc2bC0wLjAyOS0zLjI4N2MtMy44MDEtMC40NjctNi43MDUtMi42Ny02LjcyOC01LjMzNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMDI1LTMuMDA2LDMuNTU4LTUuMjU0LDcuOTg5LT'+
			'UuMjgxYzQuNDMxLTAuMDI3LDguMDc4LDIuMTk5LDguMTgxLDUuMjI3YzAuMDkxLDIuNjg0LTIuNjczLDQuOTEtNi40NDEsNS4zODdsLTAuMDE5LDMuMjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNzE3LDAuMDIzLDcuNTEyLDAuMTQ1LDExLjIwMywwLjMwN2MwLTAuODM2LDAtOS41NDUtMC4wMjYtMTAuMjM0YzMuODMxLTIuOTY1LDUuNjAzLTQuMzMsOS4zNC04LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuOTUsMi4zNDgsNS45MTUsMy41OTgsOS42NTcsNi42MzNjMC4xLDUuMzkxLTAuMDg4LDguNDQ1LDAsMTMuMTY2YzEuMjI1LDAuMTM1LDIuNDQ4LDAuMjkzLDMuNjczLDAuNDQx'+
			'VjQzLjM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTkuOTI1LDMuOTgtMjIuODU3LDYuMjI3LTM2LjE4OSw2LjIyN0M1MS42NjYsNDkuNjI0LDM4LjczNCw0Ny4zNzgsMjguODEyLDQzLjM5N3oiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjcuMzQ4LDczLjg5bC0yLjk0NSwwLjAxMmwtMC4wMTYtMS4wNzhjLTEuNzE5LDAuMDA2LTMuMjg0LDAuMDIzLTUuMDExLDAuMDYxYy0wLjIwNiwyLjUzNS0yLjMwOCw0Ljg3NS01LjY5NSw2LjI5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODM3LDAuNzctNC41MTUsMS42NzItNy44NzUsMi43OTVjNi'+
			'4wODktMS4wMzksMTIuNTkyLTEuNTkyLDE5LjE5My0xLjU5MmMxMy4zMzEsMCwyNi4yNjQsMi4yNDQsMzYuMTg5LDYuMjI1Vjc1LjAzNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTExLjE1Ny0xLjM5NS0yMi41NDItMi4xMzEtMzMuODU0LTIuMjExTDY3LjM0OCw3My44OXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._rectilinear__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;rectilinear;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="rectilinear";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectilinear.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._rectilinear.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._rectilinear.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getProjection() == 12)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectilinear.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectilinear.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectilinear.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._rectilinear.ggCurrentLogicStateAlpha == 0) {
					me._rectilinear.style.visibility=me._rectilinear.ggVisible?'inherit':'hidden';
					me._rectilinear.style.opacity=1;
				}
				else {
					me._rectilinear.style.visibility="hidden";
					me._rectilinear.style.opacity=0;
				}
			}
		}
		this._rectilinear.onmouseover=function (e) {
			me._rectilinear__img.style.visibility='hidden';
			me._rectilinear__imgo.style.visibility='inherit';
		}
		this._rectilinear.onmouseout=function (e) {
			me._rectilinear__img.style.visibility='inherit';
			me._rectilinear__imgo.style.visibility='hidden';
		}
		this._rectilinear.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._rectilinear);
		el=me._fisheye=document.createElement('div');
		els=this._fisheye__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLm'+
			'NvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY1LDIzLjNDNDIsMjMuMywyMy4zLDQyLDIzLjMsNjVTNDIsMTA2LjcsNjUsMTA2LjdjMjMsMCw0MS43LTE4LjcsNDEuNy00MS43Uzg4LDIzLjMsNjUsMjMuM3ogTTM2LjQsODYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLjItMS4xLDAuNC0yLjEtMC4xYy0yLjEtMy4xLTMuOC02LjUtNC45LTEwLjJjMS40LDAuOSwzLDEuNyw0LjcsMi40YzAuNywwLjgsMS4zLDEuOCwxLjcsMi44YzAuNiwxLjMsMC45LDIuNywwLjksMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MzNi44LDg1LjMsMz'+
			'YuNiw4NS44LDM2LjQsODYuMXogTTY1LDEwMi4yYy0xMC43LDAtMjAuNC00LjYtMjcuMi0xMS45YzAuNS0wLjIsMS4xLTAuNSwxLjUtMC44YzAuOC0wLjYsMS4zLTEuNCwxLjYtMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC44LDAuNC0xLjcsMC40LTIuNmMwLTEuNS0wLjMtMy0wLjktNC41YzIuMiwwLjUsNC42LDEsNywxLjNjMS4yLDAuMiwyLjUsMC4zLDMuOCwwLjRjMCwxLjUsMC4xLDMuMSwwLjEsNC42bDIuNy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEtMS40LTAuMS0yLjgtMC4xLTQuM2MzLDAuMiw2LjEsMC4zLDkuMiwwLjNjNy40LDAsMTQuOS0wLjYsMjEu'+
			'NS0xLjdjMy4zLTAuNiw2LjQtMS4yLDkuMS0yYzIuMy0wLjcsNS4yLTEuOCw3LTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDOTUuOSw5MS4xLDgxLjgsMTAyLjIsNjUsMTAyLjJ6IE0xMDIsNjkuNGMtMC41LDAuNi0xLjEsMS4zLTIsMS44Yy0wLjcsMC40LTEuNSwwLjgtMi4zLDEuMmMwLjMtNy41LDAuMS0xMi43LTEuOC0xOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy4zLTUuOC02LjEtOC43LTExLjYtMTNjLTEuOSwyLjQtMy43LDMuNy05LjUsOC41YzIsOS43LDIuMSwxOSwxLjgsMjguOWMtNC40LDAuNS05LjEsMC43LTEzLjcsMC43Yy0zLjEsMC02LjItMC4xLTkuMy0wLjMmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEtNC4yLTAuMS04LjMtMC4xLTEyLjVjMC0wLjYsMC0xLjIsMC0xLjdjNy44LTAuOCwxNC4xLTcuNywxMy42LTEzLjRjLTAuNi02LTYuNy05LjItMTMuNS04LjljLTYuOCwwLjMtMTIuMSw0LjQtMTMuMSwxMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC45LDUuNiwyLjcsMTEuNSwxMC4zLDEyYzAsMC42LDAsMS4xLDAsMS43YzAsNC4xLDAsOC4yLDAuMSwxMi4zYy0yLjctMC4zLTUuMi0wLjYtNy42LTEuMWMtMi45LTAuNi01LjUtMS4zLTcuNy0yLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjItMC45LTQuMS0xLjgtNS44LTMuMWMt'+
			'MC43LTAuNi0xLjQtMS4zLTItMS45Yy0wLjEtMS4zLTAuMi0yLjYtMC4yLTRjMC0yMC41LDE2LjctMzcuMiwzNy4yLTM3LjJjMjAuNSwwLDM3LjIsMTYuNywzNy4yLDM3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwMi4yLDY2LjUsMTAyLjEsNjgsMTAyLDY5LjR6Ii8+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjUsMjcuOGMtMjAuNSwwLTM3LjIsMTYuNy0zNy4yLDM3LjJjMCwxLjQsMC4xLDIuNywwLjIsNGMwLjYsMC42LDEuMywxLjQsMiwxLjljMS43LDEuMywzLjYsMi4yLDUuOCwzLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Ji'+
			'N4OTtjMi4yLDAuOSw0LjgsMS42LDcuNywyLjJjMi40LDAuNSw0LjksMC44LDcuNiwxLjFjLTAuMS00LjEtMC4xLTguMi0wLjEtMTIuM2MwLTAuNiwwLTEuMSwwLTEuN2MtNy41LTAuNS0xMS4yLTYuNC0xMC4zLTEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEtNS45LDYuMy0xMC4xLDEzLjEtMTAuM2M2LjgtMC4zLDEyLjksMi45LDEzLjUsOC45YzAuNSw1LjctNS44LDEyLjYtMTMuNiwxMy40YzAsMC42LDAsMS4yLDAsMS43YzAsNC4yLDAsOC40LDAuMSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzMsMC4yLDYuMSwwLjMsOS4zLDAuM2M0LjYsMCw5LjMtMC4zLDEz'+
			'LjctMC43YzAuMy05LjksMC4yLTE5LjItMS44LTI4LjljNS44LTQuOCw3LjUtNi4xLDkuNS04LjVjNS41LDQuMyw4LjMsNy4yLDExLjYsMTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS45LDYuOSwyLjIsMTIuMSwxLjgsMTkuNmMwLjgtMC40LDEuNi0wLjgsMi4zLTEuMmMwLjgtMC41LDEuNS0xLjIsMi0xLjhjMC4yLTEuNSwwLjMtMi45LDAuMy00LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMTAyLjIsNDQuNSw4NS41LDI3LjgsNjUsMjcuOHoiLz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTM0LjEsNzguMmMtMS43LTAuNy0zLj'+
			'MtMS41LTQuNy0yLjRjMS4xLDMuNywyLjgsNy4xLDQuOSwxMC4yYzEuMSwwLjUsMiwwLjMsMi4xLDAuMWMwLjItMC4zLDAuMy0wLjgsMC4zLTEuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEtMC4zLTIuNC0wLjktMy43QzM1LjQsODAsMzQuOCw3OSwzNC4xLDc4LjJ6Ii8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik04NC41LDgwLjdjLTYuNiwxLjEtMTQuMSwxLjctMjEuNSwxLjdjLTMuMSwwLTYuMi0wLjEtOS4yLTAuM2MwLDEuNCwwLjEsMi44LDAuMSw0LjNsLTIuNywwLjFjLTAuMS0xLjUtMC4xLTMuMS0wLjEtNC42JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMtMC4xLTIuNS0wLjMtMy44LTAuNGMtMi41LTAuMy00LjgtMC44LTctMS4zYzAuNiwxLjUsMC45LDMsMC45LDQuNWMwLDAuOS0wLjEsMS43LTAuNCwyLjZjLTAuMywwLjgtMC44LDEuNi0xLjYsMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQsMC40LTEsMC42LTEuNSwwLjhjNi44LDcuMywxNi41LDExLjksMjcuMiwxMS45YzE2LjgsMCwzMC45LTExLjEsMzUuNi0yNi40Yy0xLjgsMS00LjgsMi4yLTcsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzkwLjgsNzkuNSw4Ny44LDgwLjIsODQuNSw4MC43eiIvPgogICAgPHBhdG'+
			'ggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjUsOC45QzM0LDguOSw4LjksMzQsOC45LDY1YzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMVMxMjEuMSw5NiwxMjEuMSw2NUMxMjEuMSwzNCw5Niw4LjksNjUsOC45eiBNNjUsMTA2LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNDIsMTA2LjcsMjMuMyw4OCwyMy4zLDY1UzQyLDIzLjMsNjUsMjMuM2MyMywwLDQxLjcsMTguNyw0MS43LDQxLjdTODgsMTA2LjcsNjUsMTA2Ljd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fisheye__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;fisheye;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._fisheye__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLm'+
			'NvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY0Ljk5OSwxOC42MjJjLTI1LjU3MywwLTQ2LjM3OCwyMC44MDUtNDYuMzc4LDQ2LjM3OXMyMC44MDUsNDYuMzc5LDQ2LjM3OCw0Ni4zNzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzI1LjU3NCwwLDQ2LjM4LTIwLjgwNSw0Ni4zOC00Ni4zNzlTOTAuNTczLDE4LjYyMiw2NC45OTksMTguNjIyeiBNMzMuMjI1LDg4LjQwOWMtMC4yMDgsMC4yNTgtMS4xNzQsMC40NTMtMi4zODMtMC4wODYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjM1Ni0zLjQ0MS00LjIwNi03LjI1NC01LjQ0Mi0xMS4zMzJjMS'+
			'41NjEsMS4wMjUsMy4zMTIsMS45MTQsNS4yNDQsMi42ODZjMC43NjgsMC45MDQsMS40NDEsMS45ODQsMS45MzksMy4wOTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjc2LDEuNDgyLDEuMDIzLDMuMDIxLDEuMDE2LDQuMTExQzMzLjYwNCw4Ny41NzMsMzMuNDYsODguMTE2LDMzLjIyNSw4OC40MDl6IE02NC45OTksMTA2LjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTExLjkzOCwwLTIyLjcwNS01LjA4OC0zMC4yNjUtMTMuMjAzYzAuNjExLTAuMjExLDEuMTkyLTAuNTEyLDEuNjc5LTAuOTE2YzAuODQyLTAuNjk1LDEuNDAyLTEuNjA1LDEuNzMtMi41MjkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7YzAuMzMtMC45MywwLjQ1NC0xLjg4NywwLjQ1Ni0yLjg1Yy0wLjAwNy0xLjY2LTAuMzg0LTMuMzY5LTEuMDEzLTUuMDQ5YzIuNDY1LDAuNTkyLDUuMDg0LDEuMDcsNy44MTYsMS40NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMzcxLDAuMTg5LDIuNzcsMC4zNTQsNC4xOSwwLjQ5NGMwLjA0OCwxLjY5NywwLjA5OSwzLjM5NSwwLjE2Miw1LjA5MmwyLjk5OC0wLjExMWMtMC4wNi0xLjU3OC0wLjEwNi0zLjE2LTAuMTUxLTQuNzQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuMzMsMC4yNDQsNi43MzgsMC4zNzUsMTAuMTcyLDAuMzc1YzguMjUsMCwxNi41NzQtMC42NywyMy'+
			'44OTItMS44OThjMy42NTktMC42MTMsNy4wNjctMS4zNjcsMTAuMTAxLTIuMjU2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjUzMS0wLjc0NCw1Ljc4My0yLjAzNyw3LjgxMy0zLjE3MkM5OS40MDMsOTQuMDE0LDgzLjYyLDEwNi4zNzksNjQuOTk5LDEwNi4zNzl6IE0xMDYuMDc3LDY5LjkxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNTQsMC42OTMtMS4yNTgsMS40MjQtMi4xODEsMS45OTZjLTAuNzYsMC40NzEtMS42MTQsMC45MS0yLjUwOSwxLjMyYzAuMzc5LTguMzA3LDAuMTQtMTQuMDkyLTIuMDIxLTIxLjc0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuNzAxLTYuNDQ3'+
			'LTYuNzM5LTkuNjg4LTEyLjg4NC0xNC40NjFjLTIuMTU3LDIuNjY4LTQuMDg2LDQuMTM5LTEwLjUxNCw5LjQ0M2MyLjI3OCwxMC44MTgsMi4zNDEsMjEuMTY2LDIuMDIxLDMyLjEzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuOTEsMC41MDgtMTAuMDc3LDAuNzkzLTE1LjIxNiwwLjc5M2MtMy40ODUsMC02Ljk0NS0wLjEzMS0xMC4yOTEtMC4zODljLTAuMDk0LTQuNjM5LTAuMTQtOS4yNzktMC4xNC0xMy45MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC42NDgsMC4wMDctMS4yOTcsMC4wMDgtMS45NDVjOC42OTEtMC45LDE1LjctOC41NDMsMTUuMDkzLTE0Ljg3M2MtMC42NDMtNi'+
			'42ODktNy40NTUtMTAuMjI3LTE0Ljk4LTkuOTQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNy41MjcsMC4yODEtMTMuNDE0LDQuODk1LTE0LjUxNywxMS41MDJjLTEuMDQyLDYuMjQ2LDMuMDUsMTIuNzU0LDExLjQwNCwxMy4zNjFjLTAuMDAxLDAuNjMzLTAuMDA4LDEuMjY4LTAuMDA4LDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEsNC41NDksMC4wNDQsOS4xLDAuMTMzLDEzLjY1Yy0yLjk0Ny0wLjMwNy01Ljc3Ni0wLjcxNy04LjQwMS0xLjI0OGMtMy4yMDMtMC42NDgtNi4xMDktMS40NjktOC41NjUtMi40NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjQ1OC0wLjk3'+
			'NS00LjU3Ny0xLjk3NS02LjQ1MS0zLjQ3M2MtMC43NjYtMC42MTMtMS41NDItMS40LTIuMTk1LTIuMTE3Yy0wLjE1Ny0xLjQ2My0wLjI0Mi0yLjk0NS0wLjI0Mi00LjQ0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0yMi44MTYsMTguNTYyLTQxLjM3OSw0MS4zNzgtNDEuMzc5YzIyLjgxNywwLDQxLjM4LDE4LjU2Miw0MS4zOCw0MS4zNzlDMTA2LjM3OSw2Ni42NjUsMTA2LjI2OSw2OC4zMDEsMTA2LjA3Nyw2OS45MTV6Ii8+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjQuOTk5LDIzLjYyMmMtMjIuODE1LDAtNDEuMzc4LDE4LjU2Mi00MS'+
			'4zNzgsNDEuMzc5YzAsMS41MDIsMC4wODUsMi45ODQsMC4yNDIsNC40NDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42NTMsMC43MTcsMS40MywxLjUwNCwyLjE5NSwyLjExN2MxLjg3NCwxLjQ5OCwzLjk5MywyLjQ5OCw2LjQ1MSwzLjQ3M2MyLjQ1NiwwLjk3Nyw1LjM2MiwxLjc5Nyw4LjU2NSwyLjQ0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MyLjYyNSwwLjUzMSw1LjQ1NCwwLjk0MSw4LjQwMSwxLjI0OGMtMC4wODktNC41NTEtMC4xMzItOS4xMDItMC4xMzMtMTMuNjVjMC0wLjYzMywwLjAwNy0xLjI2OCwwLjAwOC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7'+
			'JiN4OTtjLTguMzU0LTAuNjA3LTEyLjQ0Ni03LjExNS0xMS40MDQtMTMuMzYxYzEuMTAzLTYuNjA3LDYuOTg5LTExLjIyMSwxNC41MTctMTEuNTAyYzcuNTI1LTAuMjgxLDE0LjMzOCwzLjI1NiwxNC45OCw5Ljk0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjYwNyw2LjMzLTYuNDAxLDEzLjk3My0xNS4wOTMsMTQuODczYy0wLjAwMSwwLjY0OC0wLjAwOCwxLjI5Ny0wLjAwOCwxLjk0NWMwLDQuNjQzLDAuMDQ2LDkuMjgzLDAuMTQsMTMuOTIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzMuMzQ2LDAuMjU4LDYuODA2LDAuMzg5LDEwLjI5MSwwLjM4OWM1LjEzOSwwLDEwLj'+
			'MwNi0wLjI4NSwxNS4yMTYtMC43OTNjMC4zMi0xMC45NjcsMC4yNTgtMjEuMzE0LTIuMDIxLTMyLjEzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M2LjQyOC01LjMwNSw4LjM1Ni02Ljc3NSwxMC41MTQtOS40NDNjNi4xNDUsNC43NzMsOS4xODMsOC4wMTQsMTIuODg0LDE0LjQ2MWMyLjE2LDcuNjU2LDIuMzk5LDEzLjQ0MSwyLjAyMSwyMS43NDgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC44OTUtMC40MSwxLjc0OS0wLjg1LDIuNTA5LTEuMzJjMC45MjMtMC41NzIsMS42NDEtMS4zMDMsMi4xODEtMS45OTZjMC4xOTEtMS42MTMsMC4zMDItMy4yNSwwLjMwMi00LjkxNCYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MxMDYuMzc5LDQyLjE4NCw4Ny44MTYsMjMuNjIyLDY0Ljk5OSwyMy42MjJ6Ii8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0zMC42NDQsNzkuNjc2Yy0xLjkzMi0wLjc3MS0zLjY4NC0xLjY2LTUuMjQ0LTIuNjg2YzEuMjM2LDQuMDc4LDMuMDg2LDcuODkxLDUuNDQyLDExLjMzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjIwOSwwLjUzOSwyLjE3NSwwLjM0NCwyLjM4MywwLjA4NmMwLjIzNS0wLjI5MywwLjM3OS0wLjgzNiwwLjM3NC0xLjUyN2MwLjAwOC0xLjA5LTAuMzQtMi42MjktMS4wMT'+
			'YtNC4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDMzIuMDg1LDgxLjY2MSwzMS40MTEsODAuNTgxLDMwLjY0NCw3OS42NzZ6Ii8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik04Ni42NjYsODIuNDkzYy03LjMxNywxLjIyOS0xNS42NDIsMS44OTgtMjMuODkyLDEuODk4Yy0zLjQzNCwwLTYuODQyLTAuMTMxLTEwLjE3Mi0wLjM3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjA0NSwxLjU4LDAuMDkyLDMuMTYyLDAuMTUxLDQuNzRsLTIuOTk4LDAuMTExYy0wLjA2My0xLjY5Ny0wLjExNC0zLjM5NS0wLjE2Mi01LjA5MmMtMS40MjEt'+
			'MC4xNDEtMi44MTktMC4zMDUtNC4xOS0wLjQ5NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMi43MzItMC4zNzktNS4zNTItMC44NTctNy44MTYtMS40NDljMC42MjksMS42OCwxLjAwNiwzLjM4OSwxLjAxMyw1LjA0OWMtMC4wMDIsMC45NjMtMC4xMjYsMS45Mi0wLjQ1NiwyLjg1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjMyOCwwLjkyNC0wLjg4OSwxLjgzNC0xLjczLDIuNTI5Yy0wLjQ4NiwwLjQwNC0xLjA2NywwLjcwNS0xLjY3OSwwLjkxNmM3LjU2LDguMTE1LDE4LjMyNywxMy4yMDMsMzAuMjY1LDEzLjIwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2'+
			'MxOC42MjEsMCwzNC40MDQtMTIuMzY1LDM5LjU4MS0yOS4zMTRjLTIuMDMsMS4xMzUtNS4yODIsMi40MjgtNy44MTMsMy4xNzJDOTMuNzMzLDgxLjEyNSw5MC4zMjUsODEuODc5LDg2LjY2Niw4Mi40OTN6Ii8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik02NC45OTksMi42MzdDMzAuNTU4LDIuNjM3LDIuNjM4LDMwLjU1NywyLjYzOCw2NWMwLDM0LjQ0MSwyNy45Miw2Mi4zNjEsNjIuMzYxLDYyLjM2MVMxMjcuMzYyLDk5LjQ0MiwxMjcuMzYyLDY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7QzEyNy4zNjIsMzAuNTU3LDk5LjQ0LDIuNjM3LDY0Ljk5'+
			'OSwyLjYzN3ogTTY0Ljk5OSwxMTEuMzc5Yy0yNS41NzMsMC00Ni4zNzgtMjAuODA1LTQ2LjM3OC00Ni4zNzlzMjAuODA1LTQ2LjM3OSw0Ni4zNzgtNDYuMzc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzI1LjU3NCwwLDQ2LjM4LDIwLjgwNSw0Ni4zOCw0Ni4zNzlTOTAuNTczLDExMS4zNzksNjQuOTk5LDExMS4zNzl6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._fisheye__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;fisheye;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="fisheye";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fisheye.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fisheye.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._fisheye.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getProjection() == 9)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fisheye.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fisheye.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fisheye.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._fisheye.ggCurrentLogicStateAlpha == 0) {
					me._fisheye.style.visibility=me._fisheye.ggVisible?'inherit':'hidden';
					me._fisheye.style.opacity=1;
				}
				else {
					me._fisheye.style.visibility="hidden";
					me._fisheye.style.opacity=0;
				}
			}
		}
		this._fisheye.onmouseover=function (e) {
			me._fisheye__img.style.visibility='hidden';
			me._fisheye__imgo.style.visibility='inherit';
		}
		this._fisheye.onmouseout=function (e) {
			me._fisheye__img.style.visibility='inherit';
			me._fisheye__imgo.style.visibility='hidden';
		}
		this._fisheye.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._fisheye);
		el=me._stereographic=document.createElement('div');
		els=this._stereographic__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLm'+
			'NvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTkxLjEsNjVjMC0xMS44LTcuOC0yMS43LTE4LjUtMjVjMi40LTUuOCw2LjItMTEuNSw2LjItMTEuNXMtMi4yLTQuOC02LjgtOS4yYy00LjMtNC4xLTcuMi01LjMtNy42LTUuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMCwwLDAsMCwwYzAsMCwwLDAsMCwwbDAsMGMtMC40LDAuMi0zLjMsMS40LTcuNSw1LjZjLTQuNiw0LjUtNi42LDkuNC02LjYsOS40czMuOSw1LjcsNi40LDExLjVjLTYuMSwyLjEtMTEuMSw2LjMtMTQuMywxMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi42LTEuMS'+
			'00LjktMS45LTYuOS0yLjRjMC4yLTMuNi0yLjYtNy42LTYuNi05LjFjLTQuNS0xLjYtOS4yLDEuMi0xMC40LDUuOWMtMS4yLDQuNiwxLjUsOS4zLDYuMiwxMC4xYzQsMC43LDguMy0xLjMsMTAtNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjcsMC40LDMuOSwxLjIsNi40LDIuMmMtMS40LDMuMi0yLjIsNi44LTIuMiwxMC41YzAsMTQuNCwxMS43LDI2LjEsMjYuMSwyNi4xUzkxLjEsNzkuNCw5MS4xLDY1eiBNNDMuNCw2NC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTMsMC43LTUuOCwxLjgtOC40YzAuOCwwLjQsMS42LDAuOCwyLjQsMS4ybDEuMi0yLjRjLTAuOC0wLjQtMS42LTAu'+
			'OC0yLjQtMS4yYzMuOC02LjMsMTAuNy0xMC41LDE4LjYtMTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTEuOSwwLDIxLjYsOS43LDIxLjYsMjEuNmMwLDEwLjUtNy41LDE5LjItMTcuNCwyMS4yYzAuMS0wLjIsMC4yLTAuNCwwLjItMC41YzIuMS01LjYtMy4xLTguMS02LjUtOS43Yy0xLjctMC44LTMuNC0xLjYtNC42LTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMS0xLjEtMi4yLTIuNi0zLjItNC4xYy0yLjEtMy00LjItNi4yLTcuNy02LjJjLTAuOSwwLTEuOCwwLjItMi43LDAuNkM0NC40LDYzLjgsNDMuOSw2NC4yLDQzLjQsNjQuN3ogTTUxLjEsODEuNiYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTtjLTMuMy0yLjYtNS40LTguOS01LTEyLjRjMC4xLTAuOSwwLjQtMS40LDAuNS0xLjVjMC4zLTAuMSwwLjYtMC4yLDAuOC0wLjJjMS4yLDAsMi43LDIuMiw0LDQuMmMxLjEsMS43LDIuMywzLjQsMy44LDQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS42LDEuNSwzLjgsMi42LDUuNywzLjVjNC4zLDIsNC43LDIuNyw0LjIsNC4xYy0wLjQsMS0yLjUsMS4xLTMuMiwxLjFDNTguNiw4NS4yLDUzLjcsODMuNiw1MS4xLDgxLjZ6Ii8+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjUsNDMuNGMtNy45LDAtMTQuOCw0LjItMTgu'+
			'NiwxMC41YzAuOCwwLjQsMS42LDAuOCwyLjQsMS4ybC0xLjIsMi40Yy0wLjgtMC40LTEuNi0wLjgtMi40LTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS4xLDIuNi0xLjgsNS40LTEuOCw4LjRjMC41LTAuNSwxLTAuOCwxLjUtMS4xYzAuOS0wLjQsMS44LTAuNiwyLjctMC42YzMuNiwwLDUuNywzLjEsNy43LDYuMmMxLDEuNSwyLDMsMy4yLDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjEsMS4xLDIuOSwxLjksNC42LDIuN2MzLjQsMS42LDguNSw0LjEsNi41LDkuN2MtMC4xLDAuMi0wLjEsMC4zLTAuMiwwLjVjOS45LTIsMTcuNC0xMC43LDE3LjQtMjEuMiYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0M4Ni42LDUzLjEsNzYuOSw0My40LDY1LDQzLjR6Ii8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVTMzQsMTIxLjEsNjUsMTIxLjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUzk2LDguOSw2NSw4Ljl6IE02NSw5MS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xNC40LDAtMjYuMS0xMS43LTI2LjEtMjYuMWMwLTMuNywwLjgtNy4zLDIuMi0xMC41Yy0yLjYtMS4xLTQuNy0xLjgtNi40LTIuMmMtMS43LDMtNS45LDQuOS0xMCw0LjNjLTQuNy0wLjgt'+
			'Ny40LTUuNS02LjItMTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjItNC42LDUuOS03LjUsMTAuNC01LjljNCwxLjUsNi44LDUuNSw2LjYsOS4xYzIsMC41LDQuMywxLjMsNi45LDIuNGMzLjEtNS41LDguMi05LjcsMTQuMy0xMS44Yy0yLjYtNS44LTYuNC0xMS41LTYuNC0xMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7czIuMS00LjgsNi42LTkuNGM0LjItNC4yLDcuMS01LjUsNy41LTUuNmwwLDBjMCwwLDAsMCwwLDBjMCwwLDAsMCwwLDBsMCwwYzAuNCwwLjIsMy4zLDEuNCw3LjYsNS41YzQuNiw0LjQsNi44LDkuMiw2LjgsOS4yJiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'smI3g5OyYjeDk7cy0zLjcsNS43LTYuMiwxMS41YzEwLjcsMy4zLDE4LjUsMTMuMiwxOC41LDI1QzkxLjEsNzkuNCw3OS40LDkxLjEsNjUsOTEuMXoiLz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTYxLjEsODAuMWMtMS45LTAuOS00LjEtMS45LTUuNy0zLjVjLTEuNS0xLjQtMi43LTMuMi0zLjgtNC45Yy0xLjMtMi0yLjgtNC4yLTQtNC4yYy0wLjIsMC0wLjUsMC4xLTAuOCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLjEtMC40LDAuNS0wLjUsMS41Yy0wLjQsMy41LDEuNyw5LjgsNSwxMi40YzIuNSwyLDcuNCwzLjcsMTAuOSwz'+
			'LjdjMC43LDAsMi44LTAuMSwzLjItMS4xQzY1LjgsODIuNyw2NS4zLDgyLjEsNjEuMSw4MC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stereographic__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;stereographic;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._stereographic__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgVGlueS8vRU4nICdodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS10aW55LmR0ZCc+CjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLm'+
			'NvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iPgogPGcgaWQ9IkxheWVyXzEiLz4K'+
			'IDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTk0LjA0Niw2NC45OTljMC0xMy4wNzQtOC42ODUtMjQuMTU1LTIwLjU4Ny0yNy43ODZjMi43MTktNi40NTcsNi44NTctMTIuODMyLDYuODU3LTEyLjgzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTIuNDE2LTUuMzMtNy41ODUtMTAuMjQ2Yy00LjgxLTQuNTc4LTguMDUtNS45NDEtOC40NzYtNi4xMDhsMC4wMDEtMC4wMTljMCwwLTAuMDEyLDAuMDA0LTAuMDI1LDAuMDExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4wMTQtMC4wMDYtMC4wMjQtMC4wMDktMC4wMjQtMC4wMDlsMC4wMDEsMC4wMT'+
			'ljLTAuNDIyLDAuMTc1LTMuNjM0LDEuNjA0LTguMzUsNi4yNzljLTUuMDY1LDUuMDIxLTcuMzcyLDEwLjM5OS03LjM3MiwxMC4zOTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7czQuMzE2LDYuMzYxLDcuMTY2LDEyLjc5OGMtNi43MzksMi4yOTgtMTIuMzY5LDcuMDA1LTE1Ljg2LDEzLjA5M2MtMi44NDUtMS4xODMtNS40NjgtMi4wOTQtNy42NDUtMi42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjU0LTMuOTU2LTIuODYtOC40NTctNy4zNTctMTAuMDc0Yy00Ljk4Ny0xLjc5NS0xMC4xOTUsMS4zMzgtMTEuNTIyLDYuNTAzYy0xLjMyOCw1LjE2NSwxLjcwNSwxMC4zODYsNi44OTksMTEu'+
			'MjI2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjQ5NywwLjcyOSw5LjIwMi0xLjQ0NCwxMS4xMS00Ljc3MmMxLjg3MywwLjQ3LDQuMzEzLDEuMjgxLDcuMTUzLDIuNDQ5Yy0xLjU4NywzLjU4Ny0yLjQ3Nyw3LjU0OS0yLjQ3NywxMS43MTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMTYuMDE3LDEzLjAzLDI5LjA0NywyOS4wNDYsMjkuMDQ3Uzk0LjA0Niw4MS4wMTYsOTQuMDQ2LDY0Ljk5OXogTTQwLjk2Myw2NC42NTNjMC4wNDctMy4zMTUsMC43NjgtNi40NywyLjAzMi05LjMzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44NTYsMC40MSwxLjczMSwwLjg0MiwyLjYyOSwxLjMwNW'+
			'wxLjM3NS0yLjY2NmMtMC44OC0wLjQ1NC0xLjc1Ni0wLjg4OS0yLjYyNC0xLjMwNmM0LjIwNy03LjAwMywxMS44NzctMTEuNywyMC42MjUtMTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTMuMjU5LDAsMjQuMDQ2LDEwLjc4NywyNC4wNDYsMjQuMDQ2YzAsMTEuNjM2LTguMzA4LDIxLjM2Ni0xOS4zMDMsMjMuNTc1YzAuMDk3LTAuMTk5LDAuMTgxLTAuMzkzLDAuMjQ1LTAuNTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMjktNi4yNy0zLjQyNy04Ljk4LTcuMjA5LTEwLjc3NGMtMS44ODYtMC44OTUtMy44MzUtMS44MTktNS4wNzItMi45ODhjLTEuMjczLTEuMjA0LTIuNDMtMi45MTQt'+
			'My41NDctNC41NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjI4My0zLjM4LTQuNjQ0LTYuODc0LTguNjA4LTYuODc0Yy0wLjk3MiwwLTEuOTY0LDAuMjI5LTIuOTUsMC42NzlDNDIuMDc2LDYzLjcxOCw0MS40OTksNjQuMDkxLDQwLjk2Myw2NC42NTN6IE00OS41OTcsODMuNDEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjY0NS0yLjkyMS02LjAwMy05LjkxOS01LjUyNS0xMy43NjVjMC4xMy0xLjA0NCwwLjQzNS0xLjU0LDAuNjA4LTEuNjJjMC4zMy0wLjE1LDAuNjIzLTAuMjI3LDAuODcyLTAuMjI3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjMwOSwwLDIuOTg1LDIuNDgyLD'+
			'QuNDY1LDQuNjczYzEuMjcsMS44NzksMi41ODIsMy44MjEsNC4yNTYsNS40MDNjMS44MTIsMS43MTQsNC4yMywyLjg2LDYuMzY0LDMuODcyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0Ljc0OCwyLjI1Miw1LjIzNSwyLjk1Miw0LjY1NCw0LjU0MWMtMC40MTIsMS4xMy0yLjgyMywxLjIxOC0zLjU1MywxLjIxOEM1Ny44NjEsODcuNTA2LDUyLjQxNCw4NS42NjgsNDkuNTk3LDgzLjQxeiIvPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTY1LDQwLjk1M2MtOC43NDgsMC0xNi40MTgsNC42OTctMjAuNjI1LDExLjdjMC44NjgsMC40MTcsMS43NDQs'+
			'MC44NTIsMi42MjQsMS4zMDZsLTEuMzc1LDIuNjY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjg5Ny0wLjQ2My0xLjc3Mi0wLjg5NS0yLjYyOS0xLjMwNWMtMS4yNjUsMi44NjMtMS45ODUsNi4wMTgtMi4wMzIsOS4zMzNjMC41MzYtMC41NjIsMS4xMTMtMC45MzYsMS42MzktMS4xNzYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC45ODYtMC40NSwxLjk3OS0wLjY3OSwyLjk1LTAuNjc5YzMuOTY1LDAsNi4zMjUsMy40OTQsOC42MDgsNi44NzRjMS4xMTcsMS42NTQsMi4yNzMsMy4zNjQsMy41NDcsNC41NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4yMz'+
			'csMS4xNjksMy4xODcsMi4wOTQsNS4wNzIsMi45ODhjMy43ODIsMS43OTQsOS40OTksNC41MDUsNy4yMDksMTAuNzc0Yy0wLjA2NCwwLjE3OC0wLjE0OCwwLjM3MS0wLjI0NSwwLjU3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEwLjk5NS0yLjIwOSwxOS4zMDMtMTEuOTM5LDE5LjMwMy0yMy41NzVDODkuMDQ2LDUxLjc0LDc4LjI1OSw0MC45NTMsNjUsNDAuOTUzeiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNNjUsMi42MzhjLTM0LjQ0MiwwLTYyLjM2MiwyNy45MjItNjIuMzYyLDYyLjM2M1MzMC41NTgsMTI3LjM2Miw2NSwxMjcuMzYyYzM0'+
			'LjQ0MSwwLDYyLjM2Mi0yNy45Miw2Mi4zNjItNjIuMzYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Uzk5LjQ0MSwyLjYzOCw2NSwyLjYzOHogTTY1LDk0LjA0NmMtMTYuMDE2LDAtMjkuMDQ2LTEzLjAzLTI5LjA0Ni0yOS4wNDdjMC00LjE2NywwLjg5LTguMTI5LDIuNDc3LTExLjcxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMi44NC0xLjE2OC01LjI4LTEuOTc5LTcuMTUzLTIuNDQ5Yy0xLjkwOCwzLjMyOC02LjYxMyw1LjUwMS0xMS4xMSw0Ljc3MmMtNS4xOTQtMC44NC04LjIyOC02LjA2MS02Ljg5OS0xMS4yMjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS'+
			'4zMjctNS4xNjUsNi41MzUtOC4yOTgsMTEuNTIyLTYuNTAzYzQuNDk3LDEuNjE3LDcuNjExLDYuMTE4LDcuMzU3LDEwLjA3NGMyLjE3NywwLjU1Miw0LjgsMS40NjMsNy42NDUsMi42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMy40OTEtNi4wODgsOS4xMjEtMTAuNzk1LDE1Ljg2LTEzLjA5M2MtMi44NS02LjQzNy03LjE2Ni0xMi43OTgtNy4xNjYtMTIuNzk4czIuMzA3LTUuMzc4LDcuMzcyLTEwLjM5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M0LjcxNi00LjY3NSw3LjkyOC02LjEwNCw4LjM1LTYuMjc5TDY0LjIwNyw4LjAxYzAsMCwwLjAxMSwwLjAwMywwLjAyNCww'+
			'LjAwOWMwLjAxNC0wLjAwNywwLjAyNS0wLjAxMSwwLjAyNS0wLjAxMWwtMC4wMDEsMC4wMTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MjYsMC4xNjcsMy42NjYsMS41Myw4LjQ3Niw2LjEwOGM1LjE2OSw0LjkxNiw3LjU4NSwxMC4yNDYsNy41ODUsMTAuMjQ2cy00LjEzOSw2LjM3NS02Ljg1NywxMi44MzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMTEuOTAyLDMuNjMxLDIwLjU4NywxNC43MTIsMjAuNTg3LDI3Ljc4NkM5NC4wNDYsODEuMDE2LDgxLjAxNiw5NC4wNDYsNjUsOTQuMDQ2eiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIi'+
			'BkPSJNNjAuNjM3LDgxLjc0N2MtMi4xMzQtMS4wMTItNC41NTItMi4xNTgtNi4zNjQtMy44NzJjLTEuNjc0LTEuNTgyLTIuOTg2LTMuNTI0LTQuMjU2LTUuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjQ3OS0yLjE5LTMuMTU2LTQuNjczLTQuNDY1LTQuNjczYy0wLjI0OSwwLTAuNTQyLDAuMDc2LTAuODcyLDAuMjI3Yy0wLjE3NCwwLjA4LTAuNDc5LDAuNTc2LTAuNjA4LDEuNjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDc4LDMuODQ2LDEuODgxLDEwLjg0NCw1LjUyNSwxMy43NjVjMi44MTcsMi4yNTgsOC4yNjUsNC4wOTYsMTIuMTQyLDQuMDk2YzAuNzI5'+
			'LDAsMy4xNDEtMC4wODgsMy41NTMtMS4yMTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDNjUuODcyLDg0LjY5OSw2NS4zODUsODMuOTk5LDYwLjYzNyw4MS43NDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._stereographic__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;stereographic;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stereographic";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stereographic.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stereographic.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._stereographic.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getProjection() == 4)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._stereographic.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._stereographic.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._stereographic.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._stereographic.ggCurrentLogicStateAlpha == 0) {
					me._stereographic.style.visibility=me._stereographic.ggVisible?'inherit':'hidden';
					me._stereographic.style.opacity=1;
				}
				else {
					me._stereographic.style.visibility="hidden";
					me._stereographic.style.opacity=0;
				}
			}
		}
		this._stereographic.onmouseover=function (e) {
			me._stereographic__img.style.visibility='hidden';
			me._stereographic__imgo.style.visibility='inherit';
		}
		this._stereographic.onmouseout=function (e) {
			me._stereographic__img.style.visibility='inherit';
			me._stereographic__imgo.style.visibility='hidden';
		}
		this._stereographic.ggUpdatePosition=function (useTransition) {
		}
		me._projection_buttons.appendChild(me._stereographic);
		me._controller_slider.appendChild(me._projection_buttons);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_thumbnail') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_thumbnail') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_thumbnail') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_thumbnail') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_thumbnail') == 4)
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail.style[domTransition]='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStatePosition == 0) {
					me._thumbnail.style.left='0px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 1) {
					me._thumbnail.style.left='32px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 2) {
					me._thumbnail.style.left='64px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 3) {
					me._thumbnail.style.left='96px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 4) {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
				else {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
			}
		}
		me._thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_thumbnail') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail.style[domTransition]='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStateVisible == 0) {
					me._thumbnail.style.visibility=(Number(me._thumbnail.style.opacity)>0||!me._thumbnail.style.opacity)?'inherit':'hidden';
					me._thumbnail.ggVisible=true;
				}
				else {
					me._thumbnail.style.visibility="hidden";
					me._thumbnail.ggVisible=false;
				}
			}
		}
		this._thumbnail.onclick=function (e) {
			if (
				(
					(me.player.getViewerSize().width <= 450)
				)
			) {
				me.player.setVariableValue('vis_thumbnail_menu_mobile', !me.player.getVariableValue('vis_thumbnail_menu_mobile'));
			}
			if (
				(
					(me.player.getViewerSize().width > 450)
				)
			) {
				me.player.setVariableValue('vis_thumbnail_menu_show', !me.player.getVariableValue('vis_thumbnail_menu_show'));
			}
		}
		this._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button_show=document.createElement('div');
		els=this._thumbnail_hide_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NVMzNCwxMjEuMSw2NSwxMjEuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFTOTYsOC45LDY1LDguOXogTTU1LjQsNTcuOCYjeGE7JiN4OTsmI3g5O2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zJiN4YTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEgz'+
			'MC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjImI3hhOyYjeDk7JiN4OTtsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHomI3hhOyYjeDk7JiN4OTsgTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjJjMC'+
			'wxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjUmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTUuNCw1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxMC40TDU1LjQsNjguM1Y1Ny44eiBNMjcuOCw3Mi4yVjU3LjhjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjMmI3hhOyYjeDk7JiN4OTtjMS40LDAsMi41LDEuMSwyLjUs'+
			'Mi40djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDMwLjNDMjguOSw3NC42LDI3LjgsNzMuNSwyNy44LDcyLjJ6IE0zMi44LDEwMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjQmI3hhOyYjeDk7JiN4OTtsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNGMwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2JiN4YTsmI3g5OyYjeDk7QzMzLjYsMTAwLjMsMzMuMiwxMDAuNCwzMi44LDEwMC40eiBNNzQuNiw3Mi4yYzAsMS4zLTEuMSwyLjQtMi41LDIuNEg2MS45bDEyLjctMTIuN0w3NC'+
			'42LDcyLjJMNzQuNiw3Mi4yeiBNMTAyLjIsNzIuMiYjeGE7JiN4OTsmI3g5O2MwLDEuMy0xLjEsMi40LTIuNSwyLjRIODUuNWMtMS40LDAtMi41LTEuMS0yLjUtMi40VjU3LjhjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40JiN4YTsmI3g5OyYjeDk7QzEwMi4yLDU3LjgsMTAyLjIsNzIuMiwxMDIuMiw3Mi4yeiBNNTUuNCw1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxMC40TDU1LjQsNjguM1Y1Ny44eiBNMjcuOCw3Mi4yVjU3LjhjMC0xLjMsMS4xLTIuNCwyLjUtMi40JiN4YTsmI3g5OyYjeDk7aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjNj'+
			'MCwxLjMtMS4xLDIuNC0yLjUsMi40SDMwLjNDMjguOSw3NC42LDI3LjgsNzMuNSwyNy44LDcyLjJ6IE0zMi44LDEwMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjQmI3hhOyYjeDk7JiN4OTtsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNGMwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2JiN4YTsmI3g5OyYjeDk7QzMzLjYsMTAwLjMsMzMuMiwxMDAuNCwzMi44LDEwMC40eiBNNzQuNiw3Mi4yYzAsMS4zLTEuMSwyLjQtMi41LDIuNEg2MS45bDEyLjctMTIuN0w3NC42LDcyLjJMNz'+
			'QuNiw3Mi4yeiBNMTAyLjIsNzIuMiYjeGE7JiN4OTsmI3g5O2MwLDEuMy0xLjEsMi40LTIuNSwyLjRIODUuNWMtMS40LDAtMi41LTEuMS0yLjUtMi40VjU3LjhjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40JiN4YTsmI3g5OyYjeDk7QzEwMi4yLDU3LjgsMTAyLjIsNzIuMiwxMDIuMiw3Mi4yeiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_hide_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_hide_button_show;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._thumbnail_hide_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNFM5OS40LDIuNiw2NSwyLjZ6IE01NC4zLDU3LjEmI3hhOyYjeDk7JiN4OTtjMC0xLjUsMS4yLTIuNywyLjctMi43aDExLjZMNTQuMyw2OC43VjU3LjF6IE0yMy43LDcyLjlWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSYjeGE7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43'+
			'LTIuNywyLjdIMjYuNEMyNC45LDc1LjcsMjMuNyw3NC40LDIzLjcsNzIuOXogTTI5LjMsMTA0LjRjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40JiN4YTsmI3g5OyYjeDk7bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM0MzMC4xLDEwNC4yLDI5LjcsMTA0LjQsMjkuMywxMDQuNHomI3hhOyYjeDk7JiN4OTsgTTc1LjcsNzIuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdINjEuNWwxNC4xLTE0LjFMNzUuNyw3Mi45TDc1LjcsNzIuOXogTT'+
			'EwNi4zLDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDg3LjgmI3hhOyYjeDk7JiN4OTtjLTEuNSwwLTIuNy0xLjItMi43LTIuN1Y1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44YzEuNSwwLDIuNywxLjIsMi43LDIuN0MxMDYuMyw1Ny4xLDEwNi4zLDcyLjksMTA2LjMsNzIuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTQuMyw1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjgmI3hhOyYjeDk7JiN4OTtjMS41LDAs'+
			'Mi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjUmI3hhOyYjeDk7JiN4OTtsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjMmI3hhOyYjeDk7JiN4OTtDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6IE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLj'+
			'VsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45JiN4YTsmI3g5OyYjeDk7YzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjcmI3hhOyYjeDk7JiN4OTtDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IE01NC4zLDU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDExLjZMNTQuMyw2OC43VjU3LjF6IE0yMy43LDcyLjlWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjcmI3hhOyYjeDk7JiN4OTtoMTUuOGMxLjUsMCwyLjcsMS4y'+
			'LDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdIMjYuNEMyNC45LDc1LjcsMjMuNyw3NC40LDIzLjcsNzIuOXogTTI5LjMsMTA0LjRjLTAuNCwwLTAuOS0wLjItMS4yLTAuNSYjeGE7JiN4OTsmI3g5O2wtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuMyYjeGE7JiN4OTsmI3g5O0MzMC4xLDEwNC4yLDI5LjcsMTA0LjQsMjkuMywxMDQuNHogTTc1LjcsNzIuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdINjEuNWwxNC4xLT'+
			'E0LjFMNzUuNyw3Mi45TDc1LjcsNzIuOXogTTEwNi4zLDcyLjkmI3hhOyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDg3LjhjLTEuNSwwLTIuNy0xLjItMi43LTIuN1Y1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44YzEuNSwwLDIuNywxLjIsMi43LDIuNyYjeGE7JiN4OTsmI3g5O0MxMDYuMyw1Ny4xLDEwNi4zLDcyLjksMTA2LjMsNzIuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_hide_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;thumbnail_hide_button_show;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_hide_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_hide_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_hide_button_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail_hide_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('vis_thumbnail_menu_show') == true) && 
				(me.player.getViewerSize().width > 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(me.player.getVariableValue('vis_thumbnail_menu_mobile') == true) && 
				(me.player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button_show.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
				else if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
				else {
					me._thumbnail_hide_button_show.style.visibility="hidden";
					me._thumbnail_hide_button_show.style.opacity=0;
				}
			}
		}
		this._thumbnail_hide_button_show.onmouseover=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='hidden';
			me._thumbnail_hide_button_show__imgo.style.visibility='inherit';
		}
		this._thumbnail_hide_button_show.onmouseout=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='inherit';
			me._thumbnail_hide_button_show__imgo.style.visibility='hidden';
		}
		this._thumbnail_hide_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button_show);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=this._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTExOC45LDM5N2MwLTMxLTI1LjEtNTYuMS01Ni4xLTU2LjFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0NCw0NTMuMS0xMTguOSw0MjgtMTE4LjksMzk3eiBNLTIwOS43LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTt2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQw'+
			'Ni42TC0yMDkuNyw0MDYuNnogTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xODIuMSw0MDYuNkwtMTgyLjEsNDA2LjZ6IE0tMTU0LjUsNDA2LjZjLTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTU0LjUsNDA2LjZ6Ii'+
			'8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTQuNSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTU0LjUsNDA2LjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4Mi4xLDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAs'+
			'Mi41LDEuMSwyLjUsMi40djE0LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xODIuMSw0MDYuNkwtMTgyLjEsNDA2LjZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIwOS43LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0yMDkuNyw0MDYuNkwtMjA5LjcsNDA2LjZ6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg'+
			'o=';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_show_button_show;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTExMi42LDM5N2MwLTM0LjQtMjcuOS02Mi40LTYyLjQtNjIuNGMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDAuNiw0NTkuNC0xMTIuNiw0MzEuNC0xMTIuNiwzOTd6IE0tMjEzLjYsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0wt'+
			'MjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiBNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE4Mi45LDQwNy42TC0xODIuOSw0MDcuNnogTS0xNTIuMiw0MDcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xNTIuMi'+
			'w0MDcuNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1Mi4yLDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xNTIuMiw0MDcuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTgyLjksNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUu'+
			'OGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE4Mi45LDQwNy42TC0xODIuOSw0MDcuNnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjEzLjYsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43LTIuNywyLjdMLTIxMy42LDQwNy42TC0yMTMuNiw0MDcuNnoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz'+
			'4KPC9zdmc+Cg==';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;thumbnail_show_button_show;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_show_button_show.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail_show_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('vis_thumbnail_menu_show') == false) && 
				(me.player.getViewerSize().width > 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				(me.player.getVariableValue('vis_thumbnail_menu_mobile') == false) && 
				(me.player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button_show.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else {
					me._thumbnail_show_button_show.style.visibility="hidden";
					me._thumbnail_show_button_show.style.opacity=0;
				}
			}
		}
		this._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
		}
		this._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
		}
		this._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button_show);
		me._controller_slider.appendChild(me._thumbnail);
		el=me._info=document.createElement('div');
		els=this._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTc4LjEsMzYxLjFsNi4yLDBjMy41LDAsNi40LDIuOSw2LjQsNi40djIuOWMwLDMuNS0yLjksNi40LTYuNCw2LjRoLTYuMmMtMy41LDAtNi40LTIuOS02LjQtNi40bDAtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXog'+
			'TS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0xLjVsMTUuOSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDAsMS41LDAuNywxLjUsMS41bDAsMzcuN0MtMTY1LjUsNDI5LjctMTY2LjIsNDMwLjQtMTY3LDQzMC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2NS41LDM5MS4yYzAtMC44LTAuNy0xLjUtMS41LTEuNWwtMTUuOSwwYy0wLjgsMC0xLjUsMC43LTEuNSwxLjVsMCwzNy43YzAsMC44LDAuNywxLjUsMS41LDEuNWgxNS45JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MwLjgsMCwxLjUtMC43LDEuNS0xLjVMLTE2NS41LDM5MS4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3OC4xLDM3Ni44aDYuMmMzLjUsMCw2LjQtMi45LDYuNC02LjR2LTIuOWMwLTMuNS0yLjktNi40LTYuNC02LjRsLTYuMiwwYy0zLjUsMC02LjQsMi45LTYuNCw2LjRsMCwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODQuNSwzNzQtMTgxLjYsMzc2LjgtMTc4LjEsMzc2Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._info__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;info;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LjUsMzU3LjFsNi45LDBjMy45LDAsNy4xLDMuMiw3LjEsNy4xdjMuM2MwLDMuOS0zLjIsNy4xLTcuMSw3LjFoLTYuOWMtMy45LDAtNy4xLTMuMi03LjEtNy4xbDAtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41'+
			'LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAuOC0xLjcsMS43LTEuN2wxNy43LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjksMCwxLjcsMC44LDEuNywxLjdsMCw0MS45Qy0xNjQuNCw0MzMuMy0xNjUuMiw0MzQuMS0xNjYuMSw0MzQuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNCwzOTAuNWMwLTAuOS0wLjgtMS43LTEuNy0xLjdsLTE3LjcsMGMtMC45LDAtMS43LDAuOC0xLjcsMS43bDAsNDEuOWMwLDAuOSwwLjgsMS43LDEuNywxLjdoMTcuNyYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LDAsMS43LTAuOCwxLjctMS43TC0xNjQuNCwzOTAuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguNSwzNzQuNmg2LjljMy45LDAsNy4xLTMuMiw3LjEtNy4xdi0zLjNjMC0zLjktMy4yLTcuMS03LjEtNy4xbC02LjksMGMtMy45LDAtNy4xLDMuMi03LjEsNy4xbDAsMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg1LjUsMzcxLjQtMTgyLjQsMzc0LjYtMTc4LjUsMzc0LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;info;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_information') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_information') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_information') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_information') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style[domTransition]='left 0s, top 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='0px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 1) {
					me._info.style.left='32px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 2) {
					me._info.style.left='64px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 3) {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
				else {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
			}
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_info') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style[domTransition]='left 0s, top 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		this._info.onclick=function (e) {
			me.player.setVariableValue('vis_userdata', true);
		}
		this._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
		}
		this._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
		}
		this._info.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._info);
		el=me._autorotate_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="autorotate_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate_buttons.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._autorotate_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_autorotate') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_autorotate') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_autorotate') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._autorotate_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._autorotate_buttons.style[domTransition]='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStatePosition == 0) {
					me._autorotate_buttons.style.left='0px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 1) {
					me._autorotate_buttons.style.left='32px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 2) {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
				else {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
			}
		}
		me._autorotate_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_autorotate') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_buttons.style[domTransition]='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStateVisible == 0) {
					me._autorotate_buttons.style.visibility=(Number(me._autorotate_buttons.style.opacity)>0||!me._autorotate_buttons.style.opacity)?'inherit':'hidden';
					me._autorotate_buttons.ggVisible=true;
				}
				else {
					me._autorotate_buttons.style.visibility="hidden";
					me._autorotate_buttons.ggVisible=false;
				}
			}
		}
		this._autorotate_buttons.onclick=function (e) {
			me.player.setUseGyro(false);
			me.player.toggleAutorotate();
		}
		this._autorotate_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_start=document.createElement('div');
		els=this._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTUzLjksNDIzLjZjLTUuOCw0LjYtMTMuMSw3LjQtMjEuMSw3LjRoMGMtMTguNywwLTM0LTE1LjItMzQtMzRoLTAuNWgtNy43Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjdjLTAuMy0wLjUtMC4yLTEsMC4xLTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDEyLjctMTcuOGMwLjMtMC40'+
			'LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4xLDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxMy44LDExLjIsMjUsMjUsMjVoMGM1LjgsMCwxMS4xLTIsMTUuMy01LjNjMC42LTAuNSwxLjQtMC40LDIsMC4yYzAuNSwwLjUsMy4xLDMuNSw0LDQuNEMtMTUzLjEsNDIyLTE1My4yLDQyMy4xLTE1My45LDQyMy42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTc5LDM5N2MwLTIuMiwxLjgtNCw0LTRjMi4yLDAsNCwxLjgsNCw0YzAsMi4yLTEuOCw0LTQsNEMtMTc3LjIsND'+
			'AxLTE3OSwzOTkuMi0xNzksMzk3eiBNLTE0NC41LDQxNi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjhjLTAuMy0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEzLjgtMTEuMi0yNS0yNS0yNWgwYy01LjgsMC0xMS4xLDItMTUuMyw1LjNjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Yy0wLjYtMC43LTAuNi0xLjgsMC4xLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuOC00LjYsMTMu'+
			'MS03LjQsMjEuMS03LjRoMGMxOC43LDAsMzQsMTUuMiwzNCwzNGgwLjVoNy43YzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjcsNDIxLjNjLTAuOC0wLjktMy41LTMuOS00LTQuNGMtMC42LTAuNi0xLjQtMC42LTItMC4yYy00LjIsMy4zLTkuNSw1LjMtMTUuMyw1LjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xMy44LDAtMjUtMTEuMi0yNS0yNWgwLjdoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuN2MwLjMtMC41LDAuMi0xLTAuMS0xLj'+
			'NsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuM2MwLjMsMC41LDAuNiwwLjcsMS4xLDAuN2g3LjdoMC41YzAsMTguNywxNS4yLDM0LDM0LDM0aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2M4LDAsMTUuMy0yLjgsMjEuMS03LjRDLTE1My4yLDQyMy4xLTE1My4xLDQyMi0xNTMuNyw0MjEuM3oiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2gtNy43aC0wLjVjMC0xOC43LTE1LjIt'+
			'MzQtMzQtMzRoMGMtOCwwLTE1LjMsMi44LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLjUtMC44LDEuNi0wLjEsMi4zYzAuOCwwLjksMy41LDMuOSw0LDQuNGMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zaDBjMTMuOCwwLDI1LDExLjIsMjUsMjVoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7aC03LjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuN2MtMC4zLDAuNS0wLjIsMSwwLjEsMS4zbDEyLjgsMTcuOGMwLjMsMC40LDAuNiwwLjYsMSwwLjZjMC41LDAsMC44LTAuMiwxLjEtMC42bDEyLjctMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNS'+
			'wzOTguNy0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiLz4KICA8Y2lyY2xlIGN4PSItMTc1IiBmaWxsPSIjRkZGRkZGIiBjeT0iMzk3IiByPSI0Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;autorotate_start;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._autorotate_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTUxLjUsNDI2LjZjLTYuNCw1LjEtMTQuNiw4LjItMjMuNSw4LjJoMGMtMjAuOCwwLTM3LjctMTYuOS0zNy43LTM3LjdoLTAuNmgtOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQu'+
			'MS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAuNmwxNC4yLDE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC40LDAuNCwxLDAuMSwxLjVjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjRoLTAuN2MwLDE1LjMsMTIuNCwyNy43LDI3LjcsMjcuN2gwYzYuNCwwLDEyLjMtMi4yLDE3LTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45Qy0xNTAuNyw0MjQuOC0xNTAuNyw0MjYtMTUxLjUsNDI2LjZ6IE0tMTc5LjQsMzk3YzAtMi40LDItNC40LDQuNC00LjQmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5O2MyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC4zLDAuNC0wLjYsMC42LTEuMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC40LTEtMC4xLTEuNWMwLjMtMC41LDAuNi0wLjcsMS4yLTAuN2g4LjRoMC43YzAtMTUuMy0xMi40LTI3LjctMjcuNy0yNy43aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi40LDAtMTIuMywyLjItMTcsNS45Yy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAu'+
			'Ni0zLjUtMy44LTQuNC00LjljLTAuNy0wLjgtMC42LTIsMC4yLTIuNmM2LjQtNS4xLDE0LjYtOC4yLDIzLjUtOC4yaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuNCw0MjRjLTAuOS0xLTMuOS00LjMtNC40LTQuOWMtMC42LTAuNi0xLjUtMC43LTIuMi0wLjJjLTQuNywzLjctMTAuNiw1LjktMTcsNS45aDAmI3hkOyYjeGE7JiN4OT'+
			'smI3g5O2MtMTUuMywwLTI3LjctMTIuNC0yNy43LTI3LjdoMC43aDguNGMwLjUsMCwwLjktMC4yLDEuMi0wLjdzMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjVjMC4zLDAuNSwwLjYsMC43LDEuMiwwLjdoOC42aDAuNmMwLDIwLjgsMTYuOSwzNy43LDM3LjcsMzcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOC45LDAsMTctMy4xLDIzLjUtOC4yQy0xNTAuNyw0MjYtMTUwLjcsNDI0LjgtMTUxLjQsNDI0eiIvPgogIDxw'+
			'YXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTI2LjksMzk3LjhjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTIwLjgtMTYuOS0zNy43LTM3LjctMzcuN2gwYy04LjksMC0xNywzLjEtMjMuNSw4LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC44LDAuNi0wLjgsMS44LTAuMiwyLjZjMC45LDEsMy45LDQuMyw0LjQsNC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45aDBjMTUuMywwLDI3LjcsMTIuNCwyNy43LDI3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtMC43aC04LjRjLTAuNSwwLTAuOSwwLjItMS4yLDAuN2MtMC4zLDAuNS0wLjIsMS4xLD'+
			'AuMSwxLjVsMTQuMiwxOS44YzAuMywwLjQsMC42LDAuNiwxLjEsMC42YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTI2LjcsMzk4LjktMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljh6Ii8+CiAgPGNpcmNsZSBjeD0iLTE3NSIgZmlsbD0iI0ZGRkZGRiIgY3k9IjM5NyIgcj0iNC40Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;autorotate_start;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate_start.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._autorotate_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getIsAutorotating() == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_start.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._autorotate_start.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
				else {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
			}
		}
		this._autorotate_start.onmouseover=function (e) {
			me._autorotate_start__img.style.visibility='hidden';
			me._autorotate_start__imgo.style.visibility='inherit';
		}
		this._autorotate_start.onmouseout=function (e) {
			me._autorotate_start__img.style.visibility='inherit';
			me._autorotate_start__imgo.style.visibility='hidden';
		}
		this._autorotate_start.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=this._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE5Ni4xLDM3MC40YzUuOC00LjYsMTMuMS03LjQsMjEuMS03LjRjNy43LDAsMTQuOSwyLjYsMjAuNiw3bC02LjQsNi40Yy00LTIuOC04LjktNC40LTE0LjItNC40Yy01LjgsMC0xMS4xLDItMTUuMyw1LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAuNS0xLjQsMC40LTItMC4yYy0w'+
			'LjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEtMTk2LjEsMzcwLjR6IE0tMjE3LjIsMzk3Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNiwwLjctMS4xLDAuN2gtNy42aC0wLjZjMCw1LjIsMS43LDEwLjEsNC41LDE0LjFsLTYuNCw2LjRjLTQuNC01LjctNy0xMi44LTcuMS0yMC41aC0wLj'+
			'VILTIxNy4yeiBNLTIwNy4yLDQzMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMtMjA2LjQsNDMyLjItMjA2LjgsNDMyLjMtMjA3LjIsNDMyLjN6IE0tMTUzLjksNDIzLjNjLTUuOCw0LjYtMTMuMSw3LjQtMjEuMSw3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNy43LDAtMTQuOC0yLjYtMjAuNS02LjlsNi40LTYuNGM0LDIu'+
			'Nyw4LjgsNC4zLDE0LDQuM2M1LjgsMCwxMS4xLTIsMTUuMy01LjNjMC42LTAuNSwxLjQtMC40LDIsMC4yYzAuNSwwLjUsMy4xLDMuNSw0LDQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0xNDQuNSw0MTYuOWMtMC4zLDAuNC0wLjYsMC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43YzAtNS4zLTEuNi0xMC4xLTQuNC0xNC4ybDYuNC02LjRjNC40LDUuNyw3LDEyLjksNy'+
			'wyMC42aDAuNWg3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0Mi44LDM2MS43YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2Qy0xNDMuNiwzNjEuOC0x'+
			'NDMuMiwzNjEuNy0xNDIuOCwzNjEuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi4zLDM3Ny4xYzAuNiwwLjYsMS40LDAuNiwyLDAuMmM0LjItMy4zLDkuNS01LjMsMTUuMy01LjNjNS4zLDAsMTAuMSwxLjYsMTQuMiw0LjRsNi40LTYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNy00LjQtMTIuOS03LTIwLjYtN2MtOCwwLTE1LjMsMi44LTIxLjEsNy40Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM0MtMTk1LjQsMzczLjctMTkyLjgsMzc2LjYtMTkyLjMsMzc3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLj'+
			'UtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTguNi0xMzEuNCwzOTguMi0xMzEuNywzOTcuN3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjA5'+
			'LDM5N2MwLjEsNy43LDIuNywxNC44LDcuMSwyMC41bDYuNC02LjRjLTIuOC00LTQuNS04LjgtNC41LTE0LjFoMC42aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjZjLTAuNSwwLTAuOCwwLjItMS4xLDAuNmwtMTIuNywxNy44Yy0wLjMsMC40LTAuNCwwLjktMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43SC0yMDl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU3LjcsNDE2LjZjLT'+
			'AuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zYy01LjIsMC0xMC0xLjYtMTQtNC4zbC02LjQsNi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjcsNC4zLDEyLjgsNi45LDIwLjUsNi45YzgsMCwxNS4zLTIuOCwyMS4xLTcuNGMwLjctMC41LDAuOC0xLjYsMC4xLTIuM0MtMTU0LjYsNDIwLjEtMTU3LjIsNDE3LjEtMTU3LjcsNDE2LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;autorotate_stop;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._autorotate_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTguNSwzNjcuNWM2LjQtNS4xLDE0LjYtOC4yLDIzLjUtOC4yYzguNiwwLDE2LjUsMi45LDIyLjksNy44bC03LjIsNy4yYy00LjUtMy4xLTkuOS00LjktMTUuNy00LjljLTYuNCwwLTEyLjMsMi4yLTE3LDUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTEuNiwwLjQt'+
			'Mi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4zLDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44YzAuMywwLjQsMC40LDEsMC4xLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC41aC0wLjdjMC4xLDUuOCwxLjksMTEuMiw1LDE1LjZsLTcuMSw3LjFjLTQuOS02LjMtNy'+
			'44LTE0LjItNy45LTIyLjhoLTAuNkgtMjIxLjl6IE0tMjEwLjcsNDM2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDLTIwOS45LDQzNi4xLTIxMC4zLDQzNi4zLTIxMC43LDQzNi4zeiBNLTE1MS41LDQyNi4zYy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTguNSwwLTE2'+
			'LjQtMi45LTIyLjgtNy43bDcuMi03LjJjNC40LDMsOS44LDQuOCwxNS42LDQuOGM2LjQsMCwxMi4zLTIuMiwxNy01LjljMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjkmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUwLjcsNDI0LjUtMTUwLjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTUuOC0xLjgtMTEuMy'+
			'00LjktMTUuN2w3LjItNy4yYzQuOSw2LjQsNy44LDE0LjMsNy44LDIyLjloMC42aDguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzkuMywzNTcuN2MwLjQsMCwwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM2MtMC4zLDAuMy0wLjgsMC41LTEuMiwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjct'+
			'MC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zQy0xNDAuMSwzNTcuOS0xMzkuNywzNTcuNy0xMzkuMywzNTcuNyIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5NC4yLDM3NC45YzAuNiwwLjYsMS41LDAuNywyLjIsMC4yYzQuNy0zLjcsMTAuNi01LjksMTctNS45YzUuOCwwLDExLjMsMS44LDE1LjcsNC45bDcuMi03LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy02LjQtNC45LTE0LjMtNy44LTIyLjktNy44Yy04LjksMC0xNywzLjEtMjMuNSw4LjJjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42Qy0xOTcuNywzNzEuMS0xOTQuOCwzNzQuNC0xOTQuMiwzNzQuOXoiLz4KIC'+
			'AgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41LDAsMC45LTAuMiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2Ljks'+
			'Mzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTIxMi43LDM5N2MwLjEsOC42LDMsMTYuNSw3LjksMjIuOGw3LjEtNy4xYy0zLjEtNC40LTUtOS44LTUtMTUuNmgwLjdoOC41YzAuNSwwLDAuOS0wLjIsMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLTAuNSwwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjZjLTAuNSwwLTAuOSwwLjItMS4yLDAuNmwtMTQuMSwxOS44Yy0wLjMsMC40LTAuNCwxLTAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjIsMC43aD'+
			'guNkgtMjEyLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTU1LjgsNDE4LjhjLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWMtNS44LDAtMTEuMS0xLjgtMTUuNi00LjhsLTcuMiw3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzYuMyw0LjgsMTQuMiw3LjcsMjIuOCw3LjdjOC45LDAsMTctMy4xLDIzLjUtOC4yYzAuOC0wLjYsMC44LTEuOCwwLjItMi42Qy0xNTIuMyw0MjIuNi0xNTUuMiw0MTkuNC0xNTUuOCw0MTguOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;autorotate_stop;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate_stop.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._autorotate_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_stop.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_stop.style.visibility=me._autorotate_stop.ggVisible?'inherit':'hidden';
					me._autorotate_stop.style.opacity=1;
				}
				else {
					me._autorotate_stop.style.visibility="hidden";
					me._autorotate_stop.style.opacity=0;
				}
			}
		}
		this._autorotate_stop.onmouseover=function (e) {
			me._autorotate_stop__img.style.visibility='hidden';
			me._autorotate_stop__imgo.style.visibility='inherit';
		}
		this._autorotate_stop.onmouseout=function (e) {
			me._autorotate_stop__img.style.visibility='inherit';
			me._autorotate_stop__imgo.style.visibility='hidden';
		}
		this._autorotate_stop.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_stop);
		me._controller_slider.appendChild(me._autorotate_buttons);
		el=me._zoomout=document.createElement('div');
		els=this._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiLz4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwz'+
			'NDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7IE0tMTQxLjYsNDA0LjdjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtNjMuNWMtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNSYjeGQ7JiN4YTsmI3g5O2MwLTEuMywwLjUtMS44LDEuNi0xLjhoNjMuNWMxLjEsMCwxLjYsMC41LDEuNiwxLjhWNDA0Ljd6Ii8+Cjwvc3ZnPgo=';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomout;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8cGF0aCBmaW'+
			'xsPSIjRkZGRkZGIiBkPSJNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6Ii8+CiA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42'+
			'LTE3NSwzMzQuNnomI3hkOyYjeGE7JiN4OTsgTS0xMzcuOSw0MDUuNmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNmMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjImI3hkOyYjeGE7JiN4OTtjMC0xLjQsMC42LTIsMS44LTJoNzAuNmMxLjIsMCwxLjgsMC42LDEuOCwyVjQwNS42eiIvPgo8L3N2Zz4K';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomout;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_zoom') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style[domTransition]='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		this._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		this._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=this._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMWMwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4x'+
			'LTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjNjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMTUuN2MxLjEsMCwxLjYsMC41LDEuNiwxLjh2MjIuMWgyMi4zYzEuMSwwLDEuNiwwLjUsMS42LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDEuNiwzODkuMy0xNDEuNiw0MDQuNy0xNDEuNiw0MDQuN3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIi'+
			'BkPSJNLTE2NS41LDM4Ny41aDIyLjNjMS4xLDAsMS42LDAuNSwxLjYsMS44djE1LjVjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMjIuM3YyMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuN2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMjIuMWgtMjIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41YzAtMS4zLDAuNS0xLjgsMS42LTEuOGgy'+
			'Mi4zdi0yMi4xYzAtMS4zLDAuNS0xLjgsMS42LTEuOGgxNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4xLDAsMS42LDAuNSwxLjYsMS44VjM4Ny41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;zoomin;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzcuOSw0MDUuNmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42YzAsMC42LTAuMiwxLTAuNiwxLjRzLTAuOCwwLjYtMS4yLDAuNmgtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAu'+
			'NC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwydjI0LjZoMjQuOGMxLjIsMCwxLjgsMC42LDEuOCwyQy0xMzcuOSwzODguNC0xMzcuOSw0MDUuNi0xMzcuOSw0MDUuNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2NC41LDM4Ni40aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMnYxNy4yYz'+
			'AsMC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC0yNC44djI0LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjRjLTAuNCwwLTAuOC0wLjItMS4yLTAuNmMtMC40LTAuNC0wLjYtMC44LTAuNi0xLjR2LTI0LjZoLTI0LjhjLTAuNCwwLTAuOC0wLjItMS4yLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTJoMjQuOHYtMjQuNmMwLTEuNCwwLjYtMiwxLjgtMmgxNy40YzEuMiwwLDEuOCwwLjYsMS44LDJWMzg2LjR6Ii8+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;zoomin;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_zoom') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style[domTransition]='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		this._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		this._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._zoomin);
		me._controller.appendChild(me._controller_slider);
		me.divSkin.appendChild(me._controller);
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		hs ='';
		hs+='height : 78px;';
		hs+='left : 50%;';
		hs+='margin-left : -60.75px;';
		hs+='margin-top : -39px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 50%;';
		hs+='width : 121.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.clientHeight - me._thumbnail_menu__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.clientWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.clientHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			t = e.touches;
				diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 400px; height: 15px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 400px; height: 15px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			t = e.touches;
				diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : 65px;';
		hs+='height : 82px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		me._thumbnail_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('vis_website') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu.style.bottom='-100px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu.ggDx=0;
					me._thumbnail_menu.style.bottom='65px';
					me._thumbnail_menu.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_thumbnail') == true) && 
				(me.player.getViewerSize().width > 450)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('vis_thumbnail_menu_show') == true) && 
				(me.player.getVariableValue('vis_thumbnail_menu_auto_hide') == true) && 
				(me.player.getViewerSize().width > 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		this._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
			var contentWidth = me._thumbnail_menu__content.scrollWidth;
			var contentHeight = me._thumbnail_menu__content.scrollHeight;
				var containerWidth = this.clientWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = '0px';
					this.ggContent.style.marginLeft = '0px';
				}
				var containerHeight = this.clientHeight;
				if (contentHeight < containerHeight) {
					this.ggContent.style.top = '50%';
					this.ggContent.style.marginTop = (contentHeight/-2) + 'px';
				}
				else {
					this.ggContent.style.top = '0px';
					this.ggContent.style.marginTop = '0px';
				}
				if (contentWidth > this.clientWidth) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth - 15;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.clientWidth;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = me._thumbnail_menu.ggAvailableWidth / contentWidth;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.clientWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.clientWidth - me._thumbnail_menu__horScrollFg.clientWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + 'px';
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggWidth = 99;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick2.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick2.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick2.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick2.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			me._thumbnail_cloner.ggInstances = [];
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner.ggInstances.push(inst);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggTags = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 2px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_cloner']=true;
		}
		this._thumbnail_cloner.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner']=false;
		}
		this._thumbnail_cloner.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_cloner']=false;
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail_menu_mobile=document.createElement('div');
		els=me._thumbnail_menu_mobile__content=document.createElement('div');
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		hs ='';
		hs+='height : 77.764px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.99px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 119.98px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu_mobile.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible) return;
			me._thumbnail_menu_mobile.ggScrollPosX = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
			me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.clientWidth - me._thumbnail_menu_mobile__horScrollFg.clientWidth);
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.clientWidth);
		}
		me._thumbnail_menu_mobile.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu_mobile.ggHorScrollVisible) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu_mobile.ggScrollPosX >= me._thumbnail_menu_mobile__horScrollBg.clientWidth - me._thumbnail_menu_mobile__horScrollFg.clientWidth)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.min(me._thumbnail_menu_mobile.ggScrollPosX, me._thumbnail_menu_mobile__horScrollBg.clientWidth - me._thumbnail_menu_mobile__horScrollFg.clientWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu_mobile.ggScrollPosX <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosX = Math.max(me._thumbnail_menu_mobile.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__horScrollFg.style.left = me._thumbnail_menu_mobile.ggScrollPosX + 'px';
			me._thumbnail_menu_mobile__content.style.left = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosX / me._thumbnail_menu_mobile.ggHPercentVisible)) + 'px';
			me._thumbnail_menu_mobile.ggScrollPosXPercent = (me._thumbnail_menu_mobile__horScrollFg.offsetLeft / me._thumbnail_menu_mobile__horScrollBg.clientWidth);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible) return;
			me._thumbnail_menu_mobile.ggScrollPosY = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
			me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight);
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.clientHeight);
		}
		me._thumbnail_menu_mobile.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu_mobile.ggVertScrollVisible) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu_mobile.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu_mobile.ggScrollPosY >= me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu_mobile.ggScrollPosY <= 0)) {
					me._thumbnail_menu_mobile.ggScrollPosY = Math.max(me._thumbnail_menu_mobile.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
			me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + 'px';
			me._thumbnail_menu_mobile.ggScrollPosYPercent = (me._thumbnail_menu_mobile__vertScrollFg.offsetTop / me._thumbnail_menu_mobile__vertScrollBg.clientHeight);
			}, 10);
		}
		me._thumbnail_menu_mobile.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu_mobile.clientWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu_mobile.clientWidth - (me._thumbnail_menu_mobile.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggHPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu_mobile.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu_mobile.clientHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu_mobile.clientHeight - (me._thumbnail_menu_mobile.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
			me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
			me._thumbnail_menu_mobile__content.ontouchend = function() {
				me._thumbnail_menu_mobile__content.ontouchend = null;
				me._thumbnail_menu_mobile__content.ontouchmove = null;
			}
			me._thumbnail_menu_mobile__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			t = e.touches;
				diffX = t[0].clientX - me._thumbnail_menu_mobile.ggDragLastX;
				diffY = t[0].clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastX = t[0].clientX;
				me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
				me._thumbnail_menu_mobile.ggScrollByX(-diffX);
				me._thumbnail_menu_mobile.ggScrollByY(-diffY);
			}
		}
		elVertScrollBg = me._thumbnail_menu_mobile__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 280px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_menu_mobile__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 280px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_menu_mobile.ggScrollPosY = 0;
		me._thumbnail_menu_mobile.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				diffY = e.clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastY = e.clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			t = e.touches;
			me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
			document.ontouchend = function() {
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
			t = e.touches;
				diffY = t[0].clientY - me._thumbnail_menu_mobile.ggDragLastY;
				me._thumbnail_menu_mobile.ggDragLastY = t[0].clientY;
				me._thumbnail_menu_mobile.ggScrollByY(diffY);
			}
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if (e.offsetY < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			t = e.touches;
			var rect = me._thumbnail_menu_mobile__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_menu_mobile.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_menu_mobile.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_menu_mobile.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_menu_mobile.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu_mobile__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu_mobile";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu_mobile.ggIsActive=function() {
			return false;
		}
		me._thumbnail_menu_mobile.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._thumbnail_menu_mobile.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu_mobile.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._thumbnail_menu_mobile.style.top='1000px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
				else {
					me._thumbnail_menu_mobile.ggDx=0;
					me._thumbnail_menu_mobile.style.top='10px';
					me._thumbnail_menu_mobile.ggUpdatePosition(true);
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_thumbnail') == true) && 
				(me.player.getViewerSize().width <= 450)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu_mobile.style.visibility=(Number(me._thumbnail_menu_mobile.style.opacity)>0||!me._thumbnail_menu_mobile.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu_mobile.ggVisible=true;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.player.getVariableValue('vis_thumbnail_menu_mobile') == true) && 
				(me.player.getVariableValue('vis_thumbnail_menu_auto_hide') == true) && 
				(me.player.getViewerSize().width <= 450)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_mobile.style[domTransition]='left 0s, top 0s, opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_menu_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_mobile.style.visibility=me._thumbnail_menu_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_mobile.style.opacity=1;
				}
				else {
					me._thumbnail_menu_mobile.style.visibility="hidden";
					me._thumbnail_menu_mobile.style.opacity=0;
				}
			}
		}
		this._thumbnail_menu_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			{
			var contentWidth = me._thumbnail_menu_mobile__content.scrollWidth;
			var contentHeight = me._thumbnail_menu_mobile__content.scrollHeight;
				var containerWidth = this.clientWidth;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = (contentWidth/-2) + 'px';
				}
				else {
					this.ggContent.style.left = '0px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._thumbnail_menu_mobile.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu_mobile.ggVertScrollVisible = true;
				} else {
					me._thumbnail_menu_mobile__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu_mobile.ggVertScrollVisible = false;
				}
				if(me._thumbnail_menu_mobile.ggVertScrollVisible) {
					if (me._thumbnail_menu_mobile.ggHorScrollVisible) {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.clientHeight - 15;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_menu_mobile.ggAvailableHeight = me._thumbnail_menu_mobile.clientHeight;
						me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_menu_mobile__vertScrollBg.style.height = me._thumbnail_menu_mobile.ggAvailableHeight + 'px';
					me._thumbnail_menu_mobile.ggVPercentVisible = me._thumbnail_menu_mobile.ggAvailableHeight / contentHeight;
					if (me._thumbnail_menu_mobile.ggVPercentVisible > 1.0) me._thumbnail_menu_mobile.ggVPercentVisible = 1.0;
					me._thumbnail_menu_mobile.ggScrollHeight =  Math.round(me._thumbnail_menu_mobile__vertScrollBg.clientHeight * me._thumbnail_menu_mobile.ggVPercentVisible);
					me._thumbnail_menu_mobile__vertScrollFg.style.height = me._thumbnail_menu_mobile.ggScrollHeight + 'px';
					me._thumbnail_menu_mobile.ggScrollPosY = me._thumbnail_menu_mobile.ggScrollPosYPercent * me._thumbnail_menu_mobile.ggAvailableHeight;
					me._thumbnail_menu_mobile.ggScrollPosY = Math.min(me._thumbnail_menu_mobile.ggScrollPosY, me._thumbnail_menu_mobile__vertScrollBg.clientHeight - me._thumbnail_menu_mobile__vertScrollFg.clientHeight);
					me._thumbnail_menu_mobile__vertScrollFg.style.top = me._thumbnail_menu_mobile.ggScrollPosY + 'px';
					me._thumbnail_menu_mobile__content.style.top = -(Math.round(me._thumbnail_menu_mobile.ggScrollPosY / me._thumbnail_menu_mobile.ggVPercentVisible)) + 'px';
				} else {
					me._thumbnail_menu_mobile__cornerBg.style.visibility = 'hidden';
				}
			}
		}
		el=me._thumbnail_cloner_mobile=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner_mobile.callChildLogicBlocks_changenodeid = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible) {
						me._thumbnail_cloner_mobile.ggInstances[i]._checkmark_tick_mobile.logicBlock_visible();
					}
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_active_mobile.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip = function(){
			if(me._thumbnail_cloner_mobile.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner_mobile.ggInstances.length; i++) {
					if (me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha) {
						me._thumbnail_cloner_mobile.ggInstances[i]._thumbnail_title_mobile.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner_mobile.ggUpdating == true) return;
			me._thumbnail_cloner_mobile.ggUpdating = true;
			me._thumbnail_cloner_mobile.ggInstances = [];
			if (typeof filter=='object') {
				me._thumbnail_cloner_mobile.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner_mobile.ggFilter;
			};
			if (me._thumbnail_cloner_mobile.hasChildNodes() == true) {
				while (me._thumbnail_cloner_mobile.firstChild) {
					me._thumbnail_cloner_mobile.removeChild(me._thumbnail_cloner_mobile.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var parentWidth = me._thumbnail_cloner_mobile.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnail_cloner_mobile.parentNode.parentNode.clientWidth;
			var numCols = Math.floor((parentWidth * me._thumbnail_cloner_mobile.ggNumRepeat / 100.0) / me._thumbnail_cloner_mobile.offsetWidth);
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
					me._thumbnail_cloner_mobile__node = document.createElement('div');
					me._thumbnail_cloner_mobile.appendChild(me._thumbnail_cloner_mobile__node);
					me._thumbnail_cloner_mobile__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner_mobile.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner_mobile.ggWidth) + 'px; height: ' + me._thumbnail_cloner_mobile.ggHeight + 'px; width: ' + me._thumbnail_cloner_mobile.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_mobile_Class(nodeId, me);
					me._thumbnail_cloner_mobile.ggInstances.push(inst);
					me._thumbnail_cloner_mobile__node.appendChild(inst.__div);
					me._thumbnail_cloner_mobile__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._thumbnail_cloner_mobile.callChildLogicBlocks_changenodeid();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_active();
			me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();
			me._thumbnail_cloner_mobile.ggUpdating = false;
		}
		this._thumbnail_cloner_mobile.ggTags = [];
		el.ggId="thumbnail_cloner_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 1.98px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 1.764px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner_mobile.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=true;
		}
		this._thumbnail_cloner_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		this._thumbnail_cloner_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_cloner_mobile']=false;
		}
		this._thumbnail_cloner_mobile.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner_mobile.childNodes.length; i++) {
				var child=me._thumbnail_cloner_mobile.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner_mobile.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner_mobile.ggLastSize) || (me._thumbnail_cloner_mobile.ggLastSize.w!=w) || (me._thumbnail_cloner_mobile.ggLastSize.h!=h)) {
				me._thumbnail_cloner_mobile.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner_mobile.ggUpdate();
			}
		}
		this._thumbnail_cloner_mobile.ggNodeChange=function () {
			me._thumbnail_cloner_mobile.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu_mobile__content.appendChild(me._thumbnail_cloner_mobile);
		me.divSkin.appendChild(me._thumbnail_menu_mobile);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(85,85,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		me._web_page.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		this._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._web_page);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._userdata.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._userdata.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._userdata.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._userdata.style[domTransition]='';
				if (me._userdata.ggCurrentLogicStateVisible == 0) {
					me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
					me._userdata.ggVisible=true;
				}
				else {
					me._userdata.style.visibility="hidden";
					me._userdata.ggVisible=false;
				}
			}
		}
		this._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(93,93,93,0.784314);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._userdata_title=document.createElement('div');
		els=me._userdata_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		this._userdata_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_title.ggUpdateText();
		el.appendChild(els);
		me._userdata_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_title);
		el=me._userdata_description=document.createElement('div');
		els=me._userdata_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		this._userdata_description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_description.ggUpdateText();
		el.appendChild(els);
		me._userdata_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_description);
		el=me._userdata_author=document.createElement('div');
		els=me._userdata_author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		this._userdata_author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._userdata_author.ggUpdateText();
		el.appendChild(els);
		me._userdata_author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_author);
		el=me._userdata_copyright=document.createElement('div');
		els=me._userdata_copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="userdata_copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 220px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="         Created by Almaty3D";
		el.appendChild(els);
		me._userdata_copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_copyright.onclick=function (e) {
			me.player.openUrl("https:\/\/almaty3d.kz\/","");
		}
		this._userdata_copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_copyright);
		el=me._userdata_close=document.createElement('div');
		els=this._userdata_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2Mt'+
			'MC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LD'+
			'QxMi43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43'+
			'bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._userdata_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;userdata_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._userdata_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAu'+
			'NCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0w'+
			'LjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._userdata_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;userdata_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="userdata_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 204px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_close.onclick=function (e) {
			me.player.setVariableValue('vis_userdata', false);
		}
		this._userdata_close.onmouseover=function (e) {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		this._userdata_close.onmouseout=function (e) {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		this._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_close);
		me.divSkin.appendChild(me._userdata);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_info_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		this._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(93,93,93,0.784314);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		this._info_text_body.ggUpdateText=function() {
			var hs=me.player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		this._info_title.ggUpdateText=function() {
			var hs=me.player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=this._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2Mt'+
			'MC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LD'+
			'QxMi43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43'+
			'bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAu'+
			'NCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0w'+
			'LjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function (e) {
			me.player.setVariableValue('vis_info_popup', false);
		}
		this._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_image_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		this._image_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_image=document.createElement('div');
		els=this._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPS'+
			'Jyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3k9IjMi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIG'+
			'JlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=20;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image.ggText=basePath + '';
		this._popup_image__img.setAttribute('src', this._popup_image.ggText);
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggSubElement = this._popup_image__img;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_image_popup') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		this._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;;');
			};
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_file') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		this._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=this._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPS'+
			'Jyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3k9IjMi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIG'+
			'JlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_file;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=20;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		this._popup_video_file.seekbars = [];
		this._popup_video_file.seekbars.push('seekbar_file');
		this._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_file.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('autoplay', '');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = me.player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		me._popup_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_file') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		this._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_file') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		this._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_file=document.createElement('div');
		this._seekbar_file__playhead=document.createElement('div');
		this._seekbar_file.mediaEl = null;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		this._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#5555ff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			}
			me._seekbar_file.mediaEl = me.player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '2px';
				me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
				}
				if (me._seekbar_file.ggMediaEnded) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
				}
			me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		this._seekbar_file.updatePlayback = function() {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState) {
					var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 2) * percent);
					playheadpos += 2;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #5555ff ' + currPos + '%, #5555ff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #5555ff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		this._seekbar_file.appendChild(this._seekbar_file__playhead);
		var hs,el,els,elo,ela;
		hs+='background: #5555ff;';
		hs+='border: 2px solid #5555ff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		this._seekbar_file.setAttribute('style', hs);
		this._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		me._seekbar_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		this._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		this._seekbar_file.ggUpdatePosition=function (useTransition) {
		}
		this._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=this._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE1MC41LDM5OC42bC0zOC4xLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MGMwLTEuNSwxLTIuMSwyLjMtMS4ybDM4LjIsMjYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiLz4KIDwv'+
			'Zz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5MSwzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_play_file;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ3LjgsMzk4LjhsLTQyLjQsMjkuNmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM2N2MwLTEuNywxLjItMi4zLDIuNi0xLjNsNDIuNCwyOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44'+
			'eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkyLjgsMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjZjMS40LDEsMS40LDIuNiwwLDMuNmwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_play_file;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_file.onclick=function (e) {
			me.player.playSound("popup_video_file","1");
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		this._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		this._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		this._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=this._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE3Ny43LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNoLTE0LjNjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTM4LjZjMC0xLjMsMS0yLjMsMi4zLTIuM2gxNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3'+
			'LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM0gtMTcwYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMS0yLjMsMi4zLTIuM2gxNC4zYzEuMywwLDIuMywxLDIuMywyLjNDLTE1My40LDM3Ny43LTE1My40LDQxNi4zLTE1My40LDQxNi4zeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4MCwzNzUuNGgtMTQuM2MtMS4zLDAtMi4zLDEtMi4zLDIuM3YzOC42YzAsMS4zLDEsMi4zLDIuMywyLjNoMTQuM2MxLjMsMCwyLjMtMSwyLjMtMi'+
			'4zdi0zOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc3LjcsMzc2LjQtMTc4LjcsMzc1LjQtMTgwLDM3NS40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS43LDM3NS40SC0xNzBjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE1My40LDM3Ni40LTE1NC40LDM3NS40LTE1NS43LDM3NS40eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_pause_file;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LDQxOC40YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtMTUuOWMtMS40LDAtMi42LTEuMS0yLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0x'+
			'NzgsMzc1LjUtMTc4LDQxOC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOWMwLTEuNCwxLjEtMi42LDIuNi0yLjZoMTUuOWMxLjQsMCwyLjYsMS4xLDIuNiwyLjZDLTE1MSwzNzUuNS0xNTEsNDE4LjQtMTUxLDQxOC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4MC41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LD'+
			'AsMi42LTEuMSwyLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc4LDM3NC4xLTE3OS4xLDM3My0xODAuNSwzNzN6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjUsMzczaC0xNS45Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2NDIuOWMwLDEuNCwxLjEsMi42LDIuNiwyLjZoMTUuOWMxLjQsMCwyLjYtMS4xLDIuNi0yLjZ2LTQyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTEsMzc0LjEtMTUyLjEsMzczLTE1My41LDM3M3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_pause_file;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_file.onclick=function (e) {
			me.player.pauseSound("popup_video_file");
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		this._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_url=document.createElement('div');
		el.ggId="video_popup_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url.style[domTransition]='';
				if (me._video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url.style.visibility=(Number(me._video_popup_url.style.opacity)>0||!me._video_popup_url.style.opacity)?'inherit':'hidden';
					me._video_popup_url.ggVisible=true;
				}
				else {
					me._video_popup_url.style.visibility="hidden";
					me._video_popup_url.ggVisible=false;
				}
			}
		}
		this._video_popup_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_url=document.createElement('div');
		els=this._loading_video_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPS'+
			'Jyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3k9IjMi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIG'+
			'JlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_url";
		el.ggDx=20;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_url.appendChild(me._loading_video_url);
		el=me._popup_video_url=document.createElement('div');
		this._popup_video_url.seekbars = [];
		this._popup_video_url.seekbars.push('seekbar_url');
		this._popup_video_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_url.hasChildNodes()) {
				me._popup_video_url.removeChild(me._popup_video_url.lastChild);
			}
			if (me._popup_video_url__vid) {
				me._popup_video_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_url.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_url.ggVideoNotLoaded = false;
			me._popup_video_url__vid=document.createElement('video');
			me._popup_video_url__vid.className='ggskin ggskin_video';
			me._popup_video_url__vid.setAttribute('width', '100%');
			me._popup_video_url__vid.setAttribute('height', '100%');
			me._popup_video_url__vid.setAttribute('autoplay', '');
			me._popup_video_url__source=document.createElement('source');
			me._popup_video_url__source.setAttribute('src', media);
			me._popup_video_url__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_url__vid.setAttribute('style', ';');
			me._popup_video_url__vid.appendChild(me._popup_video_url__source);
			me._popup_video_url.appendChild(me._popup_video_url__vid);
			var videoEl = me.player.registerVideoElement('popup_video_url', me._popup_video_url__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._popup_video_url.ggVideoSource = media;
		}
		el.ggId="popup_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_url.ggIsActive=function() {
			if (me._popup_video_url__vid != null) {
				return (me._popup_video_url__vid.paused == false && me._popup_video_url__vid.ended == false);
			} else {
				return false;
			}
		}
		me._popup_video_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._popup_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_url.style[domTransition]='';
				if (me._popup_video_url.ggCurrentLogicStateVisible == 0) {
					me._popup_video_url.style.visibility=(Number(me._popup_video_url.style.opacity)>0||!me._popup_video_url.style.opacity)?'inherit':'hidden';
					if (me._popup_video_url.ggVideoNotLoaded) {
						me._popup_video_url.ggInitMedia(me._popup_video_url.ggVideoSource);
					}
					me._popup_video_url.ggVisible=true;
				}
				else {
					me._popup_video_url.style.visibility="hidden";
					me._popup_video_url.ggInitMedia('');
					me._popup_video_url.ggVisible=false;
				}
			}
		}
		this._popup_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._popup_video_url);
		me.divSkin.appendChild(me._video_popup_url);
		el=me._video_popup_controls_url=document.createElement('div');
		el.ggId="video_popup_controls_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._video_popup_controls_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_url.style[domTransition]='';
				if (me._video_popup_controls_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_url.style.visibility=(Number(me._video_popup_controls_url.style.opacity)>0||!me._video_popup_controls_url.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_url.ggVisible=true;
				}
				else {
					me._video_popup_controls_url.style.visibility="hidden";
					me._video_popup_controls_url.ggVisible=false;
				}
			}
		}
		this._video_popup_controls_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_url=document.createElement('div');
		this._seekbar_url__playhead=document.createElement('div');
		this._seekbar_url.mediaEl = null;
		el.ggId="seekbar_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		this._seekbar_url.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_url__playhead.style.visibility = 'hidden';
				me._seekbar_url.style.background = '#5555ff';
				me._seekbar_url.ggConnected = false;
			}
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url.mediaEl.removeEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.removeEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.removeEventListener('pause', me._seekbar_url.ggDeactivate);
				}
				if (me._seekbar_url.ggMediaEnded) {
					me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggMediaEnded);
				}
			}
			me._seekbar_url.mediaEl = me.player.getMediaObject('popup_video_url');
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url__playhead.style.visibility = 'inherit';
				me._seekbar_url__playhead.style.left = '2px';
				me._seekbar_url.mediaEl.addEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.addEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.addEventListener('pause', me._seekbar_url.ggDeactivate);
				}
				if (me._seekbar_url.ggMediaEnded) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggMediaEnded);
				}
			me._seekbar_url.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_url');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		this._seekbar_url.updatePlayback = function() {
			if (!me._seekbar_url.ggConnected) return;
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.mediaEl.readyState) {
					var percent = me._seekbar_url.mediaEl.currentTime / me._seekbar_url.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_url.clientWidth - 2 * 8 + 2) * percent);
					playheadpos += 2;
					me._seekbar_url__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_url.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_url.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_url.mediaEl.buffered.start(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_url.mediaEl.buffered.end(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #5555ff ' + currPos + '%, #5555ff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #5555ff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_url.style.background = gradientString;
				}
			}
		}
		this._seekbar_url.appendChild(this._seekbar_url__playhead);
		var hs,el,els,elo,ela;
		hs+='background: #5555ff;';
		hs+='border: 2px solid #5555ff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 2px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		this._seekbar_url.setAttribute('style', hs);
		this._seekbar_url__playhead.setAttribute('style', hs_playhead);
		me._seekbar_url.ggIsActive=function() {
			if (me._seekbar_url.mediaEl != null) {
				return (me._seekbar_url.mediaEl.paused == false && me._seekbar_url.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		me._seekbar_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._seekbar_url.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_url.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_url.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_url.ggActivate=function () {
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
		}
		this._seekbar_url.ggDeactivate=function () {
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
		}
		this._seekbar_url.ggUpdatePosition=function (useTransition) {
		}
		this._seekbar_url.ggNodeChange=function () {
			me._seekbar_url.connectToMediaEl();
		}
		me._video_popup_controls_url.appendChild(me._seekbar_url);
		el=me._ht_video_play_url=document.createElement('div');
		els=this._ht_video_play_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE1MC41LDM5OC42bC0zOC4xLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MGMwLTEuNSwxLTIuMSwyLjMtMS4ybDM4LjIsMjYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDkuMywzOTYuMy0xNDkuMywzOTcuNy0xNTAuNSwzOTguNnoiLz4KIDwv'+
			'Zz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5MSwzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjZjMS4zLDAuOSwxLjMsMi4zLDAsMy4ybC0zOC4yLDI2LjZjLTEuMywwLjktMi4zLDAuMy0yLjMtMS4yVjM3MHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_play_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_play_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ3LjgsMzk4LjhsLTQyLjQsMjkuNmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM2N2MwLTEuNywxLjItMi4zLDIuNi0xLjNsNDIuNCwyOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0Ni40LDM5Ni4yLTE0Ni40LDM5Ny44LTE0Ny44LDM5OC44'+
			'eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTkyLjgsMzY3YzAtMS43LDEuMi0yLjMsMi42LTEuM2w0Mi40LDI5LjZjMS40LDEsMS40LDIuNiwwLDMuNmwtNDIuNCwyOS42Yy0xLjQsMS0yLjYsMC40LTIuNi0xLjNWMzY3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_play_url;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_url.onclick=function (e) {
			me.player.playSound("popup_video_url","1");
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
		}
		this._ht_video_play_url.onmouseover=function (e) {
			me._ht_video_play_url__img.style.visibility='hidden';
			me._ht_video_play_url__imgo.style.visibility='inherit';
		}
		this._ht_video_play_url.onmouseout=function (e) {
			me._ht_video_play_url__img.style.visibility='inherit';
			me._ht_video_play_url__imgo.style.visibility='hidden';
		}
		this._ht_video_play_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_play_url);
		el=me._ht_video_pause_url=document.createElement('div');
		els=this._ht_video_pause_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE3Ny43LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNoLTE0LjNjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTM4LjZjMC0xLjMsMS0yLjMsMi4zLTIuM2gxNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0MtMTc3LjcsMzc3LjctMTc3'+
			'LjcsNDE2LjMtMTc3LjcsNDE2LjN6IE0tMTUzLjQsNDE2LjNjMCwxLjMtMSwyLjMtMi4zLDIuM0gtMTcwYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMS0yLjMsMi4zLTIuM2gxNC4zYzEuMywwLDIuMywxLDIuMywyLjNDLTE1My40LDM3Ny43LTE1My40LDQxNi4zLTE1My40LDQxNi4zeiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4MCwzNzUuNGgtMTQuM2MtMS4zLDAtMi4zLDEtMi4zLDIuM3YzOC42YzAsMS4zLDEsMi4zLDIuMywyLjNoMTQuM2MxLjMsMCwyLjMtMSwyLjMtMi'+
			'4zdi0zOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc3LjcsMzc2LjQtMTc4LjcsMzc1LjQtMTgwLDM3NS40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1NS43LDM3NS40SC0xNzBjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE1My40LDM3Ni40LTE1NC40LDM3NS40LTE1NS43LDM3NS40eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_pause_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_pause_url;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_pause_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LDQxOC40YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtMTUuOWMtMS40LDAtMi42LTEuMS0yLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0x'+
			'NzgsMzc1LjUtMTc4LDQxOC40LTE3OCw0MTguNHogTS0xNTEsNDE4LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC0xNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOWMwLTEuNCwxLjEtMi42LDIuNi0yLjZoMTUuOWMxLjQsMCwyLjYsMS4xLDIuNiwyLjZDLTE1MSwzNzUuNS0xNTEsNDE4LjQtMTUxLDQxOC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE4MC41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LD'+
			'AsMi42LTEuMSwyLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc4LDM3NC4xLTE3OS4xLDM3My0xODAuNSwzNzN6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjUsMzczaC0xNS45Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2NDIuOWMwLDEuNCwxLjEsMi42LDIuNiwyLjZoMTUuOWMxLjQsMCwyLjYtMS4xLDIuNi0yLjZ2LTQyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTEsMzc0LjEtMTUyLjEsMzczLTE1My41LDM3M3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_pause_url;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_url.onclick=function (e) {
			me.player.pauseSound("popup_video_url");
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
		}
		this._ht_video_pause_url.onmouseover=function (e) {
			me._ht_video_pause_url__img.style.visibility='hidden';
			me._ht_video_pause_url__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_url.onmouseout=function (e) {
			me._ht_video_pause_url__img.style.visibility='inherit';
			me._ht_video_pause_url__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_pause_url);
		me.divSkin.appendChild(me._video_popup_controls_url);
		el=me._video_popup_vimeo=document.createElement('div');
		el.ggId="video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		me._video_popup_vimeo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_vimeo') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_vimeo.style[domTransition]='';
				if (me._video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._video_popup_vimeo.style.visibility=(Number(me._video_popup_vimeo.style.opacity)>0||!me._video_popup_vimeo.style.opacity)?'inherit':'hidden';
					me._video_popup_vimeo.ggVisible=true;
				}
				else {
					me._video_popup_vimeo.style.visibility="hidden";
					me._video_popup_vimeo.ggVisible=false;
				}
			}
		}
		this._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_vimeo=document.createElement('div');
		els=this._loading_video_vimeo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPS'+
			'Jyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3k9IjMi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIG'+
			'JlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_vimeo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_vimeo;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_vimeo";
		el.ggDx=20;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_vimeo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_vimeo.appendChild(me._loading_video_vimeo);
		el=me._popup_video_vimeo=document.createElement('div');
		this._popup_video_vimeo.seekbars = [];
		this._popup_video_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_vimeo.hasChildNodes()) {
				me._popup_video_vimeo.removeChild(me._popup_video_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_vimeo.ggVideoNotLoaded = false;
			me._popup_video_vimeo__vid=document.createElement('iframe');
			me._popup_video_vimeo__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._popup_video_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_vimeo__vid.setAttribute('width', '100%');
			me._popup_video_vimeo__vid.setAttribute('height', '100%');
			me._popup_video_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_vimeo.appendChild(me._popup_video_vimeo__vid);
			me._popup_video_vimeo.ggVideoSource = media;
		}
		el.ggId="popup_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_video_vimeo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._popup_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_vimeo') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_vimeo.style[domTransition]='';
				if (me._popup_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._popup_video_vimeo.style.visibility=(Number(me._popup_video_vimeo.style.opacity)>0||!me._popup_video_vimeo.style.opacity)?'inherit':'hidden';
					if (me._popup_video_vimeo.ggVideoNotLoaded) {
						me._popup_video_vimeo.ggInitMedia(me._popup_video_vimeo.ggVideoSource);
					}
					me._popup_video_vimeo.ggVisible=true;
				}
				else {
					me._popup_video_vimeo.style.visibility="hidden";
					me._popup_video_vimeo.ggInitMedia('');
					me._popup_video_vimeo.ggVisible=false;
				}
			}
		}
		this._popup_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_vimeo.appendChild(me._popup_video_vimeo);
		me.divSkin.appendChild(me._video_popup_vimeo);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		me._video_popup_youtube.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_youtube') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style[domTransition]='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		this._video_popup_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=this._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN4PSIxNiIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPS'+
			'Jyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmlu'+
			'aXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIiByPSIwIj4KICA8YW5pbWF0ZSBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMi'+
			'AwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIgY3k9IjMi'+
			'IHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIG'+
			'JlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiIHI9IjAiPgogIDxhbmltYXRlIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyIgcj0iMCI+CiAgPGFuaW1hdGUgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44Ii8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;loading_video_youtube;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=20;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_youtube.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		this._popup_video_youtube.seekbars = [];
		this._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_video_youtube.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_video_popup_youtube') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style[domTransition]='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		this._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me.__360image_gyro=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=4000;
		el.ggId="360image_gyro";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 116px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_gyro.ggIsActive=function() {
			return (me.__360image_gyro.ggTimestamp + me.__360image_gyro.ggTimeout) >= me.ggCurrentTime;
		}
		me.__360image_gyro.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me.__360image_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) && 
				(me.player.getVariableValue('opt_gyro') == true) && 
				(me.player.getVariableValue('vis_360image_once') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__360image_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__360image_gyro.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateVisible == 0) {
					me.__360image_gyro.style.visibility=(Number(me.__360image_gyro.style.opacity)>0||!me.__360image_gyro.style.opacity)?'inherit':'hidden';
					me.__360image_gyro.ggVisible=true;
				}
				else {
					me.__360image_gyro.style.visibility="hidden";
					me.__360image_gyro.ggVisible=false;
				}
			}
		}
		me.__360image_gyro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.__360image_gyro.ggIsActive() == false)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__360image_gyro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__360image_gyro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__360image_gyro.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me.__360image_gyro.ggCurrentLogicStateAlpha == 0) {
					me.__360image_gyro.style.visibility="hidden";
					me.__360image_gyro.style.opacity=0;
				}
				else {
					me.__360image_gyro.style.visibility=me.__360image_gyro.ggVisible?'inherit':'hidden';
					me.__360image_gyro.style.opacity=1;
				}
			}
		}
		this.__360image_gyro.ggDeactivate=function () {
			me.player.setVariableValue('vis_360image_once', false);
		}
		me.__360image_gyro.ggCurrentLogicStateVisible = -1;
		me.__360image_gyro.ggCurrentLogicStateAlpha = -1;
		this.__360image_gyro.ggUpdateConditionTimer=function () {
			me.__360image_gyro.logicBlock_alpha();
		}
		this.__360image_gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me.__360image_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=400;
		el.ggId="360image_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_timer.ggIsActive=function() {
			return (me.__360image_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me.__360image_timer.ggTimestamp) / me.__360image_timer.ggTimeout) % 2 == 0));
		}
		me.__360image_timer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__360image_timer.ggActivate=function () {
			me.player.setVariableValue('pos_360image', me.player.getVariableValue('pos_360image') + Number("1"));
			me.player.setVariableValue('pos_360image', me.player.getVariableValue('pos_360image') % Number("5"));
		}
		this.__360image_timer.ggUpdatePosition=function (useTransition) {
		}
		me.__360image_gyro.appendChild(me.__360image_timer);
		el=me.__360image_background=document.createElement('div');
		el.ggId="360image_background";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(76,76,76,0.705882);';
		hs+='border : 1px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 116px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__360image_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__360image_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360image_gyro.appendChild(me.__360image_background);
		el=me.__360image_text=document.createElement('div');
		els=me.__360image_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="360image_text";
		el.ggDx=0;
		el.ggDy=32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 19px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 89px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Gyroscope";
		el.appendChild(els);
		me.__360image_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__360image_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this.__360image_text.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__360image_gyro.appendChild(me.__360image_text);
		el=me.__360image=document.createElement('div');
		el.ggId="360image";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 9px;';
		hs+='border-radius : 9px;';
		hs+='background : rgba(177,9,59,0.00392157);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__360image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me.__360image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me.__360image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getVariableValue('pos_360image') == 0)
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 1)
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 2)
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 3)
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 4)
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__360image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__360image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__360image.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 2) {
					this.ggDx = -32;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 3) {
					this.ggDx = 0;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else if (me.__360image.ggCurrentLogicStatePosition == 4) {
					this.ggDx = 32;
					this.ggDy = -8;
					me.__360image.ggUpdatePosition(true);
				}
				else {
					me.__360image.ggDx=0;
					me.__360image.ggDy=-8;
					me.__360image.ggUpdatePosition(true);
				}
			}
		}
		me.__360image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('pos_360image') == 2)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 3)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 4)
			)
			{
				newLogicStateScaling = 2;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 5)
			)
			{
				newLogicStateScaling = 3;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__360image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__360image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__360image.style[domTransition]='left 1000ms ease 0ms, top 1000ms ease 0ms, ' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me.__360image.ggCurrentLogicStateScaling == 0) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 1) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 2) {
					me.__360image.ggParameter.sx = 0.7;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else if (me.__360image.ggCurrentLogicStateScaling == 3) {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
				else {
					me.__360image.ggParameter.sx = 1;
					me.__360image.ggParameter.sy = 1;
					me.__360image.style[domTransform]=parameterToTransform(me.__360image.ggParameter);
				}
			}
		}
		this.__360image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._phone1=document.createElement('div');
		el.ggId="phone1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._phone1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._phone1.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone1);
		el=me._phone2=document.createElement('div');
		el.ggId="phone2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._phone2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._phone2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('pos_360image') == 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 2)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 3)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._phone2.ggCurrentLogicStateScaling == 0) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 1) {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else if (me._phone2.ggCurrentLogicStateScaling == 2) {
					me._phone2.ggParameter.sx = 0.8;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
				else {
					me._phone2.ggParameter.sx = 1;
					me._phone2.ggParameter.sy = 1;
					me._phone2.style[domTransform]=parameterToTransform(me._phone2.ggParameter);
				}
			}
		}
		this._phone2.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone2);
		el=me._phone3=document.createElement('div');
		el.ggId="phone3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 8px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._phone3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._phone3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._phone3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				(me.player.getVariableValue('pos_360image') == 1)
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 0)
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				(me.player.getVariableValue('pos_360image') == 0)
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._phone3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._phone3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._phone3.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._phone3.ggCurrentLogicStateScaling == 0) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 1) {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else if (me._phone3.ggCurrentLogicStateScaling == 2) {
					me._phone3.ggParameter.sx = 0.8;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
				else {
					me._phone3.ggParameter.sx = 1;
					me._phone3.ggParameter.sy = 1;
					me._phone3.style[domTransform]=parameterToTransform(me._phone3.ggParameter);
				}
			}
		}
		this._phone3.ggUpdatePosition=function (useTransition) {
		}
		me.__360image.appendChild(me._phone3);
		me.__360image_gyro.appendChild(me.__360image);
		me.divSkin.appendChild(me.__360image_gyro);
		el=me._close=document.createElement('div');
		els=this._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2Mt'+
			'MC40LDAuNC0wLjgsMC41LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LD'+
			'QxMi43eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43'+
			'bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;close;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAu'+
			'NCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0w'+
			'LjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;close;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		me._close.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close.style[domTransition]='';
				if (me._close.ggCurrentLogicStateVisible == 0) {
					me._close.style.visibility=(Number(me._close.style.opacity)>0||!me._close.style.opacity)?'inherit':'hidden';
					me._close.ggVisible=true;
				}
				else {
					me._close.style.visibility="hidden";
					me._close.ggVisible=false;
				}
			}
		}
		this._close.onclick=function (e) {
			me.player.setVariableValue('vis_image_popup', false);
			me.player.setVariableValue('vis_info_popup', false);
			me.player.setVariableValue('vis_video_popup_file', false);
			me.player.setVariableValue('vis_video_popup_url', false);
			me.player.setVariableValue('vis_video_popup_vimeo', false);
			me.player.setVariableValue('vis_video_popup_youtube', false);
			me.player.setVariableValue('vis_website', false);
		}
		this._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		this._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		this._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._loading.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('opt_loader') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading.style[domTransition]='';
				if (me._loading.ggCurrentLogicStateVisible == 0) {
					me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
					me._loading.ggVisible=true;
				}
				else {
					me._loading.style.visibility="hidden";
					me._loading.ggVisible=false;
				}
			}
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(66,66,66,0.666667);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin__33';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAAeCAYAAAAIC7GrAAAF50lEQVRoge1aPWxcRRD+NkpzDZaA69I+CVEE0WB0lpCQsISM0jkOEYqgQBFIGERKjKIUdusCIy5CFEEIQWx3ES7sIhXRGQoERQq7dJrYcuRDSCk/ijd7b97e7r5953OcS+6TTt6d/Zvd2ZmdmWcgASQzkh2Sc4n9W9I/eczzAjnLtjqfNsmsYsyc6t8huUZynmRrmIzNMcdmzf4kuTg0RkYcJJsiIBdrJBuRcYueMUckd0TYwbF1mNtUEzcT+mshzx+bgWcAIuAdR0hHqt4JCUsEGRpHmTdoMc8kMJcBmJbqBIC3B9rlUwwRwPzQTWAZXwCwZnldypmUAWASwMcJ88zIuEtqbAbgdkzQUXhMRaXJHjVNZu5DWLRPaI15pcmZojeUZnYiY+mOlTZ91v'+
			'Rd0kpNBvCOU592F3rGcHgSkxpjVgC8BmDKGLOr6I8B7Ev1xZDJVig9l8aYVeRabXGLzpMaFbIIc1KqXdX0YQUjY3hgjHlsjLmnaaJ5Vmn+FqHXnXcVwJJUMwDv6/YqTdbCvArA3sChhUVirlqumWEeavTRK+Zq2jE1rc2uKj+sMe5YEB6XFWntGNMtoVDEeVebQww01BuyIzT9PgcPP/Ymy/vSlr9zLHucbVnX9QOqQoyW9HG9zo6s0ZK525pvaWuzHNbY2HXRM3+bEedG+LbrhDzlpupj+T1yz8lzZinn3lb9qhWRHmfEoQXjX8aF3GEcoXbvIdAfQ7rQwtfC2wwNEDSkX+ajR/YcC4fcuciKEIjpQvbmJ2LmekaVrwOAvCfbQpsLbaQCe6q8DmAKxXsC5D7AktDXFf0tdyLZyIJUuwBuyrgp5M6I5XVCDdPm+I70'+
			'0ea6K7Te2uIoaR59oY6+9Fcq3tZt+VnzakOgYXr2L0VbWXbrycJUtVk2r95bxbgmW9NYSqzQeRqE1lR8rDnzaKuyw8AbzH5N77MIjnZ5LZTDy46+4M5+k99VWXeeAUuj+g2iyb0LE9LkCyjf/lkAn8hPH+aV1A15sA/gPw/9UeL4L1X5Ix2WaBhjvgawVTFXpZNijDkA8ItUM+RnZHFNlb+qmkvNuSuh1QwKrV4IXdia6IWCISFfVOVtz88ydJnDyJuW8W9VB1nTZuG23bDEgx+OzVWO66q8KLzoMHM9dNliEP6vKtKgIep5Vf7HFvqE7BzgujHmTfenGJpA+UY/KZxDYWn+Suj/YBiLijbflGompjNJi8XcxzT0DgrlcRNQqbDO2y7Uufg0WZvq0PtyVzF0MdDnJHGk1n/5Ca+ttfkWgMtS3vJpsby7i8gP/prb7m'+
			'C/oj0I8TXsJVrVvPiEbD3HLvLb1Qe50fadm2VK4D1EyPr2QKYT1p+paK+7dk+bUSjEjciwBen3eqTPORRC2ov064NYiG8U6UfdfsbT2ZrqrYowQGv5aXyZWpG/EwC+C3USk/rZkNdeRjnNuxXyC0SjbCg3yXA8rLW8jofeAvCnIl1yLYqrye/WWEib7JRPZEOFeKX28GYlNNPZrIaYsA2UI4VhrL0L4A9FulExRKcuv9eClre6jTxyAXKz7rWgggMZZ5+B31Hsb0ny2CWcVYs1AHwg1S5yIQZhjDkguYU8vJommQ3iWR4TF5BvMhM+Zklawb+CIQvXQizeG1INarGFMWaV5HkUZvs2Sau5ms8ugPcqLOhvJB+h8OgtPpeLH2VcJw2SzAUDabQQXdp02lInFHqJBkXTSYrQt9YGy3lgF2vO3nzJhlrfk1nOEdf5gOIm'+
			'Plw+UxM6FkdM+B+xs6r8EIVD8VMi33fVGJ0ufKDoG86Yn5G79+5322+Rp+LuB+a5Dw/k1n9Kchn5c/OqNB0C2DDG3GPumNk0n8sPkJvApL3LXNajTonRNa8rJH9F7sNYP6bHZ2ToBsppykOhHZyC9Xz24WjV8/2fqGJGGx5a00dz+9Zcp3YIN8h6spZFJzZPZP8Nt83XN8bnoGc1RgLo+V47CgduTpuBUQLzf2J8AcCeMeY0Mn1jnBRGQVvHGGOMMcYYefwPbC5f8QkRiI4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043d\u043e\u043f\u043a\u0430 33";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 5px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__33.ggIsActive=function() {
			return false;
		}
		me.__33.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this.__33.onclick=function (e) {
			me.player.openUrl("https:\/\/almaty3d.kz\/","_blank");
		}
		this.__33.onmouseover=function (e) {
			if (me.player.transitionsDisabled) {
				me.__33.style[domTransition]='none';
			} else {
				me.__33.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__33.style.opacity='1';
			me.__33.style.visibility=me.__33.ggVisible?'inherit':'hidden';
		}
		this.__33.onmouseout=function (e) {
			if (me.player.transitionsDisabled) {
				me.__33.style[domTransition]='none';
			} else {
				me.__33.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__33.style.opacity='0.6';
			me.__33.style.visibility=me.__33.ggVisible?'inherit':'hidden';
		}
		this.__33.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me.__33);
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("2"));
		}
		if (
			(
				(me.player.getVariableValue('opt_autorotate') == true)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_info') == true)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_thumbnail') == true)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_projection') == true)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_gyro') == true) && 
				(me.player.getIsMobile() == true)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_fullscreen') == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_controller', me.player.getVariableValue('pos_controller') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_fullscreen', me.player.getVariableValue('pos_fullscreen') + Number("2"));
		}
		if (
			(
				(me.player.getVariableValue('opt_autorotate') == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_fullscreen', me.player.getVariableValue('pos_fullscreen') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_info') == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_fullscreen', me.player.getVariableValue('pos_fullscreen') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_thumbnail') == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_fullscreen', me.player.getVariableValue('pos_fullscreen') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_projection') == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_fullscreen', me.player.getVariableValue('pos_fullscreen') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_gyro') == true) && 
				(me.player.getIsMobile() == true) && 
				(me.player.getOS() != 4)
			)
		) {
			me.player.setVariableValue('pos_fullscreen', me.player.getVariableValue('pos_fullscreen') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true) && 
				(me.player.getIsMobile() == true)
			)
		) {
			me.player.setVariableValue('pos_gyro', me.player.getVariableValue('pos_gyro') + Number("2"));
		}
		if (
			(
				(me.player.getVariableValue('opt_autorotate') == true) && 
				(me.player.getIsMobile() == true)
			)
		) {
			me.player.setVariableValue('pos_gyro', me.player.getVariableValue('pos_gyro') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_info') == true) && 
				(me.player.getIsMobile() == true)
			)
		) {
			me.player.setVariableValue('pos_gyro', me.player.getVariableValue('pos_gyro') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_thumbnail') == true) && 
				(me.player.getIsMobile() == true)
			)
		) {
			me.player.setVariableValue('pos_gyro', me.player.getVariableValue('pos_gyro') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_projection') == true) && 
				(me.player.getIsMobile() == true)
			)
		) {
			me.player.setVariableValue('pos_gyro', me.player.getVariableValue('pos_gyro') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true)
			)
		) {
			me.player.setVariableValue('pos_projection', me.player.getVariableValue('pos_projection') + Number("2"));
		}
		if (
			(
				(me.player.getVariableValue('opt_autorotate') == true)
			)
		) {
			me.player.setVariableValue('pos_projection', me.player.getVariableValue('pos_projection') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_info') == true)
			)
		) {
			me.player.setVariableValue('pos_projection', me.player.getVariableValue('pos_projection') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_thumbnail') == true)
			)
		) {
			me.player.setVariableValue('pos_projection', me.player.getVariableValue('pos_projection') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true)
			)
		) {
			me.player.setVariableValue('pos_thumbnail', me.player.getVariableValue('pos_thumbnail') + Number("2"));
		}
		if (
			(
				(me.player.getVariableValue('opt_autorotate') == true)
			)
		) {
			me.player.setVariableValue('pos_thumbnail', me.player.getVariableValue('pos_thumbnail') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_info') == true)
			)
		) {
			me.player.setVariableValue('pos_thumbnail', me.player.getVariableValue('pos_thumbnail') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true)
			)
		) {
			me.player.setVariableValue('pos_information', me.player.getVariableValue('pos_information') + Number("2"));
		}
		if (
			(
				(me.player.getVariableValue('opt_autorotate') == true)
			)
		) {
			me.player.setVariableValue('pos_information', me.player.getVariableValue('pos_information') + Number("1"));
		}
		if (
			(
				(me.player.getVariableValue('opt_zoom') == true)
			)
		) {
			me.player.setVariableValue('pos_autorotate', me.player.getVariableValue('pos_autorotate') + Number("2"));
		}
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._popup_video_url.ggVideoSource = '';
		me._popup_video_url.ggVideoNotLoaded = true;
		me._popup_video_vimeo.ggVideoSource = '';
		me._popup_video_vimeo.ggVideoNotLoaded = true;
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		this.player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		this.player.addListener('configloaded', function() {
			if (
				(
					(me.player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=me.ggCurrentTime;
			}
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
			me._thumbnail_cloner_mobile.ggUpdate(me._thumbnail_cloner_mobile.ggTags);
		});
		this.player.addListener('imagesready', function() {
			me._thumbnail_menu.ggUpdatePosition();
			me._thumbnail_menu_mobile.ggUpdatePosition();
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		this.player.addListener('beforechangenode', function() {
			if (
				(
					(me.player.getVariableValue('vis_loader') == true)
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		this.player.addListener('tilesrequested', function() {
			me.player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	this.hotspotProxyOver=function(id, url) {
	}
	this.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node1_changenodeid = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._ht_node_visited.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node_visited.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._ht_node_image.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node1'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_mouseover = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._hotspot_preview0.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._hotspot_preview0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_active = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				if (hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible) {
					hotspotTemplates['ht_node1'][i]._ht_node1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenodeid = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image_newpage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenodeid = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenodeid = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenodeid = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_configloaded = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_changenodeid = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_configloaded = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_position) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_mouseover = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._tt_ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				if (hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible) {
					hotspotTemplates['ht_video_url'][i]._ht_video_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_changenodeid = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._tt_ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				if (hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible) {
					hotspotTemplates['ht_video_vimeo'][i]._ht_video_vimeo.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_changenodeid = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_left_changenodeid = function(){
		if(hotspotTemplates['left']) {
			var i;
			for(i = 0; i < hotspotTemplates['left'].length; i++) {
				if (hotspotTemplates['left'][i]._checkmark_tick1.logicBlock_visible) {
					hotspotTemplates['left'][i]._checkmark_tick1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_left_mouseover = function(){
		if(hotspotTemplates['left']) {
			var i;
			for(i = 0; i < hotspotTemplates['left'].length; i++) {
				if (hotspotTemplates['left'][i]._hotspot_preview2.logicBlock_visible) {
					hotspotTemplates['left'][i]._hotspot_preview2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_right_changenodeid = function(){
		if(hotspotTemplates['right']) {
			var i;
			for(i = 0; i < hotspotTemplates['right'].length; i++) {
				if (hotspotTemplates['right'][i]._checkmark_tick0.logicBlock_visible) {
					hotspotTemplates['right'][i]._checkmark_tick0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_right_mouseover = function(){
		if(hotspotTemplates['right']) {
			var i;
			for(i = 0; i < hotspotTemplates['right'].length; i++) {
				if (hotspotTemplates['right'][i]._hotspot_preview1.logicBlock_visible) {
					hotspotTemplates['right'][i]._hotspot_preview1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changenodeid = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hotspot_preview.logicBlock_visible();
				}
			}
		}
	}
	this.player.addListener('changenodeid', function() {
		me.ggUserdata=me.player.userdata;
		me._thumbnail_cloner.ggNodeChange();
		me._thumbnail_cloner_mobile.ggNodeChange();
		me._seekbar_file.ggNodeChange();
		me._seekbar_url.ggNodeChange();
	});
	this.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._hide_timer.ggLastIsActive!=me._hide_timer.ggIsActive()) {
			me._hide_timer.ggLastIsActive=me._hide_timer.ggIsActive();
			if (me._hide_timer.ggLastIsActive) {
				if (me.player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='1';
				me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='0';
				me._menu_button.style.visibility='hidden';
				me.player.setVariableValue('vis_thumbnail_menu_auto_hide', true);
			} else {
				if (me.player.transitionsDisabled) {
					me._menu_button.style[domTransition]='none';
				} else {
					me._menu_button.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._menu_button.style.opacity='1';
				me._menu_button.style.visibility=me._menu_button.ggVisible?'inherit':'hidden';
				if (me.player.transitionsDisabled) {
					me._controller.style[domTransition]='none';
				} else {
					me._controller.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._controller.style.opacity='0';
				me._controller.style.visibility='hidden';
				me.player.setVariableValue('vis_thumbnail_menu_auto_hide', false);
			}
		}
		if (me.elementMouseOver['controller']) {
			if (
				(
					(me.player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=me.ggCurrentTime;
			}
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseOver['thumbnail_cloner']) {
			if (
				(
					(me.player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=me.ggCurrentTime;
			}
		}
		if (me.elementMouseOver['thumbnail_cloner_mobile']) {
			if (
				(
					(me.player.getVariableValue('opt_autohide') == true)
				)
			) {
				me._hide_timer.ggTimeout=Number("5") * 1000.0;
				me._hide_timer.ggTimestamp=me.ggCurrentTime;
			}
		}
		me._userdata_title.ggUpdateText();
		me._userdata_description.ggUpdateText();
		me._userdata_author.ggUpdateText();
		me._info_text_body.ggUpdateText();
		me._info_title.ggUpdateText();
		if (me.__360image_gyro.ggLastIsActive!=me.__360image_gyro.ggIsActive()) {
			me.__360image_gyro.ggLastIsActive=me.__360image_gyro.ggIsActive();
			if (me.__360image_gyro.ggLastIsActive) {
			} else {
				me.player.setVariableValue('vis_360image_once', false);
			}
		}
		me.__360image_gyro.ggUpdateConditionTimer();
		if (me.__360image_timer.ggLastIsActive!=me.__360image_timer.ggIsActive()) {
			me.__360image_timer.ggLastIsActive=me.__360image_timer.ggIsActive();
			if (me.__360image_timer.ggLastIsActive) {
				me.player.setVariableValue('pos_360image', me.player.getVariableValue('pos_360image') + Number("1"));
				me.player.setVariableValue('pos_360image', me.player.getVariableValue('pos_360image') % Number("5"));
			} else {
			}
		}
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
	};
	this.player.addListener('timer', this.skinTimerEvent);
	function SkinHotspotClass_ht_node1(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_node1=document.createElement('div');
		el.ggId="ht_node1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_node1.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_node1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node1.style[domTransition]='';
				if (me._ht_node1.ggCurrentLogicStateVisible == 0) {
					me._ht_node1.style.visibility="hidden";
					me._ht_node1.ggVisible=false;
				}
				else {
					me._ht_node1.style.visibility=(Number(me._ht_node1.style.opacity)>0||!me._ht_node1.style.opacity)?'inherit':'hidden';
					me._ht_node1.ggVisible=true;
				}
			}
		}
		this._ht_node1.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node1.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node1.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node1']=true;
			me._hotspot_preview0.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node1.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_node1']=false;
			me._hotspot_preview0.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node1.ontouchend=function (e) {
			me.elementMouseOver['ht_node1']=false;
			me._hotspot_preview0.logicBlock_visible();
		}
		this._ht_node1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=this._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYuMS0xNDQsMzQxLTE3NSwzNDF6IE0tMTY3LjksMzY2LjZjMC41LTAuNSwxLjQtMC41LDIsMGwxLjIsMS4yYzAuNSwwLjUsMC41LDEuNCwwLDJsLTI1LjMsMjUuM2MtMC41LDAuNS0xLjcsMS41LTIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQt'+
			'MS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBsNy4yLDcuMkwtMTY3LjksMzY2LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTQuOSwzOTRjMC4zLTAuMywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNXYxMS40Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43TC0xNTQuOSwzOTR6IE0tMTU0LjYsMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4zLTAuNCw0LjQsMC42LDQuNywyLjNjMC4zLDEuNy0xLjMsMy40LTMuNSwzLjljLTIuMywwLjQtNC40LTAuNi00LjctMi4zQy0xNTguNCwzODUuMi0xNTYuOS'+
			'wzODMuNS0xNTQuNiwzODN6IE0tMTczLDQwOS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOWMwLjktMC45LDIuNC0wLjksMy4zLDBsMTAsOS43TC0xNjcsNDAzLjR6IE0tMTM3LjksNDIwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjgtMC40LDEuNS0xLjEsMS45'+
			'Yy0wLjcsMC40LTEuNSwwLjUtMi4yLDAuMWMtOC43LTQuMi0yMS02LjYtMzMuOC02LjZzLTI1LjIsMi40LTMzLjgsNi42Yy0wLjMsMC4yLTAuNiwwLjItMSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMwLTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wtNC4xLDQuMWMtNy44LTAuOS0xNS4xLTIuNi0yMS4xLTV2MzguOWM4LjktMy42LDIwLjYtNS42LDMyLjYtNS42YzEyLDAsMjMuNiwyLDMyLj'+
			'YsNS42di0zOC45Yy04LjksMy42LTIwLjYsNS42LTMyLjYsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuNSwwLTAuNywwbDQuNi00LjZjMTEuNC0wLjQsMjIuMi0yLjcsMzAtNi41YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45TC0xMzcuOSw0MjBMLTEzNy45LDQyMHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzYuNSwzODkuOWwtMTQuMiwxMy45YzUtMC4zLDEwLjMtMC41LDE1LjctMC41YzIuNywwLDUuMywwLDgsMC4xbDMuOC0zLjdsLTEwLTkuNyYjeGQ7JiN4YTsmI3g5'+
			'OyYjeDk7JiN4OTtDLTE3NC4xLDM4OS0xNzUuNiwzODktMTc2LjUsMzg5Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMjA1LjgsNDA3LjN2Ni43YzguOC0zLjEsMTkuNi00LjgsMzAuOC00LjhjMC43LDAsMS4zLDAsMiwwbDQuMi00LjFjLTItMC4xLTQuMS0wLjEtNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4Ni4zLDQwNS0xOTcuMyw0MDUuOC0yMDUuOCw0MDcuM3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDQuMiw0MTMuOXYtMTEuNGwtOC43LTguNWMtMC4zLTAuMy0wLjYtMC40LTEtMC40Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xNS42LD'+
			'E1LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjAuOSw0MDkuNi0xNTEuOCw0MTEuMy0xNDQuMiw0MTMuOXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTMuNCwzODkuMmMyLjMtMC40LDMuOS0yLjIsMy41LTMuOWMtMC4zLTEuNy0yLjQtMi43LTQuNy0yLjNjLTIuMywwLjQtMy45LDIuMi0zLjUsMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTU3LjgsMzg4LjYtMTU1LjcsMzg5LjYtMTUzLjQsMzg5LjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk5LjgsMzg0LjJjLTAuNS0wLjUtMS40LTAuNS0yLDBsLTEuMiwxLjJjLTAuNSwwLjUtMC41LDEu'+
			'NCwwLDJsNy44LDcuOGMwLjUsMC41LDEuNywxLjUsMiwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjEsMC44LDAuMSwxLjEsMGMwLjMtMC4xLDEuNC0xLDItMS41bDI1LjMtMjUuM2MwLjUtMC41LDAuNS0xLjQsMC0ybC0xLjItMS4yYy0wLjUtMC41LTEuNC0wLjUtMiwwbC0yNC43LDI0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xOTkuOCwzODQuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzksMzcyLjNjLTAuNy0wLjQtMS41LTAuNS0yLjItMC4xYy03LjgsMy44LTE4LjYsNi4xLTMwLDYuNWwtNC42LDQuNmMwLjIsMCwwLjUsMCwwLjcsMCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7JiN4OTtjMTIsMCwyMy42LTIsMzIuNi01LjZ2MzguOWMtOC45LTMuNi0yMC42LTUuNi0zMi42LTUuNnMtMjMuNiwyLTMyLjYsNS42di0zOC45YzYsMi40LDEzLjMsNC4xLDIxLjEsNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMTAuMS0wLjctMTkuNS0yLjktMjYuNS02LjNjLTAuNy0wLjMtMS41LTAuMy0yLjIsMC4xYy0wLjcsMC40LTEuMSwxLjEtMS4xLDEuOVY0MjBjMCwwLjgsMC40LDEuNSwxLjEsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yYzguNy00LjIsMjEtNi42'+
			'LDMzLjgtNi42YzEyLjgsMCwyNS4yLDIuNCwzMy44LDYuNmMwLjcsMC4zLDEuNSwwLjMsMi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjhDLTEzNy45LDM3My40LTEzOC4zLDM3Mi43LTEzOSwzNzIuM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_node_visited;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTY3LjEsMzYzLjJjMC42LTAuNiwxLjYtMC42LDIuMiwwbDEuMywxLjNjMC42LDAuNiwwLjYsMS42LDAsMi4ybC0yOC4yLDI4LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0x'+
			'LjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjYtMC42LDIuMiwwbDgsOEwtMTY3LjEsMzYzLjJ6IE0tMTUyLjcsMzkzLjdjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDkuNiw5LjR2MTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjQtMy0xOC42LTQuOC0yOS4yLTUuMkwtMTUyLjcsMzkzLjd6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjVjMC40LDEuOS0xLjQsMy44LTMuOSw0LjNjLTIuNSwwLjUtNC45LTAuNi01Lj'+
			'MtMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjMsMCw0LjYsMCw2LjksMC4xTC0xNzIuOCw0MTAuNXogTS0xNjYuMiw0MDQuMWMtMi45LTAuMS01LjktMC4yLTguOC0wLjJjLTYsMC0xMS44LDAuMi0xNy40LDAuNmwxNS44LTE1LjRjMS0xLDIuNi0xLDMuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTEuMSwxMC44TC0xNjYuMiw0MDQuMXog'+
			'TS0xMzMuOCw0MjIuNWMwLDAuOS0wLjQsMS43LTEuMiwyLjFjLTAuNywwLjUtMS42LDAuNS0yLjQsMC4xYy05LjYtNC42LTIzLjMtNy4zLTM3LjYtNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjNy44LDMuOCwxOC4yLDYuMiwyOS40LDdsLTQuNiw0LjZjLTguNi0wLjktMTYuNy0yLjgtMjMuNC01LjV2NDMuMmM5Lj'+
			'ktNCwyMi45LTYuMiwzNi4yLTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czI2LjMsMi4yLDM2LjIsNi4ydi00My4yYy05LjksNC0yMi45LDYuMi0zNi4yLDYuMmMtMC4zLDAtMC41LDAtMC44LDBsNS4xLTUuMWMxMi43LTAuNSwyNC43LTMsMzMuMy03LjJjMC44LTAuNCwxLjctMC4zLDIuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsNDIyLjVMLTEzMy44LDQyMi41eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3Ni42LDM4OS4xbC0xNS44LDE1LjRjNS42LTAuNCwxMS40LTAu'+
			'NiwxNy40LTAuNmMzLDAsNS45LDAuMSw4LjgsMC4ybDQuMi00LjFsLTExLjEtMTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3NCwzODguMS0xNzUuNiwzODguMS0xNzYuNiwzODkuMXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0yMDkuMiw0MDguNHY3LjRjOS43LTMuNCwyMS44LTUuMywzNC4yLTUuM2MwLjcsMCwxLjUsMCwyLjIsMGw0LjYtNC41Yy0yLjMtMC4xLTQuNi0wLjEtNi45LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4Ny42LDQwNS45LTE5OS43LDQwNi44LTIwOS4yLDQwOC40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0MC44LD'+
			'QxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLDM4OC4zYzIuNS0wLjUsNC4zLTIuNCwzLjktNC4zYy0wLjQtMS45LTIuNy0zLTUuMy0yLjVjLTIuNSwwLjUtNC4zLDIuNC0zLjksNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTU1LjksMzg3LjctMTUzLjUsMzg4LjgtMTUxLDM4OC4zeiIvPgogICA8cGF0aCBmaWxsPSIjRkZG'+
			'RkZGIiBkPSJNLTIwMi42LDM4Mi43Yy0wLjYtMC42LTEuNi0wLjYtMi4yLDBsLTEuMywxLjNjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmw4LjYsOC42YzAuNiwwLjYsMS45LDEuNiwyLjIsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC4xLDAuOSwwLjEsMS4zLDBjMC4zLTAuMSwxLjYtMS4xLDIuMi0xLjdsMjguMi0yOC4yYzAuNi0wLjYsMC42LTEuNiwwLTIuMmwtMS4zLTEuM2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0yNy41LDI3LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0yMDIuNiwzODIuN3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzUsMzY5LjVjLT'+
			'AuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywx'+
			'LjIsMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLDEuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_node_visited;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_node_visited.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style[domTransition]='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		this._ht_node_visited.onmouseover=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
		}
		this._ht_node_visited.onmouseout=function (e) {
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
		}
		this._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node1.appendChild(me._ht_node_visited);
		el=me._ht_node_image=document.createElement('div');
		els=this._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzQxYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYuMS0xNDQsMzQxLTE3NSwzNDF6IE0tMTM3LjksNDIwYzAsMC44LTAuNCwxLjUtMS4xLDEuOWMtMC43LDAuNC0xLjUsMC41LTIuMiwwLjFjLTguNy00LjItMjEtNi42LTMzLjgtNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMTIuOCwwLTI1LjIsMi40LTMzLjgsNi42Yy0wLjMs'+
			'MC4yLTAuNiwwLjItMSwwLjJjLTAuNCwwLTAuOC0wLjEtMS4yLTAuM2MtMC43LTAuNC0xLjEtMS4xLTEuMS0xLjl2LTQ1LjhjMC0wLjgsMC40LTEuNSwxLjEtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjctMC40LDEuNS0wLjUsMi4yLTAuMWM4LjcsNC4yLDIxLDYuNiwzMy44LDYuNmMxMi44LDAsMjUuMi0yLjQsMzMuOC02LjZjMC43LTAuMywxLjUtMC4zLDIuMiwwLjFjMC43LDAuNCwxLjEsMS4xLDEuMSwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzcuOSwzNzQuMi0xMzcuOSw0MjAtMTM3LjksNDIweiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NT'+
			'U1ZmYiIGQ9Ik0tMjA3LjYsMzc3Ljd2MzguOWM4LjktMy42LDIwLjYtNS42LDMyLjYtNS42YzEyLDAsMjMuNiwyLDMyLjYsNS42di0zOC45Yy04LjksMy42LTIwLjYsNS42LTMyLjYsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg3LDM4My4zLTE5OC42LDM4MS4yLTIwNy42LDM3Ny43eiBNLTE3NSw0MDkuMWMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsLTQuMiw0LjFDLTE3My43LDQwOS4yLTE3NC4zLDQwOS4xLTE3NSw0MDkuMXogTS0xNDQuMiw0MTMu'+
			'OWMtNy42LTIuNy0xNi43LTQuMy0yNi4zLTQuN2wxNS42LTE1LjJjMC4zLTAuMywwLjYtMC40LDEtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjcsMC4xLDEsMC40bDguNyw4LjVDLTE0NC4yLDQwMi41LTE0NC4yLDQxMy45LTE0NC4yLDQxMy45eiBNLTE1NC42LDM4M2MyLjMtMC40LDQuNCwwLjYsNC43LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDEuNy0xLjMsMy40LTMuNSwzLjljLTIuMywwLjQtNC40LTAuNi00LjctMi4zQy0xNTguNCwzODUuMi0xNTYuOSwzODMuNS0xNTQuNiwzODN6IE0tMTczLjIsMzg5LjlsMTAsOS43bC0zLjgsMy43JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2MtMi42LTAuMS01LjMtMC4xLTgtMC4xYy01LjQsMC0xMC43LDAuMi0xNS43LDAuNWwxNC4yLTEzLjlDLTE3NS42LDM4OS0xNzQuMSwzODktMTczLjIsMzg5Ljl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5MC43LDQwMy44YzUtMC4zLDEwLjMtMC41LDE1LjctMC41YzIuNywwLDUuMywwLDgsMC4xbDMuOC0zLjdsLTEwLTkuN2MtMC45LTAuOS0yLjQtMC45LTMuMywwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMTkwLjcsNDAzLjh6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9'+
			'Ik0tMTc1LDQwNWMtMTEuMywwLTIyLjMsMC44LTMwLjgsMi4zdjYuN2M4LjgtMy4xLDE5LjYtNC44LDMwLjgtNC44YzAuNywwLDEuMywwLDIsMGw0LjItNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTcwLjksNDA1LTE3Mi45LDQwNS0xNzUsNDA1eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My45LDM5My42Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xNS42LDE1LjJjOS41LDAuNCwxOC43LDIsMjYuMyw0Ljd2LTExLjRsLTguNy04LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTMuMiwzOTMuOC0xNTMuNSwzOTMuNi0xNTMuOSwzOTMuNnoiLz4KICAgPHBhdGggZm'+
			'lsbD0iI0ZGRkZGRiIgZD0iTS0xMzksMzcyLjNjLTAuNy0wLjQtMS41LTAuNS0yLjItMC4xYy04LjcsNC4yLTIxLDYuNi0zMy44LDYuNmMtMTIuOSwwLTI1LjItMi40LTMzLjgtNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LTAuMy0xLjUtMC4zLTIuMiwwLjFjLTAuNywwLjQtMS4xLDEuMS0xLjEsMS45VjQyMGMwLDAuOCwwLjQsMS41LDEuMSwxLjljMC40LDAuMiwwLjgsMC4zLDEuMiwwLjNjMC4zLDAsMC43LTAuMSwxLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjOC43LTQuMiwyMS02LjYsMzMuOC02LjZjMTIuOCwwLDI1LjIsMi40LDMzLjgsNi42YzAuNywwLjMsMS41LDAu'+
			'MywyLjItMC4xYzAuNy0wLjQsMS4xLTEuMSwxLjEtMS45di00NS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM3LjksMzczLjQtMTM4LjMsMzcyLjctMTM5LDM3Mi4zeiBNLTE0Mi40LDQxNi41Yy04LjktMy42LTIwLjYtNS42LTMyLjYtNS42cy0yMy42LDItMzIuNiw1LjZ2LTM4LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzguOSwzLjYsMjAuNiw1LjYsMzIuNiw1LjZjMTIsMCwyMy42LTIsMzIuNi01LjZWNDE2LjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUzLjQsMzg5LjJjMi4zLTAuNCwzLjktMi4yLDMuNS0zLjljLTAuMy0xLjctMi40LTIuNy00LjctMi4zYy'+
			'0yLjMsMC40LTMuOSwyLjItMy41LDMuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE1Ny44LDM4OC42LTE1NS43LDM4OS42LTE1My40LDM4OS4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_node_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_node_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTMzLjgsNDIyLjVjMCwwLjktMC40LDEuNy0xLjIsMi4xYy0wLjcsMC41LTEuNiwwLjUtMi40LDAuMWMtOS42LTQuNi0yMy4zLTcuMy0zNy42LTcuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTI4LDIuNy0zNy42LDcu'+
			'M2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjUsMi40LTAuMWM5LjYsNC42LDIzLjMsNy4zLDM3LjYsNy4zYzE0LjMsMCwyOC0yLjcsMzcuNi03LjNjMC44LTAuNCwxLjctMC4zLDIuNCwwLjFjMC43LDAuNSwxLjIsMS4zLDEuMiwyLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzMuOCwzNzEuNy0xMzMuOCw0MjIuNS0xMzMuOCw0MjIuNXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PS'+
			'IxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTIxMS4yLDM3NS41djQzLjJjOS45LTQsMjIuOS02LjIsMzYuMi02LjJzMjYuMywyLjIsMzYuMiw2LjJ2LTQzLjJjLTkuOSw0LTIyLjksNi4yLTM2LjIsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg4LjMsMzgxLjctMjAxLjMsMzc5LjUtMjExLjIsMzc1LjV6IE0tMTc1LDQxMC41Yy0xMi40LDAtMjQuNCwxLjktMzQuMiw1LjN2LTcuNGM5LjQtMS42LDIxLjYtMi41LDM0LjItMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjMsMCw0LjYsMCw2LjksMC4xbC00LjYsNC41Qy0xNzMuNSw0MTAuNS0xNzQuMyw0MTAuNS0xNzUsNDEwLjV6IE0t'+
			'MTQwLjgsNDE1LjhjLTguNC0zLTE4LjYtNC44LTI5LjItNS4ybDE3LjMtMTYuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC41bDkuNiw5LjRDLTE0MC44LDQwMy4xLTE0MC44LDQxNS44LTE0MC44LDQxNS44eiBNLTE1Mi4zLDM4MS41YzIuNS0wLjUsNC45LDAuNiw1LjMsMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMS45LTEuNCwzLjgtMy45LDQuM2MtMi41LDAuNS00LjktMC42LTUuMy0yLjVDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzMsMzg5LjFsMTEuMSwxMC44bC00LjIsNC4xJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi45LTAuMS01LjktMC4yLTguOC0wLjJjLTYsMC0xMS44LDAuMi0xNy40LDAuNmwxNS44LTE1LjRDLTE3NS42LDM4OC4xLTE3NCwzODguMS0xNzMsMzg5LjF6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi40LDQwNC41YzUuNi0wLjQsMTEuNC0wLjYsMTcuNC0wLjZjMywwLDUuOSwwLjEsOC44LDAuMmw0LjItNC4xbC0xMS4xLTEwLjhjLTEtMS0yLjYtMS0zLjYsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5Mi40LDQwNC41eiIvPgogICA8cGF0aCBmaWxsPSIj'+
			'RkZGRkZGIiBkPSJNLTE3NSw0MDUuOWMtMTIuNiwwLTI0LjcsMC45LTM0LjIsMi41djcuNGM5LjctMy40LDIxLjgtNS4zLDM0LjItNS4zYzAuNywwLDEuNSwwLDIuMiwwbDQuNi00LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzAuNCw0MDUuOS0xNzIuNyw0MDUuOS0xNzUsNDA1Ljl6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjYsMzkzLjJjLTAuNCwwLTAuOCwwLjItMS4xLDAuNWwtMTcuMywxNi45YzEwLjYsMC40LDIwLjgsMi4zLDI5LjIsNS4ydi0xMi43bC05LjYtOS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTUwLjcsMzkzLjQtMTUxLjEsMzkzLjItMT'+
			'UxLjYsMzkzLjJ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM1LDM2OS41Yy0wLjctMC41LTEuNi0wLjUtMi40LTAuMWMtOS42LDQuNi0yMy4zLDcuMy0zNy42LDcuM3MtMjgtMi43LTM3LjYtNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xYzAuNCwwLjMsMC45LDAuNCwxLjMsMC40YzAuNCwwLDAuNy0wLjEsMS4xLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3'+
			'LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xczEuMi0xLjMsMS4yLTIuMXYtNTAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6IE0tMTM4LjgsNDE4LjdjLTkuOS00LTIyLjktNi4yLTM2LjItNi4ycy0yNi4zLDIuMi0zNi4yLDYuMnYtNDMuMmM5LjksNCwyMi45LDYuMiwzNi4yLDYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTMuMywwLDI2LjMtMi4yLDM2LjItNi4yVjQxOC43eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1MSwzODguM2MyLjUtMC41LDQuMy0yLjQsMy45LTQuM2MtMC40LTEuOS0yLjctMy'+
			'01LjMtMi41Yy0yLjUsMC41LTQuMywyLjQtMy45LDQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE1NS45LDM4Ny43LTE1My41LDM4OC44LTE1MSwzODguM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_node_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_node_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._ht_node_image.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_image.style[domTransition]='';
				if (me._ht_node_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_image.style.visibility="hidden";
					me._ht_node_image.ggVisible=false;
				}
				else {
					me._ht_node_image.style.visibility=(Number(me._ht_node_image.style.opacity)>0||!me._ht_node_image.style.opacity)?'inherit':'hidden';
					me._ht_node_image.ggVisible=true;
				}
			}
		}
		this._ht_node_image.onmouseover=function (e) {
			me._ht_node_image__img.style.visibility='hidden';
			me._ht_node_image__imgo.style.visibility='inherit';
		}
		this._ht_node_image.onmouseout=function (e) {
			me._ht_node_image__img.style.visibility='inherit';
			me._ht_node_image__imgo.style.visibility='hidden';
		}
		this._ht_node_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node1.appendChild(me._ht_node_image);
		el=me._hotspot_preview0=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : -75px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hotspot_preview0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node1'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview0.style[domTransition]='';
				if (me._hotspot_preview0.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview0.style.visibility=(Number(me._hotspot_preview0.style.opacity)>0||!me._hotspot_preview0.style.opacity)?'inherit':'hidden';
					me._hotspot_preview0.ggVisible=true;
				}
				else {
					me._hotspot_preview0.style.visibility="hidden";
					me._hotspot_preview0.ggVisible=false;
				}
			}
		}
		this._hotspot_preview0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(66,66,66,0.666667);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_preview_picture_frame_.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=this._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_preview_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_preview_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 140px;';
		hs+='height: 20px;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_tooltip.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=this._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojNTU1NWZmO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 123px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true) || 
				(me._ht_checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		this._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview0.appendChild(me._ht_checkmark_tick);
		me._ht_node1.appendChild(me._hotspot_preview0);
		this.__div = this._ht_node1;
	};
	function SkinHotspotClass_ht_url(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_url.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		this._ht_url.onclick=function (e) {
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_url.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_url.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_url.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		this._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=this._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTMuNSwzOTQuN2gxNi4zdi0xNWgtMTMuN0MtMTkyLjMsMzg0LjItMTkzLjMsMzg5LjMtMTkzLjUsMzk0Ljd6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjgu'+
			'OC0xODkuMSwzNzUuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5NS42LDM3OS43aC04LjVjLTIuNiw0LjUtNC4zLDkuNi00LjYsMTVoMTAuOEMtMTk3LjgsMzg5LjMtMTk3LDM4NC4zLTE5NS42LDM3OS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC'+
			'05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLDEyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xODguOCwzNjZjLTQuNywyLjEtOC45LDUuMy0xMi4yLDkuMmg2LjlDLTE5Mi42LDM3MS43LTE5MC45LDM2OC42LTE4OC44LDM2NnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5OCwzOTku'+
			'MmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTS0xNzQuOSw0MzUuNGMwLDAtMC4xLDAtMC4xLDBjLTAuMSwwLTAuMiwwLTAuNCwwYy0yMS0wLjItMzgtMTcuNC0zOC0zOC40YzAtMjEuMiwxNy4yLTM4LjQsMzguNC0zOC'+
			'40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyMS4yLDAsMzguNCwxNy4yLDM4LjQsMzguNEMtMTM2LjUsNDE4LjItMTUzLjcsNDM1LjQtMTc0LjksNDM1LjR6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40'+
			'LDQxNC4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTcyLjcsMzYzLjN2MTEuOWgxMS43Qy0xNjMuOSwzNjguOS0xNjgsMzY0LjUtMTcyLjcsMzYzLjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4xLDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOS'+
			'w0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE1OS4yLDM3OS43aC0xMy41djE1aDE2LjFDLTE1Ni43LDM4OS4zLTE1Ny43LDM4NC4yLTE1OS4yLDM3OS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjUsMzk3YzAtMjEuMi0x'+
			'Ny4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDAsMC4yLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTMuNyw0MzUuNC0xMzYuNSw0MTguMi0xMzYuNSwzOTd6IE0tMjA4LjgsMzk5LjJoMTAuOGMwLjIsNS40LDEsMTAuNSwyLjMsMTVoLTguNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMDYuOCw0MDkuOC0yMDguNCw0MDQuNy0yMDguOCwzOTkuMnogTS0xNDEuMSwzOTQuN2gtMTFjLTAuMi01LjQtMS0xMC41LTIuMy0xNWg4LjZDLTE0My4xLDM4NC4yLTE0MS40LDM4OS4zLTE0MS'+
			'4xLDM5NC43eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTU2LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Mi43LDM3NS4yeiBNLTE3Ny4yLDM2My4zdjExLjloLTExLjlDLTE4Ni4xLDM2OC44LTE4MS45LDM2NC40LTE3Ny4yLDM2My4zeiBNLTE3Ny4yLDM3OS43djE1aC0xNi4zYzAuMi01LjQsMS4xLTEwLjUsMi42LTE1JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Ny4yLDM3OS43TC0xNzcu'+
			'MiwzNzkuN3ogTS0xOTgsMzk0LjdoLTEwLjhjMC40LTUuNSwyLTEwLjYsNC42LTE1aDguNUMtMTk3LDM4NC4zLTE5Ny44LDM4OS4zLTE5OCwzOTQuN3ogTS0xOTMuNSwzOTkuMmgxNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTt2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTYzLjksNDI1LjEtMTY4LDQyOS41LTE3Mi43LDQzMC42eiBNLTE3Mi43LDQxNC4zdi0xNWgxNi4xYy0wLjIsNS'+
			'40LTEuMSwxMC42LTIuNiwxNUgtMTcyLjd6IE0tMTUyLDM5OS4yaDExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCw1LjUtMiwxMC42LTQuNywxNWgtOC42Qy0xNTMsNDA5LjctMTUyLjIsNDA0LjctMTUyLDM5OS4yeiBNLTE0OC45LDM3NS4yaC03Yy0xLjUtMy42LTMuMy02LjgtNS40LTkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0yMDAuOSw0MTguOGg2Ljlj'+
			'MS40LDMuNSwzLjIsNi42LDUuMyw5LjJDLTE5My41LDQyNS44LTE5Ny42LDQyMi43LTIwMC45LDQxOC44eiBNLTE2MS4zLDQyOC4xYzIuMS0yLjYsMy45LTUuNyw1LjQtOS4zaDcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUyLjMsNDIyLjctMTU2LjUsNDI1LjktMTYxLjMsNDI4LjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5NS41LDM5NC41aDE4LjF2LTE2LjdoLTE1LjJDLTE5NC4zLDM4Mi44LTE5NS4zLDM4OC41LTE5NS41LDM5NC41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTkwLjYsMzcyLjhoMTMuMnYtMTMuMkMtMTgyLjYsMzYwLjctMTg3LjMs'+
			'MzY1LjctMTkwLjYsMzcyLjh6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTcuOSwzNzcuOGgtOS40Yy0yLjksNC45LTQuOCwxMC42LTUuMiwxNi43aDEyQy0yMDAuMywzODguNS0xOTkuNCwzODIuOC0xOTcuOSwzNzcuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE0NiwzNzIuOGMtMy43LTQuNC04LjQtOC'+
			'0xMy44LTEwLjRjMi4zLDIuOCw0LjQsNi4zLDYsMTAuNEgtMTQ2eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5MC4zLDM2Mi42Yy01LjIsMi40LTkuOSw1LjktMTMuNSwxMC4yaDcuNkMtMTk0LjYsMzY4LjktMTkyLjYsMzY1LjQtMTkwLjMsMzYyLjZ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0i'+
			'TS0yMDAuNSwzOTkuNWgtMTJjMC40LDYuMSwyLjIsMTEuOCw1LjIsMTYuN2g5LjRDLTE5OS40LDQxMS4xLTIwMC4zLDQwNS41LTIwMC41LDM5OS41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTc0LjksNDM5LjdjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjMsMC0wLjQsMGMtMjMuMy0wLjMtNDIuMi0xOS4zLTQyLjItND'+
			'IuN2MwLTIzLjYsMTkuMi00Mi43LDQyLjctNDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMjMuNiwwLDQyLjcsMTkuMiw0Mi43LDQyLjdDLTEzMi4yLDQyMC41LTE1MS4zLDQzOS43LTE3NC45LDQzOS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTUyLjEsNDE2LjJoOS42YzMtNSw0LjgtMTAuNiw1LjItMTYuN2gt'+
			'MTIuMkMtMTQ5LjcsNDA1LjUtMTUwLjYsNDExLjEtMTUyLjEsNDE2LjJ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzIuNCwzNTkuNnYxMy4yaDEzQy0xNjIuNiwzNjUuNy0xNjcuMywzNjAuOC0xNzIuNCwzNTkuNnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUtMTQ5LjUsMzk0LjV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNz'+
			'IuNCw0MjEuMnYxMy4yYzUuMS0xLjIsOS44LTYuMSwxMy0xMy4yQy0xNTkuNCw0MjEuMi0xNzIuNCw0MjEuMi0xNzIuNCw0MjEuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE1Ny40LDM3Ny44aC0xNXYxNi43aDE3LjlDLTE1NC43LDM4OC41LTE1NS44LDM4Mi44LTE1Ny40LDM3Ny44eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgog'+
			'IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLDAuMywwLDAuNCwwYzAsMCwwLjEsMCwwLjEsMEMtMTUxLjMsNDM5LjctMTMyLjIsNDIwLjUtMTMyLjIsMzk3eiBNLTIxMi41LDM5OS41aDEyYzAuMiw2LDEuMSwxMS43LDIuNiwxNi43aC05LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMjEwLjMsNDExLjItMjEyLjEsNDA1LjYtMjEyLjUsMzk5LjV6IE0tMTM3LjMsMzk0LjVoLTEyLjJjLTAuMi'+
			'02LTEuMS0xMS42LTIuNi0xNi43aDkuNkMtMTM5LjUsMzgyLjgtMTM3LjcsMzg4LjQtMTM3LjMsMzk0LjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Mi40LDM3Mi44eiBNLTE3Ny40LDM1OS42djEzLjJoLTEzLjJDLTE4Ny4zLDM2NS43LTE4Mi42LDM2MC43LTE3Ny40LDM1OS42eiBNLTE3Ny40LDM3Ny44djE2LjdoLTE4LjFjMC4yLTYsMS4z'+
			'LTExLjcsMi45LTE2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTc3LjQsMzc3LjhMLTE3Ny40LDM3Ny44eiBNLTIwMC41LDM5NC41aC0xMmMwLjQtNi4xLDIuMi0xMS43LDUuMi0xNi43aDkuNEMtMTk5LjQsMzgyLjgtMjAwLjMsMzg4LjUtMjAwLjUsMzk0LjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTcyLjQsNDM0LjR2LTEzLjJoMTNDLTE2Mi'+
			'43LDQyOC4yLTE2Ny4zLDQzMy4xLTE3Mi40LDQzNC40eiBNLTE3Mi40LDQxNi4ydi0xNi43aDE3LjljLTAuMiw2LTEuMywxMS43LTIuOSwxNi43SC0xNzIuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE0OS41LDM5OS41aDEyLjJjLTAuNCw2LjEtMi4yLDExLjgtNS4yLDE2LjdoLTkuNkMtMTUwLjYsNDExLjEtMTQ5LjcsNDA1LjUtMTQ5LjUsMzk5LjV6IE0tMTQ2LDM3Mi44aC03LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03'+
			'LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMjAwLjIsMzY4LjQtMTk1LjYsMzY0LjktMTkwLjMsMzYyLjZ6IE0tMjAzLjgsNDIxLjJoNy42YzEuNiwzLjksMy42LDcuNCw1LjksMTAuMkMtMTk1LjYsNDI5LTIwMC4yLDQyNS41LTIwMy44LDQyMS4yeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTU5LjgsNDMxLjVjMi4zLTIuOCw0LjMtNi4zLDYtMTAuM2g3LjhDLTE0OS43LDQyNS42LTE1NC40LDQyOS4yLTE1OS44LDQzMS41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_url_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == false) && 
				(me.player.getVariableValue('opt_url') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
				else {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
			}
		}
		this._ht_url_image.onclick=function (e) {
			me.skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
			me.skin._web_page.ggTextDiv.innerHTML=me.skin._web_page.ggText;
			if (me.skin._web_page.ggUpdateText) {
				me.skin._web_page.ggUpdateText=function() {
					var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me.skin._web_page.ggUpdatePosition) {
				me.skin._web_page.ggUpdatePosition();
			}
			me.skin._web_page.ggTextDiv.scrollTop = 0;
			me.player.setVariableValue('vis_website', true);
		}
		this._ht_url_image.onmouseover=function (e) {
			me._ht_url_image__img.style.visibility='hidden';
			me._ht_url_image__imgo.style.visibility='inherit';
		}
		this._ht_url_image.onmouseout=function (e) {
			me._ht_url_image__img.style.visibility='inherit';
			me._ht_url_image__imgo.style.visibility='hidden';
		}
		this._ht_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._ht_url_image_newpage=document.createElement('div');
		els=this._ht_url_image_newpage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTAuOCw0MTQuM2gxMy43di0xNWgtMTYuM0MtMTkzLjMsNDA0LjctMTkyLjMsNDA5LjgtMTkwLjgsNDE0LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTMuNSwzOTQuN2gxNi4zdi0xNWgtMTMuN0MtMTkyLjMsMzg0LjItMTkzLjMsMzg5LjMtMTkzLjUsMzk0Ljd6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjgu'+
			'OC0xODkuMSwzNzUuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3Ny4yLDQzMC43di0xMS45aC0xMS45Qy0xODYuMSw0MjUuMi0xODEuOSw0MjkuNi0xNzcuMiw0MzAuN3oiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5NS42LDM3OS43aC04LjVjLTIuNiw0LjUtNC4zLDkuNi00LjYsMTVoMTAuOEMtMTk3LjgsMzg5LjMtMTk3LDM4NC4zLTE5NS42LDM3OS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC'+
			'05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMjAwLjksNDE4LjhjMy4zLDMuOSw3LjQsNy4xLDEyLjEsOS4yYy0yLjEtMi41LTMuOC01LjYtNS4zLTkuMkgtMjAwLjl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xODguOCwzNjZjLTQuNywyLjEtOC45LDUuMy0xMi4yLDkuMmg2LjlDLTE5Mi42LDM3MS43LTE5MC45LDM2OC42LTE4OC44LDM2NnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5OCwzOTku'+
			'MmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTS0xNzQuOSw0MzUuNGMwLDAtMC4xLDAtMC4xLDBjLTAuMSwwLTAuMiwwLTAuNCwwYy0yMS0wLjItMzgtMTcuNC0zOC0zOC40YzAtMjEuMiwxNy4yLTM4LjQsMzguNC0zOC'+
			'40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyMS4yLDAsMzguNCwxNy4yLDM4LjQsMzguNEMtMTM2LjUsNDE4LjItMTUzLjcsNDM1LjQtMTc0LjksNDM1LjR6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNjEuMyw0MjguMWM0LjgtMi4xLDktNS4zLDEyLjQtOS4zaC03Qy0xNTcuNCw0MjIuNC0xNTkuMiw0MjUuNS0xNjEuMyw0MjguMXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40'+
			'LDQxNC4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTcyLjcsMzYzLjN2MTEuOWgxMS43Qy0xNjMuOSwzNjguOS0xNjgsMzY0LjUtMTcyLjcsMzYzLjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNTIsMzk0LjdoMTFjLTAuNC01LjUtMi0xMC42LTQuNy0xNWgtOC42Qy0xNTMsMzg0LjMtMTUyLjIsMzg5LjMtMTUyLDM5NC43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4xLDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOS'+
			'w0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE1OS4yLDM3OS43aC0xMy41djE1aDE2LjFDLTE1Ni43LDM4OS4zLTE1Ny43LDM4NC4yLTE1OS4yLDM3OS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTU2LjUsMzk5LjJoLTE2LjF2MTVoMTMuNUMtMTU3LjcsNDA5LjgtMTU2LjcsNDA0LjctMTU2LjUsMzk5LjJ6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTM2LjUsMzk3YzAtMjEuMi0x'+
			'Ny4yLTM4LjQtMzguNC0zOC40Yy0yMS4yLDAtMzguNCwxNy4yLTM4LjQsMzguNGMwLDIxLjEsMTcsMzguMiwzOCwzOC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDAsMC4yLDAsMC40LDBjMCwwLDAuMSwwLDAuMSwwQy0xNTMuNyw0MzUuNC0xMzYuNSw0MTguMi0xMzYuNSwzOTd6IE0tMjA4LjgsMzk5LjJoMTAuOGMwLjIsNS40LDEsMTAuNSwyLjMsMTVoLTguNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMDYuOCw0MDkuOC0yMDguNCw0MDQuNy0yMDguOCwzOTkuMnogTS0xNDEuMSwzOTQuN2gtMTFjLTAuMi01LjQtMS0xMC41LTIuMy0xNWg4LjZDLTE0My4xLDM4NC4yLTE0MS40LDM4OS4zLTE0MS'+
			'4xLDM5NC43eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTU2LjUsMzk0LjdoLTE2LjF2LTE1aDEzLjVDLTE1Ny43LDM4NC4yLTE1Ni43LDM4OS4zLTE1Ni41LDM5NC43eiBNLTE3Mi43LDM3NS4ydi0xMS45YzQuNiwxLjEsOC44LDUuNSwxMS43LDExLjlMLTE3Mi43LDM3NS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Mi43LDM3NS4yeiBNLTE3Ny4yLDM2My4zdjExLjloLTExLjlDLTE4Ni4xLDM2OC44LTE4MS45LDM2NC40LTE3Ny4yLDM2My4zeiBNLTE3Ny4yLDM3OS43djE1aC0xNi4zYzAuMi01LjQsMS4xLTEwLjUsMi42LTE1JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Ny4yLDM3OS43TC0xNzcu'+
			'MiwzNzkuN3ogTS0xOTgsMzk0LjdoLTEwLjhjMC40LTUuNSwyLTEwLjYsNC42LTE1aDguNUMtMTk3LDM4NC4zLTE5Ny44LDM4OS4zLTE5OCwzOTQuN3ogTS0xOTMuNSwzOTkuMmgxNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTt2MTVoLTEzLjdDLTE5Mi4zLDQwOS44LTE5My4zLDQwNC43LTE5My41LDM5OS4yeiBNLTE3Ny4yLDQxOC44djExLjljLTQuNy0xLjEtOC45LTUuNS0xMS45LTExLjlILTE3Ny4yeiBNLTE3Mi43LDQzMC42di0xMS45aDExLjcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTYzLjksNDI1LjEtMTY4LDQyOS41LTE3Mi43LDQzMC42eiBNLTE3Mi43LDQxNC4zdi0xNWgxNi4xYy0wLjIsNS'+
			'40LTEuMSwxMC42LTIuNiwxNUgtMTcyLjd6IE0tMTUyLDM5OS4yaDExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCw1LjUtMiwxMC42LTQuNywxNWgtOC42Qy0xNTMsNDA5LjctMTUyLjIsNDA0LjctMTUyLDM5OS4yeiBNLTE0OC45LDM3NS4yaC03Yy0xLjUtMy42LTMuMy02LjgtNS40LTkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTYuNSwzNjgtMTUyLjIsMzcxLjItMTQ4LjksMzc1LjJ6IE0tMTg4LjgsMzY2Yy0yLjEsMi41LTMuOCw1LjctNS4zLDkuMmgtNi45Qy0xOTcuNywzNzEuMy0xOTMuNSwzNjguMS0xODguOCwzNjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0yMDAuOSw0MTguOGg2Ljlj'+
			'MS40LDMuNSwzLjIsNi42LDUuMyw5LjJDLTE5My41LDQyNS44LTE5Ny42LDQyMi43LTIwMC45LDQxOC44eiBNLTE2MS4zLDQyOC4xYzIuMS0yLjYsMy45LTUuNyw1LjQtOS4zaDcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUyLjMsNDIyLjctMTU2LjUsNDI1LjktMTYxLjMsNDI4LjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_image_newpage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_url_image_newpage;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_url_image_newpage__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTIuNiw0MTYuMmgxNS4ydi0xNi43aC0xOC4xQy0xOTUuMyw0MDUuNS0xOTQuMiw0MTEuMi0xOTIuNiw0MTYuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5NS41LDM5NC41aDE4LjF2LTE2LjdoLTE1LjJDLTE5NC4zLDM4Mi44LTE5NS4zLDM4OC41LTE5NS41LDM5NC41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTkwLjYsMzcyLjhoMTMuMnYtMTMuMkMtMTgyLjYsMzYwLjctMTg3LjMs'+
			'MzY1LjctMTkwLjYsMzcyLjh6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzcuNCw0MzQuNHYtMTMuMmgtMTMuMkMtMTg3LjMsNDI4LjMtMTgyLjYsNDMzLjItMTc3LjQsNDM0LjR6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTcuOSwzNzcuOGgtOS40Yy0yLjksNC45LTQuOCwxMC42LTUuMiwxNi43aDEyQy0yMDAuMywzODguNS0xOTkuNCwzODIuOC0xOTcuOSwzNzcuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE0NiwzNzIuOGMtMy43LTQuNC04LjQtOC'+
			'0xMy44LTEwLjRjMi4zLDIuOCw0LjQsNi4zLDYsMTAuNEgtMTQ2eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMjAzLjgsNDIxLjJjMy42LDQuMyw4LjIsNy44LDEzLjUsMTAuMmMtMi4zLTIuOC00LjMtNi4zLTUuOC0xMC4ySC0yMDMuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE5MC4zLDM2Mi42Yy01LjIsMi40LTkuOSw1LjktMTMuNSwxMC4yaDcuNkMtMTk0LjYsMzY4LjktMTkyLjYsMzY1LjQtMTkwLjMsMzYyLjZ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0i'+
			'TS0yMDAuNSwzOTkuNWgtMTJjMC40LDYuMSwyLjIsMTEuOCw1LjIsMTYuN2g5LjRDLTE5OS40LDQxMS4xLTIwMC4zLDQwNS41LTIwMC41LDM5OS41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjRTLTE0MC42LDMzNC42LTE3NSwzMzQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTc0LjksNDM5LjdjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjMsMC0wLjQsMGMtMjMuMy0wLjMtNDIuMi0xOS4zLTQyLjItND'+
			'IuN2MwLTIzLjYsMTkuMi00Mi43LDQyLjctNDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMjMuNiwwLDQyLjcsMTkuMiw0Mi43LDQyLjdDLTEzMi4yLDQyMC41LTE1MS4zLDQzOS43LTE3NC45LDQzOS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTU5LjgsNDMxLjVjNS4zLTIuNCwxMC01LjksMTMuNy0xMC4zaC03LjhDLTE1NS40LDQyNS4yLTE1Ny41LDQyOC43LTE1OS44LDQzMS41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTUyLjEsNDE2LjJoOS42YzMtNSw0LjgtMTAuNiw1LjItMTYuN2gt'+
			'MTIuMkMtMTQ5LjcsNDA1LjUtMTUwLjYsNDExLjEtMTUyLjEsNDE2LjJ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzIuNCwzNTkuNnYxMy4yaDEzQy0xNjIuNiwzNjUuNy0xNjcuMywzNjAuOC0xNzIuNCwzNTkuNnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE0OS41LDM5NC41aDEyLjJjLTAuNC02LjEtMi4yLTExLjctNS4yLTE2LjdoLTkuNkMtMTUwLjYsMzgyLjgtMTQ5LjcsMzg4LjUtMTQ5LjUsMzk0LjV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNz'+
			'IuNCw0MjEuMnYxMy4yYzUuMS0xLjIsOS44LTYuMSwxMy0xMy4yQy0xNTkuNCw0MjEuMi0xNzIuNCw0MjEuMi0xNzIuNCw0MjEuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE1Ny40LDM3Ny44aC0xNXYxNi43aDE3LjlDLTE1NC43LDM4OC41LTE1NS44LDM4Mi44LTE1Ny40LDM3Ny44eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTU0LjUsMzk5LjVoLTE3Ljl2MTYuN2gxNUMtMTU1LjgsNDExLjItMTU0LjcsNDA1LjUtMTU0LjUsMzk5LjV6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgog'+
			'IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTMyLjIsMzk3YzAtMjMuNi0xOS4yLTQyLjctNDIuNy00Mi43Yy0yMy42LDAtNDIuNywxOS4yLTQyLjcsNDIuN2MwLDIzLjQsMTguOSw0Mi40LDQyLjIsNDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLDAuMywwLDAuNCwwYzAsMCwwLjEsMCwwLjEsMEMtMTUxLjMsNDM5LjctMTMyLjIsNDIwLjUtMTMyLjIsMzk3eiBNLTIxMi41LDM5OS41aDEyYzAuMiw2LDEuMSwxMS43LDIuNiwxNi43aC05LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMjEwLjMsNDExLjItMjEyLjEsNDA1LjYtMjEyLjUsMzk5LjV6IE0tMTM3LjMsMzk0LjVoLTEyLjJjLTAuMi'+
			'02LTEuMS0xMS42LTIuNi0xNi43aDkuNkMtMTM5LjUsMzgyLjgtMTM3LjcsMzg4LjQtMTM3LjMsMzk0LjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTQuNSwzOTQuNWgtMTcuOXYtMTYuN2gxNUMtMTU1LjgsMzgyLjgtMTU0LjcsMzg4LjUtMTU0LjUsMzk0LjV6IE0tMTcyLjQsMzcyLjh2LTEzLjJjNS4yLDEuMiw5LjgsNi4yLDEzLDEzLjJMLTE3Mi40LDM3Mi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtMLTE3Mi40LDM3Mi44eiBNLTE3Ny40LDM1OS42djEzLjJoLTEzLjJDLTE4Ny4zLDM2NS43LTE4Mi42LDM2MC43LTE3Ny40LDM1OS42eiBNLTE3Ny40LDM3Ny44djE2LjdoLTE4LjFjMC4yLTYsMS4z'+
			'LTExLjcsMi45LTE2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTc3LjQsMzc3LjhMLTE3Ny40LDM3Ny44eiBNLTIwMC41LDM5NC41aC0xMmMwLjQtNi4xLDIuMi0xMS43LDUuMi0xNi43aDkuNEMtMTk5LjQsMzgyLjgtMjAwLjMsMzg4LjUtMjAwLjUsMzk0LjV6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTUuNSwzOTkuNWgxOC4xdjE2LjdoLTE1LjJDLTE5NC4yLDQxMS4yLTE5NS4zLDQwNS41LTE5NS41LDM5OS41eiBNLTE3Ny40LDQyMS4ydjEzLjJjLTUuMi0xLjItOS45LTYuMS0xMy4yLTEzLjJILTE3Ny40eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTcyLjQsNDM0LjR2LTEzLjJoMTNDLTE2Mi'+
			'43LDQyOC4yLTE2Ny4zLDQzMy4xLTE3Mi40LDQzNC40eiBNLTE3Mi40LDQxNi4ydi0xNi43aDE3LjljLTAuMiw2LTEuMywxMS43LTIuOSwxNi43SC0xNzIuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE0OS41LDM5OS41aDEyLjJjLTAuNCw2LjEtMi4yLDExLjgtNS4yLDE2LjdoLTkuNkMtMTUwLjYsNDExLjEtMTQ5LjcsNDA1LjUtMTQ5LjUsMzk5LjV6IE0tMTQ2LDM3Mi44aC03LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS42LTQtMy42LTcuNS02LTEwLjRDLTE1NC40LDM2NC44LTE0OS43LDM2OC40LTE0NiwzNzIuOHogTS0xOTAuMywzNjIuNmMtMi4zLDIuOC00LjMsNi4zLTUuOSwxMC4yaC03'+
			'LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMjAwLjIsMzY4LjQtMTk1LjYsMzY0LjktMTkwLjMsMzYyLjZ6IE0tMjAzLjgsNDIxLjJoNy42YzEuNiwzLjksMy42LDcuNCw1LjksMTAuMkMtMTk1LjYsNDI5LTIwMC4yLDQyNS41LTIwMy44LDQyMS4yeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTU5LjgsNDMxLjVjMi4zLTIuOCw0LjMtNi4zLDYtMTAuM2g3LjhDLTE0OS43LDQyNS42LTE1NC40LDQyOS4yLTE1OS44LDQzMS41eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image_newpage__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_url_image_newpage;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_newpage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_newpage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_url_image_newpage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_newpage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) || 
				(me.player.getVariableValue('opt_url') == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_newpage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_newpage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_newpage.style[domTransition]='';
				if (me._ht_url_image_newpage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_newpage.style.visibility=(Number(me._ht_url_image_newpage.style.opacity)>0||!me._ht_url_image_newpage.style.opacity)?'inherit':'hidden';
					me._ht_url_image_newpage.ggVisible=true;
				}
				else {
					me._ht_url_image_newpage.style.visibility="hidden";
					me._ht_url_image_newpage.ggVisible=false;
				}
			}
		}
		this._ht_url_image_newpage.onclick=function (e) {
			me.player.openUrl(me.hotspot.url,me.hotspot.target);
		}
		this._ht_url_image_newpage.onmouseover=function (e) {
			me._ht_url_image_newpage__img.style.visibility='hidden';
			me._ht_url_image_newpage__imgo.style.visibility='inherit';
		}
		this._ht_url_image_newpage.onmouseout=function (e) {
			me._ht_url_image_newpage__img.style.visibility='inherit';
			me._ht_url_image_newpage__imgo.style.visibility='hidden';
		}
		this._ht_url_image_newpage.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_image_newpage);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_ht_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_url.style.left='-50px';
					me._tt_ht_url.style.top='-47px';
				}
				else {
					me._tt_ht_url.style.left='-50px';
					me._tt_ht_url.style.top='21px';
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_url'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		this._tt_ht_url.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url.appendChild(me._tt_ht_url);
		this.__div = this._ht_url;
	};
	function SkinHotspotClass_ht_info(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_info.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style[domTransition]='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		this._ht_info.onclick=function (e) {
			me.skin._info_title.ggText=me.hotspot.title;
			me.skin._info_title.ggTextDiv.innerHTML=me.skin._info_title.ggText;
			if (me.skin._info_title.ggUpdateText) {
				me.skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me.skin._info_title.ggUpdatePosition) {
				me.skin._info_title.ggUpdatePosition();
			}
			me.skin._info_title.ggTextDiv.scrollTop = 0;
			me.skin._info_text_body.ggText=me.hotspot.description;
			me.skin._info_text_body.ggTextDiv.innerHTML=me.skin._info_text_body.ggText;
			if (me.skin._info_text_body.ggUpdateText) {
				me.skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me.skin._info_text_body.ggUpdatePosition) {
				me.skin._info_text_body.ggUpdatePosition();
			}
			me.skin._info_text_body.ggTextDiv.scrollTop = 0;
			me.player.setVariableValue('vis_info_popup', true);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_info.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_info.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_info.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		this._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=this._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTc4LjEsMzYxLjFsNi4yLDBjMy41LDAsNi40LDIuOSw2LjQsNi40djIuOWMwLDMuNS0yLjksNi40LTYuNCw2LjRoLTYuMmMtMy41LDAtNi40LTIuOS02LjQtNi40bDAtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXog'+
			'TS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0xLjVsMTUuOSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDAsMS41LDAuNywxLjUsMS41bDAsMzcuN0MtMTY1LjUsNDI5LjctMTY2LjIsNDMwLjQtMTY3LDQzMC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2NS41LDM5MS4yYzAtMC44LTAuNy0xLjUtMS41LTEuNWwtMTUuOSwwYy0wLjgsMC0xLjUsMC43LTEuNSwxLjVsMCwzNy43YzAsMC44LDAuNywxLjUsMS41LDEuNWgxNS45JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MwLjgsMCwxLjUtMC43LDEuNS0xLjVMLTE2NS41LDM5MS4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3OC4xLDM3Ni44aDYuMmMzLjUsMCw2LjQtMi45LDYuNC02LjR2LTIuOWMwLTMuNS0yLjktNi40LTYuNC02LjRsLTYuMiwwYy0zLjUsMC02LjQsMi45LTYuNCw2LjRsMCwyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODQuNSwzNzQtMTgxLjYsMzc2LjgtMTc4LjEsMzc2Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_info_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LjUsMzU3LjFsNi45LDBjMy45LDAsNy4xLDMuMiw3LjEsNy4xdjMuM2MwLDMuOS0zLjIsNy4xLTcuMSw3LjFoLTYuOWMtMy45LDAtNy4xLTMuMi03LjEtNy4xbDAtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41'+
			'LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAuOC0xLjcsMS43LTEuN2wxNy43LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjksMCwxLjcsMC44LDEuNywxLjdsMCw0MS45Qy0xNjQuNCw0MzMuMy0xNjUuMiw0MzQuMS0xNjYuMSw0MzQuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjQuNCwzOTAuNWMwLTAuOS0wLjgtMS43LTEuNy0xLjdsLTE3LjcsMGMtMC45LDAtMS43LDAuOC0xLjcsMS43bDAsNDEuOWMwLDAuOSwwLjgsMS43LDEuNywxLjdoMTcuNyYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LDAsMS43LTAuOCwxLjctMS43TC0xNjQuNCwzOTAuNXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguNSwzNzQuNmg2LjljMy45LDAsNy4xLTMuMiw3LjEtNy4xdi0zLjNjMC0zLjktMy4yLTcuMS03LjEtNy4xbC02LjksMGMtMy45LDAtNy4xLDMuMi03LjEsNy4xbDAsMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg1LjUsMzcxLjQtMTgyLjQsMzc0LjYtMTc4LjUsMzc0LjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_info_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		this._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		this._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_information.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='-47px';
				}
				else {
					me._tt_information.style.left='-50px';
					me._tt_information.style.top='21px';
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_info'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		this._tt_information.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		this.__div = this._ht_info;
	};
	function SkinHotspotClass_ht_image(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_image.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		this._ht_image.onclick=function (e) {
			me.skin._popup_image.ggText=me.player.getBasePath()+""+me.hotspot.url;
			me.skin._popup_image.ggSubElement.style.width = '0px';
			me.skin._popup_image.ggSubElement.style.height = '0px';
			me.skin._popup_image.ggSubElement.src='';
			me.skin._popup_image.ggSubElement.src=me.skin._popup_image.ggText;
			me.player.setVariableValue('vis_image_popup', true);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_image.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_image.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_image.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		this._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=this._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTYuMyw0MTQuN2g0Mi43di00NGgtNDIuN1Y0MTQuN3ogTS0xNTUuNSw0MTIuOUgtMTgzbDE5LTE4LjZjMC4zLTAuMywwLjYtMC40LDEtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjcsMC4xLDEsMC40bDYuNSw2LjRWNDEyLjl6IE0tMTYyLjksMzc2YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRjLTIuMiwwLTQtMS44LTQtNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ni44LDM3Ny44LTE2NS4xLDM3Ni0xNjIuOSwzNzZ6IE0tMTk0LjUsMzk3'+
			'LjhsOS43LTkuNGMwLjMtMC4zLDAuNi0wLjQsMS0wLjRjMC40LDAsMC43LDAuMSwxLDAuNGwxMS4yLDEwLjlsLTEzLjksMTMuNmgtOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5NC41LDM5Ny44TC0xOTQuNSwzOTcuOHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjNTU1NWZmIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNDkuNSw0MjUuNWMwLDEuMy0xLDIuMy0yLjMsMi'+
			'4zaC00Ni40Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi01N2MwLTEuMywxLTIuMywyLjMtMi4zaDQ2LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNMLTE0OS41LDQyNS41TC0xNDkuNSw0MjUuNXoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTUxLjgsMzY2LjJoLTQ2LjRjLTEuMywwLTIuMywxLTIuMywyLjN2NTdjMCwxLjMsMSwyLjMsMi4zLDIuM2g0Ni40YzEuMywwLDIuMy0xLDIuMy0yLjN2LTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTQ5LjUsMzY3LjItMTUwLjUsMzY2'+
			'LjItMTUxLjgsMzY2LjJ6IE0tMTUzLjcsNDE0LjdoLTQyLjd2LTQ0aDQyLjdWNDE0Ljd6Ii8+CiAgIDxjaXJjbGUgY3g9Ii0xNjIuOSIgZmlsbD0iI0ZGRkZGRiIgY3k9IjM3OS45IiByPSI0Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcxLjcsMzk5LjNsLTExLjItMTAuOWMtMC4zLTAuMy0wLjYtMC40LTEtMC40cy0wLjcsMC4xLTEsMC40bC05LjcsOS40djE1LjFoOUwtMTcxLjcsMzk5LjN6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYzLDM5My45Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xOSwxOC42aDI3LjV2LTEyLjJsLTYuNS02LjRDLTE2Mi4yLDM5NC0xNj'+
			'IuNiwzOTMuOS0xNjMsMzkzLjl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_image_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xOTguNyw0MTYuNmg0Ny40di00OC45aC00Ny40VjQxNi42eiBNLTE1My4zLDQxNC42aC0zMC42bDIxLjEtMjAuNmMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LDAuMiwxLjEsMC41bDcuMiw3LjFWNDE0LjZ6IE0tMTYxLjUsMzczLjZjMi40LDAsNC40LDIsNC40LDQuNGMwLDIuNC0yLDQuNC00LjQsNC40cy00LjQtMi00LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY1LjksMzc1LjYtMTY0LDM3My42LTE2MS41'+
			'LDM3My42eiBNLTE5Ni43LDM5Ny45bDEwLjctMTAuNWMwLjMtMC4zLDAuNy0wLjUsMS4xLTAuNXMwLjgsMC4yLDEuMSwwLjRsMTIuNCwxMi4ybC0xNS40LDE1LjFoLTEwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMTk2LjcsMzk3LjlMLTE5Ni43LDM5Ny45eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ni'+
			'43LDQyOC43YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtNTEuNmMtMS40LDAtMi42LTEuMS0yLjYtMi42di02My40YzAtMS40LDEuMS0yLjYsMi42LTIuNmg1MS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMCwyLjYsMS4xLDIuNiwyLjZMLTE0Ni43LDQyOC43TC0xNDYuNyw0MjguN3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ5LjIsMzYyLjhoLTUxLjZjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY2My40YzAsMS40LDEuMSwyLjYsMi42LDIuNmg1MS42YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNjMuNCYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE0Ni43LDM2My45LTE0Ny44LDM2Mi44LTE0OS4yLDM2Mi44eiBNLTE1MS4zLDQxNi42aC00Ny40di00OC45aDQ3LjRWNDE2LjZ6Ii8+CiAgIDxjaXJjbGUgY3g9Ii0xNjEuNSIgZmlsbD0iI0ZGRkZGRiIgY3k9IjM3OCIgcj0iNC40Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTcxLjMsMzk5LjVsLTEyLjQtMTIuMmMtMC4zLTAuMy0wLjctMC40LTEuMS0wLjRjLTAuNCwwLTAuOCwwLjItMS4xLDAuNWwtMTAuNywxMC41djE2LjhoMTAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xNzEuMywzOTkuNXoiLz4KICAgPHBhdGggZmlsbD0iI0'+
			'ZGRkZGRiIgZD0iTS0xNjEuNiwzOTMuNWMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0yMS4xLDIwLjZoMzAuNlY0MDFsLTcuMi03LjFDLTE2MC44LDM5My43LTE2MS4yLDM5My41LTE2MS42LDM5My41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_image_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_image_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		this._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		this._ht_image_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_ht_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_image.style.left='-50px';
					me._tt_ht_image.style.top='-47px';
				}
				else {
					me._tt_ht_image.style.left='-50px';
					me._tt_ht_image.style.top='21px';
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_image'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		this._tt_ht_image.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		this.__div = this._ht_image;
	};
	function SkinHotspotClass_ht_video_file(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_video_file.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style[domTransition]='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
				else {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
			}
		}
		this._ht_video_file.onclick=function (e) {
			me.skin._popup_video_file.ggInitMedia(me.player.getBasePath()+""+me.hotspot.url);
			me.player.setVariableValue('vis_video_popup_file', true);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_file.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_file.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_file.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
		}
		this._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_image=document.createElement('div');
		els=this._ht_video_file_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOS40LDQyMS43YzAsMS4zLTEsMi4zLTIuMywyLjNoLTY2LjdjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTQ5LjRjMC0xLjMsMS0yLjMsMi4zLTIuM2g2Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjMsMCwyLjMsMSwyLjMsMi4z'+
			'VjQyMS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjQsNDA1bDEwLjgtNy41YzAuNy0wLjUsMC43LTEuMywwLTEuOGwtMTAuOC03LjVjLTAuNy0wLjUtMS4zLTAuMi0xLjMsMC43djE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNyw0MDUuMi0xNzkuMSw0MDUuNS0xNzguNCw0MDV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LD'+
			'E0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRD'+
			'LTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg5LjQsNDA0LjUtMTgzLDQxMS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6Ii'+
			'8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_file_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_file_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTM1LjQsNDI0LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42SC0yMTJjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDc0LjFjMS40LDAs'+
			'Mi42LDEuMSwyLjYsMi42VjQyNC40eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjgsNDA1LjlsMTItOC40YzAuOC0wLjUsMC44LTEuNCwwLTEuOWwtMTItOC40Yy0wLjgtMC41LTEuNC0wLjItMS40LDAuN3YxNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsNDA2LjEtMTc5LjYsNDA2LjQtMTc4LjgsNDA1Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLD'+
			'E2LTE2LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjku'+
			'M0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_file_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_file_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_file_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_video_file_image.onmouseover=function (e) {
			me._ht_video_file_image__img.style.visibility='hidden';
			me._ht_video_file_image__imgo.style.visibility='inherit';
		}
		this._ht_video_file_image.onmouseout=function (e) {
			me._ht_video_file_image__img.style.visibility='inherit';
			me._ht_video_file_image__imgo.style.visibility='hidden';
		}
		this._ht_video_file_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_image);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_ht_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_file.style.left='-50px';
					me._tt_ht_video_file.style.top='-47px';
				}
				else {
					me._tt_ht_video_file.style.left='-50px';
					me._tt_ht_video_file.style.top='21px';
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_file'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		this._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		this.__div = this._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_video_url.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style[domTransition]='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
				else {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
			}
		}
		this._ht_video_url.onclick=function (e) {
			me.skin._popup_video_url.ggInitMedia(me.hotspot.url);
			me.player.setVariableValue('vis_video_popup_url', true);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_url.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_url.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._tt_ht_video_url.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_url.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_url.ontouchend=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url.logicBlock_visible();
		}
		this._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_image=document.createElement('div');
		els=this._ht_video_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOS40LDQyMS43YzAsMS4zLTEsMi4zLTIuMywyLjNoLTY2LjdjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTQ5LjRjMC0xLjMsMS0yLjMsMi4zLTIuM2g2Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjMsMCwyLjMsMSwyLjMsMi4z'+
			'VjQyMS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjQsNDA1bDEwLjgtNy41YzAuNy0wLjUsMC43LTEuMywwLTEuOGwtMTAuOC03LjVjLTAuNy0wLjUtMS4zLTAuMi0xLjMsMC43djE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNyw0MDUuMi0xNzkuMSw0MDUuNS0xNzguNCw0MDV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LD'+
			'E0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRD'+
			'LTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg5LjQsNDA0LjUtMTgzLDQxMS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6Ii'+
			'8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_url_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_url_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTM1LjQsNDI0LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42SC0yMTJjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDc0LjFjMS40LDAs'+
			'Mi42LDEuMSwyLjYsMi42VjQyNC40eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjgsNDA1LjlsMTItOC40YzAuOC0wLjUsMC44LTEuNCwwLTEuOWwtMTItOC40Yy0wLjgtMC41LTEuNC0wLjItMS40LDAuN3YxNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsNDA2LjEtMTc5LjYsNDA2LjQtMTc4LjgsNDA1Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLD'+
			'E2LTE2LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjku'+
			'M0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_url_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_url_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_url_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_video_url_image.onmouseover=function (e) {
			me._ht_video_url_image__img.style.visibility='hidden';
			me._ht_video_url_image__imgo.style.visibility='inherit';
		}
		this._ht_video_url_image.onmouseout=function (e) {
			me._ht_video_url_image__img.style.visibility='inherit';
			me._ht_video_url_image__imgo.style.visibility='hidden';
		}
		this._ht_video_url_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_image);
		el=me._tt_ht_video_url=document.createElement('div');
		els=me._tt_ht_video_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_ht_video_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_url.style.left='-50px';
					me._tt_ht_video_url.style.top='-47px';
				}
				else {
					me._tt_ht_video_url.style.left='-50px';
					me._tt_ht_video_url.style.top='21px';
				}
			}
		}
		me._tt_ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_url'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url.style.visibility=(Number(me._tt_ht_video_url.style.opacity)>0||!me._tt_ht_video_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url.ggVisible=true;
				}
				else {
					me._tt_ht_video_url.style.visibility="hidden";
					me._tt_ht_video_url.ggVisible=false;
				}
			}
		}
		this._tt_ht_video_url.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_url.appendChild(me._tt_ht_video_url);
		this.__div = this._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_video_vimeo.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style[domTransition]='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
				else {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
			}
		}
		this._ht_video_vimeo.onclick=function (e) {
			me.skin._popup_video_vimeo.ggInitMedia(me.hotspot.url);
			me.player.setVariableValue('vis_video_popup_vimeo', true);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_vimeo.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_vimeo.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._tt_ht_video_vimeo.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_vimeo.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_vimeo.ontouchend=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
		}
		this._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_image=document.createElement('div');
		els=this._ht_video_vimeo_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOS40LDQyMS43YzAsMS4zLTEsMi4zLTIuMywyLjNoLTY2LjdjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTQ5LjRjMC0xLjMsMS0yLjMsMi4zLTIuM2g2Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjMsMCwyLjMsMSwyLjMsMi4z'+
			'VjQyMS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjQsNDA1bDEwLjgtNy41YzAuNy0wLjUsMC43LTEuMywwLTEuOGwtMTAuOC03LjVjLTAuNy0wLjUtMS4zLTAuMi0xLjMsMC43djE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNyw0MDUuMi0xNzkuMSw0MDUuNS0xNzguNCw0MDV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LD'+
			'E0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRD'+
			'LTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg5LjQsNDA0LjUtMTgzLDQxMS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6Ii'+
			'8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_vimeo_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_vimeo_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTM1LjQsNDI0LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42SC0yMTJjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDc0LjFjMS40LDAs'+
			'Mi42LDEuMSwyLjYsMi42VjQyNC40eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjgsNDA1LjlsMTItOC40YzAuOC0wLjUsMC44LTEuNCwwLTEuOWwtMTItOC40Yy0wLjgtMC41LTEuNC0wLjItMS40LDAuN3YxNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsNDA2LjEtMTc5LjYsNDA2LjQtMTc4LjgsNDA1Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLD'+
			'E2LTE2LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjku'+
			'M0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_vimeo_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_vimeo_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_vimeo_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_vimeo_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_video_vimeo_image.onmouseover=function (e) {
			me._ht_video_vimeo_image__img.style.visibility='hidden';
			me._ht_video_vimeo_image__imgo.style.visibility='inherit';
		}
		this._ht_video_vimeo_image.onmouseout=function (e) {
			me._ht_video_vimeo_image__img.style.visibility='inherit';
			me._ht_video_vimeo_image__imgo.style.visibility='hidden';
		}
		this._ht_video_vimeo_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_image);
		el=me._tt_ht_video_vimeo=document.createElement('div');
		els=me._tt_ht_video_vimeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_ht_video_vimeo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_vimeo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_vimeo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_vimeo.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_vimeo.style.left='-50px';
					me._tt_ht_video_vimeo.style.top='-47px';
				}
				else {
					me._tt_ht_video_vimeo.style.left='-50px';
					me._tt_ht_video_vimeo.style.top='21px';
				}
			}
		}
		me._tt_ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_vimeo'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_vimeo.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_vimeo.style.visibility=(Number(me._tt_ht_video_vimeo.style.opacity)>0||!me._tt_ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_vimeo.ggVisible=true;
				}
				else {
					me._tt_ht_video_vimeo.style.visibility="hidden";
					me._tt_ht_video_vimeo.ggVisible=false;
				}
			}
		}
		this._tt_ht_video_vimeo.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_vimeo.appendChild(me._tt_ht_video_vimeo);
		this.__div = this._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_video_youtube.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.getVariableValue('vis_userdata') == true) || 
				(me.player.getVariableValue('vis_image_popup') == true) || 
				(me.player.getVariableValue('vis_info_popup') == true) || 
				(me.player.getVariableValue('vis_video_popup_file') == true) || 
				(me.player.getVariableValue('vis_video_popup_url') == true) || 
				(me.player.getVariableValue('vis_video_popup_vimeo') == true) || 
				(me.player.getVariableValue('vis_video_popup_youtube') == true) || 
				(me.player.getVariableValue('vis_website') == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style[domTransition]='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
				else {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
			}
		}
		this._ht_video_youtube.onclick=function (e) {
			me.skin._popup_video_youtube.ggInitMedia(me.hotspot.url);
			me.player.setVariableValue('vis_video_popup_youtube', true);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_youtube.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_youtube.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_youtube.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_video_youtube.ontouchend=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
		}
		this._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_image=document.createElement('div');
		els=this._ht_video_youtube_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOS40LDQyMS43YzAsMS4zLTEsMi4zLTIuMywyLjNoLTY2LjdjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTQ5LjRjMC0xLjMsMS0yLjMsMi4zLTIuM2g2Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjMsMCwyLjMsMSwyLjMsMi4z'+
			'VjQyMS43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjQsNDA1bDEwLjgtNy41YzAuNy0wLjUsMC43LTEuMywwLTEuOGwtMTAuOC03LjVjLTAuNy0wLjUtMS4zLTAuMi0xLjMsMC43djE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNyw0MDUuMi0xNzkuMSw0MDUuNS0xNzguNCw0MDV6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LD'+
			'E0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi0xODMsMzgyLjEtMTc1LDM4Mi4xeiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRD'+
			'LTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg5LjQsNDA0LjUtMTgzLDQxMS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6Ii'+
			'8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;ht_video_youtube_image;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=this._ht_video_youtube_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTM1LjQsNDI0LjRjMCwxLjQtMS4xLDIuNi0yLjYsMi42SC0yMTJjLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDc0LjFjMS40LDAs'+
			'Mi42LDEuMSwyLjYsMi42VjQyNC40eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIGQ9Ik0tMTc4LjgsNDA1LjlsMTItOC40YzAuOC0wLjUsMC44LTEuNCwwLTEuOWwtMTItOC40Yy0wLjgtMC41LTEuNC0wLjItMS40LDAuN3YxNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsNDA2LjEtMTc5LjYsNDA2LjQtMTc4LjgsNDA1Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLD'+
			'E2LTE2LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMTgzLjksMzgwLjUtMTc1LDM4MC41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjku'+
			'M0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;ht_video_youtube_image;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_youtube_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_youtube_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._ht_video_youtube_image.onmouseover=function (e) {
			me._ht_video_youtube_image__img.style.visibility='hidden';
			me._ht_video_youtube_image__imgo.style.visibility='inherit';
		}
		this._ht_video_youtube_image.onmouseout=function (e) {
			me._ht_video_youtube_image__img.style.visibility='inherit';
			me._ht_video_youtube_image__imgo.style.visibility='hidden';
		}
		this._ht_video_youtube_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_image);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #424242;';
		hs+='background: rgba(66,66,66,0.666667);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_ht_video_youtube.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_video_youtube.style.left='-50px';
					me._tt_ht_video_youtube.style.top='-47px';
				}
				else {
					me._tt_ht_video_youtube.style.left='-50px';
					me._tt_ht_video_youtube.style.top='21px';
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_video_youtube'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		this._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		this.__div = this._ht_video_youtube;
	};
	function SkinHotspotClass_left(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._left=document.createElement('div');
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 73px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._left.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._left.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._left.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._left.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['left']=true;
			me._hotspot_preview2.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._left.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['left']=false;
			me._hotspot_preview2.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._left.ontouchend=function (e) {
			me.elementMouseOver['left']=false;
			me._hotspot_preview2.logicBlock_visible();
		}
		this._left.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimageleft=document.createElement('div');
		els=me._hsimageleft__img=document.createElement('img');
		els.className='ggskin ggskin_hsimageleft';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAGyElEQVRYhe2XbUxb1xnH/+dcuIMJMttAkEerYFqzBM0xL0KiCHWKNMiLmMouVZQif2sGWxKtk1xNgakL0oKqtor4EEUVSRukOKJEZZaymAySqFMVYbKptiABEjAhobYDNol5cew6F+49+8C9qcWANFkhX/yT/MU+L//znP/zPMdAggQJEiRIkCBBggQJEqwFz/O60tLS337Z9WXty9SR9KwBlFJDSUlJYWZmZn7t22/v/kkyn+Hsc/55M8StBVntS6PRWFhRUfHObCik3VFQUOD1etPNO82Z7/3pvZ9f6Lxw8xu3a2Bhfn56aGjoRkVFRZRSevPEiRNTmy5aEISkixcv7vxNdfXv36mrq7506dLM4OCgb3h4OCzLchoAUEofHzhwICM3Nzd727Ztqa'+
			'WlpWlPYrHM0OzsNCHkbij0aDoUmp31eDw3u7q6hgOBgLempsZrt9uXNkQ0gJrKysrG+vr6X+7fv/8cY8xGKZ2SZVnPcVyBJEn5hJB0xliaOoFSmpyVlUXMZnNG5a8rd+QacjXp6elc3mt5SZkZmfTho4dyYDowMzo2dvvWrVvesdHRke3btw84HI7A5OTkt6Iohl5ItCAISXa7vbq+oeGvxz74wPzP3t6vi4uKdpw8efLc/Pz8X9Qo8TyvW1pa+pksy3oAWwG8BiCbEJJOCNHKsswDiFBKk/V6/U8LCgqyS0tLU81mc2ZRcdFW4+tGTt00Go1idHR0enhoOPiN2zUwNjo6cuPGDf/CwsIIx3H3q6urF9a7HaLVai1NjU0fvXvwXf3RxsaBq1eufH3q1KmivXv3/ury5cs+i8XSODs7e37lREEQkhwOx5YVB8kBsI0Q'+
			'kq6OU28mOzubN5vNGbkGgy49LW1rWVmZNi8vL8VkMtHk5GREo1H4H/ilibsTS5OTk17PmOfu+Ljn2yeieHd8fLzX4/EMPN3cZDJ1Hz9+fMJgMLQC+BiAgxDyaV1d3VXGGJMkib1vfb8HQPmzrk0QhCQAqTzP6ziOK+Y47qCypg1Ar0ajGVQ/u3btmrBarb5+p3NRkiS2FqIoslAoJNvO2QY7Or74UNkDzQDKBUFI4jiumBDyKYBeADaz2XwhGAzOMcaYy+WSat566zTP87r1hKuCDQZDq8ViGfzk40/87e3tosvlkvw+nxSJRNYU+CzcbveU2+XSE57ndfEJYTQaCz0eTw2AnZRSMSsri5w9e7Z83759rwDA6dOnxw8dOvSRJEmfrRRMKTXIsvwHAAX9TufusjfeWLcPLC4uYiYYlKcDAUSj0eCDBw/Y3NxcZGZmhr'+
			'tz5044EAjEwuHwktfrfcLz/OC9e/eaAHy3ap3meV4nSZIgSdI+ADyl9PHRo0cLWlpaTADgGfdIzcea/9XR0XEMgDNuahWAPwJAW1vbL+rr61+PRqNISUlBLBZDS0vLrYePHi1FIxEuXpDf75+jlIqyLC8q60wBiAIIAwDHcfOSJI0IgvCfdcunIAhJWq3WQintBOAAYKurq7sqiuLT6+rp6YkZDIZW1TKUUgOW/WuvrKz8t5oTkiQxURRZWVlZHwArli3ZDOCwVqu1AKhRDlzOcVwxpdTA87xOWTd1vdtai3IoCUop7TSZTN1ut3tKFR6JRJjVavUpSZcK4DAAe05OzlehUEhWk4kxxvw+n6TX699UxqWqSbUhKBFsxnKC2imlnd3d3d74JHG5XFJVVdU15YA2SmlnT09PTBWtVojz522dGyZ0JUpVOKjYxU4p7Wxq'+
			'arq5MsPb29tFjUYzGP+7ag/1AEajsXDThCvXWYVl3zoA2Kqqqq6pNlDx+3xSbW2tV6PRDMZbRI32Z59//tWmiY5jXZ/HJ6rf55PUZIxvIi/lTa743IrliNsppZ1tbW2e1ZqCGuV44W1tbZ5NFw0s+xxKtVA+tnifxwtdKToSibCurr8ffJF9uWcPWRtJkr4DMARghhDyKoBX+vr6vE6nM7Bnz56MtLS0FMbY/8xjjIHnedy/f684FoudvH37tvz/6Hhh4t8tlNLOnJycf8T7fLVoM8bYkSNHDj/3Xj+WaMbYFKV0hDHGM8YM4XBYPnPmzIRer08pKSnREUIQH3XGGAgh2LJlS7FOp+vo7+9//GNpeRFSldZsh1IW6xsa3KtFXPV2R8cXH75MwQC+r+eKXZ7Wc/WZGy+eMcaCweDchrb05yG+/as+X9n+1ZI4NDT0u5'+
			'cs93vi6rlaFu31DQ3u69evr2xGb/7QNVd9T28AqQB2E0J2M8ZeBSAC4Gtra835+fmTsVjsb62trb0/dLHNEg3g6T8bM4BCQkg2YywM4BqAK8+zzn8Bc82ycGVx824AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimageleft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -22px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimageleft.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hsimageleft.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hsimageleft.ggUpdatePosition=function (useTransition) {
		}
		me._left.appendChild(me._hsimageleft);
		el=me._hotspot_preview2=document.createElement('div');
		el.ggId="hotspot_preview2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -110px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hotspot_preview2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['left'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview2.style[domTransition]='';
				if (me._hotspot_preview2.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview2.style.visibility=(Number(me._hotspot_preview2.style.opacity)>0||!me._hotspot_preview2.style.opacity)?'inherit':'hidden';
					me._hotspot_preview2.ggVisible=true;
				}
				else {
					me._hotspot_preview2.style.visibility="hidden";
					me._hotspot_preview2.ggVisible=false;
				}
			}
		}
		this._hotspot_preview2.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_1=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._preview_picture_frame_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._preview_picture_frame_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._preview_picture_frame_1);
		el=me._preview_nodeimage1=document.createElement('div');
		els=this._preview_nodeimage1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage1;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage1.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._preview_nodeimage1.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._preview_nodeimage1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._preview_nodeimage1);
		el=me._tooltip_bg1=document.createElement('div');
		el.ggId="tooltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(179,179,179,0.392157);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tooltip_bg1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip_bg1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip_bg1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._tooltip_bg1);
		el=me._tooltip_drop_shadow1=document.createElement('div');
		els=me._tooltip_drop_shadow1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(85,85,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip_drop_shadow1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip_drop_shadow1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip_drop_shadow1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._tooltip_drop_shadow1);
		el=me._tooltip1=document.createElement('div');
		els=me._tooltip1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._tooltip1);
		el=me._checkmark_tick1=document.createElement('div');
		els=this._checkmark_tick1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9Ij'+
			'MycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5'+
			'NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmY1NTAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC'+
			'4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3'+
			'bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLT'+
			'EyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tl'+
			'LW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLj'+
			'I1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick1;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick1.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick1.style[domTransition]='';
				if (me._checkmark_tick1.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick1.style.visibility=(Number(me._checkmark_tick1.style.opacity)>0||!me._checkmark_tick1.style.opacity)?'inherit':'hidden';
					me._checkmark_tick1.ggVisible=true;
				}
				else {
					me._checkmark_tick1.style.visibility="hidden";
					me._checkmark_tick1.ggVisible=false;
				}
			}
		}
		this._checkmark_tick1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview2.appendChild(me._checkmark_tick1);
		me._left.appendChild(me._hotspot_preview2);
		this.__div = this._left;
	};
	function SkinHotspotClass_right(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._right=document.createElement('div');
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 73px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._right.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._right.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._right.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._right.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['right']=true;
			me._hotspot_preview1.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._right.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['right']=false;
			me._hotspot_preview1.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._right.ontouchend=function (e) {
			me.elementMouseOver['right']=false;
			me._hotspot_preview1.logicBlock_visible();
		}
		this._right.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimageright=document.createElement('div');
		els=me._hsimageright__img=document.createElement('img');
		els.className='ggskin ggskin_hsimageright';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAG1ElEQVRYhe2YX0xTWR7Hf/e0907b02KB6aWFmQK6SGOnCzPMrsrDutkwVTOJkQQfCJuNbKLBGRInkUSzGp3AkI2JkX3AxOgmKDVa11rjDBMg4sMmG2wa0Lqla3aV6gy0pQWdTgul9t7eMw/eSy4s459V8GH7Sc5D03PP/f5+53t+55wLkCNHjhw5cuTIkSNHjv8rFG/z5S6XqzGZTK578OBBGAAyL/vcWxVdUVFh2rRpU8eOHTs+5Xm+ZGZmJi+TyWQJIfHnPadcLYEAACzLGvbs2VN96tQpZX19/W9n5+aMarVa1dDQsPXJkyfVhYWF0ZKSEu5hMOjDWu1jr9d7ORAI3F46DvWmhWGM6fn5+feUSqVp79691TU1NWt5nv+gpKREpVAoLHk6XSGFUG'+
			'xkdCQ18f3Ej5OTkz9eunRpGgC04hCzVqsVV1VVmevr64suO519f7typRtjHJibm+NeSzTLsgaDwfC+2Wx+HwAs6ysrN2zevElXVlq2MT8/32AymehIJMIFg0FFKpWajkxFkl9f//o7v9+fiEajGUEQFjxMUVSKoqjHgiBMMgxzl+f5iFKpNHEc94dz58793uFwjA0PD59IpVKuF4rGGNMYY308Hq9QKpXFW7ZsWbe+snLDxzU1H9tsNraysvJdlUq10P/hwyDcueOLer3eydHRUT4QCISj0agkjgGADCEkLgr8QaPRPOJ5PszzfEQQhBkASEpjNTc3H9+/f/8fvV7v9zt37vzw6NGj/+zt7f2KoqjrizxttVo/MpvNn+i02gqzufS99ZXrDaWlpSVlZWUFZrOZVqlUkE6nIRAIwPj4eNTpdH43MTExPj09Tfx+fyIS'+
			'icxKmZNl8bEgCJMajWZaLhBjnJamW45Go2m4du1at91uL+rv7//7yZMn79y+fVvR3t7+y/Ly8u4jR45oYczvV/f09JxwOByBRCJBOI4jP0c2myW3hoe5lpaWma1bt943Go33AMAjtgEA6EUIddI0vRsAqlmWNQCADmNMv8huDMPUth1oG8hms4QQQpqamm5SFHUaIdQHAF0Wi6Xr+PHjUzab7RvK7XYbi4uLRzdu3Fj8ooGXI5lMQjKZfBqJRN4JBAJzU1NTs36/P3rx4sU+QRCuAMC4fNqXwrKsoaCg4E8XLlz4oqamBsLh8NNt27bd8Pv9PwAAS1HUI0LIaYxxgOO4X/E8/6nkaZ3FYmlXq9W/BgAoLCxUGI1G9bp1a5UGlmVMRpNOq9VCUVGRwmAw6AoKCt6Re3k5PLdu8Ztra28ihEYB4K+CIDxc2oem6d1df+'+
			'k6/Plnn/8CAMDtdkdbW1uHxXWgBYC7YuA+eZBKAACMcToYDF4hhNzlOO5dAACEUL4gCBoAKEQIMeIzDABAVVVVkRSYVqslRUUsfeBA2waMMWQyGVCpVPCf+/efIoR4AKjKy8uzxOPxBdEMw9Tu2rWro6Oj/Xfl5WsBAODLL4/9q6PjK78oFhQKhSs/P//bWCw2LQ906W8QA6ABQMeyrAEhVA4A1QzD1Or1+u0ajaZB9Os+AGhDCHUCQFtdXZ2H4ziSzWYX1kRdXZ0HIeSGZz4vl7JksVi6+vv7s9I64TiONDU13RT79SGEnBqNpuFl1sErIQWGMaYZhqkNhUJpQgiZn58nhBASi8UEUYAbAPZhjGmapncfOnTokdSHEEJ8Pt+0zWb7BiHkBIABhFAnwzC1b1TscjgvO91SxqQsDw4OTolCehFCnXa7fWhkZGRRJbp6'+
			'9eoUQsgpBjaAEOqUZmRFsVqtH0lCJXsQQsjBgwdHEEJOo9F47/z587NLS+exY0cDouA+Mbh9Ynlcec6ePTsg1W9JfCKRIEaj8V5jY+OTWCwmyMXGYjHBbrcPAUAviHVdr9dvf+P+/TlcLlejfDFJmQ6FQmn5QlvOv9KGsSr+lXPmzJlReZblnl6Kw+EIyP0LzyrPyvtXjsvlakwkEouyvLQt41+3VE0AQPc67/+fLgEURXXpdDoQBOG//kMIAUIIwuHw0+bm5n8MDQ3NCIKgpyjq0Zo1a65zHDe03EFpRWltbf1MymI2m13UJDweT8hkMrml+gsAXQBQvapCJdxut9Hj8YSeJ7j7VPf9JXZYff/K6enpOSF5eTnBLS0tPln9dYtb/mv597UY8/vV8/PpRVmWCIVCabvdPiQJpijqtF6v3/7WxC6IHhvbIz83SAwODk'+
			'7J/btq2/HLQAj5jVysx+MJiXZwyw5Hq+LfV7qNHz58+BOe5//s8/nW3Lhx49/w7KsQQwiZVKvVQ6lUahCec0t5U7zyJwS9Xr89Ho/bKYpSUxT1WKVS3Umn06PL3UxWip8AJyhmofF5LecAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimageright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -22px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimageright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hsimageright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hsimageright.ggUpdatePosition=function (useTransition) {
		}
		me._right.appendChild(me._hsimageright);
		el=me._hotspot_preview1=document.createElement('div');
		el.ggId="hotspot_preview1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -110px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hotspot_preview1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['right'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview1.style[domTransition]='';
				if (me._hotspot_preview1.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview1.style.visibility=(Number(me._hotspot_preview1.style.opacity)>0||!me._hotspot_preview1.style.opacity)?'inherit':'hidden';
					me._hotspot_preview1.ggVisible=true;
				}
				else {
					me._hotspot_preview1.style.visibility="hidden";
					me._hotspot_preview1.ggVisible=false;
				}
			}
		}
		this._hotspot_preview1.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_0=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._preview_picture_frame_0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._preview_picture_frame_0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._preview_picture_frame_0);
		el=me._preview_nodeimage0=document.createElement('div');
		els=this._preview_nodeimage0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage0;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage0.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._preview_nodeimage0.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._preview_nodeimage0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._preview_nodeimage0);
		el=me._tooltip_bg0=document.createElement('div');
		el.ggId="tooltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(179,179,179,0.392157);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tooltip_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip_bg0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip_bg0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._tooltip_bg0);
		el=me._tooltip_drop_shadow0=document.createElement('div');
		els=me._tooltip_drop_shadow0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(85,85,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip_drop_shadow0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip_drop_shadow0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip_drop_shadow0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._tooltip_drop_shadow0);
		el=me._tooltip0=document.createElement('div');
		els=me._tooltip0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._tooltip0);
		el=me._checkmark_tick0=document.createElement('div');
		els=this._checkmark_tick0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9Ij'+
			'MycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5'+
			'NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmY1NTAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC'+
			'4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3'+
			'bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLT'+
			'EyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tl'+
			'LW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLj'+
			'I1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick0;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick0.style[domTransition]='';
				if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
					me._checkmark_tick0.ggVisible=true;
				}
				else {
					me._checkmark_tick0.style.visibility="hidden";
					me._checkmark_tick0.ggVisible=false;
				}
			}
		}
		this._checkmark_tick0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview1.appendChild(me._checkmark_tick0);
		me._right.appendChild(me._hotspot_preview1);
		this.__div = this._right;
	};
	function SkinHotspotClass_ht_node(skinObj,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 73px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._ht_node.ggElementNodeId=function() {
			return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
		}
		this._ht_node.onclick=function (e) {
			me.player.openNext(me.hotspot.url,me.hotspot.target);
			me.skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node.ondblclick=function (e) {
			me.skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node.onmouseover=function (e) {
			me.player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			me.skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node.onmouseout=function (e) {
			me.player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me.skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		this._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
		}
		this._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_hsimage';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAGoklEQVRYhe2YX2hU2R3Hv3fujI5ksLI2bLVDJ067FIX8GYe01DxUlBhwxW4N9CE+DKvkJbDILA5Kn+JgEeZB0kAQqjCQedGFmw1BkdIYoy4pBm4mVJNxpml2jNOYmORmuRlzb2fuPb8+5B57E5OYTbLQh/nAvMyf3/me7/me3zlzgRIlSpQoUaJEiRIlSpT4f0fYagFVVX2iKP5sbm6uEgAYY5U7duz4KJVKjR04cGCnruvVAwMDbGJi4h+zs7PfVlRU/AsALl++/A1j7O0PJpoLe/bsWfn+/ft/4nQ6fwsAg4ODznQ6vfj69etd+/bt0548eTIzPj5uAsDo6Oisx+MpHj161AsAtbW1YigU2jE2NubPZrMAgCNHjjgymYw6NDQ03t/fnz516tSrp0'+
			'+fpiVJym5Z9MTEREs+n/89AExPT5criuJ69eqVq6amxs8Y++7q1atzjx496gMA0zSdANyrlNEBaLdu3fplIBCoXlhY+PHw8PB4dXX14s6dO1179uyZBIDbt28PR6PRPwIorqXHuQHN3kOHDrkNw0gWi0UngF0ul2vh9OnTn1y4cOETAHsjkYhoiR0EMAfgLYAJ6/cfAfgYwF4APx0aGio/f/78xy9fvqTjx49/B+AbALsAaC6Xy3A6nVMAfgEgtQFta1ItiuJ1AAkAN91ud6yysrJ9amqaERFdu3aNnE5nL4CzG6h1UBTFG8lkMk9E1N/fbwiC0AWgFcBNAAlRFG8AqNuKYABwAfADOAjA63A4ykZHR/9GRKQoCvN6vfMA2q3P18XhcJR5PJ4vI5GLMmOMiIhCoVAGwEEIQrk1jt/hcJRtVfQyYrFYA1l0dHSYoigO'+
			'YmMuc+p8Pt/9XC5nMsYol8uZbrc7tq0i7Zz7/NxeIlJ0TSdd08ly+SY24DLHcvFSW1tbxj55bEMkVmVycvKOrulERNSZ6GQAngO4tInlbAgEAj2qqpKqqkREdOzYsfS2x+LevXt/ICLSNZ0Mw6CqqioVQA+Ahk2U87rd7pgkSTM827Isk7Xhtwcei3w+T0RE3d3dBOC5tdO9myx7pr7+xGMiolwuZxIRhcNhDZsz4X2KxeJX3GUiomAwOG+1ueYtlPUDaJdleUrXdMrn86SqKvn9/udWJ9k89ljw3grgJb7nBlwFF4DmlpaWISIi3vetVWzfdFUei0KhQIZhEBHR7z77jLe5Zmvg1eF9d33XqgEkcrmcqWs6KYrC+BjYbEyKxeJXhmGsdDmHNTbguc/P7f1a+vqLu3fv3pckaSYej79paWkZsrJ/Bu/n3+XxeL7k7Y'+
			'+7ncvlloz5vjHhsVjpMpbaXKv9u7FYrKGzs/MviqLMFgoFWomiKKyjo8Osrz/x2Pptna29VQcCgR6ea+621bs3HhN7LLiIF6mUiSWXEwDqGhsbKx48ePCnmZmZZ++pXAdZlikcDms+n+8+lk7SOgCXJEka4RPkYwaDwXlsNCaTk5N3uMuMMdI1naqqqlRRFAebmpp6e3t7/0pE2lrCJEmaCYVCmYGBgRH+Hu/vnHw+T52JTnby5KeyIAhdu3fvfqIoCrO7bfXuQXyora6MBWOMpqamWTgc1vjtjIiIMbZMhK7pFI/H35w8+akMoEcQhC5BELqampp6LRc1u2A7L1IpMxQKZfr7+41CoUD2kzIcDmvWobP6puexMAyD7K/1yGazLBqNjljL3WNdNRPWJaidiw8EAj2SJI3our6wlvu6pr8TrKrqu1W27jirX8r4IcJd'+
			'Xk98MpnMh0KhjNPp7OXCrLxfwv82mt8arB1AgouPRqMjiqLM2p3P5/PENyM/aLjb3d3dPCbLzwUeiw+J7evrm10p1mppzQCq17j0eLG0oVq5eEEQuiKRi7Isy1P8/sEYI1VVlwnn7dbqXO3v6jc2NlYQkWIXbUdVVYrH429qa2v/bo+AlbWzlqMfxBqwzlqNBK9VX3/i8cOHD4ftubfHhGiph1sxOQMAyGazN/hM18rrigi0AmjYwh3BhaXTsBkrct/W1paxR4c7b3O7FQ6Ho+zKlSt/ts+yr69vNhK5KK/I600sz+t24QdwVhTF63wsn893PxqNjsiyPMV1vUilzGAwOC+K4nUBgF8Uxcjhw4dreJVkMvnWNE0VAIgoB+ApgCEAY1jnr/2WEIRyEB0G8BsAPwfwIwCora0tB4B0Om0sLi7+xzCMO4LD4ShjjDUB+B'+
			'UAiKJomKZZBPBvAP/E0mOB3A8idBUsPTUej+fXmqZ5sfR4AaZpOt1u97yu6/H/Alht82EID1MDAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : -22px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hsimage.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._hsimage.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hsimage);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -110px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._hotspot_preview.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['ht_node'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style[domTransition]='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		this._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._preview_picture_frame_.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage=document.createElement('div');
		els=this._preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;preview_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._preview_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._preview_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage);
		el=me._tooltip_bg=document.createElement('div');
		el.ggId="tooltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(179,179,179,0.392157);';
		hs+='border : 0px solid #5555ff;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tooltip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip_bg);
		el=me._tooltip_drop_shadow=document.createElement('div');
		els=me._tooltip_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(85,85,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip_drop_shadow.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip_drop_shadow);
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tooltip.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		this._tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip);
		el=me._checkmark_tick=document.createElement('div');
		els=this._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9Ij'+
			'MycHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHdpZHRoPSIzMnB4IiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5OyYjeDk7JiN4OTtjMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIvPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5'+
			'NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5Ij4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3'+
			'JtYWwiIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5'+
			'NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmY1NTAwIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiM1NTU1ZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC'+
			'4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3'+
			'bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLT'+
			'EyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tl'+
			'LW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLj'+
			'I1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiNmZjU1MDAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzU1NTVmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTS0zNjk5Ljk2LTI1ODMuODM3JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTsmI3g5OyYjeDk7aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		this._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		this.__div = this._ht_node;
	};
	this.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node1') {
			hotspot.skinid = 'ht_node1';
			hsinst = new SkinHotspotClass_ht_node1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node1_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_node1_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node1_active();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_file_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_url') {
			hotspot.skinid = 'ht_video_url';
			hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_url_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_vimeo') {
			hotspot.skinid = 'ht_video_vimeo';
			hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_vimeo_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_youtube') {
			hotspot.skinid = 'ht_video_youtube';
			hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_youtube_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='left') {
			hotspot.skinid = 'left';
			hsinst = new SkinHotspotClass_left(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_left_changenodeid();;
			me.callChildLogicBlocksHotspot_left_mouseover();;
		} else
		if (hotspot.skinid=='right') {
			hotspot.skinid = 'right';
			hsinst = new SkinHotspotClass_right(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_right_changenodeid();;
			me.callChildLogicBlocksHotspot_right_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenodeid();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		}
		return hsinst;
	}
	this.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node1']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node1'].length; i++) {
				hotspotTemplates['ht_node1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
				hotspotTemplates['ht_video_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_vimeo']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
				hotspotTemplates['ht_video_vimeo'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				hotspotTemplates['ht_video_youtube'][i] = null;
			}
		}
		if(hotspotTemplates['left']) {
			var i;
			for(i = 0; i < hotspotTemplates['left'].length; i++) {
				hotspotTemplates['left'][i] = null;
			}
		}
		if(hotspotTemplates['right']) {
			var i;
			for(i = 0; i < hotspotTemplates['right'].length; i++) {
				hotspotTemplates['right'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		var hs='';
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 99px; height: 62px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=this._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._checkmark_tick2=document.createElement('div');
		els=this._checkmark_tick2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojNTU1NWZmO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick2;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick2.ggElementNodeId()) == true) || 
				(me._checkmark_tick2.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick2.style[domTransition]='';
				if (me._checkmark_tick2.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick2.style.visibility=(Number(me._checkmark_tick2.style.opacity)>0||!me._checkmark_tick2.style.opacity)?'inherit':'hidden';
					me._checkmark_tick2.ggVisible=true;
				}
				else {
					me._checkmark_tick2.style.visibility="hidden";
					me._checkmark_tick2.ggVisible=false;
				}
			}
		}
		this._checkmark_tick2.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick2);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #bebebe;';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(85,85,255,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(85,85,255,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(190,190,190,1)";
				}
			}
		}
		this._thumbnail_active.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}","");
		}
		this._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		this._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		this._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		this._thumbnail_active.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 94px;';
		hs+='height: 57px;';
		hs+='background: #5d5d5d;';
		hs+='background: rgba(93,93,93,0.784314);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active'] == true) && 
				(me.player.getVariableValue('opt_thumbnail_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					me._thumbnail_title.style.visibility="hidden";
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		this._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	function SkinCloner_thumbnail_cloner_mobile_Class(nodeId, parent) {
		var me=this;
		var hs='';
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 96px; height: 62px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage_mobile=document.createElement('div');
		els=this._thumbnail_nodeimage_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;thumbnail_nodeimage_mobile;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage_mobile.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage_mobile.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__div.appendChild(me._thumbnail_nodeimage_mobile);
		el=me._checkmark_tick_mobile=document.createElement('div');
		els=this._checkmark_tick_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojNTU1NWZmO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick_mobile__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;checkmark_tick_mobile;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick_mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick_mobile.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick_mobile.ggElementNodeId()) == true) || 
				(me._checkmark_tick_mobile.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick_mobile.style[domTransition]='';
				if (me._checkmark_tick_mobile.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick_mobile.style.visibility=(Number(me._checkmark_tick_mobile.style.opacity)>0||!me._checkmark_tick_mobile.style.opacity)?'inherit':'hidden';
					me._checkmark_tick_mobile.ggVisible=true;
				}
				else {
					me._checkmark_tick_mobile.style.visibility="hidden";
					me._checkmark_tick_mobile.ggVisible=false;
				}
			}
		}
		this._checkmark_tick_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick_mobile);
		el=me._thumbnail_active_mobile=document.createElement('div');
		el.ggId="thumbnail_active_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #bebebe;';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active_mobile.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail_active_mobile.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active_mobile.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active_mobile'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active_mobile.style[domTransition]='border-color 0s';
				if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active_mobile.style.borderColor="rgba(85,85,255,1)";
				}
				else if (me._thumbnail_active_mobile.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active_mobile.style.borderColor="rgba(85,85,255,1)";
				}
				else {
					me._thumbnail_active_mobile.style.borderColor="rgba(190,190,190,1)";
				}
			}
		}
		this._thumbnail_active_mobile.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}","");
			me.player.setVariableValue('vis_thumbnail_menu_mobile', false);
		}
		this._thumbnail_active_mobile.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=true;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		this._thumbnail_active_mobile.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		this._thumbnail_active_mobile.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active_mobile']=false;
			me._thumbnail_title_mobile.logicBlock_alpha();
			me._thumbnail_active_mobile.logicBlock_bordercolor();
		}
		this._thumbnail_active_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._thumbnail_title_mobile=document.createElement('div');
		els=me._thumbnail_title_mobile__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 94px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 94px;';
		hs+='height: 57px;';
		hs+='background: #5d5d5d;';
		hs+='background: rgba(93,93,93,0.784314);';
		hs+='border: 0px solid #5555ff;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_title_mobile.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._thumbnail_title_mobile.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				(me.elementMouseOver['thumbnail_active_mobile'] == true) && 
				(me.player.getVariableValue('opt_thumbnail_tooltip') == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title_mobile.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title_mobile.style[domTransition]='opacity 500ms ease 0ms, visibility 500ms ease 0ms';
				if (me._thumbnail_title_mobile.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title_mobile.style.visibility=me._thumbnail_title_mobile.ggVisible?'inherit':'hidden';
					me._thumbnail_title_mobile.style.opacity=1;
				}
				else {
					me._thumbnail_title_mobile.style.visibility="hidden";
					me._thumbnail_title_mobile.style.opacity=0;
				}
			}
		}
		this._thumbnail_title_mobile.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active_mobile.appendChild(me._thumbnail_title_mobile);
		me.__div.appendChild(me._thumbnail_active_mobile);
	};
	this.addSkin();
	me._screentint.logicBlock_alpha();
	me._thumbnail_hide_button_show.logicBlock_alpha();
	me._thumbnail_show_button_show.logicBlock_alpha();
	me._thumbnail_menu.logicBlock_visible();
	me._thumbnail_menu.logicBlock_alpha();
	me._thumbnail_menu_mobile.logicBlock_visible();
	me._thumbnail_menu_mobile.logicBlock_alpha();
	me._loading_multires.logicBlock_visible();
	me._fullscreen.logicBlock_alpha();
	me._fullscreen_off.logicBlock_alpha();
	me._menu_button.logicBlock_position();
	me._controller.logicBlock_position();
	me._controller_bg.logicBlock_position();
	me._controller_bg.logicBlock_size();
	me._controller_bg.logicBlock_visible();
	me._controller_slider.logicBlock_position();
	me._fullscreen_buttons.logicBlock_position();
	me._fullscreen_buttons.logicBlock_visible();
	me._gyro.logicBlock_position();
	me._gyro.logicBlock_visible();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._projection_buttons.logicBlock_position();
	me._projection_buttons.logicBlock_visible();
	me._thumbnail.logicBlock_position();
	me._thumbnail.logicBlock_visible();
	me._info.logicBlock_position();
	me._info.logicBlock_visible();
	me._autorotate_buttons.logicBlock_position();
	me._autorotate_buttons.logicBlock_visible();
	me._autorotate_start.logicBlock_alpha();
	me._autorotate_stop.logicBlock_alpha();
	me._zoomout.logicBlock_visible();
	me._zoomin.logicBlock_visible();
	me._thumbnail_menu.logicBlock_position();
	me._thumbnail_menu_mobile.logicBlock_position();
	me._web_page.logicBlock_visible();
	me._userdata.logicBlock_visible();
	me._information.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	me._video_popup_url.logicBlock_visible();
	me._popup_video_url.logicBlock_visible();
	me._video_popup_controls_url.logicBlock_visible();
	me._video_popup_vimeo.logicBlock_visible();
	me._popup_video_vimeo.logicBlock_visible();
	me._video_popup_youtube.logicBlock_visible();
	me._popup_video_youtube.logicBlock_visible();
	me.__360image_gyro.logicBlock_visible();
	me.__360image.logicBlock_position();
	me.__360image.logicBlock_scaling();
	me._phone2.logicBlock_scaling();
	me._phone3.logicBlock_scaling();
	me._close.logicBlock_visible();
	me._loading.logicBlock_visible();
	me._rectilinear.logicBlock_alpha();
	me._fisheye.logicBlock_alpha();
	me._stereographic.logicBlock_alpha();
	player.addListener('sizechanged', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_hide_button_show.logicBlock_alpha();me._thumbnail_show_button_show.logicBlock_alpha();me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('tilesready', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('tilesrequested', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('fullscreenenter', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha(); });
	player.addListener('fullscreenexit', function(args) { me._fullscreen.logicBlock_alpha();me._fullscreen_off.logicBlock_alpha(); });
	player.addListener('changenodeid', function(args) { me._menu_button.logicBlock_position();me._loading_multires.logicBlock_visible();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._controller_bg.logicBlock_position();me._controller_bg.logicBlock_size();me._controller_bg.logicBlock_visible();me._controller_slider.logicBlock_position();me._fullscreen_buttons.logicBlock_position();me._fullscreen_buttons.logicBlock_visible();me._gyro.logicBlock_position();me._gyro.logicBlock_visible();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._projection_buttons.logicBlock_position();me._projection_buttons.logicBlock_visible();me._thumbnail.logicBlock_position();me._thumbnail.logicBlock_visible();me._thumbnail_hide_button_show.logicBlock_alpha();me._thumbnail_show_button_show.logicBlock_alpha();me._info.logicBlock_position();me._info.logicBlock_visible();me._autorotate_buttons.logicBlock_position();me._autorotate_buttons.logicBlock_visible();me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha();me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible();me._thumbnail_menu.logicBlock_position();me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_alpha();me._web_page.logicBlock_visible();me._userdata.logicBlock_visible();me._information.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me.__360image_gyro.logicBlock_visible();me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling();me._close.logicBlock_visible();me._loading.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._fullscreen_buttons.logicBlock_visible();me._gyro.logicBlock_visible();me.__360image_gyro.logicBlock_visible(); });
	player.addListener('projectionchanged', function(args) { me._rectilinear.logicBlock_alpha();me._fisheye.logicBlock_alpha();me._stereographic.logicBlock_alpha(); });
	player.addListener('autorotatechanged', function(args) { me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha(); });
	player.addListener('varchanged_vis_userdata', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._thumbnail_menu_mobile.logicBlock_position();me._userdata.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_url.logicBlock_visible();me._popup_video_url.logicBlock_visible();me._video_popup_controls_url.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_vimeo.logicBlock_visible();me._popup_video_vimeo.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_vis_website', function(args) { me._menu_button.logicBlock_position();me._screentint.logicBlock_alpha();me._controller.logicBlock_position();me._thumbnail_menu.logicBlock_position();me._web_page.logicBlock_visible();me._close.logicBlock_visible(); });
	player.addListener('varchanged_opt_loader_mulires', function(args) { me._loading_multires.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_mobile', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_hide_button_show.logicBlock_alpha();me._thumbnail_show_button_show.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_auto_hide', function(args) { me._screentint.logicBlock_alpha();me._thumbnail_menu.logicBlock_alpha();me._thumbnail_menu_mobile.logicBlock_alpha(); });
	player.addListener('varchanged_opt_thumbnail', function(args) { me._thumbnail.logicBlock_visible();me._thumbnail_menu.logicBlock_visible();me._thumbnail_menu_mobile.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu_show', function(args) { me._thumbnail_hide_button_show.logicBlock_alpha();me._thumbnail_show_button_show.logicBlock_alpha();me._thumbnail_menu.logicBlock_alpha(); });
	player.addListener('varchanged_opt_gyro', function(args) { me._gyro.logicBlock_visible();me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_vis_360image_once', function(args) { me.__360image_gyro.logicBlock_visible(); });
	player.addListener('varchanged_opt_loader', function(args) { me._loading.logicBlock_visible(); });
	player.addListener('varchanged_pos_controller', function(args) { me._controller_bg.logicBlock_position();me._controller_bg.logicBlock_size();me._controller_bg.logicBlock_visible();me._controller_slider.logicBlock_position(); });
	player.addListener('varchanged_pos_360image', function(args) { me.__360image.logicBlock_position();me.__360image.logicBlock_scaling();me._phone2.logicBlock_scaling();me._phone3.logicBlock_scaling(); });
	player.addListener('varchanged_pos_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_fullscreen', function(args) { me._fullscreen_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_gyro', function(args) { me._gyro.logicBlock_position(); });
	player.addListener('varchanged_opt_projection', function(args) { me._projection_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_projection', function(args) { me._projection_buttons.logicBlock_position(); });
	player.addListener('varchanged_pos_thumbnail', function(args) { me._thumbnail.logicBlock_position(); });
	player.addListener('varchanged_opt_info', function(args) { me._info.logicBlock_visible(); });
	player.addListener('varchanged_pos_information', function(args) { me._info.logicBlock_position(); });
	player.addListener('varchanged_opt_autorotate', function(args) { me._autorotate_buttons.logicBlock_visible(); });
	player.addListener('varchanged_pos_autorotate', function(args) { me._autorotate_buttons.logicBlock_position(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenodeid();me._thumbnail_cloner_mobile.callChildLogicBlocks_changenodeid(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover();me._thumbnail_cloner_mobile.callChildLogicBlocks_mouseover(); });
	player.addListener('changenodeid', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active();me._thumbnail_cloner_mobile.callChildLogicBlocks_active(); });
	player.addListener('varchanged_opt_thumbnail_tooltip', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip();me._thumbnail_cloner_mobile.callChildLogicBlocks_varchanged_opt_thumbnail_tooltip(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_node1_changenodeid();me.callChildLogicBlocksHotspot_ht_url_changenodeid();me.callChildLogicBlocksHotspot_ht_info_changenodeid();me.callChildLogicBlocksHotspot_ht_image_changenodeid();me.callChildLogicBlocksHotspot_ht_video_file_changenodeid();me.callChildLogicBlocksHotspot_ht_video_url_changenodeid();me.callChildLogicBlocksHotspot_ht_video_vimeo_changenodeid();me.callChildLogicBlocksHotspot_ht_video_youtube_changenodeid();me.callChildLogicBlocksHotspot_left_changenodeid();me.callChildLogicBlocksHotspot_right_changenodeid();me.callChildLogicBlocksHotspot_ht_node_changenodeid(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_url_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_video_url_configloaded();me.callChildLogicBlocksHotspot_ht_video_vimeo_configloaded();me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node1_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_video_url_mouseover();me.callChildLogicBlocksHotspot_ht_video_vimeo_mouseover();me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();me.callChildLogicBlocksHotspot_left_mouseover();me.callChildLogicBlocksHotspot_right_mouseover();me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenodeid', function(args) { me.callChildLogicBlocksHotspot_ht_node1_active(); });
	player.addListener('varchanged_vis_userdata', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_userdata();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_userdata(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_video_popup_file', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_file();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_file(); });
	player.addListener('varchanged_vis_video_popup_url', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_url();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_url(); });
	player.addListener('varchanged_vis_video_popup_vimeo', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_vimeo();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_vimeo(); });
	player.addListener('varchanged_vis_video_popup_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_video_popup_youtube();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_video_popup_youtube(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_node1_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_info_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_image_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_vimeo_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_video_youtube_varchanged_vis_website(); });
	player.addListener('varchanged_opt_url', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_opt_url(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	this.skinTimerEvent();
};