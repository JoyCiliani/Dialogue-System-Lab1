//Exercise 1
export function ex(
  input: HTMLInputElement,
  button: HTMLButtonElement,
  output: HTMLDivElement
) {

  button.addEventListener("click", () => {
      const randomNumber = Math.ceil(Math.random() * 10);
    const raw = input.value.trim();

    if (raw === "") {
      output.textContent = "Please enter a number.";
      output.style.color = "orange";
      return;
    }

    const userGuess = Number(raw);

    if (!Number.isFinite(userGuess)) {
      output.textContent = "This is not a valid number.";
      output.style.color = "orange";
      return;
    }

    if (userGuess < 1 || userGuess > 10) {
      output.textContent = "The number must be between 1 and 10.";
      output.style.color = "orange";
      return;
    }

    if (userGuess === randomNumber) {
      output.textContent = "Amazing, you got it!";
      output.style.color = "green";
    } else {
      output.textContent =
        "Sorry, you'll be luckier another time. The number was " + randomNumber;
      output.style.color = "red";
    }
  });
}

//Exercise 2
//What happens if one or both of the numbers are provided as string? What is a possible solution to this?
//If one or both numbers are provided as strings, JavaScript may treat them as text (e.g., "5" + "5" becomes "55" if not converted) or produce NaN for non-numeric strings. A possible solution is to enforce numeric types with TypeScript (so calling ex2("5","5") gives a compile-time error) and/or convert and validate user input with Number(...) and Number.isFinite(...) before doing the checks.


export function ex2(
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  button: HTMLButtonElement,
  output: HTMLDivElement
) {
    input1.addEventListener("input", () => (output.textContent = ""));
  input2.addEventListener("input", () => (output.textContent = ""));

  button.addEventListener("click", () => {
    const raw1 = input1.value.trim();
    const raw2 = input2.value.trim();

    if (raw1 === "" || raw2 === "") {
      output.textContent = "Enter both numbers.";
      output.style.color = "orange";
      return;
    }

    const num1 = Number(raw1);
    const num2 = Number(raw2);

    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
      output.textContent = "You must enter two valid numbers.";
      output.style.color = "orange";
      return;
    }

    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
      output.textContent = "One of the numbers is 50 or their sum is 50.";
      output.style.color = "green";
    } else {
      output.textContent = "None of the numbers are 50 and their sum is not 50.";
      output.style.color = "red";
    }
  });
}

//Exercise 3
export function ex3(
  input: HTMLInputElement,
  button: HTMLButtonElement,
  output: HTMLDivElement
) {
  const names = ["Anna", "Johannes", "Paula", "Daisy"];

  button.addEventListener("click", () => {
    const search = input.value.trim();

    if (search === "") {
      output.textContent = "Please enter your name.";
      output.style.color = "orange";
      return;
    }

    const indexExact = names.indexOf(search);
    const existsExact = indexExact !== -1;


    const lowerNames = names.map((n) => n.toLowerCase());
    const lowerSearch = search.toLowerCase();
    const indexInsensitive = lowerNames.indexOf(lowerSearch);
    const existsInsensitive = indexInsensitive !== -1;

    output.style.color = "#111827";
    output.innerHTML = `
      <div><strong>List:</strong> ${names.join(", ")}</div>
      <div><strong>Exact search:</strong> ${
        existsExact
          ? `Found in the position ${indexExact}`
          : "Not found"
      }</div>
      <div><strong>Case-insensitive search:</strong> ${
        existsInsensitive
          ? `Found in the position ${indexInsensitive}`
          : "Not found"
      }</div>
    `;
  });
}

//Exercise 4
export function ex4(input: HTMLInputElement, button: HTMLButtonElement, output: HTMLDivElement) {
  button.addEventListener("click", () => {
    const str = input.value.trim();

    if (str.length === 0) {
      output.textContent = "Enter a word.";
      output.style.color = "orange";
      return;
    }

    if (str.length < 3) {
      output.textContent = "The word must have at least 3 characters.";
      output.style.color = "orange";
      return;
    }

    const lastThree = str.slice(-3);
    const result = lastThree + str + lastThree;

    output.textContent = "Result: " + result;
    output.style.color = "green";
  });
}

//Exercise 5
export function ex5(
  input: HTMLInputElement,
  button: HTMLButtonElement,
  output: HTMLDivElement
) {
  button.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") {
      output.textContent = "Please enter a name.";
      output.style.color = "orange";
      return;
    }

    const result = `${name} ${name.length * 2}`;
    output.textContent = `Result: ${result}`;
    output.style.color = "#111827";
  });
}

//Exercise 6
export function ex6(
  input: HTMLInputElement,
  button: HTMLButtonElement,
  output: HTMLElement
) {
  type AnimalInfo = { weight: number; origin: string };

  const zooAnimals: Record<string, AnimalInfo> = {
    giraffe: { weight: 910, origin: "Tanzania" },
    lion: { weight: 200, origin: "Tanzania" },
    elephant: { weight: 5000, origin: "India" },
    penguin: { weight: 30, origin: "Argentina" },
    koala: { weight: 10, origin: "Australia" },
    zebra: { weight: 300, origin: "Kenya" },
  };

  button.addEventListener("click", () => {
    console.log("EX6 click");

    const animal = input.value.trim().toLowerCase();

    if (animal === "") {
      output.textContent = "Write the name of an animal (es: giraffe, lion, penguin...)";
      output.style.color = "orange";
      return;
    }

    const info = zooAnimals[animal];

    if (!info) {
      output.textContent = "We don't have this animal in the zoo.";
      output.style.color = "red";
      return;
    }

    output.textContent = `${animal} weights ${info.weight} kg and comes from ${info.origin}`;
    output.style.color = "green";
  });
}
