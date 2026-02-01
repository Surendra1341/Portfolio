import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Line, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const Node = ({ position, label, color = "#00f0ff", scale = 1 }) => {
    const meshRef = useRef();
    const [hovered, setHover] = React.useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh
                    ref={meshRef}
                    scale={hovered ? scale * 1.5 : scale}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <icosahedronGeometry args={[0.5, 1]} />
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={hovered ? 2 : 0.5}
                        wireframe
                    />
                </mesh>
                <Text
                    position={[0, -1, 0]}
                    fontSize={0.3}
                    color={color}
                    font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0Pn5qRS8.woff2"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>
            </Float>
        </group>
    );
};

const Connections = ({ data }) => {
    // Determine connections based on simple hierarchical logic or just random for visual
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < data.length; i++) {
            for (let j = i + 1; j < data.length; j++) {
                // Connect if close enough? Or just connect 0 to all?
                // Let's connect center (0) to others
                if (i === 0) {
                    p.push([data[i].position, data[j].position]);
                }
            }
        }
        return p;
    }, [data]);

    return (
        <group>
            {points.map((pair, i) => (
                <Line
                    key={i}
                    points={pair}
                    color="#00f0ff"
                    opacity={0.1}
                    transparent
                    lineWidth={1}
                />
            ))}
        </group>
    );
};

const Scene = () => {
    const { camera } = useThree();

    // Process skills into nodes
    const skills = useMemo(() => {
        const categories = Object.keys(personalData.skills);
        const nodes = [];

        // Center node
        nodes.push({ label: "Systems", position: [0, 0, 0], scale: 1.5 });

        // Surrounding nodes
        categories.forEach((cat, i) => {
            const angle = (i / categories.length) * Math.PI * 2;
            const radius = 3;
            nodes.push({
                label: cat.toUpperCase(),
                position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0],
                scale: 1.2
            });

            // Sub-nodes
            personalData.skills[cat].forEach((skill, j) => {
                const subAngle = angle + (j - personalData.skills[cat].length / 2) * 0.2;
                const subRadius = 5;
                nodes.push({
                    label: skill,
                    position: [Math.cos(subAngle) * subRadius, Math.sin(subAngle) * subRadius, (Math.random() - 0.5) * 2],
                    scale: 0.8
                });
            });
        });
        return nodes;
    }, []);

    useEffect(() => {
        // Camera Animation on Scroll
        // We can't use scrollTrigger directly inside Canvas easily without linking to DOM
        // But we can rely on parent passing trigger or just setup global timeline

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        tl.to(camera.position, {
            z: 20,
            y: 5,
            ease: "none"
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [camera]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
            <fog attach="fog" args={['#0a0a0a', 5, 30]} />

            <group rotation={[0, 0, 0]}>
                {skills.map((skill, i) => (
                    <Node key={i} {...skill} />
                ))}
                <Connections data={skills.slice(0, 5)} />
            </group>
        </>
    );
};

const ThreeGraph = () => {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
                <Scene />
            </Canvas>
        </div>
    );
};

export default ThreeGraph;
