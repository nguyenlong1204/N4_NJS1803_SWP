import { Text } from '@chakra-ui/react'
import React from 'react'

export default function Title({title, description}) {
  return (
    <>
    <Text fontSize="3xl" fontWeight="bold">{title}</Text>
    <Text fontSize="lg" fontWeight="light" fontStyle={"italic"}>{description}</Text>
    </>
  )
}
