/*! For license information please see main.114a9f97c645a1c4dc2e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>a});var t=n("./node_modules/ogl/src/core/Renderer.js"),o=n("./node_modules/ogl/src/core/Camera.js"),s=n("./node_modules/ogl/src/core/Transform.js");Object(function(){var e=new Error("Cannot find module 'Home'");throw e.code="MODULE_NOT_FOUND",e}());class a{constructor(){this.createRendere(),this.createCamera(),this.createScene(),this.createHome()}createRendere(){this.renderer=new t.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new s.Transform}createHome(){this.home=new Object(function(){var e=new Error("Cannot find module 'Home'");throw e.code="MODULE_NOT_FOUND",e}())()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=3,this.mesh.rotation.y+=3,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"39d846c7355963174008"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMTRhOWY5N2M2NDVhMWM0ZGMyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVhBS2UsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGdCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUNMLENBRURILGdCQUNDRCxLQUFLSyxTQUFXLElBQUlDLEVBQUFBLFNBRXBCTixLQUFLTyxHQUFLUCxLQUFLSyxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVYsS0FBS08sR0FBR0ksT0FDbEMsQ0FFRFQsZUFDQ0YsS0FBS1ksT0FBUyxJQUFJQyxFQUFBQSxPQUFPYixLQUFLTyxJQUM5QlAsS0FBS1ksT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWixjQUNDSCxLQUFLZ0IsTUFBUSxJQUFJQyxFQUFBQSxTQUNqQixDQUVEYixhQUNDSixLQUFLa0IsS0FBTyxJQUFJQyxPQUFBQSxXQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxNQUFBQSw2QkFBQUEsTUFBQUEsRUFBQUEsS0FBQUEsbUJBQUFBLENBQUFBLENBQUFBLEdBQUosRUFDWixDQUVEQyxXQUNDcEIsS0FBS0ssU0FBU2dCLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEeEIsS0FBS1ksT0FBT2EsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFHcEMsQ0FFREcsU0FDQzNCLEtBQUs0QixLQUFLQyxTQUFTQyxHQUFLLEVBQ3hCOUIsS0FBSzRCLEtBQUtDLFNBQVNFLEdBQUssRUFFeEIvQixLQUFLSyxTQUFTMkIsT0FBTyxDQUNwQnBCLE9BQVFaLEtBQUtZLE9BQ2JJLE1BQU9oQixLQUFLZ0IsT0FFYixrQkNuREZpQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xyXG5cclxuaW1wb3J0IEhvbWUgZnJvbSAnSG9tZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlKClcclxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcclxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxyXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVJlbmRlcmUoKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcclxuXHJcblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxyXG5cclxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXHJcblx0fVxyXG5cclxuXHRjcmVhdGVDYW1lcmEoKSB7XHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTY2VuZSgpIHtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUhvbWUoKSB7XHJcblx0XHR0aGlzLmhvbWUgPSBuZXcgSG9tZSgpXHJcblx0fVxyXG5cclxuXHRvblJlc2l6ZSgpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG5cclxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcclxuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodFxyXG5cdFx0fSlcclxuXHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueCArPSAzXHJcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueSArPSAzXHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xyXG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxyXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZVxyXG5cdFx0fSlcclxuXHR9XHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOWQ4NDZjNzM1NTk2MzE3NDAwOFwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImhvbWUiLCJIb21lIiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJtZXNoIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==