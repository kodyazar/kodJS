function shuffleAR(ar) {
  for (let i = 0; i <ar.length - 1; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [ar[i], ar[j]] = [ar[j], ar[i]];
  }
  return ar;
}
