import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import AmplifyVue from '@aws-amplify/ui-vue';
import { Amplify, Auth } from 'aws-amplify';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// import awsconfig from './aws-exports';
import '@aws-amplify/ui-vue/styles.css';
import './assets/main.css';

Amplify.configure({
  Auth: {
    // (required) only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'ap-northeast-1:a6f421dd-15db-4135-bcc9-b037993fec41',

    // (required)- Amazon Cognito Region
    region: 'ap-northeast-1',

    // (optional) - Amazon Cognito Federated Identity Pool Region
    // Required only if it's different from Amazon Cognito Region
    identityPoolRegion: 'ap-northeast-1',

    // (optional) - Amazon Cognito User Pool ID
    userPoolId: 'ap-northeast-1_6Yy9UDIT5',

    // (optional) - Amazon Cognito Web Client ID (26-char alphanumeric string, App client secret needs to be disabled)
    userPoolWebClientId: '2bkmhp56cpnmffj25blf8ht2f6',

    // (optional) - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: true,

    // (optional) - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: 'USER_PASSWORD_AUTH',

    // (optional) - Hosted UI configuration
    // oauth: {
    //   domain: 'your_cognito_domain',
    //   scope: [
    //     'phone',
    //     'email',
    //     'profile',
    //     'openid',
    //     'aws.cognito.signin.user.admin',
    //   ],
    //   redirectSignIn: 'http://localhost:3000/',
    //   redirectSignOut: 'http://localhost:3000/',
    //   clientId: '1g0nnr4h99a3sd0vfs9',
    //   responseType: 'code', // or 'token', note that REFRESH token will only be generated when the responseType is code
    // },
  },
  API: {
    endpoints: [
      {
        name: 'APIGateway',
        endpoint: import.meta.env.VITE_API_ENDPOINT,
        // endpoint: 'https://dkesg-console-api.sigmacasa.com',
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
});

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(AmplifyVue);
app.component('Loading', Loading);
app.mount('#app');

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
