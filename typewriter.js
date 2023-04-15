const sentence = "hello there from lighthouse labs";
let delay = 0;
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    if (i === sentence.length - 1) {      
        process.stdout.write("\n");     
    }
    i++;
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 50;
}
