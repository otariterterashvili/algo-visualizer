export const unsorted:number[] = [1, 7, 5, 9, 2, 12, 3, 13, 3, 6, 4, 20, 15, 16]


export const sleepAndWait = (time:number = 1000, cb:any) =>{
  return new Promise((resolve) =>setTimeout(() =>{
    resolve(cb())
  }, time))
}

export const exchAsync = async (i: number, j: number, arr: number[]) =>{
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

export const exchSync = (i: number, j: number, arr: number[]): void =>{
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}