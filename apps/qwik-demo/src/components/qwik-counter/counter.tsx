import { component$, useSignal, $ } from "@builder.io/qwik";

const Counter = component$(() => {
  const count = useSignal(0);

  const handleClick$ = $(() => {
    count.value++;
  });

  return <button onClick$={handleClick$}>{count.value}</button>;
});

export default Counter;
