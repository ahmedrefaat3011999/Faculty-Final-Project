export const ClientsController = {
    GetBasicInfo: (id: string) => `clients/profile/basic-details`,
    Getcategorization: (id: string) => `clients/${id}/profile/categorization`,
    UpdateClientBasicDetails: `clients/profile/basic-details`,
    UpdateClientWhoAmI: `clients/profile/who-i-am`,
    UpdateClientWhatIDo: `clients/profile/what-do-I-do`,
    UpdateClientDescription: `clients/profile/description`,
    Updatecategorization: `clients/profile/categorization`,
    UpdateImage: `clients/profile/image`,
    GetBasicDetilsForView:(id:string) => `clients/${id}/profile/basic-details`,
    GetImageUrl:`clients/profile/image-url`
}
