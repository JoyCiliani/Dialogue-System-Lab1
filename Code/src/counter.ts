import { assign, createActor, setup } from "xstate";

const counterMachine = setup({
  types: {
    context: {} as { count: number },
    events: {} as { type: "INC" },
  },
}).createMachine({
  id: "counter",
  initial: "active",
  context: { count: 0 },

  states: {
    active: {
      on: {
        INC: {
          actions: assign({
            count: ({ context }) => context.count + 1,
          }),
        },
      },
    },
  },
});
export function setupCounter(element: HTMLButtonElement) {
 
  const actor = createActor(counterMachine);
  actor.subscribe((snapshot) => {
    console.log("snapshot:", snapshot);
    element.innerHTML = `count is ${snapshot.context.count}`;
  });

  actor.start();

  element.addEventListener("click", () => {
    actor.send({ type: "INC" });
  });

  element.innerHTML = `count is ${actor.getSnapshot().context.count}`;
}
