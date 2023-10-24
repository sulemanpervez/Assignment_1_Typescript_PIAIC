function showMagician(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreats(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
  }
  
  const magicians1: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  const greatMagician: string[] = makeGreats(magicians1);
  showMagician(magicians1);
  showMagician(greatMagicians);
  