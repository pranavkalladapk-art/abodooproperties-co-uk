import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#C6A96B';

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return m;
}

function EdgeBox({ args, opacity = 0.45, color = GOLD, ...props }: any) {
  const geom = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(...args)), [args.join(',')]);
  return (
    <lineSegments geometry={geom} {...props}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </lineSegments>
  );
}

function HouseGroup({ hovered, setHovered, anyHovered }: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const keyRef = useRef<THREE.Group>(null!);
  const baseY = 0;
  const targetScale = useRef(1);
  const opacity = useRef(0.45);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = baseY + Math.sin(clock.elapsedTime * 0.6) * 0.15;
      groupRef.current.rotation.y += 0.003;
      const want = hovered ? 1.07 : 1;
      targetScale.current += (want - targetScale.current) * 0.1;
      groupRef.current.scale.setScalar(targetScale.current);
    }
    if (keyRef.current) keyRef.current.rotation.z += 0.001;
    const wantOp = anyHovered && !hovered ? 0.18 : 0.45;
    opacity.current += (wantOp - opacity.current) * 0.1;
    groupRef.current?.traverse((o: any) => {
      if (o.material && o.material.type === 'LineBasicMaterial') o.material.opacity = opacity.current;
    });
  });

  const roofGeom = useMemo(() => new THREE.EdgesGeometry(new THREE.CylinderGeometry(0, 1.4, 1.0, 4)), []);

  return (
    <group ref={groupRef} position={[-4.5, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered('house'); }}
      onPointerOut={() => setHovered(null)}>
      <EdgeBox args={[1.8, 1.4, 1.2]} />
      <lineSegments geometry={roofGeom} position={[0, 1.2, 0]} rotation={[0, Math.PI / 4, 0]}>
        <lineBasicMaterial color={GOLD} transparent opacity={0.45} />
      </lineSegments>
      <mesh position={[0, -0.35, 0.61]}>
        <planeGeometry args={[0.3, 0.55]} />
        <meshStandardMaterial color={GOLD} metalness={0.6} roughness={0.3} transparent opacity={0.4} />
      </mesh>
      <group ref={keyRef} position={[1.3, 0.3, 0.4]} rotation={[0, 0, Math.PI / 5]}>
        <mesh>
          <torusGeometry args={[0.18, 0.05, 16, 32]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.4, 12]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0.5, -0.07, 0]}>
          <boxGeometry args={[0.07, 0.04, 0.04]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0.42, -0.07, 0]}>
          <boxGeometry args={[0.07, 0.04, 0.04]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0} />
        </mesh>
      </group>
      {hovered === 'house' && (
        <Html position={[0, -1.5, 0]} center occlude={false}>
          <div style={{ font: '600 9px Inter', letterSpacing: '0.15em', color: GOLD, opacity: 0.85, whiteSpace: 'nowrap' }}>
            RENT TO SA
          </div>
        </Html>
      )}
    </group>
  );
}

function FlipGroup({ hovered, setHovered, anyHovered }: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const coinsRef = useRef<THREE.Group>(null!);
  const targetScale = useRef(1);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.52 + 1.2) * 0.18;
      groupRef.current.rotation.y += 0.0022;
      const want = hovered ? 1.07 : 1;
      targetScale.current += (want - targetScale.current) * 0.1;
      groupRef.current.scale.setScalar(targetScale.current);
    }
    if (coinsRef.current) coinsRef.current.children.forEach((c: any) => (c.rotation.y += 0.009));
  });

  const barsGeom = useMemo(() => {
    const pts: number[] = [];
    [[-0.7, 0.4], [-0.35, 0.85], [0.0, 1.45]].forEach(([x, h]) => {
      pts.push(x, -1, 0, x, -1 + h, 0);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered('flip'); }}
      onPointerOut={() => setHovered(null)}>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <cylinderGeometry args={[0.06, 0.06, 2.2, 12]} />
        <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.1} />
      </mesh>
      <mesh position={[0.78, 0.78, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.22, 0.5, 16]} />
        <meshStandardMaterial color={GOLD} metalness={0.85} roughness={0.1} />
      </mesh>
      <group ref={coinsRef} position={[-0.7, -0.3, 0]}>
        {[-1.0, -0.88, -0.76].map((y, i) => (
          <mesh key={i} position={[0, y + 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.06, 24]} />
            <meshStandardMaterial color={GOLD} metalness={1} roughness={0} />
          </mesh>
        ))}
      </group>
      <lineSegments geometry={barsGeom}>
        <lineBasicMaterial color={GOLD} transparent opacity={0.15} />
      </lineSegments>
      <Html position={[1.3, 1.1, 0]} center occlude={false}>
        <div style={{
          font: '700 10px Inter', color: GOLD, background: 'rgba(11,20,38,0.85)',
          border: '1px solid rgba(198,169,107,0.4)', borderRadius: 5, padding: '4px 9px', whiteSpace: 'nowrap',
        }}>+22% ROI</div>
      </Html>
      {hovered === 'flip' && (
        <Html position={[0, -1.6, 0]} center occlude={false}>
          <div style={{ font: '600 9px Inter', letterSpacing: '0.15em', color: GOLD, opacity: 0.85, whiteSpace: 'nowrap' }}>
            FLIP & EXIT
          </div>
        </Html>
      )}
    </group>
  );
}

