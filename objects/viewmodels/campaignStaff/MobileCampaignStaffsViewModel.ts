import { UserViewModel } from "../users/UserViewModel";

export interface MobileCampaignStaffsViewModel
{
    staffId : string;
    status : number;
    statusName : string;
    staff : UserViewModel;
}