## Test Coverage

This doc is describing the general details of how can you handle tests across the app.

### Unit Testing

Please, check `__tests__` dir for examples.

There are two nested directories:

- `components`
- `utils`

Its appropriate naming as `app` dir did.

Each test will cover some UI or logic points that should change occasionally between updates.

### UI Snapshots usage

Check all available tests:
```
yarn test
```

You can update the failing snapshots with this command (DON'T DO IT EVERY TIME):
```
yarn test -u
```