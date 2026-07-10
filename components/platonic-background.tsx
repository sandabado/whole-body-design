"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  Box,
  Dodecahedron,
  Edges,
  Float,
  Icosahedron,
  Octahedron,
  Sphere,
  Tetrahedron,
  Text,
  Torus,
} from "@react-three/drei"
import * as THREE from "three"
import { feature } from "topojson-client"
import land110m from "world-atlas/land-110m.json"

const SOLIDS = {
  bindu: {
    color: "#6D4AFF",
    edges: false,
    opacity: 0.14,
    rotationSpeed: 0.08,
    scale: 1.35,
  },
  dodecahedron: {
    color: "#6D4AFF",
    edges: true,
    opacity: 0.16,
    rotationSpeed: 0.055,
    scale: 1.48,
  },
  heroDodecahedron: {
    color: "#FF2FB3",
    edges: true,
    opacity: 0.17,
    rotationSpeed: 0.055,
    scale: 1.5,
  },
  hexahedron: {
    color: "#4A6741",
    edges: true,
    opacity: 0.14,
    rotationSpeed: 0.055,
    scale: 1.36,
  },
  icosahedron: {
    color: "#2BA8A0",
    edges: true,
    opacity: 0.15,
    rotationSpeed: 0.06,
    scale: 1.46,
  },
  octahedron: {
    color: "#D4AF37",
    edges: true,
    opacity: 0.15,
    rotationSpeed: 0.065,
    scale: 1.4,
  },
  tetrahedron: {
    color: "#C2542D",
    edges: true,
    opacity: 0.16,
    rotationSpeed: 0.07,
    scale: 1.4,
  },
  torus: {
    color: "#D4AF37",
    edges: false,
    opacity: 0.06,
    rotationSpeed: 0.08,
    scale: 2.5,
  },
  starChart: {
    color: "#D4AF37",
    edges: true,
    opacity: 0.22,
    rotationSpeed: 0.05,
    scale: 0.88,
  },
} as const

export type SolidType = keyof typeof SOLIDS

interface SolidMeshProps {
  opacity: number
  type: SolidType
}

const PLANETARY_ALCHEMICAL_SYMBOLS = [
  "☉",
  "☽",
  "☿",
  "♀",
  "♂",
  "♃",
  "♄",
  "♅",
  "♆",
  "♇",
  "♁",
  "⚷",
] as const

function getDodecahedronFacePlacements() {
  const geometry = new THREE.DodecahedronGeometry(1, 0)
  const positions = geometry.getAttribute("position")
  const triangle = new THREE.Triangle()
  const faceGroups: Array<{
    centerSum: THREE.Vector3
    normal: THREE.Vector3
    triangles: number
  }> = []

  for (let index = 0; index < positions.count; index += 3) {
    const a = new THREE.Vector3().fromBufferAttribute(positions, index)
    const b = new THREE.Vector3().fromBufferAttribute(positions, index + 1)
    const c = new THREE.Vector3().fromBufferAttribute(positions, index + 2)
    const normal = triangle.set(a, b, c).getNormal(new THREE.Vector3())
    const center = new THREE.Vector3()
      .add(a)
      .add(b)
      .add(c)
      .divideScalar(3)

    const group = faceGroups.find((candidate) => {
      return candidate.normal.dot(normal) > 0.999
    })

    if (group) {
      group.centerSum.add(center)
      group.triangles += 1
    } else {
      faceGroups.push({
        centerSum: center,
        normal,
        triangles: 1,
      })
    }
  }

  geometry.dispose()

  return faceGroups
    .map(({ centerSum, normal, triangles }) => {
      const center = centerSum.divideScalar(triangles)
      return {
        normal,
        position: center.add(normal.clone().multiplyScalar(0.018)),
      }
    })
    .sort((a, b) => {
      return b.position.z - a.position.z || b.position.y - a.position.y
    })
}

const DODECAHEDRON_FACE_PLACEMENTS = getDodecahedronFacePlacements()

