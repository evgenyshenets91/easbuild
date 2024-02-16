# Eas Build
- Added a eas build to github actions. After successful assembly, additionally add a comment with a QR code and a URL to link to the build. Example below:
<img width="925" alt="image" src="https://github.com/evgenyshenets91/easbuild/assets/45641770/47c8c636-f686-4598-b9fa-c1f1c485d7d2">

- Added detox to project with one simple e2e test.

## Run detox locally:
- Be sure that your local system support `pixel_4` android simulator. If not, search `pixel_4` word inside code and change it to proper one, like `Pixel_6_Pro_API_34`.
- Example of the command: `detox test --inspect-brk -c android.release e2e/homescreen.test.js`

## Below example, how to run detox in pair with eas Build:
- `eas build --profile development --platform android --non-interactive -e test`
- If the build fails, you can go to expo.dev and download the artifacts.
