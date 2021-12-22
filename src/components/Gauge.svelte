<div id="gauge2" class="gauge-container two" />

<style>
  .reveal .gauge-container {
    width: 50vh;
    height: 50vh;
    display: block;
    padding: 10px;
    position: absolute;
    bottom: 0px;
  }
  .gauge-container svg {
    width: 100%;
    height: 100%;
  }
  .gauge-container > .gauge > .dial {
    stroke: #334455;
    stroke-width: 20;
    fill: rgba(0, 0, 0, 0);
  }
  .gauge-container > .gauge > .value {
    stroke: rgb(47, 227, 255);
    stroke-width: 20;
    fill: rgba(0, 0, 0, 0);
  }
  .gauge-container > .gauge > .value-text {
    fill: rgb(47, 227, 255);
    font-family: sans-serif;
    font-weight: bold;
    font-size: 8em;
  }
  /* ------- Alternate Style ------- */
  .gauge-container.two {
  }
  .gauge-container.two > .gauge > .dial {
    stroke: #334455;
    stroke-width: 100;
  }
  .gauge-container.two > .gauge > .value {
    stroke: orange;
    stroke-dasharray: none;
    stroke-width: 130;
  }
  .gauge-container.two > .gauge > .value-text {
    fill: orange;
  }
</style>
