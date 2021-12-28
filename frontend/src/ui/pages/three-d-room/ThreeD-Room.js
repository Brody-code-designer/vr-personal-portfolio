import React from "react";
import {Canvas} from "@react-three/fiber";
import {Ground} from "./components/Ground";
import {OrbitControls, Sky} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import {Cube} from "./components/Cube";
import {Player} from "./components/Player";


export const ThreeDRoom = () => {
    return (
        <>
            <Canvas shadows>

                {/*<Sky sunPosition={[100, 20, 100]}/>*/}

                {/*<OrbitControls/>*/}

                {/*<ambientLight intensity={10}/>*/}
                <directionalLight
                    castShadow
                    position={[0, 15, 25]}
                    intensity={2}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={100}
                    shadow-camera-left={-50}
                    shadow-camera-right={50}
                    shadow-camera-top={50}
                    shadow-camera-bottom={-50}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5}/>
                <pointLight position={[0, 0, 0]} intensity={1.5}/>

                <Physics gravity={[0, -30, 0]}>

                    <Cube/>
                    <Ground position={[0, 0.5, 0]}/>
                    <Player position={[0, 3, 10]}/>

                </Physics>
            </Canvas>
        </>
    )
}