function PlanetaryFaceLabels({ opacity }: { opacity: number }) {
  const faceLabels = useMemo(() => {
    const zAxis = new THREE.Vector3(0, 0, 1)

    return DODECAHEDRON_FACE_PLACEMENTS.map(({ normal, position }, index) => ({
      label: PLANETARY_ALCHEMICAL_SYMBOLS[index],
      position,
      quaternion: new THREE.Quaternion().setFromUnitVectors(
        zAxis,
        normal.clone().normalize()
      ),
    }))
  }, [])

  return (
    <>
      {faceLabels.map(({ label, position, quaternion }) => (
        <group key={label} position={position} quaternion={quaternion}>
          <Text
            anchorX="center"
            anchorY="middle"
            characters={PLANETARY_ALCHEMICAL_SYMBOLS.join("")}
            fontSize={0.22}
            letterSpacing={0}
            material-toneMapped={false}
            renderOrder={20}
            outlineColor="#1A0712"
            outlineOpacity={0.32 * opacity}
            outlineWidth={0.006}
          >
            {label}
            <meshBasicMaterial
              attach="material"
              color="#FFD2EF"
              transparent
              opacity={0.58 * opacity}
              blending={THREE.AdditiveBlending}
              depthTest
              depthWrite={false}
            />
          </Text>
        </group>
      ))}
    </>
  )
}

