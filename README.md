# TODO

- repo with code snippets for import? works, ineffecient (unless it's incremental in some way)
- own node server for fetching content?
  - Then it wont work if the build is remote (netlify) github pages with gh-pages will though
- figure somethin else out
- external links in new window
- base href to control build?
- FTP deploy
- Gauge component
- plugins: chalkboard, reveal menu

# Custom Slide Components

## `<SlideControls />`

TODO:

## `<Code ...props>`

| prop          | default | description                              |
| ------------- | ------- | ---------------------------------------- |
| `code`        | `null`  | The code to syntax highlight             |
| `startFrom`   | 1       | The first linenumber to show             |
| `lineNumbers` | `""`    | Highlight specific line, see Reveal docs |
| `stretch`     | `false` | Stretch code view, for large snippets    |
| `language`    | `"js"`  | code language, not tested                |
| `path`        | `null`  | TODO:                                    |

## `<Explainer ...props>`

| prop   | default | description                                          |
| ------ | ------- | ---------------------------------------------------- |
| `data` | `[]`    | an array containing data for the nested SVG elements |

### `<Explainer> children`

#### `<TextEl ...props>`

| props     | default | description                                        |
| --------- | ------- | -------------------------------------------------- |
| `x`       | `null`  | x coordinate                                       |
| `y`       | `null`  | y coordinate                                       |
| `text`    | `null`  | text                                               |
| `classes` | `""`    | classes to append to the element (like "fragment") |

Passed to `data` as an object:

```js
{
    type:"text",
    x:200,
    y:200,
    text: "'ere we go",
    classes: "fragment"
}
```

#### `<ArrowEl ...props>`

| props     | default | description                                        |
| --------- | ------- | -------------------------------------------------- |
| `d`       | `null`  | SVG path string, like "M170,50 L180,80"            |
| `classes` | `""`    | classes to append to the element (like "fragment") |

Passed to `data` as an object:

```js
{
    type:"arrow",
    d:"M170,50 L180,80",
    classes: "fragment"
}
```

#### `<RectEl ...props>`

| props        | default | description                                        |
| ------------ | ------- | -------------------------------------------------- |
| `x`          | `null`  | x coordinate                                       |
| `y`          | `null`  | y coordinate                                       |
| `width`      | `null`  | width                                              |
| `height`     | `null`  | height                                             |
| `pathLength` | `1`     | custom pathLength                                  |
| `animation`  | `""`    | custom class to append once shown as a fragment    |
| `classes`    | `""`    | classes to append to the element (like "fragment") |

Passed to `data` as an object:

```js
{
    type:"rect",
    x:200,
    y:200,
    width: 100,
    height:100,
    pathLength: 1,
    classes: "fragment",
    animation: "letsAnimateFast"
}
```

## `<Timer ...props>`

- time: 300
- width: 300
- height: 400
- TODO: on the actual project add minus 1, send width and height in url to make responsive iframes easier?

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).
