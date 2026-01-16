"use client"

import dynamic from 'next/dynamic'
// import { PlayerProps } from 'fs-shows/dist/Player'
import { PlayerProps } from '../../fs-shows/dist/Player'
 
const DynamicPlayer = dynamic(() => import('../../fs-shows/dist/Player'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})
 
export default function ClientPlayer(props: PlayerProps) {
  return <DynamicPlayer {...props} />
}