function HeroDodecahedronMesh({
  material,
  opacity,
  scale,
}: {
  material: THREE.MeshPhysicalMaterial
  opacity: number
  scale: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const config = SOLIDS.heroDodecahedron
  const phase = useMemo(() => {
    return Object.keys(SOLIDS).indexOf("heroDodecahedron") * 0.73
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const elapsed = state.clock.getElapsedTime() + phase

    groupRef.current.rotation.x = elapsed * config.rotationSpeed
    groupRef.current.rotation.y = elapsed * config.rotationSpeed * 0.7
    groupRef.current.rotation.z = elapsed * config.rotationSpeed * 0.3
  })

  return (
    <group ref={groupRef} scale={scale}>
      <Dodecahedron args={[1, 0]}>
        <primitive object={material} attach="material" />
        <Edges color={config.color} transparent opacity={opacity * 0.92} />
      </Dodecahedron>
      <PlanetaryFaceLabels opacity={opacity} />
    </group>
  )
}

function StarChartMesh({ opacity }: { opacity: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const earthRef = useRef<THREE.Group>(null)
  const globeRadius = 1.08

  const spokePositions = useMemo(() => {
    const radius = 3.25
    const positions: number[] = []

    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2
      positions.push(0, 0, 0)
      positions.push(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
    }

    return new Float32Array(positions)
  }, [])

  const graticulePositions = useMemo(
    () => buildGraticulePositions(globeRadius),
    [globeRadius]
  )

  const landPositions = useMemo(
    () => buildLandPositions(globeRadius + 0.012),
    [globeRadius]
  )

  const constellationPositions = useMemo(() => {
    const positions: number[] = []
    const points = Array.from({ length: 36 }, (_, index) => {
      const ring = index % 3
      const angle = (index / 36) * Math.PI * 2 + seededRandom(index + 42) * 0.18
      const radius = 1.25 + ring * 0.55 + seededRandom(index + 9) * 0.16
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (seededRandom(index + 21) - 0.5) * 0.35,
      ] as const
    })

    for (let i = 0; i < points.length - 1; i += 1) {
      if (i % 3 === 2) continue
      positions.push(...points[i], ...points[i + 1])
    }

    return new Float32Array(positions)
  }, [])

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.055
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00018) * 0.16
      groupRef.current.rotation.y += delta * 0.018
    }

    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.28
      earthRef.current.rotation.x = 0.28 + Math.sin(Date.now() * 0.00016) * 0.08
      earthRef.current.rotation.z -= delta * 0.04
    }
  })

  const ringMaterial = (
    <meshBasicMaterial
      color="#D4AF37"
      transparent
      opacity={0.22 * opacity}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  )

  return (
    <Float
      speed={0.8}
      rotationIntensity={0.08}
      floatIntensity={0.16}
      floatingRange={[-0.08, 0.08]}
    >
      <group ref={groupRef} scale={1.08}>
        {[1.05, 1.55, 2.05, 2.62, 3.08].map((radius, index) => (
          <Torus
            key={radius}
            args={[radius, index % 2 === 0 ? 0.006 : 0.004, 8, 192]}
          >
            {ringMaterial}
          </Torus>
        ))}

        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[spokePositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#D4AF37"
            transparent
            opacity={0.28 * opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>

        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[constellationPositions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#F5F3F0"
            transparent
            opacity={0.3 * opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </lineSegments>

        {Array.from({ length: 12 }, (_, index) => {
          const angle = (index / 12) * Math.PI * 2
          const radius = 3.08
          return (
            <group
              key={index}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                index % 2 === 0 ? 0.14 : -0.08,
              ]}
            >
              <Sphere args={[0.055, 20, 20]}>
                <meshBasicMaterial
                  color="#F5D58B"
                  transparent
                  opacity={0.8 * opacity}
                  blending={THREE.AdditiveBlending}
                />
              </Sphere>
              <Torus args={[0.16, 0.004, 6, 36]}>
                <meshBasicMaterial
                  color="#D4AF37"
                  transparent
                  opacity={0.38 * opacity}
                  blending={THREE.AdditiveBlending}
                />
              </Torus>
            </group>
          )
        })}

        <group ref={earthRef}>
          <Sphere args={[globeRadius, 64, 64]}>
            <meshBasicMaterial
              color="#8ED8FF"
              transparent
              opacity={0.012 * opacity}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </Sphere>

          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[graticulePositions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#8ED8FF"
              transparent
              opacity={0.075 * opacity}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>

          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[landPositions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#F5D58B"
              transparent
              opacity={0.11 * opacity}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </lineSegments>
        </group>

        <Dodecahedron args={[0.72, 0]}>
          <meshPhysicalMaterial
            color="#FF2FB3"
            emissive="#FF2FB3"
            emissiveIntensity={0.72 * opacity}
            transparent
            opacity={0.26 * opacity}
            roughness={0.2}
            metalness={0.24}
            transmission={0.42}
            thickness={1.35}
            side={THREE.DoubleSide}
          />
          <Edges color="#FF8AD8" transparent opacity={0.95 * opacity} />
        </Dodecahedron>

        <Sphere args={[0.86, 32, 32]}>
          <meshBasicMaterial
            color="#FF2FB3"
            transparent
            opacity={0.035 * opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </Sphere>

        <Sphere args={[0.13, 32, 32]}>
          <meshBasicMaterial
            color="#FFB4E5"
            transparent
            opacity={0.9 * opacity}
            blending={THREE.AdditiveBlending}
          />
        </Sphere>
      </group>
    </Float>
  )
}

function BinduEarthOutline({ opacity }: { opacity: number }) {
  const earthRef = useRef<THREE.Group>(null)
  const earthRadius = 1.04

  const graticulePositions = useMemo(
    () => buildGraticulePositions(earthRadius),
    [earthRadius]
  )

  const landPositions = useMemo(
    () => buildLandPositions(earthRadius + 0.006),
    [earthRadius]
  )

  useFrame((_state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12
      earthRef.current.rotation.x =
        0.34 + Math.sin(Date.now() * 0.00008) * 0.025
      earthRef.current.rotation.z -= delta * 0.015
    }
  })

  return (
    <group ref={earthRef}>
      <Dodecahedron args={[0.46, 0]}>
        <meshPhysicalMaterial
          color="#FF2FB3"
          emissive="#FF2FB3"
          emissiveIntensity={0.42 * opacity}
          transparent
          opacity={0.68 * opacity}
          roughness={0.28}
          metalness={0.24}
          transmission={0.18}
          thickness={0.8}
          side={THREE.DoubleSide}
          depthTest={false}
          depthWrite={false}
        />
        <Edges
          color="#FFB4E5"
          transparent
          opacity={0.96 * opacity}
          depthTest={false}
        />
      </Dodecahedron>

      <Torus args={[earthRadius, 0.009, 8, 192]}>
        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.62 * opacity}
          blending={THREE.AdditiveBlending}
          depthTest={false}
          depthWrite={false}
        />
      </Torus>

      <Torus args={[earthRadius, 0.006, 8, 192]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial
          color="#4A6741"
          transparent
          opacity={0.48 * opacity}
          blending={THREE.AdditiveBlending}
          depthTest={false}
          depthWrite={false}
        />
      </Torus>

      <Sphere args={[earthRadius, 32, 32]}>
        <meshBasicMaterial
          color="#4A6741"
          transparent
          opacity={0.04 * opacity}
          blending={THREE.AdditiveBlending}
          depthTest={false}
          depthWrite={false}
        />
      </Sphere>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[graticulePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8ED8FF"
          transparent
          opacity={0.58 * opacity}
          blending={THREE.AdditiveBlending}
          depthTest={false}
          depthWrite={false}
        />
      </lineSegments>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[landPositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.78 * opacity}
          blending={THREE.AdditiveBlending}
          depthTest={false}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

function SolidMesh({ type, opacity }: SolidMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const config = SOLIDS[type]
  const phase = useMemo(() => {
    return Object.keys(SOLIDS).indexOf(type) * 0.73
  }, [type])

  useFrame((state) => {
    if (!meshRef.current) return
    const elapsed = state.clock.getElapsedTime() + phase

    meshRef.current.rotation.x = elapsed * config.rotationSpeed
    meshRef.current.rotation.y = elapsed * config.rotationSpeed * 0.7
    meshRef.current.rotation.z = elapsed * config.rotationSpeed * 0.3
  })

  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
      color: new THREE.Color(config.color),
      ior: 1.5,
      metalness: 0.3,
      opacity: opacity * config.opacity,
      roughness: 0.4,
      side: THREE.DoubleSide,
      thickness: 1.5,
      transmission: 0.6,
      transparent: true,
    })
  }, [config.color, config.opacity, opacity])

  const scale = config.scale

  return (
    <Float
      speed={0.65}
      rotationIntensity={0.12}
      floatIntensity={0.42}
      floatingRange={[-0.12, 0.12]}
    >
      {type === "starChart" && <StarChartMesh opacity={opacity} />}
      {type === "bindu" && (
        <group scale={scale}>
          <Sphere ref={meshRef} args={[1, 64, 64]}>
            <primitive object={material} attach="material" />
            {config.edges ? (
              <Edges
                color={config.color}
                transparent
                opacity={opacity * 0.92}
              />
            ) : null}
          </Sphere>
          <BinduEarthOutline opacity={opacity} />
        </group>
      )}
      {type === "torus" && (
        <Torus ref={meshRef} args={[1, 0.35, 16, 64]} scale={scale}>
          <primitive object={material} attach="material" />
          {config.edges ? (
            <Edges color={config.color} transparent opacity={opacity * 0.92} />
          ) : null}
        </Torus>
      )}
      {type === "icosahedron" && (
        <Icosahedron ref={meshRef} args={[1, 0]} scale={scale}>
          <primitive object={material} attach="material" />
          <Edges color={config.color} transparent opacity={opacity * 0.92} />
        </Icosahedron>
      )}
      {type === "octahedron" && (
        <Octahedron ref={meshRef} args={[1, 0]} scale={scale}>
          <primitive object={material} attach="material" />
          <Edges color={config.color} transparent opacity={opacity * 0.92} />
        </Octahedron>
      )}
      {type === "tetrahedron" && (
        <Tetrahedron ref={meshRef} args={[1, 0]} scale={scale}>
          <primitive object={material} attach="material" />
          <Edges color={config.color} transparent opacity={opacity * 0.92} />
        </Tetrahedron>
      )}
      {type === "hexahedron" && (
        <Box ref={meshRef} args={[1.4, 1.4, 1.4]} scale={scale}>
          <primitive object={material} attach="material" />
          <Edges color={config.color} transparent opacity={opacity * 0.92} />
        </Box>
      )}
      {type === "heroDodecahedron" && (
        <HeroDodecahedronMesh
          material={material}
          opacity={opacity}
          scale={scale}
        />
      )}
      {type === "dodecahedron" && (
        <Dodecahedron ref={meshRef} args={[1, 0]} scale={scale}>
          <primitive object={material} attach="material" />
          <Edges color={config.color} transparent opacity={opacity * 0.92} />
        </Dodecahedron>
      )}
    </Float>
  )
}

interface ScrollSceneProps {
  activeSolid: SolidType
  nextSolid: SolidType
  transitionProgress: number
}

function ScrollScene({
  activeSolid,
  nextSolid,
  transitionProgress,
}: ScrollSceneProps) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 6)
  }, [camera])

  const activeOpacity = 1 - transitionProgress
  const nextOpacity = transitionProgress

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#D4AF37" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6D4AFF" />
      <directionalLight position={[0, 5, 5]} intensity={0.3} />

      {activeOpacity > 0.01 ? (
        <SolidMesh type={activeSolid} opacity={activeOpacity} />
      ) : null}

      {nextOpacity > 0.01 && activeSolid !== nextSolid ? (
        <SolidMesh type={nextSolid} opacity={nextOpacity} />
      ) : null}
    </>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      )
    }
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile
}

