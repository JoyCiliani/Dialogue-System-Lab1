import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { ex, ex2, ex3, ex4, ex5, ex6 } from "./exercises.ts";


const show_exercises: boolean = true;

if (!show_exercises) {
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
}

else {
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="page">
      <h1>Dialogue System Lab</h1>

      <h2>Exercise 1- Guess the number</h2>

      <div class="card">
        <p>
          I'm thinking of a number from <strong>1 to 10</strong>.
          Enter your attempt and press the button.
        </p>

        <div class="row">
          <input id="ex1_input" type="number" placeholder="1-10" />
          <button id="ex1_button" type="button">Guess</button>
        </div>

        <div class="output">
          <span>Result:</span>
          <div id="ex1_output"></div>
        </div>
      </div>
    </div>

     <h2>Exercise 2 - Check the number 50</h2>
    <div class="card">
      <p>
        Enter two numbers. I'll tell you if one of them is <strong>50</strong>
        or if their sum is <strong>50</strong>.
      </p>

      <div class="row">
        <input id="ex2_input1" type="number" placeholder="First number" />
        <input id="ex2_input2" type="number" placeholder="Second number" />
        <button id="ex2_button" type="button">Check</button>
      </div>

      <div class="output">
        <span>Result:</span>
        <div id="ex2_output"></div>
      </div>
    </div>
  </div>

<h2>Exercise 3 - See if you're on the list</h2>
<div class="card">
  <p>
    Enter your name. I'll tell you:
    <br> - The names of the people on the list
    <br> - If your name is on the list and in what position
    <br> - If the name entered matches someone in the list ignoring upper/lower case and in what position
  </p>

  <div class="row">
    <input id="ex3_input" type="text" placeholder="Enter your name..." />
    <button id="ex3_button" type="button">Search</button>
  </div>

  <div class="output">
    <span>Result:</span>
    <div id="ex3_output"></div>
  </div>
</div>


<h2>Exercise 4 - Last 3 letters</h2>
      <div class="card">
        <p>
          Enter a word of at least <strong>3 characters</strong>.
          The system does: (last 3) + word + (last 3).
        </p>
        <div class="row">
          <input id="ex4_input" type="text" placeholder="Ex: ciao" />
          <button id="ex4_button" type="button">Generate</button>
        </div>
        <div class="output">
          <span>Result:</span>
          <div id="ex4_output"></div>
        </div>
      </div>
    </div>

  </div>


  <h2>Exercise 5 - Your name (length x 2)</h2>
  <div class="card">
    <p>
      Enter your name. The system will display:
      <em>name + (name length x 2)</em>.
    </p>
    <div class="row">
      <input id="ex5_input" type="text" placeholder="Ex: Giulio" />
      <button id="ex5_button" type="button">Calculate</button>
    </div>
    <div class="output">
      <span>Result:</span>
      <div id="ex5_output"></div>
    </div>
  </div>
</div>


 <h2>Exercise 6: Search for a zoo animal</h2>
  <div class="card">
    <p>Type an animal. If it's in the zoo, I'll show you its weight and origin.</p>

    <div class="row">
      <input id="ex6_input" type="text" placeholder="Es: giraffe" />
      <button id="ex6_button" type="button">Search</button>
    </div>

    <div class="output">
      <span>Result:</span>
      <div id="ex6_output"></div>
    </div>
  </div>
</div>





  `;


  const input = document.querySelector<HTMLInputElement>("#ex1_input")!;
  const button = document.querySelector<HTMLButtonElement>("#ex1_button")!;
  const output = document.querySelector<HTMLDivElement>("#ex1_output")!;
  
  ex(input, button, output);
}
const input1 = document.querySelector<HTMLInputElement>("#ex2_input1")!;
const input2 = document.querySelector<HTMLInputElement>("#ex2_input2")!;
const button2 = document.querySelector<HTMLButtonElement>("#ex2_button")!;
const output2 = document.querySelector<HTMLDivElement>("#ex2_output")!;

ex2(input1, input2, button2, output2);


const input3 = document.querySelector<HTMLInputElement>("#ex3_input")!;
const button3 = document.querySelector<HTMLButtonElement>("#ex3_button")!;
const output3 = document.querySelector<HTMLDivElement>("#ex3_output")!;

ex3(input3, button3, output3);

const input4 = document.querySelector<HTMLInputElement>("#ex4_input")!;
const button4 = document.querySelector<HTMLButtonElement>("#ex4_button")!;
const output4 = document.querySelector<HTMLDivElement>("#ex4_output")!;

ex4(input4, button4, output4);

const input5 = document.querySelector<HTMLInputElement>("#ex5_input")!;
const button5 = document.querySelector<HTMLButtonElement>("#ex5_button")!;
const output5 = document.querySelector<HTMLDivElement>("#ex5_output")!;
ex5(input5, button5, output5);

const input6 = document.querySelector<HTMLInputElement>("#ex6_input")!;
const button6 = document.querySelector<HTMLButtonElement>("#ex6_button")!;
const output6 = document.querySelector<HTMLElement>("#ex6_output")!;
ex6(input6, button6, output6);