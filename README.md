# max-npm-quality

Optimize the npm quality score of your (typescript) project on npmjs.org by adding these files and dependencies:
- index.js
- package.json
- README.md
- LICENSE.md
- index.test.ts (size > 400 bytes?)
- tslint devDependency

Current quality score: [89%](https://www.npmjs.com/search?q=max-npm-quality)

The documentation of npmjs.org states:
> Quality includes considerations such as the presence of a README file, stability, tests, up-to-date dependencies, custom website, and code complexity.
[sourc](https://docs.npmjs.com/searching-for-and-choosing-packages-to-download#quality)
 
This minimal project is a proof of concept, testing the files and other characteristics that npmjs.org uses to determine the quality score of packages.
It is work in progress: you know how to improve this score? Please create an issue or submit a PR :D