function useShouldRender3D() {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const isMobile = window.innerWidth < 768
      const isLowEnd = navigator.hardwareConcurrency < 4
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      setShouldRender(!(isLowEnd && isMobile) && !prefersReducedMotion)
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  return shouldRender
}

function seededRandom(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

type GeoRing = [number, number][]
type GeoPolygon = GeoRing[]
type GeoMultiPolygon = GeoPolygon[]

function geoToVector(lon: number, lat: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(lon + 180)

  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ] as const
}

function pushGeoSegment(
  positions: number[],
  start: readonly [number, number],
  end: readonly [number, number],
  radius: number
) {
  const startPoint = geoToVector(start[0], start[1], radius)
  const endPoint = geoToVector(end[0], end[1], radius)
  positions.push(...startPoint, ...endPoint)
}

function buildGraticulePositions(radius: number) {
  const positions: number[] = []
  const step = 5

  for (let lat = -75; lat <= 75; lat += 15) {
    for (let lon = -180; lon < 180; lon += step) {
      pushGeoSegment(positions, [lon, lat], [lon + step, lat], radius)
    }
  }

  for (let lon = -180; lon < 180; lon += 15) {
    for (let lat = -90; lat < 90; lat += step) {
      pushGeoSegment(positions, [lon, lat], [lon, lat + step], radius)
    }
  }

  return new Float32Array(positions)
}

