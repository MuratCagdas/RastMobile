import { Injectable } from '@angular/core';
import { SocialMediaModel } from 'src/app/Model/SocialMedia';

const socialmediaList: SocialMediaModel[] = [
  {
    __KEY__: 1,
    explanation: "We'll help you to finish your development project successfully.",
    link: 'instagram.com/mobilerast/',
    name: 'instagram'
  },
  {
    __KEY__: 2,
    explanation: "Hire vetted developers from Rast Mobile to scale up your tech projects.",
    link: 'tr.linkedin.com/company/rastmobile',
    name: 'linkedin'
  },
  {
    __KEY__: 3,
    explanation: "Software Development Agency Rast Mobile Information Technology Ltd.",
    link: 'behance.net/rastmobile',
    name: 'behance'
  },
  {
    __KEY__: 4,
    explanation: "Software Development Agency Rast Mobile Information Technology Ltd.",
    link: 'twitter.com/rastmobile',
    name: 'twitter'
  }
];




@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {

  constructor () { }

  // check local storage, If local storage is null , return socialmedialist(manual edited list) .  
  getSocialMediaList() {
    const medialist = JSON.parse(localStorage.getItem("dx-data-localStore-myLocalData"));

    return medialist ? medialist : socialmediaList;
  }

  // for pagesize
  getListNumber(){
    return this.getSocialMediaList().length;
  }

}
