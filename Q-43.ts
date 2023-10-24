function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
  }
  
  function showMagicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  const magician: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  const greatMagicians: string[] = makeGreat([...magicians]); // create a copy of the original array
  showMagicians(magicians); // original array is unchanged
  console.log("----");
  showMagicians(greatMagicians); // new array has "The Great" added to each name
  