function TowerGroup({ hovered, setHovered, isMobile }: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const targetScale = useRef(1);
  const winRefs = useRef<THREE.Mesh[]>([]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.57 + 2.4) * 0.12;
      groupRef.current.rotation.y += 0.0028;
      const want = hovered ? 1.07 : 1;
      targetScale.current += (want - targetScale.current) * 0.1;
      groupRef.current.scale.setScalar(targetScale.current);
    }
    winRefs.current.forEach((w, i) => {
      if (w?.material) (w.material as any).opacity = Math.sin(clock.elapsedTime * 0.9 + i) * 0.1 + 0.3;
    });
  });

  const windows = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
    windows.push([(c - 1) * 0.3, 1.0 - r * 0.55, 0.43]);
  }

  return (
    <group ref={groupRef} position={[4.8, 0, 0]}
      onPointerOver={(e) => { e.stopPropagation(); setHovered('tower'); }}
      onPointerOut={() => setHovered(null)}>
      <EdgeBox args={[1.0, 3.0, 0.85]} opacity={0.58} />
      <EdgeBox args={[0.52, 1.7, 0.65]} position={[-0.8, -0.65, 0]} opacity={0.32} />
      {windows.map((p, i) => (
        <mesh key={i} ref={(el) => { if (el) winRefs.current[i] = el; }} position={p as any}>
          <boxGeometry args={[0.14, 0.17, 0.06]} />
          <meshStandardMaterial color={GOLD} transparent opacity={0.3} emissive={GOLD} emissiveIntensity={0.4} />
        </mesh>
      ))}
      {!isMobile && (
        <group position={[1.0, 0.3, 0]}>
          <mesh>
            <boxGeometry args={[0.56, 0.78, 0.04]} />
            <meshStandardMaterial color={GOLD} metalness={0.4} roughness={0.5} transparent opacity={0.22} />
          </mesh>
          <mesh position={[0, 0.42, 0.03]}>
            <cylinderGeometry args={[0.1, 0.1, 0.06, 12]} />
            <meshStandardMaterial color={GOLD} metalness={1} roughness={0.1} />
          </mesh>
          {[0.15, 0, -0.15].map((y, i) => (
            <mesh key={i} position={[0, y, 0.04]}>
              <boxGeometry args={[0.32, 0.022, 0.02]} />
              <meshStandardMaterial color={GOLD} transparent opacity={0.52} />
            </mesh>
          ))}
        </group>
      )}
      {hovered === 'tower' && (
        <Html position={[0, -1.9, 0]} center occlude={false}>
          <div style={{ font: '600 9px Inter', letterSpacing: '0.15em', color: GOLD, opacity: 0.85, whiteSpace: 'nowrap' }}>
            MANAGEMENT
          </div>
        </Html>
      )}
    </group>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 10 * Math.cbrt(Math.random());
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, [count]);
  useFrame(() => { if (ref.current) ref.current.rotation.y += 0.00028; });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={GOLD} size={0.025} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function FloorGrid() {
  const geom = useMemo(() => new THREE.WireframeGeometry(new THREE.PlaneGeometry(22, 22, 18, 18)), []);
  return (
    <lineSegments geometry={geom} rotation={[-Math.PI / 2.15, 0, 0]} position={[0, -4, -3]}>
      <lineBasicMaterial color={GOLD} transparent opacity={0.038} />
    </lineSegments>
  );
}

function OrbitalTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => { if (ref.current) ref.current.rotation.z += 0.0007; });
  return (
    <mesh ref={ref} rotation={[Math.PI / 3, 0, 0]} position={[0, 0, -2.5]}>
      <torusGeometry args={[6, 0.012, 8, 100]} />
      <meshStandardMaterial color={GOLD} metalness={1} roughness={0} transparent opacity={0.5} />
    </mesh>
  );
}

function ConnectingLines() {
  const geom = useMemo(() => {
    const pts = [-4.5, 0, 0, 1.2, 0, 0, 1.2, 0, 0, 4.8, 0, 0];
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return g;
  }, []);
  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial color={GOLD} transparent opacity={0.07} />
    </lineSegments>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    camera.position.x = Math.sin(clock.elapsedTime * 0.07) * 0.7;
    camera.position.y = Math.cos(clock.elapsedTime * 0.055) * 0.35;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneBackground() {
  const { scene } = useThree();
  useEffect(() => { scene.background = new THREE.Color('#0B1426'); }, [scene]);
  return null;
}

function Scene() {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <>
      <SceneBackground />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color={GOLD} />
      <pointLight position={[-5, -3, 2]} intensity={0.4} color="#E8D4A0" />
      <CameraRig />
      <Particles count={isMobile ? 85 : 210} />
      <FloorGrid />
      <OrbitalTorus />
      <ConnectingLines />
      <HouseGroup hovered={hovered === 'house'} setHovered={setHovered} anyHovered={!!hovered} />
      <FlipGroup hovered={hovered === 'flip'} setHovered={setHovered} anyHovered={!!hovered} />
      <TowerGroup hovered={hovered === 'tower'} setHovered={setHovered} isMobile={isMobile} />
    </>
  );
}

const HeroCanvas = React.memo(function HeroCanvas() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (error || !mounted) {
    return <div style={{
      position: 'absolute', inset: 0, zIndex: 0,
      background: 'linear-gradient(135deg, #0B1426 0%, #1a2d4a 50%, #0d1829 100%)',
    }} />;
  }
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 1.5]}
          frameloop="always"
          camera={{ position: [0, 0, isMobile ? 13 : 10], fov: 55 }}
          gl={{ antialias: true }}
          onCreated={({ gl }) => { gl.setClearColor('#0B1426'); }}
          onError={() => setError(true)}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  );
});

export default HeroCanvas;
