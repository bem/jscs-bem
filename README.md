# jscs-bem

Plugin for [`jscs`][] with `bem` code style preset.

## What is it?

A preset library for [`jscs`][] (code-style linter) with examples and `bem`-specific code-style checks.

### Presets inside

- `bem` — used in [`bem-core`][] v3+ code base and [`bem-components`][] v2+;
- `canonical-bem` — used in [`bem-core`][] v2 and [`bem-components`][] below v2.

## Usage

To use it you need fresh [`jscs`][], and simple `.jscsrc` file in your project root.

Run in your project root to quick start:
```sh
npm i jscs jscs-bem --save-dev
echo '{ plugins: ["jscs-bem"], preset: "bem" }' > .jscsrc
```

## Contribution

1. [File an issue](https://github.com/bem/jscs-bem/issues/new) with properly described suggestion or problem;
2. Decide which presets or rules your issue affects;
3. Create a feature-branch with an issue number (`issues/<issue_number>`). E.g. for an issue 42 it will looks like `issues/42`;
4. Commit changes with a proper message, e.g.:
  ```js
  <preset>: <short description>

  [<full description if needed>]

  Fixes #<issue_number>
  [Ref #<referenced issue/pr>]
  ```
5. Push and make a pull-request from your feature-branch.
6. Link your pull request with an issue number any way you like (if you forget to do it in commit message). A comment will work perfectly.
7. Wait for your pull request and the issue to be closed ;-)

## Licence

Code and documentation copyright 2015 YANDEX LLC. Code released under the [Mozilla Public License 2.0](LICENSE.txt).

[`jscs`]: http://jscs.info/
[`bem-core`]: http://bem.info/libs/bem-core
[`bem-components`]: http://bem.info/libs/bem-components
