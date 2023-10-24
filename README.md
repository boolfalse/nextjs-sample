
## Sample Next.js app



### About:

- Simple Next.js app that uses the OpenAI API to generate text based on a prompt.


### Development Setup:

- Clone the repo:
```shell
git clone git@github.com:boolfalse/nextjs-sample.git && cd nextjs-sample
```

1. Install dependencies (Node.js v18+)
```shell
npm install
```

2. Get the [Google OAuth credentials](https://console.cloud.google.com/apis/credentials).
- Create a new project in the Google Cloud Console
- Set up the OAuth consent screen
- Create an OAuth client ID
- Add the authorized redirect URI as `http://localhost:3000/api/auth/callback/google`
- Setup the `.env` file as described in `.env.example`
```shell
OAUTH_GOOGLE_CLIENT_ID="************-********************************.apps.googleusercontent.com"
OAUTH_GOOGLE_CLIENT_SECRET="******-****************************"
OAUTH_GOOGLE_REDIRECT_URI="http://localhost:3000/api/auth/callback/google"
```

3. Get the MongoDB credentials:
- Create a new project in the MongoDB Cloud
- Create a new cluster
- Create a new database user
- Setup the `.env` file as described in `.env.example`
```shell
MONGODB_DATABASE="<database>"
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority"
```

4. Setup NextAuth credentials:
- Run the following command:
```shell
openssl rand -base64 32
```
- Setup the `.env` file as described in `.env.example`
```shell
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
NEXTAUTH_SECRET="********************************************"
```

5. Run the app:
```shell
npm run dev
```

6. Open the app in the [browser](http://localhost:3000/).


### Resources:

- [Next.js Docs](https://nextjs.org/docs)
- [Next.js 13 Full Course 2023 | Build and Deploy a Full Stack App Using the Official React Framework](https://www.youtube.com/watch?v=wm5gMKuwSYk)
- [Official GitHub repo](https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing)
- [Starting snippets](https://gist.github.com/adrianhajdin/6df61c6cd5ed052dce814a765bff9032)
- [Official Demo](https://promptopia.vercel.app/)


### Author:

- [BoolFalse](https://boolfalse.com/)
