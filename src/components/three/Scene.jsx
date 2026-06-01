import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * The hero 3D object: a glowing distorted icosahedron (security "core").
 * scrollRef.current is 0..1 progress, fed from the Hero ScrollTrigger.
 */
function Core({ scrollRef }) {
    const mesh = useRef();
    const ring = useRef();

    useFrame((state, delta) => {
        const p = scrollRef.current || 0;
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.25;
            mesh.current.rotation.x = p * Math.PI * 0.6;
            // scale + push back as you scroll down
            const s = 1 - p * 0.35;
            mesh.current.scale.setScalar(s);
            mesh.current.position.y = p * 1.2;
        }
        if (ring.current) {
            ring.current.rotation.z += delta * 0.15;
            ring.current.rotation.x = Math.PI / 2 + p * 0.8;
        }
    });

    return (
        <group>
            <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
                <Icosahedron ref={mesh} args={[1.25, 6]}>
                    <MeshDistortMaterial
                        color="#1FC8E3"
                        emissive="#0E2A47"
                        emissiveIntensity={0.6}
                        roughness={0.15}
                        metalness={0.9}
                        distort={0.32}
                        speed={1.6}
                    />
                </Icosahedron>
            </Float>

            {/* orbiting ring */}
            <mesh ref={ring}>
                <torusGeometry args={[2.1, 0.012, 16, 120]} />
                <meshBasicMaterial color="#0FA9C4" transparent opacity={0.5} />
            </mesh>
        </group>
    );
}

/* Floating particle field for depth */
function Particles() {
    const ref = useRef();
    const positions = useMemo(() => {
        const n = 600;
        const arr = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 14;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
        }
        return arr;
    }, []);

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.02;
    });

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                color="#1FC8E3"
                size={0.025}
                sizeAttenuation
                transparent
                opacity={0.55}
                depthWrite={false}
            />
        </Points>
    );
}

export default function Scene({ scrollRef }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 1.8]}
            gl={{ antialias: true, alpha: true }}
            style={{ position: "absolute", inset: 0 }}
        >
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 4, 5]} intensity={1.4} color="#ffffff" />
            <pointLight position={[-4, -2, -3]} intensity={2} color="#1FC8E3" />
            <Particles />
            <Core scrollRef={scrollRef} />
        </Canvas>
    );
}