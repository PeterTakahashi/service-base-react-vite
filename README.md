# 🚀 FastAPI Auth Starter Kit — Google & GitHub OAuth + React

This is a starter project for building an AI web service with FastAPI and React.

If you're using the [fastapi-users](https://github.com/fastapi-users/fastapi-users) library for authentication, you'll find there's a lot to set up: configuring APIs, setting up Google and GitHub OAuth, adding tests with pytest, setting up a code linter, and more. It can take a lot of time.

And if you rely too much on LLM-generated code, the result is often insecure and messy.

So I created this project to save you time and give you a clean starting point.

- Backend (FastAPI): [service-base-auth-fastapi](https://github.com/PeterTakahashi/service-base-auth-fastapi)
- Frontend (React + Vite): [service-base-auth-react-vite](https://github.com/PeterTakahashi/service-base-auth-react-vite)

## Backend Repository

https://github.com/PeterTakahashi/service-base-auth-fastapi

## Versions

- node 22.12.0
- react 19.1.0
- tailwindcss 4.1.7
- vite 6.3.5
- axios 1.9.0
- swr 2.3.3

## Get started

```sh
npm install
npm run dev
npm run storybook # if you want to see storybook
```

## openapi type rebuild

```
npx openapi-typescript config/openapi.json --output src/types/api/base.ts
```

## screan shots

### SignIn

<img src="docs/img/auth/SignIn.png" width="600" />

### SignUp

<img src="docs/img/auth/SignUp.png" width="600" />

### Forgot Password

<img src="docs/img/auth/ForgotPassword.png" width="600" />

### Check Your Email

<img src="docs/img/auth/CheckYourEmail.png" width="600" />

### Not Verified

<img src="docs/img/auth/NotVerified.png" width="600" />

### Home Page

<img src="docs/img/auth/HomePage.png" width="600" />

### Storybook

<img src="docs/img/storyboard/AuthForm.png" width="600" />
