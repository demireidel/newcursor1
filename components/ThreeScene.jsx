"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

function PlaceholderCutaway(){
  const rot = useRef();
  useFrame(({clock}) => { if(rot.current) rot.current.rotation.y = Math.sin(clock.getElapsedTime()*0.25)*0.15; });
  return (
    <group ref={rot}>
      <mesh position={[0,2.2,0]}>
        <sphereGeometry args={[2.2, 48, 48, 0, Math.PI*2, 0, Math.PI/2]} />
        <meshStandardMaterial color="#1f2937" metalness={0.1} roughness={0.9} transparent opacity={0.25} />
      </mesh>
      <mesh position={[0,0.5,0]} rotation={[0,Math.PI*0.15,0]}>
        <cylinderGeometry args={[1.1,1.1,2.2,64,1,true,0,Math.PI*1.2]} />
        <meshStandardMaterial color="#6b7280" metalness={0.2} roughness={0.7} transparent opacity={0.35} />
      </mesh>
      <mesh position={[0,0.5,0]}>
        <cylinderGeometry args={[0.9,0.9,2.0,64]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[0,0.0,0]}>
        <cylinderGeometry args={[0.45,0.45,0.6,48]} />
        <meshStandardMaterial color="#39FF14" emissive="#39FF14" emissiveIntensity={0.25} />
      </mesh>
      <mesh position={[1.3,0.5,0]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.18,0.18,1.2,32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[-1.3,0.5,0]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.18,0.18,1.2,32]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0,2.2,0]}>
        <cylinderGeometry args={[0.25,0.25,0.5,32]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.3} roughness={0.4} />
      </mesh>
      <mesh position={[0.8,0.5,0]} rotation={[0,0,0.3]}>
        <torusGeometry args={[1.0, 0.06, 16, 64, Math.PI/2]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[-0.8,0.5,0]} rotation={[0,0,-0.3]}>
        <torusGeometry args={[1.0, 0.06, 16, 64, Math.PI/2]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.4} roughness={0.35} />
      </mesh>
    </group>
  );
}

export default function ThreeScene(){
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)'); const on = () => setIsMobile(mq.matches); on(); mq.addEventListener('change', on); return () => mq.removeEventListener('change', on);
  }, []);
  if (isMobile) {
    return (
      <div className="relative w-full h-full grid place-items-center bg-slate-950">
        <img src="/images/acr300-flythrough-frame.png" alt="ACR-300 mobile" className="w-full h-full object-cover opacity-90"/>
        <div className="legend absolute bottom-2">
          <span><span className="dot" style={{background:'var(--cn-accent)'}}></span> Núcleo</span>
          <span><span className="dot" style={{background:'#cbd5e1'}}></span> HSG</span>
          <span><span className="dot" style={{background:'#94a3b8'}}></span> Contención</span>
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position:[3,2,4], fov:45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <Suspense fallback={null}>
          <PlaceholderCutaway />
          <Environment preset="warehouse" />
        </Suspense>
        <OrbitControls enableDamping makeDefault />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="hotspot" style={{left:'50%', top:'52%'}} /><div className="hotspot-label" style={{left:'50%', top:'52%'}}>Núcleo / Core</div>
        <div className="hotspot" style={{left:'72%', top:'46%'}} /><div className="hotspot-label" style={{left:'72%', top:'46%'}}>Generador de vapor horizontal / HSG</div>
        <div className="hotspot" style={{left:'50%', top:'28%'}} /><div className="hotspot-label" style={{left:'50%', top:'28%'}}>Contención / Containment</div>
      </div>
    </div>
  );
}
