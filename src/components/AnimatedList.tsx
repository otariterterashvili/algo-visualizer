import { useSprings, animated } from 'react-spring'

type Props = {
  arr: number[]
  minIndex: number
  pivot: number
  iterIndex: number
}

const AnimatedList = ({ arr, minIndex, pivot, iterIndex }: Props) => {
  const springs = useSprings(
    arr.length,
    arr.map((item, index) => {
      let backgroundColor = 'rgba(55, 65, 81, 1)'
      if (minIndex === index) {
        backgroundColor = 'rgba(52, 211, 153,1)'
      }
      if (pivot === index) {
        backgroundColor = 'rgba(251, 191, 36, 1)'
      }
      if (iterIndex === index) {
        backgroundColor = 'rgba(209, 213, 219, 1)'
      }
      return {
        height: item * 30,
        backgroundColor,
      }
    })
  )
  return (
    <>
      {springs.map((styles, index) => (
        <animated.div key={index} className="mx-2 px-4 bg-gray-700 text-gray-50" style={styles} />
      ))}
    </>
  )
}

export default AnimatedList
