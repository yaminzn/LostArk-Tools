<script lang="ts">
  import { Color } from '../assets/constants';

  export let color: Color = null;
</script>

{#if color !== null}
<div class="wrapper" class:red={color === Color.Red} class:purple={color === Color.Purple}>
</div>
{:else}
<div class="wrapper d-flex align-items-center justify-content-center grey">
  ?
</div>
{/if}

<style>
  .wrapper {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .red {
    background-color: red;
  }
  .purple {
    background-color: purple;
  }
  .grey {
    color: white;
    background-color: grey;
  }
</style>