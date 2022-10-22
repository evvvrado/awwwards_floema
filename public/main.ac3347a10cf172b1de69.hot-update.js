/*! For license information please see main.ac3347a10cf172b1de69.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/lodash.js"),i=a("./app/pages/About/index.js"),n=a("./app/pages/Collections/index.js"),o=a("./app/pages/Detail/index.js"),h=a("./app/pages/Home/index.js"),p=a("./app/components/Preloader.js"),d=a("./app/components/Navigation.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addLinkListeners(),this.addListeners(),this.update()}createNavigation(){this.navigation=new d.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={collections:new n.default,detail:new o.default,about:new i.default,home:new h.default},this.page=this.pages[this.template],this.navigation.onChange(this.template),this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!0})}async onChange({url:e,push:t=!0}){await this.page.hide();const a=await window.fetch(e);if(console.log(e),200===a.status){const s=await a.text(),i=document.createElement("div");t&&window.history.pushState({},"",e),i.innerHTML=s;const n=i.querySelector(".content");this.template=n.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.innerHTML=n.innerHTML,this.content.setAttribute("data-template",this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.log("Erro: ",a.error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");(0,s.each)(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange({url:a})}}))}}}},(function(e){e.h=()=>"177f96ed548ab9797b4f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzMzNDdhMTBjZjE3MmIxZGU2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVZBd0lBLElBL0hBLE1BQ0NBLGNBRUNDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBQ0xILEtBQUtJLGNBRUxKLEtBQUtLLG1CQUNMTCxLQUFLTSxlQUVMTixLQUFLTyxRQUNMLENBRURKLG1CQUNDSCxLQUFLUSxXQUFhLElBQUlDLEVBQUFBLFFBQVcsQ0FDaENDLFNBQVVWLEtBQUtVLFVBRWhCLENBRURSLGtCQUNDRixLQUFLVyxVQUFZLElBQUlDLEVBQUFBLFFBQ3JCWixLQUFLVyxVQUFVRSxLQUFLLFlBQWFiLEtBQUtjLFlBQVlDLEtBQUtmLE1BQ3ZELENBRURDLGdCQUNDRCxLQUFLZ0IsUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q2xCLEtBQUtVLFNBQVdWLEtBQUtnQixRQUFRRyxhQUFhLGdCQUUxQyxDQUVEZixjQUNDSixLQUFLb0IsTUFBUSxDQUNaQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLE1BQU8sSUFBSUMsRUFBQUEsUUFDWEMsS0FBTSxJQUFJQyxFQUFBQSxTQUdYNUIsS0FBSzZCLEtBQU83QixLQUFLb0IsTUFBTXBCLEtBQUtVLFVBQzVCVixLQUFLUSxXQUFXc0IsU0FBUzlCLEtBQUtVLFVBRTlCVixLQUFLNkIsS0FBS0UsUUFFVixDQUVEakIsY0FDQ2QsS0FBS1csVUFBVXFCLFVBQ2ZoQyxLQUFLaUMsV0FDTGpDLEtBQUs2QixLQUFLSyxNQUNWLENBRURDLGFBQ0NuQyxLQUFLOEIsU0FBUyxDQUNiTSxJQUFLQyxPQUFPQyxTQUFTQyxTQUNyQkMsTUFBTSxHQUVQLENBRWEsZ0JBQUMsSUFBRUosRUFBRixLQUFPSSxHQUFPLFVBQ3RCeEMsS0FBSzZCLEtBQUtZLE9BR2hCLE1BQU1DLFFBQWdCTCxPQUFPTSxNQUFNUCxHQUluQyxHQUZBUSxRQUFRQyxJQUFJVCxHQUVXLE1BQW5CTSxFQUFRSSxPQUFnQixDQUMzQixNQUFNQyxRQUFhTCxFQUFRTSxPQUNyQkMsRUFBTWhDLFNBQVNpQyxjQUFjLE9BRS9CVixHQUNISCxPQUFPYyxRQUFRQyxVQUFVLENBQUMsRUFBRyxHQUFJaEIsR0FJbENhLEVBQUlJLFVBQVlOLEVBQ2hCLE1BQU1PLEVBQWFMLEVBQUkvQixjQUFjLFlBRXJDbEIsS0FBS1UsU0FBVzRDLEVBQVduQyxhQUFhLGlCQUV4Q25CLEtBQUtRLFdBQVdzQixTQUFTOUIsS0FBS1UsVUFFOUJWLEtBQUtnQixRQUFRcUMsVUFBWUMsRUFBV0QsVUFDcENyRCxLQUFLZ0IsUUFBUXVDLGFBQWEsZ0JBQWlCdkQsS0FBS1UsVUFFaERWLEtBQUs2QixLQUFPN0IsS0FBS29CLE1BQU1wQixLQUFLVSxVQUM1QlYsS0FBSzZCLEtBQUtFLFNBQ1YvQixLQUFLaUMsV0FDTGpDLEtBQUs2QixLQUFLSyxPQUVWbEMsS0FBS0ssa0JBQ0wsTUFDQXVDLFFBQVFDLElBQUksU0FBVUgsRUFBUWMsTUFFL0IsQ0FFRHZCLFdBQ0tqQyxLQUFLNkIsTUFBUTdCLEtBQUs2QixLQUFLSSxVQUFVakMsS0FBSzZCLEtBQUtJLFVBQy9DLENBRUQxQixTQUNLUCxLQUFLNkIsTUFBUTdCLEtBQUs2QixLQUFLdEIsUUFBUVAsS0FBSzZCLEtBQUt0QixTQUM3Q1AsS0FBS3lELE1BQVFwQixPQUFPcUIsc0JBQXNCMUQsS0FBS08sT0FBT1EsS0FBS2YsTUFDM0QsQ0FFRE0sZUFDQytCLE9BQU9zQixpQkFBaUIsV0FBWTNELEtBQUttQyxXQUFXcEIsS0FBS2YsT0FDekRxQyxPQUFPc0IsaUJBQWlCLFNBQVUzRCxLQUFLaUMsU0FBU2xCLEtBQUtmLE1BQ3JELENBRURLLG1CQUNDLE1BQU11RCxFQUFRM0MsU0FBUzRDLGlCQUFpQixNQUV4Q0MsRUFBQUEsRUFBQUEsTUFBS0YsR0FBT0csSUFDWEEsRUFBS0MsUUFBVUMsSUFDZCxNQUFNLEtBQUVDLEdBQVNILEVBQ2pCRSxFQUFNRSxpQkFDTm5FLEtBQUs4QixTQUFTLENBQUVNLElBQUs4QixHQUFyQixDQUhELEdBTUQsa0JDbklGRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL0Fib3V0J1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMnXHJcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lJ1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcclxuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nXHJcblxyXG5jbGFzcyBBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXHJcblxyXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxyXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcclxuXHRcdHRoaXMuY3JlYXRlUGFnZXMoKVxyXG5cclxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXHJcblx0XHR0aGlzLmFkZExpc3RlbmVycygpXHJcblxyXG5cdFx0dGhpcy51cGRhdGUoKVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlTmF2aWdhdGlvbigpIHtcclxuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcclxuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGVcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XHJcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxyXG5cdFx0dGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlQ29udGVudCgpIHtcclxuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSAvLyBvciB0aGlzLmNvbnRlbnQuZGF0YXNldC50ZW1wbGF0ZSBcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdUZW1wbGF0ZSBpcycgKyB0aGlzLnRlbXBsYXRlKVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFnZXMoKSB7XHJcblx0XHR0aGlzLnBhZ2VzID0ge1xyXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXHJcblx0XHRcdGRldGFpbDogbmV3IERldGFpbCgpLFxyXG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXHJcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxyXG5cdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXHJcblxyXG5cdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXHJcblxyXG5cdH1cclxuXHJcblx0b25QcmVsb2FkZWQoKSB7XHJcblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcclxuXHRcdHRoaXMub25SZXNpemUoKVxyXG5cdFx0dGhpcy5wYWdlLnNob3coKVxyXG5cdH1cclxuXHJcblx0b25Qb3BTdGF0ZSgpIHtcclxuXHRcdHRoaXMub25DaGFuZ2Uoe1xyXG5cdFx0XHR1cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuXHRcdFx0cHVzaDogdHJ1ZSxcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRhc3luYyBvbkNoYW5nZSh7IHVybCwgcHVzaCA9IHRydWUgfSkge1xyXG5cdFx0YXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxyXG5cclxuXHJcblx0XHRjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcclxuXHJcblx0XHRjb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuXHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxyXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuXHRcdFx0aWYgKHB1c2gpIHtcclxuXHRcdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gaHRtbFxyXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcclxuXHJcblx0XHRcdHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXHJcblxyXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcclxuXHJcblx0XHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxyXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcclxuXHJcblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cclxuXHRcdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXHJcblx0XHRcdHRoaXMub25SZXNpemUoKVxyXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXHJcblxyXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiRXJybzogXCIsIHJlcXVlc3QuZXJyb3IpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblJlc2l6ZSgpIHtcclxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB0aGlzLnBhZ2Uub25SZXNpemUoKVxyXG5cdH1cclxuXHJcblx0dXBkYXRlKCkge1xyXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB0aGlzLnBhZ2UudXBkYXRlKClcclxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcblx0fVxyXG5cclxuXHRhZGRMaXN0ZW5lcnMoKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXHJcblx0fVxyXG5cclxuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xyXG5cdFx0Y29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcclxuXHJcblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcclxuXHRcdFx0bGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHsgaHJlZiB9ID0gbGlua1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKHsgdXJsOiBocmVmIH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcbn1cclxuXHJcbm5ldyBBcHAoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3N2Y5NmVkNTQ4YWI5Nzk3YjRmXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiYWRkTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiYWJvdXQiLCJBYm91dCIsImhvbWUiLCJIb21lIiwicGFnZSIsIm9uQ2hhbmdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsIm9uUG9wU3RhdGUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJlcnJvciIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9