function buildLandPositions(radius: number) {
  const positions: number[] = []
  const landCollection = feature(
    land110m as unknown as Parameters<typeof feature>[0],
    (land110m.objects as { land: Parameters<typeof feature>[1] }).land
  ) as unknown as {
    features: { geometry: { coordinates: GeoMultiPolygon } }[]
  }

  landCollection.features[0]?.geometry.coordinates.forEach((polygon) => {
    polygon.forEach((ring) => {
      for (let i = 0; i < ring.length - 1; i += 1) {
        pushGeoSegment(positions, ring[i], ring[i + 1], radius)
      }
    })
  })

  return new Float32Array(positions)
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const isMobile = useIsMobile()
  const particleCount = isMobile ? 520 : 1400

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i += 1) {
      arr[i * 3] = (seededRandom(i * 3) - 0.5) * 20
      arr[i * 3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 20
      arr[i * 3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 10 - 2
    }
    return arr
  }, [particleCount])

  useFrame((_state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.02
    pointsRef.current.rotation.x += delta * 0.01
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.017}
        color="#F5F3F0"
        transparent
        opacity={0.58}
        sizeAttenuation
      />
    </points>
  )
}

export interface PlatonicBackgroundProps {
  sections: { id: string; solid: SolidType }[]
}

export function PlatonicBackground({ sections }: PlatonicBackgroundProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [transitionProgress, setTransitionProgress] = useState(0)
  const isMobile = useIsMobile()
  const shouldRender3D = useShouldRender3D()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      let currentIndex = 0
      let progress = 0

      for (let i = 0; i < sections.length; i += 1) {
        const el = document.getElementById(sections[i].id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentIndex = i
          if (i < sections.length - 1) {
            const nextEl = document.getElementById(sections[i + 1].id)
            if (nextEl) {
              const nextTop =
                nextEl.getBoundingClientRect().top + window.scrollY
              const distance = nextTop - sectionTop
              const traveled = scrollY - sectionTop
              const sectionProgress = traveled / distance
              progress = Math.max(
                0,
                Math.min(1, (sectionProgress - 0.72) / 0.28)
              )
            }
          }
          break
        }
      }

      const lastEl = document.getElementById(sections[sections.length - 1].id)
      if (lastEl) {
        const lastRect = lastEl.getBoundingClientRect()
        const lastBottom = lastRect.bottom + window.scrollY
        if (scrollY >= lastBottom) {
          currentIndex = sections.length - 1
          progress = 0
        }
      }

      setActiveIndex(currentIndex)
      setTransitionProgress(
        progress > 0.85 ? 1 : progress < 0.15 ? 0 : progress
      )
    }

    let ticking = false
    const throttledScroll = () => {
      if (ticking) return
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [sections])

  if (!shouldRender3D) {
    return (
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-amethyst via-obsidian to-obsidian" />
    )
  }

  const activeSolid = sections[activeIndex]?.solid || "bindu"
  const nextSolid =
    sections[Math.min(activeIndex + 1, sections.length - 1)]?.solid || "bindu"

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ fov: 50, position: [0, 0, 6] }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: isMobile ? "low-power" : "high-performance",
          preserveDrawingBuffer: true,
        }}
        style={{
          height: "100%",
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <ScrollScene
          activeSolid={activeSolid}
          nextSolid={nextSolid}
          transitionProgress={transitionProgress}
        />
        <ParticleField />
      </Canvas>
    </div>
  )
}
