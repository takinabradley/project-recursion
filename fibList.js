function recursiveFibList(num, sequence = [0, 1]) {
  if(num <= 0) return []
  if(num === 1) return [sequence[0]]
  return (num === 2) ? sequence : recursiveFibList(num - 1, [...sequence, sequence.at(-1) + sequence.at(-2)])
}

function iterativeFibList(num) {
  const sequence = [0, 1]
  if(num === 0) return []
  if(num === 1) return [sequence[0]]
  for(let i = 2; i < num; i++) {
    sequence.push(sequence.at(-1) + sequence.at(-2))
  }
  return sequence
}