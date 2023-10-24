function make_shirt(size: string = 'large', message: string = 'I love TypeScript') {
    console.log(`This ${size} shirt says "${message}"`);
  }
  make_shirt();
  make_shirt('medium');
  make_shirt('small', 'TypeScript is awesome!');
