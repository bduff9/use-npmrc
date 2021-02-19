# Using .npmrc files in Github Actions

![Use .npmrc](https://github.com/bduff9/use-npmrc/workflows/ci/badge.svg)

This action creates a .npmrc file during Github Actions.  This is useful when needing to authenticate any private dependencies, such as private npm packages (FontAwesome Pro, for instance), Github private packages, etc.

## Inputs

### `dot-npmrc`

**Required** The contents of the .npmrc file.  If you have one locally, copy its contents into a Github secret and reference that here.

### `working directory`

**Required** The directory to create the .npmrc file in. Default `"."` for project root.

## Example usage

```Yaml
  - name: Use .npmrc
    uses: bduff9/use-npmrc@v1
    with:
      dot-npmrc: ${{ secrets.DOT_NPMRC }}
```
