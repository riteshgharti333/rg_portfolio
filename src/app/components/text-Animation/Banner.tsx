"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Zap } from "lucide-react";
import * as THREE from "three";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiNodedotjs, SiMongodb, SiTailwindcss, SiPostgresql,
  SiFirebase, SiGit,
} from "react-icons/si";

/* ── DATA ─────────────────────────────────────────────────── */
const skills = [
  { icon: SiReact,       name: "React",      color: "#61DAFB" },
  { icon: SiNextdotjs,   name: "Next.js",    color: "#FFFFFF" },
  { icon: SiJavascript,  name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript,  name: "TypeScript", color: "#3178C6" },
  { icon: SiNodedotjs,   name: "Node.js",    color: "#3C873A" },
  { icon: SiMongodb,     name: "MongoDB",    color: "#00ED64" },
  { icon: SiTailwindcss, name: "Tailwind",   color: "#38BDF8" },
  { icon: SiPostgresql,  name: "PostgreSQL", color: "#336791" },
  { icon: SiFirebase,    name: "Firebase",   color: "#FFCA28" },
  { icon: SiGit,         name: "Git",        color: "#F1502F" },
];

const STATS = [
  { value: "50+", label: "Projects Shipped" },
  { value: "5+",  label: "Years Building"   },
  { value: "30+", label: "Happy Clients"    },
];

