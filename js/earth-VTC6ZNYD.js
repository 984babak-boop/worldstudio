import{$ as de,$a as Vt,A as Et,B as Le,D as Mt,Ea as Dt,F as E,Fa as W,G as yt,Ga as At,Ha as Ut,I as St,J as U,Ja as Oe,K as Fe,L as m,O as Ct,P as bt,R as F,Ra as Bt,T as Rt,U as me,V as Ve,Va as Lt,W as pe,X as z,Z as V,Za as Ft,_ as b,aa as _t,b as mt,ba as Pt,ca as ve,d as pt,da as Ht,e as he,ea as ge,f as dt,g as vt,h as gt,i as fe,j as xt,k as Tt,l as wt,la as Nt,u as A,ua as zt}from"./chunk-UK2PC5HR.js";import"./chunk-3TXHFKDN.js";var xe={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var _=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ci=new _t(-1,1,1,-1,0,1),Ie=class extends pe{constructor(){super(),this.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ve([0,2,0,0,2,0],2))}},hi=new Ie,B=class{constructor(e){this._mesh=new z(hi,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ci)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Te=class extends _{constructor(e,a){super(),this.textureID=a!==void 0?a:"tDiffuse",e instanceof b?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=V.clone(e.uniforms),this.material=new b({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new B(this.material)}render(e,a,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ae=class extends _{constructor(e,a){super(),this.scene=e,this.camera=a,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,a,i){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let h,M;this.inverse?(h=0,M=1):(h=1,M=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,h,4294967295),s.buffers.stencil.setClear(M),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},we=class extends _{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ee=class{constructor(e,a){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),a===void 0){let i=e.getSize(new E);this._width=i.width,this._height=i.height,a=new U(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:A}),a.texture.name="EffectComposer.rt1"}else this._width=a.width,this._height=a.height;this.renderTarget1=a,this.renderTarget2=a.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Te(xe),this.copyPass.material.blending=pt,this.clock=new Ft}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,a){this.passes.splice(a,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let a=this.passes.indexOf(e);a!==-1&&this.passes.splice(a,1)}isLastEnabledPass(e){for(let a=e+1;a<this.passes.length;a++)if(this.passes[a].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let a=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let h=this.passes[n];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),h.needsSwap){if(i){let M=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(M.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),d.setFunc(M.EQUAL,1,4294967295)}this.swapBuffers()}ae!==void 0&&(h instanceof ae?i=!0:h instanceof we&&(i=!1))}}this.renderer.setRenderTarget(a)}reset(e){if(e===void 0){let a=this.renderer.getSize(new E);this._pixelRatio=this.renderer.getPixelRatio(),this._width=a.width,this._height=a.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,a){this._width=e,this._height=a;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var re=class extends _{constructor(e,a,i=null,n=null,s=null){super(),this.scene=e,this.camera=a,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new F}render(e,a,i){let n=e.autoClear;e.autoClear=!1;let s,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=n}};var Ot={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Q=class x extends _{constructor(e,a,i,n){super(),this.strength=a!==void 0?a:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new E(e.x,e.y):new E(256,256),this.clearColor=new F(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new U(s,h,{type:A}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let S=0;S<this.nMips;S++){let f=new U(s,h,{type:A});f.texture.name="UnrealBloomPass.h"+S,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let G=new U(s,h,{type:A});G.texture.name="UnrealBloomPass.v"+S,G.texture.generateMipmaps=!1,this.renderTargetsVertical.push(G),s=Math.round(s/2),h=Math.round(h/2)}let M=Ot;this.highPassUniforms=V.clone(M.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new b({uniforms:this.highPassUniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader}),this.separableBlurMaterials=[];let d=[3,5,7,9,11];s=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let S=0;S<this.nMips;S++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(d[S])),this.separableBlurMaterials[S].uniforms.invSize.value=new E(1/s,1/h),s=Math.round(s/2),h=Math.round(h/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1;let P=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=P,this.bloomTintColors=[new m(1,1,1),new m(1,1,1),new m(1,1,1),new m(1,1,1),new m(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let I=xe;this.copyUniforms=V.clone(I.uniforms),this.blendMaterial=new b({uniforms:this.copyUniforms,vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,blending:he,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new F,this.oldClearAlpha=1,this.basic=new Rt,this.fsQuad=new B(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,a){let i=Math.round(e/2),n=Math.round(a/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new E(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,a,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let M=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this.fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=M.texture,this.separableBlurMaterials[d].uniforms.direction.value=x.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[d]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=x.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[d]),e.clear(),this.fsQuad.render(e),M=this.renderTargetsVertical[d];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=h}getSeperableBlurMaterial(e){let a=[];for(let i=0;i<e;i++)a.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new b({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new E(.5,.5)},direction:{value:new E(.5,.5)},gaussianCoefficients:{value:a}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new b({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Q.BlurDirectionX=new E(1,0);Q.BlurDirectionY=new E(0,1);var It={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Me=class extends _{constructor(){super();let e=It;this.uniforms=V.clone(e.uniforms),this.material=new Ut({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new B(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,a,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fe?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tt&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(a),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var O=Math.PI/180,fi=3986004e8/Math.pow(6371e3,3),Gt=2*Math.PI/86164,Xi=-52*O,mi=.12,Se=new m(0,1,0);function ye(x,e){let a=(90-x)*O,i=(e+180)*O;return new m(-Math.cos(i)*Math.sin(a),Math.cos(a),Math.sin(i)*Math.sin(a))}var pi=x=>new m().crossVectors(Se,x).normalize();function $i(x,e){let a=e.mobile,i=new Ht({canvas:x,antialias:!0,powerPreference:"high-performance",alpha:!1}),n=()=>x.clientWidth||innerWidth,s=()=>x.clientHeight||innerHeight,h=(()=>{try{let t=i.getContext(),o=t.getExtension("WEBGL_debug_renderer_info");return o?String(t.getParameter(o.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),M=a||/intel|hd graphics|uhd|iris|mali|adreno|powervr|swiftshader|llvmpipe|software|microsoft basic/i.test(h)||(navigator.hardwareConcurrency||8)<=4,d=a?"mobile":M?"low":"high",P=1,I=()=>Math.max(.6,Math.min(devicePixelRatio||1,d==="high"?2:d==="low"?1.25:1.5)*P);i.setPixelRatio(I()),i.setSize(n(),s(),!1),i.outputColorSpace=Le,i.toneMapping=fe;let S=new ge,f=new de(30,n()/s(),30,140),G=new ge,j=new de(50,n()/s(),.1,10),H=new Ee(i,new U(n()*i.getPixelRatio(),s()*i.getPixelRatio(),{type:A,samples:d==="high"?4:0}));H.setPixelRatio(i.getPixelRatio()),H.setSize(n(),s());let Ce=new re(S,f);Ce.clear=!1,Ce.clearDepth=!0;let Ge=()=>new E(n(),s()).multiplyScalar(d==="high"?1:.5),ke=new Q(Ge(),.6,.55,.82);H.addPass(new re(G,j)),H.addPass(Ce),H.addPass(ke),H.addPass(new Me);let be=`
  const vec3 BETA = vec3(0.066, 0.128, 0.27);  // zenith optical depth per channel
  const float HS = 0.001256;                   // 8 km scale height
  float airmass(float mu){                     // Kasten & Young, valid down to the horizon
    float z = degrees(acos(clamp(mu, 0.0, 1.0)));
    return 1.0 / (cos(radians(z)) + 0.50572 * pow(96.07995 - z, -1.6364));
  }
  float hash3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 x){ vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x), mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x), mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm(vec3 p){ return 0.5 * vnoise(p) + 0.25 * vnoise(p * 2.03) + 0.125 * vnoise(p * 4.01) + 0.0625 * vnoise(p * 8.1); }
  const vec3 NIGHT_TINT = vec3(0.30, 0.48, 1.0);
  float miePhase(float c){ const float g = 0.7; float k = 1.0 + g * g - 2.0 * g * c; return (1.0 - g * g) / (k * sqrt(k)); }
  float phase(float c){ return 0.92 * 0.75 * (1.0 + c * c) + 0.08 * miePhase(c); }
`,K=new ve;S.add(K);let D=new Nt(new Uint8Array([0,0,0,255]),1,1);D.needsUpdate=!0;let p={uDay:{value:D},uNight:{value:D},uBRC:{value:D},uClouds:{value:D},uDayP:{value:D},uNightP:{value:D},uPatch:{value:new St(190/360,75/180,290/360,150/180)},uUsePatch:{value:0},uSun:{value:new m(1,0,0)},uCloudU:{value:0},uTexel:{value:new E(1/2048,1/1024)},uLights:{value:1.6},uK:{value:.5},uNightLift:{value:.05},uDetail:{value:0},uRimHaze:{value:.55},uCloudTexel:{value:new E(1/2048,1/1024)}},kt=new b({uniforms:p,vertexShader:`
    varying vec2 vUv; varying vec3 vN; varying vec3 vE; varying vec3 vNo; varying vec3 vP; varying vec3 vO;
    void main(){
      vUv = uv; vO = normalize(position);
      vec3 n = normalize(position);
      vec3 e = normalize(vec3(position.z, 0.0, -position.x) + vec3(1e-5, 0.0, 0.0));
      mat3 m = mat3(modelMatrix);
      vN = normalize(m * n); vE = normalize(m * e); vNo = normalize(m * cross(n, e));
      vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`,fragmentShader:be+`
    uniform sampler2D uDay; uniform sampler2D uNight; uniform sampler2D uBRC; uniform sampler2D uClouds;
    uniform sampler2D uDayP; uniform sampler2D uNightP; uniform vec4 uPatch; uniform float uUsePatch;
    uniform vec3 uSun; uniform float uCloudU; uniform vec2 uTexel; uniform float uLights; uniform float uK;
    uniform float uNightLift; uniform float uDetail; uniform float uRimHaze;
    varying vec2 vUv; varying vec3 vN; varying vec3 vE; varying vec3 vNo; varying vec3 vP; varying vec3 vO;
    void main(){
      vec3 N0 = normalize(vN);
      vec3 V = normalize(cameraPosition - vP);
      vec3 L = normalize(uSun);
      vec2 uv = vUv;

      // global maps + sharper regional maps along the low-orbit ground track
      vec3 day = texture2D(uDay, uv).rgb;
      vec3 night = texture2D(uNight, uv).rgb;
      vec2 pu = (uv - uPatch.xy) / (uPatch.zw - uPatch.xy);
      float pe = uUsePatch * smoothstep(0.0, 0.02, min(min(pu.x, 1.0 - pu.x), min(pu.y, 1.0 - pu.y)));
      vec2 pc = clamp(pu, 0.0, 1.0);
      day = mix(day, texture2D(uDayP, pc).rgb, pe);
      night = mix(night, texture2D(uNightP, pc).rgb, pe);

      vec4 brc = texture2D(uBRC, uv);            // r: elevation, g: roughness (water = 0)
      float water = 1.0 - smoothstep(0.35, 0.65, brc.g);
      float land = 1.0 - water;
      float lumD = dot(day, vec3(0.2126, 0.7152, 0.0722));
      day = max(mix(vec3(lumD), day, 1.25), 0.0);                       // richer colour than the raw mosaic
      day *= mix(1.0, 0.82 + 0.36 * fbm(vO * 1800.0), uDetail * land);  // fine ground texture when seen from 400 km

      // terrain relief from the elevation map (mountain ranges shade near the terminator)
      vec3 E = normalize(vE), No = normalize(vNo);
      float hE = texture2D(uBRC, uv + vec2(uTexel.x, 0.0)).r - texture2D(uBRC, uv - vec2(uTexel.x, 0.0)).r;
      float hN = texture2D(uBRC, uv + vec2(0.0, uTexel.y)).r - texture2D(uBRC, uv - vec2(0.0, uTexel.y)).r;
      float cl = max(cos((uv.y - 0.5) * 3.14159265), 0.15);
      float k = 0.0065 / (2.0 * uTexel.x * 6.2831853);
      vec3 N = normalize(N0 - land * k * ((hE / cl) * E + hN * No));

      float mus = dot(N0, L);
      float NL = dot(N, L);
      float muv = max(dot(N0, V), 0.0);

      // cloud shadows: clouds sit ~11 km up, so their shadow falls away from the sun
      vec2 lt = vec2(dot(L, E), dot(L, No));
      float sd = 0.0018 * length(lt) / max(mus, 0.12);
      vec2 dir = lt / max(length(lt), 1e-4);
      vec2 suv = uv + vec2(uCloudU + sd * dir.x / (6.2831853 * cl), sd * dir.y / 3.14159265);
      float shadow = 1.0 - 0.6 * smoothstep(0.15, 0.85, texture2D(uClouds, suv).r);

      vec3 Tsun = exp(-BETA * airmass(mus)) * smoothstep(-0.01, 0.04, mus);
      vec3 Tview = exp(-BETA * airmass(muv));
      float ct = dot(-V, L);
      float ph = phase(ct);
      vec3 airLit = exp(-BETA * airmass(max(mus, 0.0)) * 0.5) * smoothstep(-0.18, 0.05, mus);
      vec3 inscatter = (1.0 - Tview) * airLit * ph * uK;

      vec3 col = day * max(NL, 0.0) * Tsun * shadow;
      col += day * vec3(0.025, 0.04, 0.08) * smoothstep(-0.15, 0.1, mus);   // twilight skylight

      // sun glint: a soft, wind-roughened reflection on water only
      vec3 H = normalize(L + V);
      float nh = max(dot(N0, H), 0.0);
      float fres = 0.02 + 0.98 * pow(1.0 - max(dot(H, V), 0.0), 5.0);
      col += Tsun * shadow * water * fres * (pow(nh, 260.0) * 5.0 + pow(nh, 40.0) * 0.12);

      // night side, as a long exposure sees it: dim blue land and sea, warm city lights
      float nightW = 1.0 - smoothstep(-0.14, 0.1, mus);
      vec3 nightGround = mix(vec3(lumD), day, 0.35) * NIGHT_TINT * uNightLift * mix(0.55, 1.0, land);
      float lum = dot(night, vec3(0.3, 0.59, 0.11));
      vec3 lights = night * smoothstep(0.04, 0.28, lum) * vec3(1.0, 0.78, 0.48);
      col += (nightGround + lights * uLights) * nightW;

      col = col * Tview + inscatter;
      // blue haze thickening toward the lit limb
      float rimF = pow(1.0 - muv, 3.0) * smoothstep(-0.15, 0.35, mus);
      col = mix(col, vec3(0.3, 0.55, 1.0) * (0.35 + 0.65 * max(mus, 0.0)), rimF * uRimHaze);
      col += vec3(0.28, 0.55, 1.0) * pow(1.0 - muv, 4.0) * smoothstep(-0.05, 0.6, mus) * 0.7 * uRimHaze;
      gl_FragColor = vec4(col, 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),Wt=new z(new W(1,a?200:360,a?100:180),kt);K.add(Wt);let Qt=new b({uniforms:{uClouds:p.uClouds,uNight:p.uNight,uSun:p.uSun,uCloudU:p.uCloudU,uK:p.uK,uLights:p.uLights,uNightLift:p.uNightLift,uDetail:p.uDetail,uCloudTexel:p.uCloudTexel},vertexShader:`
    varying vec2 vUv; varying vec3 vN; varying vec3 vE; varying vec3 vNo; varying vec3 vP; varying vec3 vO;
    void main(){
      vUv = uv; vO = normalize(position);
      vec3 n = normalize(position);
      vec3 e = normalize(vec3(position.z, 0.0, -position.x) + vec3(1e-5, 0.0, 0.0));
      mat3 m = mat3(modelMatrix);
      vN = normalize(m * n); vE = normalize(m * e); vNo = normalize(m * cross(n, e));
      vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`,fragmentShader:be+`
    uniform sampler2D uClouds; uniform sampler2D uNight; uniform vec3 uSun; uniform float uCloudU; uniform float uK;
    uniform float uLights; uniform float uNightLift; uniform float uDetail; uniform vec2 uCloudTexel;
    varying vec2 vUv; varying vec3 vN; varying vec3 vE; varying vec3 vNo; varying vec3 vP; varying vec3 vO;
    float dens(vec2 q){ return texture2D(uClouds, q).r; }
    void main(){
      vec2 q = vUv + vec2(uCloudU, 0.0);
      float c = dens(q);
      c *= mix(1.0, 0.45 + 1.1 * fbm(vO * 900.0), uDetail);   // break large blobs into finer cloud structure up close
      float a = smoothstep(0.15, 0.85, c);
      if (a < 0.004) discard;
      vec3 N0 = normalize(vN); vec3 V = normalize(cameraPosition - vP); vec3 L = normalize(uSun);
      vec3 E = normalize(vE), No = normalize(vNo);
      // thicker cloud stands taller: tilt the normal down the density slope so tops catch the light
      float cl = max(cos((vUv.y - 0.5) * 3.14159265), 0.15);
      float dE = dens(q + vec2(uCloudTexel.x, 0.0)) - dens(q - vec2(uCloudTexel.x, 0.0));
      float dN = dens(q + vec2(0.0, uCloudTexel.y)) - dens(q - vec2(0.0, uCloudTexel.y));
      float kc = 0.0035 / (2.0 * uCloudTexel.x * 6.2831853);
      vec3 Nc = normalize(N0 - kc * ((dE / cl) * E + dN * No));
      float mus = dot(N0, L); float muv = max(dot(N0, V), 0.0);
      vec3 Tsun = exp(-BETA * 0.3 * airmass(mus)) * smoothstep(-0.03, 0.05, mus);
      vec3 Tview = exp(-BETA * 0.3 * airmass(muv));
      float ct = dot(-V, L);
      float ph = phase(ct);
      vec3 airLit = exp(-BETA * airmass(max(mus, 0.0)) * 0.15) * smoothstep(-0.18, 0.05, mus);
      float diff = max(dot(Nc, L), 0.0) * 0.8 + 0.2 * max(mus, 0.0);
      vec3 col = vec3(0.92) * diff * Tsun * (0.75 + 0.25 * a);
      // night: faint moonlit tops and the warm glow of cities underneath
      float nightW = 1.0 - smoothstep(-0.14, 0.1, mus);
      vec3 nl = texture2D(uNight, vUv).rgb;
      float lum = dot(nl, vec3(0.3, 0.59, 0.11));
      col += (NIGHT_TINT * uNightLift * 1.6 * (0.6 + 0.4 * a) + nl * smoothstep(0.04, 0.28, lum) * vec3(1.0, 0.75, 0.45) * uLights * 0.35) * nightW;
      col = col * Tview + (1.0 - Tview) * airLit * ph * uK;
      gl_FragColor = vec4(col, a * 0.96);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,transparent:!0,depthWrite:!1}),We=new z(new W(1.0018,a?160:256,a?80:128),Qt);We.renderOrder=1,K.add(We);let jt=1.2,Kt=new b({uniforms:{uSun:p.uSun,uKL:{value:.5},uNightRim:{value:.16},uHS:{value:.0044},uHalo:{value:1}},vertexShader:"varying vec3 vP; void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:be+`
    uniform vec3 uSun; uniform float uKL; uniform float uNightRim; uniform float uHS; uniform float uHalo; varying vec3 vP;
    void main(){
      vec3 c = cameraPosition; vec3 d = normalize(vP - c);
      float tca = -dot(c, d);
      float b = length(cross(c, d));             // closest distance of the ray to Earth's centre
      if (b < 1.0 && tca > 0.0) discard;         // ray hits the ground: the ground shader covers it
      float h = max(b - 1.0, 0.0);
      vec3 nt = (c + d * tca) / b;
      float rho = exp(-h / uHS);                  // visual scale height ~3.5x the real one, like cinematic renders
      vec3 tau = BETA * sqrt(6.2831853 / uHS) * rho;
      vec3 T = exp(-tau);
      vec3 L = normalize(uSun);
      float mus = dot(nt, L);
      float dip = sqrt(2.0 * h);
      float lit = smoothstep(-dip - 0.02, -dip + 0.01, mus);
      vec3 sunT = exp(-BETA * airmass(clamp(mus + dip, 0.0, 1.0)) * rho);
      float ct = dot(d, L);
      float ph = phase(ct);
      vec3 S = (1.0 - T) * sunT * lit * ph * uKL;
      S += vec3(0.05, 0.12, 0.30) * uNightRim * (1.0 - T) * (1.0 - lit);
      // cinematic glow of sunlit air: strongest where the Sun shines on the limb, gold at sunrise and sunset,
      // and a bright ring by forward scattering when the Sun is behind Earth; almost nothing on the night side
      float sunSide = smoothstep(-0.22, 0.55, mus);
      float twilight = smoothstep(-0.22, 0.0, mus) * (1.0 - smoothstep(0.0, 0.3, mus));
      vec3 haloC = mix(vec3(0.38, 0.66, 1.0), vec3(1.0, 0.55, 0.22), twilight);
      float fwd = miePhase(ct) * 0.06;                 // forward scattering toward the camera
      haloC = mix(haloC, vec3(1.0, 0.86, 0.62), clamp(fwd * 0.5, 0.0, 0.7));
      float glow = (exp(-h / 0.009) * 1.3 + exp(-h / 0.04) * 0.45) * (1.0 - smoothstep(0.05, 0.19, h));   // melts into the sky, no edge
      S += haloC * uHalo * glow * (sunSide * (0.8 + 0.6 * smoothstep(0.2, 1.0, mus)) + fwd * smoothstep(-0.3, 0.1, mus));
      S += vec3(0.08, 0.28, 0.12) * 0.06 * exp(-pow((h - 0.0145) / 0.0011, 2.0)) * (1.0 - lit);   // faint green airglow on the night limb
      float a = clamp(1.0 - (T.r + T.g + T.b) / 3.0, 0.0001, 1.0);
      gl_FragColor = vec4(S, a);   // premultiplied: result = S + background * (1 - a)
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,transparent:!0,depthWrite:!1,premultipliedAlpha:!0}),Qe=new z(new W(jt,a?160:256,a?80:128),Kt);Qe.renderOrder=2,S.add(Qe);let je=-52*O,q=new ve;q.rotation.y=je,G.add(q);let se={uMap:{value:D},uI:{value:1},uFloor:{value:.0016}},Ke=new z(new W(5,a?96:160,a?48:80),new b({uniforms:se,side:mt,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D uMap; uniform float uI; uniform float uFloor; varying vec2 vUv;
    void main(){
      vec3 c = texture2D(uMap, vec2(1.0 - vUv.x, vUv.y)).rgb;      // the map is drawn for viewing from inside: RA grows to the left
      c = max(c - uFloor, 0.0) / (1.0 - uFloor);                    // clean black sky between the stars
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = max(mix(vec3(l), c, 1.3), 0.0);                           // a little more colour in the Milky Way's dust and star clouds
      gl_FragColor = vec4(c * uI, 1.0);
    }`}));Ke.renderOrder=0,q.add(Ke);let qe={uI:{value:1},uPx:{value:i.getPixelRatio()}};function qt(t){t=Math.min(Math.max(t,-.4),2);let o=46*(1/(.92*t+1.7)+1/(.92*t+.62)),r=o<=66?255:329.7*Math.pow(o-60,-.1332),l=o<=66?99.47*Math.log(o)-161.12:288.12*Math.pow(o-60,-.0755),u=o>=66?255:o<=19?0:138.52*Math.log(o-10)-305.04,c=[r,l,u].map(y=>Math.min(Math.max(y,0),255)/255),T=Math.max(...c);return c.map(y=>Math.pow(.5+.5*y/T,2.2))}fetch("/tex/stars_bsc.json").then(t=>t.json()).then(({s:t})=>{let o=t.length/4,r=new Float32Array(o*3),l=new Float32Array(o*3),u=new Float32Array(o),c=new m;for(let v=0;v<o;v++){let oe=t[4*v],ht=t[4*v+1],ft=t[4*v+2],li=t[4*v+3];c.copy(ye(ht,oe)).multiplyScalar(4.8),r.set([c.x,c.y,c.z],3*v);let ui=Math.pow(10,-.4*(ft-1)),Ue=Math.min(2.4,.05+.85*ui),Be=qt(li);l.set([Be[0]*Ue,Be[1]*Ue,Be[2]*Ue],3*v),u[v]=1.4+3*Math.pow(10,-.15*ft)}let T=new pe;T.setAttribute("position",new me(r,3)),T.setAttribute("aColor",new me(l,3)),T.setAttribute("aSize",new me(u,1));let y=new zt(T,new b({uniforms:qe,transparent:!0,depthWrite:!1,depthTest:!1,blending:he,vertexShader:`attribute vec3 aColor; attribute float aSize; uniform float uI; uniform float uPx; varying vec3 vC;
      void main(){ vC = aColor * uI; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aSize * uPx; }`,fragmentShader:`varying vec3 vC;
      void main(){ vec2 d = gl_PointCoord * 2.0 - 1.0; float r2 = dot(d, d); if (r2 > 1.0) discard;
        gl_FragColor = vec4(vC * (exp(-r2 * 7.0) + 0.08 * exp(-r2 * 2.0)), 1.0); }`}));y.renderOrder=1,q.add(y)}).catch(()=>{});let Yt=new Bt,Xt=Math.min(8,i.capabilities.getMaxAnisotropy()),Y=(t,{srgb:o=!0,repeat:r=!1}={})=>new Promise((l,u)=>Yt.load(t,c=>{c.colorSpace=o?Le:Et,c.anisotropy=Xt,r&&(c.wrapS=wt),l(c)},void 0,u)),k=(t,o)=>{let r=t.value;t.value=o,r&&r!==D&&r.dispose()},Re=[],ne=!1,X=0;function $(t,o,r){Re.push(()=>{i.initTexture(o),k(t,o),r&&r(o)})}async function $t(t,o=()=>{},r=!1){let[l,u,c,T]=await Promise.all([Y(`/tex/day_${t}.jpg`).then(v=>(o(),v)),Y(`/tex/night_${t}.jpg`).then(v=>(o(),v)),Y(`/tex/brc_${t}.jpg`,{srgb:!1}).then(v=>(o(),v)),Y(`/tex/clouds_${t}.jpg`,{srgb:!1,repeat:!0}).then(v=>(o(),v))]),y=()=>{p.uTexel.value.set(1/c.image.width,1/c.image.height),p.uCloudTexel.value.set(1/T.image.width,1/T.image.height)};if(r){$(p.uDay,l),$(p.uNight,u),$(p.uClouds,T),$(p.uBRC,c,y);return}[l,u,c,T].forEach(v=>i.initTexture(v)),k(p.uDay,l),k(p.uNight,u),k(p.uBRC,c),k(p.uClouds,T),y()}let Jt=(t,o=()=>{},r=!1)=>Y(`/tex/stars_${t}.jpg`).then(l=>{o(),r?$(se.uMap,l):(i.initTexture(l),k(se.uMap,l))}),C=null,J=new m,R={z:1,x:.8,y:.5,roll:-8,h:0},Z=new m,Zt=new m,Ye=new m,_e=new m,Xe=new Ct,Pe=new Fe,$e=new Fe,Je=new bt,Ze=new m;function ei(t){let o=Math.sqrt(fi/Math.pow(C.r,3)),r=o*t;Z.copy(C.P0).multiplyScalar(Math.cos(r)).addScaledVector(C.V0,Math.sin(r)).multiplyScalar(C.r),Zt.copy(C.P0).multiplyScalar(-Math.sin(r)).addScaledVector(C.V0,Math.cos(r)).normalize()}function et(t,o){ei(t),f.position.copy(Z);let r=Ye.copy(Z).negate().normalize(),l=_e.copy(Se).addScaledVector(r,-Se.dot(r)).normalize().applyAxisAngle(r,R.roll*O);if(Xe.lookAt(Z,Ze,l),Pe.setFromRotationMatrix(Xe),o){let u=f.fov*O*.0045,c=o;Je.set(u*(Math.sin(c*.11+2)*.6+Math.sin(c*.053)*.4),u*(Math.sin(c*.13)*.6+Math.sin(c*.071+1)*.4),u*.5*Math.sin(c*.09+3)),$e.setFromEuler(Je),Pe.multiply($e)}f.quaternion.copy(Pe),f.updateMatrixWorld()}function tt(){let t=n(),o=s(),r=t/o;f.aspect=r,j.aspect=r;let l=a?.9*r:Math.min(.92,.95*.5*r);f.fov=2*Math.atan(Math.tan(Math.asin(1/C.r))/(l*R.z))/O,f.near=C.r-10,f.far=C.r+100,f.setViewOffset(t,o,(.5-R.x)*t,(.5-R.y)*o,t,o),j.fov=(a?58:40)*(1+.06*(1-Math.min(R.z,2))),f.updateProjectionMatrix(),j.updateProjectionMatrix()}function it(){C={r:40,P0:ye(18,40),V0:pi(ye(18,40)),idleRate:540};let t={...R};Object.assign(R,{z:1,x:.8,y:.5,roll:-8}),tt(),et(0,0);let o=new m().setFromMatrixColumn(f.matrixWorld,0),r=new m().setFromMatrixColumn(f.matrixWorld,1),l=Z.clone().normalize();J.copy(o).multiplyScalar(-.9).addScaledVector(r,.24).addScaledVector(l,.36).normalize();let u=new m().crossVectors(C.P0,J).normalize();u.y*C.P0.y>0&&u.negate(),C.V0=u,Object.assign(R,t),p.uSun.value.copy(J)}let w={rect:null,o:0,rx:.5,ry:0,vx:0,vy:.35,drag:!1},ee=new ge,te=new de(32,1,.1,20);te.position.set(0,0,5.2);{let t=new Pt(i);ee.environment=t.fromScene(new Vt,.04).texture,t.dispose()}let ie=new ve;ee.add(ie);let ot=new Oe({color:13623551,metalness:.85,roughness:.14,clearcoat:1,clearcoatRoughness:.08,iridescence:1,iridescenceIOR:1.35,flatShading:!0,envMapIntensity:1.5,transparent:!0}),ti=new z(new Dt(1.05,0),ot);ie.add(ti);let He=new Oe({color:16767392,metalness:1,roughness:.22,envMapIntensity:1.3,transparent:!0}),at=new z(new At(1.62,.035,16,160),He);at.rotation.x=1.2,ie.add(at);let rt=new z(new W(.13,32,16),He);ie.add(rt);let st=new Lt(16777215,2.2);st.position.set(-3,2,4),ee.add(st);function ii(t,o){if(!w.rect||w.o<.01)return;let r=w.rect,l=s();if(r.width<8||r.bottom<0||r.top>l)return;w.drag||(w.vy+=(.35-w.vy)*Math.min(1,t*.8),w.vx*=Math.exp(-t*2)),w.ry+=w.vy*t,w.rx+=w.vx*t,w.rx=Math.max(-1.2,Math.min(1.2,w.rx)),ie.rotation.set(w.rx,w.ry,0);let u=o*.9;rt.position.set(Math.cos(u)*1.62,0,Math.sin(u)*1.62).applyAxisAngle(new m(1,0,0),1.2-Math.PI/2),ot.opacity=He.opacity=w.o,te.aspect=r.width/r.height,te.updateProjectionMatrix();let c=r.left,T=l-r.bottom;i.setScissorTest(!0),i.setViewport(c,T,r.width,r.height),i.setScissor(c,T,r.width,r.height),i.autoClear=!1,i.clearDepth();let y=i.toneMappingExposure;i.toneMappingExposure=1,i.render(ee,te),i.toneMappingExposure=y,i.setScissorTest(!1),i.setViewport(0,0,n(),s()),i.autoClear=!0}let le=new m,oi=new m,L=1,Ne=!0,ze=0,ai=0;function nt(t,o,r){tt(),ai=t,K.rotation.y=Gt*t,q.rotation.y=je+Gt*t*mi,p.uCloudU.value=t*5e-7,et(o,r);let l=f.position,u=0;for(let T=0;T<9;T++)for(let y=0;y<9;y++){le.set(-.9+T*.225,-.9+y*.225,.5).unproject(f).sub(l).normalize();let v=-l.dot(le),oe=oi.crossVectors(l,le).length();v>0&&oe<1&&_e.copy(l).addScaledVector(le,v-Math.sqrt(1-oe*oe)).dot(J)>.02&&u++}u/=81;let c=1/(1+3.2*u);Ne&&(L=c,Ne=!1),L+=(c-L)*.06,i.toneMappingExposure=1+.35*L,se.uI.value=.55+1.9*L,qe.uI.value=.6+1.2*L,p.uLights.value=.6+.8*L,j.quaternion.copy(f.quaternion)}let ue=new m,N=new m,lt=new m;function ce(t,o){return ue.copy(t).project(f),o.x=(ue.x+1)/2*n(),o.y=(1-ue.y)/2*s(),o.z=ue.z,o}function ri(t={}){ce(Ze,t);let o=t.x,r=t.y;N.setFromMatrixColumn(f.matrixWorld,0).multiplyScalar(1),ce(N,t);let l=Math.hypot(t.x-o,t.y-r);return t.x=o,t.y=r,t.r=l,t}function si(t,o,r={}){return N.copy(ye(t,o)).applyAxisAngle(Se,K.rotation.y),lt.copy(f.position).sub(N).normalize(),r.facing=N.dot(lt),r.lit=N.dot(J),ce(N,r)}let De=new m;function ni(t,o,r,l={}){let u=Ye.setFromMatrixColumn(f.matrixWorld,0),c=_e.setFromMatrixColumn(f.matrixWorld,1);return De.copy(f.position).normalize(),N.copy(u).multiplyScalar(Math.cos(t)*o).addScaledVector(De,Math.sin(t)*o*Math.cos(r)).addScaledVector(c,Math.sin(t)*o*Math.sin(r)),l.front=N.dot(De),ce(N,l)}let g={last:0,sum:0,n:0,good:0};function Ae(){let t=n(),o=s();i.setPixelRatio(I()),i.setSize(t,o,!1),H.setPixelRatio(i.getPixelRatio()),H.setSize(t,o),ke.resolution.copy(Ge())}it();let ut=n(),ct=s();return{cam:R,camera:f,renderer:i,gem:w,loadGlobal:$t,loadSky:Jt,disc:ri,projectLL:si,projectOrbit:ni,get maxTex(){return i.capabilities.maxTextureSize},tier:d,gpu:h,get scale(){return P},get hold(){return ne},set hold(t){ne=!!t,t?(g.sum=0,g.n=0,g.last=0):X=performance.now()+1500},warm(){try{i.compile(ee,te),i.compile(S,f)}catch{}},tick(t,o){let r=performance.now();if(ne||r<X)g.sum=0,g.n=0,g.last=0;else if(Re.length)Re.shift()(),g.last=0;else if(g.last){let u=r-g.last;u<250&&(g.sum+=u,g.n++)}if(!ne&&r>=X&&(g.last=r),g.n>=45){let u=g.sum/g.n;g.sum=0,g.n=0,u>21&&P>.6?(P=Math.max(.6,P-.12),g.good=0,Ae(),X=r+1500):u<15.5&&P<1?++g.good>=6&&(P=Math.min(1,P+.08),g.good=0,Ae(),X=r+1500):g.good=0}ze+=t*C.idleRate;let l=R.h*3600+ze;nt(l,R.h*3600+.2*ze,o),H.render(),ii(t,o)},snap(){Ne=!0},resize(t){let o=n(),r=s();if(o===ut&&r===ct&&t===a)return;ut=o,ct=r;let l=t!==a;a=t,Ae(),l&&it()},firstFrame(){nt(R.h*3600,R.h*3600,0),H.render()}}}export{$i as createEarth,ye as ll};
