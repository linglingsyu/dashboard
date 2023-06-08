import { defineStore } from 'pinia';
import { API } from 'aws-amplify';
import dayjs from 'dayjs';

export const AccountStore = defineStore('Account', {
  state: () => ({
    CompanyData: {
      CompanyList: [],
    },
    RootUserData: [],
    Loading: false,
  }),
  getters: {
    CompanyProfile: ({ CompanyData }) => {
      for (const item of Object.entries(CompanyData.CompanyList)) {
        console.log(item[1].DurationDate);
        if (item[1].DurationDate) {
          item[1].DurationDateFormat = dayjs
            .unix(item[1].DurationDate)
            .format('YYYY-MM-DD');
        } else {
          item[1].DurationDateFormat = '';
        }
      }
      return CompanyData.CompanyList;
    },
    RootUser: ({ RootUserData }) => RootUserData,
    isLoading: ({ Loading }) => Loading,
  },
  actions: {
    async CreateCompanyProfile(companyName) {
      try {
        const reqInit = {
          body: { CompanyName: companyName },
        };
        this.Loading = true;
        const path = '/CreateCompanyProfile';
        const promise = API.post('APIGateway', path, reqInit);
        const response = await promise;
        if (response.status.code !== 0) {
          throw 'response status code: ' + response.status.code;
        }
        this.Loading = false;
        this.router.push({ name: 'AccountList' });
      } catch (error) {
        this.Loading = false;
        if (API.isCancel(error)) {
          console.log(error.message);
        } else {
          // alert(error)
        }
      }
    },
    async ListCompanyProfile() {
      try {
        const reqInit = {
          body: {},
        };
        this.Loading = true;
        const path = '/ListCompanyProfile';
        const promise = API.post('APIGateway', path, reqInit);
        const response = await promise;
        if (response.status.code !== 0) {
          throw 'response status code: ' + response.status.code;
        }
        this.CompanyData = response.results;
        this.Loading = false;
      } catch (error) {
        this.Loading = false;
        if (API.isCancel(error)) {
          console.log(error.message);
        } else {
          // alert(error)
        }
      }
    },
    async CreateRootUser(data) {
      try {
        const reqInit = {
          body: data,
        };
        this.Loading = true;
        const path = '/CreateRootUser';
        const promise = API.post('APIGateway', path, reqInit);
        const response = await promise;
        if (response.status.code !== 0) {
          throw new Error(response.status.error);
        }
        this.Loading = false;
        this.router.push({ name: 'AccountList' });
      } catch (error) {
        this.Loading = false;
        if (API.isCancel(error)) {
          console.log(error.message);
        } else {
          throw new Error('error!!!');
        }
      }
    },
    async ListRootUser() {
      try {
        const reqInit = {
          body: {},
        };
        this.Loading = true;
        const path = '/ListRootUser';
        const promise = API.post('APIGateway', path, reqInit);
        const response = await promise;
        if (response.status.code !== 0) {
          console.log(response);
          throw new Error('response status code: ' + response.status.code);
        }
        this.RootUserData = response.results;
        this.Loading = false;
      } catch (error) {
        this.Loading = false;
        if (API.isCancel(error)) {
          console.log(error.message);
        } else {
          alert(error);
        }
      }
    },
  },
});
