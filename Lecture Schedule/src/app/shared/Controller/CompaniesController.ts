export const CompaniesController = {
  GetBasicInfo: (id: string) => `companies/profile/basic-details`,
  UpdateCompanyBasicDetails: `companies/profile/basic-details`,
  UpdateCompanyWhoWeAre: `companies/profile/who-are-we`,
  UpdateCompanyWhatWeDo: `companies/profile/what-do-we-do`,
  UpdateCompanyDescription: `companies/profile/description`,
  UpdateImage: `companies/profile/image`,
  GetBasicDetilsForView:(id:string) => `companies/${id}/profile/basic-details`,
  GetImageUrl:`companies/profile/image-url`
}
