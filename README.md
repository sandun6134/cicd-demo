# cicd-demo
 # QA CI/CD Demo Project

This project demonstrates:

- Playwright automated test
- GitHub Actions CI pipeline
- Build failure & recovery

## How CI Works

Every push to `main`:

1. Installs dependencies
2. Installs Playwright browsers
3. Runs automated tests
4. Fails build if test fails

## Demo Steps

1. Run tests locally
2. Break test intentionally
3. Push changes
4. Observe failing pipeline
5. Fix test
6. Push again
7. Observe successful pipeline
