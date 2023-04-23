function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
      greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
  }
  
  const magicians1: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  const greatMagicians: string[] = makeGreat(magicians1);
  showMagicians(magicians1);
  showMagicians(greatMagicians);
  