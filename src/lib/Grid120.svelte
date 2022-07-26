<script lang="ts">
  import Orb from './Orb.svelte';
  import { onMount } from 'svelte';
  import { PATTERNS, Color } from '../assets/constants';
  import { HAPPY_EMOTICONS, SAD_EMOTICONS } from '../assets/emoticons';
  import type { PatternI } from '../assets/constants';

  let pattern: PatternI;
  let success: boolean = null;
  let startTime: number; // in ms
  let elapsedTime: number; // in ms

  let toggleText: boolean = true;

  onMount(() => {
		setup();
	});

  function randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getRandomValueInArray(array: any[]): any {
    return array[randomIntFromInterval(0, array.length - 1)];
  }

  function setup(): void {
    success = null;
    pattern = getRandomValueInArray(PATTERNS);
    startTime = new Date().getTime();
  }

  function submit(color: Color): void {
    success = color === pattern.answer;
    elapsedTime = new Date().getTime() - startTime;
  }
</script>

<h4>Move to the correct clone</h4>
<div>
  You have 8sec to go to the clone before the first wipe attack
</div>
<div>
  <button on:click={() => toggleText = !toggleText} type="button" class="btn btn-primary">Change text</button>
</div>

<div class="wrapper mb-3">
  <div class="top"><Orb color={pattern?.grid.top}/></div>
  <div class="left"><Orb color={success !== null ? pattern?.grid.left : null}/></div>
  <div class="middle"><Orb color={pattern?.grid.middle}/></div>
  <div class="right"><Orb color={pattern?.grid.right}/></div>
  <div class="bottom"><Orb color={success !== null ? pattern?.grid.bottom : null}/></div>
</div>

<div class="d-flex justify-content-around mb-5">
  <button on:click={() => submit(Color.Red)} disabled={success !== null} type="button" class="btn btn-danger btn-lg">{toggleText ? 'Open' : '2'}</button>
  <button on:click={setup} type="button" class="btn btn-secondary btn-lg">Next</button>
  <button on:click={() => submit(Color.Purple)} disabled={success !== null} type="button" class="btn btn-purple btn-lg">{toggleText ? 'Closed' : '0'}</button>
</div>

{#if success !== null}
<div class="d-flex align-items-center flex-column">
  <div class="mb-2">
    {#if success}
      CORRECT {getRandomValueInArray(HAPPY_EMOTICONS)}
    {:else}
      YOU DIED {getRandomValueInArray(SAD_EMOTICONS)}
    {/if}
  </div>
  <div class="text-success">
    Time: <b>{elapsedTime / 1000}</b>sec
  </div>
</div>
{/if}

<style>
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
  }
  .wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top {
    grid-column: 2;
    grid-row: 1;
  }
  .left {
    grid-column: 1;
    grid-row: 2;
  }
  .middle {
    grid-column: 2;
    grid-row: 2;
  }
  .right {
    grid-column: 3;
    grid-row: 2;
  }
  .bottom {
    grid-column: 2;
    grid-row: 3;
  }
</style>