"use client"
import React, { useRef, useEffect, useState } from 'react';
import { MeshProps, ThreeEvent, extend } from '@react-three/fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, SpotLight } from '@react-three/drei';
import { spin } from '~/lib/animation';
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';
import { TextGeometry } from 'three-stdlib';

const ThreeScene: React.FC = () => {
    const boxGrid = [...Array(10).keys()].map((i) => {
        return [...Array(10).keys()].map((j) => {
            return <MyBox props={{ position: [i, j, 0] }} size={[i*Math.PI/6,1,1]} />
        });
    }
    );

    return (
        <>
            <Canvas
                style={{
                    height: '100vh',
                    //backgroundColor: 'rgb(0, 175, 102)'
                }}
            >

                <OrbitControls />
                <ambientLight intensity={Math.PI/2}  />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                
                {boxGrid}
                {/* <Box position={[-1.2, 0, 0]} /> */}
            </Canvas>
        </>
    );
};


// function Box(props) {
//     // This reference will give us direct access to the mesh
//     const meshRef = useRef()
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//     // Return view, these are regular three.js elements expressed in JSX
//     return (
//         <mesh
//             {...props}
//             ref={meshRef}
//             scale={active ? 1.5 : 1}
//             onClick={(event) => setActive(!active)}
//             onPointerOver={(event) => setHover(true)}
//             onPointerOut={(event) => setHover(false)}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }

function MyBox({ props, size = [1, 1, 1] }: { props: MeshProps, size: [number, number, number] }) {
    const boxRef = useRef(null);


    // useFrame((_, delta) => {
    //     // Call the 'spin' animation on each render loop iteration
    //     if (boxRef.current)
    //         spin(boxRef.current, delta);
    // });

    const onSpin = (event: ThreeEvent<MouseEvent>) => {
        console.log('clicked');
        if (boxRef.current)
            spin(boxRef.current, 1);
    }

    return (
        <mesh
            {...props}
            ref={boxRef}
            onPointerOver={(event) => onSpin(event)}
            onClick={(event) => onSpin(event)}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    );
}

export default ThreeScene;
