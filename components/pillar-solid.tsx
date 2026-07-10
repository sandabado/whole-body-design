"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import {
  Box,
  Dodecahedron,
  Edges,
  Float,
  Icosahedron,
  Octahedron,
  Tetrahedron,
} from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

import { cn } from "@/lib/utils"

type PillarSolidType =
  "Dodecahedron" | "Hexahedron" | "Icosahedron" | "Octahedron" | "Tetrahedron"

const solidColors = {
  Dodecahedron: "#D4AF37",
  Hexahedron: "#4A6741",
  Icosahedron: "#2BA8A0",
  Octahedron: "#6D4AFF",
  Tetrahedron: "#C2542D",
} as const

function SolidGeometry({ solid }: { solid: PillarSolidType }) {
  const groupRef = useRef<THREE.Group>(null)
  const color = solidColors[solid]

  useFrame((_state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.x += delta * 0.18
    groupRef.current.rotation.y += delta * 0.28
    groupRef.current.rotation.z += delta * 0.08
  })

  const material = (
    <meshStandardMaterial
      color={color}
      emissive={color}
      emissiveIntensity={0.45}
      metalness={0.18}
      opacity={0.24}
      roughness={0.42}
      transparent
    />
  )

  const edgeMaterial = (
    <lineBasicMaterial
      color={color}
      transparent
      opacity={0.9}
      blending={THREE.AdditiveBlending}
    />
  )

  return (
    <Float
      speed={1}
      rotationIntensity={0.18}
      floatIntensity={0.18}
      floatingRange={[-0.08, 0.08]}
    >
      <group ref={groupRef}>
        {solid === "Dodecahedron" ? (
          <Dodecahedron args={[1.05, 0]}>
            {material}
            <Edges>{edgeMaterial}</Edges>
          </Dodecahedron>
        ) : null}
        {solid === "Icosahedron" ? (
          <Icosahedron args={[1.08, 0]}>
            {material}
            <Edges>{edgeMaterial}</Edges>
          </Icosahedron>
        ) : null}
        {solid === "Octahedron" ? (
          <Octahedron args={[1.12, 0]}>
            {material}
            <Edges>{edgeMaterial}</Edges>
          </Octahedron>
        ) : null}
        {solid === "Tetrahedron" ? (
          <Tetrahedron args={[1.18, 0]}>
            {material}
            <Edges>{edgeMaterial}</Edges>
          </Tetrahedron>
        ) : null}
        {solid === "Hexahedron" ? (
          <Box args={[1.45, 1.45, 1.45]}>
            {material}
            <Edges>{edgeMaterial}</Edges>
          </Box>
        ) : null}
      </group>
    </Float>
  )
}

export function PillarSolid({
  className,
  solid,
}: {
  className?: string
  solid: PillarSolidType
}) {
  return (
    <div
      className={cn(
        "relative h-28 w-full overflow-hidden rounded-md border border-gold/10 bg-obsidian/35",
        className
      )}
    >
      <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-moonstone/8 via-transparent to-transparent" />
      <Canvas
        camera={{ fov: 42, position: [0, 0, 4.4] }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight color="#F5D58B" intensity={2.3} position={[2.4, 2.2, 3]} />
        <pointLight
          color={solidColors[solid]}
          intensity={1.6}
          position={[-2.2, -1.6, 2.4]}
        />
        <SolidGeometry solid={solid} />
      </Canvas>
    </div>
  )
}
