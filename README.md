# consultancy

The Software Consulting

At The Software Consulting, we turn ideas into impactful digital solutions. Whether you’re a startup looking to build from scratch or an enterprise ready to scale, our expert team delivers tailored software, sleek user experiences, and cutting-edge technology to help you stay ahead in a rapidly evolving digital world.

## Versioning

The application follows [Semantic Versioning](https://semver.org/) and uses the
version in `package.json` as its single source of truth. The current version is
included in production builds and displayed in the site footer.

Create a release with one of these commands:

```bash
npm run release:patch # backwards-compatible bug fix
npm run release:minor # backwards-compatible feature
npm run release:major # breaking change
```

Each command updates `package.json` and `package-lock.json`, creates a release
commit and Git tag, and runs npm's version lifecycle. Push both afterward:

```bash
git push origin main --follow-tags
```
