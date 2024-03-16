export interface IEnvironmentModel {
    config?: IConfigModel;
  }
  
  export interface IConfigModel {
    production?: boolean;
    environmentName?: string;
    apiConfig?: IApiConfig;
  }
  
  export interface IApiConfig {
    apiUrl?: string;
    uiUrl?: string;
    adminUiUrl?: string;
    apiVersion: 1;
  }
  