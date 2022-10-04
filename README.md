# sagittal-general

general utilities for the Sagittal notation system

## development

`make build` builds two versions of the package: one with CJS modules and one with ESM modules; otherwise exactly the
same. This is so the project can be used isomorphically (in both Node and the browser). The two packages are exposed
as `main` and `module`, respectively. `sideEffects: false` has been marked in `package.json` to allow the ESM version to
be tree-shaken by consumers.