/* ── THREE.JS SCENE ───────────────────────────────────────── */
function ThreeScene({ containerRef }) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 500);
    camera.position.set(0, 0, 38);

    /* central crystal */
    const crystalGeo = new THREE.OctahedronGeometry(7, 0);
    const crystalMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPos;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          vPos    = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform float uTime;
        varying vec3  vNormal;
        varying vec3  vPos;
        void main(){
          float fres  = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 2.5);
          float pulse = 0.7 + 0.3 * sin(uTime * 1.2 + vPos.y * 0.8);
          vec3  base  = vec3(0.05, 0.65, 0.90);
          vec3  col   = mix(base * 0.5, base * 1.8, fres) * pulse;
          gl_FragColor = vec4(col, 0.15 + fres * 0.65);
        }`,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    scene.add(crystal);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9, wireframe: true, transparent: true, opacity: 0.16,
    });
    const wire = new THREE.Mesh(crystalGeo.clone(), wireMat);
    wire.scale.setScalar(1.05);
    scene.add(wire);

    /* orbiting rings */
    const rings = [];
    [
      { r: 11, tube: 0.06, rot: [Math.PI/2, 0, 0],          color: 0x0ea5e9, speed:  0.004 },
      { r: 13, tube: 0.04, rot: [Math.PI/4, Math.PI/6, 0],  color: 0x38bdf8, speed: -0.006 },
      { r: 15, tube: 0.03, rot: [-Math.PI/5, Math.PI/3, 0], color: 0x7dd3fc, speed:  0.003 },
    ].forEach((d) => {
      const geo  = new THREE.TorusGeometry(d.r, d.tube, 4, 120);
      const mat  = new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0.45 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.set(...d.rot);
      mesh.userData.speed = d.speed;
      scene.add(mesh);
      rings.push(mesh);
    });

    /* particle halo */
    const PCNT = 1400;
    const pPos = new Float32Array(PCNT * 3);
    const pSz  = new Float32Array(PCNT);
    for (let i = 0; i < PCNT; i++) {
      const theta   = Math.random() * Math.PI * 2;
      const phi     = Math.acos(2 * Math.random() - 1);
      const r       = 12 + Math.random() * 10;
      pPos[i*3]     = r * Math.sin(phi) * Math.cos(theta);
      pPos[i*3+1]   = r * Math.sin(phi) * Math.sin(theta);
      pPos[i*3+2]   = r * Math.cos(phi);
      pSz[i]        = Math.random() * 2.2 + 0.5;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("aSize",    new THREE.BufferAttribute(pSz,  1));
    const pMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        attribute float aSize;
        uniform  float uTime;
        varying  float vA;
        void main(){
          vec3 p  = position;
          float w = sin(uTime * 0.6 + p.x * 0.2) * 0.4;
          p.y    += w;
          vec4 mv = modelViewMatrix * vec4(p,1.0);
          gl_PointSize = aSize * (50.0 / -mv.z);
          gl_Position  = projectionMatrix * mv;
          vA = 0.4 + abs(w) * 0.6;
        }`,
      fragmentShader: `
        varying float vA;
        void main(){
          vec2 uv = gl_PointCoord - 0.5;
          if(length(uv) > 0.5) discard;
          float a = (0.5 - length(uv)) * 2.0 * vA;
          gl_FragColor = vec4(0.22, 0.78, 1.0, a * 0.65);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const halo = new THREE.Points(pGeo, pMat);
    scene.add(halo);

    scene.add(new THREE.AmbientLight(0x0ea5e9, 0.5));
    const pl = new THREE.PointLight(0x38bdf8, 3, 60);
    pl.position.set(10, 10, 15);
    scene.add(pl);

    /* mouse tilt */
    let mx = 0, my = 0;
    const onMM = (e) => {
      mx = (e.clientX / innerWidth  - 0.5) * 2;
      my = (e.clientY / innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMM);

    let t = 0, raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      t += 0.012;
      crystalMat.uniforms.uTime.value = t;
      pMat.uniforms.uTime.value       = t;
      crystal.rotation.y = t * 0.25;
      crystal.rotation.x = Math.sin(t * 0.18) * 0.3;
      wire.rotation.copy(crystal.rotation);
      rings.forEach((r) => { r.rotation.z += r.userData.speed; });
      halo.rotation.y = t * 0.04;
      scene.rotation.y += (mx * 0.25 - scene.rotation.y) * 0.04;
      scene.rotation.x += (-my * 0.15 - scene.rotation.x) * 0.04;
      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      if (!el) return;
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMM);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [containerRef]);

  return null;
}

/* ── MAGNETIC BUTTON ──────────────────────────────────────── */
function MagneticBtn({ children, className }) {
  const ref = useRef(null);
  const x   = useMotionValue(0);
  const y   = useMotionValue(0);
  const sx  = useSpring(x, { stiffness: 200, damping: 18 });
  const sy  = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width  / 2) * 0.35);
        y.set((e.clientY - r.top  - r.height / 2) * 0.35);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ── SKILL PILL ───────────────────────────────────────────── */
function SkillPill({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.85 + index * 0.045, duration: 0.4, ease: "backOut" }}
      whileHover={{ scale: 1.1, y: -3 }}
      className="group flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm transition-all duration-300 cursor-default"
      style={{ "--ac": skill.color }}
    >
      <Icon style={{ color: skill.color, fontSize: "13px" }} />
      <span className="text-[11px] font-medium tracking-wide text-white/50 group-hover:text-white/80 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

/* ── BANNER ───────────────────────────────────────────────── */
export default function Banner() {
  const sceneRef = useRef(null);

  /* cursor glow */
  const cx = useMotionValue(-400);
  const cy = useMotionValue(-400);
  const gx = useSpring(cx, { stiffness: 70, damping: 20 });
  const gy = useSpring(cy, { stiffness: 70, damping: 20 });

  useEffect(() => {
    const mv = (e) => { cx.set(e.clientX); cy.set(e.clientY); };
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#050608] text-white">

      {/* cursor glow */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full"
        style={{
          width: 520, height: 520,
          x: useTransform(gx, v => v - 260),
          y: useTransform(gy, v => v - 260),
          background: "radial-gradient(circle, rgba(14,165,233,0.065) 0%, transparent 65%)",
        }}
      />

      {/* bg layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(14,165,233,0.055),transparent)]" />
        <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#050608] via-[#050608]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050608] to-transparent" />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")` }}
        />
        {/* subtle horizontal rules */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute left-0 right-0 h-px bg-white/[0.02]" style={{ top: `${(i+1)*20}%` }} />
        ))}
        {/* vertical accent lines */}
        <div className="absolute inset-y-0 left-[55%] w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent hidden lg:block" />
      </div>

 

      {/* ── MAIN ── */}
      <div className="relative z-10 flex flex-1 flex-col lg:flex-row">

        {/* LEFT */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 lg:max-w-[52%] lg:px-16 lg:py-0">

          {/* overline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-9 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-gradient-to-r from-sky-400/80 to-sky-400/20" />
            <span className="text-[10px] uppercase tracking-[0.45em] text-sky-400/60">
              Full Stack Developer
            </span>
          </motion.div>

          {/* headline — editorial serif */}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 130 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="text-[15vw] font-black leading-[0.80] lg:text-[8vw]"
                style={{ fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif", letterSpacing: "-0.04em" }}
              >
                <span className="block text-white">RITESH</span>
                <span
                  className="block"
                  style={{ WebkitTextStroke: "1.5px rgba(14,165,233,0.45)", color: "transparent" }}
                >
                  GHARTI
                </span>
              </h1>
            </motion.div>
          </div>

          {/* role badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 flex items-center gap-3"
          >
            <div className="h-px w-6 bg-white/20" />
            <span className="text-sm font-light tracking-[0.35em] text-white/35 uppercase">
              Full Stack Engineer
            </span>
          </motion.div>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-[420px] text-[15px] leading-[1.95] text-white/35"
          >
            Crafting immersive digital experiences where
            engineering precision meets cinematic design.
            Fast. Scalable. Unforgettable.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <MagneticBtn className="group relative overflow-hidden rounded-full bg-sky-400 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.22em] text-black shadow-[0_0_28px_rgba(14,165,233,0.28)] transition-shadow hover:shadow-[0_0_48px_rgba(14,165,233,0.52)]">
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </MagneticBtn>

            <MagneticBtn className="group flex items-center gap-2 rounded-full border border-white/[0.09] px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.22em] text-white/40 backdrop-blur-sm transition-all hover:border-sky-400/25 hover:text-white/70">
              Resume
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </MagneticBtn>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="mt-14 flex gap-10 border-t border-white/[0.055] pt-9"
          >
            {STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 + i * 0.1 }}>
                <div className="text-[28px] font-black tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/22">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* skills pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {skills.map((s, i) => <SkillPill key={s.name} skill={s} index={i} />)}
          </motion.div>
        </div>

        {/* RIGHT — 3D */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.35 }}
          className="relative flex-1 lg:min-h-screen"
          style={{ minHeight: "420px" }}
        >
          <div ref={sceneRef} className="absolute inset-0" />
          <ThreeScene containerRef={sceneRef} />

          {/* overlay UI chips */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="absolute left-6 top-8 flex items-center gap-2 rounded-full border border-white/[0.07] bg-black/40 px-4 py-2 backdrop-blur-md"
            >
              <Zap size={11} className="text-sky-400" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                Three.js · GLSL Shaders
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
              className="absolute bottom-10 left-6 right-6 rounded-2xl border border-white/[0.055] bg-black/50 p-5 backdrop-blur-xl"
            >
              <div className="mb-3 flex items-center gap-2">
                <Layers size={12} className="text-sky-400/60" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-white/25">Specializations</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React / Next.js", "Node.js APIs", "3D & WebGL", "UI Systems"].map((tag) => (
                  <span key={tag} className="rounded-full border border-sky-400/12 bg-sky-400/[0.04] px-3 py-1 text-[11px] text-sky-300/50">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* divider line */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent hidden lg:block" />
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-20 flex items-center justify-between border-t border-white/[0.04] px-8 py-4 lg:px-16"
      >
        <span className="text-[10px] uppercase tracking-[0.32em] text-white/14">Based in Nepal</span>
        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <button key={s} className="text-[10px] uppercase tracking-[0.22em] text-white/18 hover:text-white/50 transition-colors">{s}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Code2 size={11} className="text-white/18" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/18">riteshgharti.dev</span>
        </div>
      </motion.footer>
    </section>
  );
}