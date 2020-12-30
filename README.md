# extra-response

Utilities for [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response).

## Install

```sh
npm install --save extra-response
# or
yarn add extra-response
```

## API

### ok

```ts
ok(res: Response): Promise<Response>
```

If `res.ok` is `false`, it will throw `HTTPError`.

### toJSON

```ts
toJSON(res: Response): Promise<Json>
```

### toText

```ts
toText(res: Response): Promise<string>
```

### toLines

```ts
toLines(res: Response): AsyncIterable<string>
```

Only available on *browser*, because `node-fetch` is not provide the WHATWG `ReadableStream` as body.

### toNDJSON

```ts
toNDJSON(res: Response): AsyncIterable<Json>
```

Only available on *browser*, because `node-fetch` is not provide the WHATWG `ReadableStream` as body.
