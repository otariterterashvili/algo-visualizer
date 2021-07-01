import { useRecoilState } from 'recoil'
import { exchSync, unsorted, sleepAndWait } from '../helper'
import { DELAY_SPEED, ITERATION_SPEED } from '../helper/constant'
import { mainState } from '../recoil/atom'

import AnimatedList from './AnimatedList'
import Header from './Header'

const Algo = () => {
  // recoil state
  const [arrState, setState] = useRecoilState(mainState)

  const handleSelectionSort = async () => {
    const unsortedArr = [...unsorted]
    // selection sort implementation
    for (let i = 0; i < unsortedArr.length; i++) {
      let currentPos = i
      for (let j = i + 1; j < unsortedArr.length; j++) {
        if (unsortedArr[j] < unsortedArr[currentPos]) {
          currentPos = j
        }
        // selection sort animations
        setState({
          minIndex: i,
          pivot: currentPos,
          iterIndex: j,
          arr: [...unsortedArr],
        })
        await sleepAndWait(ITERATION_SPEED, () => {})
      }
      exchSync(i, currentPos, unsortedArr)

      // selection sort animations
      setState({
        minIndex: i,
        pivot: currentPos,
        iterIndex: currentPos,
        arr: [...unsortedArr],
      })
      await sleepAndWait(DELAY_SPEED, () => {})
    }
  }

  return (
    <div>
      <Header onSelectionSort={handleSelectionSort} />
      <div className="container mx-auto mt-1">
        <div className="flex">
          <AnimatedList {...arrState} />
        </div>
      </div>
    </div>
  )
}

export default Algo
